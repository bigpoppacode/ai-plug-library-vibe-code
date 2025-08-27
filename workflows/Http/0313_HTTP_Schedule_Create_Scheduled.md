# HTTP Schedule Create Scheduled
  ## 🚀 What It Does
  Automates a flow using googleCalendar×3, stickyNote×2, httpRequest.
  
  ## 💼 Business Use Case
  Use as a **glue/API broker**: receive data, enrich/validate via APIs, and pass to downstream systems.
  
  ## ⚙️ How It Works
  1. **Trigger:** Runs on a **schedule** (e.g., `[object Object]`).
  2. **On schedule** `scheduleTrigger` — rule: "[object Object]"
3. **Sticky Note1** `stickyNote` — width: "254.7946768060834", height: "296.7300380228139", content: "### Configuration













__`guild_id`__: the server ID in Discord. See how to get that [from this Wikipedia tutorial](https://en.wikipedia.org/wiki/Template:Discord_server#:~…[truncated]"
4. **Sticky Note** `stickyNote` — width: "420.45280925604845", height: "639.1273068962362", content: "[redacted]"
5. **Configure** `set` — values: "[object Object]", options: "[object Object]"
6. **List scheduled events from Discord** `httpRequest` — url: `=https://discord.com/api/guilds/{{ $('Configure').first().json.guild_id }}/scheduled-events`
7. **Get events** `googleCalendar` — operation: **get**
8. **Create or update?** `if` — conditions: "[object Object]"
9. **Update event details** `googleCalendar` — operation: **update**
10. **Create event** `googleCalendar` — end: "={{ $('List scheduled events from Discord').item.json.scheduled_end_time }}", start: "={{ $('List scheduled events from Discord').item.json.scheduled_start_time }}", calendar: "[object Object]"
  
  ## 💡 AI-Powered Ideas for Improvement
  **Explain:**
This n8n workflow automates the synchronization of scheduled events from a Discord server to a Google Calendar. It regularly checks for scheduled events in a specified Discord server, retrieves them, and updates or creates corresponding events in Google Calendar. This ensures that any changes in Discord events are reflected in Google Calendar.

**Demonstrate:**
A community manager could use this workflow to keep their team's Google Calendar updated with events scheduled in their Discord server, ensuring no team member misses any important events.

**Imitate:**
1. Import the workflow into n8n.
2. Configure the Discord bot and Google Calendar credentials.
3. Set the `guild_id` in the Configure node with your Discord server ID.
4. Schedule the workflow to run at desired intervals.
5. Test to ensure events sync correctly.

**Practice:**
Create a test Discord server and Google Calendar. Schedule some test events in Discord, then run the workflow to see if they appear and update correctly in Google Calendar.

**WIIFM:**
Mastering this workflow can help you offer calendar synchronization services to community managers or event planners, reducing their manual work and increasing your service offerings, potentially leading to increased revenue and client satisfaction.
  
  ## 🔧 Setup Instructions
  1. **Connect Credentials:** httpHeaderAuth, googleCalendarOAuth2Api.
2. **Cron/Schedule:** Confirm timezone and cadence; start with a test window (e.g., every 5 minutes) then scale.
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
  