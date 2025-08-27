# Filter Summarize Automation Triggered
  ## 🚀 What It Does
  Moves data between apps and a **database/spreadsheet**, with logic and optional AI steps.
  
  ## 💼 Business Use Case
  Great for **content, summarization, triage, or decisioning** where AI adds speed and consistency.
  
  ## ⚙️ How It Works
  1. **Trigger:** This workflow starts with **Notion - Page Added Trigger**.
  2. **Sticky Note** `stickyNote` — width: "637.1327972412109", height: "1113.7434387207031", content: "[redacted]"
3. **Embeddings OpenAI** `embeddingsOpenAi` — options: "[object Object]"
4. **Token Splitter** `textSplitterTokenSplitter` — chunkSize: "256", chunkOverlap: "30"
5. **Notion - Page Added Trigger** `notionTrigger` — simple: "false", pollTimes: "[object Object]", databaseId: "[object Object]"
6. **Create metadata and load content** `documentDefaultDataLoader` — options: "[object Object]", jsonData: "={{ $('Summarize - Concatenate Notion's blocks content').item.json.concatenated_content }}", jsonMode: "expressionData"
7. **Notion - Retrieve Page Content** `notion` — resource: **block**, operation: **getAll**
8. **Filter Non-Text Content** `filter` — options: "[object Object]", conditions: "[object Object]"
9. **Summarize - Concatenate Notion's blocks content** `summarize` — options: "[object Object]", fieldsToSummarize: "[object Object]"
10. **Supabase Vector Store** `vectorStoreSupabase` — mode: "insert", options: "[object Object]", tableName: "[object Object]"
  
  ## 💡 AI-Powered Ideas for Improvement
  **Explain**: This workflow automates storing text from Notion pages as vector documents in a Supabase database. It monitors a Notion database for new pages, retrieves the text content, filters out non-text elements, concatenates the text, generates embeddings using OpenAI, and stores these embeddings in a Supabase table with a vector column. This process enables efficient storage and retrieval of text data in a format suitable for advanced data processing tasks.

**Demonstrate**: A content management team could use this workflow to efficiently store and manage large volumes of text data from Notion, allowing them to perform advanced searches and analyses using vector embeddings in Supabase.

**Imitate**: To adapt this workflow, start by setting up a Supabase project with a vector column. Connect your Notion and Supabase accounts in n8n. Customize the workflow to monitor your specific Notion database. Test the workflow by adding a new page to Notion and verify the data in Supabase.

**Practice**: Create a test Notion database and add several pages with varying content. Run the workflow to see how it processes and stores the data. Experiment by modifying the content types and observe how the workflow handles different data formats.

**WIIFM**: Mastering this workflow can enhance your ability to offer advanced data management solutions to clients, allowing you to leverage vector embeddings for better data insights. This can expand your service offerings and increase your value as an automation consultant, potentially leading to higher income and customer satisfaction.
  
  ## 🔧 Setup Instructions
  1. **Test & Activate:** Run a manual execution with sample data, then set the workflow Active.
  
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
  