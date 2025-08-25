// generateAllReadmes.js
require("dotenv").config();
const fs = require("fs");
const fsp = fs.promises;
const path = require("path");
const crypto = require("crypto");

// --- Existing imports from your project ---
const { generateHumanReadableName } = require("./namingUtils");

// --- Load Contextual Data (unchanged) ---
const projectOverviewContent = fs.readFileSync(path.join(__dirname, "..", "PROJECT_OVERVIEW.md"), "utf8");
const jeopardyContent = fs.readFileSync(path.join(__dirname, "..", "Jeopardy.md"), "utf8");
const courseIndex = fs.readFileSync(path.join(__dirname, "..", "_course_content", "index.md"), "utf8");
const coursePart1 = fs.readFileSync(path.join(__dirname, "..", "_course_content", "01_foundations_of_automation.md"), "utf8");
const coursePart2 = fs.readFileSync(path.join(__dirname, "..", "_course_content", "02_nodes_data_flow.md"), "utf8");
const coursePart3 = fs.readFileSync(path.join(__dirname, "..", "_course_content", "03_first_automations.md"), "utf8");
const coursePart4 = fs.readFileSync(path.join(__dirname, "..", "_course_content", "04_application_review_ai.md"), "utf8");
const coursePart5 = fs.readFileSync(path.join(__dirname, "..", "_course_content", "05_rag_vector_databases.md"), "utf8");
const coursePart6 = fs.readFileSync(path.join(__dirname, "..", "_course_content", "06_multi_tool_agents.md"), "utf8");
const coursePart7 = fs.readFileSync(path.join(__dirname, "..", "_course_content", "07_apis_http_requests.md"), "utf8");
const coursePart8 = fs.readFileSync(path.join(__dirname, "..", "_course_content", "08_error_best_practices.md"), "utf8");
const coursePart9 = fs.readFileSync(path.join(__dirname, "..", "_course_content", "09_real_world_use_cases.md"), "utf8");
const coursePart10 = fs.readFileSync(path.join(__dirname, "..", "_course_content", "10_scaling_service_provider.md"), "utf8");
const coursePart11 = fs.readFileSync(path.join(__dirname, "..", "_course_content", "11_future_of_automation.md"), "utf8");
const exampleReadme = fs.readFileSync(
  path.join(__dirname, "..", "workflows", "AI Agent Development", "0026_Mailcheck_Airtable_Monitor.md"),
  "utf8"
);

// --- Config knobs (env overridable) ---
// --- Config knobs (env overridable) ---
const CONCURRENCY = parseInt(process.env.README_CONCURRENCY || "3", 10);
const MAX_RETRIES = parseInt(process.env.README_MAX_RETRIES || "6", 10);
const BASE_DELAY_MS = parseInt(process.env.README_BASE_DELAY_MS || "750", 10);
const MAX_DELAY_MS = parseInt(process.env.README_MAX_DELAY_MS || "20000", 10);
const MAX_CONTEXT_CHARS = parseInt(process.env.MAX_CONTEXT_CHARS || "200000", 10);
const MODEL = process.env.OPENAI_MODEL || "gpt-4o";  // existing default model

// **New environment-driven flags for GPT-5 integration**:
const USE_GPT5_ANALYSIS = String(process.env.USE_GPT5_ANALYSIS || "").toLowerCase() === "true";
const MODEL_GPT5 = process.env.OPENAI_MODEL_GPT5 || "gpt-4";      // model to use for GPT-5 analysis
const MODEL_MINI = process.env.OPENAI_MODEL_MINI || "gpt-4o-mini"; // model to use for README generation (GPT-4o-mini)
const PROGRESS_PATH = process.env.README_PROGRESS_PATH || 
    path.join(__dirname, "..", ".readme-progress.json");


// --- Helpers ---
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
const jitter = (ms) => Math.floor(ms * (0.5 + Math.random())); // 50%..150%
const backoffDelay = (attempt) => Math.min(MAX_DELAY_MS, BASE_DELAY_MS * 2 ** attempt);
const idemKey = () => crypto.randomBytes(16).toString("hex");

async function loadProgress() {
  try { return JSON.parse(await fsp.readFile(PROGRESS_PATH, "utf8")); }
  catch { return { done: {} }; }
}
async function saveProgress(state) {
  await fsp.writeFile(PROGRESS_PATH, JSON.stringify(state, null, 2));
}
function bound(text) {
  if (!text) return "";
  const s = String(text);
  return s.length > MAX_CONTEXT_CHARS ? s.slice(0, MAX_CONTEXT_CHARS) + "\n...[truncated]" : s;
}

// --- Promotional block (unchanged) ---
const promotionalBlock = `
### ⚠️ Automation Ain’t the Same Anymore

Most builders out here are stuck doing $500 workflows and calling it a win.  
That’s not the move.  

I'm closing $6k–$13k deals by stacking simple automations with lightweight AI...  
and it takes me under 2 hours to build most of them.

#### 🧠 Examples From My Own Playbook:
- 🔁 Turned a recurring invoice workflow into a $6,000 retainer that saved 20 hours/week  
- ⚖️ Built an AI-powered lead gen engine for law firms — they paid $13,000 happily  
- 🚀 Launched an SEO agent that outperforms funded companies — using free OpenAI credits  

**Want to learn how to do the same?**  
Inside [Digital Boss Code](https://bigpoppacode.io/go/dbc), I break it all down:

✅ The exact AI components that 3x your pricing overnight  
✅ My $15k Automation Framework using n8n + LangChain  
✅ Word-for-word scripts to close high-ticket deals  
✅ Real client case studies with templates  
✅ How to stop looking like a tech VA and start moving like a Solution Architect  

🔥 Get started at → [bigpoppacode.io/go/dbc](https://bigpoppacode.io/go/dbc)  
Limited time access, early birds get the best bonuses.

---
> Built by [Big Poppa Code](https://bigpoppacode.io) – architecting automations that scale people, profits, and purpose.`;

// --- Your analysis function (kept, minor safety tweaks) ---
// const analyzeWorkflow = (jsonContent) => {
//   const nodes = jsonContent?.nodes || [];
//   if (nodes.length === 0) return null;

//   const nodeTypes = new Set(nodes.map((n) => (n.type || "").split(".").pop()));
//   const nodeNames = nodes.map((n) => n.name || "Node");

//   const triggerNode =
//     nodes.find((n) => (n.type || "").toLowerCase().includes("trigger")) || nodes[0] || {};

//   let triggerDescription = `This workflow starts with a **${triggerNode.name || "Trigger"}** node.`;
//   const t = (triggerNode.type || "").toLowerCase();
//   if (t.includes("schedule")) {
//     triggerDescription =
//       "This workflow is designed to run on a schedule. Configure the interval in the Schedule node.";
//   } else if (t.includes("webhook")) {
//     triggerDescription = "This workflow is triggered by an incoming webhook. It acts as a live API endpoint.";
//   }

//   let whatItDoes = `This workflow automates a process involving ${[...nodeTypes].slice(0, 3).join(", ")}.`;
//   if (nodeTypes.has("OpenAI") && nodeTypes.has("YoutubeDL")) {
//     whatItDoes =
//       "This workflow downloads a YouTube transcript, sends it to OpenAI for summarization, and extracts key insights.";
//   }

//   let useCase =
//     "Use it to automate research, content creation, or data analysis. It saves hours of manual work.";
//   if (whatItDoes.toLowerCase().includes("youtube") && whatItDoes.toLowerCase().includes("openai")) {
//     useCase =
//       "Great for creators and marketers. Generate show notes, blog drafts, or competitive analysis from any video.";
//   }

//   const howItWorksSteps = [];
//   nodes.forEach((node, index) => {
//     howItWorksSteps.push(
//       `**Step ${index + 1}: ${node.name || "Node"} (${(node.type || "").split(".").pop()})** - ${
//         node.parameters?.notes || "This step performs a key action in the workflow."
//       }`
//     );
//   });

//   const setupInstructions = [
//     `**Connect Credentials:** OpenAI, Google Sheets, Slack, and other nodes must be authenticated.`,
//     `**Customize Core Logic:** Review "${nodeNames[0]}" and "${nodeNames[nodeNames.length - 1]}" for IDs, table names, and URLs.`,
//     `**Activate the Workflow:** Set the workflow to "Active" after testing.`,
//   ];

//   return { whatItDoes, useCase, howItWorks: howItWorksSteps, setup: setupInstructions, trigger: triggerDescription };
// };

// ---------- helpers for analyzeWorkflow ----------
function redact(v) {
    if (v == null) return "";
    const s = String(v);
    if (!s) return "";
    // crude secret redaction
    if (/api[_-]?key|token|secret|password|authorization/i.test(s)) return "[redacted]";
    // trim super long
    return s.length > 180 ? s.slice(0, 180) + "…[truncated]" : s;
  }
  
  function summarizeList(arr, n = 3) {
    const counts = new Map();
    arr.forEach((x) => counts.set(x, (counts.get(x) || 0) + 1));
    const sorted = [...counts.entries()].sort((a, b) => b[1] - a[1]);
    const top = sorted.slice(0, n).map(([k, c]) => `${k}${c > 1 ? `×${c}` : ""}`);
    return top.join(", ");
  }
  
  function buildGraph(nodes, connections = {}) {
    // nodes: [{id,name,type,parameters,...}]
    const byId = new Map(nodes.map((n) => [n.id, n]));
    const out = new Map(); // id -> ids it leads to
    const indeg = new Map(nodes.map((n) => [n.id, 0]));
  
    // n8n connections shape: { [nodeName]: { main: [[ { node: 'X', type: 'main', index: 0 } , ... ]] } }
    // Some exports include connections on "connections" field; some within nodes. We try the top-level first.
    if (connections && typeof connections === "object") {
      for (const [fromName, conn] of Object.entries(connections || {})) {
        const mains = (conn && conn.main) || [];
        mains.forEach((lane) => {
          if (Array.isArray(lane)) {
            lane.forEach((edge) => {
              const from = [...byId.values()].find((n) => n.name === fromName)?.id;
              const to = [...byId.values()].find((n) => n.name === edge?.node)?.id;
              if (from && to) {
                if (!out.has(from)) out.set(from, new Set());
                if (!out.get(from).has(to)) {
                  out.get(from).add(to);
                  indeg.set(to, (indeg.get(to) || 0) + 1);
                }
              }
            });
          }
        });
      }
    }
  
    // Some exports store per-node connections (older formats). Add those too if present.
    nodes.forEach((n) => {
      const mains = n?.connections?.main || [];
      mains.forEach((lane) => {
        if (Array.isArray(lane)) {
          lane.forEach((edge) => {
            const to = [...byId.values()].find((x) => x.name === edge?.node)?.id;
            if (to) {
              if (!out.has(n.id)) out.set(n.id, new Set());
              if (!out.get(n.id).has(to)) {
                out.get(n.id).add(to);
                indeg.set(to, (indeg.get(to) || 0) + 1);
              }
            }
          });
        }
      });
    });
  
    // topo order (Kahn)
    const q = [];
    indeg.forEach((deg, id) => { if (deg === 0) q.push(id); });
    // if indegree map missed isolated nodes, add them
    nodes.forEach((n) => { if (!indeg.has(n.id)) q.push(n.id); });
  
    const ordered = [];
    const outMap = out;
    while (q.length) {
      const id = q.shift();
      if (!ordered.includes(id)) ordered.push(id);
      const succ = [...(outMap.get(id) || [])];
      succ.forEach((v) => {
        indeg.set(v, (indeg.get(v) || 0) - 1);
        if (indeg.get(v) === 0) q.push(v);
      });
    }
    // fallback: if graph wonky, use original order
    if (ordered.length === 0) return nodes.map((n) => n.id);
    return ordered;
  }
  
  // ---------- drop-in replacement ----------
  const analyzeWorkflow = (jsonContent) => {
    const nodes = Array.isArray(jsonContent?.nodes) ? jsonContent.nodes : [];
    if (nodes.length === 0) return null;
  
    // Normalize basics
    const types = nodes.map((n) => String(n.type || "").split(".").pop() || "Node");
    const families = types.map((t) =>
      t
        .replace(/node$/i, "")
        .replace(/(v\d+)$/i, "")
        .trim() || "Generic"
    );
  
    // Build graph order for "how it works"
    const orderedIds = buildGraph(nodes, jsonContent?.connections);
    const byId = new Map(nodes.map((n) => [n.id, n]));
    const orderedNodes = orderedIds.map((id) => byId.get(id)).filter(Boolean);
  
    // Identify trigger
    const triggerNode =
      orderedNodes.find((n) => /trigger/i.test(n.type || "")) ||
      orderedNodes.find((n) => /webhook|schedule|cron/i.test(JSON.stringify(n.parameters || {}))) ||
      orderedNodes[0];
  
    // Trigger description with actual params where possible
    const tType = String(triggerNode?.type || "").toLowerCase();
    const tp = triggerNode?.parameters || {};
    let triggerDescription = `This workflow starts with **${triggerNode?.name || "a Trigger"}**.`;
    if (tType.includes("schedule")) {
      const cron = tp?.rule || tp?.cronExpression || tp?.interval || tp?.everyX || tp?.every || "";
      triggerDescription = `Runs on a **schedule**${cron ? ` (e.g., \`${redact(cron)}\`)` : ""}.`;
    } else if (tType.includes("webhook")) {
      const path = tp?.path || tp?.webhookPath || tp?.endpoint;
      const method = tp?.httpMethod || tp?.method || "POST";
      triggerDescription = `Triggered by **Webhook** at \`${method}\` **/${redact(path || "")}**.`;
    } else if (/imap|email|gmail|mail/i.test(tType)) {
      triggerDescription = `Triggered by **incoming email** (new message).`;
    }
  
    // "What it does" — concise based on frequent families/nodes
    const topFamilies = summarizeList(families, 3);
    let whatItDoes = `Automates a flow using ${topFamilies}.`;
    if (families.some((f) => /openai|ai|llm/i.test(f)) && families.some((f) => /http|request|api/i.test(f))) {
      whatItDoes = `Calls external APIs and uses **AI** to transform or decide, then routes the result downstream.`;
    }
    if (families.some((f) => /sheet|airtable|notion|db|postgres|mysql/i.test(f))) {
      whatItDoes = `Moves data between apps and a **database/spreadsheet**, with logic and optional AI steps.`;
    }
    if (families.some((f) => /slack|discord|teams|gmail|email/i.test(f))) {
      whatItDoes = `Monitors events, processes them, and **notifies** people/apps (Slack/Email) with structured updates.`;
    }
  
    // Use case based on families
    let useCase = `Use to eliminate manual copy-paste and standardize a recurring business process.`;
    if (families.some((f) => /openai|ai|llm/i.test(f))) {
      useCase = `Great for **content, summarization, triage, or decisioning** where AI adds speed and consistency.`;
    }
    if (families.some((f) => /crm|hubspot|salesforce|pipedrive|airtable|sheet/i.test(f))) {
      useCase = `Ideal for **lead intake**, **enrichment**, and **CRM updates** with alerts to the right channel.`;
    }
    if (families.some((f) => /http|request|api/i.test(f))) {
      useCase = `Use as a **glue/API broker**: receive data, enrich/validate via APIs, and pass to downstream systems.`;
    }
  
    // Step details per node — pull meaningful params safely
    function nodeLabel(n) {
      const rawType = String(n.type || "").split(".").pop();
      const name = n.name || rawType || "Node";
      return { name, rawType };
    }
  
    function describeNode(n) {
      const p = n?.parameters || {};
      const { name, rawType } = nodeLabel(n);
  
      // capture common fields across popular nodes
      const parts = [];
      if (p?.resource) parts.push(`resource: **${redact(p.resource)}**`);
      if (p?.operation) parts.push(`operation: **${redact(p.operation)}**`);
      if (p?.httpMethod || p?.method) parts.push(`method: **${redact(p.httpMethod || p.method)}**`);
      if (p?.url) parts.push(`url: \`${redact(p.url)}\``);
      if (p?.path) parts.push(`path: \`/${redact(p.path)}\``);
      if (p?.sheetId || p?.spreadsheetId) parts.push(`sheet: \`${redact(p.sheetId || p.spreadsheetId)}\``);
      if (p?.table || p?.baseId || p?.tableId) parts.push(`table: \`${redact(p.table || p.tableId)}\``);
      if (p?.database) parts.push(`database: \`${redact(p.database)}\``);
      if (p?.collection) parts.push(`collection: \`${redact(p.collection)}\``);
      if (p?.index) parts.push(`index: \`${redact(p.index)}\``);
      if (p?.queue || p?.topic || p?.channel) parts.push(`channel/topic: \`${redact(p.queue || p.topic || p.channel)}\``);
      if (p?.prompt) parts.push(`prompt: "${redact(p.prompt)}"`);
      if (p?.model) parts.push(`model: \`${redact(p.model)}\``);
      if (p?.systemMessage) parts.push(`system msg: "${redact(p.systemMessage)}"`);
  
      // fallback generic param hint
      if (parts.length === 0) {
        const keys = Object.keys(p || {}).filter((k) => !/binary|jsonParameters/i.test(k)).slice(0, 3);
        keys.forEach((k) => parts.push(`${k}: "${redact(p[k])}"`));
      }
  
      return `**${name}** \`${rawType}\` — ${parts.join(", ") || "configured for its default action."}`;
    }
  
    const howItWorks = orderedNodes.map(describeNode);
  
    // Setup instructions from what we actually see
    const setup = [];
    // credentials hint
    const credHints = new Set(
      nodes
        .map((n) => n?.credentials && Object.keys(n.credentials || {}))
        .flat()
        .filter(Boolean)
    );
    if (credHints.size) setup.push(`**Connect Credentials:** ${[...credHints].slice(0, 5).join(", ")}.`);
  
    // webhook/schedule guidance
    if (/webhook/i.test(String(triggerNode?.type || ""))) {
      setup.push(`**Expose Webhook:** Map your external app to the listed path/method; test with curl/Postman before activation.`);
    }
    if (/schedule|cron/i.test(String(triggerNode?.type || ""))) {
      setup.push(`**Cron/Schedule:** Confirm timezone and cadence; start with a test window (e.g., every 5 minutes) then scale.`);
    }
  
    // app-specific setup hints based on families
    if (families.some((f) => /airtable|sheet/i.test(f))) {
      setup.push(`**Data Mapping:** Verify base/sheet IDs and column names match exactly to prevent silent failures.`);
    }
    if (families.some((f) => /slack|discord|gmail|email/i.test(f))) {
      setup.push(`**Notification Targets:** Confirm channel/email IDs and that the bot/app is authorized to post.`);
    }
    if (families.some((f) => /http|request|api/i.test(f))) {
      setup.push(`**API Contracts:** Validate required headers and 2xx/4xx handling; add retries for 429/5xx.`);
    }
    if (setup.length === 0) setup.push(`**Test & Activate:** Run a manual execution with sample data, then set the workflow Active.`);
  
    return {
      whatItDoes,
      useCase,
      howItWorks,
      setup,
      trigger: triggerDescription,
    };
  };
  

// --- OpenAI call with retries, Retry-After, and idempotency ---
async function callOpenAI(prompt, modelOverride) {
  if (!process.env.OPENAI_API_KEY) {
    return "*AI Recommendations require an OPENAI_API_KEY in your .env file.*";
  }

  for (let attempt = 0; attempt <= MAX_RETRIES; attempt++) {
    try {
        const impliedModel = modelOverride || MODEL;
        const endpoint = impliedModel.startsWith("gpt-5")
  ? "https://api.openai.com/v1/responses"
  : "https://api.openai.com/v1/chat/completions";

    const body = impliedModel.startsWith("gpt-5")
    ? {
        model: impliedModel,
        input: prompt,
        max_output_tokens: 2000
        }
    : {
        model: impliedModel,
        messages: [{ role: "user", content: prompt }],
        max_tokens: 2000
        };
        const res = await fetch(endpoint, {
            method: "POST",
            headers: {
              "Authorization": `Bearer ${process.env.OPENAI_API_KEY}`,
              "Content-Type": "application/json",
              "Idempotency-Key": idemKey(),
            },
            body: JSON.stringify({...body, ...(impliedModel.includes("gpt-5") ? {} : { temperature: 0.6 })}),
          });

      if (res.status === 429 || res.status === 409 || res.status === 503) {
        const retryAfter = parseFloat(res.headers.get("retry-after"));
        const waitMs = Number.isFinite(retryAfter) ? Math.max(1000, retryAfter * 1000) : jitter(backoffDelay(attempt));
        await sleep(waitMs);
        continue;
      }

      if (!res.ok) {
        const text = await res.text().catch(() => "");
        throw new Error(`OpenAI error ${res.status}: ${text.slice(0, 400)}`);
      }

      const json = await res.json();
      const content = json?.choices?.[0]?.message?.content;
      return content || "No content returned.";
    } catch (err) {
      const retriable = /429|409|500|502|503|504/.test(String(err.message));
      if (!retriable || attempt === MAX_RETRIES) {
        console.error("OpenAI error (final):", err.message);
        return "Could not generate AI recommendations at this time.";
      }
      const waitMs = jitter(backoffDelay(attempt));
      await sleep(waitMs);
    }
  }
}

// --- EDIP + WIIFM prompt builder with bounded context ---
// async function getAIRecommendations(howItWorksSteps, jsonObj) {
//   const stepsText = Array.isArray(howItWorksSteps) ? howItWorksSteps.join("\n") : String(howItWorksSteps || "");
//   const workflowJSON = JSON.stringify(jsonObj, null, 2);

//   const prompt = `
// You are analyzing the following n8n workflow. Respond with a structured breakdown in five parts using the EDIP teaching method:

// Explain – Summarize what this workflow does in clear, simple language. Assume the student has little prior automation experience.
// Demonstrate – Show a real-world example of when and why a business owner, consultant, or developer would use this workflow.
// Imitate – Provide a step-by-step outline of how the student could apply or adapt this workflow for themselves. Make it easy to follow.
// Practice – Suggest a small exercise or experiment the student can try to reinforce their understanding and test the workflow safely.
// WIIFM (What's In It For Me) – Spell out why this workflow matters to the student. Clearly explain how mastering it could help them create value, find customers, or generate income as part of an AI automation business.

// Be direct, actionable, and insightful. Keep all answers framed around helping students learn, apply, and see real-world benefits.

// Response Rules:
// - Be concise and to the point.
// - Be easy to understand, follow, apply, and test.

// Response Format:
// - Explain in under 280 characters
// - Demonstrate in under 280 characters
// - Imitate in under 280 characters
// - Practice in under 280 characters
// - WIIFM in under 280 characters

// Workflow Steps:
// ${bound(stepsText)}

// Workflow JSON:
// ${bound(workflowJSON)}

// Context:
// ${bound(projectOverviewContent)}
// ${bound(jeopardyContent)}
// ${bound(courseIndex)}
// ${bound(coursePart1)}
// ${bound(coursePart2)}
// ${bound(coursePart3)}
// ${bound(coursePart4)}
// ${bound(coursePart5)}
// ${bound(coursePart6)}
// ${bound(coursePart7)}
// ${bound(coursePart8)}
// ${bound(coursePart9)}
// ${bound(coursePart10)}
// ${bound(coursePart11)}
// ${bound(exampleReadme)}
// `.trim();

//   return callOpenAI(prompt);
// }

// --- EDIP + WIIFM prompt builder with bounded, graph-aware context ---
async function getAIRecommendations(howItWorksSteps, jsonObj) {
    try {
      const nodes = Array.isArray(jsonObj?.nodes) ? jsonObj.nodes : [];
      const conns = jsonObj?.connections || {};
      const orderedIds = buildGraph(nodes, conns);
  
      // Build concise node summaries (name, type, key params)
      function briefNode(n) {
        const type = String(n.type || "").split(".").pop();
        const p = n.parameters || {};
        const bits = [];
  
        if (p.resource) bits.push(`resource=${redact(p.resource)}`);
        if (p.operation) bits.push(`op=${redact(p.operation)}`);
        if (p.httpMethod || p.method) bits.push(`method=${redact(p.httpMethod || p.method)}`);
        if (p.url) bits.push(`url=${redact(p.url)}`);
        if (p.path || p.webhookPath) bits.push(`path=/${redact(p.path || p.webhookPath)}`);
        if (p.rule || p.cronExpression || p.interval || p.everyX) {
          bits.push(`schedule=${redact(p.rule || p.cronExpression || p.interval || p.everyX)}`);
        }
        if (p.sheetId || p.spreadsheetId) bits.push(`sheet=${redact(p.sheetId || p.spreadsheetId)}`);
        if (p.table || p.tableId) bits.push(`table=${redact(p.table || p.tableId)}`);
        if (p.database) bits.push(`db=${redact(p.database)}`);
        if (p.collection) bits.push(`collection=${redact(p.collection)}`);
        if (p.index) bits.push(`index=${redact(p.index)}`);
        if (p.queue || p.topic || p.channel) bits.push(`channel=${redact(p.queue || p.topic || p.channel)}`);
        if (p.model) bits.push(`model=${redact(p.model)}`);
        if (p.prompt) bits.push(`prompt="${redact(p.prompt)}"`);
  
        const meta = bits.slice(0, 4).join(", "); // keep it short
        return `- ${n.name || type} \`${type}\`${meta ? ` — ${meta}` : ""}`;
      }
  
      // Create ordered node list
      const byId = new Map(nodes.map(n => [n.id, n]));
      const ordered = orderedIds.map(id => byId.get(id)).filter(Boolean);
      const nodeListText = ordered.map(briefNode).join("\n");
  
      // Create edge list (From -> To) using names
      function buildEdgeList() {
        const edges = [];
        const nameIndex = new Map(nodes.map(n => [n.name, n.id]));
        // top-level connections shape
        for (const [fromName, conn] of Object.entries(conns || {})) {
          const mains = conn?.main || [];
          mains.forEach(lane => {
            lane.forEach(edge => {
              if (edge?.node) edges.push(`${fromName} → ${edge.node}`);
            });
          });
        }
        // per-node legacy
        nodes.forEach(n => {
          const mains = n?.connections?.main || [];
          mains.forEach(lane => {
            lane.forEach(edge => {
              if (edge?.node) edges.push(`${n.name} → ${edge.node}`);
            });
          });
        });
        // de-dupe & bound
        return [...new Set(edges)].slice(0, 40).map(e => `- ${e}`).join("\n");
      }
  
      const edgeListText = buildEdgeList();
  
      // Steps text provided by analyzeWorkflow (already descriptive)
      const stepsText = Array.isArray(howItWorksSteps)
        ? howItWorksSteps.join("\n")
        : String(howItWorksSteps || "");
  
      // Bound the raw JSON in case you still want to expose it (kept short)
      const workflowJSON = bound(JSON.stringify(jsonObj, null, 2));
  
      // Keep the EDIP framing, but focus the model on THIS workflow’s graph
      const prompt = `
 You are analyzing the following n8n workflow. Respond with a structured breakdown in five parts using the EDIP teaching method:

 Explain – Summarize what this workflow does in clear, simple language. Assume the student has little prior automation experience.
 Demonstrate – Show a real-world example of when and why a business owner, consultant, or developer would use this workflow.
 Imitate – Provide a step-by-step outline of how the student could apply or adapt this workflow for themselves. Make it easy to follow.
 Practice – Suggest a small exercise or experiment the student can try to reinforce their understanding and test the workflow safely.
 WIIFM (What's In It For Me) – Spell out why this workflow matters to the student. Clearly explain how mastering it could help them create value, find customers, or generate income as part of an AI automation business.

 Be direct, actionable, and insightful. Keep all answers framed around helping students learn, apply, and see real-world benefits.

 Response Rules:
 - Be concise and to the point.
 - Be easy to understand, follow, apply, and test.

 Response Format:
 - Explain in under 1200 characters what the workflow does
 - Demonstrate in under 280 characters
 - Imitate in under 280 characters
 - Practice in under 280 characters
 - WIIFM in under 280 characters

 Workflow Steps:
 ${bound(stepsText)}

 Workflow JSON:
 ${bound(workflowJSON)}

 Context:
 ${bound(projectOverviewContent)}
 ${bound(courseIndex)}
 ${bound(coursePart1)}
 ${bound(coursePart2)}
 ${bound(coursePart3)}
 ${bound(coursePart4)}
 ${bound(coursePart5)}
 ${bound(coursePart6)}
 ${bound(coursePart7)}
 ${bound(coursePart8)}
 ${bound(coursePart9)}
 ${bound(coursePart10)}
 ${bound(coursePart11)}
 ${bound(exampleReadme)}
  
  WORKFLOW NODES (ordered):
  ${nodeListText || "- [no nodes listed]"}
  
  WORKFLOW EDGES:
  ${edgeListText || "- [no edges listed]"}
  
  HOW IT WORKS (prepared steps):
  ${bound(stepsText)}
  
  RAW (truncated):
  ${workflowJSON}
  `.trim();
  
      return await callOpenAI(prompt);
    } catch (err) {
      console.error("getAIRecommendations failed:", err.message);
      return "Could not generate AI recommendations at this time.";
    }
  }
  
// --- Core runner with small worker pool and checkpoints ---
// const generateAllDetailedReadmes = async () => {
//   const workflowsDir = path.join(__dirname, "..", "workflows");

//   function listJsonFiles(dir) {
//     const out = [];
//     const stack = [dir];
//     while (stack.length) {
//       const d = stack.pop();
//       const items = fs.readdirSync(d);
//       for (const item of items) {
//         const p = path.join(d, item);
//         const stat = fs.statSync(p);
//         if (stat.isDirectory()) stack.push(p);
//         else if (item.endsWith(".json")) out.push(p);
//       }
//     }
//     return out;
//   }

//   const files = listJsonFiles(workflowsDir);
//   const progress = await loadProgress();
//   let processed = 0;

//   async function worker(workId) {
//     for (let idx = workId; idx < files.length; idx += CONCURRENCY) {
//       const jsonPath = files[idx];
//       const id = path.relative(workflowsDir, jsonPath);
//       if (progress.done[id]) continue;

//       const readmePath = jsonPath.replace(".json", ".md");
//       try {
//         const raw = fs.readFileSync(jsonPath, "utf8");
//         const json = JSON.parse(raw);
//         const analysis = analyzeWorkflow(json);
//         const title = generateHumanReadableName(path.parse(jsonPath).name);

//         if (!analysis) {
//           progress.done[id] = true;
//           await saveProgress(progress);
//           continue;
//         }

//         const aiIdeas = await getAIRecommendations(analysis.howItWorks, json);
//         const content = `# ${title}

// ## 🚀 What It Does
// ${analysis.whatItDoes}

// ## 💼 Business Use Case
// ${analysis.useCase}

// ## ⚙️ How It Works
// 1.  **Trigger:** ${analysis.trigger}
// ${analysis.howItWorks.map((step, i) => `${i + 2}. ${step}`).join("\n")}

// ## 💡 AI-Powered Ideas for Improvement
// ${aiIdeas}

// ## 🔧 Setup Instructions
// ${analysis.setup.map((step, i) => `${i + 1}. ${step}`).join("\n")}
// ${promotionalBlock}
// `;

//         fs.writeFileSync(readmePath, content);
//         processed++;
//         progress.done[id] = true;

//         if (processed % 10 === 0) await saveProgress(progress);
//       } catch (e) {
//         console.error(`Failed: ${jsonPath} → ${e.message}`);
//       }

//       // Small pause to smooth bursts
//       await sleep(250);
//     }
//   }

//   await Promise.all([...Array(CONCURRENCY)].map((_, i) => worker(i)));
//   await saveProgress(progress);

//   console.log("\n--- Detailed README Generation Complete ---");
//   console.log(`Processed ${processed} README files. Concurrency=${CONCURRENCY}`);
// };


// Recursively collect all .json workflow files
function listJsonFiles(dir) {
    const out = [];
    const stack = [dir];
    while (stack.length) {
      const d = stack.pop();
      const entries = fs.readdirSync(d, { withFileTypes: true });
      for (const ent of entries) {
        const p = path.join(d, ent.name);
        if (ent.isDirectory()) {
          stack.push(p);
        } else if (ent.isFile() && p.toLowerCase().endsWith(".json")) {
          out.push(p);
        }
      }
    }
    return out;
  }
  
  // Main runner: process ONLY files that were NOT in .readme-progress.json at startup
  async function generateAllDetailedReadmes() {
    const workflowsDir = path.join(__dirname, "..", "workflows");
  
    // 1) Discover all workflow JSON files
    const files = listJsonFiles(workflowsDir)
      // safety: ignore progress file if it lives under workflows
      .filter(f => !f.endsWith(".readme-progress.json"));
  
    console.log(`[readmes] discovered ${files.length} json files`);
  
    // 2) Load progress and snapshot the "done" set AT STARTUP
    const progress = await loadProgress();
    if (!progress.done || typeof progress.done !== "object") progress.done = {};
  
    const initialDone = new Set(Object.keys(progress.done));
    console.log(`[readmes] already done (from progress snapshot): ${initialDone.size}`);
  
    // 3) Optional per-run limit via env
    const LIMIT = Number.isFinite(parseInt(process.env.README_LIMIT, 10))
      ? parseInt(process.env.README_LIMIT, 10)
      : Infinity;
  
    // 4) Build queue ONLY from items NOT present in the startup snapshot
    const queueAll = files
      .map(abs => ({ abs, id: path.relative(workflowsDir, abs) }))
      .filter(({ id }) => !initialDone.has(id));
  
    const toProcess = queueAll.slice(0, LIMIT);
  
    console.log(`[readmes] queued this run: ${toProcess.length} (limit=${isFinite(LIMIT) ? LIMIT : "∞"})`);
  
    let processed = 0;
  
    // worker does not re-check progress; the snapshot decided the queue
//     async function worker(workerIdx) {
//       for (let i = workerIdx; i < toProcess.length; i += CONCURRENCY) {
//         const { abs: jsonPath, id } = toProcess[i];
//         const readmePath = jsonPath.replace(/\.json$/i, ".md");
  
//         try {
//           const raw = fs.readFileSync(jsonPath, "utf8");
//           const json = JSON.parse(raw);
  
//           const analysis = analyzeWorkflow(json);
//           const title = generateHumanReadableName(path.parse(jsonPath).name);
  
//           // If analysis cannot produce sections, mark done so we never revisit
//           if (!analysis) {
//             progress.done[id] = true;
//             await saveProgress(progress);
//             continue;
//           }
  
//           const aiIdeas = await getAIRecommendations(analysis.howItWorks, json);
  
//           const content = `# ${title}
//   ${aiIdeas}
//   ${promotionalBlock}
//   `;
  
//           fs.writeFileSync(readmePath, content);
//           processed += 1;
//           progress.done[id] = true;
  
//           // periodic checkpoint
//           if (processed % 10 === 0) await saveProgress(progress);
//         } catch (err) {
//           console.error(`[readmes] Failed for ${jsonPath}: ${err.message}`);
//         }
  
//         // light backoff so we don't hammer APIs/filesystem
//         await sleep(250);
//       }
//     }
async function worker(workerIdx) {
    for (let i = workerIdx; i < toProcess.length; i += CONCURRENCY) {
      const { abs: jsonPath, id } = toProcess[i];
      const readmePath = jsonPath.replace(/\.json$/i, ".md");
  
      try {
        const raw = fs.readFileSync(jsonPath, "utf8");
        const json = JSON.parse(raw);
  
        if (USE_GPT5_ANALYSIS) {
          // **GPT-5 analysis branch**
          const nodes = json.nodes || [];
          if (nodes.length === 0) {
            // Skip files with no nodes
            progress.done[id] = true;
            await saveProgress(progress);
            continue;
          }
          // Call GPT-5 model to analyze the workflow JSON
          const analysisPrompt = `Analyze the following n8n workflow JSON and extract:
  - title
  - subtitle
  - whatThisDoes
  - businessValue
  - improvementIdeas (as a JSON array of bullet points)
  - whoNeedsThis
  
  Provide the result as a JSON object with these keys. Workflow JSON:
  \`\`\`json
  ${JSON.stringify(json).slice(0, MAX_CONTEXT_CHARS)}
  \`\`\``;
          const analysisResultText = await callOpenAI(analysisPrompt, MODEL_GPT5);
          let analysisData;
          try {
            analysisData = JSON.parse(analysisResultText);
          } catch (parseErr) {
            console.error(`[readmes] GPT-5 analysis returned invalid JSON for ${id}: ${parseErr}`);
            // Fallback to static method if GPT-5 analysis fails
            const analysis = analyzeWorkflow(json);
            if (!analysis) {
              progress.done[id] = true;
              await saveProgress(progress);
              continue;
            }
            const title = generateHumanReadableName(path.parse(jsonPath).name);
            const aiIdeas = await getAIRecommendations(analysis.howItWorks, json);
            const content = `# ${title}
## 🚀 What It Does
${analysis.whatItDoes}

## 💼 Business Use Case
${analysis.useCase}

## ⚙️ How It Works
1. **Trigger:** ${analysis.trigger}
${analysis.howItWorks.map((step, i) => `${i + 2}. ${step}`).join("\n")}

## 💡 AI-Powered Ideas for Improvement
${aiIdeas}

## 🔧 Setup Instructions
${analysis.setup.map((step, i) => `${i + 1}. ${step}`).join("\n")}
${promotionalBlock}
`;

            fs.writeFileSync(readmePath, content);
            processed++;
            progress.done[id] = true;
            if (processed % 10 === 0) await saveProgress(progress);
            continue;
          }
          // Extract fields from GPT-5 analysis
          const { title: aiTitle, subtitle, whatThisDoes, businessValue, improvementIdeas, whoNeedsThis } = analysisData;
  
          // Build a prompt for GPT-4o-mini to generate the README
          const genPrompt = 
  `Using the analysis below, write a README in Markdown with the following structure:
  
  # ${aiTitle || generateHumanReadableName(path.parse(jsonPath).name)}
  ### ${subtitle || ""}
  
  ## What this workflow does
  ${whatThisDoes || ""}
  
  ## How can this workflow be used to help a business owner
  ${businessValue || ""}
  
  ## Ideas for improvement
  ${Array.isArray(improvementIdeas) ? improvementIdeas.map(i => "- " + i).join("\\n") : improvementIdeas || ""}
  
  ## What type of business needs this
  ${whoNeedsThis || ""}
  
  ## Full JSON of the Workflow for review
  *(The JSON will be included below.)*`;
  
          const readmeBody = await callOpenAI(genPrompt, MODEL_MINI);
          if (!readmeBody || readmeBody.startsWith("Could not")) {
            // If GPT-4o-mini fails, fallback to static method
            const analysis = analyzeWorkflow(json);
            if (!analysis) {
              progress.done[id] = true;
              await saveProgress(progress);
              continue;
            }
            const title = generateHumanReadableName(path.parse(jsonPath).name);
            const aiIdeas = await getAIRecommendations(analysis.howItWorks, json);
            const content = `# ${title}
## 🚀 What It Does
${analysis.whatItDoes}

## 💼 Business Use Case
${analysis.useCase}

## ⚙️ How It Works
1. **Trigger:** ${analysis.trigger}
${analysis.howItWorks.map((step, i) => `${i + 2}. ${step}`).join("\n")}

## 💡 AI-Powered Ideas for Improvement
${aiIdeas}

## 🔧 Setup Instructions
${analysis.setup.map((step, i) => `${i + 1}. ${step}`).join("\n")}
${promotionalBlock}
`;

            fs.writeFileSync(readmePath, content);
            processed++;
            progress.done[id] = true;
            if (processed % 10 === 0) await saveProgress(progress);
            continue;
          }
          // Append the full JSON and promotional block to the README content
          const workflowJsonPretty = JSON.stringify(json, null, 2);
          // (Optionally redact any sensitive keys in workflowJsonPretty)
          const fullContent = readmeBody.trim() + "\n\n```json\n" + workflowJsonPretty + "\n```\n" + promotionalBlock;
          fs.writeFileSync(readmePath, fullContent);
          processed++;
          progress.done[id] = true;
          if (processed % 10 === 0) await saveProgress(progress);
        } else {
          // **Fallback static analysis branch**
          const analysis = analyzeWorkflow(json);
          const title = generateHumanReadableName(path.parse(jsonPath).name);
          if (!analysis) {
            progress.done[id] = true;
            await saveProgress(progress);
            continue;
          }
          const aiIdeas = await getAIRecommendations(analysis.howItWorks, json);
  
          const content = `# ${title}
  ## 🚀 What It Does
  ${analysis.whatItDoes}
  
  ## 💼 Business Use Case
  ${analysis.useCase}
  
  ## ⚙️ How It Works
  1. **Trigger:** ${analysis.trigger}
  ${analysis.howItWorks.map((step, i) => `${i + 2}. ${step}`).join("\n")}
  
  ## 💡 AI-Powered Ideas for Improvement
  ${aiIdeas}
  
  ## 🔧 Setup Instructions
  ${analysis.setup.map((step, i) => `${i + 1}. ${step}`).join("\n")}
  ${promotionalBlock}
  `;
          fs.writeFileSync(readmePath, content);
          processed++;
          progress.done[id] = true;
          if (processed % 10 === 0) await saveProgress(progress);
        }
      } catch (err) {
        console.error(`[readmes] Failed for ${jsonPath}: ${err.message}`);
      }
  
      // light backoff to avoid hammering APIs
      await sleep(250);
    }
  }
  
  
    // 5) Run with your existing worker pool size
    await Promise.all([...Array(CONCURRENCY)].map((_, idx) => worker(idx)));
  
    // final checkpoint
    await saveProgress(progress);
  
    console.log("\n--- Detailed README Generation Complete ---");
    console.log(`Processed this run: ${processed}. Concurrency=${CONCURRENCY}`);
  }  

// Exported entry
module.exports = { generateAllDetailedReadmes };

if (require.main === module) {
    generateAllDetailedReadmes().catch(err => {
      console.error("Fatal error:", err);
      process.exit(1);
    });
  }
  