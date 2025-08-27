# Unsplash To Pinterest
  ## 🚀 What It Does
  Monitors events, processes them, and **notifies** people/apps (Slack/Email) with structured updates.
  
  ## 💼 Business Use Case
  Ideal for **lead intake**, **enrichment**, and **CRM updates** with alerts to the right channel.
  
  ## ⚙️ How It Works
  1. **Trigger:** This workflow starts with **Sticky Note**.
  2. **Sticky Note** `stickyNote` — content: "Automated workflow: Unsplash to Pinterest", height: "530", width: "1100"
3. **Webhook Trigger** `webhook` — method: **POST**, path: `/unsplash-to-pinterest`
4. **Supabase Insert** `vectorStoreSupabase` — mode: "insert", options: "[object Object]", indexName: "unsplash_to_pinterest"
5. **Supabase Query** `vectorStoreSupabase` — indexName: "unsplash_to_pinterest"
6. **Vector Tool** `toolVectorStore` — name: "Supabase", description: "Vector context"
7. **Chat Model** `lmChatOpenAi` — options: "[object Object]"
8. **RAG Agent** `agent` — promptType: "define", text: "Process the following data for task 'Unsplash to Pinterest':

{{ $json }}", options: "[object Object]"
9. **Slack Alert** `slack` — channel/topic: `#alerts`
10. **Text Splitter** `textSplitterCharacterTextSplitter` — chunkSize: "400", chunkOverlap: "40"
11. **Window Memory** `memoryBufferWindow` — configured for its default action.
12. **Append Sheet** `googleSheets` — operation: **append**
13. **Embeddings** `embeddingsCohere` — model: `embed-english-v3.0`
  
  ## 💡 AI-Powered Ideas for Improvement
  **Explain:**  
This n8n workflow automates the process of handling and processing image data from Unsplash to be posted on Pinterest. It starts by receiving data through a Webhook Trigger, processes it using various nodes like Supabase for data storage and retrieval, text splitting, and embedding creation. The workflow then utilizes a Chat Model and RAG Agent to process and understand the data context. If any errors occur, a Slack alert is sent. Finally, it logs results in Google Sheets for record-keeping.

**Demonstrate:**  
A social media manager could use this workflow to automate the posting of curated Unsplash images to Pinterest, saving time on manually selecting and posting content.

**Imitate:**  
1. Set up a Webhook in n8n to receive image data.
2. Connect Supabase for data storage.
3. Configure text processing and embedding nodes.
4. Set up a Chat Model and RAG Agent for data processing.
5. Log results in Google Sheets and set up Slack alerts for errors.

**Practice:**  
Create a simple workflow that receives data from a form submission, processes it with an AI tool, and logs the output to a Google Sheet. Test it with sample data to see the process in action.

**WIIFM:**  
Mastering this workflow can enhance your ability to automate content curation and posting, reducing manual tasks and opening opportunities for offering automation services to clients, thereby increasing your business value and income potential.
  
  ## 🔧 Setup Instructions
  1. **Connect Credentials:** cohereApi, supabaseApi, openAiApi, googleSheetsOAuth2Api, slackApi.
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
  