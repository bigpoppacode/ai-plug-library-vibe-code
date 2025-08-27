# Stickynote ExecuteWorkflow Automation Webhook
## 🚀 What It Does
Calls external APIs and uses **AI** to transform or decide, then routes the result downstream.

## 💼 Business Use Case
Use as a **glue/API broker**: receive data, enrich/validate via APIs, and pass to downstream systems.

## ⚙️ How It Works
1. **Trigger:** This workflow starts with **When Executed by Another Workflow**.
2. **When Executed by Another Workflow** `executeWorkflowTrigger` — workflowInputs: "[object Object]"
3. **DEXScan Agent Brain** `lmChatOpenAi` — model: `[object Object]`
4. **DEXScan Agent Memory** `memoryBufferWindow` — configured for its default action.
5. **DEX Metadata** `toolHttpRequest` — url: `https://pro-api.coinmarketcap.com/v4/dex/listings/info`
6. **DEX Networks List** `toolHttpRequest` — url: `https://pro-api.coinmarketcap.com/v4/dex/networks/list`
7. **DEX Listings Quotes** `toolHttpRequest` — url: `https://pro-api.coinmarketcap.com/v4/dex/listings/quotes`
8. **DEX Pair Quotes Latest** `toolHttpRequest` — url: `https://pro-api.coinmarketcap.com/v4/dex/pairs/quotes/latest`
9. **DEX OHLCV Historical** `toolHttpRequest` — url: `https://pro-api.coinmarketcap.com/v4/dex/pairs/ohlcv/historical`
10. **DEX OHLCV Latest** `toolHttpRequest` — url: `https://pro-api.coinmarketcap.com/v4/dex/pairs/ohlcv/latest`
11. **DEX Trades Latest** `toolHttpRequest` — url: `https://pro-api.coinmarketcap.com/v4/dex/pairs/trade/latest`
12. **DEX Spot Pairs Latest** `toolHttpRequest` — url: `https://pro-api.coinmarketcap.com/v4/dex/spot-pairs/latest`
13. **DEXScan Agent Guide** `stickyNote` — width: "1080", height: "1420", content: "[redacted]"
14. **DEX Usage + Examples** `stickyNote` — color: "5", width: "960", height: "1000"
15. **DEX Errors + IP Notice** `stickyNote` — color: "3", width: "740", height: "600"
16. **CoinMarketCap DEXScan Agent** `agent` — text: "={{ $json.message }}", options: "[object Object]", promptType: "define"

## 💡 AI-Powered Ideas for Improvement
### Explain
This n8n workflow is designed to interact with CoinMarketCap's DEXScan API to provide detailed, real-time, and historical data about decentralized exchanges (DEXs). It retrieves data such as market quotes, trading activity, and historical prices for spot pairs. The workflow can be triggered by another workflow, using an AI agent to process and manage the data efficiently.

### Demonstrate
A financial analyst at a cryptocurrency exchange could use this workflow to automate the retrieval of DEX trading data, ensuring they have the latest market insights for decision-making, without manually checking multiple sources.

### Imitate
1. Import the workflow into your n8n instance.
2. Connect your CoinMarketCap API credentials.
3. Set up a trigger to execute this workflow from another workflow.
4. Customize the API calls to match your data needs (e.g., specific DEXs or trading pairs).
5. Run the workflow to fetch and analyze DEX data.

### Practice
Create a test workflow that triggers this DEXScan workflow. Modify the workflow to request metadata for a specific DEX and review the returned data. Experiment with different endpoints to see the range of data available.

### WIIFM
Mastering this workflow allows you to offer advanced crypto market analysis services, providing clients with up-to-date insights. This can enhance your offerings as a consultant or business owner, making you a valuable resource in the cryptocurrency market analysis space.

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
