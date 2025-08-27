# Manual GoogleSheets Update Triggered
  ## 🚀 What It Does
  Moves data between apps and a **database/spreadsheet**, with logic and optional AI steps.
  
  ## 💼 Business Use Case
  Ideal for **lead intake**, **enrichment**, and **CRM updates** with alerts to the right channel.
  
  ## ⚙️ How It Works
  1. **Trigger:** This workflow starts with **When clicking ‘Test workflow’**.
  2. **When clicking ‘Test workflow’** `manualTrigger` — configured for its default action.
3. **Get person** `googleSheets` — options: "[object Object]", sheetName: "[object Object]", documentId: "[object Object]"
4. **Calculate ICP PersonScoring** `airtop` — resource: **extraction**, operation: **query**, url: `={{ $json['Linkedin_URL_Person'] }}`, prompt: "Please extract the following information from the LinkedIn profile page:

1. **Full Name**: Extract the full name of the individual.
2. **Current or Most Recent Job Title**: Identi…[truncated]"
5. **Format response** `code` — mode: "runOnceForEachItem", jsCode: "const row_number = $('Get person').item.json.row_number
const Linkedin_URL_Person = $('Get person').item.json.Linkedin_URL_Person
const ICP_Score_Person = JSON.parse($input.item.js…[truncated]"
6. **Update row** `googleSheets` — operation: **update**
  
  ## 💡 AI-Powered Ideas for Improvement
  ### Explain
This workflow automates the process of scoring individuals based on their LinkedIn profiles. It retrieves LinkedIn URLs from a Google Sheet, extracts key information using an AI tool, calculates an ICP (Ideal Customer Profile) score based on AI interest, technical depth, and seniority level, and updates the Google Sheet with the scores.

### Demonstrate
A business owner can use this workflow to evaluate potential leads automatically. By scoring leads based on their LinkedIn profiles, the owner can prioritize high-value targets, saving time on manual research and focusing efforts on the most promising prospects.

### Imitate
1. Import the workflow into n8n.
2. Connect your Google Sheets account and ensure the sheet contains LinkedIn URLs.
3. Set up the AI extraction tool with your credentials.
4. Customize the scoring criteria if needed.
5. Test the workflow to ensure it updates scores correctly in the sheet.

### Practice
Create a Google Sheet with a few LinkedIn profile URLs. Run the workflow to extract and score these profiles, and observe the updates to the sheet. Adjust some parameters or add more profiles to see how it adapts.

### WIIFM
Mastering this workflow enables you to offer lead scoring services, enhancing your value to clients. By automating lead evaluation, you can provide insights that help businesses prioritize their outreach, potentially increasing client conversions and revenue.
  
  ## 🔧 Setup Instructions
  1. **Data Mapping:** Verify base/sheet IDs and column names match exactly to prevent silent failures.
  
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
  