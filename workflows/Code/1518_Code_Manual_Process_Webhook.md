# Code Manual Process Webhook
  ## 🚀 What It Does
  Moves data between apps and a **database/spreadsheet**, with logic and optional AI steps.
  
  ## 💼 Business Use Case
  Use as a **glue/API broker**: receive data, enrich/validate via APIs, and pass to downstream systems.
  
  ## ⚙️ How It Works
  1. **Trigger:** This workflow starts with **When clicking ‘Test workflow’**.
  2. **When clicking ‘Test workflow’** `manualTrigger` — configured for its default action.
3. **Sticky Note** `stickyNote` — color: "3", width: "800", height: "200"
4. **Sticky Note1** `stickyNote` — width: "800", height: "120", content: "## PRELIMINARY STEP
- Get your FREE API KEY from [APYHub](https://apyhub.com//)
- Clone [this sheet](https://docs.google.com/spreadsheets/d/1upj3EDLwU1N7NHWWV3DhwMuE6ty39tIK5z5lCVD…[truncated]"
5. **Set API KEY** `set` — options: "[object Object]", assignments: "[object Object]"
6. **Get images** `googleSheets` — options: "[object Object]", filtersUI: "[object Object]", sheetName: "[object Object]"
7. **Get extension** `code` — jsCode: "// Loop over input items and add new fields 'FILENAME' and 'EXTENSION' to the JSON of each one
for (const item of $input.all()) {
  // Extract the 'FROM' field
  const url = item.j…[truncated]"
8. **JPG or PNG?** `switch` — rules: "[object Object]", options: "[object Object]"
9. **From JPG to WEBP** `httpRequest` — method: **POST**, url: `=https://api.apyhub.com/convert/image/jpeg/webp/url?output=test-sample`
10. **PNG to WEBP** `httpRequest` — method: **POST**, url: `=https://api.apyhub.com/convert/image/png/webp/url?output=test-sample`
11. **Update Sheet** `googleSheets` — operation: **update**
12. **Get file image** `httpRequest` — url: `={{ $json.TO }}`
13. **Upload image** `googleDrive` — name: "={{ $('Get extension').item.json.FILENAME }}.webp", driveId: "[object Object]", options: "[object Object]"
  
  ## 💡 AI-Powered Ideas for Improvement
  - **Explain:** This n8n workflow automates the conversion of images from JPG or PNG formats to WEBP format. It starts by retrieving image URLs from a Google Sheet, identifies the file extension, converts the images using the APYHub API, and then uploads the converted WEBP files to Google Drive. This process ensures efficient image conversion and storage.

- **Demonstrate:** A web developer could use this workflow to optimize website images by converting them to WEBP format, which is smaller and faster to load, improving site performance and user experience.

- **Imitate:** 
  1. Import the workflow into n8n.
  2. Set up your Google Sheets and Google Drive accounts.
  3. Obtain an API key from APYHub.
  4. Clone the provided Google Sheet template and input your image URLs.
  5. Test the workflow to ensure images are converted and uploaded correctly.

- **Practice:** Create a Google Sheet with a few image URLs in JPG or PNG format. Run the workflow to observe how it converts and uploads the images to Google Drive. Modify some URLs to test different scenarios.

- **WIIFM:** Mastering this workflow allows you to offer image optimization services, enhancing website performance for clients. This can attract more customers and increase your revenue in the automation and web development industry.
  
  ## 🔧 Setup Instructions
  1. **Connect Credentials:** googleSheetsOAuth2Api, googleDriveOAuth2Api.
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
  