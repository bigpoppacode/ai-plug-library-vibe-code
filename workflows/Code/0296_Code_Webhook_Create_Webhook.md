# Code Webhook Create Webhook
  ## 🚀 What It Does
  Automates a flow using stickyNote×4, n8n, webhook.
  
  ## 💼 Business Use Case
  Use to eliminate manual copy-paste and standardize a recurring business process.
  
  ## ⚙️ How It Works
  1. **Trigger:** This workflow starts with **Sticky Note**.
  2. **Sticky Note** `stickyNote` — width: "1074", height: "468", content: "# ⚠️ When and how to use this workflow

If you previously upgraded to n8n version `0.214.3`, some of your workflows might have accidentally been re-wired in the wrong way. This aff…[truncated]"
3. **Webhook** `webhook` — path: `/affected-workflows`
4. **Sticky Note1** `stickyNote` — width: "236", height: "194", content: "# 👆

In case you have community nodes installed, add them to `MULTI_OUTPUT_NODES`"
5. **Sticky Note2** `stickyNote` — width: "208", height: "197", content: "# 👆

Configure this node to use your n8n API credential"
6. **Sticky Note3** `stickyNote` — width: "451", height: "194", content: "# 👆

Find the generated report at  `{YOUR_INSTANCE_URL}/webhooks/affected-workflows`"
7. **Get all workflows** `n8n` — filters: "[object Object]"
8. **Parse potentially affected workflows** `code` — jsCode: "// Define an array of objects representing node types that have multiple outputs.
// Each object specifies the node type and the number of outputs it has.
const MULTI_OUTPUT_NODES …[truncated]"
9. **Generate Report** `html` — html: "
<!DOCTYPE html>

<html>
<head>
  <meta charset="UTF-8" />
  <title>n8n workflows report</title>
</head>
<body>
  <div class="container">
    <h1>Affected workflows:</h1>
    <ul i…[truncated]"
10. **Serve HTML Report** `respondToWebhook` — options: "[object Object]", respondWith: "text", responseBody: "={{ $node["Generate Report"].parameter["html"] }}
<script>
const { workflows } = {{  JSON.stringify($node["Parse potentially affected workflows"].json) }}

const $list = document.g…[truncated]"
  
  ## 💡 AI-Powered Ideas for Improvement
  **Explain:** This n8n workflow identifies workflows potentially affected by an upgrade to n8n version 0.214.3, which may have incorrectly rewired nodes with multiple outputs like "If," "Switch," and "Compare Datasets." It retrieves all workflows, checks for affected nodes, and generates an HTML report accessible via a webhook.

**Demonstrate:** A developer can use this workflow after upgrading n8n to ensure all workflows function correctly. This helps prevent downtime by quickly identifying and fixing any misconfigured workflows.

**Imitate:** 
1. Import the workflow into your n8n instance.
2. Configure "Get all workflows" with your n8n API key.
3. Add any community nodes with multiple outputs to `MULTI_OUTPUT_NODES`.
4. Activate the workflow.
5. Access the report at `{YOUR_INSTANCE_URL}/webhooks/affected-workflows`.

**Practice:** Create a test workflow with nodes having multiple outputs. Upgrade your n8n version and run this workflow to see if it identifies the test workflow as affected, reinforcing your understanding of its functionality.

**WIIFM:** Mastering this workflow ensures your automations remain reliable after upgrades, minimizing service disruptions. This reliability can attract and retain clients, offering peace of mind and showcasing your expertise in automation maintenance.
  
  ## 🔧 Setup Instructions
  1. **Connect Credentials:** n8nApi.
  
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
> Built by [Big Poppa Code](https://bigpoppacode.io) – architecting automations that scale people, profits, and purpose.
  