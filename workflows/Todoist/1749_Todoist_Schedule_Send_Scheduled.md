# Todoist Schedule Send Scheduled
## 🚀 What It Does
Monitors events, processes them, and **notifies** people/apps (Slack/Email) with structured updates.

## 💼 Business Use Case
Great for **content, summarization, triage, or decisioning** where AI adds speed and consistency.

## ⚙️ How It Works
1. **Trigger:** This workflow starts with **When clicking ‘Test workflow’**.
2. **When clicking ‘Test workflow’** `manualTrigger` — configured for its default action.
3. **OpenAI Chat Model** `lmChatOpenAi` — model: `[object Object]`
4. **Structure Output Todoist Ready** `outputParserStructured` — jsonSchemaExample: "{
	"content": "Task name",
	"description": "Description of the thread",
    "actions": "What actions should you take before closing this task",
    "answer": "Proposed answer to th…[truncated]"
5. **Email Trigger (IMAP)** `emailReadImap` — options: "[object Object]"
6. **Schedule Trigger** `scheduleTrigger` — rule: "[object Object]"
7. **Sticky Note** `stickyNote` — width: "500", height: "660", content: "## Select Trigger
**This workflow will work with many triggers**"
8. **Sticky Note1** `stickyNote` — width: "560", height: "320", content: "## Read and Star
**Mark messages as Read and add Star to them**
You can delete this section if you don't want to make this happen automatically to your emails"
9. **Sticky Note2** `stickyNote` — width: "720", height: "340", content: "## Close Task
**If Email was Unstarred manually by you, then we can probably close task, so we are closing it**"
10. **Sticky Note3** `stickyNote` — width: "1420", height: "600", content: "## Make New Task in Todoist
If there is no task on Todoist with same subject as your either starred or unread message, then it's time to create one.
But to make it easier for you t…[truncated]"
11. **No Operation, do nothing** `noOp` — configured for its default action.
12. **Get Unread From Inbox** `gmail` — operation: **getAll**
13. **Get Starred From Inbox** `gmail` — operation: **getAll**
14. **Get Open Tasks** `todoist` — operation: **getAll**
15. **Mark As Read** `gmail` — operation: **markAsRead**
16. **Merge Starred and Unread Messages** `merge` — configured for its default action.
17. **Star** `gmail` — operation: **addLabels**
18. **Enrich Emails With Tasks** `merge` — mode: "combine", options: "[object Object]", advanced: "true"
19. **Enrich Tasks with Emails** `merge` — mode: "combine", options: "[object Object]", advanced: "true"
20. **If Task Not Exist** `if` — options: "[object Object]", conditions: "[object Object]"
21. **If Email Unstarred (Not Exist)** `if` — options: "[object Object]", conditions: "[object Object]"
22. **Get Full Message** `gmail` — operation: **get**
23. **Close Task** `todoist` — operation: **close**
24. **Summarize Message** `agent` — text: "=You are a professional email assistant. Your task is to analyze provided email content and transform email into task. Your output will be JSON and will have:

- "content", which i…[truncated]", options: "[object Object]", promptType: "define"
25. **If AI responded properly** `if` — options: "[object Object]", conditions: "[object Object]"
26. **Create Todoist Task** `todoist` — content: "={{ $json.output.content }}", options: "[object Object]", project: "[object Object]"

## 💡 AI-Powered Ideas for Improvement
- **Explain:** This n8n workflow automates the conversion of emails into tasks in Todoist. It retrieves unread and starred emails, marks them as read and starred, and checks if there's a corresponding task in Todoist. If not, it uses OpenAI to summarize the email and create a new task with proposed actions and responses. If an email is unstarred manually, the related task is closed.
  
- **Demonstrate:** A business owner could use this workflow to ensure that every important email is tracked and actioned without missing any, turning their email management into a streamlined task management process.

- **Imitate:** 1. Import the workflow into your n8n instance. 2. Connect your Gmail and Todoist accounts. 3. Set up triggers (manual or schedule). 4. Test the workflow with a few emails to ensure tasks are created correctly. 5. Adjust the workflow to fit your specific email and task management needs.

- **Practice:** Create a test email with specific details. Run the workflow and observe how it creates a task in Todoist with the email content summarized and actions proposed. Try un-starring an email and see how the task is automatically closed.

- **WIIFM (What's In It For Me):** Mastering this workflow can help you automate email management, ensuring important emails are not overlooked. It can enhance productivity and offer a valuable service to clients, allowing you to expand your AI automation business and create additional revenue streams.

## 🔧 Setup Instructions
1. **Connect Credentials:** gmailOAuth2, openAiApi, todoistApi, imap.
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
