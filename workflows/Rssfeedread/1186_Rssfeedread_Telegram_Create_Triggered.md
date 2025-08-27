# Rssfeedread Telegram Create Triggered
## 🚀 What It Does
Automates a flow using stickyNote×10, rssFeedRead×9, set×3.

## 💼 Business Use Case
Great for **content, summarization, triage, or decisioning** where AI adds speed and consistency.

## ⚙️ How It Works
1. **Trigger:** This workflow starts with **Send Crypto or Company Name for Analysis**.
2. **OpenAI Chat Model** `lmChatOpenAi` — model: `[object Object]`
3. **Sticky Note** `stickyNote` — color: "3", width: "300", height: "580"
4. **Send Crypto or Company Name for Analysis** `telegramTrigger` — updates: "message", additionalFields: "[object Object]"
5. **Sticky Note1** `stickyNote` — color: "4", width: "380", height: "360"
6. **Sticky Note2** `stickyNote` — width: "360", height: "320", content: "## Initialize Chat Session
Stores the user's chat ID as sessionId, which is used to manage conversation memory across steps."
7. **Sticky Note3** `stickyNote` — color: "6", width: "600", height: "460"
8. **Sticky Note4** `stickyNote` — color: "5", width: "460", height: "1980"
9. **Sticky Note5** `stickyNote` — color: "2", width: "480", height: "760"
10. **Sticky Note6** `stickyNote` — color: "7", width: "260", height: "360"
11. **Sticky Note7** `stickyNote` — color: "3", width: "340", height: "440"
12. **Sticky Note8** `stickyNote` — color: "6", height: "460", content: "## Format for Telegram

Extracts the AI summary and prepares it for Telegram delivery. Change the variable if you want to include other data.


"
13. **Sticky Note9** `stickyNote` — width: "520", content: "## ✅ How to Use This Template
 
🛠 1. Connect your Telegram bot
🤖 2. Add your OpenAI credentials
📰 3. Customize the RSS feeds (optional)
✅ 4. Start your bot and send a query like…[truncated]"
14. **Adds the sessionId** `set` — options: "[object Object]", assignments: "[object Object]"
15. **Crypto News & Sentiment Agent** `agent` — text: "={{ $('Send Crypto or Company Name for Analysis').item.json.message.text }}", options: "[object Object]", promptType: "define"
16. **Set Query** `set` — options: "[object Object]", assignments: "[object Object]"
17. **RSS Cointelegraph** `rssFeedRead` — url: `https://cointelegraph.com/rss`
18. **RSS Bitcoinmagazine** `rssFeedRead` — url: `https://bitcoinmagazine.com/.rss/full/`
19. **RSS Coindesk** `rssFeedRead` — url: `https://www.coindesk.com/arc/outboundfeeds/rss/`
20. **RSS Bitcoinist** `rssFeedRead` — url: `https://bitcoinist.com/feed/`
21. **RSS Newsbtc** `rssFeedRead` — url: `https://www.newsbtc.com/feed/`
22. **RSS Cryptopotato** `rssFeedRead` — url: `https://cryptopotato.com/feed/`
23. **RSS 99bitcoins** `rssFeedRead` — url: `https://99bitcoins.com/feed/`
24. **RSS Cryptobriefing** `rssFeedRead` — url: `https://cryptobriefing.com/feed/`
25. **RSS Crypto.news** `rssFeedRead` — url: `https://crypto.news/feed/`
26. **Merge All Articles** `merge` — numberInputs: "10"
27. **Filter by Query** `code` — jsCode: "const term = $node["Set Query"].json.query.toLowerCase();
return items.filter(item => {
  const j            = item.json;
  const title        = (j.title || "").toLowerCase();
  co…[truncated]"
28. **Build Prompt** `code` — jsCode: "const q   = $node["Set Query"].json.query;
const list = items
  .map(i => `- ${i.json.title} (${i.json.link})`)
  .join("\n");
const prompt = `
You are a crypto-industry news analy…[truncated]"
29. **Summarize News & Sentiment (GPT-4o)** `openAi` — modelId: "[object Object]", options: "[object Object]", messages: "[object Object]"
30. **Prepare Telegram Message** `set` — options: "[object Object]", assignments: "[object Object]"
31. **Sends Response** `telegram` — text: "={{ $json.summary }}", chatId: "<< Add Telegram ID here >>", additionalFields: "[object Object]"

## 💡 AI-Powered Ideas for Improvement
- **Explain:** This n8n workflow automates the process of analyzing cryptocurrency or company news and sentiment. A user sends a query via Telegram, which is processed to extract a keyword. The workflow then gathers articles from various crypto news RSS feeds, filters them based on the keyword, and uses OpenAI to summarize the news and sentiment. The summary is then sent back to the user via Telegram.

- **Demonstrate:** A cryptocurrency investor could use this workflow to quickly get a sentiment analysis on Bitcoin or Ethereum by sending a query, helping them make informed investment decisions based on the latest news.

- **Imitate:** To adapt this workflow:
  1. Set up a Telegram bot and connect it to n8n.
  2. Add your OpenAI credentials in n8n.
  3. Customize the RSS feeds if needed.
  4. Start the bot and send a query like "Bitcoin" to test the workflow.

- **Practice:** Create a Telegram bot and test this workflow by querying different cryptocurrencies. Observe the AI-generated summaries and adjust the RSS feed sources to see how results vary.

- **WIIFM:** Mastering this workflow enables you to offer automated news and sentiment analysis services to clients, providing them with timely insights. This can enhance your business offerings, attract more clients, and potentially increase your revenue in the AI automation sector.

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
