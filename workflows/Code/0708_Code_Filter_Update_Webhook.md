# Code Filter Update Webhook
  ## 🚀 What It Does
  Moves data between apps and a **database/spreadsheet**, with logic and optional AI steps.
  
  ## 💼 Business Use Case
  Use as a **glue/API broker**: receive data, enrich/validate via APIs, and pass to downstream systems.
  
  ## ⚙️ How It Works
  1. **Trigger:** This workflow starts with **When clicking ‘Test workflow’**.
  2. **When clicking ‘Test workflow’** `manualTrigger` — configured for its default action.
3. **Sticky Note** `stickyNote` — color: "4", width: "220", height: "380"
4. **Sticky Note1** `stickyNote` — color: "4", width: "300", height: "480"
5. **Sticky Note2** `stickyNote` — color: "7", width: "460", height: "1160"
6. **Pull linkedin profiles** `googleSheets` — options: "[object Object]", sheetName: "[object Object]", documentId: "[object Object]"
7. **Filter already enriched** `filter` — options: "[object Object]", conditions: "[object Object]"
8. **Encode URI** `set` — options: "[object Object]", assignments: "[object Object]"
9. **Call Rapid API** `httpRequest` — url: `https://fresh-linkedin-profile-data.p.rapidapi.com/get-linkedin-profile`
10. **FiIter out all arrays** `code` — mode: "runOnceForEachItem", jsCode: "// Initialize an empty object to store filtered items
let filteredData = {};

// Loop through each item in $input.item.json.data
for (const item in $input.item.json.data) {
  // Ch…[truncated]"
11. **Update the profile** `googleSheets` — operation: **appendOrUpdate**
  
  ## 💡 AI-Powered Ideas for Improvement
  **Explain:**  
This n8n workflow enriches LinkedIn profiles by pulling URLs from a Google Sheet, filtering out already processed profiles, and retrieving detailed data using RapidAPI. The enriched information is then updated back into the Google Sheet, streamlining data collection for marketing or recruitment purposes.

**Demonstrate:**  
A sales team could use this workflow to enrich LinkedIn profiles of potential leads, ensuring they have the most current and detailed information for outreach and engagement, thus enhancing their lead generation efforts.

**Imitate:**  
1. Import the workflow into n8n.
2. Connect your Google Sheets and RapidAPI accounts.
3. Create a Google Sheet with a "linkedin_url" column and add profile URLs.
4. Run the workflow to fetch and update profile data.
5. Customize filters or API settings as needed.

**Practice:**  
Create a test Google Sheet with a few LinkedIn profile URLs. Run the workflow and observe how it updates the sheet with enriched data. Modify some URLs to see how the workflow handles changes.

**WIIFM:**  
Mastering this workflow can elevate your ability to offer LinkedIn data enrichment services. This adds value to clients' marketing and recruitment strategies, boosting your service offerings and potential income in the automation business.
  
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
  