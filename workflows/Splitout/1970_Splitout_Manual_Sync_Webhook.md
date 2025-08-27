# Splitout Manual Sync Webhook
## 🚀 What It Does
Moves data between apps and a **database/spreadsheet**, with logic and optional AI steps.

## 💼 Business Use Case
Use as a **glue/API broker**: receive data, enrich/validate via APIs, and pass to downstream systems.

## ⚙️ How It Works
1. **Trigger:** This workflow starts with **Manual Trigger (When Clicking 'Test workflow'**.
2. **Manual Trigger (When Clicking 'Test workflow'** `manualTrigger` — configured for its default action.
3. **Sticky Note** `stickyNote` — width: "1320", height: "320", content: "## Sync Youtube Video Urls with Google Sheets
"
4. **Sticky Note1** `stickyNote` — color: "5", width: "280", height: "220"
5. **Get Youtube Channel Ids from Google Sheet** `googleSheets` — options: "[object Object]", sheetName: "[object Object]", documentId: "[object Object]"
6. **Get Youtube Video Urls form specific channel** `httpRequest` — url: `https://www.googleapis.com/youtube/v3/search`
7. **Split Out** `splitOut` — options: "[object Object]", fieldToSplitOut: "items"
8. **Format fields as required to save in google sheet** `set` — options: "[object Object]", assignments: "[object Object]"
9. **Insert & Update Youtube Urls in Google Sheet** `googleSheets` — operation: **appendOrUpdate**

## 💡 AI-Powered Ideas for Improvement
**Explain:** This n8n workflow automates the process of syncing YouTube video URLs with a Google Sheet. It starts when manually triggered, retrieves YouTube channel IDs from a specified Google Sheet, fetches video URLs from those channels via the YouTube API, formats the data, and updates or appends this information back to another Google Sheet.

**Demonstrate:** A content creator uses this workflow to keep track of all videos uploaded by specific YouTube channels they follow, ensuring they have an updated list for content planning.

**Imitate:** 1. Import the workflow into your n8n environment. 2. Connect your Google Sheets and YouTube API credentials. 3. Set up the Google Sheets with channel IDs and designate where to save video URLs. 4. Test the workflow by manually triggering it to ensure it updates the sheet correctly.

**Practice:** Create a test Google Sheet with a few YouTube channel IDs. Run the workflow to see how it retrieves and updates video URLs. Experiment by adding more channels and observing how the workflow adapts.

**WIIFM:** Mastering this workflow can help you offer services to businesses or content creators who need organized video data for marketing or content strategies, potentially increasing your service offerings and client base in the automation business.

## 🔧 Setup Instructions
1. **Connect Credentials:** googleApi, httpQueryAuth.
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
