# Compression Manual Automation Webhook
  ## 🚀 What It Does
  Calls external APIs and uses **AI** to transform or decide, then routes the result downstream.
  
  ## 💼 Business Use Case
  Use as a **glue/API broker**: receive data, enrich/validate via APIs, and pass to downstream systems.
  
  ## ⚙️ How It Works
  1. **Trigger:** This workflow starts with **When clicking "Test workflow"**.
  2. **Window Buffer Memory** `memoryBufferWindow` — contextWindowLength: "10"
3. **OpenAI Chat Model** `lmChatOpenAi` — model: `gpt-4-turbo`
4. **When clicking "Test workflow"** `manualTrigger` — configured for its default action.
5. **Sticky Note** `stickyNote` — width: "834.3272727272731", height: "372.9454545454546", content: "## Run this part only once
This section:
* downloads the example zip file from https://www.sqlitetutorial.net/sqlite-sample-database/
* extracts the archive (it contains only a sin…[truncated]"
6. **Sticky Note1** `stickyNote` — width: "558.5454545454544", height: "297.89090909090913", content: "## On every chat message:
* the local SQLite database is loaded
* JSON from Chat Trigger is combined with SQLite binary data"
7. **Sticky Note2** `stickyNote` — width: "471.99692219161466", height: "511.16641410437836", content: "### LangChain SQL Agent can make several queries before producing the final answer.
Try these examples:
1. "Please describe the database". This input usually requires just 1 query …[truncated]"
8. **Chat Trigger** `chatTrigger` — configured for its default action.
9. **Get chinook.zip example** `httpRequest` — url: `https://www.sqlitetutorial.net/wp-content/uploads/2018/03/chinook.zip`
10. **Load local chinook.db** `readWriteFile` — options: "[object Object]", fileSelector: "./chinook.db"
11. **Extract zip file** `compression` — configured for its default action.
12. **Combine chat input with the binary** `set` — mode: "raw", options: "[object Object]", jsonOutput: "={{ $('Chat Trigger').item.json }}
"
13. **Save chinook.db locally** `readWriteFile` — operation: **write**
14. **AI Agent** `agent` — agent: "sqlAgent", options: "[object Object]", dataSource: "sqlite"
  
  ## 💡 AI-Powered Ideas for Improvement
  ### Explain
This workflow automates the process of interacting with a local SQLite database using chat messages. It downloads and extracts a sample database, then allows users to query this database through chat inputs. The workflow processes user inputs, combines them with database data, and utilizes an AI agent to generate responses based on SQL queries.

### Demonstrate
A developer could use this workflow to enable a conversational interface for querying a database, providing a more intuitive way for non-technical users to access and understand data insights without writing SQL queries themselves.

### Imitate
1. Import workflow into n8n.
2. Connect OpenAI API credentials.
3. Run the initial setup to download and extract the database.
4. Test the chat interface by sending queries like "Describe the database."
5. Adjust the database or queries to fit your specific dataset or needs.

### Practice
Create a simple SQLite database with sample data. Modify the workflow to use your database and test querying it via chat. Experiment with different questions to see how the AI agent formulates responses, adjusting the database as needed.

### WIIFM
Mastering this workflow enables you to create chat-based data interfaces, offering clients innovative ways to interact with their data. This can enhance data accessibility, improve decision-making, and offer a unique service in your automation business, potentially increasing client engagement and revenue.
  
  ## 🔧 Setup Instructions
  1. **Connect Credentials:** openAiApi.
2. **API Contracts:** Validate required headers and 2xx/4xx handling; add retries for 429/5xx.
  
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
  