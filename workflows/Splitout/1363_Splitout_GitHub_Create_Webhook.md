# Splitout Github Create Webhook
## 🚀 What It Does
Calls external APIs and uses **AI** to transform or decide, then routes the result downstream.

## 💼 Business Use Case
Use as a **glue/API broker**: receive data, enrich/validate via APIs, and pass to downstream systems.

## ⚙️ How It Works
1. **Trigger:** This workflow starts with **When clicking ‘Test workflow’**.
2. **When clicking ‘Test workflow’** `manualTrigger` — configured for its default action.
3. **Embeddings OpenAI** `embeddingsOpenAi` — model: `text-embedding-3-small`
4. **Default Data Loader** `documentDefaultDataLoader` — options: "[object Object]", jsonData: "={{ $('Extract from File').item.json.Description }}", jsonMode: "expressionData"
5. **Token Splitter** `textSplitterTokenSplitter` — configured for its default action.
6. **When chat message received** `chatTrigger` — options: "[object Object]"
7. **OpenAI Chat Model** `lmChatOpenAi` — model: `gpt-4o-mini`
8. **Call n8n Workflow Tool** `toolWorkflow` — name: "movie_recommender", schemaType: "manual", workflowId: "[object Object]"
9. **Window Buffer Memory** `memoryBufferWindow` — configured for its default action.
10. **Execute Workflow Trigger** `executeWorkflowTrigger` — configured for its default action.
11. **Sticky Note** `stickyNote` — content: "Tool, calling Qdrant's recommendation API based on user's request, transformed by AI agent"
12. **Sticky Note1** `stickyNote` — content: "Uploading data (movies and their descriptions) to Qdrant Vector Store
"
13. **GitHub** `github` — resource: **file**, operation: **get**
14. **AI Agent** `agent` — options: "[object Object]"
15. **Embedding Recommendation Request with Open AI** `httpRequest` — method: **POST**, url: `https://api.openai.com/v1/embeddings`
16. **Embedding Anti-Recommendation Request with Open AI** `httpRequest` — method: **POST**, url: `https://api.openai.com/v1/embeddings`
17. **Extract from File** `extractFromFile` — options: "[object Object]"
18. **Extracting Embedding** `set` — options: "[object Object]", assignments: "[object Object]"
19. **Extracting Embedding1** `set` — options: "[object Object]", assignments: "[object Object]"
20. **Qdrant Vector Store** `vectorStoreQdrant` — mode: "insert", options: "[object Object]", qdrantCollection: "[object Object]"
21. **Merge** `merge` — mode: "combine", options: "[object Object]", combineBy: "combineAll"
22. **Calling Qdrant Recommendation API** `httpRequest` — method: **POST**, url: `https://edcc6735-2ffb-484f-b735-3467043828fe.europe-west3-0.gcp.cloud.qdrant.io:6333/collections/imdb_1000_open_ai/points/query`
23. **Retrieving Recommended Movies Meta Data** `httpRequest` — method: **POST**, url: `https://edcc6735-2ffb-484f-b735-3467043828fe.europe-west3-0.gcp.cloud.qdrant.io:6333/collections/imdb_1000_open_ai/points`
24. **Split Out1** `splitOut` — options: "[object Object]", fieldToSplitOut: "result.points"
25. **Split Out** `splitOut` — options: "[object Object]", fieldToSplitOut: "result"
26. **Merge1** `merge` — mode: "combine", options: "[object Object]", fieldsToMatchString: "id"
27. **Selecting Fields Relevant for Agent** `set` — options: "[object Object]", assignments: "[object Object]"
28. **Aggregate** `aggregate` — options: "[object Object]", aggregate: "aggregateAllItemData", destinationFieldName: "response"

## 💡 AI-Powered Ideas for Improvement
### Explain
This n8n workflow is designed to provide movie recommendations by integrating with OpenAI and Qdrant. It starts by loading movie data from GitHub, processes it to generate embeddings using OpenAI, and stores these embeddings in a Qdrant vector database. When a user sends a chat message requesting a movie recommendation, the workflow retrieves relevant movie data from Qdrant based on the user's preferences. It then uses OpenAI's language model to generate a list of top recommended movies, which are then returned to the user.

### Demonstrate
A movie streaming service could use this workflow to enhance user experience by providing personalized movie recommendations based on user preferences, thereby increasing user engagement and satisfaction.

### Imitate
1. Import the workflow into n8n.
2. Connect GitHub, OpenAI, and Qdrant accounts.
3. Customize the GitHub node to point to your movie dataset.
4. Set up a chat interface to receive user requests.
5. Test the workflow by sending a movie preference request through chat.

### Practice
Create a sample GitHub repository with a CSV of your favorite movies. Run the workflow and test it by sending chat requests with different movie genres to see how the recommendations change.

### WIIFM
Mastering this workflow allows you to offer custom recommendation systems to clients, enhancing their product offerings and increasing customer engagement. This capability can be a valuable addition to your AI automation services, potentially leading to increased revenue and client satisfaction.

## 🔧 Setup Instructions
1. **Connect Credentials:** githubApi, openAiApi, qdrantApi.
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
