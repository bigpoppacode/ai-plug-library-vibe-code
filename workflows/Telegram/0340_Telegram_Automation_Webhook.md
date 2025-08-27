# Telegram Automation Webhook
## 🚀 What It Does
Calls external APIs and uses **AI** to transform or decide, then routes the result downstream.

## 💼 Business Use Case
Use as a **glue/API broker**: receive data, enrich/validate via APIs, and pass to downstream systems.

## ⚙️ How It Works
1. **Trigger:** This workflow starts with **When chat message received**.
2. **When chat message received** `chatTrigger` — options: "[object Object]"
3. **OpenAI Chat Model** `lmChatOpenAi` — model: `[object Object]`
4. **Window Buffer Memory** `memoryBufferWindow` — configured for its default action.
5. **Telegram Trigger** `telegramTrigger` — updates: "message", additionalFields: "[object Object]"
6. **DexScreener Latest Token Profiles** `toolHttpRequest` — url: `[redacted]`
7. **DexScreener Latest Boosted Tokens** `toolHttpRequest` — url: `[redacted]`
8. **DexScreener Top Token Boosts** `toolHttpRequest` — url: `[redacted]`
9. **DexScreener Search Pairs** `toolHttpRequest` — url: `https://api.dexscreener.com/latest/dex/search`
10. **DexScreener Check Orders Paid for Token** `toolHttpRequest` — url: `[redacted]`
11. **DexScreener Get Pairs by Chain and Pair Address** `toolHttpRequest` — url: `https://api.dexscreener.com/latest/dex/pairs/{chainId}/{pairId}`
12. **DexScreener Token Pools** `toolHttpRequest` — url: `[redacted]`
13. **DexScreener Pairs by Token Address** `toolHttpRequest` — url: `[redacted]`
14. **Adds SessionId** `set` — options: "[object Object]", assignments: "[object Object]", includeOtherFields: "true"
15. **Blockchain DEX Screener Insights Agent** `agent` — text: "={{ $('Telegram Trigger').item.json.message.text }}", options: "[object Object]", promptType: "define"
16. **Telegram** `telegram` — text: "={{ $json.output }}", chatId: "={{ $('Telegram Trigger').item.json.message.chat.id }}", additionalFields: "[object Object]"

## 💡 AI-Powered Ideas for Improvement
### Explain
This n8n workflow acts as a Blockchain DEX Screener Insights Agent. It uses Telegram to receive queries about decentralized exchange (DEX) data and utilizes the DexScreener API to provide real-time insights. When a chat message is received, it triggers the workflow to fetch data such as latest token profiles, boosted tokens, and trading pairs. The AI then processes this information to generate a response, which is sent back to the user via Telegram. This setup allows users to quickly access DEX data and insights through a chat interface.

### Demonstrate
A cryptocurrency consultant could use this workflow to offer clients real-time insights into token performance on decentralized exchanges, helping them make informed trading decisions. This service enhances client value by providing timely, data-driven insights directly through a simple chat message.

### Imitate
1. Import the workflow into n8n.
2. Connect your Telegram and OpenAI accounts.
3. Set up the DexScreener API credentials.
4. Test the workflow by sending a message via Telegram.
5. Customize the workflow to fetch specific data points relevant to your needs.

### Practice
Set up a Telegram bot and send a test message querying for a specific token pair. Observe how the workflow retrieves and sends back the relevant DEX data. Experiment by modifying the query to see how the workflow handles different requests.

### WIIFM
Mastering this workflow can help you offer automated DEX insights services, attracting crypto enthusiasts and traders. This can diversify your service offerings, enhance client satisfaction, and increase your income potential as part of an AI automation business.

## 🔧 Setup Instructions
1. **Connect Credentials:** openAiApi, telegramApi.
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
