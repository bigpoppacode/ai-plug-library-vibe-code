# GoogleCalendar Form Automation Triggered
  ## 🚀 What It Does
  Monitors events, processes them, and **notifies** people/apps (Slack/Email) with structured updates.
  
  ## 💼 Business Use Case
  Great for **content, summarization, triage, or decisioning** where AI adds speed and consistency.
  
  ## ⚙️ How It Works
  1. **Trigger:** This workflow starts with **n8n Form Trigger**.
  2. **n8n Form Trigger** `formTrigger` — path: `/schedule_appointment`
3. **OpenAI Chat Model** `lmChatOpenAi` — options: "[object Object]"
4. **OpenAI Chat Model1** `lmChatOpenAi` — options: "[object Object]"
5. **Sticky Note3** `stickyNote` — color: "7", width: "763.0427617951669", height: "611.898918296892"
6. **Sticky Note6** `stickyNote` — color: "7", width: "781.472405063291", height: "606.0718987341766"
7. **Sticky Note7** `stickyNote` — color: "7", width: "792.9401150747982", height: "497.4250863060987"
8. **Sticky Note8** `stickyNote` — color: "7", width: "609.4228768699652", height: "287.178089758343"
9. **Execute Workflow Trigger** `executeWorkflowTrigger` — configured for its default action.
10. **Sticky Note9** `stickyNote` — width: "468.6766398158801", height: "690.6653164556957", content: "## Try it out!

### This n8n template is a simple appointment scheduling workflow using n8n forms with AI thrown in the mix for good measure. It also uses n8n's wait for approval f…[truncated]"
11. **Sticky Note** `stickyNote` — width: "177.66444188722656", height: "257.56869965477557", content: "














### 🚨 Set your admin email here!"
12. **Enquiry Classifier** `textClassifier` — options: "[object Object]", inputText: "={{ $json.Enquiry }}", categories: "[object Object]"
13. **Summarise Enquiry** `chainLlm` — text: "=The enquiry is as follows:
{{ $('Execute Workflow Trigger').first().json.enquiry.substring(0, 500) }}", messages: "[object Object]", promptType: "define"
14. **Terms & Conditions** `form` — options: "[object Object]", formFields: "[object Object]"
15. **Decline** `form` — operation: **completion**
16. **Wait for Approval** `gmail` — operation: **sendAndWait**
17. **Has Accepted?** `if` — options: "[object Object]", conditions: "[object Object]"
18. **Has Approval?** `if` — options: "[object Object]", conditions: "[object Object]"
19. **Enter Date & Time** `form` — options: "[object Object]", defineForm: "json", jsonOutput: "={{
[
 {
 "fieldLabel":"Date",
 "requiredField":true,
 "fieldType": "dropdown",
 "fieldOptions":
 Array(5).fill(0)
 .map((_,idx) => $now.plus(idx+1, 'day'))
 .filter(d => !d.isWeek…[truncated]"
20. **Decline1** `form` — operation: **completion**
21. **Create Appointment** `googleCalendar` — end: "={{ DateTime.fromISO($('Execute Workflow Trigger').first().json.dateTime).plus(30, 'minute').toISO() }}", start: "={{ $('Execute Workflow Trigger').first().json.dateTime }}", calendar: "[object Object]"
22. **Send Rejection** `gmail` — sendTo: "={{ $('Execute Workflow Trigger').first().json.email }}", message: "=<p>Dear {{ $('Execute Workflow Trigger').first().json.name }},</p>
<p>Unfortunately, we cannot schedule the requested appointment at the requested time.</p>
<p>Kind regards</p>
", options: "[object Object]"
23. **Get Form Values** `set` — mode: "raw", options: "[object Object]", jsonOutput: "={{
{
 name: $('n8n Form Trigger').first().json['Your Name'],
 email: $('n8n Form Trigger').first().json.Email,
 enquiry: $('n8n Form Trigger').first().json.Enquiry,
 dateTime: Dat…[truncated]"
24. **Trigger Approval Process** `executeWorkflow` — mode: "each", options: "[object Object]", workflowId: "[object Object]"
25. **Send Receipt** `gmail` — sendTo: "={{ $('Get Form Values').first().json.email }}", message: "=<p>Dear {{ $('Get Form Values').first().json.name }},</p>
<p>Thanks for requesting an appointment. We will review and get back to you shortly.</p>
<p>Here is the summary of the re…[truncated]", options: "[object Object]"
26. **Form End** `form` — operation: **completion**
  
  ## 💡 AI-Powered Ideas for Improvement
  **Explain:** This n8n workflow automates the process of scheduling appointments. It starts by capturing appointment requests through a form. The request is then classified by an AI to determine its relevance. If the request is valid, the user accepts the terms and enters a preferred date and time. The workflow then sends an acknowledgment email to the user and triggers an approval process. An admin receives an email to approve or reject the request. If approved, the appointment is created in Google Calendar; if rejected, the user receives a rejection email.

**Demonstrate:** A consultant could use this workflow to streamline client appointment bookings, reducing manual scheduling and ensuring only relevant appointments are accepted, saving time and improving efficiency.

**Imitate:** 1. Import the workflow into n8n. 2. Connect your email and Google Calendar accounts. 3. Customize the form fields to suit your needs. 4. Set the admin email for approvals. 5. Test the workflow with sample data.

**Practice:** Create a mock form and simulate appointment requests. Observe how the AI classifies the requests and how the workflow handles approvals and rejections. Adjust settings to see different outcomes.

**WIIFM:** Mastering this workflow enables you to offer automated scheduling solutions to clients, enhancing your service offerings and creating new revenue streams. It helps you save time, improve client interactions, and increase efficiency in appointment management.
  
  ## 🔧 Setup Instructions
  1. **Connect Credentials:** openAiApi, gmailOAuth2, googleCalendarOAuth2Api.
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
  