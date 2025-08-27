# Openai Telegram Automate Triggered
  ## 🚀 What It Does
  Automates a flow using stickyNote×4, telegram×4, openAi×3.
  
  ## 💼 Business Use Case
  Great for **content, summarization, triage, or decisioning** where AI adds speed and consistency.
  
  ## ⚙️ How It Works
  1. **Trigger:** This workflow starts with **Telegram Trigger**.
  2. **Telegram Trigger** `telegramTrigger` — updates: "*", additionalFields: "[object Object]"
3. **Sticky Note** `stickyNote` — width: "316.1071428571428", height: "231.22373949579838", content: "## Error fallback for unsupported commands"
4. **Sticky Note1** `stickyNote` — width: "330.5019024637719", height: "233", content: "## Chatbot mode by default
### (when no command is provided)"
5. **Sticky Note2** `stickyNote` — width: "330.7863484403046", height: "219.892857142857", content: "## Welcome message
### /start"
6. **Sticky Note3** `stickyNote` — width: "329.7428571428562", height: "233.8785714285713", content: "## Create an image
### /image + request"
7. **PreProcessing** `set` — values: "[object Object]", options: "[object Object]"
8. **Settings** `set` — values: "[object Object]", options: "[object Object]"
9. **Send Typing action** `telegram` — operation: **sendChatAction**
10. **Merge** `merge` — mode: "chooseBranch"
11. **CheckCommand** `switch` — rules: "[object Object]", value1: "={{ $json.message?.text }}", dataType: "string"
12. **Chat_mode** `openAi` — resource: **chat**, prompt: "[object Object]", model: `gpt-4`
13. **Greeting** `openAi` — resource: **chat**, prompt: "[object Object]"
14. **Create an image** `openAi` — resource: **image**, prompt: "={{ $json.message.text.split(' ').slice(1).join(' ') }}"
15. **Send error message** `telegram` — text: "=Sorry, {{ $json.message.from.first_name }}! This command is not supported yet. Please type some text to a chat bot or try this command:
/image \[your prompt]

Enter the command, t…[truncated]", chatId: "={{ $json.message.from.id }}", additionalFields: "[object Object]"
16. **Text reply** `telegram` — text: "={{ $json.message.content }}", chatId: "={{ $('Settings').first().json.message.from.id }}", additionalFields: "[object Object]"
17. **Send image** `telegram` — operation: **sendPhoto**
  
  ## 💡 AI-Powered Ideas for Improvement
  **Explain**  
This workflow is a Telegram chatbot that interacts with users based on their commands. It can send a welcome message, respond to chat messages using GPT-4, create images based on user prompts, and handle unsupported commands with error messages. It identifies commands like "/start" for greetings and "/image" followed by a request to generate an image through OpenAI.

**Demonstrate**  
A business owner could use this workflow to create an interactive Telegram bot for customer support, providing instant answers to FAQs and generating images for visual inquiries, enhancing user engagement and service efficiency.

**Imitate**  
1. Import the workflow into n8n.  
2. Set up a Telegram bot and OpenAI account.  
3. Connect these accounts in n8n.  
4. Customize message prompts and responses in the workflow.  
5. Test the bot with different commands to ensure it functions as intended.

**Practice**  
Create a simple Telegram bot using this workflow to send a welcome message. Test by sending "/start" to see the greeting response. Then, try sending "/image [request]" to generate an image and ensure the bot handles unsupported commands gracefully.

**WIIFM**  
Mastering this workflow allows you to offer chatbot services that automate customer interactions, saving time and resources. This can attract new clients, enhance service offerings, and create new revenue streams in the AI automation business.
  
  ## 🔧 Setup Instructions
  1. **Connect Credentials:** telegramApi, openAiApi.
  
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
  