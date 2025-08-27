# HTTP Telegram Create Webhook
  ## 🚀 What It Does
  Automates a flow using stickyNote×7, httpRequest×4, supabase×2.
  
  ## 💼 Business Use Case
  Use as a **glue/API broker**: receive data, enrich/validate via APIs, and pass to downstream systems.
  
  ## ⚙️ How It Works
  1. **Trigger:** This workflow starts with **Get New Message**.
  2. **Get New Message** `telegramTrigger` — updates: "message", additionalFields: "[object Object]"
3. **Sticky Note1** `stickyNote` — color: "7", width: "600.723278204605", height: "213.15921994594194"
4. **Sticky Note2** `stickyNote` — color: "3", width: "282.075050779723", height: "80"
5. **Sticky Note3** `stickyNote` — color: "3", width: "235.09282368774151", height: "80"
6. **Sticky Note4** `stickyNote` — color: "3", height: "80", content: "Create table in [Supabase](https://supabase.com) with SQL query"
7. **Sticky Note5** `stickyNote` — color: "7", width: "280.2462120317618", height: "438.5821431288714"
8. **Sticky Note6** `stickyNote` — color: "7", width: "636.2128494576581", height: "494.9629292914819"
9. **Sticky Note7** `stickyNote` — color: "7", width: "330.5152611046425", height: "240.6839895136402"
10. **Find User** `supabase` — operation: **getAll**, table: `telegram_users`
11. **If User exists** `if` — options: "[object Object]", conditions: "[object Object]"
12. **OPENAI - Create thread** `httpRequest` — method: **POST**, url: `https://api.openai.com/v1/threads`
13. **Create User** `supabase` — table: `telegram_users`
14. **Merge** `merge` — configured for its default action.
15. **OPENAI - Send message** `httpRequest` — method: **POST**, url: `=https://api.openai.com/v1/threads/{{ $('Merge').item.json.openai_thread_id }}/messages `
16. **OPENAI - Run assistant** `httpRequest` — method: **POST**, url: `=https://api.openai.com/v1/threads/{{ $('Merge').item.json.openai_thread_id }}/runs`
17. **OPENAI - Get messages** `httpRequest` — url: `=https://api.openai.com/v1/threads/{{ $('Merge').item.json.openai_thread_id }}/messages`
18. **Send Message to User** `telegram` — text: "={{ $('OPENAI - Get messages').item.json.data[0].content[0].text.value }}", chatId: "={{ $('Get New Message').item.json.message.chat.id }}", additionalFields: "[object Object]"
  
  ## 💡 AI-Powered Ideas for Improvement
  - **Explain:** This workflow automates a chatbot interaction on Telegram, using OpenAI's API to generate responses. It manages user sessions by storing user IDs and conversation threads in a Supabase database. When a message is received, it checks if the user exists, creates or retrieves an OpenAI conversation thread, sends the user message to OpenAI, and then delivers the AI-generated response back to the user on Telegram.

- **Demonstrate:** A business owner could use this workflow to create a customer support bot on Telegram, providing instant, AI-generated responses to customer inquiries, enhancing customer service without needing human intervention.

- **Imitate:** To apply this workflow, create a Telegram bot via Botfather, set up a Supabase database with a `telegram_users` table, and configure OpenAI with an assistant. Import the workflow into n8n, input your credentials, and test the bot by sending messages to your Telegram bot.

- **Practice:** Create a simple test scenario by sending various messages to the Telegram bot and observing the AI-generated responses. Adjust the OpenAI prompt to see how it affects responses.

- **WIIFM:** Mastering this workflow allows you to offer AI-driven customer service solutions, attracting businesses looking to automate support, thereby increasing your service offerings and potential income in the automation business.
  
  ## 🔧 Setup Instructions
  1. **Connect Credentials:** telegramApi, openAiApi, supabaseApi.
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
  