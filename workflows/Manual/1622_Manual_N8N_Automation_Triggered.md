# Manual N8n Automation Triggered
  ## 🚀 What It Does
  Automates a flow using stickyNote×4, manualTrigger, set.
  
  ## 💼 Business Use Case
  Great for **content, summarization, triage, or decisioning** where AI adds speed and consistency.
  
  ## ⚙️ How It Works
  1. **Trigger:** This workflow starts with **When clicking "Test workflow"**.
  2. **When clicking "Test workflow"** `manualTrigger` — configured for its default action.
3. **Sticky Note** `stickyNote` — width: "216", height: "299.56273929030715", content: "













### 🚨Required
You'll need an n8n API key. Note: available workflows will be scoped to your key."
4. **Chat Trigger** `chatTrigger` — configured for its default action.
5. **Query Workflow Credentials Database** `toolCode` — name: "query_workflow_credentials_database", language: "python", pythonCode: "import json
import sqlite3
con = sqlite3.connect("n8n_workflow_credentials.db")

cur = con.cursor()
res = cur.execute(query);

output = json.dumps(res.fetchall())

con.close()
retu…[truncated]"
6. **OpenAI Chat Model** `lmChatOpenAi` — options: "[object Object]"
7. **Window Buffer Memory** `memoryBufferWindow` — configured for its default action.
8. **Sticky Note1** `stickyNote` — color: "7", width: "930.8402221561373", height: "488.8805508857059"
9. **Sticky Note2** `stickyNote` — color: "7", width: "688.6507290693205", height: "527.3794193342486"
10. **Sticky Note4** `stickyNote` — width: "415.13049730628427", height: "347.7398931123371", content: "## Try It Out!

### This workflow let's you query workflow credentials using an AI SQL agent. Example use-case could be:
* "Which workflows are using Slack and Google Calendar?"
* …[truncated]"
11. **n8n** `n8n` — filters: "[object Object]", requestOptions: "[object Object]"
12. **Workflow Credentials Helper Agent** `agent` — options: "[object Object]"
13. **Map Workflows & Credentials** `set` — options: "[object Object]", assignments: "[object Object]"
14. **Save to Database** `code` — language: "python", pythonCode: "import json
import sqlite3
con = sqlite3.connect("n8n_workflow_credentials.db")

cur = con.cursor()
cur.execute("CREATE TABLE IF NOT EXISTS n8n_workflow_credentials (workflow_id TE…[truncated]"
  
  ## 💡 AI-Powered Ideas for Improvement
  - **Explain:** This n8n workflow helps you identify and manage the credentials associated with your various automation workflows. It creates a local database of these credentials, allowing you to query which workflows are using specific services or apps. This aids in managing and auditing your integrations more effectively.

- **Demonstrate:** A developer managing multiple automation projects might use this workflow to quickly identify which workflows use specific API credentials, like Slack or Google Calendar, to ensure credentials are up-to-date and secure.

- **Imitate:** To apply this workflow, import it into your n8n environment, ensure you have your n8n API key set up, and run the workflow to populate the local database. Customize queries to check which workflows are using specific credentials for auditing purposes.

- **Practice:** Set up a local SQLite database and run the workflow to store your workflow credentials. Try querying the database to find workflows using a specific service, like "Which workflows use Slack?"

- **WIIFM:** Mastering this workflow empowers you to efficiently manage and audit the credentials for various integrations, increasing security and reliability. This is valuable for offering credential management as a service, potentially increasing your client base and revenue in an automation business.
  
  ## 🔧 Setup Instructions
  1. **Connect Credentials:** openAiApi, n8nApi.
  
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
  