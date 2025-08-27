# Code Webhook Automate Webhook
  ## 🚀 What It Does
  Automates a flow using set×5, stickyNote×5, sort×4.
  
  ## 💼 Business Use Case
  Use to eliminate manual copy-paste and standardize a recurring business process.
  
  ## ⚙️ How It Works
  1. **Trigger:** This workflow starts with **When clicking "Test workflow"**.
  2. **When clicking "Test workflow"** `manualTrigger` — configured for its default action.
3. **Sticky Note** `stickyNote` — width: "1490", height: "1375", content: "## Create the main JSON object with the workflow statistics
* `globals` - general information (# of workflows, active workflows, total trigger count)
* `wf_stats` - summary per wor…[truncated]"
4. **Execute Workflow Trigger** `executeWorkflowTrigger` — configured for its default action.
5. **Sticky Note1** `stickyNote` — color: "7", width: "909", height: "426"
6. **Sticky Note2** `stickyNote` — color: "6", width: "1301.92628220859", height: "1000.0640426993867"
7. **Request HTML dashboard** `webhook` — path: `/fb550a01-12f2-4709-ba2d-f71197b68340`
8. **Sticky Note3** `stickyNote` — color: "3", width: "663.915516288839", height: "251.8866653838499"
9. **Request xsl template** `webhook` — path: `/73a91e4d-143d-4168-9efb-6c56f2258aec/dashboard.xsl`
10. **Sticky Note4** `stickyNote` — width: "620", content: "## &#x200B;
# USE THIS WEBHOOK -->"
11. **n8n-get-workflows** `n8n` — filters: "[object Object]", requestOptions: "[object Object]"
12. **Prepare JSON object** `executeWorkflow` — options: "[object Object]", workflowId: "={{ $workflow.id }}"
13. **Template elements** `set` — options: "[object Object]", assignments: "[object Object]"
14. **get-nodes-via-jmespath** `set` — options: "[object Object]", assignments: "[object Object]", includeOtherFields: "true"
15. **Convert to XML** `xml` — mode: "jsonToxml", options: "[object Object]"
16. **Final template** `set` — options: "[object Object]", assignments: "[object Object]"
17. **workflows-section** `set` — options: "[object Object]", assignments: "[object Object]"
18. **Create HTML** `html` — html: "<?xml version="1.0" encoding="ISO-8859-1"?>
<?xml-stylesheet type="text/xsl" href="{{ $env.WEBHOOK_URL }}webhook/73a91e4d-143d-4168-9efb-6c56f2258aec/dashboard.xsl"?>

{{ $json.dat…[truncated]"
19. **Respond to Webhook2** `respondToWebhook` — options: "[object Object]", respondWith: "text", responseBody: "={{ $json.xsl_template }}"
20. **nodes-section** `code` — jsCode: "// Initialize an empty object to hold the mapping between nodes and workflows
const nodeToWorkflowsMap = {};

// Iterate over each workflow in the input
$input.all().forEach(item =…[truncated]"
21. **tags-section** `code` — jsCode: "// Initialize an empty object to hold the mapping between tags and workflows
const tagToWorkflowsMap = {};

// Iterate over each workflow in the input
$input.all().forEach(item => …[truncated]"
22. **globals-section** `set` — options: "[object Object]", assignments: "[object Object]"
23. **Sort-workflows** `sort` — options: "[object Object]", sortFieldsUi: "[object Object]"
24. **webhook-section** `code` — jsCode: "// Initialize an empty object to hold the mapping between webhook paths and workflows
const webhookMap = {};

// Iterate over each workflow item passed from the previous node
$inpu…[truncated]"
25. **Move Binary Data** `moveBinaryData` — mode: "jsonToBinary", options: "[object Object]", sourceKey: "html"
26. **Sort-nodes** `sort` — options: "[object Object]", sortFieldsUi: "[object Object]"
27. **Sort-tags** `sort` — options: "[object Object]", sortFieldsUi: "[object Object]"
28. **Aggregate-workflows** `aggregate` — options: "[object Object]", fieldsToAggregate: "[object Object]"
29. **Sort-whooks** `sort` — options: "[object Object]", sortFieldsUi: "[object Object]"
30. **Respond to Webhook** `respondToWebhook` — options: "[object Object]", respondWith: "binary"
31. **Aggregate-nodes** `aggregate` — options: "[object Object]", aggregate: "aggregateAllItemData", destinationFieldName: "nodes-section"
32. **Aggregate-tags** `aggregate` — options: "[object Object]", aggregate: "aggregateAllItemData", destinationFieldName: "tags-section"
33. **Aggregate-whooks** `aggregate` — options: "[object Object]", aggregate: "aggregateAllItemData", destinationFieldName: "whooks-section"
34. **Final-json** `merge` — mode: "combine", options: "[object Object]", combineBy: "combineByPosition"
  
  ## 💡 AI-Powered Ideas for Improvement
  - **Explain**: This n8n workflow generates a dashboard of workflow statistics from your n8n instance. It collects data on workflows, nodes, tags, and webhooks, converts it to a structured JSON format, and then transforms it into an XML and HTML dashboard for easy visualization. This setup helps in monitoring and analyzing workflows.

- **Demonstrate**: A developer could use this workflow to create a visual dashboard for monitoring the health and usage of various n8n workflows, helping in identifying active workflows, frequently used nodes, and potential optimizations.

- **Imitate**: 1. Import this workflow into your n8n instance. 2. Configure access to your n8n API. 3. Set up a trigger (e.g., manual or scheduled). 4. Test the workflow to ensure it generates the desired dashboard output. 5. Adjust the HTML and XSL templates to match your branding or specific needs.

- **Practice**: Create a simple test workflow in n8n and run this dashboard workflow to see it appear in the dashboard. Modify the test workflow's state and re-run the dashboard to observe changes.

- **WIIFM**: Mastering this workflow allows you to offer clients detailed insights into their automation processes, improving efficiency and optimization. It enables you to provide high-value analytical services, attracting more clients and increasing revenue in your automation business.
  
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
  