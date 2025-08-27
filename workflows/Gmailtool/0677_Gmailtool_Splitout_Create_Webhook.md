# Gmailtool Splitout Create Webhook
  ## 🚀 What It Does
  Monitors events, processes them, and **notifies** people/apps (Slack/Email) with structured updates.
  
  ## 💼 Business Use Case
  Use as a **glue/API broker**: receive data, enrich/validate via APIs, and pass to downstream systems.
  
  ## ⚙️ How It Works
  1. **Trigger:** This workflow starts with **Execute Workflow Trigger**.
  2. **OpenAI Chat Model** `lmChatOpenAi` — model: `gpt-4o`
3. **Create Tasks** `toolWorkflow` — name: "create_task", schemaType: "manual", workflowId: "[object Object]"
4. **Notify Client About Tasks** `gmailTool` — sendTo: "={{ $fromAI("participant_email","participant email ","string") }}", message: "=Summary:
{{ $json.data.transcript.summary.bullet_gist }}

Action Items:
{{ $fromAI("participant_action_items","participant action items ","string") }}", options: "[object Object]"
5. **Execute Workflow Trigger** `executeWorkflowTrigger` — configured for its default action.
6. **Create Event** `googleCalendarTool` — end: "={{ $fromAI("end_date_time","Date and time of meeting end","string") }}", start: "={{ $fromAI("start_date_time","Date and time of meeting start","string") }}", calendar: "[object Object]"
7. **Webhook** `webhook` — method: **POST**, path: `/df852a9f-5ea3-43f2-bd49-d045aba5e9c9`
8. **Sticky Note** `stickyNote` — color: "4", height: "80", content: "### Replace API key for Fireflies
"
9. **Sticky Note1** `stickyNote` — color: "4", height: "80", content: "### Replace connections for Airtable and Google
"
10. **Sticky Note2** `stickyNote` — width: "820", height: "280", content: "### Scenario 2 - Create Tasks tool"
11. **Sticky Note3** `stickyNote` — width: "1100", height: "760", content: "### Scenario 1 - AI agent"
12. **Sticky Note4** `stickyNote` — color: "4", height: "80", content: "### Replace OpenAI connection
"
13. **Sticky Note5** `stickyNote` — color: "7", width: "280", height: "566"
14. **Sticky Note6** `stickyNote` — color: "7", width: "636.2128494576581", height: "497.1532689930921"
15. **Sticky Note7** `stickyNote` — color: "7", width: "330.5152611046425", height: "239.5888196628349"
16. **Split Out** `splitOut` — options: "[object Object]", fieldToSplitOut: "query.items"
17. **Get Meeting Content** `httpRequest` — method: **POST**, url: `https://api.fireflies.ai/graphql`
18. **Create Task** `airtable` — operation: **create**, table: `[object Object]`
19. **AI Agent** `agent` — text: "=Title: {{ $json.data.transcript.title }}

Participants: {{ $json.data.transcript.participants }}

Transcript: {{ JSON.stringify($json.data.transcript.sentences) }}

Bullet gist:{{…[truncated]", agent: "openAiFunctionsAgent", options: "[object Object]"
  
  ## 💡 AI-Powered Ideas for Improvement
  ### Explain
This workflow automates task creation and client notification based on meeting transcripts. It uses AI to analyze transcript content from Fireflies to identify tasks and action items. Tasks are created in Airtable, and clients are notified via Gmail about their responsibilities. If a follow-up call is needed, a Google Calendar event is scheduled.

### Demonstrate
A project manager can use this workflow to automate post-meeting actions. After a team meeting, the workflow analyzes the transcript, creates tasks in Airtable, notifies team members of their responsibilities via email, and schedules follow-up meetings if necessary, ensuring nothing is missed.

### Imitate
1. Import the workflow into n8n.
2. Connect Fireflies, Airtable, Gmail, and Google Calendar.
3. Set up the webhook to receive meeting transcripts.
4. Customize the Airtable base and Gmail message templates.
5. Test with a sample transcript to ensure tasks and notifications are generated correctly.

### Practice
Create a mock meeting transcript in Fireflies and run the workflow. Check Airtable to see if tasks are created and if email notifications are sent. Modify the transcript to include a follow-up call and ensure a Google Calendar event is scheduled.

### WIIFM
Mastering this workflow allows you to offer automated project management solutions, enhancing client productivity and ensuring efficient follow-up. This can lead to increased client satisfaction, repeat business, and potential upsells in your AI automation services.
  
  ## 🔧 Setup Instructions
  1. **Connect Credentials:** openAiApi, gmailOAuth2, airtableTokenApi, googleCalendarOAuth2Api.
2. **Data Mapping:** Verify base/sheet IDs and column names match exactly to prevent silent failures.
3. **Notification Targets:** Confirm channel/email IDs and that the bot/app is authorized to post.
4. **API Contracts:** Validate required headers and 2xx/4xx handling; add retries for 429/5xx.
  
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
  