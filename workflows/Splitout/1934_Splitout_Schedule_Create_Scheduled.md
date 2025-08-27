# Splitout Schedule Create Scheduled
## 🚀 What It Does
Monitors events, processes them, and **notifies** people/apps (Slack/Email) with structured updates.

## 💼 Business Use Case
Great for **content, summarization, triage, or decisioning** where AI adds speed and consistency.

## ⚙️ How It Works
1. **Trigger:** Runs on a **schedule** (e.g., `[object Object]`).
2. **Embeddings OpenAI** `embeddingsOpenAi` — options: "[object Object]"
3. **Default Data Loader** `documentDefaultDataLoader` — options: "[object Object]", jsonData: "=# {{ $json.title }}
{{ $json.content }}", jsonMode: "expressionData"
4. **Recursive Character Text Splitter** `textSplitterRecursiveCharacterTextSplitter` — options: "[object Object]", chunkSize: "3000"
5. **OpenAI Chat Model** `lmChatOpenAi` — model: `[object Object]`
6. **Get Articles Daily** `scheduleTrigger` — rule: "[object Object]"
7. **Send Weekly Summary** `scheduleTrigger` — rule: "[object Object]"
8. **Sticky Note1** `stickyNote` — color: "7", width: "1620", height: "740"
9. **Sticky Note** `stickyNote` — color: "4", width: "520", height: "180"
10. **Sticky Note2** `stickyNote` — color: "7", width: "1300", height: "600"
11. **Sticky Note3** `stickyNote` — color: "3", width: "220", height: "240"
12. **Get News Articles** `vectorStoreInMemory` — mode: "retrieve-as-tool", topK: "20", toolName: "get_news"
13. **Embeddings OpenAI2** `embeddingsOpenAi` — options: "[object Object]"
14. **Sticky Note4** `stickyNote` — color: "3", width: "220", height: "240"
15. **Sticky Note5** `stickyNote` — width: "400", height: "900", content: "
### How it works

* A **daily scheduled trigger** fetches articles from multiple popular tech RSS feeds like Wired, TechCrunch, and The Verge.

* Fetched articles are:
  * **Norma…[truncated]"
16. **Sticky Note6** `stickyNote` — color: "5", width: "520", height: "280"
17. **Set Tech News RSS Feeds** `set` — options: "[object Object]", assignments: "[object Object]"
18. **Your topics of interest** `set` — options: "[object Object]", assignments: "[object Object]"
19. **Split Out** `splitOut` — options: "[object Object]", fieldToSplitOut: "rss"
20. **News reader AI** `agent` — text: "=Summarize last week's news.", options: "[object Object]", promptType: "define"
21. **Read RSS News Feeds** `rssFeedRead` — url: `={{ $json.rss }}`
22. **Convert Response to an Email-Friendly Format** `markdown` — mode: "markdownToHtml", options: "[object Object]", markdown: "={{ $json.output }}"
23. **Normalize Fields** `set` — options: "[object Object]", assignments: "[object Object]"
24. **Send Newsletter** `gmail` — sendTo: "miha.ambroz@n8n.io", message: "={{ $json.data }}", options: "[object Object]"
25. **Store News Articles** `vectorStoreInMemory` — mode: "insert", memoryKey: "news_store_key"

## 💡 AI-Powered Ideas for Improvement
### Explain
This n8n workflow automates the creation of a personalized tech newsletter. It fetches daily articles from various tech RSS feeds, processes them using AI to extract and summarize content according to user interests, and sends a weekly email summary. The articles are stored in a vector database for efficient retrieval based on user preferences, ensuring the newsletter is tailored and relevant.

### Demonstrate
A tech consultant can use this workflow to keep clients informed about industry trends by delivering a customized weekly tech newsletter. It saves time on manual research and ensures clients receive only the most pertinent news.

### Imitate
1. Import the workflow into n8n.
2. Connect OpenAI and Gmail accounts.
3. Customize the RSS feeds and topics of interest.
4. Set the schedule for daily article fetching and weekly summary sending.
5. Activate the workflow and monitor its execution.

### Practice
Create a simplified version by selecting only one RSS feed and a few topics. Run the workflow and check the generated email for accuracy and relevance, then gradually add more feeds and topics to scale up.

### WIIFM
Mastering this workflow allows you to offer personalized content delivery services, enhancing client engagement and satisfaction. It's a valuable addition to your AI automation business, potentially increasing your client base and revenue through unique, high-value offerings.

## 🔧 Setup Instructions
1. **Connect Credentials:** openAiApi, gmailOAuth2.
2. **Cron/Schedule:** Confirm timezone and cadence; start with a test window (e.g., every 5 minutes) then scale.
3. **Notification Targets:** Confirm channel/email IDs and that the bot/app is authorized to post.

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
