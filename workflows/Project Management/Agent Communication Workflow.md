# Agent Communication Workflow

## 🚀 What It Does
This workflow automates a process involving lmChatOpenAi, documentDefaultDataLoader, embeddingsOpenAi.

## 💼 Business Use Case
Use it to automate research, content creation, or data analysis. It saves hours of manual work.

## ⚙️ How It Works
1.  **Trigger:** This workflow starts with a **File Created** node.
2. **Step 1: OpenAI Chat Model (lmChatOpenAi)** - This step performs a key action in the workflow.
3. **Step 2: Default Data Loader (documentDefaultDataLoader)** - This step performs a key action in the workflow.
4. **Step 3: Embeddings OpenAI1 (embeddingsOpenAi)** - This step performs a key action in the workflow.
5. **Step 4: Sticky Note (stickyNote)** - This step performs a key action in the workflow.
6. **Step 5: Sticky Note1 (stickyNote)** - This step performs a key action in the workflow.
7. **Step 6: Download File (googleDrive)** - This step performs a key action in the workflow.
8. **Step 7: File Created (googleDriveTrigger)** - This step performs a key action in the workflow.
9. **Step 8: File Updated (googleDriveTrigger)** - This step performs a key action in the workflow.
10. **Step 9: Extract Document Text (extractFromFile)** - This step performs a key action in the workflow.
11. **Step 10: Postgres Chat Memory (memoryPostgresChat)** - This step performs a key action in the workflow.
12. **Step 11: Delete Old Doc Rows (supabase)** - This step performs a key action in the workflow.
13. **Step 12: Set File ID (set)** - This step performs a key action in the workflow.
14. **Step 13: Sticky Note2 (stickyNote)** - This step performs a key action in the workflow.
15. **Step 14: Respond to Webhook (respondToWebhook)** - This step performs a key action in the workflow.
16. **Step 15: Edit Fields (set)** - This step performs a key action in the workflow.
17. **Step 16: When chat message received (chatTrigger)** - This step performs a key action in the workflow.
18. **Step 17: Webhook (webhook)** - This step performs a key action in the workflow.
19. **Step 18: Extract PDF Text (extractFromFile)** - This step performs a key action in the workflow.
20. **Step 19: Aggregate (aggregate)** - This step performs a key action in the workflow.
21. **Step 20: Character Text Splitter (textSplitterCharacterTextSplitter)** - This step performs a key action in the workflow.
22. **Step 21: Summarize (summarize)** - This step performs a key action in the workflow.
23. **Step 22: RAG AI Agent (agent)** - This step performs a key action in the workflow.
24. **Step 23: Switch (switch)** - This step performs a key action in the workflow.
25. **Step 24: Insert into Supabase Vectorstore (vectorStoreSupabase)** - This step performs a key action in the workflow.
26. **Step 25: Extract from Excel (extractFromFile)** - This step performs a key action in the workflow.
27. **Step 26: Set Schema (set)** - This step performs a key action in the workflow.
28. **Step 27: Extract from CSV (extractFromFile)** - This step performs a key action in the workflow.
29. **Step 28: Sticky Note3 (stickyNote)** - This step performs a key action in the workflow.
30. **Step 29: Create Document Metadata Table (postgres)** - This step performs a key action in the workflow.
31. **Step 30: Create Document Rows Table (for Tabular Data) (postgres)** - This step performs a key action in the workflow.
32. **Step 31: List Documents (postgresTool)** - This step performs a key action in the workflow.
33. **Step 32: Get File Contents (postgresTool)** - This step performs a key action in the workflow.
34. **Step 33: Query Document Rows (postgresTool)** - This step performs a key action in the workflow.
35. **Step 34: Supabase Vector Store1 (vectorStoreSupabase)** - This step performs a key action in the workflow.
36. **Step 35: Embeddings OpenAI2 (embeddingsOpenAi)** - This step performs a key action in the workflow.
37. **Step 36: Loop Over Items (splitInBatches)** - This step performs a key action in the workflow.
38. **Step 37: Create Documents Table and Match Function (postgres)** - This step performs a key action in the workflow.
39. **Step 38: Delete Old Data Rows (supabase)** - This step performs a key action in the workflow.
40. **Step 39: Insert Document Metadata (postgres)** - This step performs a key action in the workflow.
41. **Step 40: Insert Table Rows (postgres)** - This step performs a key action in the workflow.
42. **Step 41: Update Schema for Document Metadata (postgres)** - This step performs a key action in the workflow.
43. **Step 42: Sticky Note9 (stickyNote)** - This step performs a key action in the workflow.

## 💡 AI-Powered Ideas for Improvement
### Explain
This n8n workflow is designed to automate the process of handling documents using AI. It retrieves files from Google Drive, extracts their text, processes it for analysis, and updates a database—all while integrating AI for intelligent responses.

### Demonstrate
A business owner could use this workflow to streamline document management. For example, a law firm could automate the extraction and summarization of legal documents, ensuring quick access to key information and reducing manual review time.

### Imitate
1. Import the workflow into n8n.
2. Connect your Google Drive and database accounts.
3. Customize file paths and database schemas as needed.
4. Test the workflow by uploading a document to the specified Google Drive folder.
5. Review the extracted text and AI responses in your database.

### Practice
Try modifying the workflow to handle a different file type (like PDFs or Excel files). Upload a sample file to see how the workflow processes it and check if the results meet your expectations.

### WIIFM
Mastering this workflow allows you to automate tedious document handling tasks, saving time and improving accuracy. This skill can attract clients looking for efficient solutions, potentially increasing your income as an automation consultant.

## 🔧 Setup Instructions
1. **Connect Credentials:** OpenAI, Google Sheets, Slack, and other nodes must be authenticated.
2. **Customize Core Logic:** Review "OpenAI Chat Model" and "Sticky Note9" for IDs, table names, and URLs.
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
