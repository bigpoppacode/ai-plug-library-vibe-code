# MicrosoftOutlook GoogleCalendar Automation Triggered
  ## 🚀 What It Does
  Automates a flow using microsoftOutlook×4, googleCalendarTrigger×2, merge.
  
  ## 💼 Business Use Case
  Use to eliminate manual copy-paste and standardize a recurring business process.
  
  ## ⚙️ How It Works
  1. **Trigger:** This workflow starts with **Incoming Event Trigger**.
  2. **Incoming Event Trigger** `googleCalendarTrigger` — options: "[object Object]", pollTimes: "[object Object]", triggerOn: "eventCreated"
3. **Cancel Event Trigger** `googleCalendarTrigger` — options: "[object Object]", pollTimes: "[object Object]", triggerOn: "eventCancelled"
4. **Create Outlook Event** `microsoftOutlook` — resource: **event**, operation: **create**
5. **Get Event to Cancel** `microsoftOutlook` — resource: **event**
6. **Delete Event** `microsoftOutlook` — resource: **event**, operation: **delete**
7. **Merge** `merge` — mode: "combine", options: "[object Object]", combineBy: "combineAll"
8. **Send E-mail with details** `microsoftOutlook` — subject: "={{ $json.subject + " Cancelled" }}", bodyContent: "<h1>Event cancelled via Google Calendar</h1>", toRecipients: "your_email@work.zom"
  
  ## 💡 AI-Powered Ideas for Improvement
  - **Explain:** This workflow synchronizes events between Google Calendar and Microsoft Outlook. When a new event is created in Google Calendar, it automatically creates a corresponding event in Outlook. If an event is canceled in Google Calendar, the corresponding Outlook event is deleted, and an email notification is sent detailing the cancellation.

- **Demonstrate:** A business owner managing schedules across different teams could use this workflow to ensure all team members are aligned, even if some use Google Calendar and others use Outlook. This ensures no events are missed or duplicated.

- **Imitate:** 1) Import the workflow into n8n. 2) Connect your Google Calendar and Outlook accounts. 3) Set up triggers for event creation and cancellation in Google Calendar. 4) Test the setup to ensure Outlook events are created and canceled as expected.

- **Practice:** Create a test event in your Google Calendar and observe if it appears in Outlook. Then, cancel the event in Google Calendar and check if the Outlook event is removed and if you receive the cancellation email.

- **WIIFM:** Mastering this workflow allows you to offer calendar synchronization services to clients who use multiple platforms. This can enhance productivity and coordination, providing a valuable service that can be monetized.
  
  ## 🔧 Setup Instructions
  1. **Connect Credentials:** googleCalendarOAuth2Api, microsoftOutlookOAuth2Api.
  
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
  