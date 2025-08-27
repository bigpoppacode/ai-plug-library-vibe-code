# Limit Code Automation Scheduled
  ## 🚀 What It Does
  Moves data between apps and a **database/spreadsheet**, with logic and optional AI steps.
  
  ## 💼 Business Use Case
  Ideal for **lead intake**, **enrichment**, and **CRM updates** with alerts to the right channel.
  
  ## ⚙️ How It Works
  1. **Trigger:** Runs on a **schedule** (e.g., `[object Object]`).
  2. **Schedule Trigger** `scheduleTrigger` — rule: "[object Object]"
3. **activities** `googleSheets` — options: "[object Object]", sheetName: "[object Object]", documentId: "[object Object]"
4. **sort_saved** `sort` — options: "[object Object]", sortFieldsUi: "[object Object]"
5. **last_saved** `limit` — keep: "lastItems", maxItems: "10"
6. **saved_last** `set` — options: "[object Object]", assignments: "[object Object]"
7. **Strava** `strava` — operation: **getAll**
8. **sort_strava** `sort` — options: "[object Object]", sortFieldsUi: "[object Object]"
9. **Remove Duplicates** `removeDuplicates` — compare: "selectedFields", options: "[object Object]", fieldsToCompare: "id"
10. **last_strava** `limit` — keep: "lastItems", maxItems: "10"
11. **strava_last** `set` — options: "[object Object]", assignments: "[object Object]"
12. **Code** `code` — jsCode: "// Obtén los items del nodo "Strava"
const stravaItems = $('strava_last').all();

// Obtén los items del nodo "ultimas_id"
const ultimasGuardadasItems = $('saved_last').all();

// …[truncated]"
13. **sort_results** `sort` — options: "[object Object]", sortFieldsUi: "[object Object]"
14. **Google Sheets** `googleSheets` — operation: **append**
  
  ## 💡 AI-Powered Ideas for Improvement
  **Explain:** This n8n workflow automates the process of tracking and logging activities from Strava into Google Sheets. Every two hours, it fetches the latest activities from Strava, checks against existing records in Google Sheets to avoid duplicates, and then logs new activities with details like distance, time, and elevation. This ensures you always have an up-to-date record of your recent activities.

**Demonstrate:** A fitness trainer could use this workflow to automatically log their clients' activities from Strava into a Google Sheet for easy tracking and progress monitoring, saving time on manual data entry.

**Imitate:** 
1. Import the workflow into n8n.
2. Connect your Google Sheets and Strava accounts.
3. Set the Schedule Trigger to your desired interval.
4. Map the fields in Google Sheets to capture activity details.
5. Test the workflow to ensure new activities are logged correctly.

**Practice:** Create a test Google Sheet and manually add some entries. Run the workflow with Strava data to see how it updates the sheet, ensuring no duplicates are added.

**WIIFM:** Mastering this workflow enables you to offer automated activity tracking solutions to fitness enthusiasts or trainers, enhancing your service offerings and potentially increasing your income through efficient data management solutions.
  
  ## 🔧 Setup Instructions
  1. **Connect Credentials:** googleSheetsOAuth2Api.
2. **Cron/Schedule:** Confirm timezone and cadence; start with a test window (e.g., every 5 minutes) then scale.
3. **Data Mapping:** Verify base/sheet IDs and column names match exactly to prevent silent failures.
  
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
  