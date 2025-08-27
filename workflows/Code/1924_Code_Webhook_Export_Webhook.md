# Code Webhook Export Webhook
  ## 🚀 What It Does
  Moves data between apps and a **database/spreadsheet**, with logic and optional AI steps.
  
  ## 💼 Business Use Case
  Use as a **glue/API broker**: receive data, enrich/validate via APIs, and pass to downstream systems.
  
  ## ⚙️ How It Works
  1. **Trigger:** Triggered by **Webhook** at `POST` **/line-webhook**.
  2. **LINE Webhook Listener** `webhook` — method: **POST**, path: `/line-webhook`
3. **Sticky Note** `stickyNote` — width: "2320", height: "320", content: "## Workflow Entry & Configuration
This section initializes the workflow by listening to incoming requests from 
the LINE Messaging API and retrieving configuration details from Goo…[truncated]"
4. **Sticky Note1** `stickyNote` — color: "5", width: "2320", height: "340"
5. **Sticky Note3** `stickyNote` — color: "4", width: "2320", height: "320"
6. **Sticky Note2** `stickyNote` — color: "6", width: "2320", height: "260"
7. **Get Config** `googleSheets` — sheet: `1iO4ZHU7s0fe1Jn8jcScNDce7rFXQlkRBqsO8IFHbcSc`
8. **Merge Event and Config Data** `merge` — mode: "mergeByIndex"
9. **Process Event and Config Data** `code` — jsCode: "[redacted]"
10. **Determine Folder Info** `code` — jsCode: "const data = items[0].json;
const config = data.config;
const event = data.event;

// ใช้ key จาก config ตามที่ส่งมา
let baseFolderId = config["Parent Folder ID"];
let dateFolderNa…[truncated]"
11. **Search Date Folder** `googleDrive` — resource: **fileFolder**
12. **Check Existing Date Folder** `if` — conditions: "[object Object]"
13. **Check if Store by Date is Enabled** `if` — options: "[object Object]", conditions: "[object Object]"
14. **Create Date Folder** `googleDrive` — resource: **folder**
15. **Set Date Folder ID** `code` — jsCode: "// Log ข้อมูล input ทั้งหมด
//console.log("Set Target Parent (Date) - Input:", items);

let targetParentId = '';

if (items.length > 0) {
	// ตรวจสอบจาก branch แรก (True Branch จาก…[truncated]"
16. **Search File Type Folder** `googleDrive` — resource: **fileFolder**
17. **Check Existing File Type Folder** `if` — conditions: "[object Object]"
18. **Check if Store by File Type is Enabled** `if` — options: "[object Object]", conditions: "[object Object]"
19. **Create File Type Folder** `googleDrive` — resource: **folder**
20. **Set File Type Folder ID** `code` — jsCode: "// Log ข้อมูล input ทั้งหมด
//console.log("Set Target Parent (Date) - Input:", items);

let targetParentId = '';

if (items.length > 0) {
	// ตรวจสอบจาก branch แรก (True Branch จาก…[truncated]"
21. **Merge Final Parent Folder Data** `merge` — configured for its default action.
22. **Configure Final Parent Folder ID** `code` — jsCode: "/**
 * Expected input: items array จาก Merge Final Data
 * - items[0].json คือผลลัพธ์ที่อาจเป็น folder สำหรับวันที่หรือ file type folder (ขึ้นอยู่กับเงื่อนไข)
 * - items[1].json คื…[truncated]"
23. **Get File Binary Content** `httpRequest` — url: `=https://api-data.line.me/v2/bot/message/{{ $('LINE Webhook Listener').item.json.body.events[0].message.id }}/content`
24. **Validate File Type** `code` — jsCode: "[redacted]"
25. **Upload File to Google Drive** `googleDrive` — name: "={{ $('Merge Event and Config Data').item.json.body.events[0].timestamp }}.{{$node["Get File Binary Content"].binary.data.fileExtension}}", driveId: "[object Object]", options: "[object Object]"
26. **Log File Details to Google Sheet** `googleSheets` — operation: **append**
27. **Check Reply Enabled Flag** `if` — options: "[object Object]", conditions: "[object Object]"
28. **Send LINE Reply Message** `httpRequest` — method: **POST**, url: `https://api.line.me/v2/bot/message/reply`
  
  ## 💡 AI-Powered Ideas for Improvement
  **Explain**  
This workflow automates the process of handling files received via LINE messaging. It listens for file uploads, retrieves configuration data from Google Sheets, and determines whether to store files by date or file type in Google Drive. The workflow validates the file type, uploads it to the appropriate folder, logs the file details in a Google Sheet, and sends a reply message back to the LINE user confirming the upload or reporting an error.

**Demonstrate**  
A business owner could use this workflow to automate the organization of images or documents sent by customers via LINE, ensuring each file is stored properly and the sender is informed, reducing manual file management.

**Imitate**  
1. Set up a LINE messaging account and create a webhook.
2. Connect Google Sheets and Drive accounts to n8n.
3. Import the workflow into n8n.
4. Customize configuration settings in Google Sheets.
5. Test by sending a file through LINE to see it saved in Google Drive.

**Practice**  
Create a sample Google Sheet with configuration settings and send a test file via LINE. Check if the file is correctly stored in Google Drive and if a confirmation message is sent back through LINE.

**WIIFM**  
Mastering this workflow can offer significant value by automating customer interactions and file management, enhancing efficiency, and enabling you to offer similar solutions to other businesses. This can help you attract more clients and increase income in your automation business.
  
  ## 🔧 Setup Instructions
  1. **Connect Credentials:** googleSheetsOAuth2Api, googleDriveOAuth2Api, httpHeaderAuth.
2. **Expose Webhook:** Map your external app to the listed path/method; test with curl/Postman before activation.
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
  