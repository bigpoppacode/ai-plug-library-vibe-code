# Code Webhook Automate Webhook
  ## 🚀 What It Does
  Automates a flow using respondToWebhook×2, n8n×2, set×2.
  
  ## 💼 Business Use Case
  Use to eliminate manual copy-paste and standardize a recurring business process.
  
  ## ⚙️ How It Works
  1. **Trigger:** This workflow starts with **When clicking ‘Test workflow’**.
  2. **When clicking ‘Test workflow’** `manualTrigger` — configured for its default action.
3. **Sticky Note3** `stickyNote` — color: "3", width: "470.91551628883894", height: "419.34820384538847"
4. **Webhook** `webhook` — path: `/dd9e2c5d-6c48-428e-aa54-bef9e369d3b0`
5. **Switch** `switch` — rules: "[object Object]", options: "[object Object]"
6. **List workflows** `n8n` — filters: "[object Object]", requestOptions: "[object Object]"
7. **Single workflow** `n8n` — operation: **get**
8. **Prepare workflow list** `set` — options: "[object Object]", assignments: "[object Object]"
9. **Code** `code` — jsCode: "const workflow = $input.first().json;

// Extract nodes from the workflow
const nodes = workflow.nodes || [];

// Node types to exclude
const excludedNodeTypes = ['n8n-nodes-base.s…[truncated]"
10. **Aggregate** `aggregate` — options: "[object Object]", fieldsToAggregate: "[object Object]"
11. **Respond with Mermaid** `respondToWebhook` — options: "[object Object]", respondWith: "text", responseBody: "={{ $json.mermaidChart }}"
12. **CONFIG** `set` — options: "[object Object]", assignments: "[object Object]", includeOtherFields: "true"
13. **Send Page** `respondToWebhook` — options: "[object Object]", respondWith: "text", responseBody: "=<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>n8n Workflow Visualizer</t…[truncated]"
  
  ## 💡 AI-Powered Ideas for Improvement
  - **Explain:** This n8n workflow provides a visualization of all workflows in an n8n instance using Mermaid.js. It uses a webhook to trigger the workflow, fetches a list of workflows, and generates a visualization using Mermaid.js. The workflow then responds with a web page displaying the visualization, allowing users to get a bird's-eye view of their n8n workflows.
  
- **Demonstrate:** A developer managing multiple workflows in an n8n instance can use this workflow to easily visualize and manage their workflows, improving clarity and efficiency in managing complex automation processes.

- **Imitate:** 1. Set up a webhook in n8n. 2. Create a workflow with a switch node to determine workflow listing or single workflow retrieval. 3. Use the code node to generate a Mermaid.js chart. 4. Configure the response nodes to display the visualization in a web page.

- **Practice:** Create a simple n8n workflow with at least three nodes. Then, use this visualization workflow to see how your newly created workflow is represented visually. Adjust node connections and observe changes in the visualization.

- **WIIFM:** Mastering this workflow enables you to efficiently manage and visualize complex automation setups, enhancing your ability to offer sophisticated workflow management services. This can attract businesses looking for streamlined automation solutions, thus generating income opportunities.
  
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
  