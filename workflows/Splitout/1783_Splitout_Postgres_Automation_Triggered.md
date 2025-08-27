# Splitout Postgres Automation Triggered
## 🚀 What It Does
Monitors events, processes them, and **notifies** people/apps (Slack/Email) with structured updates.

## 💼 Business Use Case
Great for **content, summarization, triage, or decisioning** where AI adds speed and consistency.

## ⚙️ How It Works
1. **Trigger:** Triggered by **incoming email** (new message).
2. **Embeddings Ollama** `embeddingsOllama` — model: `nomic-embed-text:latest`
3. **Default Data Loader** `documentDefaultDataLoader` — options: "[object Object]", jsonData: "={{ $('Extract email fields').item.json.email_text }}", jsonMode: "expressionData"
4. **Recursive Character Text Splitter** `textSplitterRecursiveCharacterTextSplitter` — options: "[object Object]", chunkSize: "2000", chunkOverlap: "50"
5. **Gmail Trigger** `gmailTrigger` — simple: "false", filters: "[object Object]", options: "[object Object]"
6. **Manual Trigger** `manualTrigger` — configured for its default action.
7. **Sticky Note** `stickyNote` — color: "6", width: "1440", height: "780"
8. **Sticky Note1** `stickyNote` — width: "220", height: "300", content: "## Edit this ⬇️
And specify your Gmail account creation date"
9. **Sticky Note2** `stickyNote` — color: "4", width: "640", height: "180"
10. **Sticky Note3** `stickyNote` — width: "720", height: "780", content: "## Magic here 🪄
#### (not really, just statistics)
E-mail is stored in a `emails_metadata` structured table, and also fed to the [`nomic-embed-text`](https://ollama.com/library/no…[truncated]"
11. **Create the table** `postgres` — operation: **executeQuery**
12. **Explode interval into weeks** `code` — mode: "runOnceForEachItem", jsCode: "// Edit this
let whenDidICreateMyGmailAccount = DateTime.fromISO('2013-11-01')

// (don't edit further down)
whenDidICreateMyGmailAccount = whenDidICreateMyGmailAccount.set({day: 1…[truncated]"
13. **Split Out** `splitOut` — options: "[object Object]", fieldToSplitOut: "weeks"

## 💡 AI-Powered Ideas for Improvement
### Explain
This n8n workflow automates email processing by fetching emails from Gmail, extracting their content, and storing this data in a PostgreSQL database. It then converts email text into vector embeddings using the `nomic-embed-text` model and stores these embeddings in a vector database for similarity search purposes. The system runs continuously, checking for new emails every minute, and processes them in weekly batches based on the creation date of the Gmail account.

### Demonstrate
A business owner could use this workflow to organize customer inquiries. By embedding email content into vectors, they can efficiently search for similar inquiries, improving response times and customer service.

### Imitate
1. Import the workflow into n8n.
2. Connect your Gmail and PostgreSQL accounts.
3. Set your Gmail account creation date in the code node.
4. Activate the workflow to start processing emails.
5. Test with various email contents to see how embeddings are stored.

### Practice
Create a test Gmail account and send emails with different subjects and contents. Run the workflow and observe how it extracts and processes each email, storing the results in the PostgreSQL database.

### WIIFM
Mastering this workflow allows you to offer advanced email management and data organization services. It can enhance your automation capabilities, attract clients needing efficient email processing, and drive income by providing scalable AI-powered solutions.

## 🔧 Setup Instructions
1. **Notification Targets:** Confirm channel/email IDs and that the bot/app is authorized to post.

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
