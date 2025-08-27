# Stickynote GoogleDrive Automate Triggered
## 🚀 What It Does
Automates a flow using stickyNote×3, vectorStorePinecone×2, embeddingsGoogleGemini×2.

## 💼 Business Use Case
Use to eliminate manual copy-paste and standardize a recurring business process.

## ⚙️ How It Works
1. **Trigger:** This workflow starts with **Google Drive File Updated**.
2. **Embeddings Google Gemini** `embeddingsGoogleGemini` — modelName: "models/text-embedding-004"
3. **Default Data Loader** `documentDefaultDataLoader` — options: "[object Object]", dataType: "binary"
4. **Recursive Character Text Splitter** `textSplitterRecursiveCharacterTextSplitter` — options: "[object Object]", chunkOverlap: "100"
5. **Vector Store Tool** `toolVectorStore` — name: "company_documents_tool", description: "Retrieve information from any company documents"
6. **Pinecone Vector Store (Retrieval)** `vectorStorePinecone` — options: "[object Object]", pineconeIndex: "[object Object]"
7. **Embeddings Google Gemini (retrieval)** `embeddingsGoogleGemini` — modelName: "models/text-embedding-004"
8. **Sticky Note2** `stickyNote` — content: "## Chat with company documents"
9. **Google Drive File Updated** `googleDriveTrigger` — event: "fileUpdated", options: "[object Object]", pollTimes: "[object Object]"
10. **Google Drive File Created** `googleDriveTrigger` — event: "fileCreated", options: "[object Object]", pollTimes: "[object Object]"
11. **Window Buffer Memory** `memoryBufferWindow` — configured for its default action.
12. **When chat message received** `chatTrigger` — options: "[object Object]"
13. **Sticky Note** `stickyNote` — width: "320", content: "## Add docuemnts to vector store when updating or creating new documents in Google Drive"
14. **Google Gemini Chat Model** `lmChatGoogleGemini` — options: "[object Object]", modelName: "models/gemini-2.0-flash-exp"
15. **Google Gemini Chat Model (retrieval)** `lmChatGoogleGemini` — options: "[object Object]", modelName: "models/gemini-2.0-flash-exp"
16. **Sticky Note1** `stickyNote` — width: "420", height: "720", content: "## Set up steps

1. Google Cloud Project and Vertex AI API:
* Create a Google Cloud project.
* Enable the Vertex AI API for your project.
2. Google AI API Key:
* Obtain a Google AI…[truncated]"
17. **Download File From Google Drive** `googleDrive` — operation: **download**
18. **AI Agent** `agent` — options: "[object Object]"
19. **Pinecone Vector Store** `vectorStorePinecone` — mode: "insert", options: "[object Object]", pineconeIndex: "[object Object]"

## 💡 AI-Powered Ideas for Improvement
**Explain**  
This workflow automates the process of managing and retrieving company documents stored in Google Drive using AI. It detects when files are created or updated in a specific Google Drive folder, downloads them, and processes the text to create embeddings. These embeddings are then stored in a Pinecone vector database. The workflow allows users to chat with an AI agent to query information from these documents, ensuring up-to-date and accurate responses based on the latest document updates.

**Demonstrate**  
A business owner could use this workflow to ensure their team can quickly access and retrieve information from updated policy documents, improving response times and accuracy in customer support or internal queries.

**Imitate**  
1. Set up a Google Cloud project and enable Vertex AI API.  
2. Create a Pinecone account and configure an index.  
3. Import the workflow into n8n and set up credentials for Google Drive and Pinecone.  
4. Configure the Google Drive triggers to monitor a specific folder.  
5. Test the workflow by adding or updating a document in the monitored folder.

**Practice**  
Create a test Google Drive folder and add a few documents. Configure the workflow to monitor this folder, and then try asking the AI agent questions based on the document content to see how it retrieves and uses the information.

**WIIFM**  
Mastering this workflow can enhance your ability to offer AI-driven document management solutions, making you valuable to businesses looking to streamline access to critical information. This could lead to new client opportunities and increased income through automation consulting services.

## 🔧 Setup Instructions
1. **Connect Credentials:** pineconeApi, googlePalmApi, googleDriveOAuth2Api.

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
