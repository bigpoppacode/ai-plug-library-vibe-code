# Splitout Code Import Webhook
## 🚀 What It Does
Automates a flow using stickyNote×8, set×3, splitOut×2.

## 💼 Business Use Case
Use as a **glue/API broker**: receive data, enrich/validate via APIs, and pass to downstream systems.

## ⚙️ How It Works
1. **Trigger:** This workflow starts with **When clicking ‘Test workflow’**.
2. **When clicking ‘Test workflow’** `manualTrigger` — configured for its default action.
3. **Sticky Note29** `stickyNote` — color: "7", width: "669.4820758928554", height: "205.68165856370325"
4. **Sticky Note30** `stickyNote` — color: "7", width: "208.81803918109597", height: "205.68165856370314"
5. **Sticky Note22** `stickyNote` — color: "3", width: "284.87764467541297", height: "119.14378614369562"
6. **Sticky Note24** `stickyNote` — color: "3", width: "284.87764467541297", height: "150.1322172211123"
7. **Sticky Note31** `stickyNote` — color: "7", width: "749.5454794091054", height: "205.68165856370314"
8. **Sticky Note27** `stickyNote` — color: "7", width: "231.51775697271012", height: "223.71949738241096"
9. **Sticky Note40** `stickyNote` — color: "3", width: "284.87764467541297", height: "91.91340067739628"
10. **Sticky Note18** `stickyNote` — color: "4", width: "697.67602815855", height: "735.4043641289052"
11. **Connect to your own database - ** `noOp` — configured for its default action.
12. **Set Keywords to get SERPs for** `set` — options: "[object Object]", assignments: "[object Object]"
13. **Split out Keywords** `splitOut` — options: "[object Object]", fieldToSplitOut: "Keyword"
14. **GET SERP** `httpRequest` — method: **POST**, url: `https://api.scrapingrobot.com`
15. **SERP results** `set` — options: "[object Object]", assignments: "[object Object]"
16. **Separate** `splitOut` — options: "[object Object]", fieldToSplitOut: "organicResults"
17. **Title <> Empty** `filter` — options: "[object Object]", conditions: "[object Object]"
18. **Assign SearchQuery** `set` — options: "[object Object]", assignments: "[object Object]", includeOtherFields: "true"
19. **Assign SERP #pos** `code` — jsCode: "const items = $input.all(); // Get all input items

// Group items by searchQuery
const groupedItems = items.reduce((acc, item) => {
  const searchQuery = item.json.searchQuery || …[truncated]"
20. **Connect to your own database2** `noOp` — configured for its default action.

## 💡 AI-Powered Ideas for Improvement
**Explain:**  
This n8n workflow automates the process of gathering Google Search Results Pages (SERPs) for specific keywords using the ScrapingRobot API. It starts by connecting to a database of keywords, retrieves search results for each keyword, and processes the results to extract useful data like organic results, paid ads, and people-also-ask sections. The workflow then assigns rankings to these results and organizes the data for further analysis or storage in a database.

**Demonstrate:**  
A digital marketing agency could use this workflow to track their client's keyword rankings, analyze competitor positions, and monitor changes in search rankings over time. This insight helps optimize SEO strategies and improve online visibility.

**Imitate:**  
1. Import the workflow into n8n.
2. Connect your database containing keywords.
3. Update the ScrapingRobot API key in the HTTP request node.
4. Configure your output database connection.
5. Run the workflow and verify the results.

**Practice:**  
Create a small database with a few keywords and run the workflow. Observe how the workflow processes each keyword and retrieves SERP data. Experiment with different keywords to see the variations in results.

**WIIFM:**  
Mastering this workflow can enhance your skillset in SEO automation, allowing you to offer valuable services like keyword tracking and competitor analysis to clients. This can lead to increased client satisfaction, retention, and potential revenue growth as an automation consultant.

## 🔧 Setup Instructions
1. **Connect Credentials:** httpQueryAuth, httpHeaderAuth.
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
