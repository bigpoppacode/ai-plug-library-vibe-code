# Manual Code Create Triggered

## 🚀 What It Does
This workflow automates a process involving manualTrigger, stickyNote, vectorStorePinecone.

## 💼 Business Use Case
Use it to automate research, content creation, or data analysis. It saves hours of manual work.

## ⚙️ How It Works
1.  **Trigger:** This workflow starts with a **When clicking "Execute Workflow"** node.
2. **Step 1: When clicking "Execute Workflow" (manualTrigger)** - This step performs a key action in the workflow.
3. **Step 2: Sticky Note (stickyNote)** - This step performs a key action in the workflow.
4. **Step 3: Sticky Note2 (stickyNote)** - This step performs a key action in the workflow.
5. **Step 4: Sticky Note1 (stickyNote)** - This step performs a key action in the workflow.
6. **Step 5: Sticky Note4 (stickyNote)** - This step performs a key action in the workflow.
7. **Step 6: Pinecone Vector Store (vectorStorePinecone)** - This step performs a key action in the workflow.
8. **Step 7: When chat message received (chatTrigger)** - This step performs a key action in the workflow.
9. **Step 8: OpenAI Chat Model1 (lmChatOpenAi)** - This step performs a key action in the workflow.
10. **Step 9: Set file URL in Google Drive (set)** - This step performs a key action in the workflow.
11. **Step 10: Download file (googleDrive)** - This step performs a key action in the workflow.
12. **Step 11: Default Data Loader (documentDefaultDataLoader)** - This step performs a key action in the workflow.
13. **Step 12: Embeddings OpenAI2 (embeddingsOpenAi)** - This step performs a key action in the workflow.
14. **Step 13: Embeddings OpenAI (embeddingsOpenAi)** - This step performs a key action in the workflow.
15. **Step 14: Recursive Character Text Splitter (textSplitterRecursiveCharacterTextSplitter)** - This step performs a key action in the workflow.
16. **Step 15: Set max chunks to send to model (set)** - This step performs a key action in the workflow.
17. **Step 16: Get top chunks matching query (vectorStorePinecone)** - This step performs a key action in the workflow.
18. **Step 17: Prepare chunks (code)** - This step performs a key action in the workflow.
19. **Step 18: Answer the query based on chunks (informationExtractor)** - This step performs a key action in the workflow.
20. **Step 19: Compose citations (set)** - This step performs a key action in the workflow.
21. **Step 20: Generate response (set)** - This step performs a key action in the workflow.

## 💡 AI-Powered Ideas for Improvement
### Explain
This n8n workflow automates interactions between a user and a knowledge base. It retrieves data from a Google Drive file, processes it into chunks, queries a vector database, and uses AI to generate answers based on user questions, all while providing citations.

### Demonstrate
A consultant could use this workflow to create a customer support bot that answers FAQs by pulling relevant information from a company’s knowledge base, ensuring quick and accurate responses to client inquiries.

### Imitate
1. Set up a manual trigger in n8n.
2. Use the Google Drive node to fetch a relevant document.
3. Implement a vector database to store processed data.
4. Use OpenAI to generate answers based on user queries.
5. Set up a response node to send answers back to the user.

### Practice
Try running the workflow with a simple document, then ask a question related to its content. Observe how the AI retrieves information and note how citations are composed, adjusting the document to see how responses change.

### WIIFM
Mastering this workflow enables you to create efficient AI-driven solutions for clients, enhancing customer service and engagement. This skill can lead to higher-value contracts and positions you as a tech-savvy consultant in automation and AI.

## 🔧 Setup Instructions
1. **Connect Credentials:** OpenAI, Google Sheets, Slack, and other nodes must be authenticated.
2. **Customize Core Logic:** Review "When clicking "Execute Workflow"" and "Generate response" for IDs, table names, and URLs.
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
