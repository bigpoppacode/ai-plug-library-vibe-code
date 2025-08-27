# Splitout Code Create Webhook
## 🚀 What It Does
Calls external APIs and uses **AI** to transform or decide, then routes the result downstream.

## 💼 Business Use Case
Use as a **glue/API broker**: receive data, enrich/validate via APIs, and pass to downstream systems.

## ⚙️ How It Works
1. **Trigger:** This workflow starts with **Qdrant MCP Server**.
2. **Sticky Note** `stickyNote` — color: "7", width: "680", height: "660"
3. **Insert** `toolWorkflow` — name: "insert_review", workflowId: "[object Object]", description: "=Call this tool to insert a customer's review into our review database."
4. **Search** `toolWorkflow` — name: "search_reviews", workflowId: "[object Object]", description: "Call this tool to search our reviews database."
5. **Recommend** `toolWorkflow` — name: "recommend_reviews", workflowId: "[object Object]", description: "Call this tool to generate a recommendation for a review based on positive and/or negative preferences."
6. **Qdrant MCP Server** `mcpTrigger` — path: `/a1aff1b5-e5c7-4ca2-91eb-017c1fe32dab`
7. **When Executed by Another Workflow** `executeWorkflowTrigger` — workflowInputs: "[object Object]"
8. **Sticky Note1** `stickyNote` — color: "7", width: "580", height: "320"
9. **Compare** `toolWorkflow` — name: "compare_reviews", workflowId: "[object Object]", description: "Call this tool to compare search results across 2 or more companies."
10. **Sticky Note8** `stickyNote` — width: "213.30551928619226", height: "332.38559808882246", content: "















### 🚨Configure Your Qdrant Connection
* Be sure to enter your endpoint address"
11. **Embeddings OpenAI** `embeddingsOpenAi` — options: "[object Object]"
12. **Default Data Loader** `documentDefaultDataLoader` — options: "[object Object]", jsonData: "={{ $json.text }}", jsonMode: "expressionData"
13. **Recursive Character Text Splitter** `textSplitterRecursiveCharacterTextSplitter` — options: "[object Object]", chunkSize: "3000"
14. **Sticky Note9** `stickyNote` — width: "213.30551928619226", height: "332.38559808882246", content: "















### 🚨Configure Your Qdrant Connection
* Be sure to enter your endpoint address"
15. **Embeddings OpenAI1** `embeddingsOpenAi` — options: "[object Object]"
16. **ListCompanies** `toolWorkflow` — name: "listAvailableCompanies", workflowId: "[object Object]", description: "Call this tool to list all available companies in the reviews database."
17. **Sticky Note2** `stickyNote` — width: "440", height: "1320", content: "## Try It Out!
### This n8n demonstrates how to build your own Qdrant MCP server to extend its functionality beyond that of the official implementation.

This n8n implementation ex…[truncated]"
18. **Sticky Note3** `stickyNote` — color: "4", width: "700", height: "360"
19. **When clicking ‘Test workflow’** `manualTrigger` — configured for its default action.
20. **Sticky Note4** `stickyNote` — color: "5", width: "380", height: "100"
21. **Operation** `switch` — rules: "[object Object]", options: "[object Object]"
22. **Create Collection** `httpRequest` — method: **PUT**, url: `http://qdrant:6333/collections/trustpilot_reviews`
23. **List by Facet API** `httpRequest` — method: **POST**, url: `http://qdrant:6333/collections/trustpilot_reviews/facet`
24. **Insert Reviews** `vectorStoreQdrant` — mode: "insert", options: "[object Object]", qdrantCollection: "[object Object]"
25. **Search Reviews** `vectorStoreQdrant` — prompt: "={{ $json.text }}"
26. **Get Embeddings1** `httpRequest` — method: **POST**, url: `https://api.openai.com/v1/embeddings`
27. **Preferences to Items** `code` — jsCode: "return [
  { text: $input.first().json.text },
  { text: $input.first().json.text2 }
]"
28. **Create Facet Index** `httpRequest` — method: **PUT**, url: `http://qdrant:6333/collections/trustpilot_reviews/index`
29. **Get Insert Response** `set` — options: "[object Object]", assignments: "[object Object]"
30. **Get Search Response** `aggregate` — options: "[object Object]", aggregate: "aggregateAllItemData", destinationFieldName: "response"
31. **Aggregate Embeddings1** `aggregate` — options: "[object Object]", fieldsToAggregate: "[object Object]"
32. **Get Embeddings** `httpRequest` — method: **POST**, url: `https://api.openai.com/v1/embeddings`
33. **Group Search API** `httpRequest` — method: **POST**, url: `http://qdrant:6333/collections/trustpilot_reviews/points/search/groups`
34. **Aggregate Embeddings** `aggregate` — options: "[object Object]", fieldsToAggregate: "[object Object]"
35. **Split Out Companies** `splitOut` — options: "[object Object]", fieldToSplitOut: "result.groups"
36. **Recommend API** `httpRequest` — method: **POST**, url: `=http://qdrant:6333/collections/trustpilot_reviews/points/recommend`
37. **Simplify Group Results** `set` — options: "[object Object]", assignments: "[object Object]"
38. **Simplify Recommend Response** `set` — options: "[object Object]", assignments: "[object Object]"
39. **Filter By CompanyId** `filter` — options: "[object Object]", conditions: "[object Object]"
40. **Has Results?1** `if` — options: "[object Object]", conditions: "[object Object]"
41. **Has Results?** `if` — options: "[object Object]", conditions: "[object Object]"
42. **Aggregate Recommend Response** `aggregate` — options: "[object Object]", aggregate: "aggregateAllItemData", destinationFieldName: "response"
43. **Empty Compare Response1** `set` — options: "[object Object]", assignments: "[object Object]"
44. **Aggregate Compare Response** `aggregate` — options: "[object Object]", aggregate: "aggregateAllItemData", destinationFieldName: "response"
45. **Empty Compare Response** `set` — options: "[object Object]", assignments: "[object Object]"

## 💡 AI-Powered Ideas for Improvement
**Explain**: This n8n workflow is designed to manage and analyze customer reviews. It uses a Qdrant MCP server to store, search, and recommend reviews. The workflow can insert reviews into a database, search for specific reviews, recommend reviews based on preferences, and compare reviews across companies. It utilizes OpenAI embeddings to enhance search and recommendation capabilities.

**Demonstrate**: A business owner could use this workflow to analyze customer feedback across multiple platforms, ensuring they understand customer sentiment and preferences. This helps improve customer service and tailor marketing strategies.

**Imitate**: 
1. Import the workflow into n8n.
2. Connect to your Qdrant and OpenAI accounts.
3. Set up the Qdrant collection and index for reviews.
4. Customize the workflow to match your review data structure.
5. Test the workflow by inserting, searching, and recommending reviews.

**Practice**: Create a small dataset of customer reviews and run the workflow to practice inserting and searching reviews. Experiment with different search terms and recommendation preferences to see how the workflow responds.

**WIIFM**: Mastering this workflow allows you to offer advanced review analysis services, providing insights into customer sentiment and preferences. This can enhance your service offerings, attract more clients, and increase revenue in your automation business.

## 🔧 Setup Instructions
1. **Connect Credentials:** qdrantApi, openAiApi.
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
