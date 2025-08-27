# Telegram Cal Create Webhook
## 🚀 What It Does
Moves data between apps and a **database/spreadsheet**, with logic and optional AI steps.

## 💼 Business Use Case
Use as a **glue/API broker**: receive data, enrich/validate via APIs, and pass to downstream systems.

## ⚙️ How It Works
1. **Trigger:** This workflow starts with **on New Booking**.
2. **on New Booking** `calTrigger` — events: "BOOKING_CREATED", options: "[object Object]"
3. **Sticky Note** `stickyNote` — width: "280", height: "480", content: "## Define your parameters
- Find your telegram chat id to get notified in a private channel (bot must be added as admin)
- Create an account on [Beehiiv]() and get your api key
- G…[truncated]"
4. **Sticky Note1** `stickyNote` — width: "400", height: "540", content: "## How it works
This workflow allows you to add each meeting guest into Google Sheets, adding one row for each guest and consequently adding those users to your newsletter on Beehi…[truncated]"
5. **Split Attendees** `splitOut` — options: "[object Object]", fieldToSplitOut: "attendees"
6. **set data** `set` — options: "[object Object]", assignments: "[object Object]"
7. **Set Attendee** `set` — options: "[object Object]", assignments: "[object Object]"
8. **Add users** `googleSheets` — operation: **append**
9. **Add subscriber** `httpRequest` — method: **POST**, url: `=https://api.beehiiv.com/v2/publications/{{ $('set data').item.json.publicationId }}/subscriptions`
10. **notify in channel** `telegram` — text: "=📅 New meeting booked

Event name: {{ $('Add users').item.json.title }}
Start Date: {{ $('Add users').item.json.meetingStart }} UTC
Name: {{ $('Add users').item.json.attendeeName …[truncated]", chatId: "={{ $('set data').item.json.chatID }}", additionalFields: "[object Object]"

## 💡 AI-Powered Ideas for Improvement
**Explain:**  
This n8n workflow automates the process of adding meeting attendees to a Google Sheet and signing them up for a Beehiiv newsletter. When a new booking is created, it captures the details, splits the attendees, and records each in Google Sheets. It then subscribes them to a Beehiiv newsletter and sends a notification via Telegram.

**Demonstrate:**  
A business owner could use this workflow to automatically manage and expand their contact list during webinars, ensuring attendees receive follow-up communications and newsletters seamlessly.

**Imitate:**  
1. Import the workflow into n8n.  
2. Connect your Google Sheets, Beehiiv, and Telegram accounts.  
3. Set up the Cal.com trigger for new bookings.  
4. Adjust Google Sheets and Beehiiv API details as needed.  
5. Test the workflow to ensure proper data capture and notifications.

**Practice:**  
Create a test event in Cal.com and see how the workflow adds attendees to Google Sheets, subscribes them to Beehiiv, and sends a Telegram notification. Modify attendee details to observe the workflow’s adaptability.

**WIIFM:**  
Mastering this workflow enables you to offer automated attendee management and communication services, enhancing customer engagement for clients and generating additional revenue streams through efficient contact management solutions.

## 🔧 Setup Instructions
1. **Connect Credentials:** googleSheetsOAuth2Api, calApi, telegramApi.
2. **Data Mapping:** Verify base/sheet IDs and column names match exactly to prevent silent failures.
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
