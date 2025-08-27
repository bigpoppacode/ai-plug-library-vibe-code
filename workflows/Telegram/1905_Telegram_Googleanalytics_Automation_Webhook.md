# Telegram Googleanalytics Automation Webhook
## 🚀 What It Does
Monitors events, processes them, and **notifies** people/apps (Slack/Email) with structured updates.

## 💼 Business Use Case
Use as a **glue/API broker**: receive data, enrich/validate via APIs, and pass to downstream systems.

## ⚙️ How It Works
1. **Trigger:** Runs on a **schedule** (e.g., `[object Object]`).
2. **Schedule Trigger** `scheduleTrigger` — rule: "[object Object]"
3. **OpenAI Chat Model** `lmChatOpenAi` — model: `gpt-4o`
4. **Google_Ads** `toolWorkflow` — name: "Google_Ads", workflowId: "[object Object]", description: "Call this tool to get the output of the Google Ads Workflow"
5. **Meta_Ads** `toolWorkflow` — name: "Meta_Ads", workflowId: "[object Object]", description: "Call this tool to get the output of the Meta Ads Workflow"
6. **Analytics_Domain_1** `toolWorkflow` — name: "EP_Data", workflowId: "[object Object]", description: "Call this tool to get the output of the SER Data Workflow"
7. **Analytics_Domain_3** `toolWorkflow` — name: "SBW_Data", workflowId: "[object Object]", description: "Call this tool to get the output of the SBW Data Workflow"
8. **Analytics_Domain_2** `toolWorkflow` — name: "SER_Data", workflowId: "[object Object]", description: "Call this tool to get the output of the SER Data Workflow"
9. **Analytics_Domain_4** `toolWorkflow` — name: "SZO_Data", workflowId: "[object Object]", description: "Call this tool to get the output of the SZO Data Workflow"
10. **Analytics_Domain_5** `toolWorkflow` — name: "UCH_Data", workflowId: "[object Object]", description: "Call this tool to get the output of the UCH Data Workflow"
11. **Execute Workflow Trigger** `executeWorkflowTrigger` — configured for its default action.
12. **Calculator** `toolCalculator` — configured for its default action.
13. **Sticky Note** `stickyNote` — color: "6", width: "2340", height: "460"
14. **Sticky Note2** `stickyNote` — color: "5", width: "2340", height: "460"
15. **Sticky Note3** `stickyNote` — width: "2340", height: "540", content: "## Main Workflow: Weekly Report Assistant"
16. **Calculator1** `toolCalculator` — configured for its default action.
17. **Sticky Note4** `stickyNote` — color: "4", width: "2340", height: "500"
18. **Calculator3** `toolCalculator` — configured for its default action.
19. **Calculate date format for Google Ads request (last 7 days)** `code` — jsCode: "// Aktuelles Datum
const today = new Date();

// Berechnung des Enddatums (letzter Tag vor dem aktuellen Datum)
const end = new Date(today);
end.setDate(today.getDate() - 1);

// B…[truncated]"
20. **Calculate date format for meta ads request s** `code` — jsCode: "// Aktuelles Datum
const now = new Date();

// Gestern als Ende-Datum
const yesterday = new Date(now);
yesterday.setDate(now.getDate() - 1);

// Start-Datum (7 Tage vor gestern)
co…[truncated]"
21. **Sticky Note1** `stickyNote` — width: "440", height: "2180", content: "Welcome to Online Marketing Weekly Report Workflow!

This workflow has the following sequence:

1. time trigger (e.g. every Monday at 7 a.m.)
2. retrieval of Online Marketing data …[truncated]"
22. **Weekly Report Agent** `agent` — text: "=# Expert in Data Processing and Email Generation in N8N
YOU ARE AN EXPERT IN DATA PROCESSING AND EMAIL GENERATION IN N8N. YOUR TASK IS TO CREATE AN ENGLISH-LANGUAGE HTML EMAIL THA…[truncated]", options: "[object Object]", promptType: "define"
23. **Call Google Analytics data: Last 7 days** `googleAnalytics` — metricsGA4: "[object Object]", propertyId: "[object Object]", dimensionsGA4: "[object Object]"
24. **Call Google Ads Data: Last 7 days** `httpRequest` — method: **POST**, url: `https://googleads.googleapis.com/v17/customers/3300525230/googleAds:search`
25. **Call Meta Ads Data: Last 7 days** `facebookGraphApi` — edge: "insights", node: "act_54337533", options: "[object Object]"
26. **Processing for Telegram Report** `openAi` — modelId: "[object Object]", options: "[object Object]", messages: "[object Object]"
27. **Send mail report** `emailSend` — html: "={{ $json.output }}", options: "[object Object]", subject: "Weekly Report: Online Marketing Report"
28. **Assign Google Analytics data input (current year)** `set` — options: "[object Object]", assignments: "[object Object]"
29. **Format data input (current year)** `code` — jsCode: "const inputData = items[0].json.results;
const totals = {
    impressions: 0,
    clicks: 0,
    conversions: 0,
    costMicros: 0,
    conversionsValue: 0
};

inputData.forEach(ca…[truncated]"
30. **Assign Meta data from input (current year)** `set` — options: "[object Object]", assignments: "[object Object]"
31. **Send Telegram report** `telegram` — text: "={{ $json.message.content }}", chatId: "1810565648", additionalFields: "[object Object]"
32. **Summarize Google Analytics input (current year)** `summarize` — options: "[object Object]", fieldsToSummarize: "[object Object]"
33. **Assign data from input (current year)** `set` — options: "[object Object]", assignments: "[object Object]"
34. **Summarize Meta input (current year)** `summarize` — options: "[object Object]", fieldsToSummarize: "[object Object]"
35. **Calculation same period previous year1** `code` — jsCode: "return {
  // Berechnung des Startdatums: Vorjahr, gleiche Woche, 7 Tage zurück
  startDate: (() => {
    const date = new Date();
    date.setFullYear(date.getFullYear() - 1); // …[truncated]"
36. **Summarize input (current year)** `summarize` — options: "[object Object]", fieldsToSummarize: "[object Object]"
37. **Call Meta Ads Data: Last 7 days (previous year)** `facebookGraphApi` — edge: "insights", node: "act_54337533", options: "[object Object]"
38. **Call Google Analytics data: Last 7 days (previous year)** `googleAnalytics` — endDate: "={{ $json.endDate }}", dateRange: "custom", startDate: "={{ $json.startDate }}"
39. **Calculation same period previous year** `code` — jsCode: "// Aktuelles Datum
const today = new Date();

// Berechnung des Enddatums (letzter Tag vor dem aktuellen Datum im Vorjahr)
const end = new Date(today.getFullYear() - 1, today.getMo…[truncated]"
40. **Assign Meta data input (previous year)** `set` — options: "[object Object]", assignments: "[object Object]"
41. **Assign Google Analytics data input (previous year)** `set` — options: "[object Object]", assignments: "[object Object]"
42. **Call Google Ads Data: Last 7 days (previous year)** `httpRequest` — method: **POST**, url: `https://googleads.googleapis.com/v17/customers/3300525230/googleAds:search`
43. **Summarize Meta data input (previous year)** `summarize` — options: "[object Object]", fieldsToSummarize: "[object Object]"
44. **Summarize Google Analytics input (previous year)** `summarize` — options: "[object Object]", fieldsToSummarize: "[object Object]"
45. **Format data input (previous year)** `code` — jsCode: "const inputData = items[0].json.results;
const totals = {
   impressions: 0,
   clicks: 0,
   conversions: 0,
   costMicros: 0,
   conversionsValue: 0
};

inputData.forEach(campaig…[truncated]"
46. **Format all Meta data for LLM** `code` — jsCode: "const currentData = $('Summarize Meta input (current year)').first().json;
const previousData = $('Summarize Meta data input (previous year)').first().json;

function parseNumber(v…[truncated]"
47. **Processing for Google Analytics Report** `openAi` — modelId: "[object Object]", options: "[object Object]", messages: "[object Object]"
48. **Assign input (previous year)** `set` — options: "[object Object]", assignments: "[object Object]"
49. **Processing for Meta Ads Report** `openAi` — modelId: "[object Object]", options: "[object Object]", messages: "[object Object]"
50. **Summarize input (previous year)** `summarize` — options: "[object Object]", fieldsToSummarize: "[object Object]"
51. **Format all Google data for LLM** `code` — jsCode: "const currentData = $('Summarize input (current year)').first().json;
const previousData = $('Summarize input (previous year)').first().json;

function formatNumber(number, decimal…[truncated]"
52. **Processing for Google Ads report** `openAi` — modelId: "[object Object]", options: "[object Object]", messages: "[object Object]"

## 💡 AI-Powered Ideas for Improvement
### Explain
This n8n workflow automates the generation of a weekly online marketing report. It collects data from various sources like Google Analytics, Google Ads, and Meta Ads for the past 7 days and compares it with the same period from the previous year. The workflow then processes this data, creates a summary using AI, and sends an HTML email report to stakeholders. Additionally, it formats a brief report for Telegram messaging.

### Demonstrate
A marketing manager could use this workflow to automatically receive a weekly performance report of their online campaigns. This would help them quickly assess trends, compare performance with the previous year, and make informed decisions without manually compiling data.

### Imitate
1. Access n8n and create a new workflow.
2. Set up the Schedule Trigger to run weekly.
3. Connect your Google Analytics, Google Ads, and Meta Ads accounts to retrieve data.
4. Use AI nodes to process and summarize the data.
5. Configure email settings to send the report.
6. Test the workflow to ensure it generates and sends reports correctly.

### Practice
Create a test workflow that pulls data from a Google Analytics demo account, processes it, and sends a summary email to yourself. Experiment with modifying the email format and content to better suit your reporting needs.

### WIIFM
Mastering this workflow allows you to offer a high-value automation service to clients who need regular marketing insights. By saving them time and providing accurate data analysis, you can enhance your service offerings, increase client satisfaction, and boost your income.

## 🔧 Setup Instructions
1. **Connect Credentials:** openAiApi, googleAnalyticsOAuth2, googleOAuth2Api, googleAdsOAuth2Api, facebookGraphApi.
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
