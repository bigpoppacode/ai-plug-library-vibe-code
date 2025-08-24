# AI Agent To Chat With Files In Supabase Storage

## 🚀 What It Does
This workflow automates a process involving httpRequest, documentDefaultDataLoader, textSplitterRecursiveCharacterTextSplitter.

## 💼 Business Use Case
Use it to automate research, content creation, or data analysis. It saves hours of manual work.

## ⚙️ How It Works
1.  **Trigger:** This workflow starts with a **When clicking ‘Test workflow’** node.
2. **Step 1: Get All files (httpRequest)** - This step performs a key action in the workflow.
3. **Step 2: Default Data Loader (documentDefaultDataLoader)** - This step performs a key action in the workflow.
4. **Step 3: Recursive Character Text Splitter (textSplitterRecursiveCharacterTextSplitter)** - This step performs a key action in the workflow.
5. **Step 4: Extract Document PDF (extractFromFile)** - This step performs a key action in the workflow.
6. **Step 5: Embeddings OpenAI (embeddingsOpenAi)** - This step performs a key action in the workflow.
7. **Step 6: Create File record2 (supabase)** - This step performs a key action in the workflow.
8. **Step 7: If (if)** - This step performs a key action in the workflow.
9. **Step 8: Get All Files (supabase)** - This step performs a key action in the workflow.
10. **Step 9: Download (httpRequest)** - This step performs a key action in the workflow.
11. **Step 10: Loop Over Items (splitInBatches)** - This step performs a key action in the workflow.
12. **Step 11: When clicking ‘Test workflow’ (manualTrigger)** - This step performs a key action in the workflow.
13. **Step 12: Aggregate (aggregate)** - This step performs a key action in the workflow.
14. **Step 13: When chat message received (chatTrigger)** - This step performs a key action in the workflow.
15. **Step 14: OpenAI Chat Model1 (lmChatOpenAi)** - This step performs a key action in the workflow.
16. **Step 15: Embeddings OpenAI2 (embeddingsOpenAi)** - This step performs a key action in the workflow.
17. **Step 16: OpenAI Chat Model2 (lmChatOpenAi)** - This step performs a key action in the workflow.
18. **Step 17: Vector Store Tool1 (toolVectorStore)** - This step performs a key action in the workflow.
19. **Step 18: Switch (switch)** - This step performs a key action in the workflow.
20. **Step 19: Insert into Supabase Vectorstore (vectorStoreSupabase)** - This step performs a key action in the workflow.
21. **Step 20: Merge (merge)** - This step performs a key action in the workflow.
22. **Step 21: AI Agent (agent)** - This step performs a key action in the workflow.
23. **Step 22: Supabase Vector Store (vectorStoreSupabase)** - This step performs a key action in the workflow.
24. **Step 23: Sticky Note (stickyNote)** - This step performs a key action in the workflow.
25. **Step 24: Sticky Note1 (stickyNote)** - This step performs a key action in the workflow.
26. **Step 25: Sticky Note2 (stickyNote)** - This step performs a key action in the workflow.
27. **Step 26: Sticky Note3 (stickyNote)** - This step performs a key action in the workflow.
28. **Step 27: Sticky Note4 (stickyNote)** - This step performs a key action in the workflow.
29. **Step 28: Sticky Note5 (stickyNote)** - This step performs a key action in the workflow.
30. **Step 29: Sticky Note9 (stickyNote)** - This step performs a key action in the workflow.
31. **Step 30: Sticky Note7 (stickyNote)** - This step performs a key action in the workflow.
32. **Step 31: Sticky Note6 (stickyNote)** - This step performs a key action in the workflow.
33. **Step 32: Sticky Note8 (stickyNote)** - This step performs a key action in the workflow.
34. **Step 33: Sticky Note10 (stickyNote)** - This step performs a key action in the workflow.

## 💡 AI-Powered Ideas for Improvement
### Explain
This n8n workflow automates the retrieval, processing, and storage of document files from Supabase. It extracts content, generates embeddings using OpenAI, and enables AI-powered interactions, creating a seamless way to manage and query document data.

### Demonstrate
A business owner could use this workflow to automate the analysis of customer feedback documents stored in Supabase. By extracting key insights and generating embeddings, they can quickly respond to customer inquiries or improve service offerings.

### Imitate
1. Set up a Supabase account and create a storage bucket for your documents.
2. Import the workflow into n8n and configure the Supabase nodes with your credentials.
3. Test the workflow by uploading sample documents and triggering the extraction and embedding steps.
4. Monitor the results in your Supabase database.

### Practice
Try modifying the workflow to include a step that sends an email notification whenever a new document is processed. This will reinforce understanding of workflow triggers and actions while providing a practical application.

### WIIFM
Mastering this workflow allows you to automate document management tasks, saving time and enhancing data-driven decision-making. This skill can attract clients looking for efficient automation solutions, ultimately increasing your income potential as a service provider.

## 🔧 Setup Instructions
1. **Connect Credentials:** OpenAI, Google Sheets, Slack, and other nodes must be authenticated.
2. **Customize Core Logic:** Review "Get All files" and "Sticky Note10" for IDs, table names, and URLs.
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
