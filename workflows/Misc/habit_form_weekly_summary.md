# Habit Form Weekly Summary
  ## 🚀 What It Does
  Monitors events, processes them, and **notifies** people/apps (Slack/Email) with structured updates.
  
  ## 💼 Business Use Case
  Ideal for **lead intake**, **enrichment**, and **CRM updates** with alerts to the right channel.
  
  ## ⚙️ How It Works
  1. **Trigger:** This workflow starts with **Sticky Note**.
  2. **Sticky Note** `stickyNote` — content: "Automated workflow: Habit Form Weekly Summary", height: "530", width: "1100"
3. **Webhook Trigger** `webhook` — method: **POST**, path: `/habit-form-weekly-summary`
4. **Supabase Insert** `vectorStoreSupabase` — mode: "insert", options: "[object Object]", indexName: "habit_form_weekly_summary"
5. **Supabase Query** `vectorStoreSupabase` — indexName: "habit_form_weekly_summary"
6. **Vector Tool** `toolVectorStore` — name: "Supabase", description: "Vector context"
7. **Chat Model** `lmChatOpenAi` — options: "[object Object]"
8. **RAG Agent** `agent` — promptType: "define", text: "Process the following data for task 'Habit Form Weekly Summary':

{{ $json }}", options: "[object Object]"
9. **Slack Alert** `slack` — channel/topic: `#alerts`
10. **Text Splitter** `textSplitterCharacterTextSplitter` — chunkSize: "400", chunkOverlap: "40"
11. **Window Memory** `memoryBufferWindow` — configured for its default action.
12. **Append Sheet** `googleSheets` — operation: **append**
13. **Embeddings** `embeddingsOpenAi` — model: `text-embedding-3-small`
  
  ## 💡 AI-Powered Ideas for Improvement
  **Explain**  
This workflow automates the process of creating a weekly summary of habit formation data. It starts by receiving input through a webhook, processes the data using various tools like Supabase for database operations and OpenAI for text processing, and finally logs the results in Google Sheets. If any errors occur, it sends an alert to a Slack channel.

**Demonstrate**  
A business owner could use this workflow to automatically compile weekly summaries of team productivity or health habits, helping to track progress and identify areas for improvement.

**Imitate**  
1. Import the workflow into n8n.  
2. Set up and connect your Supabase, OpenAI, Google Sheets, and Slack accounts.  
3. Customize the webhook to receive your specific habit data.  
4. Test the workflow by sending sample data through the webhook.  
5. Ensure the summary is correctly logged in Google Sheets.

**Practice**  
Create a test habit data entry and send it through the webhook to see how the workflow processes it. Check how the data is split, embedded, and summarized, and verify it in Google Sheets. Modify data entries to test different scenarios.

**WIIFM**  
Mastering this workflow enables you to automate routine data summaries, freeing up time for strategic tasks. Offering this as a service can attract clients needing efficient data processing, potentially boosting your business as an AI automation consultant.
  
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
  