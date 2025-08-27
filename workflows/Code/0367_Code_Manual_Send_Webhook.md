# Code Manual Send Webhook
  ## 🚀 What It Does
  Moves data between apps and a **database/spreadsheet**, with logic and optional AI steps.
  
  ## 💼 Business Use Case
  Use as a **glue/API broker**: receive data, enrich/validate via APIs, and pass to downstream systems.
  
  ## ⚙️ How It Works
  1. **Trigger:** This workflow starts with **When clicking "Execute Workflow"**.
  2. **When clicking "Execute Workflow"** `manualTrigger` — configured for its default action.
3. **Sticky Note** `stickyNote` — height: "292.0581548177272", content: "## Perform Batch Processing of Email verifications with Icypeas 


This workflow demonstrates how to perform email verifications (bulk search) using Icypeas. Visit https://icypeas.…[truncated]"
4. **Sticky Note1** `stickyNote` — height: "523.2083276562503", content: "## Read your Google sheet file

This node reads a Google Sheet. You need to create a sheet with :
















**The first column** :
Header : email




Don't forget to specify …[truncated]"
5. **Sticky Note3** `stickyNote` — width: "392.0593078758952", height: "1203.3290499048028", content: "[redacted]"
6. **Sticky Note4** `stickyNote` — width: "328.8456933308303", height: "869.114109302513", content: "[redacted]"
7. **Reads lastname,firstname and company from your sheet** `googleSheets` — sheetName: "[object Object]", documentId: "[object Object]"
8. **Authenticates to your Icypeas account** `code` — jsCode: "[redacted]"
9. **Run bulk search (email-verif)** `httpRequest` — method: **POST**, url: `={{ $json.api.url }}`
  
  ## 💡 AI-Powered Ideas for Improvement
  **Explain:**  
This n8n workflow automates the process of verifying email addresses from a Google Sheet using Icypeas. It retrieves email data from the sheet, authenticates with Icypeas using API credentials, and then performs a bulk email verification. The results are then processed, ensuring that the email list is clean and valid for further use.

**Demonstrate:**  
A business owner can use this workflow to ensure their email marketing lists are valid, reducing bounce rates and improving delivery success, which is crucial for effective communication and maintaining sender reputation.

**Imitate:**  
1. Import the workflow into your n8n instance.
2. Connect your Google Sheets and Icypeas accounts.
3. Configure the Google Sheets node to point to your email list.
4. Insert your Icypeas API credentials in the workflow.
5. Test and execute the workflow to verify email addresses.

**Practice:**  
Create a Google Sheet with sample email addresses. Run the workflow and observe how it verifies the emails using Icypeas. Modify some emails to see how the workflow handles invalid addresses.

**WIIFM:**  
Mastering this workflow enables you to offer email verification services, enhancing client email campaigns and expanding your service offerings, potentially increasing client engagement and revenue in your automation business.
  
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
  