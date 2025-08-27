# Survey Auto Analyze
  ## 🚀 What It Does
  Monitors events, processes them, and **notifies** people/apps (Slack/Email) with structured updates.
  
  ## 💼 Business Use Case
  Ideal for **lead intake**, **enrichment**, and **CRM updates** with alerts to the right channel.
  
  ## ⚙️ How It Works
  1. **Trigger:** This workflow starts with **Sticky Note**.
  2. **Sticky Note** `stickyNote` — content: "Automated workflow: Survey Auto Analyze", height: "530", width: "1100"
3. **Webhook Trigger** `webhook` — method: **POST**, path: `/survey-auto-analyze`
4. **Pinecone Insert** `vectorStorePinecone` — mode: "insert", options: "[object Object]", pineconeIndex: "[object Object]"
5. **Pinecone Query** `vectorStorePinecone` — pineconeIndex: "[object Object]"
6. **Vector Tool** `toolVectorStore` — name: "Pinecone", description: "Vector context"
7. **Chat Model** `lmChatOpenAi` — options: "[object Object]"
8. **RAG Agent** `agent` — promptType: "define", text: "Process the following data for task 'Survey Auto Analyze':

{{ $json }}", options: "[object Object]"
9. **Slack Alert** `slack` — channel/topic: `#alerts`
10. **Text Splitter** `textSplitterCharacterTextSplitter` — chunkSize: "400", chunkOverlap: "40"
11. **Window Memory** `memoryBufferWindow` — configured for its default action.
12. **Append Sheet** `googleSheets` — operation: **append**
13. **Embeddings** `embeddingsOpenAi` — model: `text-embedding-3-small`
  
  ## 💡 AI-Powered Ideas for Improvement
  ### Explain
This n8n workflow automates the analysis of survey data. It begins by receiving survey data through a webhook trigger. The data is split into manageable chunks and converted into embeddings using OpenAI's API. These embeddings are stored in a Pinecone vector database for future queries. The workflow then uses a RAG (Retrieval-Augmented Generation) agent to process the survey data and generate insights. The results are appended to a Google Sheet, and any errors trigger a Slack alert to keep the team informed.

### Demonstrate
A business owner could use this workflow to automate the analysis of customer feedback surveys. By processing the data automatically, they can quickly gain insights into customer satisfaction and identify trends without manual analysis.

### Imitate
1. Import the workflow into n8n.
2. Set up a webhook to receive survey data.
3. Connect OpenAI and Pinecone accounts.
4. Configure Google Sheets to store results.
5. Test the workflow by submitting sample survey data.

### Practice
Create a test survey with dummy data. Run the workflow to see how it processes and stores the data. Experiment by changing some survey responses and observe how the insights change in the Google Sheet.

### WIIFM
Mastering this workflow allows you to offer automated data analysis services. This can enhance your value proposition to clients, streamline their operations, and open new revenue streams in AI-driven data insights.
  
  ## 🔧 Setup Instructions
  1. **Connect Credentials:** openAiApi, pineconeApi, googleSheetsOAuth2Api, slackApi.
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
  