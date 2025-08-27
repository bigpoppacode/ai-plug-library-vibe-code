# Local Attraction Recommender
  ## 🚀 What It Does
  Moves data between apps and a **database/spreadsheet**, with logic and optional AI steps.
  
  ## 💼 Business Use Case
  Ideal for **lead intake**, **enrichment**, and **CRM updates** with alerts to the right channel.
  
  ## ⚙️ How It Works
  1. **Trigger:** This workflow starts with **Sticky**.
  2. **Sticky** `stickyNote` — content: "## Local Attraction Recommender", height: "520", width: "1100"
3. **Webhook** `webhook` — method: **POST**, path: `/local_attraction_recommender`
4. **Insert** `vectorStorePinecone` — mode: "insert", indexName: "local_attraction_recommender"
5. **Query** `vectorStorePinecone` — indexName: "local_attraction_recommender"
6. **Tool** `toolVectorStore` — name: "Pinecone"
7. **Chat** `lmChatAnthropic` — configured for its default action.
8. **Agent** `agent` — promptType: "define", text: "={{ $json }}"
9. **Splitter** `textSplitterCharacterTextSplitter` — chunkSize: "400", chunkOverlap: "40"
10. **Memory** `memoryBufferWindow` — configured for its default action.
11. **Sheet** `googleSheets` — operation: **append**
12. **Embeddings** `embeddingsCohere` — model: `default`
  
  ## 💡 AI-Powered Ideas for Improvement
  ### Explain
This n8n workflow is designed to recommend local attractions based on user input. It begins with a webhook that receives user data and processes it to identify relevant attractions stored in a Pinecone vector database. The workflow uses AI models to generate recommendations and append them to a Google Sheet for logging purposes.

### Demonstrate
A travel consultant could use this workflow to offer personalized recommendations for tourists visiting a new city, enhancing customer satisfaction and potentially increasing repeat business.

### Imitate
1. Import the workflow into n8n.
2. Set up a webhook to receive user input.
3. Connect Pinecone and configure to store attraction data.
4. Use AI models to process input and generate recommendations.
5. Log outputs in Google Sheets for tracking.

### Practice
Create a small dataset of local attractions with descriptions. Set up the workflow to test by inputting various user preferences and observing how the recommendations vary. Adjust the AI model parameters to refine the results.

### WIIFM
Mastering this workflow enables you to offer tailored recommendation services, adding significant value to tourism businesses. This can attract more clients and generate additional income streams in your automation business through enhanced customer engagement and satisfaction.
  
  ## 🔧 Setup Instructions
  1. **Connect Credentials:** cohereApi, pineconeApi, anthropicApi, googleSheetsOAuth2Api.
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
  