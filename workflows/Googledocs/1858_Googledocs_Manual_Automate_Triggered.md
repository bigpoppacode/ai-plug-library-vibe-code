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
This n8n workflow automates the generation of a financial report on Google's last three quarters. It collects earnings data from PDF files stored in Google Drive, processes it into a vector database using Pinecone, and uses AI models like Google Gemini and OpenAI to analyze and summarize the data. The final report, highlighting trends and outliers, is formatted in Markdown and saved to Google Docs.

### Demonstrate
A financial consultant can use this workflow to efficiently analyze and report on a company's quarterly earnings, saving time and ensuring accuracy. This is especially useful for presenting insights to stakeholders or clients.

### Imitate
1. Import the workflow into n8n.
2. Set up Google Cloud, Pinecone, and required APIs.
3. Configure Google Sheets and Drive nodes with your data.
4. Test the workflow to ensure correct data processing and report generation.
5. Customize the AI prompt to match your reporting needs.

### Practice
Create a test environment with sample earnings data. Run the workflow to generate a report, then tweak the AI prompts and data sources to observe changes in the output. This helps in understanding data flow and AI processing.

### WIIFM
Mastering this workflow enables you to offer automated financial reporting services, streamlining data analysis for clients. It enhances your service offerings, potentially increasing client engagement and revenue in your AI automation business.
  
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
  