# Mailchimp Campaign Tracking
  ## 🚀 What It Does
  Monitors events, processes them, and **notifies** people/apps (Slack/Email) with structured updates.
  
  ## 💼 Business Use Case
  Ideal for **lead intake**, **enrichment**, and **CRM updates** with alerts to the right channel.
  
  ## ⚙️ How It Works
  1. **Trigger:** This workflow starts with **Sticky Note**.
  2. **Sticky Note** `stickyNote` — content: "Placeholder for Mailchimp Campaign Tracking", height: "530", width: "1100"
3. **Webhook Trigger** `webhook` — method: **POST**, path: `/mailchimp-campaign-tracking`
4. **Supabase Insert** `vectorStoreSupabase` — mode: "insert", options: "[object Object]", indexName: "mailchimp_campaign_tracking"
5. **Supabase Query** `vectorStoreSupabase` — indexName: "mailchimp_campaign_tracking"
6. **Vector Tool** `toolVectorStore` — name: "Supabase", description: "Vector context"
7. **Chat Model** `lmChatAnthropic` — options: "[object Object]"
8. **RAG Agent** `agent` — promptType: "define", text: "Handle data", options: "[object Object]"
9. **Slack Alert** `slack` — channel/topic: `#alerts`
10. **Text Splitter** `textSplitterCharacterTextSplitter` — chunkSize: "400", chunkOverlap: "40"
11. **Window Memory** `memoryBufferWindow` — configured for its default action.
12. **Append Sheet** `googleSheets` — operation: **append**
13. **Embeddings** `embeddingsOpenAi` — model: `text-embedding-3-small`
  
  ## 💡 AI-Powered Ideas for Improvement
  **Explain**  
This n8n workflow automates the tracking of Mailchimp campaigns. It starts with a webhook that receives campaign data, splits text for processing, and creates embeddings. The data is then stored in Supabase, queried for context, and analyzed using a RAG agent. Any errors trigger a Slack alert, and results are appended to a Google Sheet.

**Demonstrate**  
A marketing consultant could use this workflow to track and analyze Mailchimp campaign performance. It helps in understanding campaign effectiveness, automating data storage, and ensuring quick response to any issues, thus improving campaign management and client reporting.

**Imitate**  
1. Import the workflow into n8n.  
2. Set up a webhook in Mailchimp to POST data to `/mailchimp-campaign-tracking`.  
3. Connect Supabase, Slack, and Google Sheets accounts to n8n.  
4. Customize the Supabase and Google Sheets nodes with your specific database and sheet details.  
5. Test the workflow to ensure it captures and processes data as expected.

**Practice**  
Create a test Mailchimp campaign and set up the webhook to send data to your n8n workflow. Check how the data flows through each node, observe the processing in Supabase, and ensure the final results appear in your Google Sheet. Modify campaign data to see how the workflow handles different inputs.

**WIIFM**  
Mastering this workflow enables you to offer advanced email campaign tracking and analysis services. This can attract more clients looking for data-driven marketing solutions, enhance your service portfolio, and potentially increase your income by providing valuable insights and automation to businesses.
  
  ## 🔧 Setup Instructions
  1. **Connect Credentials:** openAiApi, supabaseApi, anthropicApi, googleSheetsOAuth2Api, slackApi.
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
  