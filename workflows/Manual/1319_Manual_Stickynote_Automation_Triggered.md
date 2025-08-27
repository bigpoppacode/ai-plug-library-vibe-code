# Manual Stickynote Automation Triggered
  ## 🚀 What It Does
  Automates a flow using stickyNote×3, embeddingsOpenAi×2, vectorStorePinecone×2.
  
  ## 💼 Business Use Case
  Great for **content, summarization, triage, or decisioning** where AI adds speed and consistency.
  
  ## ⚙️ How It Works
  1. **Trigger:** This workflow starts with **When clicking 'Chat' button below**.
  2. **Recursive Character Text Splitter** `textSplitterRecursiveCharacterTextSplitter` — chunkSize: "3000", chunkOverlap: "200"
3. **Embeddings OpenAI** `embeddingsOpenAi` — options: "[object Object]"
4. **Sticky Note** `stickyNote` — color: "7", width: "978.0454109366399", height: "806.6556079800943"
5. **Sticky Note1** `stickyNote` — color: "7", width: "654.1028019808174", height: "806.8716167324012"
6. **Default Data Loader** `documentDefaultDataLoader` — options: "[object Object]", dataType: "binary"
7. **Sticky Note2** `stickyNote` — height: "264.61498034081166", content: "## Try me out
1. In Pinecone, create an index with 1536 dimensions and select it in *both* Pinecone nodes
2. Click 'test workflow' at the bottom of the canvas to load data into the…[truncated]"
8. **OpenAI Chat Model** `lmChatOpenAi` — options: "[object Object]"
9. **Embeddings OpenAI2** `embeddingsOpenAi` — options: "[object Object]"
10. **Vector Store Retriever** `retrieverVectorStore` — configured for its default action.
11. **Read Pinecone Vector Store** `vectorStorePinecone` — options: "[object Object]", pineconeIndex: "[object Object]"
12. **When clicking 'Chat' button below** `chatTrigger` — configured for its default action.
13. **When clicking 'Test Workflow' button** `manualTrigger` — configured for its default action.
14. **Question and Answer Chain** `chainRetrievalQa` — configured for its default action.
15. **Set Google Drive file URL** `set` — options: "[object Object]", assignments: "[object Object]"
16. **Google Drive** `googleDrive` — operation: **download**
17. **Insert into Pinecone vector store** `vectorStorePinecone` — mode: "insert", options: "[object Object]", pineconeIndex: "[object Object]"
  
  ## 💡 AI-Powered Ideas for Improvement
  ### Explain
This n8n workflow automates the process of creating a searchable database from text files stored in Google Drive. It downloads a file, splits it into smaller chunks, and generates embeddings using OpenAI. These embeddings are stored in a Pinecone vector database, allowing users to query the database and retrieve relevant information using an AI model. Users can interact with this system via a chat interface, asking questions and receiving answers based on the stored data.

### Demonstrate
A consultant could use this workflow to create a knowledge base from company documents stored in Google Drive. This allows employees to quickly find information by asking questions, saving time and improving productivity.

### Imitate
1. Import the workflow into n8n.
2. Connect your Google Drive and OpenAI accounts.
3. Set up a Pinecone index with 1536 dimensions.
4. Modify the Google Drive file URL to your document.
5. Test the workflow by loading data and asking questions through the chat interface.

### Practice
Create a test Google Drive document with sample text. Use the workflow to load this document into Pinecone and ask questions about the content. Observe how the system retrieves and answers based on the text.

### WIIFM
Mastering this workflow enables you to offer clients advanced search capabilities over their documents, enhancing their data accessibility. This skill can be marketed as a premium service, increasing your revenue potential in the AI automation business.
  
  ## 🔧 Setup Instructions
  1. **Connect Credentials:** googleDriveOAuth2Api, openAiApi, pineconeApi.
  
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
  