# Splitout Filter Export Scheduled
## 🚀 What It Does
Moves data between apps and a **database/spreadsheet**, with logic and optional AI steps.

## 💼 Business Use Case
Use as a **glue/API broker**: receive data, enrich/validate via APIs, and pass to downstream systems.

## ⚙️ How It Works
1. **Trigger:** Runs on a **schedule** (e.g., `[object Object]`).
2. **Sticky Note** `stickyNote` — color: "6", width: "370.00000000000045", height: "239.93049645390096"
3. **Schedule Trigger** `scheduleTrigger` — rule: "[object Object]"
4. **Sticky Note1** `stickyNote` — color: "5", width: "193", height: "220"
5. **Sticky Note2** `stickyNote` — color: "5", width: "193", height: "215"
6. **Sticky Note3** `stickyNote` — color: "5", width: "193", height: "186.77446808510643"
7. **Setup** `set` — options: "[object Object]", assignments: "[object Object]"
8. **Get all Leedfeeder accounts** `httpRequest` — url: `https://api.leadfeeder.com/accounts`
9. **Split out accounts** `splitOut` — options: "[object Object]", fieldToSplitOut: "data"
10. **Only for wanted accounts** `filter` — options: "[object Object]", conditions: "[object Object]"
11. **Get Leads** `httpRequest` — url: `=https://api.leadfeeder.com/accounts/{{ $json.id }}/leads`
12. **Split Out Leads** `splitOut` — options: "[object Object]", fieldToSplitOut: "data"
13. **Filter leads by engagement** `filter` — options: "[object Object]", conditions: "[object Object]"
14. **Enrich company** `clearbit` — domain: "={{ $json.attributes.website_url }}", additionalFields: "[object Object]"
15. **Filter Leads by company criteria** `filter` — options: "[object Object]", conditions: "[object Object]"
16. **Save leads to Google Sheets** `googleSheets` — operation: **appendOrUpdate**

## 💡 AI-Powered Ideas for Improvement
**Explain:**
This n8n workflow automates the process of retrieving leads from Leadfeeder, filtering them based on engagement and company criteria, enriching the data with Clearbit, and then saving the qualified leads to a Google Sheet. It starts with a scheduled trigger, collects all Leadfeeder accounts, filters for specific accounts, retrieves leads, and applies filters to ensure only engaged and relevant leads are saved.

**Demonstrate:**
A sales consultant could use this workflow to automatically gather and qualify leads from Leadfeeder, enriching the data for better insights and storing them in Google Sheets for easy access and tracking. This streamlines lead management and prioritizes high-quality leads for follow-up.

**Imitate:**
1. Import the workflow into n8n.
2. Connect your Leadfeeder and Google Sheets accounts.
3. Customize account and lead filtering criteria in the workflow.
4. Set the schedule trigger to your preferred time for automation.
5. Test the workflow to ensure leads are correctly filtered and saved.

**Practice:**
Create a test Leadfeeder account and simulate lead activities. Run the workflow and check Google Sheets to see if the leads are filtered and enriched as expected. Adjust the filtering criteria to see different outcomes.

**WIIFM:**
Mastering this workflow allows you to efficiently manage and prioritize leads, enhancing your sales process. By automating lead qualification, you can focus on closing deals, increasing your productivity, and offering this as a valuable service to clients, boosting your potential income in the automation space.

## 🔧 Setup Instructions
1. **Connect Credentials:** httpHeaderAuth, clearbitApi, googleSheetsOAuth2Api.
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
