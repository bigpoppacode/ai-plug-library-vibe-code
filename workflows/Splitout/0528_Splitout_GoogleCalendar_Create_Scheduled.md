# Splitout GoogleCalendar Create Scheduled
## 🚀 What It Does
Monitors events, processes them, and **notifies** people/apps (Slack/Email) with structured updates.

## 💼 Business Use Case
Use as a **glue/API broker**: receive data, enrich/validate via APIs, and pass to downstream systems.

## ⚙️ How It Works
1. **Trigger:** Runs on a **schedule** (e.g., `[object Object]`).
2. **Structured Output Parser** `outputParserStructured` — jsonSchema: "{
  "type": "object",
  "properties": {
    "event_title": { "type": "string" },
    "event_start_date": { "type": "string" },
    "event_start_time": { "type": "string" },
    "ev…[truncated]"
3. **SerpAPI** `toolSerpApi` — options: "[object Object]"
4. **OpenAI Chat Model** `lmChatOpenAi` — options: "[object Object]"
5. **Wikipedia** `toolWikipedia` — configured for its default action.
6. **Schedule Trigger** `scheduleTrigger` — rule: "[object Object]"
7. **Sticky Note** `stickyNote` — color: "7", width: "468.0872755624215", height: "401.633728593893"
8. **Sticky Note1** `stickyNote` — color: "7", width: "612.4609442091373", height: "463.294565931203"
9. **Sticky Note2** `stickyNote` — color: "7", width: "582.5773441997128", height: "614.2457232899785"
10. **Sticky Note3** `stickyNote` — color: "7", width: "555.022465659362", height: "579.2571386002115"
11. **Sticky Note5** `stickyNote` — color: "7", width: "665.8690262556933", height: "354.87325537783204"
12. **Sticky Note6** `stickyNote` — width: "359.6648027457353", height: "416.9747281125149", content: "## Try It Out!
### This workflow does the following
* Monitors a slack channel for event messages tagged with the Calendar (📅) emoji.
* Checks if a calender event exists otherwise…[truncated]"
13. **Sticky Note7** `stickyNote` — color: "7", width: "492.07150832656214", height: "414.62723127587867"
14. **Sticky Note4** `stickyNote` — color: "5", width: "394.45954589267495", height: "80"
15. **Sticky Note8** `stickyNote` — color: "5", width: "394.45954589267495", height: "80"
16. **Sticky Note9** `stickyNote` — width: "179.82769272818715", height: "362.21121634583966", content: "[redacted]"
17. **Sticky Note10** `stickyNote` — width: "179.82769272818715", height: "317.6738512911155", content: "















🚨**Required**
* Set the Google Calendar to use here."
18. **Search for Invite Requests** `slack` — operation: **search**
19. **Get Invite Replies** `slack` — resource: **channel**, operation: **replies**
20. **Get Existing Invite EventID** `code` — jsCode: "const channel =  $('Search for Invite Requests').item.json.channel;

return $input
  .all()
  .filter(item => !item.json.thread_ts || item.json.ts === item.json.thread_ts)
  .map(i…[truncated]"
21. **Should Create Event?** `if` — options: "[object Object]", conditions: "[object Object]"
22. **Calendar Event Booking Agent** `agent` — text: "=Your role is to create professional event calendar events based on user message.
Given the following user message, do the following 5 tasks. Note, Assume all dates are within the …[truncated]", agent: "openAiFunctionsAgent", options: "[object Object]"
23. **Get Old EventId** `set` — mode: "raw", options: "[object Object]", jsonOutput: "={
  "eventId": "{{ $json.eventId }}",
}"
24. **Create Event** `googleCalendar` — end: "={{ $json.output.output.event_end_date ? $json.output.output.event_end_date + ' ' + $json.output.output.event_end_time : (new Date($json.output.output.event_start_date + ' ' + $jso…[truncated]", start: "={{ $json.output.output.event_start_date }} {{ $json.output.output.event_start_time }}", calendar: "[object Object]"
25. **Get Event Details** `googleCalendar` — operation: **get**
26. **Reply Invite with EventId** `slack` — text: "=Event Created!
Add to Calendar: {{ $json.htmlLink }}
#event{{ $json.id }}", select: "channel", channelId: "[object Object]"
27. **Get Invite Reactions** `slack` — resource: **reaction**, operation: **get**
28. **Extract Invite Reactions** `splitOut` — options: "[object Object]", fieldToSplitOut: "message.reactions"
29. **Is Attending** `filter` — options: "[object Object]", conditions: "[object Object]"
30. **For Each User ID...** `splitOut` — options: "[object Object]", fieldToSplitOut: "users"
31. **Get User** `slack` — resource: **user**
32. **Should Add Attendee?** `if` — options: "[object Object]", conditions: "[object Object]"
33. **Get User Email** `set` — options: "[object Object]", assignments: "[object Object]"
34. **Add Attendee to Event** `googleCalendar` — operation: **update**

## 💡 AI-Powered Ideas for Improvement
### Explain
This n8n workflow monitors a Slack channel for messages tagged with a calendar emoji. It checks if a calendar event already exists for the message. If not, it uses AI to generate and create a new event in Google Calendar. If the event exists, it identifies users who reacted with a checkmark emoji and adds them as attendees to the event.

### Demonstrate
A business owner could use this workflow to streamline event management. By automatically creating calendar events from Slack messages and tracking attendee reactions, it saves time and reduces the risk of scheduling errors.

### Imitate
1. Import the workflow into n8n.
2. Set up Slack and Google Calendar credentials.
3. Configure the Slack channel to monitor and the Google Calendar to use.
4. Test by posting a message with a calendar emoji in Slack.
5. Check Google Calendar for the created event and added attendees.

### Practice
Create a test Slack channel and post a message with a calendar emoji. Then, react with a checkmark emoji. Run the workflow and verify that the event is created in Google Calendar, and your test user is added as an attendee.

### WIIFM
Mastering this workflow enables you to offer efficient event management solutions to clients, reducing their administrative burden. This can enhance your service portfolio, attract new clients, and potentially increase your income by demonstrating the value of automation in business operations.

## 🔧 Setup Instructions
1. **Cron/Schedule:** Confirm timezone and cadence; start with a test window (e.g., every 5 minutes) then scale.
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
