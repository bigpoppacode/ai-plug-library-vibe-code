# Adas Event Annotator
  ## 🚀 What It Does
  Moves data between apps and a **database/spreadsheet**, with logic and optional AI steps.
  
  ## 💼 Business Use Case
  Ideal for **lead intake**, **enrichment**, and **CRM updates** with alerts to the right channel.
  
  ## ⚙️ How It Works
  1. **Trigger:** This workflow starts with **Sticky**.
  2. **Sticky** `stickyNote` — content: "## ADAS Event Annotator", height: "520", width: "1100"
3. **Webhook** `webhook` — method: **POST**, path: `/adas_event_annotator`
4. **Insert** `vectorStoreSupabase` — mode: "insert", indexName: "adas_event_annotator"
5. **Query** `vectorStoreSupabase` — indexName: "adas_event_annotator"
6. **Tool** `toolVectorStore` — name: "Supabase"
7. **Chat** `lmChatOpenAi` — configured for its default action.
8. **Agent** `agent` — promptType: "define", text: "={{ $json }}"
9. **Splitter** `textSplitterCharacterTextSplitter` — chunkSize: "400", chunkOverlap: "40"
10. **Memory** `memoryBufferWindow` — configured for its default action.
11. **Sheet** `googleSheets` — operation: **append**
12. **Embeddings** `embeddingsCohere` — model: `default`
  
  ## 💡 AI-Powered Ideas for Improvement
  **Explain:**  
This workflow is designed to annotate ADAS (Advanced Driver Assistance Systems) events. It starts by receiving data through a webhook, then processes this data by splitting it into manageable chunks and embedding it for context. The data is stored and queried in a Supabase vector store, utilizing AI to provide annotations. Finally, the annotated data is logged in a Google Sheet.

**Demonstrate:**  
A car manufacturer could use this workflow to analyze driving data collected from vehicles, helping to improve safety features by understanding and annotating driving events in real-time.

**Imitate:**  
1. Set up n8n and import the workflow.
2. Connect your Supabase and Google Sheets accounts.
3. Configure the webhook endpoint to receive ADAS data.
4. Adjust the chunk size in the Splitter node if needed.
5. Test the workflow by sending sample data to the webhook.

**Practice:**  
Create a simple test where you send mock ADAS event data to the webhook. Observe how the data is processed, annotated, and logged into the Google Sheet. Adjust parameters and test different data inputs for varied results.

**WIIFM:**  
Mastering this workflow allows you to offer advanced data annotation services to automotive companies, enhancing their product safety features. This can open doors to lucrative contracts and expand your automation business into the automotive industry.
  
  ## 🔧 Setup Instructions
  1. **Connect Credentials:** cohereApi, supabaseApi, openAiApi, googleSheetsOAuth2Api.
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
  