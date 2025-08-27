# Telegram Splitout Create Webhook
## 🚀 What It Does
Calls external APIs and uses **AI** to transform or decide, then routes the result downstream.

## 💼 Business Use Case
Use as a **glue/API broker**: receive data, enrich/validate via APIs, and pass to downstream systems.

## ⚙️ How It Works
1. **Trigger:** Runs on a **schedule** (e.g., `[object Object]`).
2. **Google Gemini Chat Model** `lmChatGoogleGemini` — options: "[object Object]", modelName: "models/gemini-1.5-pro"
3. **Schedule Trigger** `scheduleTrigger` — rule: "[object Object]"
4. **CreateYearsList** `code` — jsCode: "for (const item of $input.all()) {
 const currentDateStr = item.json.timestamp.split('T')[0];
 const currentDate = new Date(currentDateStr);
 const currentYear = currentDate.getFul…[truncated]"
5. **CleanUpYearList** `set` — options: "[object Object]", assignments: "[object Object]"
6. **SplitOutYearList** `splitOut` — options: "[object Object]", fieldToSplitOut: "datesToFetch"
7. **GetFrontPage** `httpRequest` — url: `=https://news.ycombinator.com/front`
8. **ExtractDetails** `html` — operation: **extractHtmlContent**
9. **GetHeadlines** `set` — options: "[object Object]", assignments: "[object Object]"
10. **GetDate** `set` — options: "[object Object]", assignments: "[object Object]"
11. **MergeHeadlinesDate** `merge` — mode: "combine", options: "[object Object]", combineBy: "combineByPosition"
12. **SingleJson** `aggregate` — options: "[object Object]", aggregate: "aggregateAllItemData"
13. **Basic LLM Chain** `chainLlm` — text: "=You are a highly skilled news categorizer, specializing in indentifying interesting stuff from Hacker News front-page headlines.

You are provided with JSON data containing a list…[truncated]", promptType: "define"
14. **Telegram** `telegram` — text: "={{ $json.text }}", chatId: "@OnThisDayHN", additionalFields: "[object Object]"

## 💡 AI-Powered Ideas for Improvement
**Explain:**  
This n8n workflow automates the process of fetching top headlines from Hacker News for the same day across multiple years, analyzing them using an AI model, and sharing the insights via Telegram. It begins by scheduling a trigger, calculating relevant dates, and retrieving headlines. The headlines are categorized by an AI model, and the results are sent to a Telegram channel.

**Demonstrate:**  
A tech news blog could use this workflow to provide readers with a "This Day in Tech History" feature, offering insights into how technology discussions have evolved over the years.

**Imitate:**  
1. Import the workflow to n8n.
2. Set up the schedule trigger to run daily.
3. Connect your Telegram account.
4. Customize the AI model prompt for your analysis needs.
5. Test the workflow to ensure headlines are correctly fetched and categorized.

**Practice:**  
Create a similar workflow targeting a different news source or topic. Experiment with customizing the AI prompt to generate varied insights. Observe how changes affect the output on Telegram.

**WIIFM:**  
By mastering this workflow, you can offer niche content services that attract subscribers or clients interested in tech trends. This can be a unique selling point for content creators or consultants in the tech industry, potentially increasing engagement and revenue streams.

## 🔧 Setup Instructions
1. **Connect Credentials:** googlePalmApi, telegramApi.
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
