# Manual HTTP Update Webhook
  ## 🚀 What It Does
  Moves data between apps and a **database/spreadsheet**, with logic and optional AI steps.
  
  ## 💼 Business Use Case
  Use as a **glue/API broker**: receive data, enrich/validate via APIs, and pass to downstream systems.
  
  ## ⚙️ How It Works
  1. **Trigger:** This workflow starts with **When clicking "Test workflow"**.
  2. **When clicking "Test workflow"** `manualTrigger` — configured for its default action.
3. **Sticky Note** `stickyNote` — width: "862.7929292929296", height: "316.6010101010099", content: "## How to use the workflow
1. Set a Base in Airtable with a table with the following structure:
  `url`, `title tag`, `meta desc`
2. Connect Airtable to the nodes and, with the fol…[truncated]"
4. **Get records** `airtable` — operation: **search**, table: `[object Object]`
5. **Get url content** `httpRequest` — url: `={{ $json.url }}`
6. **Extract title tag and meta description** `html` — operation: **extractHtmlContent**
7. **Update original record** `airtable` — operation: **update**, table: `[object Object]`
  
  ## 💡 AI-Powered Ideas for Improvement
  ### Explain
This n8n workflow automates the extraction of SEO metadata from URLs stored in an Airtable base. It retrieves records with missing title tags and meta descriptions, fetches the URL content, extracts the necessary HTML elements, and updates the Airtable records with the retrieved metadata. 

### Demonstrate
A digital marketing consultant could use this workflow to maintain up-to-date SEO metadata for client websites, ensuring that all pages have the necessary title tags and meta descriptions for improved search engine optimization.

### Imitate
1. Import the workflow into n8n.
2. Connect your Airtable account and ensure your base has `url`, `title tag`, and `meta desc` fields.
3. Set the workflow to trigger manually or on a schedule.
4. Test the workflow with a few URLs to ensure it retrieves and updates metadata correctly.

### Practice
Create a sample Airtable base with URLs lacking metadata. Run the workflow and observe how it extracts and updates the title tags and meta descriptions. Modify the URLs to test different scenarios and ensure the workflow handles them correctly.

### WIIFM
Mastering this workflow allows you to offer SEO optimization services by automating metadata updates for websites. This can enhance your service offerings, attract more clients, and generate additional income in the digital marketing and automation sectors.
  
  ## 🔧 Setup Instructions
  1. **Connect Credentials:** airtableTokenApi.
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
  