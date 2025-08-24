# RAG Agent Workflow   2

## 🚀 What It Does
This workflow automates a process involving set, extractFromFile, vectorStoreSupabase.

## 💼 Business Use Case
Use it to automate research, content creation, or data analysis. It saves hours of manual work.

## ⚙️ How It Works
1.  **Trigger:** This workflow starts with a **File Updated** node.
2. **Step 1: Set ID (set)** - This step performs a key action in the workflow.
3. **Step 2: Extract from File (extractFromFile)** - This step performs a key action in the workflow.
4. **Step 3: Supabase Vector Store (vectorStoreSupabase)** - This step performs a key action in the workflow.
5. **Step 4: Default Data Loader (documentDefaultDataLoader)** - This step performs a key action in the workflow.
6. **Step 5: Recursive Character Text Splitter (textSplitterRecursiveCharacterTextSplitter)** - This step performs a key action in the workflow.
7. **Step 6: Embeddings OpenAI (embeddingsOpenAi)** - This step performs a key action in the workflow.
8. **Step 7: File Updated (googleDriveTrigger)** - This step performs a key action in the workflow.
9. **Step 8: New File (googleDriveTrigger)** - This step performs a key action in the workflow.
10. **Step 9: Downloading File (googleDrive)** - This step performs a key action in the workflow.
11. **Step 10: Download File 2 (googleDrive)** - This step performs a key action in the workflow.
12. **Step 11: Extract from File1 (extractFromFile)** - This step performs a key action in the workflow.
13. **Step 12: Supabase Vector Store1 (vectorStoreSupabase)** - This step performs a key action in the workflow.
14. **Step 13: Default Data Loader1 (documentDefaultDataLoader)** - This step performs a key action in the workflow.
15. **Step 14: Recursive Character Text Splitter1 (textSplitterRecursiveCharacterTextSplitter)** - This step performs a key action in the workflow.
16. **Step 15: Embeddings OpenAI1 (embeddingsOpenAi)** - This step performs a key action in the workflow.
17. **Step 16: Set ID 2 (set)** - This step performs a key action in the workflow.
18. **Step 17: Delete Row(s) (supabase)** - This step performs a key action in the workflow.
19. **Step 18: Keep First ID (limit)** - This step performs a key action in the workflow.

## 💡 AI-Powered Ideas for Improvement
### Explain
This n8n workflow automates the process of monitoring a Google Drive folder for new or updated files, extracting their content, and storing it in a Supabase vector database for further use, such as AI processing or sentiment analysis.

### Demonstrate
A business owner could use this workflow to automatically analyze customer feedback documents uploaded to Google Drive. Instead of manually processing each file, the workflow extracts data, stores it in a database, and prepares it for AI analysis, saving time and improving insights.

### Imitate
1. Set up a Google Drive trigger to monitor a specific folder.
2. Add a node to download new or updated files.
3. Use an extraction node to get text from the files.
4. Connect to Supabase to store the extracted data.
5. Optionally, integrate an AI service for further analysis.

### Practice
Try creating a simple version of this workflow by setting up the Google Drive trigger and the file download node. Test it with a sample document to see how the system responds, and ensure you can extract and log the content.

### WIIFM
Mastering this workflow allows you to offer automation services to businesses, helping them streamline data collection and analysis processes. This can lead to increased efficiency, cost savings, and the potential for high-ticket service offerings in your automation business.

## 🔧 Setup Instructions
1. **Connect Credentials:** OpenAI, Google Sheets, Slack, and other nodes must be authenticated.
2. **Customize Core Logic:** Review "Set ID" and "Keep First ID" for IDs, table names, and URLs.
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
