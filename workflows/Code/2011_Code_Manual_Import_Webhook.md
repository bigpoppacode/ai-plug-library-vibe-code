# Code Manual Import Webhook
  ## 🚀 What It Does
  Moves data between apps and a **database/spreadsheet**, with logic and optional AI steps.
  
  ## 💼 Business Use Case
  Use as a **glue/API broker**: receive data, enrich/validate via APIs, and pass to downstream systems.
  
  ## ⚙️ How It Works
  1. **Trigger:** This workflow starts with **When clicking "Execute Workflow"**.
  2. **When clicking "Execute Workflow"** `manualTrigger` — configured for its default action.
3. **Sticky Note** `stickyNote` — width: "271", height: "330", content: "## Settings
**Todo**: Configure your Shopware URL"
4. **Sticky Note1** `stickyNote` — width: "272", height: "450", content: "## Google Sheet
**Todo:** Create a Google Sheet with the columns:
- name (**unique**)
- website
- description
- logo_url"
5. **Sticky Note2** `stickyNote` — height: "499.67801857585135", content: "[redacted]"
6. **Sticky Note3** `stickyNote` — height: "399.1455108359133", content: "## Shopware Manufacturer Logo Upload
**Todo**: Connect your Shopware Account as you did two nodes before."
7. **Settings** `set` — fields: "[object Object]", options: "[object Object]"
8. **Get Manufacturer from Google Sheet** `googleSheets` — options: "[object Object]", sheetName: "[object Object]", documentId: "[object Object]"
9. **Create Import Request Body** `code` — jsCode: "// importing crypto package to create md5 hashes for the media ids
const crypto = require('crypto');
const md5 = data => crypto.createHash('md5').update(data).digest("hex")

functi…[truncated]"
  
  ## 💡 AI-Powered Ideas for Improvement
  **Explain:** This n8n workflow automates the import of manufacturer data from a Google Sheet into Shopware 6. It retrieves manufacturer details like name, website, description, and logo URL from the Google Sheet, formats the data, and uploads it to Shopware. The workflow also handles the upload of manufacturer logos if available.

**Demonstrate:** A business owner could use this workflow to automate the process of updating their online store with new manufacturer information, ensuring that their product listings are always current and accurate without manual data entry.

**Imitate:** 
1. Set up a Google Sheet with columns: name, website, description, logo_url.
2. Configure your Shopware URL in the workflow.
3. Connect your Google Sheets and Shopware accounts in n8n.
4. Import and configure the workflow to match your data structure.
5. Test the workflow to ensure it imports data correctly.

**Practice:** Create a sample Google Sheet with a few manufacturer entries. Run the workflow to see how it imports the data into Shopware. Add a logo URL to one entry and observe how the workflow handles the logo upload.

**WIIFM:** Mastering this workflow allows you to provide efficient data synchronization services between Google Sheets and e-commerce platforms like Shopware, enhancing your service offerings and potentially increasing your income as an automation consultant.
  
  ## 🔧 Setup Instructions
  1. **Connect Credentials:** oAuth2Api, googleSheetsOAuth2Api.
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
  