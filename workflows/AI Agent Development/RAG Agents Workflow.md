# RAG Agents Workflow

## 🚀 What It Does
This workflow automates a process involving googleDrive, documentDefaultDataLoader, extractFromFile.

## 💼 Business Use Case
Use it to automate research, content creation, or data analysis. It saves hours of manual work.

## ⚙️ How It Works
1.  **Trigger:** This workflow starts with a **When chat message received** node.
2. **Step 1: Download File (googleDrive)** - This step performs a key action in the workflow.
3. **Step 2: Default Data Loader (documentDefaultDataLoader)** - This step performs a key action in the workflow.
4. **Step 3: Extract from File (extractFromFile)** - This step performs a key action in the workflow.
5. **Step 4: Code (code)** - This step performs a key action in the workflow.
6. **Step 5: When chat message received (chatTrigger)** - This step performs a key action in the workflow.
7. **Step 6: GPT 4.1-mini (lmChatOpenRouter)** - This step performs a key action in the workflow.
8. **Step 7: Reranker Cohere (rerankerCohere)** - This step performs a key action in the workflow.
9. **Step 8: Upload to Supabase (vectorStoreSupabase)** - This step performs a key action in the workflow.
10. **Step 9: Supabase Vector Store (vectorStoreSupabase)** - This step performs a key action in the workflow.
11. **Step 10: GPT 4.1-mini1 (lmChatOpenRouter)** - This step performs a key action in the workflow.
12. **Step 11: Reranker Cohere1 (rerankerCohere)** - This step performs a key action in the workflow.
13. **Step 12: Embeddings OpenAI2 (embeddingsOpenAi)** - This step performs a key action in the workflow.
14. **Step 13: Supabase Vector Store1 (vectorStoreSupabase)** - This step performs a key action in the workflow.
15. **Step 14: Sticky Note (stickyNote)** - This step performs a key action in the workflow.
16. **Step 15: Sticky Note1 (stickyNote)** - This step performs a key action in the workflow.
17. **Step 16: Sticky Note2 (stickyNote)** - This step performs a key action in the workflow.
18. **Step 17: Embeddings OpenAI1 (embeddingsOpenAi)** - This step performs a key action in the workflow.
19. **Step 18: Embeddings OpenAI (embeddingsOpenAi)** - This step performs a key action in the workflow.
20. **Step 19: Metadata Agent (agent)** - This step performs a key action in the workflow.
21. **Step 20: RAG Agent (agent)** - This step performs a key action in the workflow.
22. **Step 21: RAG Agent 2 (agent)** - This step performs a key action in the workflow.
23. **Step 22: Sticky Note3 (stickyNote)** - This step performs a key action in the workflow.
24. **Step 23: Sticky Note4 (stickyNote)** - This step performs a key action in the workflow.
25. **Step 24: Sticky Note5 (stickyNote)** - This step performs a key action in the workflow.
26. **Step 25: Manual Trigger (manualTrigger)** - This step performs a key action in the workflow.
27. **Step 26: Sticky Note6 (stickyNote)** - This step performs a key action in the workflow.

## 💡 AI-Powered Ideas for Improvement
### Explain
This n8n workflow automates the process of downloading a file, extracting its content, and using AI (like GPT) to analyze or respond to queries based on that content. It stores data in a vector database (Supabase), making it easy to retrieve and rerank responses effectively.

### Demonstrate
A business owner could use this workflow to automate responses to customer inquiries about golf rules. When a customer asks a question via chat, the workflow fetches relevant golf rules from a PDF, analyzes them with AI, and provides accurate, context-aware answers instantly.

### Imitate
1. **Set Up n8n**: Create an account and log in.
2. **Import Workflow**: Use the provided JSON to import the workflow.
3. **Configure Nodes**: Connect your Google Drive, Supabase, and OpenAI accounts.
4. **Test the Trigger**: Use a manual trigger to start the workflow.
5. **Run the Workflow**: Check if it retrieves, analyzes, and responds correctly.

### Practice
Try modifying the workflow to analyze a different document (like a manual or guidelines) and see how well the AI responds to questions based on that new content. Experiment with changing the document's structure and observe how it affects the output.

### WIIFM
Mastering this workflow allows you to offer valuable automation services, enhancing your clients' customer support with AI-driven responses. This can lead to increased efficiency, higher satisfaction, and the potential for recurring revenue as businesses look to improve their operations with automation.

## 🔧 Setup Instructions
1. **Connect Credentials:** OpenAI, Google Sheets, Slack, and other nodes must be authenticated.
2. **Customize Core Logic:** Review "Download File" and "Sticky Note6" for IDs, table names, and URLs.
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
