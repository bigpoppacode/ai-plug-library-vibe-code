# Code Manual Send Webhook
  ## 🚀 What It Does
  Moves data between apps and a **database/spreadsheet**, with logic and optional AI steps.
  
  ## 💼 Business Use Case
  Use as a **glue/API broker**: receive data, enrich/validate via APIs, and pass to downstream systems.
  
  ## ⚙️ How It Works
  1. **Trigger:** This workflow starts with **When clicking "Execute Workflow"**.
  2. **When clicking "Execute Workflow"** `manualTrigger` — configured for its default action.
3. **Sticky Note** `stickyNote` — height: "259", content: "## Email search with Icypeas (bulk search)


This workflow demonstrates how to perform email searches (bulk search) using Icypeas. Visit https://icypeas.com to create your account."
4. **Sticky Note1** `stickyNote` — height: "606.4963141641612", content: "## Read your Google Sheet file

This node reads a Google Sheet. You need to create a sheet with :
















**The first column** :
Header : lastname

**The first column** :
H…[truncated]"
5. **Sticky Note3** `stickyNote` — width: "392.0593078758952", height: "1203.3290499048028", content: "[redacted]"
6. **Sticky Note4** `stickyNote` — width: "328.8456933308303", height: "869.114109302513", content: "[redacted]"
7. **Reads lastname,firstname and company from your sheet** `googleSheets` — sheetName: "[object Object]", documentId: "[object Object]"
8. **Authenticates to your Icypeas account** `code` — jsCode: "[redacted]"
9. **Run bulk search (email-search)** `httpRequest` — method: **POST**, url: `={{ $json.api.url }}`
  
  ## 💡 AI-Powered Ideas for Improvement
  ### Explain
This n8n workflow automates the process of conducting bulk email searches using Icypeas. It begins by manually triggering the workflow, which then reads a Google Sheet containing names and company information. The workflow authenticates with Icypeas using API credentials and submits the data for a bulk email search. The results are processed through an HTTP request to the Icypeas API.

### Demonstrate
A business owner could use this workflow to quickly verify email addresses for a list of potential clients extracted from a Google Sheet, ensuring that their marketing campaigns reach valid contacts.

### Imitate
1. Set up a Google Sheet with columns for last name, first name, and company.
2. Import the workflow to n8n.
3. Connect Google Sheets and Icypeas accounts.
4. Input API credentials in the code node.
5. Execute the workflow and verify the email search results.

### Practice
Create a sample Google Sheet with three entries and run the workflow to test the email search functionality. Adjust the data to see how changes affect the results.

### WIIFM
Mastering this workflow allows you to offer automated email verification services. This can enhance your value proposition to clients, streamline their marketing efforts, and potentially increase your income by offering efficient automation solutions.
  
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
  