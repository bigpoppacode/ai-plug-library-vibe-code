# Quality Defect Classifier
  ## 🚀 What It Does
  Moves data between apps and a **database/spreadsheet**, with logic and optional AI steps.
  
  ## 💼 Business Use Case
  Ideal for **lead intake**, **enrichment**, and **CRM updates** with alerts to the right channel.
  
  ## ⚙️ How It Works
  1. **Trigger:** This workflow starts with **Sticky**.
  2. **Sticky** `stickyNote` — content: "## Quality Defect Classifier", height: "520", width: "1100"
3. **Webhook** `webhook` — method: **POST**, path: `/quality_defect_classifier`
4. **Insert** `vectorStoreRedis` — mode: "insert", indexName: "quality_defect_classifier"
5. **Query** `vectorStoreRedis` — indexName: "quality_defect_classifier"
6. **Tool** `toolVectorStore` — name: "Redis"
7. **Chat** `lmChatAnthropic` — configured for its default action.
8. **Agent** `agent` — promptType: "define", text: "={{ $json }}"
9. **Splitter** `textSplitterCharacterTextSplitter` — chunkSize: "400", chunkOverlap: "40"
10. **Memory** `memoryBufferWindow` — configured for its default action.
11. **Sheet** `googleSheets` — operation: **append**
12. **Embeddings** `embeddingsOpenAi` — model: `default`
  
  ## 💡 AI-Powered Ideas for Improvement
  ### Explain
This n8n workflow is designed to classify quality defects in a manufacturing process. It starts by receiving data via a webhook, then processes the data by splitting it into manageable chunks. These chunks are converted into embeddings using OpenAI, which are then stored in a Redis vector store for classification. The workflow uses AI to analyze and classify the defects, storing the results in a Google Sheet for record-keeping and further analysis.

### Demonstrate
A manufacturing company could use this workflow to automatically classify defects in their products, improving quality control and reducing manual inspection time. This ensures faster response times and more consistent quality assurance.

### Imitate
1. Import the workflow into n8n.
2. Set up the webhook to receive defect data.
3. Connect OpenAI and Redis accounts.
4. Configure the Google Sheet for logging results.
5. Test the workflow with sample defect data to ensure proper classification and logging.

### Practice
Create a sample dataset of product defects and run the workflow to see how it classifies and logs the results. Adjust the AI model parameters to improve classification accuracy.

### WIIFM
Mastering this workflow allows you to offer automated defect classification services to manufacturing clients, enhancing their quality control processes. This can lead to increased efficiency, reduced costs, and a new revenue stream for your automation business.
  
  ## 🔧 Setup Instructions
  1. **Connect Credentials:** openAiApi, redisApi, anthropicApi, googleSheetsOAuth2Api.
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
  