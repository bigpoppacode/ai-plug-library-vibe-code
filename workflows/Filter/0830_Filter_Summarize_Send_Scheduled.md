# Filter Summarize Send Scheduled
  ## 🚀 What It Does
  Monitors events, processes them, and **notifies** people/apps (Slack/Email) with structured updates.
  
  ## 💼 Business Use Case
  Ideal for **lead intake**, **enrichment**, and **CRM updates** with alerts to the right channel.
  
  ## ⚙️ How It Works
  1. **Trigger:** This workflow starts with **On form submission**.
  2. **Client Usage Log** `googleSheetsTool` — operation: **append**
3. **On form submission** `formTrigger` — options: "[object Object]", formTitle: "CV Parsing Service", formFields: "[object Object]"
4. **Custom LLM Subnode** `code` — code: "[object Object]", inputs: "[object Object]", outputs: "[object Object]"
5. **Sticky Note** `stickyNote` — width: "200", height: "280", content: "[redacted]"
6. **Sticky Note1** `stickyNote` — color: "7", width: "560", height: "380"
7. **Sticky Note2** `stickyNote` — color: "7", width: "320", height: "380"
8. **Sticky Note3** `stickyNote` — color: "7", width: "720", height: "380"
9. **Sticky Note4** `stickyNote` — color: "7", width: "720", height: "440"
10. **Every End of Month** `scheduleTrigger` — rule: "[object Object]"
11. **Sticky Note5** `stickyNote` — color: "7", width: "1100", height: "380"
12. **Sticky Note6** `stickyNote` — width: "440", height: "1020", content: "[redacted]"
13. **Sticky Note7** `stickyNote` — color: "3", width: "280", height: "120"
14. **Parse PDF Upload** `extractFromFile` — operation: **pdf**
15. **Get Client Logs** `googleSheets` — options: "[object Object]", filtersUI: "[object Object]", sheetName: "[object Object]"
16. **Logging Attributes** `set` — options: "[object Object]", assignments: "[object Object]", includeOtherFields: "true"
17. **Filter Last Month** `filter` — options: "[object Object]", conditions: "[object Object]"
18. **Extract Resume Data** `informationExtractor` — text: "={{ $json.text }}", options: "[object Object]", schemaType: "manual"
19. **Calculate Totals** `summarize` — options: "[object Object]", fieldsToSummarize: "[object Object]"
20. **Display JSON Document** `form` — operation: **completion**
21. **Send Invoice** `gmail` — sendTo: "jim@example.com", message: "[redacted]", options: "[object Object]"
  
  ## 💡 AI-Powered Ideas for Improvement
  **Explain:**  
This workflow automates the process of converting uploaded CV PDFs into structured JSON data, logs the usage metrics, and sends invoices based on usage at the end of each month. It starts with a form submission where clients upload a CV. The PDF is then parsed, and the data is extracted into a JSON format. Usage metrics such as tokens used are calculated and logged into a Google Sheet. At the end of each month, the logs are aggregated to calculate the total cost, and an invoice is sent to the client.

**Demonstrate:**  
A recruitment agency could use this workflow to automate the processing of CVs, saving time on manual data entry and ensuring accurate billing for the service based on usage.

**Imitate:**  
1. Set up a form for CV uploads.
2. Configure the workflow to parse PDFs and extract data.
3. Log usage metrics into Google Sheets.
4. Schedule a monthly trigger to calculate totals and send invoices.
5. Test the entire process with sample data.

**Practice:**  
Create a test form and upload a few sample CVs. Observe how data is extracted and logged. Check the Google Sheets for logged usage and simulate the end-of-month invoice process.

**WIIFM:**  
Mastering this workflow enables you to offer automated CV parsing services, streamline operations, and create a new revenue stream by billing clients based on usage. This can enhance your AI automation business by adding value to your service offerings.
  
  ## 🔧 Setup Instructions
  1. **Connect Credentials:** googleSheetsOAuth2Api, gmailOAuth2.
2. **Data Mapping:** Verify base/sheet IDs and column names match exactly to prevent silent failures.
3. **Notification Targets:** Confirm channel/email IDs and that the bot/app is authorized to post.
  
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
  