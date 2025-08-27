# Stickynote Gmail Send Triggered
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
**Explain:**  
This n8n workflow automatically categorizes incoming Gmail emails. It triggers whenever a new email arrives, retrieves the email, checks existing labels, and uses OpenAI to determine the most relevant label. If no suitable label exists, it creates a new one and assigns it to the email, ensuring your inbox stays organized.

**Demonstrate:**  
A business owner could use this workflow to automatically sort incoming client emails into categories like "Sales," "Support," or "Inquiries," allowing them to quickly prioritize and respond to important messages.

**Imitate:**  
1. Import the workflow into n8n.
2. Connect your Gmail and OpenAI accounts.
3. Set the Gmail trigger to poll for new emails.
4. Customize label criteria in the OpenAI node.
5. Test with sample emails to ensure correct labeling.

**Practice:**  
Create a test Gmail account, send various emails with distinct subjects and contents. Run the workflow and observe how it categorizes each email. Adjust the AI prompt for better accuracy and test again.

**WIIFM:**  
Mastering this workflow allows you to offer advanced email management solutions to clients, enhancing productivity and organization. It can differentiate your services, attract clients needing efficient email handling, and generate income as part of your automation business.

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
