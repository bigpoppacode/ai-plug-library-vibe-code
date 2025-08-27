# Telegram Filter Export Triggered
## 🚀 What It Does
Monitors events, processes them, and **notifies** people/apps (Slack/Email) with structured updates.

## 💼 Business Use Case
Great for **content, summarization, triage, or decisioning** where AI adds speed and consistency.

## ⚙️ How It Works
1. **Trigger:** This workflow starts with **When clicking ‘Test workflow’**.
2. **When clicking ‘Test workflow’** `manualTrigger` — configured for its default action.
3. **OpenRouter Chat Model** `lmChatOpenRouter` — model: `openai/gpt-4.1-nano`
4. **Telegram Trigger** `telegramTrigger` — updates: "message", additionalFields: "[object Object]"
5. **Sticky Note** `stickyNote` — width: "1660", height: "680", content: "## Mail Agent
For emails in the inbox, archive those that are completely unnecessary, and label the rest based on their relevance.

"
6. **Sticky Note1** `stickyNote` — color: "5", width: "180", height: "360"
7. **Sticky Note2** `stickyNote` — color: "4", width: "180", height: "360"
8. **Sticky Note3** `stickyNote` — color: "4", width: "180", height: "360"
9. **Sticky Note4** `stickyNote` — color: "3", width: "980", height: "540"
10. **mail_label_setter** `gmailTool` — operation: **addLabels**
11. **mail_archiver** `gmailTool` — operation: **removeLabels**
12. **OpenRouter Chat Model1** `lmChatOpenRouter` — model: `openai/gpt-4.1-nano`
13. **Get mails in INBOX** `gmail` — operation: **getAll**
14. **Filter processed** `filter` — options: "[object Object]", conditions: "[object Object]"
15. **Categoriser** `agent` — text: "=<task>
Process mail
</task>
<mail>
<id>{{ $json.id }}</id>
<from>{{ $json.From }}</from>
<subject>{{ $json.Subject }}</subject>
<body>{{ $json.snippet }}</body>
</mail>", options: "[object Object]", promptType: "define"
16. **Aggregate** `aggregate` — options: "[object Object]", aggregate: "aggregateAllItemData"
17. **Reporter** `agent` — text: "=Summarize data
```
{{ $json.data.map(item => item.output + '\n\n') }}
```
", options: "[object Object]", promptType: "define"
18. **Telegram** `telegram` — text: "={{ $json.output }}", chatId: "={{ $('Telegram Trigger').item.json.message.chat.id }}", additionalFields: "[object Object]"

## 💡 AI-Powered Ideas for Improvement
### Explain
This n8n workflow automates the processing of emails in a Gmail inbox. It retrieves emails, filters out those already processed, and uses an AI model to categorize them. Emails deemed unnecessary are archived, while others are labeled based on their content. The results are then summarized and sent via Telegram.

### Demonstrate
A consultant could use this workflow to manage client communications more efficiently, ensuring important emails are prioritized and unnecessary ones are archived, thus saving time and improving response times.

### Imitate
1. Import the workflow into your n8n environment.
2. Connect your Gmail and Telegram accounts.
3. Set up the Telegram bot for notifications.
4. Test using the manual trigger to ensure emails are processed and notifications are sent.

### Practice
Create a test Gmail account and populate it with a mix of important and unimportant emails. Run the workflow to see how it categorizes and processes these emails, adjusting filters and AI prompts as needed.

### WIIFM
Mastering this workflow enhances your ability to automate email management, a service that many businesses value. Offering this as part of your AI automation services can attract clients looking to streamline communications, increasing your potential for income generation.

## 🔧 Setup Instructions
1. **Connect Credentials:** openRouterApi, telegramApi, gmailOAuth2.
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
