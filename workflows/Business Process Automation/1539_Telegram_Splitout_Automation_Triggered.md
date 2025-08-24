# Telegram Splitout Automation Triggered

## 🚀 What It Does
This workflow automates a process involving lmChatGoogleGemini, openWeatherMapTool, agent.

## 💼 Business Use Case
Use it to automate research, content creation, or data analysis. It saves hours of manual work.

## ⚙️ How It Works
1.  **Trigger:** This workflow starts with a **Telegram Trigger** node.
2. **Step 1: Google Gemini Chat Model (lmChatGoogleGemini)** - This step performs a key action in the workflow.
3. **Step 2: OpenWeatherMap (openWeatherMapTool)** - This step performs a key action in the workflow.
4. **Step 3: AI Agent (agent)** - This step performs a key action in the workflow.
5. **Step 4: Telegram Trigger (telegramTrigger)** - This step performs a key action in the workflow.
6. **Step 5: Telegram (telegram)** - This step performs a key action in the workflow.
7. **Step 6: Think (toolThink)** - This step performs a key action in the workflow.
8. **Step 7: Embeddings Google Gemini (embeddingsGoogleGemini)** - This step performs a key action in the workflow.
9. **Step 8: Default Data Loader (documentDefaultDataLoader)** - This step performs a key action in the workflow.
10. **Step 9: Recursive Character Text Splitter (textSplitterRecursiveCharacterTextSplitter)** - This step performs a key action in the workflow.
11. **Step 10: Extract from File (extractFromFile)** - This step performs a key action in the workflow.
12. **Step 11: Answer questions with a vector store (toolVectorStore)** - This step performs a key action in the workflow.
13. **Step 12: Supabase Vector Store (vectorStoreSupabase)** - This step performs a key action in the workflow.
14. **Step 13: Sticky Note10 (stickyNote)** - This step performs a key action in the workflow.
15. **Step 14: Sticky Note11 (stickyNote)** - This step performs a key action in the workflow.
16. **Step 15: Telegram - Embedding Complete (telegram)** - This step performs a key action in the workflow.
17. **Step 16: Supabase - Save Embeddings (vectorStoreSupabase)** - This step performs a key action in the workflow.
18. **Step 17: Command Router (switch)** - This step performs a key action in the workflow.
19. **Step 18: Telegram - Download file (telegram)** - This step performs a key action in the workflow.
20. **Step 19: Aggregate (aggregate)** - This step performs a key action in the workflow.
21. **Step 20: Fallback- No formatting (telegram)** - This step performs a key action in the workflow.
22. **Step 21: Split Out (splitOut)** - This step performs a key action in the workflow.
23. **Step 22: Simple Memory (memoryBufferWindow)** - This step performs a key action in the workflow.
24. **Step 23: Handle formatting and split (code)** - This step performs a key action in the workflow.
25. **Step 24: Sticky Note (stickyNote)** - This step performs a key action in the workflow.
26. **Step 25: Manual Mapping (set)** - This step performs a key action in the workflow.
27. **Step 26: Unsupported message (telegram)** - This step performs a key action in the workflow.
28. **Step 27: Send processing document message (telegram)** - This step performs a key action in the workflow.
29. **Step 28: Send embedding Started message (telegram)** - This step performs a key action in the workflow.

## 💡 AI-Powered Ideas for Improvement
### Explain
This n8n workflow automates interactions via a Telegram bot, allowing users to upload PDF documents and ask questions about them. It processes the documents, generates embeddings for searchability, and responds to user inquiries using AI, specifically Google Gemini.

### Demonstrate
A business owner could use this workflow to provide a customer support bot that answers questions about product manuals or contracts. Users upload documents via Telegram, and the bot provides instant answers, improving customer experience and reducing support costs.

### Imitate
1. Set up an n8n account and create a new workflow.
2. Add a Telegram Trigger to listen for messages.
3. Include nodes for document processing (like extracting text from PDFs).
4. Integrate Google Gemini for generating responses based on user questions.
5. Use a Telegram node to send responses back to users.

### Practice
Try creating a simplified version: set up a Telegram bot that responds to text messages with predefined answers. Experiment with adding a document upload feature later, processing it to extract text, and responding based on that text.

### WIIFM
Mastering this workflow allows you to offer a valuable service to clients seeking automation in customer support, driving efficiency and enhancing user engagement. This skill can lead to new business opportunities and increased revenue as you provide tailored AI solutions.

## 🔧 Setup Instructions
1. **Connect Credentials:** OpenAI, Google Sheets, Slack, and other nodes must be authenticated.
2. **Customize Core Logic:** Review "Google Gemini Chat Model" and "Send embedding Started message" for IDs, table names, and URLs.
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
