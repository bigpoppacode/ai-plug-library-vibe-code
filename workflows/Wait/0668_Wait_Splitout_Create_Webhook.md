# Wait Splitout Create Webhook
## 🚀 What It Does
Moves data between apps and a **database/spreadsheet**, with logic and optional AI steps.

## 💼 Business Use Case
Use as a **glue/API broker**: receive data, enrich/validate via APIs, and pass to downstream systems.

## ⚙️ How It Works
1. **Trigger:** This workflow starts with **When clicking ‘Test workflow’**.
2. **When clicking ‘Test workflow’** `manualTrigger` — configured for its default action.
3. **Recursive Character Text Splitter1** `textSplitterRecursiveCharacterTextSplitter` — options: "[object Object]", chunkSize: "4000"
4. **Default Data Loader** `documentDefaultDataLoader` — options: "[object Object]", jsonData: "={{ $json.data }}", jsonMode: "expressionData"
5. **Execute Workflow Trigger** `executeWorkflowTrigger` — configured for its default action.
6. **Google Gemini Chat Model** `lmChatGoogleGemini` — options: "[object Object]", modelName: "models/gemini-1.5-flash-latest"
7. **Embeddings Google Gemini** `embeddingsGoogleGemini` — modelName: "models/text-embedding-004"
8. **Embeddings Google Gemini1** `embeddingsGoogleGemini` — modelName: "models/text-embedding-004"
9. **Google Gemini Chat Model1** `lmChatGoogleGemini` — options: "[object Object]", modelName: "models/gemini-1.5-pro-002"
10. **Google Gemini Chat Model2** `lmChatGoogleGemini` — options: "[object Object]", modelName: "models/gemini-1.5-pro-002"
11. **Embeddings Google Gemini2** `embeddingsGoogleGemini` — modelName: "models/text-embedding-004"
12. **Sticky Note** `stickyNote` — width: "620", height: "180", content: "## Stage 1 - Research for API Documentation
- Fetch a list of services pending research from Database (Google Sheet)
- Uses a search engine (Google) to find API Documentation for e…[truncated]"
13. **Sticky Note1** `stickyNote` — width: "760", height: "180", content: "## Stage 2 - Extract API Operations From Documentation
- Fetch a list of services pending extraction from Database (Google Sheet)
- Query Vector store (Qdrant) to figure out servic…[truncated]"
14. **Sticky Note2** `stickyNote` — width: "740", height: "180", content: "## Stage 3 - Generate Custom Schema From API Operations
- Fetch a list of services pending generation from Database (Google Sheet)
- Fetch all API operations for each service from …[truncated]"
15. **Sticky Note3** `stickyNote` — color: "5", width: "180", height: "80"
16. **Sticky Note4** `stickyNote` — color: "5", width: "180", height: "80"
17. **Sticky Note5** `stickyNote` — color: "5", width: "180", height: "80"
18. **Get All Research** `googleSheets` — options: "[object Object]", filtersUI: "[object Object]", sheetName: "[object Object]"
19. **Execution Data** `executionData` — dataToSave: "[object Object]"
20. **All Research Done?** `if` — options: "[object Object]", conditions: "[object Object]"
21. **EventRouter** `switch` — rules: "[object Object]", options: "[object Object]"
22. **Web Search For API Schema** `httpRequest` — method: **POST**, url: `https://api.apify.com/v2/acts/serping~fast-google-search-results-scraper/run-sync-get-dataset-items`
23. **Query Templates** `set` — options: "[object Object]", assignments: "[object Object]"
24. **Get API Operations** `googleSheets` — options: "[object Object]", filtersUI: "[object Object]", sheetName: "[object Object]"
25. **Has Results?** `if` — options: "[object Object]", conditions: "[object Object]"
26. **Template to List** `splitOut` — options: "[object Object]", fieldToSplitOut: "queries"
27. **Contruct JSON Schema** `code` — jsCode: "const service = {
  documentation_url: $('EventRouter').first().json.data.url,
  endpoints: [],
};

const resources = Array.from(new Set($input.all().map(item => item.json.resource…[truncated]"
28. **Results to List** `splitOut` — options: "[object Object]", fieldToSplitOut: "origin_search.results"
29. **Response Empty** `set` — options: "[object Object]", assignments: "[object Object]"
30. **Set Upload Fields** `set` — options: "[object Object]", assignments: "[object Object]"
31. **Filter Results** `filter` — options: "[object Object]", conditions: "[object Object]"
32. **Upload to Drive** `googleDrive` — operation: **createFromText**
33. **Remove Dupes** `removeDuplicates` — compare: "selectedFields", options: "[object Object]", fieldsToCompare: "source.link"
34. **Response OK2** `set` — options: "[object Object]", assignments: "[object Object]"
35. **Scrape Webpage Contents** `httpRequest` — url: `https://api.apify.com/v2/acts/apify~web-scraper/run-sync-get-dataset-items`
36. **Successful Runs** `filter` — options: "[object Object]", conditions: "[object Object]"
37. **Has Results?1** `if` — options: "[object Object]", conditions: "[object Object]"
38. **Has API Documentation?** `textClassifier` — options: "[object Object]", inputText: "={{
$json.body
  .replaceAll('\n', '')
  .substring(0, 40000)
}}", categories: "[object Object]"
39. **Response Scrape Error** `set` — options: "[object Object]", assignments: "[object Object]"
40. **Has Results?3** `if` — options: "[object Object]", conditions: "[object Object]"
41. **Set Embedding Variables** `set` — options: "[object Object]", assignments: "[object Object]"
42. **Response No API Docs** `set` — options: "[object Object]", assignments: "[object Object]"

## 💡 AI-Powered Ideas for Improvement
**Explain:** This workflow automates the process of researching, extracting, and organizing API documentation for various services. It starts by fetching a list of services that need research from a Google Sheet. It then uses a web search and web scraping to find and read API documentation. The results are stored in a vector database for easy retrieval. The workflow extracts API operations from the documentation and generates a custom schema for each service. Finally, it uploads the schema to Google Drive and updates the Google Sheet with the research and extraction status.

**Demonstrate:** A software development firm could use this workflow to automate the documentation of third-party APIs they integrate with. This ensures their developers have easy access to up-to-date API information, improving development efficiency and reducing errors.

**Imitate:** 1. Import the workflow into your n8n instance. 2. Connect your Google Sheets and Google Drive accounts. 3. Set up a Google Sheet with services needing API documentation. 4. Run the workflow to automate the research and documentation process. 5. Customize the workflow to fit your specific API documentation needs.

**Practice:** Create a Google Sheet with a few services needing API documentation. Run the workflow and observe how it updates the sheet with research results and uploads the generated schemas to Google Drive. Modify the workflow to handle different API documentation structures.

**WIIFM:** Mastering this workflow allows you to offer API documentation services, providing value to companies needing efficient API integration. This can boost your business by offering a unique service that saves clients time and reduces integration errors, leading to potential increased revenue and customer satisfaction.

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
