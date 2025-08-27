# Drink Water Reminder
  ## 🚀 What It Does
  Monitors events, processes them, and **notifies** people/apps (Slack/Email) with structured updates.
  
  ## 💼 Business Use Case
  Ideal for **lead intake**, **enrichment**, and **CRM updates** with alerts to the right channel.
  
  ## ⚙️ How It Works
  1. **Trigger:** This workflow starts with **Sticky Note**.
  2. **Sticky Note** `stickyNote` — content: "Automated workflow: Drink Water Reminder", height: "530", width: "1100"
3. **Webhook Trigger** `webhook` — method: **POST**, path: `/drink-water-reminder`
4. **Supabase Insert** `vectorStoreSupabase` — mode: "insert", options: "[object Object]", indexName: "drink_water_reminder"
5. **Supabase Query** `vectorStoreSupabase` — indexName: "drink_water_reminder"
6. **Vector Tool** `toolVectorStore` — name: "Supabase", description: "Vector context"
7. **Chat Model** `lmChatOpenAi` — options: "[object Object]"
8. **RAG Agent** `agent` — promptType: "define", text: "Process the following data for task 'Drink Water Reminder':

{{ $json }}", options: "[object Object]"
9. **Slack Alert** `slack` — channel/topic: `#alerts`
10. **Text Splitter** `textSplitterCharacterTextSplitter` — chunkSize: "400", chunkOverlap: "40"
11. **Window Memory** `memoryBufferWindow` — configured for its default action.
12. **Append Sheet** `googleSheets` — operation: **append**
13. **Embeddings** `embeddingsOpenAi` — model: `text-embedding-3-small`
  
  ## 💡 AI-Powered Ideas for Improvement
  **Explain:**  
This n8n workflow is designed to send reminders to drink water. It starts with a webhook trigger that receives data, processes it by splitting text and creating embeddings, and stores the information in a Supabase database. It uses AI to generate a response and logs this into a Google Sheet. If an error occurs, it sends an alert to a Slack channel.

**Demonstrate:**  
A business could use this workflow to remind employees to stay hydrated throughout the day, promoting health and productivity. It automates the process of sending personalized reminders based on stored data.

**Imitate:**  
1. Import the workflow into n8n.  
2. Connect your Supabase, OpenAI, Google Sheets, and Slack accounts.  
3. Set up a webhook to trigger the workflow.  
4. Customize the Google Sheet and Slack channel for logging and alerts.  
5. Test the workflow by sending a POST request to the webhook.

**Practice:**  
Create a test webhook and send a request to trigger the workflow. Check how the data is processed and stored in Supabase and Google Sheets, and observe any Slack alerts for errors. Adjust parameters to see different outputs.

**WIIFM:**  
Mastering this workflow can help you offer health and wellness automation services to companies, enhancing employee well-being. This service can increase your business value and open new revenue streams in the automation industry.
  
  ## 🔧 Setup Instructions
  1. **Connect Credentials:** openAiApi, supabaseApi, googleSheetsOAuth2Api, slackApi.
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
  