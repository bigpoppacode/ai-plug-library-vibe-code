# Limit Webhook Send Webhook
  ## 🚀 What It Does
  Monitors events, processes them, and **notifies** people/apps (Slack/Email) with structured updates.
  
  ## 💼 Business Use Case
  Use as a **glue/API broker**: receive data, enrich/validate via APIs, and pass to downstream systems.
  
  ## ⚙️ How It Works
  1. **Trigger:** This workflow starts with **Sticky Note**.
  2. **Webhook** `webhook` — method: **POST**, path: `/e03c7d39-1dce-4ac5-8db8-2b4511a85a07`
3. **Sticky Note11** `stickyNote` — color: "7", width: "709.3965558024038", height: "887.8719128264411"
4. **Sticky Note** `stickyNote` — color: "7", width: "579.6865154062818", height: "647.0013506366993"
5. **Sticky Note12** `stickyNote` — color: "7", width: "710.3172669178614", height: "563.0861092667175"
6. **Sticky Note2** `stickyNote` — color: "7", width: "709.0896745965773", height: "550.5825149622945"
7. **Sticky Note1** `stickyNote` — color: "7", width: "714.3631681325317", height: "911.8420872184945"
8. **Sticky Note3** `stickyNote` — color: "7", width: "709.4188646504804", height: "492.8100521251637"
9. **Sticky Note5** `stickyNote` — color: "7", width: "956.6393374313541", height: "870.8771447693905"
10. **Sticky Note4** `stickyNote` — color: "7", width: "657.1120966423081", height: "870.9953951550463"
11. **Parse Webhook** `set` — options: "[object Object]", assignments: "[object Object]"
12. **Route Message** `switch` — rules: "[object Object]", options: "[object Object]"
13. **Respond to Slack Webhook** `respondToWebhook` — options: "[object Object]", respondWith: "noData"
14. **Close Modal Popup** `respondToWebhook` — options: "[object Object]", respondWith: "noData"
15. **Send 200** `respondToWebhook` — options: "[object Object]"
16. **ServiceNow Modal** `httpRequest` — method: **POST**, url: `https://slack.com/api/views.open`
17. **ServiceNow** `serviceNow` — resource: **incident**, operation: **getAll**
18. **Were Incidents Found?** `if` — options: "[object Object]", conditions: "[object Object]"
19. **Sort by Most Recent** `sort` — options: "[object Object]", sortFieldsUi: "[object Object]"
20. **No Matches - Was a Channel Selected?** `if` — options: "[object Object]", conditions: "[object Object]"
21. **Retain First 5 Incidents** `limit` — maxItems: "5"
22. **Channel - Notify User no Incidents Matched** `slack` — text: "=No incidents were found with a state of {{ $('Parse Webhook').item.json.response.view.state.values.state_selector.state_select.selected_option.text.text }} and priority of {{ $('P…[truncated]", select: "channel", channelId: "[object Object]"
23. **DM - Notify User no Incidents Matched** `slack` — text: "=No incidents were found with a state of {{ $('Parse Webhook').item.json.response.view.state.values.state_selector.state_select.selected_option.text.text }} and priority of {{ $('P…[truncated]", user: "[object Object]", select: "user"
  
  ## 💡 AI-Powered Ideas for Improvement
  ### Explain
This n8n workflow integrates Slack and ServiceNow to streamline incident management. It starts with a Slack-triggered webhook, allowing users to search ServiceNow for incidents based on priority and state. The results are sorted, and the top 5 incidents are formatted and sent back to Slack. If no incidents match, a notification is sent to the user or a selected channel, ensuring efficient communication and incident tracking.

### Demonstrate
A business owner might use this workflow to quickly get updates on the most recent and relevant incidents in ServiceNow, reducing the time spent manually searching and increasing response efficiency.

### Imitate
1. Import the workflow into n8n.
2. Connect your Slack and ServiceNow accounts.
3. Customize the webhook URL in Slack.
4. Set up the necessary ServiceNow queries for your incidents.
5. Test by triggering the workflow from Slack.

### Practice
Create a dummy Slack channel and ServiceNow instance. Use the workflow to simulate incident searches and observe how the workflow responds to different inputs and conditions.

### WIIFM
Learning this workflow empowers you to automate incident management, reducing manual tasks and errors. Mastery of such workflows can enhance your service offerings, attract new clients, and increase revenue by providing efficient automation solutions.
  
  ## 🔧 Setup Instructions
  1. **Connect Credentials:** slackApi, serviceNowBasicApi.
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
  