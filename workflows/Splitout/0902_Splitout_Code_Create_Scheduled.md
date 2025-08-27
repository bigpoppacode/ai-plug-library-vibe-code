# Splitout Code Create Scheduled
## 🚀 What It Does
Monitors events, processes them, and **notifies** people/apps (Slack/Email) with structured updates.

## 💼 Business Use Case
Use as a **glue/API broker**: receive data, enrich/validate via APIs, and pass to downstream systems.

## ⚙️ How It Works
1. **Trigger:** This workflow starts with **Google Sheets Trigger**.
2. **Google Sheets Trigger** `googleSheetsTrigger` — options: "[object Object]", pollTimes: "[object Object]", sheetName: "[object Object]"
3. **Sticky Note** `stickyNote` — color: "6", width: "700", height: "240"
4. **Sticky Note1** `stickyNote` — color: "7", width: "380", height: "400"
5. **Sticky Note2** `stickyNote` — color: "7", width: "280", height: "240"
6. **Sticky Note3** `stickyNote` — color: "7", width: "400", height: "180"
7. **Sticky Note4** `stickyNote` — color: "7", width: "420", height: "220"
8. **Sticky Note5** `stickyNote` — color: "7", width: "440", height: "140"
9. **Sticky Note6** `stickyNote` — color: "7", width: "440", height: "200"
10. **Sticky Note7** `stickyNote` — color: "4", width: "280", height: "260"
11. **Weekly Report Trigger** `scheduleTrigger` — rule: "[object Object]"
12. **Sticky Note8** `stickyNote` — color: "4", width: "560", height: "260"
13. **Sticky Note9** `stickyNote` — color: "7", width: "340", height: "380"
14. **Select Unprocessed Companies** `filter` — options: "[object Object]", conditions: "[object Object]"
15. **Retrieve Verified Leads** `googleSheets` — options: "[object Object]", filtersUI: "[object Object]", sheetName: "[object Object]"
16. **Is Domain Already Provided?** `if` — options: "[object Object]", conditions: "[object Object]"
17. **Derive Past Week's Lead Gen. Metrics** `code` — jsCode: "// Extract all items from the input
const items = $input.all();

// Initialize Sets to store unique company domains and email addresses
const uniqueCompanies = new Set();
const uni…[truncated]"
18. **Apollo Organization Search** `httpRequest` — method: **POST**, url: `https://api.apollo.io/api/v1/mixed_companies/search`
19. **Send Weekly Report** `slack` — text: "={{ $json.message }}", select: "channel", channelId: "[object Object]"
20. **Add Company Website** `googleSheets` — operation: **appendOrUpdate**
21. **Approve Company Website** `slack` — operation: **sendAndWait**
22. **Merge Rows Which Now All Contain Domains** `merge` — configured for its default action.
23. **Apollo Organization Enrichment** `httpRequest` — url: `https://api.apollo.io/api/v1/organizations/enrich`
24. **Summarize Core Business** `openAi` — modelId: "[object Object]", options: "[object Object]", messages: "[object Object]"
25. **Add Company Details** `googleSheets` — operation: **appendOrUpdate**

## 💡 AI-Powered Ideas for Improvement
### Explain
This n8n workflow automates the process of finding and verifying decision-makers' contact information for companies listed in a Google Sheet. It enriches company data using the Apollo API, updates the sheet with verified information, and sends a weekly report summarizing the number of leads processed.

### Demonstrate
A business owner can use this workflow to maintain an up-to-date database of potential business partners or clients, ensuring they have verified contact information for decision-makers to improve outreach efficiency and success rates.

### Imitate
1. Import the workflow into n8n.
2. Connect Google Sheets and Apollo API.
3. Set up triggers for new entries in the Google Sheet.
4. Customize the Google Sheet with company names and domains.
5. Test the workflow to ensure it processes and verifies data correctly.

### Practice
Create a sample Google Sheet with dummy company data. Run the workflow to see how it verifies and enriches each entry. Modify company data to test how the workflow handles updates and ensures data accuracy.

### WIIFM
Mastering this workflow can help you offer lead generation and verification services, adding value to your clients by providing accurate and verified contact information. This can lead to increased client satisfaction and revenue generation in your automation business.

## 🔧 Setup Instructions
1. **Data Mapping:** Verify base/sheet IDs and column names match exactly to prevent silent failures.
2. **Notification Targets:** Confirm channel/email IDs and that the bot/app is authorized to post.
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
