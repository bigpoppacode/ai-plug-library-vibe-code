# Schedule HTTP Update Scheduled
## 🚀 What It Does
Moves data between apps and a **database/spreadsheet**, with logic and optional AI steps.

## 💼 Business Use Case
Use as a **glue/API broker**: receive data, enrich/validate via APIs, and pass to downstream systems.

## ⚙️ How It Works
1. **Trigger:** Runs on a **schedule** (e.g., `[object Object]`).
2. **Schedule Trigger** `scheduleTrigger` — rule: "[object Object]"
3. **Sticky Note1** `stickyNote` — color: "4", width: "468.54622634118857", height: "380.67540639666913"
4. **Sticky Note** `stickyNote` — color: "5", width: "803.4846614963799", height: "938.2393052135303"
5. **Sticky Note2** `stickyNote` — width: "2292.975584892399", height: "1214.0709576942727", content: "## Find contact information for linkedin profile URLs stored in a Google Sheet
**Video link.** [Guide](https://www.canva.com/design/DAF9a_UBxWY/xSSlSUzRdxCPtfgx9RzGSg/watch?utm_con…[truncated]"
6. **Get links from Google Sheet** `googleSheets` — options: "[object Object]", sheetName: "[object Object]", documentId: "[object Object]"
7. **Conditional Check** `if` — options: "[object Object]", conditions: "[object Object]"
8. **HTTP Request - Utilize Prospeo.io LinkedIn Email Finder API1** `httpRequest` — method: **POST**, url: `https://api.prospeo.io/linkedin-email-finder`
9. **No Operation, do nothing** `noOp` — configured for its default action.
10. **Data Merge** `merge` — mode: "combine", options: "[object Object]", combinationMode: "mergeByPosition"
11. **Field Editing** `set` — fields: "[object Object]", include: "selected", options: "[object Object]"
12. **Update the sheet with information** `googleSheets` — operation: **update**

## 💡 AI-Powered Ideas for Improvement
### Explain
This n8n workflow automates the process of extracting contact information from LinkedIn profile URLs stored in a Google Sheet. It runs on a schedule, retrieves LinkedIn URLs from the sheet, and checks if additional contact details are missing. If necessary, it uses the Prospeo.io LinkedIn Email Finder API to fetch missing details like email, name, and job title. The workflow then updates the Google Sheet with the new information, ensuring a comprehensive and up-to-date contact list.

### Demonstrate
A recruitment agency could use this workflow to update candidate profiles with missing contact information, enhancing their candidate database with complete and accurate details, thereby improving communication and placement efficiency.

### Imitate
1. Import the workflow to n8n.
2. Connect your Google Sheets and Prospeo.io accounts.
3. Set up the schedule trigger to run the workflow at your preferred interval.
4. Ensure your Google Sheet has LinkedIn URLs and columns for the data you want to update.
5. Test the workflow to confirm it updates the sheet with the retrieved details.

### Practice
Create a sample Google Sheet with LinkedIn URLs and run the workflow. Observe how it fetches and fills in missing details like email and job title. Modify some URLs to test how the workflow handles different inputs.

### WIIFM
Mastering this workflow allows you to offer automated contact enrichment services to clients, increasing the value of their databases. This can lead to enhanced business operations and open up new revenue streams in data management and sales prospecting.

## 🔧 Setup Instructions
1. **Connect Credentials:** googleSheetsOAuth2Api.
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
