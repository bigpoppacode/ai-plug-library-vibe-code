# HTTP Telegram Automation Webhook
  ## 🚀 What It Does
  Automates a flow using telegram×11, stickyNote×9, httpRequest×3.
  
  ## 💼 Business Use Case
  Use as a **glue/API broker**: receive data, enrich/validate via APIs, and pass to downstream systems.
  
  ## ⚙️ How It Works
  1. **Trigger:** This workflow starts with **Telegram Trigger**.
  2. **Telegram Trigger** `telegramTrigger` — updates: "*", additionalFields: "[object Object]"
3. **Sticky Note** `stickyNote` — color: "3", width: "460.4333621829785", height: "347.9769162173868"
4. **Sticky Note1** `stickyNote` — color: "4", width: "459.0810102677459", height: "350.68162004785273"
5. **Sticky Note2** `stickyNote` — color: "5", width: "411.78262099325127", height: "705.0354263931183"
6. **Sticky Note3** `stickyNote` — color: "6", width: "236.80242230495116", height: "535.7153791682382"
7. **Sticky Note4** `stickyNote` — color: "3", width: "593.1328365275054", height: "403.9345258807414"
8. **Sticky Note5** `stickyNote` — color: "5", width: "384.60321058533617", height: "538.7613862505775"
9. **Sticky Note6** `stickyNote` — height: "535.7153791682384", content: "## This node sends an emoji to indicate that the prompt is being processed."
10. **Sticky Note7** `stickyNote` — color: "4", width: "596.5768511548468", height: "350.68162004785273"
11. **Sticky Note8** `stickyNote` — width: "623.6530631885605", height: "648.96526541807", content: "[redacted]"
12. **Switch** `switch` — rules: "[object Object]", options: "[object Object]", looseTypeValidation: "true"
13. **Code1** `code` — jsCode: "// Acessa a mensagem original que está em $json.message.text
const userMessage = $json.message.text;

// Remover o prefixo '/flux' e qualquer espaço extra após o comando
const clea…[truncated]"
14. **TYPING - ACTION** `telegram` — operation: **sendChatAction**
15. **Telegram2** `telegram` — text: "⌛", chatId: "={{ $('Telegram Trigger').item.json.message.chat.id }}", replyMarkup: "inlineKeyboard"
16. **NeurochainAI - REST API** `httpRequest` — method: **POST**, url: `https://ncmb.neurochain.io/tasks/message`
17. **NeurochainAI - Flux** `httpRequest` — method: **POST**, url: `https://ncmb.neurochain.io/tasks/tti`
18. **AI Response** `telegram` — text: "={{ $json.choices[0].text }}", chatId: "={{ $('Telegram Trigger').item.json.message.chat.id }}", additionalFields: "[object Object]"
19. **Switch2** `switch` — rules: "[object Object]", options: "[object Object]"
20. **Code** `code` — jsCode: "// O valor vem como um array com uma string, então precisamos pegar o primeiro item do array
const rawUrl = $json.choices[0].text;

// Remover colchetes e aspas (se existirem) e pe…[truncated]"
21. **Switch1** `switch` — rules: "[object Object]", options: "[object Object]"
22. **No response** `telegram` — text: "=*No response from worker*", chatId: "={{ $('Telegram Trigger').item.json.message.chat.id }}", additionalFields: "[object Object]"
23. **Prompt too short** `telegram` — text: "=*Prompt too short*", chatId: "={{ $('Telegram Trigger').item.json.message.chat.id }}", replyMarkup: "inlineKeyboard"
24. **HTTP Request3** `httpRequest` — url: `={{ $json.imageUrl }}`
25. **Telegram6** `telegram` — text: "=*Prompt too short*", chatId: "={{ $('Telegram Trigger').item.json.message.chat.id }}", replyMarkup: "inlineKeyboard"
26. **Telegram3** `telegram` — text: "={{ $json.error.message }}", chatId: "={{ $('Telegram Trigger').item.json.message.chat.id }}", replyMarkup: "inlineKeyboard"
27. **Telegram1** `telegram` — operation: **sendPhoto**
28. **Telegram7** `telegram` — operation: **deleteMessage**
29. **Telegram5** `telegram` — operation: **deleteMessage**
30. **Telegram4** `telegram` — operation: **deleteMessage**
  
  ## 💡 AI-Powered Ideas for Improvement
  **Explain:**  
This n8n workflow automates interactions with a Telegram bot. It listens for messages on Telegram, processes user inputs, and communicates with the NeurochainAI API to generate responses or images. It manages various outcomes, such as handling errors or short prompts, and sends responses back to the user, including text or image outputs.

**Demonstrate:**  
A business owner could use this workflow to offer a conversational AI service via Telegram, providing users with automated responses and image generation, enhancing customer engagement.

**Imitate:**  
1. Set up a Telegram bot via BotFather.
2. Get your NeurochainAI API key from their dashboard.
3. Import the workflow to n8n and configure Telegram nodes with your bot token.
4. Replace placeholders in HTTP nodes with your API key.
5. Test by sending messages to your Telegram bot.

**Practice:**  
Create a test Telegram bot and send various prompts, observing how the workflow processes them and sends back responses. Try modifying the prompts to see different outcomes, like handling short messages.

**WIIFM:**  
Mastering this workflow allows you to offer advanced AI-powered chatbot services, enhancing client engagement and opening new revenue streams. It's a valuable skill for building automation solutions that integrate AI capabilities, attracting more customers to your business.
  
  ## 🔧 Setup Instructions
  1. **Connect Credentials:** telegramApi.
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
  