# HTTP Aggregate Automation Webhook
  ## 🚀 What It Does
  Moves data between apps and a **database/spreadsheet**, with logic and optional AI steps.
  
  ## 💼 Business Use Case
  Use as a **glue/API broker**: receive data, enrich/validate via APIs, and pass to downstream systems.
  
  ## ⚙️ How It Works
  1. **Trigger:** This workflow starts with **Trigger - When User Sends Message**.
  2. **Trigger - When User Sends Message** `chatTrigger` — options: "[object Object]"
3. **GPT-4o - Generate & Process Requests** `lmChatOpenAi` — model: `[object Object]`
4. **Memory - Track Recent Context** `memoryBufferWindow` — contextWindowLength: "50"
5. **Tool - Scrape Google Maps Business Data** `toolWorkflow` — name: "extract_google_maps", workflowId: "[object Object]", description: "Extract data from hundreds of places fast. Scrape Google Maps by keyword, category, location, URLs & other filters. Get addresses, contact info, opening hours, popular times, price…[truncated]"
6. **Fallback - Enrich with Google Search** `toolSerpApi` — options: "[object Object]"
7. **Sticky Note** `stickyNote` — width: "1300", height: "540", content: "# AI-Powered Lead Generation Workflow

This workflow extracts business data from Google Maps and associated websites using an AI agent.

## Dependencies
- **OpenAI API**
- **Google…[truncated]"
8. **Tool - Crawl Business Website** `toolWorkflow` — name: "Website_Content_Crawler", workflowId: "[object Object]", description: "Crawl websites and extract text content to feed AI models, LLM applications, vector databases, or RAG pipelines. The Actor supports rich formatting using Markdown, cleans the HTML,…[truncated]"
9. **Trigger - On Subworkflow Start** `executeWorkflowTrigger` — inputSource: "jsonExample", jsonExample: "{
  "search": "carpenter",
  "city": "san francisco",
  "state/county": "california",
  "countryCode": "us"
}"
10. **Sticky Note1** `stickyNote` — color: "4", width: "1300", height: "440"
11. **Scrape Website Content (via Apify)** `httpRequest` — method: **POST**, url: `https://api.apify.com/v2/acts/aYG0l9s7dbB7j3gbS/run-sync-get-dataset-items`
12. **Sticky Note2** `stickyNote` — color: "5", width: "1300", height: "400"
13. **AI Agent - Lead Collection** `agent` — options: "[object Object]"
14. **Scrape Google Maps (via Apify)** `httpRequest` — method: **POST**, url: `https://api.apify.com/v2/acts/2Mdma1N6Fd0y3QEjR/run-sync-get-dataset-items`
15. **Save Website Data to Google Sheets** `googleSheets` — operation: **append**
16. **Save Extracted Data to Google Sheets** `googleSheets` — operation: **append**
17. **Aggregate Website Content** `aggregate` — options: "[object Object]", aggregate: "aggregateAllItemData"
18. **Aggregate Business Listings** `aggregate` — options: "[object Object]", aggregate: "aggregateAllItemData"
  
  ## 💡 AI-Powered Ideas for Improvement
  ### Explain
This n8n workflow is designed to automate the process of gathering business data from Google Maps. It starts when a user sends a message, triggering the workflow to use AI and web scraping tools to collect detailed information about businesses from Google Maps, such as addresses and contact details. The data is then enriched with additional information from Google searches if needed. The extracted data is stored in Google Sheets for easy access and further analysis.

### Demonstrate
A real-world example: A real estate agency could use this workflow to gather contact information for local businesses quickly, helping them reach out to potential clients for partnership opportunities or to promote their services.

### Imitate
1. Import the workflow into n8n.
2. Connect your OpenAI, Google Sheets, and Apify accounts.
3. Set up the initial trigger to start the workflow when a message is received.
4. Customize the search parameters based on your target business type and location.
5. Test the workflow to ensure data is being correctly collected and stored.

### Practice
Create a test run by setting up a Google Maps search for a specific business type in your area. Use the workflow to extract data and verify it against Google Maps results to ensure accuracy. Adjust parameters and test again to see how changes affect the output.

### WIIFM
Mastering this workflow empowers you to offer efficient lead generation and data collection services to clients, enhancing their marketing strategies and potentially increasing your revenue through additional service offerings. This skill can help you create value and secure clients in the automation and AI-driven business landscape.
  
  ## 🔧 Setup Instructions
  1. **Connect Credentials:** openAiApi, serpApi, googleSheetsOAuth2Api.
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
  