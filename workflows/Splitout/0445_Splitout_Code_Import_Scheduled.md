# Splitout Code Import Scheduled
## 🚀 What It Does
Moves data between apps and a **database/spreadsheet**, with logic and optional AI steps.

## 💼 Business Use Case
Ideal for **lead intake**, **enrichment**, and **CRM updates** with alerts to the right channel.

## ⚙️ How It Works
1. **Trigger:** Runs on a **schedule** (e.g., `[object Object]`).
2. **Every day at 06:00** `scheduleTrigger` — rule: "[object Object]"
3. **Sticky Note1** `stickyNote` — color: "7", width: "256.14371825927645", height: "100"
4. **Sticky Note** `stickyNote` — color: "7", width: "256.14371825927645", height: "100"
5. **Sticky Note2** `stickyNote` — color: "7", width: "256.14371825927645", height: "100"
6. **Sticky Note3** `stickyNote` — color: "5", width: "403.45318928152614", height: "280.9004675550071"
7. **Sticky Note4** `stickyNote` — color: "7", width: "256.14371825927645", height: "100"
8. **Get all your team's tickets** `graphql` — query: "query ($filter: IssueFilter) {
  issues(filter: $filter, first: 100) {
    pageInfo {
      hasNextPage
      endCursor
    }
    nodes {
      id
      identifier
      url
      …[truncated]", endpoint: "https://api.linear.app/graphql", variables: "={
  "filter": {
    "team": {
      "name":  {
        "eq": "Adore"
      }
    }
  }
}"

## 💡 AI-Powered Ideas for Improvement
### Explain
This n8n workflow automates the process of retrieving, organizing, and storing your team's tickets from Linear every day at 6:00 AM. It fetches tickets using GraphQL, checks for pagination, processes each ticket to extract necessary fields, and then writes the data to a Google Sheet. This ensures that you have a daily updated record of all team tickets in a structured format.

### Demonstrate
A project manager could use this workflow to keep track of all team tickets from Linear. By having this data in a Google Sheet, they can easily share updates with stakeholders, perform analysis, or integrate with other reporting tools to monitor project progress.

### Imitate
1. Import the workflow into n8n.
2. Connect your Linear and Google Sheets accounts.
3. Update the GraphQL query to match your team name.
4. Set up the Google Sheet to receive the data.
5. Test the workflow to ensure tickets are fetched and stored correctly.

### Practice
Create a test Linear account with sample tickets. Run the workflow to fetch and store these tickets in a Google Sheet. Modify ticket details and rerun the workflow to see how updates are reflected in the sheet.

### WIIFM
Mastering this workflow allows you to offer automated project tracking solutions, saving clients time and enhancing their productivity. This skill can help you attract more clients and generate income by providing valuable automation services in project management.

## 🔧 Setup Instructions
1. **Connect Credentials:** httpHeaderAuth, googleSheetsOAuth2Api.
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
