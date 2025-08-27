# Social Buzz Heatmap
  ## 🚀 What It Does
  Moves data between apps and a **database/spreadsheet**, with logic and optional AI steps.
  
  ## 💼 Business Use Case
  Ideal for **lead intake**, **enrichment**, and **CRM updates** with alerts to the right channel.
  
  ## ⚙️ How It Works
  1. **Trigger:** This workflow starts with **Sticky**.
  2. **Sticky** `stickyNote` — content: "## Social Buzz Heatmap", height: "520", width: "1100"
3. **Webhook** `webhook` — method: **POST**, path: `/social_buzz_heatmap`
4. **Insert** `vectorStoreSupabase` — mode: "insert", indexName: "social_buzz_heatmap"
5. **Query** `vectorStoreSupabase` — indexName: "social_buzz_heatmap"
6. **Tool** `toolVectorStore` — name: "Supabase"
7. **Chat** `lmChatHf` — configured for its default action.
8. **Agent** `agent` — promptType: "define", text: "={{ $json }}"
9. **Splitter** `textSplitterCharacterTextSplitter` — chunkSize: "400", chunkOverlap: "40"
10. **Memory** `memoryBufferWindow` — configured for its default action.
11. **Sheet** `googleSheets` — operation: **append**
12. **Embeddings** `embeddingsOpenAi` — model: `default`
  
  ## 💡 AI-Powered Ideas for Improvement
  ### Explain
This n8n workflow, titled "Social Buzz Heatmap," automates the process of collecting, analyzing, and storing social media data. It begins with a webhook that receives social media content, which is then split into manageable chunks. These chunks are converted into embeddings for semantic analysis, stored in a vector database (Supabase), and queried for insights. The results are processed by an AI agent and logged into Google Sheets for further review.

### Demonstrate
A business owner could use this workflow to monitor brand mentions on social media, analyze trends, and store the data for strategic marketing decisions, enhancing their brand's online presence and customer engagement.

### Imitate
1. Import the workflow into n8n.
2. Connect your Supabase and Google Sheets accounts.
3. Set up the webhook to receive social media data.
4. Customize the Google Sheet and Supabase settings as needed.
5. Test the workflow to ensure it logs and analyzes data correctly.

### Practice
Create a test social media post dataset and run the workflow. Observe how it processes, analyzes, and logs the data. Adjust parameters like chunk size and embeddings to see how they affect the results.

### WIIFM
Mastering this workflow enables you to offer social media analysis services, helping clients improve their online strategies. This can lead to new business opportunities and increased revenue in the AI automation sector.
  
  ## 🔧 Setup Instructions
  1. **Connect Credentials:** openAiApi, supabaseApi, huggingFaceApi, googleSheetsOAuth2Api.
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
  