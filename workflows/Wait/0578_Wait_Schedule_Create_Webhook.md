# Wait Schedule Create Webhook
## 🚀 What It Does
Moves data between apps and a **database/spreadsheet**, with logic and optional AI steps.

## 💼 Business Use Case
Use as a **glue/API broker**: receive data, enrich/validate via APIs, and pass to downstream systems.

## ⚙️ How It Works
1. **Trigger:** Runs on a **schedule** (e.g., `[object Object]`).
2. **Google Gemini Chat Model** `lmChatGoogleGemini` — options: "[object Object]", modelName: "models/gemini-1.5-pro-latest"
3. **Structured Output Parser** `outputParserStructured` — schemaType: "manual", inputSchema: "{
  "type": "array",
  "items": {
    "type": "object",
	"properties": {
		"type": {
    		"type": "string",
            "description": "type of regression. One of text, number, im…[truncated]"
4. **Sticky Note** `stickyNote` — color: "4", width: "405.95003875719203", height: "180.74812634463558"
5. **Sticky Note1** `stickyNote` — color: "7", width: "702.1744987652204", height: "548.4621171664835"
6. **Sticky Note2** `stickyNote` — color: "7", width: "759.5372282495247", height: "548.702446115556"
7. **Sticky Note3** `stickyNote` — color: "7", width: "885.2402868841493", height: "388.92815062755926"
8. **Schedule Trigger** `scheduleTrigger` — rule: "[object Object]"
9. **When clicking ‘Test workflow’** `manualTrigger` — configured for its default action.
10. **Sticky Note4** `stickyNote` — color: "7", width: "561.2038065501644", height: "408.0284015307624"
11. **Sticky Note5** `stickyNote` — color: "7", width: "626.9985071319608", height: "487.40071048786325"
12. **Sticky Note6** `stickyNote` — color: "7", width: "653.369086691465", height: "443.1120543367141"
13. **Sticky Note7** `stickyNote` — color: "7", width: "808.188722669735", height: "397.73072497123115"
14. **Sticky Note8** `stickyNote` — color: "4", width: "394.03359370567625", height: "111.52173490405977"
15. **Sticky Note9** `stickyNote` — width: "553.2963720930223", height: "473.4987906976746", content: "## Try It Out!

### This workflow implements an approach to Visual Regression Testing - a means to test websites for defects - using AI Vision Models.

This workflow uses a Google …[truncated]"
16. **Get Webpages List** `googleSheets` — options: "[object Object]", filtersUI: "[object Object]", sheetName: "[object Object]"
17. **Get URLs with Missing Base Images** `googleSheets` — options: "[object Object]", sheetName: "[object Object]", documentId: "[object Object]"

## 💡 AI-Powered Ideas for Improvement
- **Explain:** This n8n workflow performs visual regression testing to identify changes in web pages using AI models. It begins by generating base images of web pages, then captures new screenshots using Apify. These are compared using Google's Gemini AI model to detect changes. Results are structured, and if changes are found, a report is created in Linear for further action.

- **Demonstrate:** A web development company can use this workflow to automatically check for unintended changes in their websites after updates, ensuring design consistency and catching errors early.

- **Imitate:** 
  1. Import the workflow into n8n.
  2. Connect Google Sheets, Google Drive, and Apify accounts.
  3. Schedule the workflow or manually trigger it for testing.
  4. Customize the Google Sheets and Drive folders as per your project.
  5. Run the workflow to ensure it captures and reports changes correctly.

- **Practice:** Create a simple Google Sheet with URLs of web pages. Run the workflow and observe how it captures screenshots and detects differences. Modify a web page and rerun to see how changes are reported.

- **WIIFM:** Mastering this workflow enables you to offer automated visual regression testing services, ensuring website quality and consistency. This can attract clients looking to maintain high-quality web standards, providing a new revenue stream for your automation business.

## 🔧 Setup Instructions
1. **Connect Credentials:** googleDriveOAuth2Api, googlePalmApi, googleSheetsOAuth2Api, httpQueryAuth, linearApi.
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
