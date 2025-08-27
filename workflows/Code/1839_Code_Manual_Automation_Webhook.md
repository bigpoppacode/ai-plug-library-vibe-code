# Code Manual Automation Webhook
  ## 🚀 What It Does
  Moves data between apps and a **database/spreadsheet**, with logic and optional AI steps.
  
  ## 💼 Business Use Case
  Use as a **glue/API broker**: receive data, enrich/validate via APIs, and pass to downstream systems.
  
  ## ⚙️ How It Works
  1. **Trigger:** This workflow starts with **When clicking ‘Test workflow’**.
  2. **When clicking ‘Test workflow’** `manualTrigger` — configured for its default action.
3. **Sticky Note** `stickyNote` — width: "1120.9554973821976", height: "1062.9450261780098", content: "[redacted]"
4. **On new file in Google Drive** `googleDriveTrigger` — event: "fileCreated", options: "[object Object]", pollTimes: "[object Object]"
5. **Get already processed rows from Sheets** `googleSheets` — options: "[object Object]", sheetName: "[object Object]", documentId: "[object Object]"
6. **Load files from Google Drive folder** `googleDrive` — resource: **fileFolder**
7. **Filter processed files** `merge` — mode: "combine", options: "[object Object]", joinMode: "keepNonMatches"
8. **Download file for OCR** `googleDrive` — operation: **download**
9. **OCR recognize** `httpRequest` — method: **POST**, url: `https://receipt-and-invoice-ocr-api.p.rapidapi.com/recognize`
10. **Unserialize response JSON** `code` — jsCode: "// Loop over input items and add a new field called 'myNewField' to the JSON of each one
for (const item of $input.all()) {
  item.json.parsedData = JSON.parse(item.json.result.dat…[truncated]"
11. **Save OCR result into Sheets** `googleSheets` — operation: **appendOrUpdate**
  
  ## 💡 AI-Powered Ideas for Improvement
  ### Explain
This n8n workflow automates the process of extracting information from receipts stored in a Google Drive folder. It starts when a new file is added to the folder or when the workflow is manually triggered. The workflow checks for unprocessed files, downloads them, and uses an OCR API to extract text data. The extracted data is then parsed and stored in a Google Sheets document, effectively converting receipt images into structured data for easier management.

### Demonstrate
A small business owner could use this workflow to automate bookkeeping. By automatically extracting and organizing receipt data, they save time on manual data entry, ensuring accurate and up-to-date financial records.

### Imitate
1. Import the workflow into n8n.
2. Connect your Google Drive and Google Sheets accounts.
3. Set up the RapidAPI OCR service with your API key.
4. Customize the Google Drive folder and Google Sheets document to fit your needs.
5. Test the workflow by adding a new receipt file to the designated Google Drive folder.

### Practice
Create a test Google Drive folder and upload sample receipt files. Run the workflow to see how it processes these files and updates the Google Sheets document. Modify some files to test how the workflow handles different receipt formats.

### WIIFM
Mastering this workflow enables you to offer automated data extraction services to clients, enhancing their operational efficiency. This skill can help you attract more clients in need of automation, potentially increasing your revenue as an AI automation consultant.
  
  ## 🔧 Setup Instructions
  1. **Connect Credentials:** httpHeaderAuth, googleDriveOAuth2Api, googleSheetsOAuth2Api.
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
  