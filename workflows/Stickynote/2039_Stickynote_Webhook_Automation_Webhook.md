# Stickynote Webhook Automation Webhook
## 🚀 What It Does
Moves data between apps and a **database/spreadsheet**, with logic and optional AI steps.

## 💼 Business Use Case
Great for **content, summarization, triage, or decisioning** where AI adds speed and consistency.

## ⚙️ How It Works
1. **Trigger:** This workflow starts with **When chat message received**.
2. **When chat message received** `chatTrigger` — options: "[object Object]"
3. **MongoDB Chat Memory** `memoryMongoDbChat` — databaseName: "test"
4. **Google Gemini Chat Model** `lmChatGoogleGemini` — options: "[object Object]", modelName: "models/gemini-2.0-flash"
5. **MongoDB Atlas Vector Store** `vectorStoreMongoDBAtlas` — mode: "retrieve-as-tool", topK: "10", options: "[object Object]"
6. **Embeddings OpenAI** `embeddingsOpenAi` — options: "[object Object]"
7. **Sticky Note** `stickyNote` — width: "900", height: "960", content: "## AI Traveling Agent Powered by MongoDB Atlas for Memory and vector search.

**Atlas MongoDB Memory Node**

- The memory node allows the agent to persist and retrieve conversation…[truncated]"
8. **Webhook** `webhook` — method: **POST**, path: `/ingestData`
9. **Default Data Loader** `documentDefaultDataLoader` — options: "[object Object]", jsonData: "={{ $json.body.raw_body.point_of_interest.title }} - {{ $json.body.raw_body.point_of_interest.description }}", jsonMode: "expressionData"
10. **Recursive Character Text Splitter** `textSplitterRecursiveCharacterTextSplitter` — options: "[object Object]"
11. **Embeddings OpenAI1** `embeddingsOpenAi` — options: "[object Object]"
12. **Sticky Note1** `stickyNote` — width: "720", height: "360", content: "## CURL Command to Ingest Data.

Here is an example of how you can load data into your webhook once its active and ready to get requests.

```
curl -X POST "https://<account>.app.n…[truncated]"
13. **Sticky Note2** `stickyNote` — width: "720", height: "360", content: "## Vector Search data ingestion

Using webhook to ingest data to the MongoDB `points_of_interest` 
collection. 

This can be done in other ways like loading from wbesites/git/files…[truncated]"
14. **AI Traveling Planner Agent** `agent` — options: "[object Object]"
15. **MongoDB Atlas Vector Store1** `vectorStoreMongoDBAtlas` — mode: "insert", options: "[object Object]", metadata_field: "description"

## 💡 AI-Powered Ideas for Improvement
**Explain:** This n8n workflow acts as an AI travel assistant. When a user sends a chat message, the workflow uses a Google Gemini Chat Model to process the input. It stores conversation history in MongoDB for memory retention and retrieves relevant travel information using MongoDB Atlas Vector Store, which is powered by OpenAI embeddings for semantic search. The workflow can ingest new data via a webhook, allowing the AI to access updated points of interest for travel planning.

**Demonstrate:** A travel agency could use this workflow to provide customers with AI-powered travel advice, offering personalized recommendations based on previous interactions and the latest travel data, enhancing customer experience and engagement.

**Imitate:** 1. Import the workflow into n8n. 2. Connect MongoDB, Google Gemini, and OpenAI accounts. 3. Set up a chat interface to trigger the workflow. 4. Configure the webhook to ingest new travel data. 5. Test with sample travel queries to ensure the AI provides accurate recommendations.

**Practice:** Create a mock travel scenario: ingest a few points of interest into the vector store and ask the AI agent for recommendations. Test how the workflow retrieves and uses this data to provide travel advice.

**WIIFM:** Mastering this workflow allows you to offer AI-enhanced travel planning services, attracting new clients and providing value through personalized, data-driven recommendations. This can increase customer satisfaction and open new revenue streams in the AI automation business.

## 🔧 Setup Instructions
1. **Connect Credentials:** mongoDb, googlePalmApi, openAiApi.

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
