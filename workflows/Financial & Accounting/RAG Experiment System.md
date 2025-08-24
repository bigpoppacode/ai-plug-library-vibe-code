# RAG Experiment System

## 🚀 What It Does
This workflow automates a process involving chatTrigger, toolVectorStore, vectorStorePinecone.

## 💼 Business Use Case
Use it to automate research, content creation, or data analysis. It saves hours of manual work.

## ⚙️ How It Works
1.  **Trigger:** This workflow starts with a **When chat message received** node.
2. **Step 1: When chat message received (chatTrigger)** - This step performs a key action in the workflow.
3. **Step 2: nvidia (toolVectorStore)** - This step performs a key action in the workflow.
4. **Step 3: Pinecone Vector Store (vectorStorePinecone)** - This step performs a key action in the workflow.
5. **Step 4: nvidia1 (toolVectorStore)** - This step performs a key action in the workflow.
6. **Step 5: Pinecone Vector Store1 (vectorStorePinecone)** - This step performs a key action in the workflow.
7. **Step 6: Embeddings OpenAI1 (embeddingsOpenAi)** - This step performs a key action in the workflow.
8. **Step 7: GPT-4o (lmChatOpenAi)** - This step performs a key action in the workflow.
9. **Step 8: Embeddings OpenAI (embeddingsOpenAi)** - This step performs a key action in the workflow.
10. **Step 9: Claude 3.5 Sonnet (lmChatAnthropic)** - This step performs a key action in the workflow.
11. **Step 10: GPT-4o Agent (agent)** - This step performs a key action in the workflow.
12. **Step 11: Claude 3.5 Sonnet Agent (agent)** - This step performs a key action in the workflow.
13. **Step 12: nvidia2 (toolVectorStore)** - This step performs a key action in the workflow.
14. **Step 13: Pinecone Vector Store2 (vectorStorePinecone)** - This step performs a key action in the workflow.
15. **Step 14: Embeddings OpenAI2 (embeddingsOpenAi)** - This step performs a key action in the workflow.
16. **Step 15: GPT-4o Agent1 (agent)** - This step performs a key action in the workflow.
17. **Step 16: Gemini Flash 2.0 (lmChatGoogleGemini)** - This step performs a key action in the workflow.
18. **Step 17: Gemini Flash 2.0_ (lmChatGoogleGemini)** - This step performs a key action in the workflow.
19. **Step 18: GPT-4o_ (lmChatOpenAi)** - This step performs a key action in the workflow.
20. **Step 19: Claude 3.5 Sonnet_ (lmChatAnthropic)** - This step performs a key action in the workflow.

## 💡 AI-Powered Ideas for Improvement
### Explain
This n8n workflow automates the process of responding to chat messages by retrieving data from NVIDIA's earnings reports and summarizing it using various AI models. It listens for a chat message, fetches relevant data, and utilizes AI to generate insightful responses.

### Demonstrate
A business owner could use this workflow to automatically provide investors with real-time updates on NVIDIA's financial performance. Instead of manually checking reports, they can instantly respond to inquiries, saving time and increasing engagement.

### Imitate
1. Set up a chat trigger in n8n.
2. Connect to an AI tool (like OpenAI) to process messages.
3. Use a vector database (like Pinecone) to store and retrieve financial data.
4. Create nodes to summarize the data based on user queries.
5. Test the workflow by sending sample chat messages.

### Practice
Try creating a simplified version of the workflow. Use a manual trigger to simulate a chat message, then connect it to a single AI model that summarizes a static financial report instead of querying a database.

### WIIFM
Mastering this workflow allows you to offer real-time data retrieval and AI-powered responses, making you valuable to businesses needing efficient customer support or investor relations. This skill can help you attract clients and generate income in the growing field of AI automation.

## 🔧 Setup Instructions
1. **Connect Credentials:** OpenAI, Google Sheets, Slack, and other nodes must be authenticated.
2. **Customize Core Logic:** Review "When chat message received" and "Claude 3.5 Sonnet_" for IDs, table names, and URLs.
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
