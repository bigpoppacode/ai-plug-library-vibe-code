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
  **Explain:**  
This n8n workflow automates the process of storing Notion pages as vector documents in a Supabase database. It starts by monitoring a Notion database for newly added pages, retrieves the page content, filters out non-text elements like images and videos, summarizes the text, and then generates embeddings using OpenAI's API. Finally, it stores these embeddings along with metadata in a Supabase table, making the content searchable and useful for AI applications.

**Demonstrate:**  
A business might use this workflow to automatically index and store meeting notes from Notion. This allows employees to later search for specific topics or decisions, improving information retrieval and collaboration efficiency.

**Imitate:**  
1. Set up a Supabase project with a vector column.  
2. Connect your Notion and Supabase accounts to n8n.  
3. Import the workflow and customize the Notion database ID and Supabase table name.  
4. Test by adding a new page in Notion and checking if it's processed and stored in Supabase.

**Practice:**  
Create a Notion database with sample text pages. Run the workflow and check if they are stored in Supabase as vector documents. Try querying the Supabase table to see how the data is structured and stored.

**WIIFM:**  
Mastering this workflow can enhance your automation services, allowing you to offer advanced data indexing and retrieval solutions. This can attract businesses needing efficient knowledge management systems, opening avenues for consultancy and service-based income.
  
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
  