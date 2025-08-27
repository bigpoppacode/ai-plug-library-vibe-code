# Stickynote ExecuteWorkflow Update Webhook
## 🚀 What It Does
Calls external APIs and uses **AI** to transform or decide, then routes the result downstream.

## 💼 Business Use Case
Use as a **glue/API broker**: receive data, enrich/validate via APIs, and pass to downstream systems.

## ⚙️ How It Works
1. **Trigger:** This workflow starts with **When Executed by Another Workflow**.
2. **When Executed by Another Workflow** `executeWorkflowTrigger` — workflowInputs: "[object Object]"
3. **Exchange and Community Agent Brain** `lmChatOpenAi` — model: `[object Object]`
4. **Exchange and Community Agent Memory** `memoryBufferWindow` — configured for its default action.
5. **Exchange Map** `toolHttpRequest` — url: `https://pro-api.coinmarketcap.com/v1/exchange/map`
6. **Exchange Info** `toolHttpRequest` — url: `https://pro-api.coinmarketcap.com/v1/exchange/info`
7. **CMC 100 Index** `toolHttpRequest` — url: `https://pro-api.coinmarketcap.com/v3/index/cmc100-latest`
8. **Fear and Greed Latest** `toolHttpRequest` — url: `https://pro-api.coinmarketcap.com/v3/fear-and-greed/latest`
9. **Exchange Assets** `toolHttpRequest` — url: `https://pro-api.coinmarketcap.com/v1/exchange/assets`
10. **Exchange & Community Guide** `stickyNote` — width: "1200", height: "720", content: "[redacted]"
11. **Usage & Examples** `stickyNote` — color: "5", width: "840", height: "920"
12. **Errors & Licensing** `stickyNote` — color: "3", width: "640", height: "500"
13. **CoinMarketCap Exchange and Community Agent** `agent` — text: "={{ $json.message }}", options: "[object Object]", promptType: "define"

## 💡 AI-Powered Ideas for Improvement
**Explain:**  
This n8n workflow is designed to provide insights into the cryptocurrency ecosystem using CoinMarketCap's API. It retrieves and processes data on crypto exchanges, community sentiment, and index tracking. The workflow can fetch exchange lists, metadata, asset holdings, the CMC 100 index, and the Fear and Greed index, offering a comprehensive view of the crypto market.

**Demonstrate:**  
A crypto investment firm can use this workflow to regularly update their clients on market conditions, sentiment, and exchange information, helping them make informed investment decisions.

**Imitate:**  
1. Import the workflow into n8n.  
2. Connect to CoinMarketCap's API with your credentials.  
3. Set up triggers based on your needs, like daily summaries or specific exchange queries.  
4. Customize endpoints and parameters to match your data requirements.  
5. Test the workflow to ensure it retrieves and processes data correctly.

**Practice:**  
Create a test run of the workflow to retrieve data for a specific exchange, like Binance. Adjust parameters to filter the data and observe how changes affect the outputs, enabling you to refine the workflow for your needs.

**WIIFM:**  
Mastering this workflow allows you to offer valuable insights into the crypto market, enhancing your service offerings. This can attract clients interested in cryptocurrency investments, providing a competitive edge in the financial advisory and investment sectors.

## 🔧 Setup Instructions
1. **Connect Credentials:** openAiApi, httpHeaderAuth.
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
