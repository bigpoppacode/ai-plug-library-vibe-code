# Telegram Splitout Create Webhook
## 🚀 What It Does
Moves data between apps and a **database/spreadsheet**, with logic and optional AI steps.

## 💼 Business Use Case
Use as a **glue/API broker**: receive data, enrich/validate via APIs, and pass to downstream systems.

## ⚙️ How It Works
1. **Trigger:** Runs on a **schedule** (e.g., `[object Object]`).
2. **Sticky Note** `stickyNote` — width: "220", height: "260", content: "## Initiation
This section starts the workflow sets the time."
3. **Sticky Note1** `stickyNote` — color: "5", width: "660", height: "260"
4. **Sticky Note2** `stickyNote` — color: "3", width: "380", height: "280"
5. **Sticky Note3** `stickyNote` — color: "4", width: "360", height: "260"
6. **Sticky Note4** `stickyNote` — color: "6", width: "280", height: "260"
7. **Sticky Note5** `stickyNote` — color: "6", width: "280", height: "260"
8. **0715 Trigger** `scheduleTrigger` — rule: "[object Object]"
9. **When clicking ‘Test workflow’** `manualTrigger` — configured for its default action.
10. **Sticky Note6** `stickyNote` — width: "820", height: "260", content: "## Create your Channel List
This section needs to be put into it's own workflow: this workflow gathers information needed to gather videos for the playlist.  This workflow only nee…[truncated]"
11. **Sticky Note7** `stickyNote` — width: "820", height: "700", content: "## Instructions
1. To set this up, you need to create a Google Sheet with the following headings in line 1:

   Channel User Name
   Channel Name
   Channel Link
   Channel ID

2. …[truncated]"
12. **Create Playlist** `youTube` — resource: **playlist**, operation: **create**
13. **Google Sheets** `googleSheets` — options: "[object Object]", filtersUI: "[object Object]", sheetName: "[object Object]"
14. **Read Channel Names1** `googleSheets` — options: "[object Object]", sheetName: "[object Object]", documentId: "[object Object]"
15. **Save Playlist ID** `googleSheets` — operation: **update**
16. **Delete Old Playlist** `youTube` — resource: **playlist**, operation: **delete**
17. **Get Channels** `httpRequest` — url: `https://www.googleapis.com/youtube/v3/search`
18. **Read Channel Names** `googleSheets` — options: "[object Object]", sheetName: "[object Object]", documentId: "[object Object]"
19. **Update Google Sheet** `googleSheets` — operation: **update**
20. **Get Videos** `httpRequest` — url: `https://www.googleapis.com/youtube/v3/search`
21. **Split Out** `splitOut` — options: "[object Object]", fieldToSplitOut: "items"
22. **Filter Out Upcoming** `filter` — options: "[object Object]", conditions: "[object Object]"
23. **YouTube** `youTube` — resource: **playlistItem**
24. **Telegram** `telegram` — text: "Your AI News YT Playlist has been updated.", additionalFields: "[object Object]"

## 💡 AI-Powered Ideas for Improvement
### Explain
This n8n workflow automates the creation and management of a YouTube playlist. It reads channel information from a Google Sheet, fetches recent videos from those channels, creates a new playlist, adds the videos, and deletes the previous day's playlist. It also sends a Telegram notification when the playlist is updated.

### Demonstrate
A content curator could use this workflow to automate daily updates of a YouTube playlist featuring the latest videos from selected channels, ensuring their audience always has fresh content.

### Imitate
1. Import the workflow into n8n.
2. Connect your Google Sheets and YouTube accounts.
3. Schedule the workflow to run daily.
4. Create a Google Sheet with channel details.
5. Test the workflow to ensure it updates the playlist and sends notifications.

### Practice
Create a test Google Sheet with a few YouTube channels. Run the workflow to see how it creates a playlist with the latest videos. Modify some channel details and re-run to observe changes.

### WIIFM
Mastering this workflow can help you offer automated content curation services, enhancing client engagement and retention. This skill can expand your service offerings and increase revenue in your automation business.

## 🔧 Setup Instructions
1. **Connect Credentials:** googleSheetsOAuth2Api, youTubeOAuth2Api, telegramApi.
2. **Cron/Schedule:** Confirm timezone and cadence; start with a test window (e.g., every 5 minutes) then scale.
3. **Data Mapping:** Verify base/sheet IDs and column names match exactly to prevent silent failures.
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
