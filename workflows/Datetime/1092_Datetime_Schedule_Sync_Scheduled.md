# Datetime Schedule Sync Scheduled
  ## 🚀 What It Does
  Moves data between apps and a **database/spreadsheet**, with logic and optional AI steps.
  
  ## 💼 Business Use Case
  Ideal for **lead intake**, **enrichment**, and **CRM updates** with alerts to the right channel.
  
  ## ⚙️ How It Works
  1. **Trigger:** Runs on a **schedule** (e.g., `[object Object]`).
  2. **Schedule Trigger** `scheduleTrigger` — rule: "[object Object]"
3. **Pipedrive** `pipedrive` — resource: **person**, operation: **getAll**
4. **MySQL** `mySql` — operation: **executeQuery**
5. **Set** `set` — values: "[object Object]", options: "[object Object]", keepOnlySet: "true"
6. **Compare Datasets** `compareDatasets` — options: "[object Object]", resolve: "includeBoth", mergeByFields: "[object Object]"
7. **Create Person** `pipedrive` — resource: **person**
8. **IF Data Changed** `if` — conditions: "[object Object]"
9. **Create Contact** `mySql` — table: `[object Object]`
10. **Date & Time** `dateTime` — value: "={{ $json["different"]["updated_on"]["input1"] }}", custom: "true", options: "[object Object]"
11. **IF Updated On** `if` — conditions: "[object Object]"
12. **Set Input1** `set` — values: "[object Object]", options: "[object Object]"
13. **Set Input2** `set` — values: "[object Object]", options: "[object Object]"
14. **Update Person** `pipedrive` — resource: **person**, operation: **update**
15. **Update Contact** `mySql` — operation: **executeQuery**
  
  ## 💡 AI-Powered Ideas for Improvement
  **Explain:** This n8n workflow synchronizes contact data between Pipedrive and a MySQL database. It regularly checks for updates in both systems, compares datasets, and updates or creates contacts where necessary. This ensures that both systems have consistent and up-to-date contact information.

**Demonstrate:** A business owner with sales and customer data in Pipedrive and MySQL can use this workflow to ensure both platforms are synchronized. This prevents data discrepancies, ensuring that sales teams and customer service have the latest contact details.

**Imitate:** 1. Import the workflow into n8n. 2. Connect your Pipedrive and MySQL accounts. 3. Set up the schedule trigger for regular synchronization. 4. Map the contact fields between Pipedrive and MySQL in the respective nodes. 5. Test the workflow to ensure data is synchronized correctly.

**Practice:** Create a test MySQL database and Pipedrive account with sample contacts. Run the workflow to observe how it updates or creates contacts in both systems based on changes. Modify some contact details and rerun to see the synchronization process.

**WIIFM:** Mastering this workflow allows you to offer data synchronization services to businesses, helping them maintain accurate and consistent contact databases. This can enhance sales efficiency and customer service, leading to increased client satisfaction and potential revenue growth.
  
  ## 🔧 Setup Instructions
  1. **Connect Credentials:** mySql, pipedriveApi.
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
  