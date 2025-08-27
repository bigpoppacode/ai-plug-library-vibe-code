# Telegram Stickynote Automation Triggered
## 🚀 What It Does
Automates a flow using stickyNote×7, mcpClient×2, code.

## 💼 Business Use Case
Use to eliminate manual copy-paste and standardize a recurring business process.

## ⚙️ How It Works
1. **Trigger:** This workflow starts with **Get Message**.
2. **Get Message** `telegramTrigger` — updates: "message", additionalFields: "[object Object]"
3. **Sticky Note** `stickyNote` — color: "6", width: "480", content: "[redacted]"
4. **Sticky Note1** `stickyNote` — color: "6", width: "480", height: "420"
5. **Sticky Note2** `stickyNote` — height: "260", content: "the search only occurs when the command "/brave" is present in the message"
6. **Sticky Note3** `stickyNote` — width: "220", height: "260", content: "I clean the message by removing the "/brave" command"
7. **Sticky Note4** `stickyNote` — width: "180", height: "260", content: "Get all available Brave search tools"
8. **Sticky Note5** `stickyNote` — width: "180", height: "260", content: "I get the search results"
9. **Sticky Note6** `stickyNote` — color: "3", width: "480", height: "280"
10. **Search with Brave?** `if` — options: "[object Object]", conditions: "[object Object]"
11. **Get Text** `set` — options: "[object Object]", assignments: "[object Object]"
12. **Clean query** `code` — jsCode: "for (const item of $input.all()) {
  const originalText = item.json.text;

  const query = originalText.replace("/brave ", "");

  item.json.query = query;
}

return $input.all();
"
13. **List Brave Tools** `mcpClient` — configured for its default action.
14. **Exec Brave tool** `mcpClient` — operation: **executeTool**
15. **Send message** `telegram` — text: "={{ $json.result.content[0].text }}", chatId: "={{ $('Get Message').item.json.message.from.id }}", additionalFields: "[object Object]"

## 💡 AI-Powered Ideas for Improvement
### Explain
This n8n workflow automates web searches via Telegram using the Brave search engine. When a user sends a message starting with "/brave" on Telegram, the workflow processes the query, performs a search using Brave, and sends the results back to the user in Telegram. Essentially, it allows users to perform web searches directly from their Telegram chat.

### Demonstrate
A business owner could use this workflow to quickly search for market trends or competitor information without leaving their chat app, making it a handy tool for real-time research during meetings or discussions.

### Imitate
1. Import the workflow into n8n.
2. Set up a Telegram bot and connect it to the workflow.
3. Obtain and configure the Brave Search API key.
4. Set up the "Get Message" trigger to listen for messages.
5. Test by sending a "/brave" command followed by a query in Telegram.

### Practice
Create a test Telegram bot and run the workflow with different search queries. Observe how the workflow processes the queries and returns results. Try modifying the queries to see how the workflow handles them.

### WIIFM
Mastering this workflow allows you to offer unique Telegram-based search services, enhancing communication tools for clients. It can attract customers who need efficient real-time search capabilities, thereby expanding your service offerings and potentially boosting income in your automation business.

## 🔧 Setup Instructions
1. **Connect Credentials:** mcpClientApi, telegramApi.

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
