# Stickynote Webhook Automation Webhook
## 🚀 What It Does
Automates a flow using stickyNote×2, vectorStoreCouchbaseSearch×2, embeddingsOpenAi×2.

## 💼 Business Use Case
Great for **content, summarization, triage, or decisioning** where AI adds speed and consistency.

## ⚙️ How It Works
1. **Trigger:** This workflow starts with **When chat message received**.
2. **When chat message received** `chatTrigger` — options: "[object Object]"
3. **Google Gemini Chat Model** `lmChatGoogleGemini` — options: "[object Object]", modelName: "models/gemini-2.0-flash"
4. **Sticky Note** `stickyNote` — color: "3", width: "800", height: "500"
5. **Webhook** `webhook` — method: **POST**, path: `/3ca6fbdd-a157-4e9d-9042-237048da85b6`
6. **Default Data Loader** `documentDefaultDataLoader` — options: "[object Object]", jsonData: "={{ $json.body.raw_body.point_of_interest.title }} - {{ $json.body.raw_body.point_of_interest.description }}", jsonMode: "expressionData"
7. **Recursive Character Text Splitter** `textSplitterRecursiveCharacterTextSplitter` — options: "[object Object]"
8. **Sticky Note1** `stickyNote` — width: "720", height: "460", content: "## CURL Command to Ingest Data.

Here is an example of how you can load data into your webhook once its active and ready to get requests.

```
curl -X POST "webhook url" \
  -H "Co…[truncated]"
9. **Simple Memory** `memoryBufferWindow` — configured for its default action.
10. **Retrieve docs with Couchbase Search Vector** `vectorStoreCouchbaseSearch` — mode: "retrieve-as-tool", topK: "10", options: "[object Object]"
11. **Generate OpenAI Embeddings using text-embedding-3-small** `embeddingsOpenAi` — options: "[object Object]"
12. **Generate OpenAI Embeddings using text-embedding-3-small1** `embeddingsOpenAi` — options: "[object Object]"
13. **AI Travel Agent** `agent` — options: "[object Object]"
14. **Insert docs with Couchbase Search Vector** `vectorStoreCouchbaseSearch` — mode: "insert", options: "[object Object]", embedding: "embedding"

## 💡 AI-Powered Ideas for Improvement
**Explain:**  
This workflow is designed to function as an AI Travel Agent using n8n. It starts when a chat message is received, processes the input with Google Gemini Chat Model, and retrieves relevant travel information from a Couchbase vector database. The data is vectorized using OpenAI embeddings, allowing the AI to provide tailored travel advice based on stored points of interest. The workflow can store and retrieve data from the database, making it a dynamic tool for travel planning.

**Demonstrate:**  
A travel agency could use this workflow to automate customer inquiries about travel destinations. It quickly provides personalized suggestions, enhancing customer experience and reducing the workload on human agents.

**Imitate:**  
1. Import the workflow into n8n.
2. Set up your Google API and OpenAI credentials.
3. Create and configure a Couchbase database.
4. Connect your chat platform to trigger the workflow.
5. Test by sending travel-related queries and observe the AI's responses.

**Practice:**  
Create a test database with a few points of interest. Run the workflow by sending a query like "What are some romantic getaway spots?" and see how the AI responds based on the stored data.

**WIIFM:**  
Mastering this workflow allows you to offer advanced AI-driven travel planning services. It enhances customer interactions and operational efficiency, potentially increasing client satisfaction and revenue in your automation business.

## 🔧 Setup Instructions
1. **Test & Activate:** Run a manual execution with sample data, then set the workflow Active.

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
