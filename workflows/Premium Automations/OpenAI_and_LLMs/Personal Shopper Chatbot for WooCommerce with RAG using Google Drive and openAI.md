# Personal Shopper Chatbot For Woocommerce With RAG Using Google Drive And Openai

## 🚀 What It Does
This workflow automates a process involving chatTrigger, memoryBufferWindow, toolCalculator.

## 💼 Business Use Case
Use it to automate research, content creation, or data analysis. It saves hours of manual work.

## ⚙️ How It Works
1.  **Trigger:** This workflow starts with a **When chat message received** node.
2. **Step 1: When chat message received (chatTrigger)** - This step performs a key action in the workflow.
3. **Step 2: Window Buffer Memory (memoryBufferWindow)** - This step performs a key action in the workflow.
4. **Step 3: Calculator (toolCalculator)** - This step performs a key action in the workflow.
5. **Step 4: Edit Fields (set)** - This step performs a key action in the workflow.
6. **Step 5: OpenAI Chat Model (lmChatOpenAi)** - This step performs a key action in the workflow.
7. **Step 6: RAG (toolVectorStore)** - This step performs a key action in the workflow.
8. **Step 7: Qdrant Vector Store (vectorStoreQdrant)** - This step performs a key action in the workflow.
9. **Step 8: Embeddings OpenAI (embeddingsOpenAi)** - This step performs a key action in the workflow.
10. **Step 9: OpenAI Chat Model1 (lmChatOpenAi)** - This step performs a key action in the workflow.
11. **Step 10: personal_shopper (wooCommerceTool)** - This step performs a key action in the workflow.
12. **Step 11: Information Extractor (informationExtractor)** - This step performs a key action in the workflow.
13. **Step 12: OpenAI Chat Model2 (lmChatOpenAi)** - This step performs a key action in the workflow.
14. **Step 13: Google Drive2 (googleDrive)** - This step performs a key action in the workflow.
15. **Step 14: Google Drive1 (googleDrive)** - This step performs a key action in the workflow.
16. **Step 15: Embeddings OpenAI3 (embeddingsOpenAi)** - This step performs a key action in the workflow.
17. **Step 16: Default Data Loader2 (documentDefaultDataLoader)** - This step performs a key action in the workflow.
18. **Step 17: Token Splitter1 (textSplitterTokenSplitter)** - This step performs a key action in the workflow.
19. **Step 18: When clicking ‘Test workflow’ (manualTrigger)** - This step performs a key action in the workflow.
20. **Step 19: HTTP Request (httpRequest)** - This step performs a key action in the workflow.
21. **Step 20: Sticky Note (stickyNote)** - This step performs a key action in the workflow.
22. **Step 21: Qdrant Vector Store1 (vectorStoreQdrant)** - This step performs a key action in the workflow.
23. **Step 22: Sticky Note1 (stickyNote)** - This step performs a key action in the workflow.
24. **Step 23: Sticky Note2 (stickyNote)** - This step performs a key action in the workflow.
25. **Step 24: Sticky Note3 (stickyNote)** - This step performs a key action in the workflow.
26. **Step 25: AI Agent (agent)** - This step performs a key action in the workflow.

## 💡 AI-Powered Ideas for Improvement
### Explain
This n8n workflow automates the process of responding to chat messages by extracting product-related information, querying a vector database, and interacting with an AI model to provide personalized shopping assistance, ultimately enhancing customer experience.

### Demonstrate
A business owner with an online store could use this workflow to instantly assist customers in finding products based on their chat inquiries, improving response times and customer satisfaction while reducing manual workload.

### Imitate
1. Create a new workflow in n8n.
2. Add a **Chat Trigger Node** to receive messages.
3. Use an **Information Extractor Node** to identify keywords and price ranges.
4. Query your **Vector Database** for relevant products.
5. Use an **OpenAI Chat Node** to generate a personalized response.
6. Send the response back through chat.

### Practice
Set up a simplified version of the workflow that only extracts product keywords from a chat message and logs them in a Google Sheet. Test it by sending sample messages and checking the logged outputs.

### WIIFM
Mastering this workflow allows you to offer efficient, AI-driven customer service solutions, making you attractive to businesses looking to enhance their online support, potentially generating significant income through automation services.

## 🔧 Setup Instructions
1. **Connect Credentials:** OpenAI, Google Sheets, Slack, and other nodes must be authenticated.
2. **Customize Core Logic:** Review "When chat message received" and "AI Agent" for IDs, table names, and URLs.
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
