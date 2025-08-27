# Webhook Telegram Create Webhook
## 🚀 What It Does
Automates a flow using telegram×3, if×2, code.

## 💼 Business Use Case
Use to eliminate manual copy-paste and standardize a recurring business process.

## ⚙️ How It Works
1. **Trigger:** This workflow starts with **check issue body, assignee and hook type**.
2. **jira-webhook** `webhook` — method: **POST**, path: `/1e4989bf-6a23-4415-bd17-72d08130c5c4`
3. **check issue body, assignee and hook type** `if` — options: "[object Object]", conditions: "[object Object]"
4. **telegram account** `code` — jsCode: "const accountId = $('jira-webhook').first().json.body.fields.assignee?.accountId

const telegramAccounts = {
  "[jira account id]": 00000000, // telegram chat id
}

const telegramC…[truncated]"
5. **check tg account exists** `if` — options: "[object Object]", conditions: "[object Object]", looseTypeValidation: "true"
6. **check type** `switch` — rules: "[object Object]", options: "[object Object]"
7. **Send Create** `telegram` — text: "=🆕 New {{ $('jira-webhook').item.json.body.fields.issuetype.name }}

🔰 Project: `{{ $('jira-webhook').item.json.body.fields.project.name }}`

🆔 Key: `{{ $('jira-webhook').item.j…[truncated]", chatId: "={{ $("telegram account").item.json.telegramChatId }}", additionalFields: "[object Object]"
8. **Send Update** `telegram` — text: "=⚠️ Update {{ $('jira-webhook').item.json.body.fields.issuetype.name }}

🔰 Project: `{{ $('jira-webhook').item.json.body.fields.project.name }}`

🆔 Key: `{{ $('jira-webhook').ite…[truncated]", chatId: "={{ $("telegram account").item.json.telegramChatId }}", additionalFields: "[object Object]"
9. **Send Assign Alert** `telegram` — text: "=👩‍💻👨‍💻 Assigned to you {{ $('jira-webhook').item.json.body.fields.issuetype.name }}

🔰 Project: `{{ $('jira-webhook').item.json.body.fields.project.name }}`

🆔 Key: `{{ $('j…[truncated]", chatId: "={{ $("telegram account").item.json.telegramChatId }}", additionalFields: "[object Object]"

## 💡 AI-Powered Ideas for Improvement
### Explain
This n8n workflow automates notifications for Jira issues via Telegram. It triggers when a Jira webhook detects a new issue, an update, or a change in assignee. The workflow verifies if the assignee has a Telegram account, then sends a message to the appropriate Telegram chat, notifying about the issue's creation, update, or assignment.

### Demonstrate
A software development team can use this workflow to ensure team members receive instant notifications on their mobile devices via Telegram when they are assigned new tasks or when existing tasks are updated, ensuring prompt attention and action.

### Imitate
1. Import the workflow into n8n.
2. Set up a Jira webhook to trigger on issue events.
3. Map Jira account IDs to Telegram chat IDs in the code node.
4. Customize the Telegram message templates.
5. Test the workflow by creating or updating issues in Jira.

### Practice
Create a test Jira project and use the workflow to simulate issue creation and updates. Observe how the workflow sends notifications to the specified Telegram chats. Adjust the message content and conditions to suit different scenarios.

### WIIFM
Mastering this workflow enables you to offer real-time notification solutions to businesses, enhancing team communication and efficiency. This capability can differentiate your services, attract new clients, and increase revenue in your automation business.

## 🔧 Setup Instructions
1. **Connect Credentials:** telegramApi, httpHeaderAuth.

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
