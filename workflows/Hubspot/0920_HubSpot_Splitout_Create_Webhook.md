# Hubspot Splitout Create Webhook
  ## 🚀 What It Does
  Monitors events, processes them, and **notifies** people/apps (Slack/Email) with structured updates.
  
  ## 💼 Business Use Case
  Use as a **glue/API broker**: receive data, enrich/validate via APIs, and pass to downstream systems.
  
  ## ⚙️ How It Works
  1. **Trigger:** This workflow starts with **When Executed by Another Workflow**.
  2. **Webhook** `webhook` — method: **POST**, path: `/06d29616-8fa9-42cf-8b5f-abe856083c75`
3. **Sticky Note** `stickyNote` — color: "4", width: "320", height: "440"
4. **Create Event with Attendee** `googleCalendarTool` — end: "={{ $fromAI("eventEnd") }}", start: "={{ $fromAI("eventStart") }}", calendar: "[object Object]"
5. **Create Event** `googleCalendarTool` — end: "={{ $fromAI("eventEnd") }}", start: "={{ $fromAI("eventStart") }}", calendar: "[object Object]"
6. **Get Events** `googleCalendarTool` — operation: **getAll**
7. **Delete Event** `googleCalendarTool` — operation: **delete**
8. **Update Event** `googleCalendarTool` — operation: **update**
9. **When Executed by Another Workflow** `executeWorkflowTrigger` — inputSource: "passthrough"
10. **OpenAI Chat Model2** `lmChatOpenAi` — model: `[object Object]`
11. **calendarAgent** `toolWorkflow` — workflowId: "[object Object]", description: "Call this tool for any calendar action.", workflowInputs: "[object Object]"
12. **Structured Output Parser** `outputParserStructured` — jsonSchemaExample: "{
	"subject": "",
	"body": ""
}"
13. **Sticky Note1** `stickyNote` — color: "5", width: "680", height: "1340"
14. **HubSpot Trigger** `hubspotTrigger` — eventsUi: "[object Object]", additionalFields: "[object Object]"
15. **Sticky Note2** `stickyNote` — color: "4", width: "400", height: "320"
16. **Sticky Note3** `stickyNote` — color: "4", width: "1080", height: "560"
17. **Sticky Note4** `stickyNote` — color: "4", width: "440", height: "540"
18. **OpenAI Model** `lmChatOpenAi` — model: `gpt-4o`
19. **Sticky Note7** `stickyNote` — width: "320", height: "260", content: "## Contact me
- If you need any modification to this workflow
- if you need some help with this workflow
- Or if you need any workflow in n8n, Make, or Langchain / Langgraph

Write…[truncated]"
20. **Calendar Agent** `agent` — text: "={{ $json.query }}", options: "[object Object]", promptType: "define"
21. **Enter your company data here** `set` — options: "[object Object]", assignments: "[object Object]"
22. **Success** `set` — options: "[object Object]", assignments: "[object Object]"
23. **Try Again** `set` — options: "[object Object]", assignments: "[object Object]"
24. **Get list of owners** `httpRequest` — url: `https://api.hubapi.com/crm/v3/owners`
25. **Split Out owners** `splitOut` — options: "[object Object]", fieldToSplitOut: "results"
26. **Get current owner** `filter` — options: "[object Object]", conditions: "[object Object]"
27. **If a contact is created** `if` — options: "[object Object]", conditions: "[object Object]"
28. **Get all info about the contact** `hubspot` — operation: **get**
29. **Write a personalized message** `agent` — text: "=Your task is to write a personalized Welcome email to a recipient.
Write also to indicate him that he will receive shortly an invitation for a meeting to resolve his doubts. Use f…[truncated]", options: "[object Object]", promptType: "define"
30. **Transforms markdown to HTML** `markdown` — mode: "markdownToHtml", options: "[object Object]", markdown: "={{ $json.output.body }}"
31. **Send the message** `gmail` — sendTo: "={{ $('Get all info about the contact').item.json.properties.email.value }}", message: "={{ $json.data }}", options: "[object Object]"
32. **Set owner to contact** `hubspot` — email: "={{ $('Get all info about the contact').item.json.properties.email.value }}", options: "[object Object]", authentication: "oAuth2"
  
  ## 💡 AI-Powered Ideas for Improvement
  **Explain:**  
This n8n workflow automates the onboarding process for new customers. It starts with a webhook or CRM trigger when a new customer is added. The workflow sends a personalized welcome email, schedules a welcome call using Google Calendar, and assigns a customer success manager (CSM) using HubSpot.

**Demonstrate:**  
A consulting firm could use this workflow to streamline client onboarding, ensuring each new client receives a consistent welcome experience. This enhances client satisfaction and reduces manual administrative work.

**Imitate:**  
1. Set up a webhook or CRM trigger in n8n.
2. Connect your Google Calendar and HubSpot accounts.
3. Configure email settings for personalized welcome messages.
4. Test the workflow with sample data to ensure it triggers correctly.
5. Activate the workflow for live use.

**Practice:**  
Create a test workflow that sends you an email when a new contact is added to your CRM. Use Google Calendar to schedule a meeting and verify the workflow's functionality.

**WIIFM:**  
Mastering this workflow allows you to offer enhanced onboarding services, improving client retention and satisfaction. This not only adds value to your services portfolio but also opens up opportunities for upselling and increased revenue in your AI automation business.
  
  ## 🔧 Setup Instructions
  1. **Connect Credentials:** googleCalendarOAuth2Api, openAiApi, hubspotOAuth2Api, hubspotDeveloperApi, gmailOAuth2.
2. **Notification Targets:** Confirm channel/email IDs and that the bot/app is authorized to post.
3. **API Contracts:** Validate required headers and 2xx/4xx handling; add retries for 429/5xx.
  
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
  