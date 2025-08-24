# RAG Chatbot For Company Documents Using Google Drive And Gemini

## 🚀 What It Does
This workflow automates a process involving vectorStorePinecone, embeddingsGoogleGemini, documentDefaultDataLoader.

## 💼 Business Use Case
Use it to automate research, content creation, or data analysis. It saves hours of manual work.

## ⚙️ How It Works
1.  **Trigger:** This workflow starts with a **Google Drive File Updated** node.
2. **Step 1: Pinecone Vector Store (vectorStorePinecone)** - This step performs a key action in the workflow.
3. **Step 2: Embeddings Google Gemini (embeddingsGoogleGemini)** - This step performs a key action in the workflow.
4. **Step 3: Default Data Loader (documentDefaultDataLoader)** - This step performs a key action in the workflow.
5. **Step 4: Recursive Character Text Splitter (textSplitterRecursiveCharacterTextSplitter)** - This step performs a key action in the workflow.
6. **Step 5: AI Agent (agent)** - This step performs a key action in the workflow.
7. **Step 6: Vector Store Tool (toolVectorStore)** - This step performs a key action in the workflow.
8. **Step 7: Pinecone Vector Store (Retrieval) (vectorStorePinecone)** - This step performs a key action in the workflow.
9. **Step 8: Embeddings Google Gemini (retrieval) (embeddingsGoogleGemini)** - This step performs a key action in the workflow.
10. **Step 9: Download File From Google Drive (googleDrive)** - This step performs a key action in the workflow.
11. **Step 10: Sticky Note2 (stickyNote)** - This step performs a key action in the workflow.
12. **Step 11: Google Drive File Updated (googleDriveTrigger)** - This step performs a key action in the workflow.
13. **Step 12: Google Drive File Created (googleDriveTrigger)** - This step performs a key action in the workflow.
14. **Step 13: Window Buffer Memory (memoryBufferWindow)** - This step performs a key action in the workflow.
15. **Step 14: When chat message received (chatTrigger)** - This step performs a key action in the workflow.
16. **Step 15: Sticky Note (stickyNote)** - This step performs a key action in the workflow.
17. **Step 16: Google Gemini Chat Model (lmChatGoogleGemini)** - This step performs a key action in the workflow.
18. **Step 17: Google Gemini Chat Model (retrieval) (lmChatGoogleGemini)** - This step performs a key action in the workflow.
19. **Step 18: Sticky Note1 (stickyNote)** - This step performs a key action in the workflow.

## 💡 AI-Powered Ideas for Improvement
### Explain
This n8n workflow automates the retrieval and processing of company documents stored in Google Drive. It uses AI to answer employee questions based on these documents, enhancing efficiency in accessing company policies and information.

### Demonstrate
A business owner could use this workflow to streamline HR operations. When employees ask questions about policies, the AI agent retrieves relevant documents from Google Drive, providing quick and accurate answers, saving time and reducing HR workload.

### Imitate
1. Set up Google Drive and Pinecone accounts.
2. Create a Google Drive folder for company documents.
3. Import the n8n workflow and configure the Google Drive trigger to monitor this folder.
4. Connect Pinecone and Google AI credentials.
5. Test the workflow with sample questions to see AI responses.

### Practice
Try modifying the workflow to include additional document types or different AI prompts. Experiment with adding a new trigger for employee feedback submissions to further enhance the system’s capabilities.

### WIIFM
Mastering this workflow can help you offer valuable automation services, enabling businesses to access critical information faster and more efficiently. This capability can attract clients, generate income, and position you as an expert in AI-driven automation solutions.

## 🔧 Setup Instructions
1. **Connect Credentials:** OpenAI, Google Sheets, Slack, and other nodes must be authenticated.
2. **Customize Core Logic:** Review "Pinecone Vector Store" and "Sticky Note1" for IDs, table names, and URLs.
3. **Activate the Workflow:** Set the workflow to "Active" after testing.

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
