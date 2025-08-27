# Code Schedule Monitor Webhook
  ## 🚀 What It Does
  Monitors events, processes them, and **notifies** people/apps (Slack/Email) with structured updates.
  
  ## 💼 Business Use Case
  Use as a **glue/API broker**: receive data, enrich/validate via APIs, and pass to downstream systems.
  
  ## ⚙️ How It Works
  1. **Trigger:** Runs on a **schedule** (e.g., `[object Object]`).
  2. **OpenAI Chat Model** `lmChatOpenAi` — options: "[object Object]"
3. **Schedule Trigger** `scheduleTrigger` — rule: "[object Object]"
4. **Sticky Note** `stickyNote` — color: "7", width: "600", height: "960"
5. **Sticky Note3** `stickyNote` — color: "7", width: "600", height: "680"
6. **Sticky Note4** `stickyNote` — color: "7", width: "460", height: "960"
7. **Sticky Note6** `stickyNote` — color: "7", width: "460", height: "960"
8. **Sticky Note5** `stickyNote` — color: "7", width: "960", height: "500"
9. **Sticky Note8** `stickyNote` — color: "7", width: "460", height: "960"
10. **Sticky Note9** `stickyNote` — color: "7", width: "980", height: "960"
11. **Sticky Note10** `stickyNote` — color: "7", width: "960", height: "580"
12. **Sticky Note2** `stickyNote` — color: "5", width: "600", height: "440"
13. **Sticky Note11** `stickyNote` — color: "7", width: "600", height: "680"
14. **Sticky Note12** `stickyNote` — color: "7", width: "1260", height: "560"
15. **Sticky Note1** `stickyNote` — color: "7", width: "460", height: "600"
16. **Sticky Note7** `stickyNote` — color: "6", width: "780", height: "1300"
17. **OpenAI Chat Model1** `lmChatOpenAi` — options: "[object Object]"
18. **Google Sheets - Get article monitored database** `googleSheets` — options: "[object Object]", sheetName: "[object Object]", documentId: "[object Object]"
19. **Set field - existing_url** `set` — options: "[object Object]", assignments: "[object Object]"
20. **Google Sheets - Get RSS Feed url followed** `googleSheets` — options: "[object Object]", sheetName: "[object Object]", documentId: "[object Object]"
21. **RSS Read** `rssFeedRead` — url: `={{ $json.rss_feed_url }}`
22. **Code** `code` — jsCode: "// Retrieve data from RSS feed and Google Sheets
const rssItems = items; // Contains RSS articles
const sheetItems = $items("Set field - existing_url", 0);

// Extract the links of…[truncated]"
23. **If** `if` — options: "[object Object]", conditions: "[object Object]"
24. **Relevance Classification for Topic Monitoring** `textClassifier` — options: "[object Object]", inputText: "={{ $json.title }}
{{ $json.contentSnippet }}", categories: "[object Object]"
25. **No Operation, do nothing** `noOp` — configured for its default action.
26. **Jina AI - Read URL** `httpRequest` — url: `=https://r.jina.ai/{{ $json.link }}`
27. **Set fields - Not relevant articles** `set` — options: "[object Object]", assignments: "[object Object]"
28. **Basic LLM Chain** `chainLlm` — text: "={{ $json.data }}", messages: "[object Object]", promptType: "define"
29. **Google Sheets - Add relevant articles** `googleSheets` — operation: **append**
30. **Slack1** `slack` — text: "={{ $json.text }}", select: "channel", channelId: "[object Object]"
31. **Set Fields - Relevant Articles** `set` — options: "[object Object]", assignments: "[object Object]"
32. **Google Sheets - Add relevant article** `googleSheets` — operation: **append**
  
  ## 💡 AI-Powered Ideas for Improvement
  **Explain**  
This n8n workflow automates the monitoring of RSS feeds for articles related to specific topics. It uses Google Sheets to track URLs, classifies articles with AI for relevance, extracts content with Jina AI, and summarizes relevant articles using OpenAI. Summaries are then sent to a Slack channel for easy access.

**Demonstrate**  
A tech company could use this workflow to keep their team updated on AI and data science news. By automating this process, they ensure that relevant content is delivered efficiently, saving time and enhancing team knowledge.

**Imitate**  
1. Import the workflow into n8n.
2. Connect Google Sheets, OpenAI, and Slack.
3. Enter your RSS feed URLs in Google Sheets.
4. Customize the classification criteria in the AI nodes.
5. Activate the workflow to begin monitoring.

**Practice**  
Create a Google Sheet with a list of RSS feed URLs and run the workflow. Check Slack for article summaries. Experiment by adding more feeds or changing the relevance criteria to see different outputs.

**WIIFM**  
Mastering this workflow enables you to offer automated content curation services. By keeping clients informed with minimal manual effort, you can enhance their industry knowledge, improve engagement, and boost your automation business's value proposition.
  
  ## 🔧 Setup Instructions
  1. **Connect Credentials:** openAiApi, googleApi, slackOAuth2Api.
2. **Cron/Schedule:** Confirm timezone and cadence; start with a test window (e.g., every 5 minutes) then scale.
3. **Data Mapping:** Verify base/sheet IDs and column names match exactly to prevent silent failures.
4. **Notification Targets:** Confirm channel/email IDs and that the bot/app is authorized to post.
5. **API Contracts:** Validate required headers and 2xx/4xx handling; add retries for 429/5xx.
  
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
  