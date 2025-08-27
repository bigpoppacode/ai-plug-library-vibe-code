# Stopanderror Splitout Export Scheduled
## 🚀 What It Does
Automates a flow using stickyNote×5, set×4, github×3.

## 💼 Business Use Case
Use as a **glue/API broker**: receive data, enrich/validate via APIs, and pass to downstream systems.

## ⚙️ How It Works
1. **Trigger:** Runs on a **schedule** (e.g., `[object Object]`).
2. **Schedule Trigger** `scheduleTrigger` — rule: "[object Object]"
3. **Sticky Note3** `stickyNote` — width: "220", height: "380", content: "## Set Globals
- Define the repository owner (username / organization) and repository name
- By default the fist available Clockify workspace ID is set. This can be overridden here…[truncated]"
4. **Sticky Note4** `stickyNote` — width: "220", height: "280", content: "## Set trigger
By default this workflow runs once a day."
5. **Sticky Note** `stickyNote` — width: "220", height: "340", content: "## Set Scope (optional)
By default the last three moths are being backed up.
_0 = current month, 1 = last month, etc._"
6. **Sticky Note1** `stickyNote` — color: "7", width: "220", height: "280"
7. **Sticky Note2** `stickyNote` — color: "7", width: "920", height: "780"
8. **Get first workspace** `clockify` — resource: **workspace**
9. **Globals** `set` — options: "[object Object]", assignments: "[object Object]"
10. **Set month indexes** `set` — options: "[object Object]", assignments: "[object Object]"
11. **Split Out indexes** `splitOut` — options: "[object Object]", fieldToSplitOut: "monthIndex"
12. **Set intervals** `set` — options: "[object Object]", assignments: "[object Object]"
13. **Get detailed monthly report** `httpRequest` — method: **POST**, url: `=https://reports.api.clockify.me/v1/workspaces/{{ $('Globals').item.json.workspace_id }}/reports/detailed`
14. **Check if file exists in GitHub** `github` — resource: **file**, operation: **get**
15. **Point to new data** `set` — options: "[object Object]", assignments: "[object Object]"
16. **Extract from File** `extractFromFile` — operation: **fromJson**
17. **Check for 404 error message** `if` — options: "[object Object]", conditions: "[object Object]"
18. **Compare Datasets** `compareDatasets` — options: "[object Object]", mergeByFields: "[object Object]"
19. **Skip empty reports** `filter` — options: "[object Object]", conditions: "[object Object]"
20. **Stop and Error** `stopAndError` — errorMessage: "={{ $json.error }}"
21. **Update file in GitHub** `github` — resource: **file**, operation: **edit**
22. **Create file in GitHub** `github` — resource: **file**

## 💡 AI-Powered Ideas for Improvement
**Explain**  
This n8n workflow automates the process of backing up Clockify reports to GitHub. It retrieves detailed monthly reports from Clockify, checks if a corresponding file exists in a GitHub repository, and either updates or creates a new file with the report data. The workflow is triggered daily and processes reports for the past three months by default, ensuring that historical data is backed up and any changes in the data are captured and stored in GitHub.

**Demonstrate**  
A business owner uses this workflow to ensure that all time-tracking data from Clockify is reliably backed up to GitHub. This is crucial for maintaining historical records for audits and performance reviews.

**Imitate**  
1. Set up n8n and import the workflow.  
2. Connect Clockify and GitHub accounts in n8n.  
3. Configure the repository details in the workflow.  
4. Adjust the schedule trigger to fit your backup needs.  
5. Test the workflow to ensure reports are correctly backed up.

**Practice**  
Create a test repository in GitHub and run the workflow. Modify the date range to back up the current month's data, and verify that the report files are created or updated in your test repository.

**WIIFM**  
Mastering this workflow can help you offer automated data backup services, ensuring clients' data integrity and compliance. This adds significant value to your service offerings, potentially increasing client satisfaction and retention, and opening opportunities for recurring revenue.

## 🔧 Setup Instructions
1. **Connect Credentials:** clockifyApi, githubApi.
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
