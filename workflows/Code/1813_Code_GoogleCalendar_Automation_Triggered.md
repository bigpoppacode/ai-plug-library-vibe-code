# Code GoogleCalendar Automation Triggered
  ## 🚀 What It Does
  Automates a flow using code×5, stickyNote×3, lmChatOpenAi×2.
  
  ## 💼 Business Use Case
  Great for **content, summarization, triage, or decisioning** where AI adds speed and consistency.
  
  ## ⚙️ How It Works
  1. **Trigger:** This workflow starts with **Get Availability**.
  2. **OpenAI Chat Model2** `lmChatOpenAi` — model: `[object Object]`
3. **Window Buffer Memory2** `memoryBufferWindow` — sessionKey: "={{ $json.sessionId }}", sessionIdType: "customKey", contextWindowLength: "10"
4. **OpenAI Chat Model4** `lmChatOpenAi` — model: `[object Object]`
5. **Run Get Availability** `toolWorkflow` — name: "get_availability", source: "parameter", description: "Call this tool to get my availability"
6. **Sticky Note1** `stickyNote` — color: "3", width: "520", height: "480"
7. **check day names** `toolWorkflow` — name: "check_days", source: "parameter", workflowJson: "{
  "nodes": [
    {
      "parameters": {
        "inputSource": "passthrough"
      },
      "type": "n8n-nodes-base.executeWorkflowTrigger",
      "typeVersion": 1.1,
      "pos…[truncated]"
8. **Sticky Note** `stickyNote` — width: "1200", height: "500", content: "Get Availability Execution. 

1. This part of the flow is just a copy of what is embedded in the "Run Get Availability Tool". It does not run. 

2. If you update this part of the f…[truncated]"
9. **Parse to JSON** `outputParserStructured` — jsonSchemaExample: "{
  "interview": {
    "email": "applicant@example.com",
    "phone": "814-882-1293",
    "start_datetime": "2025-03-28T10:00:00",
    "end_datetime": "2025-03-28T11:00:00"
  }
}"
10. **Generate Interview Times** `code` — jsCode: "function getWeekdaysNextTwoWeeks() {
  const items = [];
  const longDayNames = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

  const today = new…[truncated]"
11. **Get Availability** `executeWorkflowTrigger` — inputSource: "passthrough"
12. **Sticky Note2** `stickyNote` — color: "5", width: "520", height: "1000"
13. **When chat message received** `chatTrigger` — public: "true", options: "[object Object]"
14. **Check My Calendar** `googleCalendar` — operation: **getAll**
15. **Generate 30 Minute Timeslots** `code` — jsCode: "const slots = [];
const slotMinutes = 30;
const timeZone = 'America/New_York';
const businessStartHour = 9;
const businessEndHour = 17;

// Get offset like -04:00 or -05:00
functio…[truncated]"
16. **Interview Scheduler** `agent` — text: "={{ $json.chatInput }}", options: "[object Object]", promptType: "define"
17. **Split Events into 30 min blocks** `code` — jsCode: "const events = items.map(item => item.json);
const intervalMinutes = 30;
const timeZone = 'America/New_York';

function formatToEastern(date) {
  const tzDate = new Intl.DateTimeFo…[truncated]"
18. **If Final Output** `if` — options: "[object Object]", conditions: "[object Object]"
19. **Add Blocked Field** `set` — options: "[object Object]", assignments: "[object Object]"
20. **Convert Output to JSON** `agent` — text: "={{ $json.output }}", options: "[object Object]", promptType: "define"
21. **Respond for More Info** `noOp` — configured for its default action.
22. **Combine My Calendar with All Slots** `merge` — mode: "combine", options: "[object Object]", joinMode: "enrichInput2"
23. **Set Meeting with Google** `googleCalendar` — end: "={{ $json.output.interview.end_datetime }}", start: "={{ $json.output.interview.start_datetime }}", calendar: "[object Object]"
24. **Check if Calendar Blocked** `if` — options: "[object Object]", conditions: "[object Object]"
25. **Final Response to User** `code` — jsCode: "const email = $('Convert Output to JSON').first().json.output.interview.email;
const phone = $('Convert Output to JSON').first().json.output.interview.phone;
const start_datetime =…[truncated]"
26. **Return string of all available times** `code` — jsCode: "const formatted = items.map(item => {
  const start = item.json.start;
  const end = item.json.end;
  return `${start} - ${end}`;
});

const combined = formatted.join(', ');

retur…[truncated]"
  
  ## 💡 AI-Powered Ideas for Improvement
  - **Explain:** This n8n workflow automates the process of scheduling interviews via a chat interface. It checks a Google Calendar for availability, proposes suitable 30-minute slots for interviews, and books the meeting once the details are confirmed. It uses AI to manage the conversation and ensure no double bookings occur.

- **Demonstrate:** A recruitment consultant could use this workflow to automate interview scheduling, saving time and reducing errors. It streamlines the process, allowing candidates to book interviews without back-and-forth emails.

- **Imitate:** Import the workflow into n8n, connect your Google Calendar and OpenAI accounts, and customize the chat interface with your branding. Set up the webhook to share with users. Test the workflow by simulating chat interactions and confirming the calendar events are correctly booked.

- **Practice:** Create a test Google Calendar and simulate chat interactions to schedule mock interviews. Verify that the workflow correctly identifies available slots and books them without conflicts.

- **WIIFM:** Mastering this workflow allows you to offer a seamless scheduling service, enhancing client satisfaction and efficiency. It can attract new clients seeking to automate repetitive scheduling tasks, thus generating additional income for your automation business.
  
  ## 🔧 Setup Instructions
  1. **Connect Credentials:** openAiApi, googleCalendarOAuth2Api.
  
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
  