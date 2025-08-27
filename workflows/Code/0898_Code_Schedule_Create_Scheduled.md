# Code Schedule Create Scheduled
  ## 🚀 What It Does
  Monitors events, processes them, and **notifies** people/apps (Slack/Email) with structured updates.
  
  ## 💼 Business Use Case
  Use as a **glue/API broker**: receive data, enrich/validate via APIs, and pass to downstream systems.
  
  ## ⚙️ How It Works
  1. **Trigger:** This workflow starts with **Workflow Input Trigger**.
  2. **Window Buffer Memory** `memoryBufferWindow` — sessionKey: "=335458847", sessionIdType: "customKey"
3. **Sticky Note** `stickyNote` — color: "4", width: "1820", height: "580"
4. **Sticky Note1** `stickyNote` — width: "2820", height: "920", content: "# Technical Analysis Tool
A tool that performs in-depth technical analysis of stock charts by combining visual pattern recognition with quantitative indicators. It fetches data fro…[truncated]"
5. **Sticky Note2** `stickyNote` — width: "980", height: "580", content: "# Trends Analysis Tool
A tool that analyses news sentiment for requested stocks by fetching recent financial news articles, calculating sentiment metrics, identifying influential s…[truncated]"
6. **Structured Output Parser** `outputParserStructured` — schemaType: "manual", inputSchema: "{
  "stockSymbol": "סימול",
  "analysisDate": "DD/MM/YYYY",
  "recommendationClass": "positive/neutral/negative",
  "recommendationTitle": "כותרת המלצה בעברית",
  "recommendationTe…[truncated]"
7. **GPT 4o** `lmChatOpenAi` — model: `[object Object]`
8. **Think** `toolThink` — configured for its default action.
9. **Sticky Note8** `stickyNote` — color: "3", width: "160", height: "80"
10. **Workflow Input Trigger** `executeWorkflowTrigger` — workflowInputs: "[object Object]"
11. **Schedule Trigger1** `scheduleTrigger` — rule: "[object Object]"
12. **Technical Analysis Tool** `toolWorkflow` — name: "technical_analysis", workflowId: "[object Object]", description: "Call this tool to get an analysis of a requested stock. It'll be obligatory to pass ticker."
13. **Trends Analysis Tool** `toolWorkflow` — name: "trends_analysis", workflowId: "[object Object]", description: "Call this tool to get an analysis of a requested stock. It'll be obligatory to pass ticker."
14. **Sticky Note16** `stickyNote` — color: "3", width: "160", height: "80"
15. **Sticky Note14** `stickyNote` — color: "3", width: "160", height: "80"
16. **Sticky Note15** `stickyNote` — color: "3", width: "160", height: "80"
17. **Sticky Note17** `stickyNote` — color: "3", width: "160", height: "80"
18. **Sticky Note19** `stickyNote` — color: "3", width: "160", height: "80"
19. **Sticky Note13** `stickyNote` — color: "3", width: "160", height: "80"
20. **Sticky Note3** `stickyNote` — color: "7", width: "440", height: "300"
21. **Sticky Note4** `stickyNote` — color: "7", width: "440", height: "1200"
22. **On form submission** `formTrigger` — options: "[object Object]", formTitle: "Advance Stock Analysis", formFields: "[object Object]"
23. **Set Stock Symbol and API Key** `set` — options: "[object Object]", assignments: "[object Object]"
24. **Generate Variables For API** `code` — jsCode: "// Function to generate yesterday's date in the required format
function getYesterdayDateFormat() {
  // Create a current date object
  const today = new Date();
  
  // Set the da…[truncated]"
25. **AI Agent** `agent` — text: "=Ticker = {{ $json["Ticker symbol:"] }}", options: "[object Object]", promptType: "define"
26. **Get Chart URL** `httpRequest` — method: **POST**, url: `https://api.chart-img.com/v2/tradingview/advanced-chart/storage`
27. **Get Price History** `httpRequest` — url: `=https://api.twelvedata.com/time_series`
28. **Get Bollinger Bands** `httpRequest` — url: `=https://api.twelvedata.com/bbands`
29. **Get MACD** `httpRequest` — url: `=https://api.twelvedata.com/macd`
30. **Set Variables** `set` — values: "[object Object]", options: "[object Object]"
31. **Refine Text** `openAi` — modelId: "[object Object]", options: "[object Object]", messages: "[object Object]"
32. **Download Chart** `httpRequest` — url: `={{ $json.url }}`
33. **Calculate Support Resistance** `code` — jsCode: "// Get historical price data
const data = $input.item.json;

// Check if data exists
if (!data.values || data.values.length === 0) {
  return { json: { error: "No price data availa…[truncated]"
34. **Get News Data** `httpRequest` — url: `[redacted]`
35. **Generate HTML** `html` — html: "<!DOCTYPE html>
<html dir="rtl" lang="he">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>ניתוח מניית {{ $(…[truncated]"
36. **First Technical Analysis** `openAi` — resource: **image**, operation: **analyze**
37. **Merge** `merge` — numberInputs: "3"
38. **Analyse API Input** `code` — jsCode: "/**
 * Custom code for n8n Code node to analyze news data from Alpha Vantage
 * 
 * - The code receives API data from the previous node
 * - Analyzes sentiment, leading articles, a…[truncated]"
39. **Adjust HTML Colors** `code` — jsCode: "// New function to remove topics with only one article - ultra-simple approach
function removeSingleArticleTopics(html) {
  // First, see if there are any topics with exactly 1 art…[truncated]"
40. **Set Variable** `set` — options: "[object Object]", assignments: "[object Object]"
41. **Organizing Data** `code` — jsCode: "// Getting data from different sources
// Checking existence of objects before trying to access them
const items = $input.all();
const fibData = $input.first().json;

// Trying to …[truncated]"
42. **Send Stock Analysis** `emailSend` — html: "={{ $json.html }}", options: "[object Object]", subject: "=הסקירה היומית של מניית {{ $('AI Agent').item.json.output.stockSymbol }}: {{ $('AI Agent').item.json.output.analysisDate }}"
43. **Merge-2** `merge` — mode: "combine", options: "[object Object]", combineBy: "combineByPosition"
44. **Warp as JSON for GPT** `code` — jsCode: "/**
 * INPUT: items[0].json (Original JSON)
 * OUTPUT: { textPayload: "```json\n{ ... }\n```" }
 */

const pretty = JSON.stringify(items[0].json, null, 2);
const wrapped = `\`\`\`j…[truncated]"
45. **ChatGPT 4o** `openAi` — modelId: "[object Object]", options: "[object Object]", messages: "[object Object]"
46. **Set Final Response** `set` — options: "[object Object]", assignments: "[object Object]"
  
  ## 💡 AI-Powered Ideas for Improvement
  **Explain**  
This n8n workflow automates stock analysis by combining technical chart analysis and news sentiment. It collects stock data, performs technical analysis using indicators like Bollinger Bands and MACD, fetches news sentiment, and generates a comprehensive report. The report, containing a detailed analysis and investment recommendation, is emailed in Hebrew, offering investors data-driven insights.

**Demonstrate**  
A financial advisor can use this workflow to automatically send clients weekly stock analysis reports, saving time on manual data collection and analysis, and providing timely investment insights.

**Imitate**  
1. Import the workflow into your n8n instance.  
2. Connect your API keys for Chart-img, Twelve Data, Alpha Vantage, and OpenAI.  
3. Customize the form to accept stock tickers.  
4. Test the workflow with a sample ticker and email.  
5. Activate the workflow to receive automated reports.

**Practice**  
Create a test stock ticker form, input a NASDAQ symbol, and run the workflow. Check your email for the report. Experiment with different tickers to see how the analysis and recommendations vary.

**WIIFM**  
Mastering this workflow enables you to offer automated stock analysis services, enhancing your financial advisory capabilities. This can attract more clients, improve client satisfaction with timely insights, and increase your revenue through value-added services.
  
  ## 🔧 Setup Instructions
  1. **Connect Credentials:** openAiApi, smtp, httpHeaderAuth.
2. **Notification Targets:** Confirm channel/email IDs and that the bot/app is authorized to post.
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
  