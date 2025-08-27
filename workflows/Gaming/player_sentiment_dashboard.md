# Player Sentiment Dashboard
  ## 🚀 What It Does
  Moves data between apps and a **database/spreadsheet**, with logic and optional AI steps.
  
  ## 💼 Business Use Case
  Ideal for **lead intake**, **enrichment**, and **CRM updates** with alerts to the right channel.
  
  ## ⚙️ How It Works
  1. **Trigger:** This workflow starts with **Sticky**.
  2. **Sticky** `stickyNote` — content: "## Player Sentiment Dashboard", height: "520", width: "1100"
3. **Webhook** `webhook` — method: **POST**, path: `/player_sentiment_dashboard`
4. **Insert** `vectorStoreSupabase` — mode: "insert", indexName: "player_sentiment_dashboard"
5. **Query** `vectorStoreSupabase` — indexName: "player_sentiment_dashboard"
6. **Tool** `toolVectorStore` — name: "Supabase"
7. **Chat** `lmChatAnthropic` — configured for its default action.
8. **Agent** `agent` — promptType: "define", text: "={{ $json }}"
9. **Splitter** `textSplitterCharacterTextSplitter` — chunkSize: "400", chunkOverlap: "40"
10. **Memory** `memoryBufferWindow` — configured for its default action.
11. **Sheet** `googleSheets` — operation: **append**
12. **Embeddings** `embeddingsHuggingFace` — model: `default`
  
  ## 💡 AI-Powered Ideas for Improvement
  **Explain:**  
This workflow is designed to create a "Player Sentiment Dashboard" by collecting data through a webhook, processing it, and storing it in a Supabase vector database. It uses AI to analyze player sentiment, stores results in a Google Sheet, and can be queried for insights. The workflow involves splitting text data, generating embeddings, and using AI for sentiment analysis before storing and logging results.

**Demonstrate:**  
A game development company could use this workflow to gather and analyze player feedback, helping them understand player sentiment and improve game features based on data-driven insights.

**Imitate:**  
1. Import the workflow into n8n.
2. Connect your Supabase and Google Sheets accounts.
3. Set up a POST request to the webhook path.
4. Customize the vector index and Google Sheet to match your data needs.
5. Test the workflow with sample data to ensure it logs correctly.

**Practice:**  
Create a test webhook and send sample player feedback data. Check how the workflow processes and logs this data in the Google Sheet. Experiment by tweaking the AI analysis criteria to see different sentiment outcomes.

**WIIFM:**  
Mastering this workflow allows you to offer valuable sentiment analysis services, helping businesses make data-driven decisions. This capability can attract clients seeking to enhance customer experience and engagement, thereby expanding your automation service offerings and increasing your revenue potential.
  
  ## 🔧 Setup Instructions
  1. **Connect Credentials:** huggingFaceApi, supabaseApi, anthropicApi, googleSheetsOAuth2Api.
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
  