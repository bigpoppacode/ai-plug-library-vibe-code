# Googledocs Manual Automate Triggered
  ## 🚀 What It Does
  Moves data between apps and a **database/spreadsheet**, with logic and optional AI steps.
  
  ## 💼 Business Use Case
  Ideal for **lead intake**, **enrichment**, and **CRM updates** with alerts to the right channel.
  
  ## ⚙️ How It Works
  1. **Trigger:** This workflow starts with **When clicking ‘Test workflow’**.
  2. **Embeddings Google Gemini** `embeddingsGoogleGemini` — modelName: "models/text-embedding-004"
3. **Default Data Loader** `documentDefaultDataLoader` — loader: "pdfLoader", options: "[object Object]", dataType: "binary"
4. **Recursive Character Text Splitter** `textSplitterRecursiveCharacterTextSplitter` — options: "[object Object]"
5. **When clicking ‘Test workflow’** `manualTrigger` — configured for its default action.
6. **Vector Store Tool** `toolVectorStore` — name: "company_financial_earnings_data_tool", description: "Retrieve information about the last 3 quarters of Google Earnings"
7. **Google Gemini Chat Model1** `lmChatGoogleGemini` — options: "[object Object]", modelName: "models/gemini-2.0-flash-exp"
8. **OpenAI Chat Model** `lmChatOpenAi` — options: "[object Object]"
9. **Pinecone Vector Store (Retrieval)** `vectorStorePinecone` — options: "[object Object]", pineconeIndex: "[object Object]"
10. **Embeddings Google Gemini (retrieval)** `embeddingsGoogleGemini` — modelName: "models/text-embedding-004"
11. **List Of Files To Load (Google Sheets)** `googleSheets` — options: "[object Object]", sheetName: "[object Object]", documentId: "[object Object]"
12. **Sticky Note** `stickyNote` — width: "500", height: "740", content: "## Set up steps
1. Google Cloud Project & Vertex AI API:
	* Create a Google Cloud project.
	* Enable the Vertex AI API for your project.
2. Google AI API key:
	* Obtain a Google AI…[truncated]"
13. **Sticky Note1** `stickyNote` — content: "## Loading data to Pinecone vector store"
14. **Sticky Note2** `stickyNote` — content: "## AI Agent Report Generation using RAG"
15. **AI Agent** `agent` — text: "Give me a report on Google's last 3 quarter earnings. Format it in markdown. Focus on the differences and trends. Spot any outliers.", options: "[object Object]", promptType: "define"
16. **Save Report to Google Docs** `googleDocs` — operation: **update**
  
  ## 💡 AI-Powered Ideas for Improvement
  ### Explain
This n8n workflow automates the analysis of Google's financial earnings for the last three quarters. It retrieves earnings data stored in PDF format, processes this data using AI models from Google Gemini and OpenAI, and generates a detailed financial report. The report focuses on revenue, expenses, profit trends, and any anomalies, which is then saved to a Google Doc.

### Demonstrate
A financial consultant could use this workflow to automatically generate detailed quarterly earnings reports for clients, providing insights into financial trends and helping in strategic decision-making.

### Imitate
1. Import the workflow into your n8n instance.
2. Set up Google Cloud, Vertex AI API, and Pinecone accounts.
3. Configure Google Sheets and Drive to store and manage your financial documents.
4. Update the workflow nodes with your credentials and document details.
5. Run the workflow using the manual trigger to generate a financial report.

### Practice
Create a test Google Sheet with links to dummy financial PDFs. Run the workflow and check the Google Doc for the generated report. Adjust data in the PDFs to see how changes reflect in the report.

### WIIFM
Mastering this workflow enables you to offer automated financial reporting services, saving time and providing value to clients. This can enhance your service offerings and increase income opportunities in financial consulting or AI automation businesses.
  
  ## 🔧 Setup Instructions
  1. **Connect Credentials:** pineconeApi, googlePalmApi, openAiApi, googleDocsOAuth2Api, googleSheetsOAuth2Api.
2. **Data Mapping:** Verify base/sheet IDs and column names match exactly to prevent silent failures.
  
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
  