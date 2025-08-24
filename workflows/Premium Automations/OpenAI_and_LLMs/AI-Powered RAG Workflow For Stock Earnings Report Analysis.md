# AI Powered RAG Workflow For Stock Earnings Report Analysis

## 🚀 What It Does
This workflow automates a process involving vectorStorePinecone, embeddingsGoogleGemini, documentDefaultDataLoader.

## 💼 Business Use Case
Use it to automate research, content creation, or data analysis. It saves hours of manual work.

## ⚙️ How It Works
1.  **Trigger:** This workflow starts with a **When clicking ‘Test workflow’** node.
2. **Step 1: Pinecone Vector Store (vectorStorePinecone)** - This step performs a key action in the workflow.
3. **Step 2: Embeddings Google Gemini (embeddingsGoogleGemini)** - This step performs a key action in the workflow.
4. **Step 3: Default Data Loader (documentDefaultDataLoader)** - This step performs a key action in the workflow.
5. **Step 4: Recursive Character Text Splitter (textSplitterRecursiveCharacterTextSplitter)** - This step performs a key action in the workflow.
6. **Step 5: Loop Over Items (splitInBatches)** - This step performs a key action in the workflow.
7. **Step 6: When clicking ‘Test workflow’ (manualTrigger)** - This step performs a key action in the workflow.
8. **Step 7: AI Agent (agent)** - This step performs a key action in the workflow.
9. **Step 8: Vector Store Tool (toolVectorStore)** - This step performs a key action in the workflow.
10. **Step 9: Google Gemini Chat Model1 (lmChatGoogleGemini)** - This step performs a key action in the workflow.
11. **Step 10: OpenAI Chat Model (lmChatOpenAi)** - This step performs a key action in the workflow.
12. **Step 11: Pinecone Vector Store (Retrieval) (vectorStorePinecone)** - This step performs a key action in the workflow.
13. **Step 12: Save Report to Google Docs (googleDocs)** - This step performs a key action in the workflow.
14. **Step 13: Embeddings Google Gemini (retrieval) (embeddingsGoogleGemini)** - This step performs a key action in the workflow.
15. **Step 14: List Of Files To Load (Google Sheets) (googleSheets)** - This step performs a key action in the workflow.
16. **Step 15: Download File From Google Drive (googleDrive)** - This step performs a key action in the workflow.
17. **Step 16: Sticky Note (stickyNote)** - This step performs a key action in the workflow.
18. **Step 17: Sticky Note1 (stickyNote)** - This step performs a key action in the workflow.
19. **Step 18: Sticky Note2 (stickyNote)** - This step performs a key action in the workflow.

## 💡 AI-Powered Ideas for Improvement
### Explain
This n8n workflow automates the analysis of stock earnings reports by using AI to extract and summarize key financial data from PDFs, storing the results in a Google Doc for easy access.

### Demonstrate
A business owner can use this workflow to automate quarterly earnings report analysis for companies, saving time by quickly generating insights and trends without manual data entry or analysis.

### Imitate
1. Import the workflow into n8n.
2. Set up Google Drive, Sheets, and Docs credentials.
3. Modify the PDF document loader to point to your earnings reports.
4. Customize the AI prompts to fit your analysis needs.
5. Test the workflow to generate your report.

### Practice
Try running the workflow with a sample earnings report and check the generated Google Doc for accuracy. Adjust the prompts to see how the AI's output changes based on different queries.

### WIIFM
Mastering this workflow helps you offer valuable automation services, allowing you to save clients time and improve their data analysis capabilities, ultimately increasing your income potential as an automation consultant.

## 🔧 Setup Instructions
1. **Connect Credentials:** OpenAI, Google Sheets, Slack, and other nodes must be authenticated.
2. **Customize Core Logic:** Review "Pinecone Vector Store" and "Sticky Note2" for IDs, table names, and URLs.
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
