# Splitout Limit Import Webhook

## 🚀 What It Does
This workflow automates a process involving manualTrigger, httpRequest, html.

## 💼 Business Use Case
Use it to automate research, content creation, or data analysis. It saves hours of manual work.

## ⚙️ How It Works
1.  **Trigger:** This workflow starts with a **When clicking "Execute Workflow"** node.
2. **Step 1: When clicking "Execute Workflow" (manualTrigger)** - This step performs a key action in the workflow.
3. **Step 2: Fetch Essay List (httpRequest)** - This step performs a key action in the workflow.
4. **Step 3: Extract essay names (html)** - This step performs a key action in the workflow.
5. **Step 4: Split out into items (splitOut)** - This step performs a key action in the workflow.
6. **Step 5: Fetch essay texts (httpRequest)** - This step performs a key action in the workflow.
7. **Step 6: Limit to first 3 (limit)** - This step performs a key action in the workflow.
8. **Step 7: Extract Text Only (html)** - This step performs a key action in the workflow.
9. **Step 8: Sticky Note3 (stickyNote)** - This step performs a key action in the workflow.
10. **Step 9: Sticky Note5 (stickyNote)** - This step performs a key action in the workflow.
11. **Step 10: Recursive Character Text Splitter1 (textSplitterRecursiveCharacterTextSplitter)** - This step performs a key action in the workflow.
12. **Step 11: Generate response (set)** - This step performs a key action in the workflow.
13. **Step 12: Compose citations (set)** - This step performs a key action in the workflow.
14. **Step 13: Answer the query based on chunks (informationExtractor)** - This step performs a key action in the workflow.
15. **Step 14: Prepare chunks (code)** - This step performs a key action in the workflow.
16. **Step 15: Set max chunks to send to model (set)** - This step performs a key action in the workflow.
17. **Step 16: Embeddings OpenAI2 (embeddingsOpenAi)** - This step performs a key action in the workflow.
18. **Step 17: When chat message received (chatTrigger)** - This step performs a key action in the workflow.
19. **Step 18: Sticky Note1 (stickyNote)** - This step performs a key action in the workflow.
20. **Step 19: Milvus Vector Store in retrieval (vectorStoreMilvus)** - This step performs a key action in the workflow.
21. **Step 20: Milvus Vector Store (vectorStoreMilvus)** - This step performs a key action in the workflow.
22. **Step 21: Sticky Note (stickyNote)** - This step performs a key action in the workflow.
23. **Step 22: Sticky Note2 (stickyNote)** - This step performs a key action in the workflow.
24. **Step 23: Embeddings OpenAI (embeddingsOpenAi)** - This step performs a key action in the workflow.
25. **Step 24: Default Data Loader (documentDefaultDataLoader)** - This step performs a key action in the workflow.
26. **Step 25: OpenAI Chat Model (lmChatOpenAi)** - This step performs a key action in the workflow.

## 💡 AI-Powered Ideas for Improvement
### Explain
This n8n workflow automates the process of scraping essay titles from Paul Graham's website, fetching their content, and preparing it for AI analysis and retrieval. It enables users to gather and analyze text data efficiently.

### Demonstrate
A business owner could use this workflow to automate content curation for a blog, pulling relevant essays automatically. This saves time and provides fresh, insightful material for their audience without manual searching.

### Imitate
1. Set up an n8n instance and create a new workflow.
2. Add a **Manual Trigger** to start the workflow.
3. Use **HTTP Request** to fetch essay titles from the specified URL.
4. Extract titles using the **HTML** node.
5. Split titles into items and fetch their content with another **HTTP Request**.
6. Process the text using **HTML** and **textSplitter** nodes.
7. Store or analyze the results as needed.

### Practice
Try modifying the workflow to scrape a different website or fetch additional data types. Experiment with the output format and see how it affects the analysis or retrieval process.

### WIIFM
Mastering this workflow enables you to offer valuable data automation services, attract clients needing content curation, and create scalable solutions for businesses, increasing your income potential through automation expertise.

## 🔧 Setup Instructions
1. **Connect Credentials:** OpenAI, Google Sheets, Slack, and other nodes must be authenticated.
2. **Customize Core Logic:** Review "When clicking "Execute Workflow"" and "OpenAI Chat Model" for IDs, table names, and URLs.
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
