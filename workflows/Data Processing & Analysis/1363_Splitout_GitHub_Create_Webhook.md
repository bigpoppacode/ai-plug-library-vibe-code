# Splitout Github Create Webhook

## 🚀 What It Does
This workflow automates a process involving manualTrigger, github, extractFromFile.

## 💼 Business Use Case
Use it to automate research, content creation, or data analysis. It saves hours of manual work.

## ⚙️ How It Works
1.  **Trigger:** This workflow starts with a **When clicking ‘Test workflow’** node.
2. **Step 1: When clicking ‘Test workflow’ (manualTrigger)** - This step performs a key action in the workflow.
3. **Step 2: GitHub (github)** - This step performs a key action in the workflow.
4. **Step 3: Extract from File (extractFromFile)** - This step performs a key action in the workflow.
5. **Step 4: Embeddings OpenAI (embeddingsOpenAi)** - This step performs a key action in the workflow.
6. **Step 5: Default Data Loader (documentDefaultDataLoader)** - This step performs a key action in the workflow.
7. **Step 6: Token Splitter (textSplitterTokenSplitter)** - This step performs a key action in the workflow.
8. **Step 7: Qdrant Vector Store (vectorStoreQdrant)** - This step performs a key action in the workflow.
9. **Step 8: When chat message received (chatTrigger)** - This step performs a key action in the workflow.
10. **Step 9: OpenAI Chat Model (lmChatOpenAi)** - This step performs a key action in the workflow.
11. **Step 10: Call n8n Workflow Tool (toolWorkflow)** - This step performs a key action in the workflow.
12. **Step 11: Window Buffer Memory (memoryBufferWindow)** - This step performs a key action in the workflow.
13. **Step 12: Execute Workflow Trigger (executeWorkflowTrigger)** - This step performs a key action in the workflow.
14. **Step 13: Merge (merge)** - This step performs a key action in the workflow.
15. **Step 14: Split Out (splitOut)** - This step performs a key action in the workflow.
16. **Step 15: Split Out1 (splitOut)** - This step performs a key action in the workflow.
17. **Step 16: Merge1 (merge)** - This step performs a key action in the workflow.
18. **Step 17: Aggregate (aggregate)** - This step performs a key action in the workflow.
19. **Step 18: AI Agent (agent)** - This step performs a key action in the workflow.
20. **Step 19: Embedding Recommendation Request with Open AI (httpRequest)** - This step performs a key action in the workflow.
21. **Step 20: Embedding Anti-Recommendation Request with Open AI (httpRequest)** - This step performs a key action in the workflow.
22. **Step 21: Extracting Embedding (set)** - This step performs a key action in the workflow.
23. **Step 22: Extracting Embedding1 (set)** - This step performs a key action in the workflow.
24. **Step 23: Calling Qdrant Recommendation API (httpRequest)** - This step performs a key action in the workflow.
25. **Step 24: Retrieving Recommended Movies Meta Data (httpRequest)** - This step performs a key action in the workflow.
26. **Step 25: Selecting Fields Relevant for Agent (set)** - This step performs a key action in the workflow.
27. **Step 26: Sticky Note (stickyNote)** - This step performs a key action in the workflow.
28. **Step 27: Sticky Note1 (stickyNote)** - This step performs a key action in the workflow.

## 💡 AI-Powered Ideas for Improvement
### Explain
This n8n workflow automates the process of recommending movies. It retrieves movie data from GitHub, extracts and processes information using AI, and provides personalized movie recommendations based on user preferences through a chat interface.

### Demonstrate
A business owner could use this workflow to create a movie recommendation chatbot for their streaming service, enhancing user engagement and improving customer satisfaction by providing tailored suggestions based on user input.

### Imitate
1. Set up n8n and create a new workflow.
2. Add a Manual Trigger to start the workflow.
3. Connect the GitHub node to fetch movie data.
4. Use Extract from File to process the data.
5. Integrate OpenAI for generating embeddings.
6. Set up a chat trigger for user interactions.
7. Configure the AI agent to provide recommendations based on user queries.
8. Test the workflow and refine with user feedback.

### Practice
Try modifying the workflow to include a new feature, such as allowing users to filter recommendations by genre. Test it with different inputs to see how the recommendations change based on user preferences.

### WIIFM
Mastering this workflow allows you to create personalized AI-driven solutions for clients, enhancing their customer engagement and providing a competitive edge in the market, potentially leading to increased revenue and customer loyalty.

## 🔧 Setup Instructions
1. **Connect Credentials:** OpenAI, Google Sheets, Slack, and other nodes must be authenticated.
2. **Customize Core Logic:** Review "When clicking ‘Test workflow’" and "Sticky Note1" for IDs, table names, and URLs.
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
