# Code Pipedrive Automation Triggered
  ## 🚀 What It Does
  Monitors events, processes them, and **notifies** people/apps (Slack/Email) with structured updates.
  
  ## 💼 Business Use Case
  Ideal for **lead intake**, **enrichment**, and **CRM updates** with alerts to the right channel.
  
  ## ⚙️ How It Works
  1. **Trigger:** Triggered by **incoming email** (new message).
  2. **Email box 1** `gmailTrigger` — simple: "false", filters: "[object Object]", options: "[object Object]"
3. **Sticky Note** `stickyNote` — width: "452.37174177689576", height: "462.1804790107177", content: "## About the workflow
The workflow reads every reply that is received from a cold email campaign and qualifies if the lead is interested in a meeting. If the lead is interested, a …[truncated]"
4. **Email box 2** `gmailTrigger` — simple: "false", filters: "[object Object]", options: "[object Object]"
5. **Get email** `set` — fields: "[object Object]", options: "[object Object]"
6. **Search Person in CRM** `pipedrive` — resource: **person**, operation: **search**
7. **Get person from CRM** `pipedrive` — resource: **person**, operation: **get**
8. **In campaign?** `if` — conditions: "[object Object]"
9. **Is interested?** `openAi` — resource: **chat**, prompt: "[object Object]", model: `gpt-4`
10. **Get response** `code` — mode: "runOnceForEachItem", jsCode: "let interested = JSON.parse($json["message"]["content"]).interested
let reason = JSON.parse($json["message"]["content"]).reason

return {json:{
 interested: interested,
 reason: re…[truncated]"
11. **IF interested** `if` — conditions: "[object Object]"
12. **Create deal in CRM** `pipedrive` — title: "={{ $('Get person from CRM').item.json.Name }} Deal", additionalFields: "[object Object]"
  
  ## 💡 AI-Powered Ideas for Improvement
  **Explain:**  
This n8n workflow automates lead qualification from a cold email campaign. It reads replies from emails, uses AI to determine if a lead is interested in a meeting, and if so, adds them as a deal in Pipedrive CRM. This helps streamline the process of identifying and managing potential clients efficiently.

**Demonstrate:**  
A sales consultant can use this workflow to automatically manage responses from a cold email campaign, ensuring that interested leads are quickly identified and added to their CRM, saving time and enhancing lead management.

**Imitate:**  
1. Import the workflow into n8n.
2. Connect your Gmail, OpenAI, and Pipedrive accounts.
3. Set up Gmail triggers for your email inboxes.
4. Customize the Pipedrive fields and conditions as needed.
5. Test the workflow to ensure it identifies and processes interested leads correctly.

**Practice:**  
Create a test email campaign with sample replies. Run the workflow to see how it identifies interested leads and updates Pipedrive. Adjust the AI prompt or conditions to improve accuracy.

**WIIFM:**  
Mastering this workflow can help you offer automated lead management services, improving sales efficiency for clients. This can lead to increased business opportunities and income through enhanced service offerings in your AI automation business.
  
  ## 🔧 Setup Instructions
  1. **Connect Credentials:** pipedriveApi, openAiApi.
2. **Notification Targets:** Confirm channel/email IDs and that the bot/app is authorized to post.
  
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
  