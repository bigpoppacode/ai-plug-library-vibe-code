# Datetime Schedule Automation Scheduled
  ## 🚀 What It Does
  Automates a flow using dropbox×5, stickyNote×3, dateTime×2.
  
  ## 💼 Business Use Case
  Use to eliminate manual copy-paste and standardize a recurring business process.
  
  ## ⚙️ How It Works
  1. **Trigger:** Runs on a **schedule** (e.g., `[object Object]`).
  2. **Schedule Trigger** `scheduleTrigger` — rule: "[object Object]"
3. **Sticky Note** `stickyNote` — width: "932.4394074276975", height: "223.80675203725258", content: "MOVE CURRENT BACKUPS TO OLD FOLDER"
4. **Sticky Note1** `stickyNote` — width: "931.4765002625034", height: "185.32013969732247", content: "BACKUP ALL CURRENT WORKFLOWS"
5. **Sticky Note2** `stickyNote` — width: "932.4394074276973", height: "203.55064027939466", content: "PURGE BACKUPS OLDER THEN 30 DAYS
"
6. **DESTINATION FOLDER** `set` — fields: "[object Object]", include: "none", options: "[object Object]"
7. **GET CURRENT DATE** `dateTime` — operation: **formatDate**
8. **PURGE DAYS** `dateTime` — operation: **subtractFromDate**
9. **GET CURRENT BACKUPS** `dropbox` — resource: **folder**, operation: **list**, path: `/={{ $('DESTINATION FOLDER').last().json.folder }}`
10. **LIST OLD BACKUPS** `dropbox` — resource: **folder**, operation: **list**, path: `/={{ $('DESTINATION FOLDER').last().json.folder }}old`
11. **IGNORE FOLDERS** `filter` — options: "[object Object]", conditions: "[object Object]"
12. **CHECK DATES** `if` — options: "[object Object]", conditions: "[object Object]"
13. **MOVE INTO OLD FOLDER** `dropbox` — operation: **move**, path: `/={{ $json.pathDisplay }}`
14. **DELETE OLD BACKUPS** `dropbox` — operation: **delete**, path: `/={{ $json.pathDisplay }}`
15. **WAIT FOR MOVE TO FINISH** `merge` — mode: "chooseBranch", output: "input2"
16. **GET WORKFLOWS** `n8n` — filters: "[object Object]"
17. **MAKE JSON FILES** `moveBinaryData` — mode: "jsonToBinary", options: "[object Object]"
18. **UPLOAD WORKFLOWS** `dropbox` — path: `/={{ $('DESTINATION FOLDER').last().json.folder }}{{ $('GET WORKFLOWS').item.json.name }}.json`
  
  ## 💡 AI-Powered Ideas for Improvement
  - **Explain**: This n8n workflow automates the process of managing workflow backups in Dropbox. It schedules regular backups of current workflows, moves existing backups to an "old" folder, and deletes backups older than 30 days to save space. The workflow ensures that only the latest backups are retained while removing outdated ones.

- **Demonstrate**: A business owner with multiple automated workflows in n8n can use this to ensure data integrity and save storage space, preventing Dropbox from reaching its limit by maintaining only relevant backups.

- **Imitate**: 
  1. Import the workflow to n8n.
  2. Set up Dropbox credentials.
  3. Customize the scheduling for how often backups should occur.
  4. Test the workflow to ensure backups are created, moved, and purged as expected.

- **Practice**: Set up a test environment with dummy workflows in n8n. Run the workflow to see how backups are managed. Adjust the parameters to see how changes affect the backup and purging process.

- **WIIFM**: Mastering this workflow can help you offer backup management services, ensuring clients' data is secure and organized. This added value can enhance your service offerings, leading to higher client satisfaction and retention in your automation business.
  
  ## 🔧 Setup Instructions
  1. **Connect Credentials:** dropboxOAuth2Api, n8nApi.
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
  