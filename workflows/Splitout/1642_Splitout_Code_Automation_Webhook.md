# Splitout Code Automation Webhook
## 🚀 What It Does
Moves data between apps and a **database/spreadsheet**, with logic and optional AI steps.

## 💼 Business Use Case
Use as a **glue/API broker**: receive data, enrich/validate via APIs, and pass to downstream systems.

## ⚙️ How It Works
1. **Trigger:** This workflow starts with **When clicking ‘Test workflow’**.
2. **When clicking ‘Test workflow’** `manualTrigger` — configured for its default action.
3. **Schedule Trigger** `scheduleTrigger` — rule: "[object Object]"
4. **Sticky Note** `stickyNote` — width: "520", height: "780", content: "## Create time for yesterday and today. This will be used to gather and search for news articles within a specific range."
5. **Sticky Note1** `stickyNote` — color: "4", width: "280", height: "780"
6. **Sticky Note2** `stickyNote` — width: "380", height: "780", content: "## Generate YouTube and Google Keywords from base keywords"
7. **Sticky Note3** `stickyNote` — color: "4", width: "500", height: "780"
8. **Sticky Note4** `stickyNote` — width: "540", height: "780", content: "## Process and filter Keywords for monthly traffic and CPC"
9. **Sticky Note5** `stickyNote` — color: "4", width: "1560", height: "1280"
10. **Sticky Note6** `stickyNote` — width: "1060", height: "380", content: "## Setup Instuctions: 
### Required: NocoDB, N8N, [DataforSEO Account *aff*](https://app.dataforseo.com/?aff=184401), and [Social Flood Docker Instance](https://github.com/rainmanj…[truncated]"
11. **Gen Time** `code` — jsCode: "// Get today's date
const today = new Date();

// Subtract one day to get the previous day
const yesterday = new Date(today);
yesterday.setDate(today.getDate() - 1);

// Format the…[truncated]"
12. **NocoDB** `nocoDb` — operation: **getAll**, table: `mztryza8davdl48`
13. **Second Order YouTube Autocomplete Keywords** `httpRequest` — url: `http://192.168.1.110:8000/google-search/autocomplete-keywords`
14. **Second Order Google Autocomplete Keywords** `httpRequest` — url: `http://192.168.1.110:8000/google-search/autocomplete-keywords`
15. **Combine YT Keywords and Filter** `code` — jsCode: "// Gather all keywords from all items
let allKeywords = [];

for (const item of items) {
  const keywordData = item.json.keyword_data;
  const keywords = Object.values(keywordData)…[truncated]"
16. **Combine G Keywords and Filter** `code` — jsCode: "// Gather all keywords from all items
let allKeywords = [];

for (const item of items) {
  const keywordData = item.json.keyword_data;
  const keywords = Object.values(keywordData)…[truncated]"
17. **YouTube Search Volume** `httpRequest` — method: **POST**, url: `https://api.dataforseo.com/v3/keywords_data/google_ads/search_volume/live`
18. **Google Search Volume** `httpRequest` — method: **POST**, url: `https://api.dataforseo.com/v3/keywords_data/google_ads/search_volume/live`
19. **Split Out YT Search** `splitOut` — options: "[object Object]", fieldToSplitOut: "tasks[0].result"
20. **Split Out Google Search** `splitOut` — options: "[object Object]", fieldToSplitOut: "tasks[0].result"
21. **YT Filter** `filter` — options: "[object Object]", conditions: "[object Object]"
22. **Google Filter** `filter` — options: "[object Object]", conditions: "[object Object]"

## 💡 AI-Powered Ideas for Improvement
### Explain
This n8n workflow automates the process of finding and analyzing top-performing keywords for YouTube and Google. It retrieves base keywords from a NocoDB database, generates autocomplete keywords using an API, checks their search volume and cost-per-click (CPC) using Data for SEO, filters and processes the keywords, and then updates the NocoDB database with the results. This helps businesses optimize their SEO strategy by identifying valuable keywords.

### Demonstrate
A digital marketing consultant could use this workflow to regularly update their keyword database, ensuring they are targeting the most effective keywords for their clients' SEO and ad campaigns. This automation saves time and improves accuracy in keyword analysis.

### Imitate
1. Import the workflow into n8n.
2. Connect your NocoDB and Data for SEO accounts.
3. Set up the necessary tables in NocoDB for base and processed keywords.
4. Customize the keyword criteria and filtering logic to suit your business needs.
5. Test the workflow and schedule it to run periodically.

### Practice
Create a test set of keywords in NocoDB and run the workflow. Observe how it generates autocomplete keywords, analyzes their search volume and CPC, and updates the database. Experiment with different filtering conditions to see how they affect the results.

### WIIFM
Mastering this workflow empowers you to offer advanced SEO services, helping businesses improve their online visibility and ad performance. This can enhance your service portfolio, attract more clients, and increase your revenue in the automation and digital marketing space.

## 🔧 Setup Instructions
1. **Connect Credentials:** nocoDbApiToken, httpHeaderAuth, httpBasicAuth.
2. **API Contracts:** Validate required headers and 2xx/4xx handling; add retries for 429/5xx.

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
