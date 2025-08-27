# Filter Manual Automation Webhook
  ## 🚀 What It Does
  Moves data between apps and a **database/spreadsheet**, with logic and optional AI steps.
  
  ## 💼 Business Use Case
  Use as a **glue/API broker**: receive data, enrich/validate via APIs, and pass to downstream systems.
  
  ## ⚙️ How It Works
  1. **Trigger:** This workflow starts with **When clicking ‘Test workflow’**.
  2. **When clicking ‘Test workflow’** `manualTrigger` — configured for its default action.
3. **Sticky Note** `stickyNote` — width: "725", height: "316.25", content: "## Company research via Google Sheets and ProspectLens

Get your API key:
https://apiroad.net/marketplace/apis/prospectlens

Copy Google Sheet template:
https://docs.google.com/spr…[truncated]"
4. **Get all rows from Sheets** `googleSheets` — options: "[object Object]", sheetName: "[object Object]", documentId: "[object Object]"
5. **Filter** `filter` — options: "[object Object]", conditions: "[object Object]"
  
  ## 💡 AI-Powered Ideas for Improvement
  ### Explain
This n8n workflow automates company data research using Google Sheets and the ProspectLens API. It reads company domains from a Google Sheet, filters unprocessed entries, and retrieves detailed company data via the API. The results, including metrics like traffic and funding, are then saved back into the Google Sheet, updating each entry as processed.

### Demonstrate
A consultant could use this workflow to automate the collection and updating of company data for market research, saving time and ensuring accurate, up-to-date information for business analysis or client presentations.

### Imitate
1. Import the workflow into n8n.
2. Connect your Google Sheets and ProspectLens API accounts.
3. Set up a Google Sheet with company domains.
4. Test the workflow to ensure it retrieves and updates data correctly.
5. Adjust node settings to match your specific data needs.

### Practice
Create a Google Sheet with a few company domains. Run the workflow to fetch and update company data using ProspectLens. Experiment with modifying API parameters or adding new data fields to the sheet.

### WIIFM
Mastering this workflow can help you offer automated market research services, enhancing your consulting offerings. This efficiency can attract more clients, improve data accuracy, and potentially increase your income through higher-value services.
  
  ## 🔧 Setup Instructions
  1. **Connect Credentials:** googleSheetsOAuth2Api, httpHeaderAuth.
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
  