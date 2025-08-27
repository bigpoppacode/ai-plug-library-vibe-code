# Code Pipedrive Create Triggered
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
  reason: …[truncated]"
11. **IF interested** `if` — conditions: "[object Object]"
12. **Create deal in CRM** `pipedrive` — title: "={{ $('Get person from CRM').item.json.Name }} Deal", additionalFields: "[object Object]"
  
  ## 💡 AI-Powered Ideas for Improvement
  ### Explain
This n8n workflow automates the process of handling replies from a cold email campaign. It reads the responses, checks if the person is interested in a meeting using AI (OpenAI's GPT-4), and if they are, it creates a deal in the Pipedrive CRM. It starts by fetching emails from Gmail, searches for the corresponding person in Pipedrive, verifies if the lead is part of the campaign, and uses AI to determine interest. If the lead is interested, a deal is created in CRM.

### Demonstrate
A sales consultant could use this workflow to streamline their lead qualification process, ensuring that only interested leads are pursued, saving time and increasing efficiency in their sales pipeline.

### Imitate
1. Import the workflow into n8n.
2. Connect Gmail and Pipedrive accounts.
3. Set up email triggers to fetch replies.
4. Customize AI prompts to fit your criteria.
5. Test with a few email replies to verify it creates deals for interested leads.

### Practice
Create a test email campaign and use this workflow to process responses. Adjust the AI prompt to refine interest detection. Observe how the workflow updates CRM records and experiment with different email triggers.

### WIIFM
Mastering this workflow can significantly enhance your sales process, saving time and ensuring focus on high-potential leads. By offering this as a service, you can help businesses improve their sales efficiency and potentially increase your income by providing valuable automation solutions.
  
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
  