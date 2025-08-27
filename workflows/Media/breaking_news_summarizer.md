# Breaking News Summarizer
  ## 🚀 What It Does
  Moves data between apps and a **database/spreadsheet**, with logic and optional AI steps.
  
  ## 💼 Business Use Case
  Ideal for **lead intake**, **enrichment**, and **CRM updates** with alerts to the right channel.
  
  ## ⚙️ How It Works
  1. **Trigger:** This workflow starts with **Sticky**.
  2. **Sticky** `stickyNote` — content: "## Breaking News Summarizer", height: "520", width: "1100"
3. **Webhook** `webhook` — method: **POST**, path: `/breaking_news_summarizer`
4. **Insert** `vectorStoreWeaviate` — mode: "insert", indexName: "breaking_news_summarizer"
5. **Query** `vectorStoreWeaviate` — indexName: "breaking_news_summarizer"
6. **Tool** `toolVectorStore` — name: "Weaviate"
7. **Chat** `lmChatOpenAi` — configured for its default action.
8. **Agent** `agent` — promptType: "define", text: "={{ $json }}"
9. **Splitter** `textSplitterCharacterTextSplitter` — chunkSize: "400", chunkOverlap: "40"
10. **Memory** `memoryBufferWindow` — configured for its default action.
11. **Sheet** `googleSheets` — operation: **append**
12. **Embeddings** `embeddingsHuggingFace` — model: `default`
  
  ## 💡 AI-Powered Ideas for Improvement
  **Explain:**  
This n8n workflow is designed to summarize breaking news articles. It starts with a Webhook that receives news content, which is then split into manageable chunks. These chunks are converted into embeddings using a Hugging Face model and stored in a Weaviate vector database. A query is made to retrieve relevant information, which is processed with OpenAI's Chat model to generate a summary. The summary is then logged into Google Sheets for record-keeping.

**Demonstrate:**  
A news agency could use this workflow to quickly generate concise summaries of lengthy news articles, improving editorial efficiency and allowing them to publish digestible content faster.

**Imitate:**  
1. Import the workflow into n8n.  
2. Set up the Webhook to receive news content.  
3. Configure connections to Weaviate, Hugging Face, and OpenAI.  
4. Ensure Google Sheets is set up for logging summaries.  
5. Test the workflow with sample news articles.

**Practice:**  
Create a test news article in a text document. Use the Webhook to send this text through the workflow and observe how it is summarized and logged in Google Sheets. Adjust chunk sizes or overlap to see how it affects the summary.

**WIIFM:**  
Mastering this workflow enables you to offer automated content summarization services, which can save businesses time and resources. This capability can be a valuable addition to a content agency's offerings, attracting more clients and increasing revenue streams.
  
  ## 🔧 Setup Instructions
  1. **Connect Credentials:** huggingFaceApi, weaviateApi, openAiApi, googleSheetsOAuth2Api.
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
  