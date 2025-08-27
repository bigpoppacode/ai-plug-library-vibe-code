# Resume Screening
  ## 🚀 What It Does
  Monitors events, processes them, and **notifies** people/apps (Slack/Email) with structured updates.
  
  ## 💼 Business Use Case
  Ideal for **lead intake**, **enrichment**, and **CRM updates** with alerts to the right channel.
  
  ## ⚙️ How It Works
  1. **Trigger:** This workflow starts with **Sticky Note**.
  2. **Sticky Note** `stickyNote` — content: "Placeholder for Resume Screening", height: "530", width: "1100"
3. **Webhook Trigger** `webhook` — method: **POST**, path: `/resume-screening`
4. **Weaviate Insert** `vectorStoreWeaviate` — mode: "insert", options: "[object Object]", indexName: "resume_screening"
5. **Weaviate Query** `vectorStoreWeaviate` — indexName: "resume_screening"
6. **Vector Tool** `toolVectorStore` — name: "Weaviate", description: "Vector context"
7. **Chat Model** `lmChatOpenAi` — options: "[object Object]"
8. **RAG Agent** `agent` — promptType: "define", text: "Handle data", options: "[object Object]"
9. **Slack Alert** `slack` — channel/topic: `#alerts`
10. **Text Splitter** `textSplitterCharacterTextSplitter` — chunkSize: "400", chunkOverlap: "40"
11. **Window Memory** `memoryBufferWindow` — configured for its default action.
12. **Append Sheet** `googleSheets` — operation: **append**
13. **Embeddings** `embeddingsCohere` — model: `embed-english-v3.0`
  
  ## 💡 AI-Powered Ideas for Improvement
  **Explain:**  
This n8n workflow automates the process of resume screening. It starts by receiving resumes via a webhook. The text is split and converted into embeddings using Cohere, which are then stored in Weaviate, a vector database. The workflow queries the database to find relevant data, processes it with an AI agent, and logs results in Google Sheets. Errors trigger alerts via Slack.

**Demonstrate:**  
A recruitment agency can use this workflow to automate the initial screening of candidate resumes, saving time and ensuring a more consistent evaluation process.

**Imitate:**  
1. Import the workflow into n8n.  
2. Connect Weaviate, Cohere, OpenAI, Google Sheets, and Slack accounts.  
3. Customize the Google Sheets document and Slack channel.  
4. Test with sample resumes to ensure proper processing and logging.

**Practice:**  
Create a test webhook and submit a few sample resumes. Observe how the workflow processes the data, stores it, and logs results. Adjust settings to optimize the screening criteria and error handling.

**WIIFM:**  
Mastering this workflow enables you to offer automated resume screening as a service to HR departments or recruitment agencies. This can enhance your service offerings, attract new clients, and generate additional income by improving their hiring processes with AI-driven automation.
  
  ## 🔧 Setup Instructions
  1. **Connect Credentials:** cohereApi, weaviateApi, openAiApi, googleSheetsOAuth2Api, slackApi.
2. **Data Mapping:** Verify base/sheet IDs and column names match exactly to prevent silent failures.
3. **Notification Targets:** Confirm channel/email IDs and that the bot/app is authorized to post.
  
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
  