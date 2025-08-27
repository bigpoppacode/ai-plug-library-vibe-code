# Code Respondtowebhook Create Webhook
  ## 🚀 What It Does
  Calls external APIs and uses **AI** to transform or decide, then routes the result downstream.
  
  ## 💼 Business Use Case
  Use as a **glue/API broker**: receive data, enrich/validate via APIs, and pass to downstream systems.
  
  ## ⚙️ How It Works
  1. **Trigger:** This workflow starts with **Execute Workflow Trigger**.
  2. **Window Buffer Memory** `memoryBufferWindow` — sessionKey: "={{ $json.sessionId }}", sessionIdType: "customKey", contextWindowLength: "20"
3. **OpenAI Chat Model** `lmChatOpenAi` — model: `gpt-4o-2024-08-06`
4. **Make Appointment** `toolHttpRequest` — method: **POST**, url: `https://graph.microsoft.com/v1.0/me/events`
5. **Execute Workflow Trigger** `executeWorkflowTrigger` — configured for its default action.
6. **Get Availability** `toolWorkflow` — name: "Get_availability", fields: "[object Object]", workflowId: "[object Object]"
7. **Send Message** `toolWorkflow` — name: "Send_email", fields: "[object Object]", workflowId: "[object Object]"
8. **Chat Trigger** `chatTrigger` — mode: "webhook", public: "true", options: "[object Object]"
9. **Sticky Note** `stickyNote` — width: "311.6936390497898", height: "205.34013605442183", content: "Ensure these referance this workflow, replace placeholders"
10. **Sticky Note1** `stickyNote` — width: "468", height: "238", content: "modify business hours
modify timezones"
11. **Sticky Note8** `stickyNote` — color: "6", width: "668", height: "111"
12. **Sticky Note9** `stickyNote` — color: "7", width: "667", height: "497"
13. **Sticky Note2** `stickyNote` — color: "7", width: "600", height: "500"
14. **Sticky Note3** `stickyNote` — color: "4", width: "260", height: "240"
15. **Sticky Note4** `stickyNote` — color: "6", width: "208", height: "238"
16. **Switch** `switch` — rules: "[object Object]", options: "[object Object]"
17. **If** `if` — options: "[object Object]", conditions: "[object Object]"
18. **Get Events** `httpRequest` — url: `=https://graph.microsoft.com/v1.0/me/calendarView`
19. **Send Message1** `microsoftOutlook` — subject: "={{ $('Execute Workflow Trigger').item.json.query.subject }}", bodyContent: "=<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
 <meta…[truncated]", toRecipients: "you@yourdomain.com"
20. **AI Agent** `agent` — text: "={{ $json.chatInput }}", options: "[object Object]", promptType: "define"
21. **Respond With Initial Message** `respondToWebhook` — options: "[object Object]", respondWith: "json", responseBody: "{
 "output": "Hi, how can I help you today?"
}"
22. **freeTimeSlots** `code` — jsCode: "// Input: An array with objects containing a 'value' array of events.
const businessHoursStart = "08:00:00Z"; // Business hours start time
const businessHoursEnd = "17:30:00Z"; // …[truncated]"
23. **varMessageResponse** `set` — options: "[object Object]", assignments: "[object Object]"
24. **Respond to Webhook** `respondToWebhook` — options: "[object Object]"
25. **varResponse** `set` — options: "[object Object]", assignments: "[object Object]"
  
  ## 💡 AI-Powered Ideas for Improvement
  ### Explain
This n8n workflow automates the process of scheduling appointments and managing customer inquiries. It uses a chat interface to interact with customers, checks calendar availability via Microsoft Graph API, and schedules meetings using the OpenAI language model for natural language processing. The workflow also handles customer inquiries by sending emails if an appointment isn't scheduled.

### Demonstrate
A business owner could use this workflow to automate client appointments. For instance, a consultancy firm could save time by allowing clients to book meetings directly via a chatbot on their website, ensuring no double bookings and automatic email confirmations.

### Imitate
1. Import the workflow into n8n.
2. Connect your Microsoft and OpenAI accounts.
3. Customize chat prompts and email templates to match your branding.
4. Set up the webhook to trigger the chat interface.
5. Test the workflow using sample data to ensure it schedules appointments correctly.

### Practice
Create a test scenario where you simulate a customer booking an appointment through the chat interface. Check the calendar for availability and observe how the workflow handles scheduling and sending confirmation emails.

### WIIFM
Mastering this workflow allows you to offer automated appointment scheduling services, enhancing client engagement and operational efficiency. This skill can attract more clients to your automation business and increase your service offerings, leading to higher revenue potential.
  
  ## 🔧 Setup Instructions
  1. **Connect Credentials:** openAiApi, microsoftOutlookOAuth2Api.
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
  