# Splitout GoogleCalendar Send Webhook
## 🚀 What It Does
Monitors events, processes them, and **notifies** people/apps (Slack/Email) with structured updates.

## 💼 Business Use Case
Use as a **glue/API broker**: receive data, enrich/validate via APIs, and pass to downstream systems.

## ⚙️ How It Works
1. **Trigger:** Runs on a **schedule** (e.g., `[object Object]`).
2. **Every morning @ 7** `scheduleTrigger` — rule: "[object Object]"
3. **Sticky Note** `stickyNote` — color: "7", width: "409.31582584657923", height: "426.61520915049425"
4. **Sticky Note1** `stickyNote` — color: "7", width: "334.90628250854803", height: "308.7389742148118"
5. **Sticky Note2** `stickyNote` — color: "5", width: "738.9631933644362", height: "717.2835666148258"
6. **Setup** `set` — fields: "[object Object]", options: "[object Object]"
7. **Get meetings for today** `googleCalendar` — operation: **getAll**
8. **Get attendees email domains** `set` — fields: "[object Object]", options: "[object Object]"
9. **Split Out** `splitOut` — include: "selectedOtherFields", options: "[object Object]", fieldToSplitOut: "domain"
10. **Keep only ones with the domain** `filter` — options: "[object Object]", conditions: "[object Object]"
11. **Enrich attendee company** `clearbit` — domain: "={{ $json.domain }}", additionalFields: "[object Object]"
12. **Switch** `switch` — rules: "[object Object]", options: "[object Object]"
13. **Get recent LinkedIn posts** `httpRequest` — url: `https://fresh-linkedin-profile-data.p.rapidapi.com/get-company-posts`
14. **Get recetn tweets** `httpRequest` — url: `https://twitter154.p.rapidapi.com/user/tweets`
15. **Format LinkedIn Posts** `code` — mode: "runOnceForEachItem", jsCode: "// console.log('LINKEDIN', $('Enrich attendee company').item.json.name.toLowerCase())
const company = $('Enrich attendee company').item.json.name.toLowerCase();

let html = `
<div …[truncated]"
16. **Format Tweets** `code` — mode: "runOnceForEachItem", jsCode: "const company = $('Enrich attendee company').item.json.name.toLowerCase();
let html = `
<div style="display: flex; align-items: center; margin: 2em 0 1em">
  <img src="https://img.…[truncated]"
17. **Combine all activity for a company** `merge` — mode: "combine", options: "[object Object]", joinMode: "keepEverything"
18. **Extract data for email** `set` — fields: "[object Object]", include: "selected", options: "[object Object]"
19. **Prepare email template** `html` — html: "<!DOCTYPE html>

<html>
<head>
  <meta charset="UTF-8" />
  <title>Social media activity for company: {{ $json.name }}</title>
</head>
<body>
  <div class="container">
     <h2 sty…[truncated]"
20. **Gmail** `gmail` — sendTo: "={{ $('Setup').first().json.emails }}", message: "={{ $json.html }}", options: "[object Object]"

## 💡 AI-Powered Ideas for Improvement
**Explain**: This workflow is designed to automatically gather and send social media activity for companies you have meetings with. Every morning at 7 AM, it checks your Google Calendar for meetings, retrieves the email domains of the attendees, and uses Clearbit to enrich company information. It then fetches recent LinkedIn posts and tweets for these companies, formats this data, and sends it to specified email addresses as a report.

**Demonstrate**: A business owner can use this workflow to prepare for meetings by receiving daily updates on the social media activities of the companies they'll meet. This keeps them informed and ready to engage with relevant topics.

**Imitate**: 
1. Import the workflow into n8n.
2. Set up Google Calendar and email credentials.
3. Configure your LinkedIn and Twitter API keys in the Setup node.
4. Adjust the meeting email list.
5. Test the workflow to ensure it captures and sends the data correctly.

**Practice**: Create a test meeting in Google Calendar with an email domain you control. Run the workflow and check your email for the formatted social media report. Modify some parameters to see how changes affect the output.

**WIIFM**: Mastering this workflow allows you to offer a valuable service to clients, providing them with automated insights into their business meetings. This can enhance client relationships, improve meeting preparedness, and increase the value of your automation offerings, potentially leading to more clients and higher income.

## 🔧 Setup Instructions
1. **Connect Credentials:** gmailOAuth2.
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
