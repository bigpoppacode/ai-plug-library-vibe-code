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
**Explain**  
This n8n workflow is designed to recommend movies based on user preferences using AI and a vector database. It starts by loading movie data from GitHub and storing it in a Qdrant Vector Store. When a user sends a movie preference via chat, the workflow calculates embeddings for positive and negative examples using OpenAI. It queries the vector store to find similar movies and retrieves metadata for the top recommendations. The results are processed and returned as movie suggestions to the user.

**Demonstrate**  
A movie streaming service could use this workflow to enhance user experience by providing personalized movie recommendations based on user preferences and viewing history, increasing user engagement and satisfaction.

**Imitate**  
1. Import the workflow into n8n.  
2. Connect your GitHub and OpenAI accounts.  
3. Set up the Qdrant Vector Store with movie data.  
4. Test the chat trigger with movie preferences.  
5. Observe the movie recommendations returned by the workflow.

**Practice**  
Create a test GitHub repository with a CSV of movie data, then run the workflow. Modify your movie preference inputs to see how the recommendations change. Adjust the workflow to test different embedding models or vector store settings.

**WIIFM**  
Mastering this workflow can position you as an expert in AI-driven personalization, attracting clients in the entertainment industry seeking to enhance their platforms with sophisticated recommendation systems, thus increasing your business opportunities and income potential.

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
