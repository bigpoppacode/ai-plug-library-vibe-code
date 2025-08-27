# Splitout Code Sync Webhook
## 🚀 What It Does
Monitors events, processes them, and **notifies** people/apps (Slack/Email) with structured updates.

## 💼 Business Use Case
Use as a **glue/API broker**: receive data, enrich/validate via APIs, and pass to downstream systems.

## ⚙️ How It Works
1. **Trigger:** This workflow starts with **Your Linear Project 2**.
2. **Your Linear Project 2** `linearTrigger` — teamId: "8434c5f8-1ce0-4733-949d-ef6a095c27fd", resources: "project"
3. **Your Linear Project 1** `linearTrigger` — teamId: "e7c75e79-fbcf-45cc-95bd-110efb6cb555", resources: "project"
4. **Sticky Note** `stickyNote` — width: "487.89456119016046", height: "156.00544089827184", content: "## Tips
- Avoid copying and pasting the Linear node; instead, add a new one from the menu.
- Remember to configure the custom Productboard field in the "Get Productboard Feature ID…[truncated]"
5. **Sticky Note1** `stickyNote` — color: "5", width: "492.6340257353018", height: "182.8624066540728"
6. **get productboard feature id** `httpRequest` — url: `https://api.productboard.com/hierarchy-entities/custom-fields-values`
7. **linear project id** `set` — fields: "[object Object]", include: "none", options: "[object Object]"
8. **Split Out** `splitOut` — options: "[object Object]", fieldToSplitOut: "data"
9. **Edit Fields** `set` — fields: "[object Object]", include: "none", options: "[object Object]"
10. **Merge1** `merge` — mode: "combine", options: "[object Object]", mergeByFields: "[object Object]"
11. **map linear to productboard status** `set` — fields: "[object Object]", options: "[object Object]"
12. **get productboard feature details** `httpRequest` — url: `=https://api.productboard.com/features/{{ $json.feature_id }}`
13. **mapping** `code` — mode: "runOnceForEachItem", jsCode: "const linearStatus = $json.linear_status;
let productboardStatus;

switch(linearStatus) {
  case 'Backlog':
    productboardStatus = 'Candidate';
    break;
  case 'Planned':
    p…[truncated]"
14. **Merge** `merge` — mode: "combine", options: "[object Object]", combinationMode: "mergeByPosition"
15. **Merge2** `merge` — mode: "combine", options: "[object Object]", joinMode: "keepEverything"
16. **If** `if` — options: "[object Object]", conditions: "[object Object]"
17. **update productboard status & timeframe** `httpRequest` — method: **PATCH**, url: `=https://api.productboard.com/features/{{ $json.feature_id }}`
18. **Slack** `slack` — text: "=:linear: {{ $json.data.name }} with status {{ $json.data.status.name }} and dates {{ $json.data.timeframe.startDate }} - {{ $json.data.timeframe.endDate }} updated :productboard: …[truncated]", select: "channel", blocksUi: "={
  "blocks": [
    {
      "type": "section",
      "text": {
        "type": "mrkdwn",
        "text": ":linear: to :productboard: update\n\n*{{ $json.data.name }}*\n\n*Status:*…[truncated]"

## 💡 AI-Powered Ideas for Improvement
### Explain
This n8n workflow automates the synchronization of project statuses between Linear and Productboard. It triggers when a project status changes in Linear, retrieves the relevant feature ID from Productboard, maps Linear statuses to Productboard statuses, updates the feature's status and timeframe in Productboard, and notifies a Slack channel about the update.

### Demonstrate
A project manager can use this workflow to ensure that project statuses in Linear are consistently reflected in Productboard. This helps in maintaining a single source of truth for project statuses, reducing manual updates and errors, and ensuring team alignment across tools.

### Imitate
1. Import the workflow into n8n.
2. Connect your Linear and Productboard accounts.
3. Set up webhooks in Linear to trigger on project status changes.
4. Customize the mapping of Linear to Productboard statuses.
5. Test the workflow by changing a project status in Linear.

### Practice
Create a test project in Linear and update its status. Observe how the workflow updates the corresponding feature in Productboard and sends a notification in Slack. Experiment with different status mappings to see their impact.

### WIIFM
Mastering this workflow enables you to offer seamless tool integration services, improving project management efficiency for clients. It can lead to upsells in project management automation and improve client satisfaction by ensuring data consistency across platforms.

## 🔧 Setup Instructions
1. **Connect Credentials:** httpHeaderAuth, slackApi, linearApi.
2. **Notification Targets:** Confirm channel/email IDs and that the bot/app is authorized to post.
3. **API Contracts:** Validate required headers and 2xx/4xx handling; add retries for 429/5xx.

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
