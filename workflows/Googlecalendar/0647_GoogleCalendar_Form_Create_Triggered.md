# GoogleCalendar Form Create Triggered
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
          .map((_,idx) => $now.plus(…[truncated]"
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
  dateTime:…[truncated]"
24. **Trigger Approval Process** `executeWorkflow` — mode: "each", options: "[object Object]", workflowId: "[object Object]"
25. **Send Receipt** `gmail` — sendTo: "={{ $('Get Form Values').first().json.email }}", message: "=<p>Dear {{ $('Get Form Values').first().json.name }},</p>
<p>Thanks for requesting an appointment. We will review and get back to you shortly.</p>
<p>Here is the summary of the re…[truncated]", options: "[object Object]"
26. **Form End** `form` — operation: **completion**
  
  ## 💡 AI-Powered Ideas for Improvement
  **Explain:**  
This n8n workflow automates appointment scheduling. It starts with a form where users can request an appointment. An AI classifier checks if the enquiry is relevant. If accepted, users are guided through terms & conditions and date selection. After form submission, an approval process is triggered, where an admin can confirm or decline the appointment. If approved, a Google Calendar event is created; if declined, a rejection email is sent to the user.

**Demonstrate:**  
A consultant might use this workflow to streamline client appointment scheduling, ensuring only relevant requests are processed, thus saving time and improving efficiency.

**Imitate:**  
1. Import the workflow into n8n.  
2. Set up your admin email in the workflow.  
3. Customize form fields to match your needs.  
4. Connect your Google Calendar and email accounts.  
5. Test the workflow by submitting an appointment request.

**Practice:**  
Create a test form submission to see how the workflow processes the request. Experiment with changing the enquiry text to see how the AI classifier affects the workflow's path.

**WIIFM:**  
Mastering this workflow can help you offer automated appointment scheduling services, attracting more clients and increasing your value as an automation consultant, leading to potential income growth.
  
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
  