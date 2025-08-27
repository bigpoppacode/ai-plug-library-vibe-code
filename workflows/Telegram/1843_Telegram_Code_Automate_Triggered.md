# Telegram Code Automate Triggered
## 🚀 What It Does
Automates a flow using stickyNote×4, set×2, code×2.

## 💼 Business Use Case
Great for **content, summarization, triage, or decisioning** where AI adds speed and consistency.

## ⚙️ How It Works
1. **Trigger:** This workflow starts with **Telegram Trigger**.
2. **Telegram Trigger** `telegramTrigger` — updates: "message", additionalFields: "[object Object]"
3. **When chat message received** `chatTrigger` — options: "[object Object]"
4. **Postgres PGVector Store** `vectorStorePGVector` — mode: "retrieve-as-tool", topK: "100", options: "[object Object]"
5. **Call the SQL composer Workflow** `toolWorkflow` — name: "email_sql_search", workflowId: "[object Object]", description: "Use this tool to search a structured database for e-mail queries.

For example, for the query "who will I interview with next week?", send this tool a more explicit request:

```
F…[truncated]"
6. **Embeddings Ollama** `embeddingsOllama` — model: `nomic-embed-text:latest`
7. **Sticky Note** `stickyNote` — width: "400", height: "880", content: "## Chat around!
You can use this workflow both as a Telegram bot, or by chatting with it in n8n's interface."
8. **Sticky Note1** `stickyNote` — color: "3", width: "520", height: "880"
9. **Sticky Note2** `stickyNote` — color: "4", width: "200", height: "880"
10. **Sticky Note3** `stickyNote` — color: "6", width: "1120", height: "880"
11. **Simple Memory** `memoryBufferWindow` — sessionKey: "={{ $json.reply_to ?? $json.message_id }}", sessionIdType: "customKey"
12. **OpenAI Chat Model** `lmChatOpenAi` — model: `[object Object]`
13. **Generate session id** `set` — mode: "raw", options: "[object Object]", jsonOutput: "={
  "chatInput": {{ $json.message?.text.quote() ?? $json.chatInput.quote() }},
  "reply_to": {{ $json.message?.reply_to_message?.message_id ?? null }},
  "message_id": {{ $json.se…[truncated]"
14. **AI Agent** `agent` — text: "={{ $json.chatInput }}", options: "[object Object]", promptType: "define"
15. **Came from Telegram?** `if` — options: "[object Object]", conditions: "[object Object]"
16. **Split text into chunks** `code` — jsCode: "function splitTextIntoChunks(text, maxLength = 500) {
  const chunks = [];
  let remainingText = text;

  while (remainingText.length > 0) {
    // If remaining text is shorter tha…[truncated]"
17. **Beautify chat response** `set` — options: "[object Object]", assignments: "[object Object]"

## 💡 AI-Powered Ideas for Improvement
### Explain
This n8n workflow acts as an email chatbot using Telegram as the interface. It listens for messages, processes them using AI and vector database tools to search and retrieve relevant email information from a structured and vectorized database. It then formats and responds to queries, either through Telegram or within n8n's interface.

### Demonstrate
A business owner could use this workflow to quickly retrieve important email information based on user queries, such as upcoming meetings or specific email contents, directly from a Telegram chat, saving time and enhancing productivity.

### Imitate
1. Set up a Telegram bot and connect it to n8n.
2. Configure the Postgres PGVector and SQL composer nodes with your email database.
3. Use the AI Agent to interpret and query email data.
4. Test the workflow by sending queries through Telegram.
5. Adjust the workflow to suit your specific email retrieval needs.

### Practice
Create a test environment with a mock email database and use the workflow to simulate retrieving specific email information. Test different types of queries to see how the workflow handles them and refine the AI prompts as needed.

### WIIFM
Mastering this workflow enables you to offer automated, intelligent email retrieval services to clients, enhancing their productivity. This expertise can help you attract more customers and generate additional income by providing cutting-edge AI automation solutions.

## 🔧 Setup Instructions
1. **Connect Credentials:** telegramApi, postgres, ollamaApi, openAiApi.

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
