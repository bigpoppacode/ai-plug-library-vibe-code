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
const CONCURRENCY = parseInt(process.env.README_CONCURRENCY || "3", 10);
const MAX_RETRIES = parseInt(process.env.README_MAX_RETRIES || "6", 10);
const BASE_DELAY_MS = parseInt(process.env.README_BASE_DELAY_MS || "750", 10);
const MAX_DELAY_MS = parseInt(process.env.README_MAX_DELAY_MS || "20000", 10);
const MAX_CONTEXT_CHARS = parseInt(process.env.MAX_CONTEXT_CHARS || "200000", 10);
const MODEL = process.env.OPENAI_MODEL || "gpt-4o-mini";
const PROGRESS_PATH = process.env.README_PROGRESS_PATH || path.join(__dirname, "..", ".readme-progress.json");

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
const analyzeWorkflow = (jsonContent) => {
  const nodes = jsonContent?.nodes || [];
  if (nodes.length === 0) return null;

  const nodeTypes = new Set(nodes.map((n) => (n.type || "").split(".").pop()));
  const nodeNames = nodes.map((n) => n.name || "Node");

  const triggerNode =
    nodes.find((n) => (n.type || "").toLowerCase().includes("trigger")) || nodes[0] || {};

  let triggerDescription = `This workflow starts with a **${triggerNode.name || "Trigger"}** node.`;
  const t = (triggerNode.type || "").toLowerCase();
  if (t.includes("schedule")) {
    triggerDescription =
      "This workflow is designed to run on a schedule. Configure the interval in the Schedule node.";
  } else if (t.includes("webhook")) {
    triggerDescription = "This workflow is triggered by an incoming webhook. It acts as a live API endpoint.";
  }

  let whatItDoes = `This workflow automates a process involving ${[...nodeTypes].slice(0, 3).join(", ")}.`;
  if (nodeTypes.has("OpenAI") && nodeTypes.has("YoutubeDL")) {
    whatItDoes =
      "This workflow downloads a YouTube transcript, sends it to OpenAI for summarization, and extracts key insights.";
  }

  let useCase =
    "Use it to automate research, content creation, or data analysis. It saves hours of manual work.";
  if (whatItDoes.toLowerCase().includes("youtube") && whatItDoes.toLowerCase().includes("openai")) {
    useCase =
      "Great for creators and marketers. Generate show notes, blog drafts, or competitive analysis from any video.";
  }

  const howItWorksSteps = [];
  nodes.forEach((node, index) => {
    howItWorksSteps.push(
      `**Step ${index + 1}: ${node.name || "Node"} (${(node.type || "").split(".").pop()})** - ${
        node.parameters?.notes || "This step performs a key action in the workflow."
      }`
    );
  });

  const setupInstructions = [
    `**Connect Credentials:** OpenAI, Google Sheets, Slack, and other nodes must be authenticated.`,
    `**Customize Core Logic:** Review "${nodeNames[0]}" and "${nodeNames[nodeNames.length - 1]}" for IDs, table names, and URLs.`,
    `**Activate the Workflow:** Set the workflow to "Active" after testing.`,
  ];

  return { whatItDoes, useCase, howItWorks: howItWorksSteps, setup: setupInstructions, trigger: triggerDescription };
};

// --- OpenAI call with retries, Retry-After, and idempotency ---
async function callOpenAI(prompt) {
  if (!process.env.OPENAI_API_KEY) {
    return "*AI Recommendations require an OPENAI_API_KEY in your .env file.*";
  }

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
          max_tokens: 450
        }),
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
async function getAIRecommendations(howItWorksSteps, jsonObj) {
  const stepsText = Array.isArray(howItWorksSteps) ? howItWorksSteps.join("\n") : String(howItWorksSteps || "");
  const workflowJSON = JSON.stringify(jsonObj, null, 2);

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
- Explain in under 280 characters
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
${bound(jeopardyContent)}
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
`.trim();

  return callOpenAI(prompt);
}

// --- Core runner with small worker pool and checkpoints ---
const generateAllDetailedReadmes = async () => {
  const workflowsDir = path.join(__dirname, "..", "workflows");

  function listJsonFiles(dir) {
    const out = [];
    const stack = [dir];
    while (stack.length) {
      const d = stack.pop();
      const items = fs.readdirSync(d);
      for (const item of items) {
        const p = path.join(d, item);
        const stat = fs.statSync(p);
        if (stat.isDirectory()) stack.push(p);
        else if (item.endsWith(".json")) out.push(p);
      }
    }
    return out;
  }

  const files = listJsonFiles(workflowsDir);
  const progress = await loadProgress();
  let processed = 0;

  async function worker(workId) {
    for (let idx = workId; idx < files.length; idx += CONCURRENCY) {
      const jsonPath = files[idx];
      const id = path.relative(workflowsDir, jsonPath);
      if (progress.done[id]) continue;

      const readmePath = jsonPath.replace(".json", ".md");
      try {
        const raw = fs.readFileSync(jsonPath, "utf8");
        const json = JSON.parse(raw);
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
1.  **Trigger:** ${analysis.trigger}
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
      } catch (e) {
        console.error(`Failed: ${jsonPath} → ${e.message}`);
      }

      // Small pause to smooth bursts
      await sleep(250);
    }
  }

  await Promise.all([...Array(CONCURRENCY)].map((_, i) => worker(i)));
  await saveProgress(progress);

  console.log("\n--- Detailed README Generation Complete ---");
  console.log(`Processed ${processed} README files. Concurrency=${CONCURRENCY}`);
};

// Exported entry
module.exports = { generateAllDetailedReadmes };

if (require.main === module) {
    generateAllDetailedReadmes().catch(err => {
      console.error("Fatal error:", err);
      process.exit(1);
    });
  }
  