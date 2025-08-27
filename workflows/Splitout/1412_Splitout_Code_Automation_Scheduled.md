# Splitout Code Automation Scheduled
## 🚀 What It Does
Moves data between apps and a **database/spreadsheet**, with logic and optional AI steps.

## 💼 Business Use Case
Use as a **glue/API broker**: receive data, enrich/validate via APIs, and pass to downstream systems.

## ⚙️ How It Works
1. **Trigger:** This workflow starts with **When clicking ‘Test workflow’**.
2. **When clicking ‘Test workflow’** `manualTrigger` — configured for its default action.
3. **Sticky Note** `stickyNote` — width: "232", height: "346", content: "## Edit this node 👇

Change to the name of the company registered on Trustpilot and the maximum number of pages to scrape"
4. **Sticky Note1** `stickyNote` — width: "252", height: "166", content: "## Clone this spreadsheet

https://docs.google.com/spreadsheets/d/19nndnEO186vNmApxce8bA1AnLYrY8bR8VgYlwOU_FYA/edit?gid=0#gid=0"
5. **Sticky Note2** `stickyNote` — width: "252", height: "326", content: "### HelpfulCrowd column

Check this docs
https://www.guides.helpfulcrowd.com/en/article/import-product-reviews-wof0oy/"
6. **Schedule Trigger** `scheduleTrigger` — rule: "[object Object]"
7. **Global** `set` — options: "[object Object]", assignments: "[object Object]"
8. **Get reviews** `httpRequest` — url: `=https://trustpilot.com/review/{{ $json.company_id }}`
9. **Parse reviews** `code` — jsCode: "const cheerio = require('cheerio');

async function getReviewsFromPage(content) {
    try {
        const $ = cheerio.load(content);
        const scriptTag = $('#__NEXT_DATA__');
…[truncated]"
10. **Split Out** `splitOut` — options: "[object Object]", fieldToSplitOut: "reviews"
11. **HelpfulCrowd edits** `set` — options: "[object Object]", assignments: "[object Object]"
12. **General edits** `set` — options: "[object Object]", assignments: "[object Object]"
13. **HelpfulCrowd Sheets** `googleSheets` — operation: **appendOrUpdate**
14. **General sheet** `googleSheets` — operation: **appendOrUpdate**

## 💡 AI-Powered Ideas for Improvement
### Explain
This n8n workflow automates the process of extracting reviews from Trustpilot and storing them in Google Sheets. It initiates either manually or on a schedule, fetches reviews for a specified company, parses the reviews, and splits them into individual entries. The workflow updates two Google Sheets: one for general data and another for data formatted for HelpfulCrowd, ensuring comprehensive data management and analysis.

### Demonstrate
A business could use this workflow to gather customer feedback from Trustpilot, allowing them to monitor brand reputation and customer satisfaction effectively. This automated process saves time and ensures that all reviews are systematically recorded for further analysis.

### Imitate
1. Import the workflow into n8n.
2. Set up the manual or schedule trigger.
3. Configure the 'Get reviews' node with your company's Trustpilot ID.
4. Connect and authorize Google Sheets.
5. Run the workflow and verify data is correctly parsed and stored in your Google Sheets.

### Practice
Create a test Google Sheet and manually add a few mock reviews. Run the workflow to see how it processes and stores each review. Adjust the workflow to handle different data formats or add new fields as needed.

### WIIFM
Mastering this workflow allows you to offer a service that automates the collection and analysis of customer feedback, a valuable asset for businesses seeking to enhance customer experience. This can increase your value as a consultant and provide a competitive edge in the automation market.

## 🔧 Setup Instructions
1. **Connect Credentials:** googleSheetsOAuth2Api.
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
