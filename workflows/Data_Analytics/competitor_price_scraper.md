# Competitor Price Scraper
  ## 🚀 What It Does
  Monitors events, processes them, and **notifies** people/apps (Slack/Email) with structured updates.
  
  ## 💼 Business Use Case
  Ideal for **lead intake**, **enrichment**, and **CRM updates** with alerts to the right channel.
  
  ## ⚙️ How It Works
  1. **Trigger:** This workflow starts with **Sticky Note**.
  2. **Sticky Note** `stickyNote` — content: "Automated workflow: Competitor Price Scraper", height: "530", width: "1100"
3. **Webhook Trigger** `webhook` — method: **POST**, path: `/competitor-price-scraper`
4. **Supabase Insert** `vectorStoreSupabase` — mode: "insert", options: "[object Object]", indexName: "competitor_price_scraper"
5. **Supabase Query** `vectorStoreSupabase` — indexName: "competitor_price_scraper"
6. **Vector Tool** `toolVectorStore` — name: "Supabase", description: "Vector context"
7. **Chat Model** `lmChatAnthropic` — options: "[object Object]"
8. **RAG Agent** `agent` — promptType: "define", text: "Process the following data for task 'Competitor Price Scraper':

{{ $json }}", options: "[object Object]"
9. **Slack Alert** `slack` — channel/topic: `#alerts`
10. **Text Splitter** `textSplitterCharacterTextSplitter` — chunkSize: "400", chunkOverlap: "40"
11. **Window Memory** `memoryBufferWindow` — configured for its default action.
12. **Append Sheet** `googleSheets` — operation: **append**
13. **Embeddings** `embeddingsOpenAi` — model: `text-embedding-3-small`
  
  ## 💡 AI-Powered Ideas for Improvement
  **Explain:**  
This n8n workflow is designed to automate the process of scraping competitor prices. It begins with receiving data through a webhook, which is then processed and split into manageable chunks. The data is embedded using OpenAI's embedding model and stored in a Supabase database. The workflow queries the database for relevant data and uses an AI model to process and generate insights. Finally, results are appended to a Google Sheet, and any errors trigger a Slack alert.

**Demonstrate:**  
A retail business owner could use this workflow to regularly monitor competitor pricing. This information helps in adjusting their own prices to remain competitive, ultimately boosting sales and market presence.

**Imitate:**  
1. Import the workflow in n8n.
2. Set up the Webhook Trigger to receive competitor data.
3. Connect your Supabase and OpenAI accounts.
4. Configure the Google Sheets node with your sheet details.
5. Test the workflow with sample data to ensure it functions correctly.

**Practice:**  
Create a sample Google Sheet and run the workflow using test data. Observe how the data moves through each step and is logged in the sheet. Adjust some parameters to see how it affects the output.

**WIIFM:**  
Mastering this workflow allows you to offer a valuable service to businesses needing competitive analysis, enhancing your service offerings and potentially increasing your client base and revenue.
  
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
  