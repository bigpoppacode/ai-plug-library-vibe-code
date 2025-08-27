# Filter Manual Import Webhook
  ## 🚀 What It Does
  Moves data between apps and a **database/spreadsheet**, with logic and optional AI steps.
  
  ## 💼 Business Use Case
  Use as a **glue/API broker**: receive data, enrich/validate via APIs, and pass to downstream systems.
  
  ## ⚙️ How It Works
  1. **Trigger:** This workflow starts with **When clicking "Execute Workflow"**.
  2. **When clicking "Execute Workflow"** `manualTrigger` — configured for its default action.
3. **Sticky Note** `stickyNote` — width: "460", height: "293", content: "### Google API has rate-limits for read and write operations, that's why we take only a subset of the data

To import the whole dataset please add Split In Batches and a Wait node …[truncated]"
4. **Download CSV** `httpRequest` — url: `https://opendata.ecdc.europa.eu/covid19/testing/csv/data.csv`
5. **Import CSV** `spreadsheetFile` — options: "[object Object]", fileFormat: "csv"
6. **Add unique field** `set` — fields: "[object Object]", options: "[object Object]"
7. **Keep only DACH in 2023** `filter` — conditions: "[object Object]"
8. **Upload to spreadsheet** `googleSheets` — operation: **appendOrUpdate**
  
  ## 💡 AI-Powered Ideas for Improvement
  ### Explain
This n8n workflow automates the process of downloading COVID-19 testing data from a public URL, filtering it for specific countries (Germany, Austria, Switzerland) in 2023, and uploading the filtered data to a Google Sheet. It ensures only relevant data is processed and stored efficiently.

### Demonstrate
A health data analyst could use this workflow to regularly update a Google Sheet with the latest COVID-19 testing data for the DACH region. This enables easy analysis and reporting, ensuring stakeholders have access to up-to-date information.

### Imitate
1. Import the workflow into n8n.
2. Connect your Google Sheets account.
3. Set up a schedule or manually trigger the workflow.
4. Customize the filter node for different countries or years if needed.
5. Test the workflow to ensure data is correctly filtered and uploaded.

### Practice
Create a test Google Sheet and run the workflow. Experiment by changing the filter criteria to include different countries or years and observe how it affects the data uploaded to your Google Sheet.

### WIIFM
Mastering this workflow empowers you to offer data automation solutions, streamlining data collection and reporting processes. This capability can enhance your service offerings, attract more clients, and increase revenue in your AI automation business.
  
  ## 🔧 Setup Instructions
  1. **Connect Credentials:** googleSheetsOAuth2Api.
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
  