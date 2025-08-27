# Splitout Schedule Update Webhook
## 🚀 What It Does
Moves data between apps and a **database/spreadsheet**, with logic and optional AI steps.

## 💼 Business Use Case
Use as a **glue/API broker**: receive data, enrich/validate via APIs, and pass to downstream systems.

## ⚙️ How It Works
1. **Trigger:** Runs on a **schedule** (e.g., `[object Object]`).
2. **Schedule Trigger** `scheduleTrigger` — rule: "[object Object]"
3. **Sticky Note** `stickyNote` — color: "4", width: "1033", height: "660"
4. **Sticky Note1** `stickyNote` — color: "4", width: "645", height: "828"
5. **Sticky Note17** `stickyNote` — color: "4", width: "503.60808870324274", height: "80"
6. **Sticky Note2** `stickyNote` — color: "4", width: "300", height: "300"
7. **Set your domain** `set` — options: "[object Object]", assignments: "[object Object]"
8. **Get query Report** `httpRequest` — method: **POST**, url: `=https://www.googleapis.com/webmasters/v3/sites/sc-domain:{{$json.domain}}/searchAnalytics/query`
9. **Get Page Report** `httpRequest` — method: **POST**, url: `=https://www.googleapis.com/webmasters/v3/sites/sc-domain:{{$json.domain}}/searchAnalytics/query`
10. **date** `httpRequest` — method: **POST**, url: `=https://www.googleapis.com/webmasters/v3/sites/sc-domain:{{$json.domain}}/searchAnalytics/query`
11. **Split Out** `splitOut` — options: "[object Object]", fieldToSplitOut: "rows"
12. **Split Out1** `splitOut` — options: "[object Object]", fieldToSplitOut: "rows"
13. **Split Out2** `splitOut` — options: "[object Object]", fieldToSplitOut: "rows"
14. **Edit Fields** `set` — options: "[object Object]", assignments: "[object Object]"
15. **Edit Fields1** `set` — options: "[object Object]", assignments: "[object Object]"
16. **Edit Fields2** `set` — options: "[object Object]", assignments: "[object Object]"
17. **Update queries to Sheets** `googleSheets` — operation: **appendOrUpdate**
18. **Update Pages to Sheets ** `googleSheets` — operation: **appendOrUpdate**
19. **Update date report to sheets** `googleSheets` — operation: **appendOrUpdate**

## 💡 AI-Powered Ideas for Improvement
### Explain
This workflow automates the retrieval of performance data from Google's Search Console for a specified domain. It gathers data on search queries, page performance, and date-specific metrics using HTTP requests. The data is then processed and updated in Google Sheets, providing a structured view of website performance over time.

### Demonstrate
A digital marketing agency could use this workflow to automate the collection of SEO performance metrics, enabling them to generate client reports with up-to-date data from Google Search Console. This ensures accurate insights and saves time on manual data entry.

### Imitate
1. Set up an n8n instance.
2. Import the workflow JSON.
3. Configure Google OAuth2 credentials for API access.
4. Set your domain in the "Set your domain" node.
5. Customize the Google Sheets document URLs to your own.
6. Adjust the schedule in the "Schedule Trigger" node to your preference.

### Practice
Create a Google Sheet and connect it to the workflow. Run the workflow to fetch data from your Google Search Console account and observe how the data is organized and updated in the Google Sheets. Experiment with different time frames and data dimensions.

### WIIFM
Mastering this workflow allows you to automate SEO reporting, enhancing your service offerings. This can attract more clients and increase revenue by providing them with valuable insights into their website's performance without additional manual labor.

## 🔧 Setup Instructions
1. **Connect Credentials:** googleApi, httpHeaderAuth, googleOAuth2Api, googleSheetsOAuth2Api.
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
