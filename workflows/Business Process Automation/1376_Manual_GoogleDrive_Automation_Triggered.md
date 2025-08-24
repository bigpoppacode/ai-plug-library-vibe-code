# Manual GoogleDrive Automation Triggered

## 🚀 What It Does
This workflow automates a process involving manualTrigger, embeddingsOpenAi, stickyNote.

## 💼 Business Use Case
Use it to automate research, content creation, or data analysis. It saves hours of manual work.

## ⚙️ How It Works
1.  **Trigger:** This workflow starts with a **When clicking "Execute Workflow"** node.
2. **Step 1: When clicking "Execute Workflow" (manualTrigger)** - This step performs a key action in the workflow.
3. **Step 2: Embeddings OpenAI (embeddingsOpenAi)** - This step performs a key action in the workflow.
4. **Step 3: Sticky Note (stickyNote)** - This step performs a key action in the workflow.
5. **Step 4: Default Data Loader (documentDefaultDataLoader)** - This step performs a key action in the workflow.
6. **Step 5: Set file URL in Google Drive (set)** - This step performs a key action in the workflow.
7. **Step 6: Sticky Note2 (stickyNote)** - This step performs a key action in the workflow.
8. **Step 7: Add in metadata (code)** - This step performs a key action in the workflow.
9. **Step 8: Download file (googleDrive)** - This step performs a key action in the workflow.
10. **Step 9: Chat Trigger (chatTrigger)** - This step performs a key action in the workflow.
11. **Step 10: Prepare chunks (code)** - This step performs a key action in the workflow.
12. **Step 11: Embeddings OpenAI2 (embeddingsOpenAi)** - This step performs a key action in the workflow.
13. **Step 12: OpenAI Chat Model (lmChatOpenAi)** - This step performs a key action in the workflow.
14. **Step 13: Set max chunks to send to model (set)** - This step performs a key action in the workflow.
15. **Step 14: Structured Output Parser (outputParserStructured)** - This step performs a key action in the workflow.
16. **Step 15: Compose citations (set)** - This step performs a key action in the workflow.
17. **Step 16: Generate response (set)** - This step performs a key action in the workflow.
18. **Step 17: Sticky Note1 (stickyNote)** - This step performs a key action in the workflow.
19. **Step 18: Answer the query based on chunks (chainLlm)** - This step performs a key action in the workflow.
20. **Step 19: Sticky Note4 (stickyNote)** - This step performs a key action in the workflow.
21. **Step 20: Get top chunks matching query (vectorStorePinecone)** - This step performs a key action in the workflow.
22. **Step 21: Add to Pinecone vector store (vectorStorePinecone)** - This step performs a key action in the workflow.
23. **Step 22: Recursive Character Text Splitter (textSplitterRecursiveCharacterTextSplitter)** - This step performs a key action in the workflow.

## 💡 AI-Powered Ideas for Improvement
### Explain
This n8n workflow automates the process of generating AI-driven responses based on uploaded documents. It retrieves a file from Google Drive, processes its content into manageable chunks, then allows users to query the content and receive detailed answers, including citations.

### Demonstrate
A business owner may need to analyze large documents (like reports or manuals) efficiently. This workflow allows them to upload a document, query it for specific information, and get instant, AI-generated answers, saving time and improving decision-making.

### Imitate
1. **Set Up Trigger**: Add a Manual Trigger node to start the workflow.
2. **Fetch Document**: Use Google Drive to download the file.
3. **Process Content**: Use a text splitter to break the document into chunks.
4. **Query Handling**: Implement a chat trigger to accept user questions.
5. **AI Integration**: Use OpenAI to generate responses based on the document content.
6. **Output Response**: Return the AI's answer to the user.

### Practice
Try uploading a simple text document to your Google Drive. Modify the workflow to process this document and ask it a question about its content. Test different queries to see how the AI responds based on the document's information.

### WIIFM
Mastering this workflow equips you with the skills to create valuable AI-driven solutions for businesses, enabling you to charge for automation services or improve your own operational efficiency, ultimately generating significant income.

## 🔧 Setup Instructions
1. **Connect Credentials:** OpenAI, Google Sheets, Slack, and other nodes must be authenticated.
2. **Customize Core Logic:** Review "When clicking "Execute Workflow"" and "Recursive Character Text Splitter" for IDs, table names, and URLs.
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
