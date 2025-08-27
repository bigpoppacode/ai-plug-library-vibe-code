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
  const currentYear = currentDate.get…[truncated]"
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
### Explain
This n8n workflow fetches headlines from the Hacker News front page for the same day across multiple years, analyzes them using AI to identify trends and themes, and then posts a summary to a Telegram channel. It uses a schedule trigger to run daily, collects headlines, formats them with AI, and shares insights.

### Demonstrate
A tech analyst could use this workflow to track historical trends in technology news, providing a daily digest of how topics have evolved over time, shared directly to a Telegram channel for easy access and discussion.

### Imitate
1. Import the workflow into n8n.
2. Connect your Telegram account.
3. Adjust the schedule for your preferred time.
4. Ensure the URL for Hacker News is accurate.
5. Test the workflow to verify correct headline retrieval and Telegram posting.

### Practice
Create a test Telegram channel and run the workflow. Check how the headlines are categorized and shared. Modify the AI prompt to change the categorization criteria and observe different results.

### WIIFM
Mastering this workflow allows you to offer historical trend analysis services, helping clients understand industry shifts over time. This can enhance your portfolio, attract tech-savvy clients, and generate additional income streams through automated insights.

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
