# In‑game Event Reminder
  ## 🚀 What It Does
  Moves data between apps and a **database/spreadsheet**, with logic and optional AI steps.
  
  ## 💼 Business Use Case
  Ideal for **lead intake**, **enrichment**, and **CRM updates** with alerts to the right channel.
  
  ## ⚙️ How It Works
  1. **Trigger:** This workflow starts with **Sticky**.
  2. **Sticky** `stickyNote` — content: "## In‑Game Event Reminder", height: "520", width: "1100"
3. **Webhook** `webhook` — method: **POST**, path: `/in‑game_event_reminder`
4. **Insert** `vectorStoreSupabase` — mode: "insert", indexName: "in‑game_event_reminder"
5. **Query** `vectorStoreSupabase` — indexName: "in‑game_event_reminder"
6. **Tool** `toolVectorStore` — name: "Supabase"
7. **Chat** `lmChatAnthropic` — configured for its default action.
8. **Agent** `agent` — promptType: "define", text: "={{ $json }}"
9. **Splitter** `textSplitterCharacterTextSplitter` — chunkSize: "400", chunkOverlap: "40"
10. **Memory** `memoryBufferWindow` — configured for its default action.
11. **Sheet** `googleSheets` — operation: **append**
12. **Embeddings** `embeddingsOpenAi` — model: `default`
  
  ## 💡 AI-Powered Ideas for Improvement
  ### Explain
This n8n workflow is designed to manage and remind users of in-game events. It starts by receiving event details through a webhook. The data is then processed and stored in a Supabase vector store for retrieval. The workflow uses AI to analyze and generate responses, which are then logged in a Google Sheet. This ensures efficient organization and tracking of game events.

### Demonstrate
A game developer could use this workflow to automate reminders for special in-game events, ensuring players are notified and engaged, which can increase player retention and satisfaction.

### Imitate
1. Import the workflow into n8n.
2. Set up a webhook to receive event data.
3. Connect to Supabase and Google Sheets.
4. Configure the AI nodes with your desired prompts.
5. Test the workflow with sample event data to ensure it logs correctly.

### Practice
Create a mock in-game event and use the workflow to process and log the event details. Adjust the data and AI prompts to see how changes affect the output, ensuring you understand each part of the workflow.

### WIIFM
Mastering this workflow allows you to offer automated event management solutions to game developers, enhancing player engagement and retention. This skill can expand your service offerings and increase your revenue potential in the gaming industry.
  
  ## 🔧 Setup Instructions
  1. **Connect Credentials:** openAiApi, supabaseApi, anthropicApi, googleSheetsOAuth2Api.
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
  