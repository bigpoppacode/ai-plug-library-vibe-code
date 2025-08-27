# Code HTTP Create Webhook
  ## 🚀 What It Does
  Moves data between apps and a **database/spreadsheet**, with logic and optional AI steps.
  
  ## 💼 Business Use Case
  Use as a **glue/API broker**: receive data, enrich/validate via APIs, and pass to downstream systems.
  
  ## ⚙️ How It Works
  1. **Trigger:** This workflow starts with **Webflow Submission Trigger**.
  2. **Webflow Submission Trigger** `webflowTrigger` — site: "60e6f0f07c46af62aa2b1c98"
3. **Sticky Note** `stickyNote` — color: "6", width: "624.279069767441", height: "485.5185231617872"
4. **Sticky Note1** `stickyNote` — width: "249.71390814112306", height: "436.3067204586099", content: "[redacted]"
5. **Sticky Note2** `stickyNote` — width: "451.54733285112343", height: "317.58117651155095", content: "[redacted]"
6. **Sticky Note3** `stickyNote` — color: "7", content: "## General note
You do not need to modify any of the nodes accept for adding your credentials."
7. **Prepare form submission for workflow** `set` — mode: "raw", include: "none", options: "[object Object]"
8. **[AIRTABLE] Get Base Schema from list** `airtable` — resource: **base**, operation: **getSchema**
9. **Get Form Index Reference Table ID** `code` — jsCode: "const data = $input.all();
const floatingObject = $("Prepare form submission for workflow").all()[0].json;

floatingObject.at_baseId = $("[AIRTABLE] Get Base Schema from list").par…[truncated]"
10. **Does Index Reference Table Exist?** `if` — options: "[object Object]", conditions: "[object Object]"
11. **[AIRTABLE] Find Webflow Form Record In Form Index Reference Table** `airtable` — operation: **search**, table: `[object Object]`
12. **[AIRTABLE]  Create Index Reference Table** `httpRequest` — method: **POST**, url: `=https://api.airtable.com/v0/meta/bases/{{ $('Does Index Reference Table Exist?').item.json.at_baseId }}/tables`
13. **Set Webflow Form Table ID** `code` — jsCode: "const floatingObject = $("Get Form Index Reference Table ID").all()[0].json;
const formIndexData = $("[AIRTABLE] Find Webflow Form Record In Form Index Reference Table").all()[0].j…[truncated]"
14. **Does This Webflow Form Table Exist?** `if` — options: "[object Object]", conditions: "[object Object]"
15. **[AIRTABLE] Create Webflow Form Table** `httpRequest` — method: **POST**, url: `=https://api.airtable.com/v0/meta/bases/{{ $('Get Form Index Reference Table ID').item.json.at_baseId }}/tables`
16. **Set New Webflow Form Table ID** `code` — jsCode: "const floatingObject = $("Get Form Index Reference Table ID").all()[0].json;
floatingObject.at_currentFormTableId = $("[AIRTABLE] Create Webflow Form Table").all()[0].json.id;

if(…[truncated]"
17. **[AIRTABLE] Insert Record In Form Index Reference Table** `airtable` — operation: **create**, table: `[object Object]`
18. **[AIRTABLE] Insert Record In Webflow Form Table** `airtable` — operation: **create**, table: `[object Object]`
  
  ## 💡 AI-Powered Ideas for Improvement
  ### Explain
This n8n workflow automates the process of handling form submissions from Webflow by dynamically creating tables in Airtable. Each time a form is submitted on a specified Webflow site, the data is captured, and a corresponding table is created in Airtable to store the form submissions. If the table already exists, the submission is added to it. This ensures that all form data is organized and stored efficiently in Airtable.

### Demonstrate
A business owner could use this workflow to automatically organize customer inquiries collected via a Webflow site into Airtable tables, enabling easier data management and analysis, improving the response process, and enhancing customer service.

### Imitate
1. Import the workflow to n8n.
2. Connect your Webflow and Airtable accounts.
3. Set up the Webflow trigger with your site ID.
4. Ensure Airtable API credentials are configured.
5. Test by submitting a form to verify Airtable table creation and record insertion.

### Practice
Create a test form in Webflow and submit it. Check Airtable to see if a table is created for this form and if the submission is recorded. Modify form fields and observe how the workflow adapts to changes.

### WIIFM
Mastering this workflow enables you to offer a streamlined data management service, helping businesses efficiently handle form submissions and improve data organization. This can lead to new business opportunities and increased revenue through improved customer insights and service.
  
  ## 🔧 Setup Instructions
  1. **Connect Credentials:** webflowApi, airtableTokenApi, airtableOAuth2Api.
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
  