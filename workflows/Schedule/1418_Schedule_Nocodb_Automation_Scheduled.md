# Schedule Nocodb Automation Scheduled
## 🚀 What It Does
Monitors events, processes them, and **notifies** people/apps (Slack/Email) with structured updates.

## 💼 Business Use Case
Great for **content, summarization, triage, or decisioning** where AI adds speed and consistency.

## ⚙️ How It Works
1. **Trigger:** This workflow starts with **Incident Form**.
2. **Incident Form** `formTrigger` — options: "[object Object]", formTitle: "Incident Form", formFields: "[object Object]"
3. **OpenAI Chat Model1** `lmChatOpenAi` — model: `[object Object]`
4. **Structure Output Todoist Ready1** `outputParserStructured` — jsonSchemaExample: "{
	"category": "critical",
  "response_time": "1",
  "resolution_time": "8",
  "default_assignee": "email@example.com"
}"
5. **Sticky Note** `stickyNote` — height: "440", content: "## Incident Form
This workflow is triggered when someone fills incident form. You could replace it for example with email or webhook, but you will need to update references in othe…[truncated]"
6. **Sticky Note1** `stickyNote` — width: "1320", height: "440", content: "## Parse Incidents
Allow AI to compare your incident definitions with input from user. AI will attempt to assign proper category and proper person to given incident. WIth AI assign…[truncated]"
7. **When clicking ‘Test workflow’** `manualTrigger` — configured for its default action.
8. **Check status every day** `scheduleTrigger` — rule: "[object Object]"
9. **Sticky Note2** `stickyNote` — width: "1080", height: "400", content: "## Stay Informed
Inform both client and developer about current task status. Maybe task was not picked up. Feel free to replace with Slack messages if applicable"
10. **Sticky Note3** `stickyNote` — width: "1080", height: "460", content: "## Task incomplete
Inform both client and developer that task is after due. Developer should receive message and react accordingly."
11. **Sticky Note4** `stickyNote` — width: "480", height: "580", content: "## Trigger Task Check Daily
Running this more often is probably not good idea because client may receive too many messages when task is delayed"
12. **Get incident definitions** `nocoDb` — operation: **getAll**, table: `mt94l49b6zocsxy`
13. **Aggregate for AI parsing** `aggregate` — options: "[object Object]", aggregate: "aggregateAllItemData"
14. **Assign Category** `agent` — text: "=You are professional support assistance. You are receiving information about different issues users are having. Your task is to assign proper category to task requested.

You shou…[truncated]", options: "[object Object]", promptType: "define"
15. **Format for Noco** `set` — options: "[object Object]", assignments: "[object Object]"
16. **Insert Incident** `nocoDb` — operation: **create**, table: `mwh33g1yyeg9z6k`
17. **On schedule or during flow** `noOp` — configured for its default action.
18. **Get Unpicked Tasks** `nocoDb` — operation: **getAll**, table: `mwh33g1yyeg9z6k`
19. **Get Unfinished Tasks** `nocoDb` — operation: **getAll**, table: `mwh33g1yyeg9z6k`
20. **Task is not picked up after expected response** `if` — options: "[object Object]", conditions: "[object Object]"
21. **Task is not complete in expected time** `if` — options: "[object Object]", conditions: "[object Object]"
22. **Send email to client** `emailSend` — text: "We are sorry that we have not yet looked at your message. Although We are working heavily, currently all our developers are busy. But we have reminded asignee on your request and w…[truncated]", options: "[object Object]", subject: "Your task is important to us"
23. **If there is asignee email** `if` — options: "[object Object]", conditions: "[object Object]"
24. **Send email to client1** `emailSend` — text: "We are sorry that we have not yet finished your task. Although We are working heavily, currently all our developers are busy. But we have reminded asignee on your request and we wi…[truncated]", options: "[object Object]", subject: "Your task is important to us"
25. **If there is assignee slack** `if` — options: "[object Object]", conditions: "[object Object]"
26. **Send email to asignee** `emailSend` — text: "You have an outstanding task that should be picked up. Visit your kanban board for more information ", options: "[object Object]", subject: "Your task is important to us"
27. **Slack to assignee** `slack` — text: "You have unfinished task in progress. Inform client on your next steps and update expected resolution time.", user: "[object Object]", select: "user"
28. **Send another email to asignee** `emailSend` — text: "You have an unfninished task that should be done by now. Visit your kanban board for more information ", options: "[object Object]", subject: "Your task is important to us"

## 💡 AI-Powered Ideas for Improvement
**Explain:** This n8n workflow automates incident management by starting with an incident form submission. It uses OpenAI to categorize incidents based on predefined criteria, stores the data in a NocoDB database, and checks task statuses daily. If tasks are not picked up or completed on time, it sends email notifications to clients and assignees, ensuring timely responses and resolutions.

**Demonstrate:** A business can use this workflow to streamline their incident handling process, ensuring quick categorization and assignment, and automatic follow-ups on unresolved tasks, improving efficiency and customer satisfaction.

**Imitate:** 
1. Import the workflow into n8n.
2. Connect your OpenAI and NocoDB accounts.
3. Customize the incident form and database schema to match your needs.
4. Set up email credentials for notifications.
5. Test the workflow with a few incident submissions.

**Practice:** Create a test incident form and submit sample incidents. Observe how the workflow categorizes, assigns, and follows up on tasks. Adjust the categories and response times to see their impact.

**WIIFM:** Mastering this workflow can significantly enhance your ability to deliver efficient incident management solutions. It helps attract clients seeking automation in support processes, potentially increasing your revenue streams in the AI automation business.

## 🔧 Setup Instructions
1. **Connect Credentials:** openAiApi, nocoDbApiToken, smtp, slackOAuth2Api.
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
