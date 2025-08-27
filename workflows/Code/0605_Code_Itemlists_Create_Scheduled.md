# Code Itemlists Create Scheduled
  ## 🚀 What It Does
  Automates a flow using stickyNote×10, googleDrive×9, splitInBatches×3.
  
  ## 💼 Business Use Case
  Use to eliminate manual copy-paste and standardize a recurring business process.
  
  ## ⚙️ How It Works
  1. **Trigger:** Runs on a **schedule** (e.g., `[object Object]`).
  2. **Sticky Note** `stickyNote` — color: "4", width: "982.895112064014", height: "248.06218763804304"
3. **Sticky Note2** `stickyNote` — width: "980.8812626356395", height: "188.38611225559103", content: "PURGE BACKUPS OLDER THEN 30 DAYS
"
4. **Sticky Note3** `stickyNote` — color: "2", width: "1003.460056384994", height: "755.833854865218"
5. **Sticky Note4** `stickyNote` — color: "6", width: "427.1093081837156", height: "753.2799109651138"
6. **Sticky Note8** `stickyNote` — color: "6", width: "355.73762189847923", height: "105.6805438265643"
7. **Sticky Note10** `stickyNote` — color: "5", width: "327.6965514381564", height: "451.756147757587"
8. **Sticky Note5** `stickyNote` — color: "7", width: "203.08765089203305", height: "542.95115693689"
9. **Sticky Note6** `stickyNote` — color: "3", width: "397.07512898799075", height: "759.2757638563562"
10. **LIST OLD BACKUPS** `googleDrive` — resource: **fileFolder**
11. **Sticky Note9** `stickyNote` — color: "3", width: "344.2988945561964", height: "232.84367238845454"
12. **Sticky Note1** `stickyNote` — color: "5", width: "984.8018228465335", height: "267.23574473121596"
13. **Schedule Trigger** `scheduleTrigger` — rule: "[object Object]"
14. **Schedule Trigger1** `scheduleTrigger` — rule: "[object Object]"
15. **Item Lists old** `itemLists` — options: "[object Object]", fieldToSplitOut: "id"
  
  ## 💡 AI-Powered Ideas for Improvement
  **Explain**  
This workflow automates the backup and management of n8n workflows on Google Drive. It creates nightly backups, storing them in a designated "n8n_backups" folder. Older backups are moved to an "n8n_old" folder and renamed with the date. Backups older than 30 days are deleted to maintain storage efficiency. The workflow ensures that the necessary folders exist and manages files to prevent clutter and data loss.

**Demonstrate**  
A business owner might use this workflow to maintain a clean and organized backup system for their n8n workflows, ensuring data safety and efficient storage management.

**Imitate**  
1. Set up Google Drive and n8n credentials in n8n.
2. Create the "n8n_backups" and "n8n_old" folders in your Google Drive.
3. Import the workflow into n8n.
4. Customize the schedule triggers to your preferred backup frequency.
5. Test the workflow to ensure backups are created, moved, and purged as expected.

**Practice**  
Create a sample n8n workflow and run the backup workflow. Verify the backup is stored in "n8n_backups," moved to "n8n_old" after a day, and deleted after 30 days. Adjust parameters to see how changes affect the workflow.

**WIIFM**  
Mastering this workflow helps you offer reliable data management services, ensuring client data safety and optimizing storage. It adds value to your automation business by providing a critical backup solution, increasing client trust and potential income streams.
  
  ## 🔧 Setup Instructions
  1. **Connect Credentials:** googleDriveOAuth2Api, n8nApi.
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
  