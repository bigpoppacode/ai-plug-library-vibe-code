# AI Voice Chatbot With Elevenlabs & Openai For Customer Service And Restaurants

## 🚀 What It Does
This workflow automates a process involving agent, toolVectorStore, vectorStoreQdrant.

## 💼 Business Use Case
Use it to automate research, content creation, or data analysis. It saves hours of manual work.

## ⚙️ How It Works
1.  **Trigger:** This workflow starts with a **When clicking ‘Test workflow’** node.
2. **Step 1: AI Agent (agent)** - This step performs a key action in the workflow.
3. **Step 2: Vector Store Tool (toolVectorStore)** - This step performs a key action in the workflow.
4. **Step 3: Qdrant Vector Store (vectorStoreQdrant)** - This step performs a key action in the workflow.
5. **Step 4: Embeddings OpenAI (embeddingsOpenAi)** - This step performs a key action in the workflow.
6. **Step 5: Sticky Note4 (stickyNote)** - This step performs a key action in the workflow.
7. **Step 6: Sticky Note (stickyNote)** - This step performs a key action in the workflow.
8. **Step 7: When clicking ‘Test workflow’ (manualTrigger)** - This step performs a key action in the workflow.
9. **Step 8: Create collection (httpRequest)** - This step performs a key action in the workflow.
10. **Step 9: Refresh collection (httpRequest)** - This step performs a key action in the workflow.
11. **Step 10: Get folder (googleDrive)** - This step performs a key action in the workflow.
12. **Step 11: Download Files (googleDrive)** - This step performs a key action in the workflow.
13. **Step 12: Default Data Loader (documentDefaultDataLoader)** - This step performs a key action in the workflow.
14. **Step 13: Token Splitter (textSplitterTokenSplitter)** - This step performs a key action in the workflow.
15. **Step 14: Sticky Note3 (stickyNote)** - This step performs a key action in the workflow.
16. **Step 15: Qdrant Vector Store1 (vectorStoreQdrant)** - This step performs a key action in the workflow.
17. **Step 16: Embeddings OpenAI1 (embeddingsOpenAi)** - This step performs a key action in the workflow.
18. **Step 17: Sticky Note5 (stickyNote)** - This step performs a key action in the workflow.
19. **Step 18: Respond to ElevenLabs (respondToWebhook)** - This step performs a key action in the workflow.
20. **Step 19: OpenAI (lmChatOpenAi)** - This step performs a key action in the workflow.
21. **Step 20: Listen (webhook)** - This step performs a key action in the workflow.
22. **Step 21: Window Buffer Memory (memoryBufferWindow)** - This step performs a key action in the workflow.
23. **Step 22: OpenAI Chat Model (lmChatOpenAi)** - This step performs a key action in the workflow.
24. **Step 23: Sticky Note6 (stickyNote)** - This step performs a key action in the workflow.

## 💡 AI-Powered Ideas for Improvement
### Explain
This n8n workflow automates a voice-based chatbot using AI. It processes user queries, retrieves relevant information from a vector database, generates responses through OpenAI, and transforms them into voice output with ElevenLabs.

### Demonstrate
A business owner could use this workflow to create a customer service chatbot that answers FAQs. This saves time, improves customer experience, and can operate 24/7, enhancing engagement without additional staff.

### Imitate
1. Set up an ElevenLabs account and create a voice agent.
2. Configure a Qdrant vector store for your data.
3. Use n8n to connect the webhook, AI agent, and voice output nodes.
4. Test the workflow by triggering it with sample queries.

### Practice
Try modifying the workflow to respond to specific customer inquiries. Change the questions and responses in the AI agent and test if it correctly retrieves information from your vector database.

### WIIFM
Mastering this workflow enables you to offer innovative AI solutions to clients, enhancing their customer service and operational efficiency. This can lead to increased revenue and a competitive edge in the market.

## 🔧 Setup Instructions
1. **Connect Credentials:** OpenAI, Google Sheets, Slack, and other nodes must be authenticated.
2. **Customize Core Logic:** Review "AI Agent" and "Sticky Note6" for IDs, table names, and URLs.
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
