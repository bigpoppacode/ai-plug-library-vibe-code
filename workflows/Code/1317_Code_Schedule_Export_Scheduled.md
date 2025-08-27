# Code Schedule Export Scheduled
  ## 🚀 What It Does
  Moves data between apps and a **database/spreadsheet**, with logic and optional AI steps.
  
  ## 💼 Business Use Case
  Use to eliminate manual copy-paste and standardize a recurring business process.
  
  ## ⚙️ How It Works
  1. **Trigger:** Runs on a **schedule** (e.g., `[object Object]`).
  2. **Every day** `scheduleTrigger` — rule: "[object Object]"
3. **When a page is added to the database** `notionTrigger` — pollTimes: "[object Object]", databaseId: "[object Object]"
4. **Sticky Note** `stickyNote` — width: "860", height: "460", content: "## 🧹 Archive (delete) extra duplicate items from Notion database
### ABOUT THIS WORKFLOW
This n8n workflow automatically gets duplicate database pages based on a property and "arc…[truncated]"
5. **Sticky Note1** `stickyNote` — color: "5", width: "220", height: "420"
6. **Sticky Note2** `stickyNote` — color: "6", width: "860", height: "340"
7. **Sticky Note3** `stickyNote` — color: "3", width: "180", height: "420"
8. **Get pages from database** `notion` — resource: **databasePage**, operation: **getAll**
9. **Format items properly** `set` — options: "[object Object]", assignments: "[object Object]"
10. **Aggregate all items** `aggregate` — options: "[object Object]", aggregate: "aggregateAllItemData", destinationFieldName: "pages"
11. **Filter duplicates** `code` — jsCode: "const inputData = $input.first().json.pages;

const seen = new Set();
const duplicates = new Map();

inputData.forEach(item => {
  const propertyValue = item.property_to_check;
  i…[truncated]"
12. **Archive pages** `notion` — operation: **archive**
  
  ## 💡 AI-Powered Ideas for Improvement
  **Explain**  
This n8n workflow is designed to automatically manage duplicate entries in a Notion database. It triggers daily or when a page is added, retrieves all pages from the database, formats the data, identifies duplicates based on a specified property, and archives these duplicates, keeping only one copy. This ensures the database remains clean and organized without manual intervention.

**Demonstrate**  
A business owner might use this workflow to keep their client database in Notion free from duplicate entries, ensuring that each client record is unique and up-to-date, which is crucial for accurate reporting and client management.

**Imitate**  
1. Import the workflow into n8n.
2. Connect your Notion account and select the database to manage.
3. Set the property to check for duplicates in the "Format items properly" node.
4. Enable the triggers for daily checks or new page additions.
5. Test the workflow to ensure duplicates are correctly archived.

**Practice**  
Create a test Notion database with intentional duplicate entries. Run the workflow and observe how it archives duplicates. Modify the property used for duplication checks to see how the workflow adapts.

**WIIFM**  
Mastering this workflow can help you offer database management services to clients, ensuring their data is clean and organized. This adds value to your automation business, attracting more clients who need efficient data management solutions.
  
  ## 🔧 Setup Instructions
  1. **Cron/Schedule:** Confirm timezone and cadence; start with a test window (e.g., every 5 minutes) then scale.
  
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
  