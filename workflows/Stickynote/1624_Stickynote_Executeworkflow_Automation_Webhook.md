# Stickynote ExecuteWorkflow Automation Webhook
## 🚀 What It Does
Calls external APIs and uses **AI** to transform or decide, then routes the result downstream.

## 💼 Business Use Case
Use as a **glue/API broker**: receive data, enrich/validate via APIs, and pass to downstream systems.

## ⚙️ How It Works
1. **Trigger:** This workflow starts with **When Executed by Another Workflow**.
2. **When Executed by Another Workflow** `executeWorkflowTrigger` — workflowInputs: "[object Object]"
3. **Crypto Agent Brain** `lmChatOpenAi` — model: `[object Object]`
4. **Crypto Agent Memory** `memoryBufferWindow` — configured for its default action.
5. **CoinMarketCap Price** `toolHttpRequest` — url: `https://pro-api.coinmarketcap.com/v2/cryptocurrency/quotes/latest`
6. **Crypto Map** `toolHttpRequest` — url: `https://pro-api.coinmarketcap.com/v1/cryptocurrency/map`
7. **Crypto Info** `toolHttpRequest` — url: `https://pro-api.coinmarketcap.com/v2/cryptocurrency/info`
8. **Crypto Listings** `toolHttpRequest` — url: `https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest`
9. **Global Metrics** `toolHttpRequest` — url: `https://pro-api.coinmarketcap.com/v1/global-metrics/quotes/latest`
10. **Price Conversion** `toolHttpRequest` — url: `https://pro-api.coinmarketcap.com/v1/tools/price-conversion`
11. **Crypto Agent Guide** `stickyNote` — width: "840", height: "840", content: "[redacted]"
12. **Usage & Examples** `stickyNote` — color: "5", width: "720", height: "900"
13. **Errors & Licensing** `stickyNote` — color: "3", width: "600", height: "560"
14. **CoinMarketCap Crypto Agent** `agent` — text: "={{ $json.message }}", options: "[object Object]", promptType: "define"

## 💡 AI-Powered Ideas for Improvement
**Explain:**  
This n8n workflow acts as a cryptocurrency analyst using data from CoinMarketCap. It triggers when executed by another workflow and uses AI to analyze queries about cryptocurrencies. The workflow retrieves data such as price quotes, market rankings, and other crypto-related information using CoinMarketCap's API. It can handle tasks like getting the current price of a cryptocurrency, converting prices between currencies, and fetching metadata about different cryptocurrencies.

**Demonstrate:**  
A financial consultant might use this workflow to provide clients with up-to-date cryptocurrency data, helping them make informed investment decisions. It's useful for real-time analysis and reporting.

**Imitate:**  
1. Import the workflow into n8n.  
2. Set up API credentials for CoinMarketCap.  
3. Customize the workflow to trigger based on your specific needs, such as user queries.  
4. Test the workflow with different cryptocurrency queries to ensure it functions as expected.

**Practice:**  
Create a test scenario where you query the workflow to retrieve the latest price of Bitcoin and convert it to Euros. Monitor how the workflow processes this request and outputs the data.

**WIIFM:**  
Mastering this workflow allows you to offer advanced crypto analytics services, attracting clients interested in cryptocurrency investments. This can increase your service offerings and generate additional income in the growing field of AI-driven financial analysis.

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
