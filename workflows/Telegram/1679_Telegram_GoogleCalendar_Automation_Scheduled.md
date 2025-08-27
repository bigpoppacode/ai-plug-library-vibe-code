# Telegram GoogleCalendar Automation Scheduled
## 🚀 What It Does
Automates a flow using stickyNote×3, scheduleTrigger, lmChatOpenAi.

## 💼 Business Use Case
Great for **content, summarization, triage, or decisioning** where AI adds speed and consistency.

## ⚙️ How It Works
1. **Trigger:** Runs on a **schedule** (e.g., `[object Object]`).
2. **Schedule Trigger** `scheduleTrigger` — rule: "[object Object]"
3. **OpenAI Chat Model** `lmChatOpenAi` — model: `[object Object]`
4. **Sticky Note** `stickyNote` — color: "3", width: "620", content: "## Google Calendar Event Reminder
This smart **Google Calendar** workflow fixes that by sending you a clear, friendly reminder exactly **1 hour before your event starts**—delivered…[truncated]"
5. **Sticky Note1** `stickyNote` — width: "620", height: "140", content: "## STEP 1
- In the "Get upcoming event" node enter how much time before the event starts you want to be notified. It is currently set to 1 hour
- In the Telegram node replace CHAT_…[truncated]"
6. **Sticky Note2** `stickyNote` — width: "220", height: "200", content: "Prevent multiple reminders for the same event"
7. **Get upcoming event** `googleCalendar` — operation: **getAll**
8. **Already sent?** `removeDuplicates` — operation: **removeItemsSeenInPreviousExecutions**
9. **Secretary Agent** `agent` — text: "=These are the details of the event/appointment:

Event Name: {{ $('Get upcoming event').item.json.summary }}
Description: {{ $('Get upcoming event').item.json.description }}
Locat…[truncated]", options: "[object Object]", promptType: "define"
10. **Send reminder** `telegram` — text: "={{ $json.output }}", chatId: "CHAT_ID", additionalFields: "[object Object]"

## 💡 AI-Powered Ideas for Improvement
### Explain
This workflow automates Google Calendar event reminders using n8n. It fetches upcoming events from your Google Calendar, checks if reminders have already been sent, and sends a personalized reminder message via Telegram exactly one hour before the event starts. The workflow uses AI to craft friendly and engaging reminder messages that feel like they come from a personal assistant.

### Demonstrate
A consultant can use this workflow to ensure they never miss a client meeting by receiving timely reminders. This helps maintain professionalism and punctuality, enhancing client relationships and trust.

### Imitate
1. Import the workflow into n8n.
2. Connect your Google Calendar and Telegram accounts.
3. Adjust the time for reminders in the "Get upcoming event" node.
4. Replace `CHAT_ID` in the Telegram node with your own.
5. Test the workflow with a sample event to ensure it sends reminders correctly.

### Practice
Create a test event in your Google Calendar set for two hours from now. Run the workflow and observe if you receive a reminder via Telegram one hour before the event. Modify the reminder message content and test again to see the changes.

### WIIFM
Mastering this workflow allows you to offer personalized reminder services to clients, improving their time management and efficiency. This can enhance your service offerings, attract more clients, and generate additional income in your AI automation business.

## 🔧 Setup Instructions
1. **Connect Credentials:** openAiApi, googleCalendarOAuth2Api, telegramApi.
2. **Cron/Schedule:** Confirm timezone and cadence; start with a test window (e.g., every 5 minutes) then scale.

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
