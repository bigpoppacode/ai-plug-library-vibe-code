# Telegram Automation Webhook
## 🚀 What It Does
Calls external APIs and uses **AI** to transform or decide, then routes the result downstream.

## 💼 Business Use Case
Use as a **glue/API broker**: receive data, enrich/validate via APIs, and pass to downstream systems.

## ⚙️ How It Works
1. **Trigger:** This workflow starts with **Telegram Trigger1**.
2. **OpenAI Chat Model** `lmChatOpenAi` — model: `[object Object]`
3. **Window Buffer Memory** `memoryBufferWindow` — configured for its default action.
4. **Telegram Trigger1** `telegramTrigger` — updates: "message", additionalFields: "[object Object]"
5. **CoinMarketCap Price** `toolHttpRequest` — url: `https://pro-api.coinmarketcap.com/v1/cryptocurrency/quotes/latest`
6. **Adds SessionId** `set` — options: "[object Object]", assignments: "[object Object]", includeOtherFields: "true"
7. **CoinMarketCap Price Agent** `agent` — text: "={{ $json.message.text }}", options: "[object Object]", promptType: "define"
8. **Telegram Send Message** `telegram` — text: "={{ $json.output }}", chatId: "={{ $('Telegram Trigger1').item.json.message.chat.id }}", additionalFields: "[object Object]"

## 💡 AI-Powered Ideas for Improvement
### Explain
This n8n workflow automates retrieving cryptocurrency prices in response to Telegram messages. When a user sends a message via Telegram, the workflow captures it, retrieves the current price of the specified cryptocurrency from CoinMarketCap, and sends the price back to the user through Telegram. It utilizes OpenAI for processing and session management to handle requests effectively.

### Demonstrate
A cryptocurrency investor might use this workflow to get real-time price updates directly in their Telegram chat, saving time from manually checking prices on a website or app.

### Imitate
1. Import the workflow into n8n.
2. Connect your Telegram and CoinMarketCap accounts.
3. Set up the Telegram Trigger to capture messages.
4. Configure the CoinMarketCap node to fetch prices based on the message content.
5. Test the workflow by sending a cryptocurrency symbol via Telegram.

### Practice
Create a test Telegram bot and send different cryptocurrency symbols to see how the workflow responds. Modify the workflow to handle edge cases like invalid symbols or network errors.

### WIIFM
Mastering this workflow enables you to offer real-time data retrieval services, enhancing customer engagement and satisfaction. It can be a valuable asset in a financial services business, attracting clients looking for instant data access, thus driving revenue growth.

## 🔧 Setup Instructions
1. **Connect Credentials:** telegramApi, openAiApi, httpHeaderAuth.
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
