# GoogleCalendar Filter Automation Triggered
  ## 🚀 What It Does
  Monitors events, processes them, and **notifies** people/apps (Slack/Email) with structured updates.
  
  ## 💼 Business Use Case
  Great for **content, summarization, triage, or decisioning** where AI adds speed and consistency.
  
  ## ⚙️ How It Works
  1. **Trigger:** Triggered by **incoming email** (new message).
  2. **Gmail Trigger** `gmailTrigger` — filters: "[object Object]", pollTimes: "[object Object]"
3. **Chat OpenAI** `lmChatOpenAi` — model: `gpt-4`
4. **Workflow Tool** `toolWorkflow` — name: "Calendar_Availability", workflowId: "={{ $workflow.id }}", description: "Call this tool to get my calendar availability as stringified JSON array."
5. **Chat OpenAI1** `lmChatOpenAi` — model: `gpt-4`
6. **Sticky Note** `stickyNote` — width: "616.8060552874073", height: "410.24791575252334", content: "## Check if incoming email is about appointment
We use LLM to check subject and body of the email and determine if it's an appointment request. "
7. **Sticky Note1** `stickyNote` — width: "676.1951194231482", height: "241.70645019745504", content: "## Get calendar availability and compose a response
Make sure to update the Workflow ID if you are running this as 2 workflows"
8. **Execute Workflow Trigger** `executeWorkflowTrigger` — configured for its default action.
9. **Structured Output Parser** `outputParserStructured` — jsonSchema: "{
 "type": "object",
 "properties": {
 "is_appointment": {
 "type": "boolean"
 }
 }
}"
10. **Sticky Note2** `stickyNote` — width: "810.4923211935056", height: "224.60561166142082", content: "### Get all query google events for the next month and extract relevant data"
11. **Sticky Note3** `stickyNote` — width: "444.4130232558142", height: "220.42397542781927", content: "### Wrap the result in `response` object and return "
12. **Classify appointment** `chainLlm` — prompt: "=Please evaluate the following email to determine if it suggests scheduling a meeting or a call:
Subject: {{ encodeURI($json.Subject) }}
Snippet: {{ encodeURI($json.snippet) }}
Ind…[truncated]"
13. **Google Calendar** `googleCalendar` — operation: **getAll**
14. **Is appointment request** `if` — conditions: "[object Object]", combineOperation: "any"
15. **Filter only confirmed and with set time** `filter` — conditions: "[object Object]"
16. **Agent** `agent` — text: "=Sender: {{ $('Gmail Trigger').item.json.From }}\nSubject: {{ $('Gmail Trigger').item.json.Subject }}\nEmail Text: {{ $('Gmail Trigger').item.json.snippet }}", options: "[object Object]"
17. **Extract start, end and name** `set` — values: "[object Object]", options: "[object Object]", keepOnlySet: "true"
18. **Send Reply** `gmail` — operation: **reply**
19. **Mark as read** `gmail` — operation: **markAsRead**
20. **Sort** `itemLists` — operation: **sort**
21. **Format response** `itemLists` — operation: **concatenateItems**
22. **Stringify Response** `set` — values: "[object Object]", options: "[object Object]", keepOnlySet: "true"
  
  ## 💡 AI-Powered Ideas for Improvement
  **Explain:**  
This n8n workflow automates email appointment scheduling. It starts by checking incoming emails for appointment requests using AI. If an appointment request is detected, it checks your calendar for availability, then automatically composes and sends a response email with suggested meeting times. It also marks the email as read once processed.

**Demonstrate:**  
A consultant could use this workflow to automatically manage their meeting schedule, ensuring they never miss an appointment request and always respond promptly with available times, improving client relations.

**Imitate:**  
1. Import the workflow into n8n.
2. Connect your Gmail and Google Calendar accounts.
3. Customize the email filters and calendar settings.
4. Test with a sample email to ensure it identifies appointment requests correctly and sends responses.

**Practice:**  
Create a test email account and send appointment requests to your Gmail. Run the workflow to see how it identifies requests and responds. Adjust the AI model or calendar settings to optimize accuracy.

**WIIFM:**  
By mastering this workflow, you can offer a valuable service to clients, automating their appointment scheduling process. This can save them time, enhance client interactions, and potentially increase your service offerings and income in the automation business.
  
  ## 🔧 Setup Instructions
  1. **Connect Credentials:** gmailOAuth2, openAiApi, googleCalendarOAuth2Api.
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
  