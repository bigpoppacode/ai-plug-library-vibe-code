# Splitout Code Create Scheduled
## 🚀 What It Does
Monitors events, processes them, and **notifies** people/apps (Slack/Email) with structured updates.

## 💼 Business Use Case
Use as a **glue/API broker**: receive data, enrich/validate via APIs, and pass to downstream systems.

## ⚙️ How It Works
1. **Trigger:** Runs on a **schedule** (e.g., `[object Object]`).
2. **Data Collection** `stickyNote` — width: "380", height: "620", content: "# Data Collection
Fetches latest news articles from two RSS sources: Calcalist and Mako"
3. **Data Processing** `stickyNote` — width: "740", height: "360", content: "# Data Processing
Filters, sorts and prepares news articles for AI selection"
4. **AI Selection** `stickyNote` — width: "400", height: "360", content: "# AI Selection
Uses GPT-4o to select the top 5 most relevant articles for a senior executive"
5. **Email Generation** `stickyNote` — width: "1160", height: "520", content: "# Email Generation
Creates and sends formatted HTML digest email with selected articles"
6. **Schedule Trigger** `scheduleTrigger` — rule: "[object Object]"
7. **RSS - Mako** `rssFeedRead` — url: `https://storage.googleapis.com/mako-sitemaps/rss-hp.xml`
8. **Get Date** `function` — functionCode: "const now = new Date();
const options = {
  timeZone: 'Asia/Jerusalem',
  day: '2-digit',
  month: '2-digit',
  year: 'numeric'
};

// Format date according to Israeli format
const…[truncated]"
9. **RSS - Calcalist** `rssFeedRead` — url: `https://www.calcalist.co.il/GeneralRSS/0,16335,L-8,00.xml`
10. **Edit Fields - Mako** `set` — options: "[object Object]", assignments: "[object Object]"
11. **Edit Fields - Calcalist** `set` — options: "[object Object]", assignments: "[object Object]"
12. **Merged RSS** `merge` — configured for its default action.
13. **Remove NaN** `filter` — options: "[object Object]", conditions: "[object Object]"
14. **Sort List** `sort` — options: "[object Object]", sortFieldsUi: "[object Object]"
15. **Clean List** `code` — jsCode: "// Input: items[] - each one is an article

// Step 1: Remove duplicates by link
const uniqueMap = new Map();
for (const item of items) {
  const link = item.json.link;
  if (!uniq…[truncated]"
16. **ChatGPT 4o** `openAi` — modelId: "[object Object]", options: "[object Object]", messages: "[object Object]"
17. **Split Out** `splitOut` — options: "[object Object]", fieldToSplitOut: "message.content.articles"
18. **Fetch HTML** `httpRequest` — url: `={{ $json.link }}`
19. **Extract Text** `html` — operation: **extractHtmlContent**
20. **Clean Text** `set` — options: "[object Object]", assignments: "[object Object]"
21. **Aggregate** `aggregate` — options: "[object Object]", aggregate: "aggregateAllItemData"
22. **Create HTML** `html` — html: "<!DOCTYPE html>

<html dir="rtl">
<head>
  <meta charset="UTF-8" />
</head>
<body style="margin: 0; padding: 20px; background-color: #f4f6fa; font-family: 'Heebo', 'Assistant', san…[truncated]"
23. **Merge** `merge` — mode: "combine", options: "[object Object]", combineBy: "combineByPosition"
24. **Send Daily News** `emailSend` — html: "={{ $json.html }}", options: "[object Object]", subject: "=סקירה ה-AI היומית שלך: {{ $json.date_today }}"

## 💡 AI-Powered Ideas for Improvement
**Explain:**  
This n8n workflow automates the process of gathering, filtering, and distributing news articles. It collects the latest articles from two RSS feeds, processes them to remove duplicates and sort by relevance, and then uses GPT-4o to select the top five articles. These selected articles are formatted into an HTML email and sent to a senior executive daily.

**Demonstrate:**  
A business owner could use this workflow to stay updated on industry news, ensuring they receive only the most relevant articles each day, saving time and staying informed.

**Imitate:**  
1. Import the workflow into n8n.
2. Connect the RSS feeds and configure the schedule trigger.
3. Ensure GPT-4o and email credentials are set up.
4. Test the workflow to check the email output.
5. Adjust the RSS and email settings as needed.

**Practice:**  
Set up a test with different RSS feeds, like tech or finance news. Run the workflow and observe the changes in article selection and email formatting to understand its adaptability.

**WIIFM:**  
Mastering this workflow can help students offer tailored news curation services to executives or businesses, creating value through automation. This can attract customers or generate income by providing timely and relevant information to decision-makers.

## 🔧 Setup Instructions
1. **Connect Credentials:** smtp, openAiApi.
2. **Cron/Schedule:** Confirm timezone and cadence; start with a test window (e.g., every 5 minutes) then scale.
3. **Notification Targets:** Confirm channel/email IDs and that the bot/app is authorized to post.
4. **API Contracts:** Validate required headers and 2xx/4xx handling; add retries for 429/5xx.

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
