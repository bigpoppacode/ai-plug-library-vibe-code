# Stickynote Gmail Create Triggered
## 🚀 What It Does
Monitors events, processes them, and **notifies** people/apps (Slack/Email) with structured updates.

## 💼 Business Use Case
Great for **content, summarization, triage, or decisioning** where AI adds speed and consistency.

## ⚙️ How It Works
1. **Trigger:** Triggered by **incoming email** (new message).
2. **Gmail Trigger** `gmailTrigger` — filters: "[object Object]", pollTimes: "[object Object]"
3. **OpenAI Chat Model1** `lmChatOpenAi` — options: "[object Object]"
4. **Gmail - read labels** `gmailTool` — resource: **label**
5. **Gmail - get message** `gmailTool` — operation: **get**
6. **Gmail - add label to message** `gmailTool` — operation: **addLabels**
7. **Gmail - create label** `gmailTool` — resource: **label**, operation: **create**
8. **Window Buffer Memory** `memoryBufferWindow` — sessionKey: "={{ $json.id }}", sessionIdType: "customKey"
9. **Sticky Note** `stickyNote` — content: "## Gmail trigger
Poll Gmail every x minutes, trigger when a new email is received.

- Gmail API"
10. **Sticky Note1** `stickyNote` — width: "780", height: "840", content: "## Gmail labelling agent
- Read the message
- Read existing labels
- Create a new label if needed
- Assign label to message

----

Objective:
Automatically categorize incoming emai…[truncated]"
11. **Sticky Note2** `stickyNote` — width: "440", content: "## Gmail API
- Add credentials "
12. **Sticky Note3** `stickyNote` — width: "440", content: "## OpenAI
- Add credentials "
13. **Wait** `wait` — amount: "1"
14. **Gmail labelling agent** `agent` — text: "=Label the email based on the details below:
{{ JSON.stringify($json) }}", options: "[object Object]", promptType: "define"

## 💡 AI-Powered Ideas for Improvement
### Explain
This n8n workflow automates the categorization of incoming emails in Gmail. It triggers every few minutes to check for new emails. When a new email arrives, it reads the email and its existing labels using the Gmail API. It then uses OpenAI to analyze the email's content, subject, sender, and recipient to decide on the most suitable label. If no existing label fits, it creates a new one and applies it to the email, ensuring that emails are organized efficiently and consistently.

### Demonstrate
A business owner could use this workflow to automatically sort incoming customer inquiries, ensuring that important emails are prioritized and categorized correctly, reducing the time spent on email management and improving response times.

### Imitate
1. Set up Gmail and OpenAI credentials in n8n.
2. Create a new n8n workflow and add a Gmail Trigger node to check for new emails.
3. Connect the OpenAI node to analyze the email content.
4. Use Gmail nodes to read existing labels, create new labels if needed, and apply them to the emails.
5. Test the workflow to ensure proper email categorization.

### Practice
Create a test Gmail account and send various types of emails to it. Set up the workflow in n8n and observe how it categorizes these emails. Adjust the OpenAI prompt to better fit your specific needs and test again to see the improvements.

### WIIFM
Mastering this workflow can help you provide valuable email management solutions to businesses, allowing them to streamline their communication processes. This skill can lead to new client opportunities and additional revenue streams in your automation business.

## 🔧 Setup Instructions
1. **Connect Credentials:** gmailOAuth2, openAiApi.
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
