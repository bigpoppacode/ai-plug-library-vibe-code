# Splitout Code Automation Triggered

## 🚀 What It Does
This workflow automates a process involving manualTrigger, splitInBatches, lmChatOpenRouter.

## 💼 Business Use Case
Use it to automate research, content creation, or data analysis. It saves hours of manual work.

## ⚙️ How It Works
1.  **Trigger:** This workflow starts with a **When clicking ‘Test workflow’** node.
2. **Step 1: When clicking ‘Test workflow’ (manualTrigger)** - This step performs a key action in the workflow.
3. **Step 2: Loop Over Items (splitInBatches)** - This step performs a key action in the workflow.
4. **Step 3: OpenRouter Chat Model (lmChatOpenRouter)** - This step performs a key action in the workflow.
5. **Step 4: Pinecone Vector Store (vectorStorePinecone)** - This step performs a key action in the workflow.
6. **Step 5: Embeddings Google Gemini (embeddingsGoogleGemini)** - This step performs a key action in the workflow.
7. **Step 6: Default Data Loader (documentDefaultDataLoader)** - This step performs a key action in the workflow.
8. **Step 7: Recursive Character Text Splitter (textSplitterRecursiveCharacterTextSplitter)** - This step performs a key action in the workflow.
9. **Step 8: Get Document From Google Drive (googleDrive)** - This step performs a key action in the workflow.
10. **Step 9: Extract Text Data From Google Document (extractFromFile)** - This step performs a key action in the workflow.
11. **Step 10: Split Document Text Into Sections (code)** - This step performs a key action in the workflow.
12. **Step 11: Prepare Sections For Looping (splitOut)** - This step performs a key action in the workflow.
13. **Step 12: Sticky Note (stickyNote)** - This step performs a key action in the workflow.
14. **Step 13: Sticky Note1 (stickyNote)** - This step performs a key action in the workflow.
15. **Step 14: AI Agent - Prepare Context (agent)** - This step performs a key action in the workflow.
16. **Step 15: Concatenate the context and section text (set)** - This step performs a key action in the workflow.
17. **Step 16: Sticky Note2 (stickyNote)** - This step performs a key action in the workflow.
18. **Step 17: Sticky Note3 (stickyNote)** - This step performs a key action in the workflow.

## 💡 AI-Powered Ideas for Improvement
### Explain
This n8n workflow automates the process of managing document data by retrieving a file from Google Drive, extracting its text, splitting the text into manageable sections, and preparing context for AI processing, which then stores the information in a Pinecone vector database for easy retrieval.

### Demonstrate
A business owner might use this workflow to automate the analysis of lengthy reports. Instead of manually extracting and summarizing information, the workflow automatically processes documents, making it easier to retrieve insights quickly and efficiently.

### Imitate
1. Start with a manual trigger in n8n.
2. Use the Google Drive node to fetch your document.
3. Extract text data from the document.
4. Split the text into sections using a code node.
5. Prepare each section for AI context generation.
6. Store processed sections in Pinecone for future reference.

### Practice
Try creating a simplified version of this workflow. Use a short text document, extract its content, split it into sections, and log the output to see how the data is transformed at each step.

### WIIFM
Mastering this workflow allows you to save time on data processing tasks, enhance your service offerings, and provide clients with efficient document management solutions, which can lead to increased customer satisfaction and potential revenue growth from automation services.

## 🔧 Setup Instructions
1. **Connect Credentials:** OpenAI, Google Sheets, Slack, and other nodes must be authenticated.
2. **Customize Core Logic:** Review "When clicking ‘Test workflow’" and "Sticky Note3" for IDs, table names, and URLs.
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
