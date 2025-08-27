# Telegram Stickynote Automate Triggered
## 🚀 What It Does
Automates a flow using telegram×5, stickyNote×3, lmChatOpenAi.

## 💼 Business Use Case
Great for **content, summarization, triage, or decisioning** where AI adds speed and consistency.

## ⚙️ How It Works
1. **Trigger:** This workflow starts with **Listen for incoming events**.
2. **OpenAI Chat Model** `lmChatOpenAi` — model: `gpt-4o`
3. **Window Buffer Memory** `memoryBufferWindow` — sessionKey: "=chat_with_{{ $('Listen for incoming events').first().json.message.chat.id }}", contextWindowLength: "10"
4. **Listen for incoming events** `telegramTrigger` — updates: "*", additionalFields: "[object Object]"
5. **Sticky Note** `stickyNote` — width: "1035.4478381373049", height: "547.5630890194532", content: "## Receive and pre-process messages 
"
6. **Sticky Note1** `stickyNote` — color: "2", width: "861.262180151035", height: "550.5748478134515"
7. **Sticky Note2** `stickyNote` — color: "6", width: "367.73614918993235", height: "194.83713159725437"
8. **Determine content type** `switch` — rules: "[object Object]", options: "[object Object]"
9. **Send Typing action** `telegram` — operation: **sendChatAction**
10. **Download voice file** `telegram` — resource: **file**
11. **Send error message** `telegram` — text: "=Sorry, {{ $('Listen for incoming events').first().json.message.from.first_name }}! This command is not supported yet. Please send text or voice messages.", chatId: "={{ $('Listen for incoming events').first().json.message.from.id }}", additionalFields: "[object Object]"
12. **Convert audio to text** `openAi` — resource: **audio**, operation: **transcribe**
13. **Combine content and set properties** `set` — options: "[object Object]", assignments: "[object Object]"
14. **AI Agent** `agent` — text: "={{ $json.CombinedMessage }}", options: "[object Object]"
15. **Send final reply** `telegram` — text: "={{ $json.output }} 

Thank you for your{{ $('Combine content and set properties').item.json['Source Type'] }} {{ $('Combine content and set properties').item.json['Message Type ']…[truncated]", chatId: "={{ $('Listen for incoming events').first().json.message.from.id }}", additionalFields: "[object Object]"
16. **Correct errors** `telegram` — text: "={{ $('AI Agent').item.json.output.replace(/&/g, "&amp;").replace(/>/g, "&gt;").replace(/</g, "&lt;").replace(/"/g, "&quot;") }}", chatId: "={{ $('Listen for incoming events').first().json.message.from.id }}", additionalFields: "[object Object]"

## 💡 AI-Powered Ideas for Improvement
- **Explain:** This n8n workflow is designed to manage a Telegram chatbot that can handle both text and voice messages. It listens for incoming messages via Telegram, determines if the message is text or voice, and processes it accordingly. Voice messages are transcribed into text using OpenAI's transcription capabilities. The processed message is then sent to an AI agent that generates a response, which is sent back to the user. If an unsupported message type is detected, an error message is sent.

- **Demonstrate:** A business owner could use this workflow to automate customer interactions on Telegram, allowing the AI to handle common inquiries and improve response times without human intervention.

- **Imitate:** Set up a Telegram bot and connect it to n8n. Use the workflow to listen for messages, configure OpenAI for transcription and response generation, and test the bot with both text and voice messages to ensure it responds correctly.

- **Practice:** Create a Telegram group with test accounts and send various text and voice messages. Observe how the bot processes these messages and refines the workflow to handle different scenarios, such as unsupported message types.

- **WIIFM:** Mastering this workflow allows you to create intelligent chatbots that enhance customer service, potentially reducing staffing costs. Offering such automation solutions can attract clients seeking to improve their customer engagement and streamline communication processes, thereby increasing your income as an automation consultant.

## 🔧 Setup Instructions
1. **Connect Credentials:** openAiApi, telegramApi.

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
