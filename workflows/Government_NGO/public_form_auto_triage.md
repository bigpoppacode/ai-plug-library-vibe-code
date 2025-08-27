# Public Form Auto Triage
  ## 🚀 What It Does
  Monitors events, processes them, and **notifies** people/apps (Slack/Email) with structured updates.
  
  ## 💼 Business Use Case
  Ideal for **lead intake**, **enrichment**, and **CRM updates** with alerts to the right channel.
  
  ## ⚙️ How It Works
  1. **Trigger:** This workflow starts with **Sticky Note**.
  2. **Sticky Note** `stickyNote` — content: "Automated workflow: Public Form Auto Triage", height: "530", width: "1100"
3. **Webhook Trigger** `webhook` — method: **POST**, path: `/public-form-auto-triage`
4. **Supabase Insert** `vectorStoreSupabase` — mode: "insert", options: "[object Object]", indexName: "public_form_auto_triage"
5. **Supabase Query** `vectorStoreSupabase` — indexName: "public_form_auto_triage"
6. **Vector Tool** `toolVectorStore` — name: "Supabase", description: "Vector context"
7. **Chat Model** `lmChatAnthropic` — options: "[object Object]"
8. **RAG Agent** `agent` — promptType: "define", text: "Process the following data for task 'Public Form Auto Triage':

{{ $json }}", options: "[object Object]"
9. **Slack Alert** `slack` — channel/topic: `#alerts`
10. **Text Splitter** `textSplitterCharacterTextSplitter` — chunkSize: "400", chunkOverlap: "40"
11. **Window Memory** `memoryBufferWindow` — configured for its default action.
12. **Append Sheet** `googleSheets` — operation: **append**
13. **Embeddings** `embeddingsCohere` — model: `embed-english-v3.0`
  
  ## 💡 AI-Powered Ideas for Improvement
  **Explain:**  
This n8n workflow automates the process of handling public form submissions by analyzing and categorizing the data. It starts with a webhook that receives form data, splits the text, and creates embeddings for semantic analysis. The data is then stored in a Supabase vector database. An AI model processes the data, and the results are logged into a Google Sheet. If errors occur, alerts are sent to Slack.

**Demonstrate:**  
A business owner uses this workflow to automatically categorize customer feedback from a public form, store insights in a database, and log results into a spreadsheet for easy access, improving efficiency and data management.

**Imitate:**  
1. Import the workflow into n8n.  
2. Set up a webhook to receive form submissions.  
3. Connect to Supabase for data storage.  
4. Configure AI processing and Google Sheets logging.  
5. Test the workflow with sample data.

**Practice:**  
Create a sample form and use the workflow to categorize responses. Check the Google Sheet for logs and simulate an error to see how the Slack alert works.

**WIIFM:**  
Mastering this workflow enables you to offer automated data processing services to clients, enhancing their decision-making and operational efficiency. This can boost your business by increasing service offerings and client satisfaction.
  
  ## 🔧 Setup Instructions
  1. **Connect Credentials:** cohereApi, supabaseApi, anthropicApi, googleSheetsOAuth2Api, slackApi.
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
  