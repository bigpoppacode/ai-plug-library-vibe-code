# Code Schedule Import Scheduled
  ## 🚀 What It Does
  Moves data between apps and a **database/spreadsheet**, with logic and optional AI steps.
  
  ## 💼 Business Use Case
  Use as a **glue/API broker**: receive data, enrich/validate via APIs, and pass to downstream systems.
  
  ## ⚙️ How It Works
  1. **Trigger:** Runs on a **schedule** (e.g., `[object Object]`).
  2. **Sticky Note** `stickyNote` — width: "318.8857938718665", height: "287.01949860724255", content: "## Read me

This workflow will scrape recent fundraising events from Crunchbase, and add them in Google Sheets.

Full guide here: https://lempire.notion.site/Get-recent-fundraising…[truncated]"
3. **Schedule Trigger - Run Workflow Every Day** `scheduleTrigger` — rule: "[object Object]"
4. **Sticky Note1** `stickyNote` — height: "818.134682564936", content: "Create an account at piloterr.com to get your API key

Feel free to delete the node that are not useful to you. For instance "Serie B" and "Seed" if you want only to scrape Serie A…[truncated]"
5. **Piloterr - Get Recent Fundraise - Serie A** `httpRequest` — url: `https://piloterr.com/api/v2/crunchbase/funding_rounds`
6. **Piloterr - Get Recent Fundraise - Serie B** `httpRequest` — url: `https://piloterr.com/api/v2/crunchbase/funding_rounds`
7. **Piloterr - Get Recent Fundraise - Seed** `httpRequest` — url: `https://piloterr.com/api/v2/crunchbase/funding_rounds`
8. **Split results** `itemLists` — options: "[object Object]", fieldToSplitOut: "results"
9. **Prepare data** `set` — values: "[object Object]", options: "[object Object]", keepOnlySet: "true"
10. **Piloterr - Enrich company** `httpRequest` — url: `https://piloterr.com/api/v2/crunchbase/company/info`
11. **Get Linkedin URL from object** `code` — mode: "runOnceForEachItem", jsCode: "// Find the LinkedIn object
let linkedinObject = $json.social_networks.find(e => e.name === 'linkedin');

// If the LinkedIn object exists, get the URL; otherwise, set to null or h…[truncated]"
12. **Prepare data before importing to Gsheets** `set` — values: "[object Object]", options: "[object Object]", keepOnlySet: "true"
13. **Merge** `merge` — mode: "combine", options: "[object Object]", combinationMode: "mergeByPosition"
14. **Google Sheets** `googleSheets` — operation: **appendOrUpdate**
  
  ## 💡 AI-Powered Ideas for Improvement
  ### Explain
This n8n workflow automates the process of scraping recent fundraising events from Crunchbase and adding them to a Google Sheets document. It runs daily, retrieving data for different investment types (Series A, B, Seed) using the Piloterr API, enriches the data with additional company information, and then stores the results in Google Sheets.

### Demonstrate
A startup accelerator could use this workflow to track recent investments in their industry, allowing them to identify potential partners or competitors. This data can inform strategic decisions and networking opportunities.

### Imitate
1. Create an n8n account and import the workflow.
2. Set up a Piloterr account and get your API key.
3. Customize the workflow to include only the investment types you care about.
4. Connect your Google Sheets account and specify the document where the data should be stored.
5. Test the workflow to ensure it captures and updates the data correctly.

### Practice
Create a Google Sheet with columns matching the data fields in the workflow. Run the workflow manually to see how data is added. Modify the workflow to include additional data fields or filter criteria, then observe the changes in the Google Sheet.

### WIIFM
Mastering this workflow allows you to automate data collection, offering valuable insights to clients in venture capital or market research. This can enhance your service offerings, attract new clients, and create recurring revenue streams in your AI automation business.
  
  ## 🔧 Setup Instructions
  1. **Connect Credentials:** httpHeaderAuth, googleSheetsOAuth2Api.
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
  