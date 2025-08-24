# Wait Code Export Webhook

## 🚀 What It Does
This workflow automates a process involving manualTrigger, httpRequest, code.

## 💼 Business Use Case
Use it to automate research, content creation, or data analysis. It saves hours of manual work.

## ⚙️ How It Works
1.  **Trigger:** This workflow starts with a **When clicking "Test workflow"** node.
2. **Step 1: When clicking "Test workflow" (manualTrigger)** - This step performs a key action in the workflow.
3. **Step 2: Get This Week's Menu (httpRequest)** - This step performs a key action in the workflow.
4. **Step 3: Extract Available Courses (code)** - This step performs a key action in the workflow.
5. **Step 4: Extract Server Data (html)** - This step performs a key action in the workflow.
6. **Step 5: Get Course Metadata (set)** - This step performs a key action in the workflow.
7. **Step 6: Get Recipe (httpRequest)** - This step performs a key action in the workflow.
8. **Step 7: Embeddings Mistral Cloud (embeddingsMistralCloud)** - This step performs a key action in the workflow.
9. **Step 8: Default Data Loader (documentDefaultDataLoader)** - This step performs a key action in the workflow.
10. **Step 9: Merge Course & Recipe (merge)** - This step performs a key action in the workflow.
11. **Step 10: Prepare Documents (set)** - This step performs a key action in the workflow.
12. **Step 11: Recursive Character Text Splitter (textSplitterRecursiveCharacterTextSplitter)** - This step performs a key action in the workflow.
13. **Step 12: Chat Trigger (chatTrigger)** - This step performs a key action in the workflow.
14. **Step 13: Extract Recipe Details (html)** - This step performs a key action in the workflow.
15. **Step 14: Qdrant Recommend API (toolWorkflow)** - This step performs a key action in the workflow.
16. **Step 15: Execute Workflow Trigger (executeWorkflowTrigger)** - This step performs a key action in the workflow.
17. **Step 16: Mistral Cloud Chat Model (lmChatMistralCloud)** - This step performs a key action in the workflow.
18. **Step 17: Get Tool Response (set)** - This step performs a key action in the workflow.
19. **Step 18: Wait for Rate Limits (wait)** - This step performs a key action in the workflow.
20. **Step 19: Get Mistral Embeddings (httpRequest)** - This step performs a key action in the workflow.
21. **Step 20: Use Qdrant Recommend API (httpRequest)** - This step performs a key action in the workflow.
22. **Step 21: Get Recipes From DB (code)** - This step performs a key action in the workflow.
23. **Step 22: Save Recipes to DB (code)** - This step performs a key action in the workflow.
24. **Step 23: Sticky Note (stickyNote)** - This step performs a key action in the workflow.
25. **Step 24: Sticky Note1 (stickyNote)** - This step performs a key action in the workflow.
26. **Step 25: Sticky Note2 (stickyNote)** - This step performs a key action in the workflow.
27. **Step 26: Sticky Note3 (stickyNote)** - This step performs a key action in the workflow.
28. **Step 27: Sticky Note4 (stickyNote)** - This step performs a key action in the workflow.
29. **Step 28: AI Agent (agent)** - This step performs a key action in the workflow.
30. **Step 29: Sticky Note5 (stickyNote)** - This step performs a key action in the workflow.
31. **Step 30: Sticky Note6 (stickyNote)** - This step performs a key action in the workflow.
32. **Step 31: Qdrant Vector Store (vectorStoreQdrant)** - This step performs a key action in the workflow.
33. **Step 32: Sticky Note7 (stickyNote)** - This step performs a key action in the workflow.
34. **Step 33: Sticky Note8 (stickyNote)** - This step performs a key action in the workflow.

## 💡 AI-Powered Ideas for Improvement
### Explain
This n8n workflow automates the process of fetching HelloFresh's weekly menu, extracting recipe data, and creating a recommendation system using AI. It combines various nodes to collect, process, and store data, enabling users to interact with a chatbot for recipe suggestions.

### Demonstrate
A restaurant owner could use this workflow to automate menu updates and provide personalized recipe recommendations to customers, enhancing customer engagement and streamlining operations without manual data entry.

### Imitate
1. Set up n8n and create a new workflow.
2. Add a Manual Trigger to start the workflow.
3. Use an HTTP Request node to fetch the weekly menu from HelloFresh.
4. Extract relevant data using JavaScript code nodes.
5. Store recipe data in a database (e.g., SQLite).
6. Integrate a chatbot node to interact with users and provide recommendations.

### Practice
Try modifying the workflow to fetch recipes from a different source, like a personal recipe blog or another API. Adjust the HTTP Request URL and ensure the extraction logic matches the new data structure.

### WIIFM
Mastering this workflow allows you to offer valuable automation solutions to clients, helping them save time and enhance customer interactions, leading to increased satisfaction and potential revenue growth for your automation business.

## 🔧 Setup Instructions
1. **Connect Credentials:** OpenAI, Google Sheets, Slack, and other nodes must be authenticated.
2. **Customize Core Logic:** Review "When clicking "Test workflow"" and "Sticky Note8" for IDs, table names, and URLs.
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
