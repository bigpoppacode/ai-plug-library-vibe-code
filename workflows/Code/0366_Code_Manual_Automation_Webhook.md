# Code Manual Automation Webhook
  ## 🚀 What It Does
  Moves data between apps and a **database/spreadsheet**, with logic and optional AI steps.
  
  ## 💼 Business Use Case
  Use as a **glue/API broker**: receive data, enrich/validate via APIs, and pass to downstream systems.
  
  ## ⚙️ How It Works
  1. **Trigger:** This workflow starts with **When clicking "Execute Workflow"**.
  2. **When clicking "Execute Workflow"** `manualTrigger` — configured for its default action.
3. **Sticky Note** `stickyNote` — height: "259", content: "## Domain scan with Icypeas (bulk search)


This workflow demonstrates how to perform domain scans (bulk search) using Icypeas. Visit https://icypeas.com to create your account."
4. **Sticky Note1** `stickyNote` — height: "523.2083276562503", content: "## Read your Google sheet file

This node reads a Google Sheet. You need to create a sheet with :
















**The first column** :
Header : company




Don't forget to specif…[truncated]"
5. **Sticky Note3** `stickyNote` — width: "392.0593078758952", height: "1203.3290499048028", content: "[redacted]"
6. **Sticky Note4** `stickyNote` — width: "328.8456933308303", height: "869.114109302513", content: "[redacted]"
7. **Reads lastname,firstname and company from your sheet** `googleSheets` — sheetName: "[object Object]", documentId: "[object Object]"
8. **Authenticates to your Icypeas account** `code` — jsCode: "[redacted]"
9. **Run bulk search (domain-search)** `httpRequest` — method: **POST**, url: `={{ $json.api.url }}`
  
  ## 💡 AI-Powered Ideas for Improvement
  ### Explain
This n8n workflow automates domain scanning in bulk using Icypeas. It retrieves company information from a Google Sheet, authenticates to your Icypeas account, and sends a POST request to Icypeas to run domain searches. The results are then available in the Icypeas application.

### Demonstrate
A business owner could use this workflow to efficiently scan multiple domains for security checks or market analysis, saving time and ensuring comprehensive coverage.

### Imitate
1. Import the workflow into n8n.
2. Connect your Google Sheets and Icypeas accounts.
3. Populate your Google Sheet with company data.
4. Configure the Icypeas authentication node with your API credentials.
5. Test and run the workflow to initiate domain scans.

### Practice
Create a Google Sheet with sample company names. Configure the workflow to read from this sheet and run the workflow to observe how it processes the data and triggers domain scans.

### WIIFM
Mastering this workflow enables you to offer automated domain scanning services, enhancing your business offerings and potentially increasing revenue by providing detailed insights and analysis for your clients.
  
  ## 🔧 Setup Instructions
  1. **Data Mapping:** Verify base/sheet IDs and column names match exactly to prevent silent failures.
2. **API Contracts:** Validate required headers and 2xx/4xx handling; add retries for 429/5xx.
  
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
  