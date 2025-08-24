// utils/generatePromptDocs.js
require("dotenv").config();
const fs = require("fs");
const fsp = fs.promises;
const path = require("path");
const crypto = require("crypto");

// ------------ CONFIG ------------
const ROOT_PROMPTS_DIR = path.join(__dirname, "..", "chatgpt_3k_prompts");
const OUTPUT_EXT = ".md";

// Model + batching
const MODEL = process.env.OPENAI_MODEL || "gpt-4o";
const MAX_TOKENS = parseInt(process.env.PROMPTDOCS_MAX_TOKENS || "3500", 10);
const CONCURRENCY = parseInt(process.env.PROMPTDOCS_CONCURRENCY || "3", 10);
const MAX_RETRIES = parseInt(process.env.PROMPTDOCS_MAX_RETRIES || "6", 10);
const BASE_DELAY_MS = parseInt(process.env.PROMPTDOCS_BASE_DELAY_MS || "750", 10);
const MAX_DELAY_MS = parseInt(process.env.PROMPTDOCS_MAX_DELAY_MS || "20000", 10);

// Budgets & targets (tokens). We’ll translate to chars internally (≈*4).
const INPUT_CAP_TOKENS   = parseInt(process.env.PROMPTDOCS_INPUT_CAP_TOKENS   || "10000", 10); // per file
const OUTPUT_MINX_TOKENS = parseFloat(process.env.PROMPTDOCS_OUTPUT_MINX_TOKENS || "2");       // multiplier of input
const OUTPUT_CAP_TOKENS  = parseInt(process.env.PROMPTDOCS_OUTPUT_CAP_TOKENS  || "20000", 10); // per file

// Expansion passes if still under target after first sweep
const MAX_EXPANSION_ROUNDS = parseInt(process.env.PROMPTDOCS_MAX_EXPANSIONS || "3", 10);

// Approx conversion: 1 token ≈ 4 chars (English)
const TOK2CHAR = 4;
const INPUT_CAP_CHARS  = INPUT_CAP_TOKENS  * TOK2CHAR;
const OUTPUT_CAP_CHARS = OUTPUT_CAP_TOKENS * TOK2CHAR;

const BATCH_SIZE = parseInt(process.env.PROMPTDOCS_BATCH_SIZE || "30", 10);
const OVERWRITE  = String(process.env.PROMPTDOCS_OVERWRITE || "1") === "1";
const PROGRESS_PATH = process.env.PROMPTDOCS_PROGRESS || path.join(__dirname, "..", ".promptdocs-progress.json");

// ------------ HELPERS ------------
const sleep  = (ms) => new Promise(r => setTimeout(r, ms));
const jitter = (ms) => Math.floor(ms * (0.5 + Math.random()));
const backoff = (attempt) => Math.min(MAX_DELAY_MS, BASE_DELAY_MS * 2 ** attempt);
const idemKey = () => crypto.randomBytes(16).toString("hex");

function estTokensFromChars(charCount) { return Math.ceil(charCount / TOK2CHAR); }
function charsFromTokens(tokens) { return tokens * TOK2CHAR; }

function boundChars(text, maxChars) {
  if (!text) return "";
  const s = String(text);
  return s.length > maxChars ? s.slice(0, maxChars) + "\n...[truncated]" : s;
}

async function loadProgress() {
  try { return JSON.parse(await fsp.readFile(PROGRESS_PATH, "utf8")); }
  catch { return { done: {}, batches: {}, meta: {} }; }
}
async function saveProgress(state) {
  await fsp.writeFile(PROGRESS_PATH, JSON.stringify(state, null, 2));
}

function listTxtFiles(dir) {
  const out = [];
  const stack = [dir];
  while (stack.length) {
    const d = stack.pop();
    const items = fs.readdirSync(d, { withFileTypes: true });
    for (const ent of items) {
      const p = path.join(d, ent.name);
      if (ent.isDirectory()) stack.push(p);
      else if (ent.isFile() && p.toLowerCase().endsWith(".txt")) out.push(p);
    }
  }
  return out.sort();
}

// Heuristic: pull one prompt per non-empty line, grouping multi-line bullets into blocks.
function extractPrompts(raw) {
  const lines = raw.replace(/\r\n/g, "\n").split("\n");
  const blocks = [];
  let cur = [];
  for (const ln of lines) {
    const s = ln.trim();
    if (!s) { if (cur.length) { blocks.push(cur.join(" ").trim()); cur = []; } continue; }
    if (/^(\d+[\).\s]+|[-*•]\s+)/.test(s) && cur.length) {
      blocks.push(cur.join(" ").trim());
      cur = [s.replace(/^(\d+[\).\s]+|[-*•]\s+)/, "")];
    } else {
      cur.push(s.replace(/^(\d+[\).\s]+|[-*•]\s+)/, ""));
    }
  }
  if (cur.length) blocks.push(cur.join(" ").trim());
  if (blocks.length < 5) {
    return lines.map(x => x.trim()).filter(Boolean);
  }
  return blocks;
}

function chunk(arr, size) {
  const out = [];
  for (let i = 0; i < arr.length; i += size) out.push(arr.slice(i, i + size));
  return out;
}

// ------------ OPENAI ------------
async function callOpenAI({ prompt }) {
  if (!process.env.OPENAI_API_KEY) throw new Error("Missing OPENAI_API_KEY");

  for (let attempt = 0; attempt <= MAX_RETRIES; attempt++) {
    try {
      const res = await fetch("https://api.openai.com/v1/chat/completions", {
        method: "POST",
        headers: {
          "Authorization": `Bearer ${process.env.OPENAI_API_KEY}`,
          "Content-Type": "application/json",
          "Idempotency-Key": idemKey(),
        },
        body: JSON.stringify({
          model: MODEL,
          messages: [{ role: "user", content: prompt }],
          temperature: 0.6,
          max_tokens: MAX_TOKENS,
        }),
      });

      if (res.status === 429 || res.status === 409 || res.status === 503) {
        const ra = parseFloat(res.headers.get("retry-after"));
        const waitMs = Number.isFinite(ra) ? Math.max(1000, ra * 1000) : jitter(backoff(attempt));
        console.warn(`Rate limited (${res.status}). Retrying in ${waitMs}ms…`);
        await sleep(waitMs);
        continue;
      }

      if (!res.ok) {
        const text = await res.text().catch(() => "");
        throw new Error(`OpenAI ${res.status}: ${text.slice(0, 500)}`);
      }

      const json = await res.json();
      return json?.choices?.[0]?.message?.content || "";
    } catch (err) {
      const retriable = /429|409|500|502|503|504/.test(String(err.message));
      if (!retriable || attempt === MAX_RETRIES) throw err;
      const waitMs = jitter(backoff(attempt));
      console.warn(`Transient error. Retry ${attempt + 1}/${MAX_RETRIES} in ${waitMs}ms…`);
      await sleep(waitMs);
    }
  }
}

// ------------ PROMPTS (header, batches, expansion) ------------
function buildHeaderMarkdown({ category, relPath, title }) {
  const safeTitle = title.replace(/\.md$/i, "");
  return `# ${safeTitle}

**Category:** ${category}  
**Source:** \`${relPath}\`

## File Synopsis
- Why it matters (WIIFM)
- Key outcomes the prompts enable
- Who benefits
- Where it fits in a workflow
- Risks & guardrails

## Prompt-by-Prompt Guide
*(Generated in batches below.)*
`;
}

function buildBatchLLMPrompt({ category, relPath, batchIndex, totalBatches, prompts }) {
  const joined = prompts.map((p, i) => `P${i + 1}: ${p}`).join("\n");
  return `
You are given a slice of prompts from a .txt file. Produce **Markdown** that only contains *Prompt-by-Prompt* sections for these items. Do NOT repeat the file header or add tables. Keep formatting consistent across batches.

For each prompt, output:

### Prompt: "<verbatim prompt text>"
- **What it’s for:** 1–2 lines.
- **How to use:** exact inputs/instructions (bullets).
- **Example:** one small input + expected output sketch.
- **Automation play (n8n agent):** how to wire this into an agent.
- **Suggested nodes/tools:** n8n nodes + APIs (HTTP Request, OpenAI, Google Sheets, Airtable, Notion, Webhook, Cron, etc).

Constraints:
- Be concise and skimmable.
- Keep the order of prompts.
- Do not include any overall summary or tables—just the per-prompt sections.

**Category:** ${category}
**File:** ${relPath}
**Batch:** ${batchIndex + 1} of ${totalBatches}

**Prompts in this batch (verbatim):**
${boundChars(joined, 200000)}
`.trim();
}

function buildExpansionPrompt({ category, relPath, prompts }) {
  const joined = prompts.map((p, i) => `P${i + 1}: ${p}`).join("\n");
  return `
You previously produced prompt-by-prompt sections for this file. Append **additional depth** for each prompt below without repeating earlier text. Focus on:
- Advanced usage patterns
- More detailed examples (inputs/outputs)
- Additional automation variants (multi-step agents)
- Edge cases and testing tips
- Extra nodes/APIs that pair well

Output pure **Markdown** sections that continue the existing "Prompt-by-Prompt Guide". Do not add headers or tables. Append only new material.

**Category:** ${category}
**File:** ${relPath}

**Prompts to deepen (verbatim):**
${boundChars(joined, 200000)}
`.trim();
}

// ------------ RUNNER ------------
async function generateDocsForAllPromptFiles() {
  console.log("🔎 Scanning:", ROOT_PROMPTS_DIR);
  const files = listTxtFiles(ROOT_PROMPTS_DIR);
  if (!files.length) { console.log("No .txt files found. Exiting."); return; }
  console.log(`Found ${files.length} files.`);

  const progress = await loadProgress();
  let processed = 0;

  async function worker(startIndex) {
    for (let i = startIndex; i < files.length; i += CONCURRENCY) {
      const absPath = files[i];
      const relPath = path.relative(ROOT_PROMPTS_DIR, absPath);
      const category = relPath.split(path.sep)[0] || "General";
      const outPath = absPath.replace(/\.txt$/i, OUTPUT_EXT);
      const title = path.basename(outPath);

      try {
        // Read and cap input by chars (token cap)
        let raw = await fsp.readFile(absPath, "utf8");
        if (raw.length > INPUT_CAP_CHARS) raw = raw.slice(0, INPUT_CAP_CHARS) + "\n...[input truncated to cap]";
        const inputTokens = estTokensFromChars(raw.length);

        // Compute per-file targets
        const requiredOutputTokens = Math.min(OUTPUT_CAP_TOKENS, Math.ceil(inputTokens * OUTPUT_MINX_TOKENS));
        const requiredOutputChars  = charsFromTokens(requiredOutputTokens);

        const prompts = extractPrompts(raw).filter(Boolean);
        const chunks = chunk(prompts, BATCH_SIZE);
        const totalBatches = chunks.length;

        // Overwrite/resume handling
        if (OVERWRITE) {
          try { await fsp.unlink(outPath); } catch {}
          progress.batches[relPath] = { done: 0, total: totalBatches, expansions: 0 };
          delete progress.done[relPath];
        } else {
          if (!progress.batches[relPath]) progress.batches[relPath] = { done: 0, total: totalBatches, expansions: 0 };
        }

        // Write header once
        if (!fs.existsSync(outPath)) {
          const header = buildHeaderMarkdown({ category, relPath, title });
          await fsp.writeFile(outPath, header, "utf8");
        }

        // Process regular batches
        for (let b = progress.batches[relPath].done; b < totalBatches; b++) {
          const mdSoFar = await fsp.readFile(outPath, "utf8");
          if (mdSoFar.length >= requiredOutputChars) break; // already met target

          const batchPrompts = chunks[b];
          const llmPrompt = buildBatchLLMPrompt({ category, relPath, batchIndex: b, totalBatches, prompts: batchPrompts });
          const mdSection = await callOpenAI({ prompt: llmPrompt });
          await fsp.appendFile(outPath, "\n" + mdSection + "\n", "utf8");

          progress.batches[relPath].done = b + 1;
          await saveProgress(progress);

          console.log(`[${processed + 1}/${files.length}] 📦 ${relPath} – batch ${b + 1}/${totalBatches} (model=${MODEL})`);
          await sleep(200);
        }

        // Expansion rounds if target not met
        let mdNow = await fsp.readFile(outPath, "utf8");
        let rounds = 0;
        while (mdNow.length < requiredOutputChars && rounds < MAX_EXPANSION_ROUNDS) {
          // Expand all prompts (or last 50) to add depth
          const expandSlice = prompts.slice(-Math.min(prompts.length, Math.max(30, Math.floor(BATCH_SIZE * 1.5))));
          const expPrompt = buildExpansionPrompt({ category, relPath, prompts: expandSlice });
          const extra = await callOpenAI({ prompt: expPrompt });
          await fsp.appendFile(outPath, "\n" + extra + "\n", "utf8");

          rounds++;
          progress.batches[relPath].expansions = rounds;
          await saveProgress(progress);

          mdNow = await fsp.readFile(outPath, "utf8");
          console.log(`➕ Expansion ${rounds}/${MAX_EXPANSION_ROUNDS} for ${relPath} (len=${mdNow.length} chars; target=${requiredOutputChars})`);
          await sleep(200);
        }

        // Final cap: if somehow exceeded the hard cap by chars, trim
        if (mdNow.length > OUTPUT_CAP_CHARS) {
          await fsp.writeFile(outPath, mdNow.slice(0, OUTPUT_CAP_CHARS) + "\n\n...[output truncated to cap]\n", "utf8");
        }

        processed++;
        progress.done[relPath] = true;
        await saveProgress(progress);
      } catch (err) {
        console.error(`❌ ${relPath}: ${err.message}`);
      }
    }
  }

  await Promise.all([...Array(CONCURRENCY)].map((_, k) => worker(k)));
  console.log(`\n🎉 Finished. Files processed: ${processed}/${files.length}. Concurrency=${CONCURRENCY}, BATCH_SIZE=${BATCH_SIZE}, Overwrite=${OVERWRITE}`);
}

// CLI entry
if (require.main === module) {
  generateDocsForAllPromptFiles().catch(err => {
    console.error("Fatal error:", err);
    process.exit(1);
  });
}

module.exports = { generateDocsForAllPromptFiles };
