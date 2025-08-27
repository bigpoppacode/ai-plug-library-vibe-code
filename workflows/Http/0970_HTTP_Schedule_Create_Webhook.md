# HTTP Schedule Create Webhook
  ## 🚀 What It Does
  Calls external APIs and uses **AI** to transform or decide, then routes the result downstream.
  
  ## 💼 Business Use Case
  Use as a **glue/API broker**: receive data, enrich/validate via APIs, and pass to downstream systems.
  
  ## ⚙️ How It Works
  1. **Trigger:** Runs on a **schedule** (e.g., `[object Object]`).
  2. **Workflow Overview** `stickyNote` — color: "7", width: "720", height: "600"
3. **Trigger at 8am daily** `scheduleTrigger` — rule: "[object Object]"
4. **Sticky: News APIs** `stickyNote` — color: "5", width: "480", height: "570"
5. **GPT-4.1 Model** `lmChatOpenAi` — model: `[object Object]`
6. **Sticky: AI Processing** `stickyNote` — color: "2", width: "400", height: "580"
7. **Fetch GNews articles** `httpRequest` — url: `https://gnews.io/api/v4/search`
8. **Fetch NewsAPI articles** `httpRequest` — url: `https://newsapi.org/v2/everything`
9. **GNews: Map to articles** `set` — options: "[object Object]", assignments: "[object Object]"
10. **NewsAPI: Map to articles** `set` — options: "[object Object]", assignments: "[object Object]"
11. **Merge GNews & NewsAPI** `merge` — configured for its default action.
12. **AI summarizer & translator** `agent` — text: "=You are an AI news assistant. Your tasks:
1. Select the 15 most relevant articles on AI technology progress and applications from {{$json.articles}}.
2. Translate them to accurate…[truncated]", options: "[object Object]", promptType: "define"
13. **Send summary to Telegram** `telegram` — text: "={{ $json.output }}", additionalFields: "[object Object]"
  
  ## 💡 AI-Powered Ideas for Improvement
  **Explain:**  
This n8n workflow automatically gathers AI-related news articles from two sources, GNews and NewsAPI, every day at 8 am. It uses GPT-4.1 to summarize and translate the top 15 articles into Traditional Chinese, ensuring technical terms remain in English, then sends this summary to a specified Telegram chat.

**Demonstrate:**  
A tech consultant could use this workflow to keep clients updated with the latest AI news, providing daily insights in their preferred language without manual effort.

**Imitate:**  
1. Import the workflow into n8n.
2. Set up API keys for GNews, NewsAPI, and OpenAI.
3. Configure a Telegram Bot and input the chat ID.
4. Customize keywords and schedule time if needed.
5. Activate the workflow.

**Practice:**  
Create a test Telegram group and run the workflow to see how the summarized news is delivered. Experiment with changing the keywords to fetch different topics like "blockchain" or "quantum computing."

**WIIFM:**  
Mastering this workflow could help you offer a unique news delivery service, enhancing client engagement and potentially creating a subscription-based model, boosting your automation business revenue.
  
  ## 🔧 Setup Instructions
  1. **Connect Credentials:** openAiApi, telegramApi.
2. **Cron/Schedule:** Confirm timezone and cadence; start with a test window (e.g., every 5 minutes) then scale.
3. **API Contracts:** Validate required headers and 2xx/4xx handling; add retries for 429/5xx.
  
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
  