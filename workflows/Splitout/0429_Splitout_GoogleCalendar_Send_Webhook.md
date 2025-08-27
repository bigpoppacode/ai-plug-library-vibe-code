# Splitout GoogleCalendar Send Webhook
## 🚀 What It Does
Monitors events, processes them, and **notifies** people/apps (Slack/Email) with structured updates.

## 💼 Business Use Case
Use as a **glue/API broker**: receive data, enrich/validate via APIs, and pass to downstream systems.

## ⚙️ How It Works
1. **Trigger:** Runs on a **schedule** (e.g., `[object Object]`).
2. **Every morning @ 7** `scheduleTrigger` — rule: "[object Object]"
3. **Sticky Note** `stickyNote` — color: "7", width: "409.31582584657923", height: "426.61520915049425"
4. **Sticky Note1** `stickyNote` — color: "7", width: "334.90628250854803", height: "282.9114150520537"
5. **Sticky Note2** `stickyNote` — color: "5", width: "738.9631933644362", height: "399.8417061497098"
6. **Setup** `set` — fields: "[object Object]", options: "[object Object]"
7. **Get meetings for today** `googleCalendar` — operation: **getAll**
8. **Get attendees email domains** `set` — fields: "[object Object]", options: "[object Object]"
9. **Split Out** `splitOut` — include: "selectedOtherFields", options: "[object Object]", fieldToSplitOut: "domain"
10. **Keep only ones with the domain** `filter` — options: "[object Object]", conditions: "[object Object]"
11. **Enrich attendee company** `clearbit` — domain: "={{ $json.domain }}", additionalFields: "[object Object]"
12. **Switch** `switch` — rules: "[object Object]", options: "[object Object]"
13. **Get recent LinkedIn posts** `httpRequest` — url: `https://fresh-linkedin-profile-data.p.rapidapi.com/get-company-posts`
14. **Get latest tweets** `httpRequest` — url: `https://twitter154.p.rapidapi.com/user/tweets`
15. **Extract important data** `set` — fields: "[object Object]", include: "none", options: "[object Object]"
16. **Extract important data again** `set` — fields: "[object Object]", include: "none", options: "[object Object]"
17. **Combine all activity for a company** `merge` — mode: "combine", options: "[object Object]", joinMode: "keepEverything"
18. **Ask AI to summerize** `openAi` — resource: **chat**, prompt: "[object Object]"
19. **Extract data for email** `set` — fields: "[object Object]", include: "selected", options: "[object Object]"
20. **Wrap everything together** `merge` — mode: "combine", options: "[object Object]", combinationMode: "mergeByPosition"
21. **Prepare email template** `html` — html: "<!DOCTYPE html>

<html>
<head>
  <meta charset="UTF-8" />

</head>
<body>
  <div class="container">
     <h2 style="font-size: 1.2em">
      🗓️ Meeting with <span>{{ $json.attende…[truncated]"
22. **Gmail** `gmail` — sendTo: "={{ $('Setup').first().json.emails }}", message: "={{ $json.html }}", options: "[object Object]"

## 💡 AI-Powered Ideas for Improvement
### Explain
This n8n workflow is designed to enhance meeting preparation by collecting and summarizing social media activity of companies you're scheduled to meet with. Every morning at 7 AM, it retrieves your calendar events for the day, identifies the companies involved by extracting email domains, and gathers recent LinkedIn and Twitter posts using APIs. It then uses AI to summarize the social media activity and sends a personalized email briefing to your inbox, ensuring you are well-prepared for your meetings.

### Demonstrate
A sales consultant could use this workflow to prepare for meetings with prospective clients by receiving a daily summary of the client's latest social media activity, enabling more informed and personalized interactions.

### Imitate
1. Import the workflow into n8n.
2. Connect your Google Calendar, LinkedIn, Twitter, and Gmail accounts.
3. Configure the workflow to run daily at 7 AM.
4. Set up API keys in the setup node.
5. Test the workflow to ensure it sends the email summary correctly.

### Practice
Create a test event in your Google Calendar with a mock company email. Run the workflow to see how it gathers and summarizes social media data, then modify the setup to include different social media platforms or additional data points.

### WIIFM
Mastering this workflow allows you to offer personalized meeting preparation services, enhancing client interactions and potentially increasing sales conversions. This capability can be a valuable addition to your service offerings, attracting more clients and increasing revenue in your AI automation business.

## 🔧 Setup Instructions
1. **Connect Credentials:** googleCalendarOAuth2Api, clearbitApi, gmailOAuth2, openAiApi.
2. **Cron/Schedule:** Confirm timezone and cadence; start with a test window (e.g., every 5 minutes) then scale.
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
