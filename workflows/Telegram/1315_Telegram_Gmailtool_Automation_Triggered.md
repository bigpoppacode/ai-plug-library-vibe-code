# Telegram Gmailtool Automation Triggered
## 🚀 What It Does
Monitors events, processes them, and **notifies** people/apps (Slack/Email) with structured updates.

## 💼 Business Use Case
Great for **content, summarization, triage, or decisioning** where AI adds speed and consistency.

## ⚙️ How It Works
1. **Trigger:** This workflow starts with **Listen for incoming events**.
2. **Google Calendar** `googleCalendarTool` — operation: **getAll**
3. **Window Buffer Memory** `memoryBufferWindow` — sessionKey: "={{ $('Listen for incoming events').first().json.message.from.id }}", sessionIdType: "customKey"
4. **Get Email** `gmailTool` — operation: **getAll**
5. **OpenAI Chat Model** `lmChatOpenAi` — model: `gpt-4o-mini`
6. **Listen for incoming events** `telegramTrigger` — updates: "message", additionalFields: "[object Object]"
7. **Sticky Note** `stickyNote` — color: "5", width: "496.25", height: "278.75"
8. **Tasks** `baserowTool` — table: `372174`
9. **Contacts** `baserowTool` — table: `372177`
10. **Sticky Note5** `stickyNote` — color: "5", width: "386.9292441979969", height: "389.78268107403096"
11. **Voice or Text** `set` — fields: "[object Object]", options: "[object Object]"
12. **If** `if` — options: "[object Object]", conditions: "[object Object]"
13. **Get Voice File** `telegram` — resource: **file**
14. **Speech to Text** `openAi` — resource: **audio**, operation: **transcribe**
15. **Angie, AI Assistant 👩🏻‍🏫** `agent` — text: "={{ $json.text }}", options: "[object Object]", promptType: "define"
16. **Telegram** `telegram` — text: "={{ $json.output }}", chatId: "={{ $('Listen for incoming events').first().json.message.from.id }}", additionalFields: "[object Object]"

## 💡 AI-Powered Ideas for Improvement
**Explain:**  
This workflow automates interaction with a user via Telegram, where it receives messages or voice notes, transcribes voice to text, and processes the input using an AI assistant. It checks Google Calendar for events, retrieves unread emails, and accesses a Baserow database for tasks and contacts. The AI assistant, Angie, uses this information to generate responses based on user queries and sends them back via Telegram.

**Demonstrate:**  
A consultant could use this workflow to provide a personal AI assistant service, where clients can query their schedule, emails, and tasks using Telegram. This ensures clients have easy access to their information, improving productivity and communication.

**Imitate:**  
1. Set up a Telegram bot and link it to n8n.
2. Connect Google Calendar, Gmail, and Baserow to n8n.
3. Configure the AI assistant to process queries using the connected services.
4. Test the workflow by sending messages or voice notes to the Telegram bot.

**Practice:**  
Create a simple Telegram bot that responds to text messages with a greeting. Gradually add features like checking Google Calendar events or retrieving unread emails to understand how each node works and interacts.

**WIIFM:**  
Mastering this workflow lets you offer personalized AI assistant services to clients, enhancing their productivity and communication. This can be a lucrative service, attracting clients who value efficient information management and prompt responses.

## 🔧 Setup Instructions
1. **Connect Credentials:** googleCalendarOAuth2Api, gmailOAuth2, openAiApi, telegramApi, baserowApi.
2. **Notification Targets:** Confirm channel/email IDs and that the bot/app is authorized to post.

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
