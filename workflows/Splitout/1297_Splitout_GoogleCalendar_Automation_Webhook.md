# Splitout GoogleCalendar Automation Webhook
## 🚀 What It Does
Calls external APIs and uses **AI** to transform or decide, then routes the result downstream.

## 💼 Business Use Case
Use as a **glue/API broker**: receive data, enrich/validate via APIs, and pass to downstream systems.

## ⚙️ How It Works
1. **Trigger:** This workflow starts with **When clicking "Test workflow"**.
2. **OpenAI Chat Model1** `lmChatOpenAi` — options: "[object Object]"
3. **When clicking "Test workflow"** `manualTrigger` — configured for its default action.
4. **Structured Output Parser** `outputParserStructured` — jsonSchema: "{
 "type": "object",
 "properties": {
 "summary": { "type": "string" },
 "highlights": {
 "type": "array",
 "items": {
 "type": "object",
 "properties": {
 "attendee": { "type": "s…[truncated]"
5. **Execute Workflow Trigger** `executeWorkflowTrigger` — configured for its default action.
6. **Sticky Note** `stickyNote` — color: "7", width: "756.2929032891963", height: "445.79624302689535"
7. **Sticky Note2** `stickyNote` — color: "7", width: "586.8663941671947", height: "405.6964113279832"
8. **Sticky Note3** `stickyNote` — color: "7", width: "681.4281346810014", height: "588.2833041602365"
9. **Sticky Note4** `stickyNote` — color: "7", width: "591.4907024073684", height: "579.2725119898125"
10. **Sticky Note6** `stickyNote` — width: "359.6648027457353", height: "385.336571355038", content: "## Try It Out!
### This workflow does the following:
* Retrieves a meeting transcript
* Sends transcript to an AI Agent to parse and carry out follow up actions if necessary.
* If …[truncated]"
11. **Schedule Meeting** `toolWorkflow` — name: "create_calendar_event", fields: "[object Object]", workflowId: "={{ $workflow.id }}"
12. **Sticky Note5** `stickyNote` — color: "7", width: "464.50696860436165", height: "446.9122178333584"
13. **Sticky Note1** `stickyNote` — width: "184.0677386144551", height: "299.3566512487305", content: "















🚨**Required**
* Set your calendar event ID here."
14. **Sticky Note7** `stickyNote` — color: "5", width: "349.91944442094535", height: "80"
15. **Sticky Note8** `stickyNote` — width: "184.0677386144551", height: "299.3566512487305", content: "















🚨**Required**
* Set your calendar ID here."
16. **Get Calendar Event** `googleCalendar` — operation: **get**
17. **Edit Fields** `set` — options: "[object Object]", assignments: "[object Object]"
18. **Get Meeting ConferenceRecords** `httpRequest` — url: `https://meet.googleapis.com/v2/conferenceRecords`
19. **Actions Router** `switch` — rules: "[object Object]", options: "[object Object]"
20. **Get Meeting Transcript Location** `httpRequest` — url: `=https://meet.googleapis.com/v2/{{ $json.conferenceRecords[0].name }}/transcripts`
21. **Create Calendar Event1** `googleCalendar` — end: "={{ $json.query.end_date }} {{ $json.query.end_time }}", start: "={{ $json.query.start_date }} {{ $json.query.start_time }}", calendar: "[object Object]"
22. **Fallback Response** `set` — mode: "raw", options: "[object Object]", jsonOutput: "{
 "response": {
 "ok": false,
 "error": "The requested tool was not found or the service may be unavailable. Do not retry."
 }
}
"
23. **Get Transcript File** `googleDrive` — operation: **download**
24. **Get Attendees** `set` — options: "[object Object]", assignments: "[object Object]"
25. **PDF Loader** `extractFromFile` — operation: **pdf**
26. **Attendees List** `splitOut` — options: "[object Object]", fieldToSplitOut: "attendees"
27. **AI Agent** `agent` — text: "=system: your role is to help people get the most out of their meetings. You achieve this by helpfully summarising the meeting transcript to pull out useful information and key poi…[truncated]", agent: "openAiFunctionsAgent", options: "[object Object]"
28. **Add Attendee to Invite** `googleCalendar` — operation: **update**
29. **Response** `set` — options: "[object Object]", assignments: "[object Object]"

## 💡 AI-Powered Ideas for Improvement
### Explain
This workflow automates the process of handling meeting transcripts. It retrieves a Google Meet transcript, uses an AI agent to summarize and identify follow-up actions, and creates calendar events if needed. It ensures efficient meeting management by automating tasks like summarizing and scheduling follow-ups.

### Demonstrate
A consulting firm could use this workflow to automate post-meeting tasks, ensuring no action items are missed and follow-up meetings are scheduled promptly. This improves team efficiency and client satisfaction by ensuring timely follow-ups.

### Imitate
1. Import the workflow into n8n.
2. Connect your Google Calendar and Google Drive accounts.
3. Set your calendar event and ID in the workflow.
4. Run a test meeting and verify that the AI agent correctly summarizes and schedules follow-ups.
5. Customize the AI agent's prompts and actions to fit your specific needs.

### Practice
Create a mock meeting transcript and run the workflow. Check if the AI agent can summarize the meeting and schedule a follow-up event. Modify the transcript to include different action items to see how the workflow reacts.

### WIIFM
Mastering this workflow enables you to offer enhanced meeting management solutions, increasing productivity and client engagement. By automating post-meeting tasks, you can deliver value through improved organization and efficiency, potentially leading to increased revenue in your AI automation business.

## 🔧 Setup Instructions
1. **Connect Credentials:** openAiApi, googleOAuth2Api, googleDriveOAuth2Api, googleCalendarOAuth2Api.
2. **API Contracts:** Validate required headers and 2xx/4xx handling; add retries for 429/5xx.

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
