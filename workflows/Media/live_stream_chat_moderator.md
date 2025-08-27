# Live Stream Chat Moderator
  ## 🚀 What It Does
  Moves data between apps and a **database/spreadsheet**, with logic and optional AI steps.
  
  ## 💼 Business Use Case
  Ideal for **lead intake**, **enrichment**, and **CRM updates** with alerts to the right channel.
  
  ## ⚙️ How It Works
  1. **Trigger:** This workflow starts with **Sticky**.
  2. **Sticky** `stickyNote` — content: "## Live Stream Chat Moderator", height: "520", width: "1100"
3. **Webhook** `webhook` — method: **POST**, path: `/live_stream_chat_moderator`
4. **Insert** `vectorStoreSupabase` — mode: "insert", indexName: "live_stream_chat_moderator"
5. **Query** `vectorStoreSupabase` — indexName: "live_stream_chat_moderator"
6. **Tool** `toolVectorStore` — name: "Supabase"
7. **Chat** `lmChatAnthropic` — configured for its default action.
8. **Agent** `agent` — promptType: "define", text: "={{ $json }}"
9. **Splitter** `textSplitterCharacterTextSplitter` — chunkSize: "400", chunkOverlap: "40"
10. **Memory** `memoryBufferWindow` — configured for its default action.
11. **Sheet** `googleSheets` — operation: **append**
12. **Embeddings** `embeddingsOpenAi` — model: `default`
  
  ## 💡 AI-Powered Ideas for Improvement
  **Explain:**  
This n8n workflow is designed to moderate live stream chats. It begins with a webhook that receives chat messages. These messages are split and converted into embeddings using OpenAI, then stored in a Supabase vector store. The workflow queries the vector store to analyze chat content, and an AI agent generates responses. All interactions are logged in a Google Sheet for review.

**Demonstrate:**  
A streamer could use this workflow to automatically moderate chat during live streams, filtering out inappropriate messages and providing timely responses to viewers, enhancing viewer engagement and maintaining a positive chat environment.

**Imitate:**  
1. Import the workflow into n8n.
2. Connect your Supabase and Google Sheets accounts.
3. Configure the webhook to receive chat messages.
4. Customize the AI agent's prompts to suit your moderation needs.
5. Test the workflow to ensure it logs and moderates correctly.

**Practice:**  
Create a test environment where you simulate chat messages being sent to the webhook. Observe how the workflow processes these messages and logs the results in Google Sheets. Adjust the AI prompts to see how it affects moderation.

**WIIFM:**  
Mastering this workflow enables you to offer automated chat moderation services, improving live stream quality for clients. This can lead to increased viewer satisfaction, higher client retention, and potential income from offering advanced AI moderation solutions.
  
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
  