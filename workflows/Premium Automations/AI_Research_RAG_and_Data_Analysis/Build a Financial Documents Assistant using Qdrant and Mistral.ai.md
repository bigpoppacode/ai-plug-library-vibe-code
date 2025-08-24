# Build A Financial Documents Assistant Using Qdrant And Mistral.ai

## 🚀 What It Does
This workflow automates a process involving localFileTrigger, manualTrigger, set.

## 💼 Business Use Case
Use it to automate research, content creation, or data analysis. It saves hours of manual work.

## ⚙️ How It Works
1.  **Trigger:** This workflow starts with a **Local File Trigger** node.
2. **Step 1: Local File Trigger (localFileTrigger)** - This step performs a key action in the workflow.
3. **Step 2: When clicking "Test workflow" (manualTrigger)** - This step performs a key action in the workflow.
4. **Step 3: Set Variables (set)** - This step performs a key action in the workflow.
5. **Step 4: Sticky Note (stickyNote)** - This step performs a key action in the workflow.
6. **Step 5: Sticky Note4 (stickyNote)** - This step performs a key action in the workflow.
7. **Step 6: Read File (readWriteFile)** - This step performs a key action in the workflow.
8. **Step 7: Embeddings Mistral Cloud (embeddingsMistralCloud)** - This step performs a key action in the workflow.
9. **Step 8: Default Data Loader (documentDefaultDataLoader)** - This step performs a key action in the workflow.
10. **Step 9: Recursive Character Text Splitter (textSplitterRecursiveCharacterTextSplitter)** - This step performs a key action in the workflow.
11. **Step 10: Prepare Embedding Document (set)** - This step performs a key action in the workflow.
12. **Step 11: Chat Trigger (chatTrigger)** - This step performs a key action in the workflow.
13. **Step 12: Question and Answer Chain (chainRetrievalQa)** - This step performs a key action in the workflow.
14. **Step 13: Mistral Cloud Chat Model (lmChatMistralCloud)** - This step performs a key action in the workflow.
15. **Step 14: Vector Store Retriever (retrieverVectorStore)** - This step performs a key action in the workflow.
16. **Step 15: Embeddings Mistral Cloud1 (embeddingsMistralCloud)** - This step performs a key action in the workflow.
17. **Step 16: Remap for File_Added Flow (set)** - This step performs a key action in the workflow.
18. **Step 17: Search For Existing Point (httpRequest)** - This step performs a key action in the workflow.
19. **Step 18: Has Existing Point? (if)** - This step performs a key action in the workflow.
20. **Step 19: Delete Existing Point (httpRequest)** - This step performs a key action in the workflow.
21. **Step 20: Search For Existing Point1 (httpRequest)** - This step performs a key action in the workflow.
22. **Step 21: Has Existing Point?1 (if)** - This step performs a key action in the workflow.
23. **Step 22: Delete Existing Point1 (httpRequest)** - This step performs a key action in the workflow.
24. **Step 23: Handle File Event (switch)** - This step performs a key action in the workflow.
25. **Step 24: Sticky Note1 (stickyNote)** - This step performs a key action in the workflow.
26. **Step 25: Sticky Note2 (stickyNote)** - This step performs a key action in the workflow.
27. **Step 26: Sticky Note3 (stickyNote)** - This step performs a key action in the workflow.
28. **Step 27: Sticky Note5 (stickyNote)** - This step performs a key action in the workflow.
29. **Step 28: Qdrant Vector Store (vectorStoreQdrant)** - This step performs a key action in the workflow.
30. **Step 29: Qdrant Vector Store1 (vectorStoreQdrant)** - This step performs a key action in the workflow.

## 💡 AI-Powered Ideas for Improvement
### Explain
This n8n workflow monitors a specific local folder for changes (like adding, changing, or deleting files). When a file is detected, it processes the file, creates embeddings for its content, and manages data in a vector database for future retrieval and AI-powered querying.

### Demonstrate
A business owner could use this workflow to automate the processing of bank statements. As new statements are added to a folder, the system automatically analyzes them, updates a database, and allows users to query their financial data through an AI assistant, saving time and ensuring accuracy.

### Imitate
1. Set up a local folder to monitor.
2. In n8n, create a new workflow with a Local File Trigger.
3. Add nodes to read the file and process its content.
4. Connect to a vector database (like Qdrant) to store embeddings.
5. Implement a Chat Trigger for querying the data.

### Practice
Try creating a simple version of this workflow: set up a Local File Trigger that responds to new text files in a folder. Add a node to log the file name and content to the console or send it via email. Observe how changes trigger the workflow.

### WIIFM
Mastering this workflow can help you offer automation services that save clients time and money. By creating efficient data processing systems, you can position yourself as a valuable partner in their operations, potentially leading to recurring revenue and higher-value contracts.

## 🔧 Setup Instructions
1. **Connect Credentials:** OpenAI, Google Sheets, Slack, and other nodes must be authenticated.
2. **Customize Core Logic:** Review "Local File Trigger" and "Qdrant Vector Store1" for IDs, table names, and URLs.
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
