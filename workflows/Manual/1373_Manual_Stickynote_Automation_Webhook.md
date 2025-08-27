# Manual Stickynote Automation Webhook
  ## 🚀 What It Does
  Calls external APIs and uses **AI** to transform or decide, then routes the result downstream.
  
  ## 💼 Business Use Case
  Use as a **glue/API broker**: receive data, enrich/validate via APIs, and pass to downstream systems.
  
  ## ⚙️ How It Works
  1. **Trigger:** This workflow starts with **When clicking ‘Test workflow’**.
  2. **When clicking ‘Test workflow’** `manualTrigger` — configured for its default action.
3. **Default Data Loader** `documentDefaultDataLoader` — options: "[object Object]"
4. **Recursive Character Text Splitter** `textSplitterRecursiveCharacterTextSplitter` — options: "[object Object]"
5. **When chat message received** `chatTrigger` — options: "[object Object]"
6. **OpenAI Chat Model** `lmChatOpenAi` — options: "[object Object]"
7. **Window Buffer Memory** `memoryBufferWindow` — configured for its default action.
8. **Vector Store Tool** `toolVectorStore` — name: "GitHub_OpenAPI_Specification", description: "Use this tool to get information about the GitHub API. This database contains OpenAPI v3 specifications."
9. **OpenAI Chat Model1** `lmChatOpenAi` — options: "[object Object]"
10. **Sticky Note** `stickyNote` — width: "640", height: "200", content: "## Indexing content in the vector database
This part of the workflow is responsible for extracting content, generating embeddings and sending them to the Pinecone vector store.

It…[truncated]"
11. **Sticky Note1** `stickyNote` — width: "580", content: "## Querying and response generation 

This part of the workflow is responsible for the chat interface, querying the vector store and generating relevant responses.

It uses OpenAI …[truncated]"
12. **Generate User Query Embedding** `embeddingsOpenAi` — options: "[object Object]"
13. **Pinecone Vector Store (Querying)** `vectorStorePinecone` — options: "[object Object]", pineconeIndex: "[object Object]"
14. **Generate Embeddings** `embeddingsOpenAi` — options: "[object Object]"
15. **Sticky Note2** `stickyNote` — width: "620", height: "320", content: "## RAG workflow in n8n

This is an example of how to use RAG techniques to create a chatbot with n8n. It is an API documentation chatbot that can answer questions about the GitHub …[truncated]"
16. **HTTP Request** `httpRequest` — url: `https://raw.githubusercontent.com/github/rest-api-description/refs/heads/main/descriptions/api.github.com/api.github.com.json`
17. **AI Agent** `agent` — options: "[object Object]"
18. **Pinecone Vector Store** `vectorStorePinecone` — mode: "insert", options: "[object Object]", pineconeIndex: "[object Object]"
  
  ## 💡 AI-Powered Ideas for Improvement
  **Explain:**  
This n8n workflow creates a chatbot capable of answering questions about the GitHub API using Retrieval-Augmented Generation (RAG) techniques. It retrieves OpenAPI specifications via HTTP, processes the data into embeddings with OpenAI, and stores them in a Pinecone vector database for efficient querying. When a chat message is received, it queries the vector store, uses OpenAI to generate a response, and returns the answer to the user.

**Demonstrate:**  
A developer can use this workflow to implement a chatbot that helps users understand and navigate GitHub API documentation more efficiently, reducing the need for manual searches and improving user experience.

**Imitate:**  
1. Import the workflow into n8n.  
2. Set up OpenAI and Pinecone accounts with API keys.  
3. Configure the HTTP request to fetch your desired OpenAPI specs.  
4. Ensure you have a Pinecone index named "n8n-demo" or adjust the workflow accordingly.  
5. Test the workflow to ensure proper setup and functionality.

**Practice:**  
Create a test chat interface and query the workflow with sample questions about the GitHub API. Observe how the workflow processes the query, retrieves data, and generates a response. Experiment with different questions to see the range of responses.

**WIIFM:**  
Mastering this workflow can position you as a valuable asset in the AI automation space. It enables you to offer advanced chatbot solutions to businesses, enhancing customer support and user engagement, thereby increasing your service offerings and potential revenue streams.
  
  ## 🔧 Setup Instructions
  1. **Connect Credentials:** pineconeApi, openAiApi.
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
  