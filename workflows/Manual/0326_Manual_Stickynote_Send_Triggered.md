# Manual Stickynote Send Triggered
  ## 🚀 What It Does
  Automates a flow using stickyNote×3, vectorStorePinecone×2, embeddingsOpenAi×2.
  
  ## 💼 Business Use Case
  Great for **content, summarization, triage, or decisioning** where AI adds speed and consistency.
  
  ## ⚙️ How It Works
  1. **Trigger:** This workflow starts with **When clicking 'Test Workflow' button**.
  2. **Sticky Note** `stickyNote` — color: "7", width: "918", height: "627"
3. **Sticky Note1** `stickyNote` — color: "7", width: "534", height: "627"
4. **Sticky Note2** `stickyNote` — height: "264.61498034081166", content: "## Try me out
1. In Pinecone, create an index with 1536 dimensions and select it in *both* Pinecone nodes
2. Click 'test workflow' at the bottom of the canvas to load data into the…[truncated]"
5. **When clicking 'Test Workflow' button** `manualTrigger` — configured for its default action.
6. **When chat message received** `chatTrigger` — options: "[object Object]"
7. **Default Data Loader** `documentDefaultDataLoader` — options: "[object Object]", dataType: "binary"
8. **Recursive Character Text Splitter** `textSplitterRecursiveCharacterTextSplitter` — options: "[object Object]", chunkSize: "3000", chunkOverlap: "200"
9. **Embeddings OpenAI1** `embeddingsOpenAi` — options: "[object Object]"
10. **Embeddings OpenAI** `embeddingsOpenAi` — options: "[object Object]"
11. **Pinecone Vector Store1** `vectorStorePinecone` — mode: "retrieve-as-tool", options: "[object Object]", toolName: "bitcoin_paper"
12. **OpenAI Chat Model** `lmChatOpenAi` — model: `[object Object]`
13. **Set Google Drive file URL** `set` — options: "[object Object]", assignments: "[object Object]"
14. **Question & Answer** `agent` — options: "[object Object]"
15. **Google Drive** `googleDrive` — operation: **download**
16. **Pinecone Vector Store** `vectorStorePinecone` — mode: "insert", options: "[object Object]", pineconeIndex: "[object Object]"
  
  ## 💡 AI-Powered Ideas for Improvement
  ### Explain
This n8n workflow facilitates interaction with a database using Pinecone and OpenAI. It starts by downloading a file from Google Drive, splits it into manageable chunks, and stores these chunks in a Pinecone vector index. When a chat message is received, it embeds the message, retrieves relevant data chunks from the vector store, and uses an AI model to generate a response, enabling dynamic and context-aware interactions.

### Demonstrate
A developer could use this workflow to create a chatbot that provides detailed answers based on a company's internal documents, stored in a Pinecone vector database. This setup can help in customer support by providing precise and relevant responses to user queries.

### Imitate
1. Import the workflow into n8n.
2. Connect your Google Drive and Pinecone accounts.
3. Create a Pinecone index with 1536 dimensions.
4. Set up triggers for file download and chat message reception.
5. Test the workflow to ensure data is correctly loaded and chat responses are generated.

### Practice
Create a test document in Google Drive, then run the workflow to load it into Pinecone. Simulate a chat message and observe how the workflow retrieves relevant information and generates a response. Experiment by altering the document content to see changes in chat responses.

### WIIFM
Mastering this workflow enables you to offer advanced AI-driven solutions to businesses, enhancing customer support and data retrieval processes. This expertise can help you attract clients looking for intelligent automation solutions, potentially increasing your service portfolio and income.
  
  ## 🔧 Setup Instructions
  1. **Connect Credentials:** pineconeApi, googleDriveOAuth2Api, openAiApi.
  
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
  