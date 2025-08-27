# Telegram Webhook Send Webhook
## 🚀 What It Does
Moves data between apps and a **database/spreadsheet**, with logic and optional AI steps.

## 💼 Business Use Case
Use as a **glue/API broker**: receive data, enrich/validate via APIs, and pass to downstream systems.

## ⚙️ How It Works
1. **Trigger:** This workflow starts with **Telegram Trigger**.
2. **Window Buffer Memory** `memoryBufferWindow` — sessionKey: "=335458847", sessionIdType: "customKey"
3. **Get Chart** `toolWorkflow` — name: "getChart", workflowId: "[object Object]", description: "Call this tool to get an analysis of a requested stock. The URL that is output from this tool must be returned in markdown format. For example, ![](url)

It'll be obligatory to pas…[truncated]"
4. **Telegram Trigger** `telegramTrigger` — updates: "message", additionalFields: "[object Object]"
5. **Workflow Input Trigger** `executeWorkflowTrigger` — workflowInputs: "[object Object]"
6. **OpenAI Chat Model** `lmChatOpenAi` — model: `[object Object]`
7. **Webhook** `webhook` — method: **POST**, path: `/12a80fbc-ac59-48f3-b6fd-683d7c420995`
8. **Save Ticker** `airtableTool` — operation: **create**, table: `[object Object]`
9. **Schedule Trigger** `scheduleTrigger` — rule: "[object Object]"
10. **Sticky Note** `stickyNote` — color: "4", width: "1540", height: "780"
11. **Sticky Note3** `stickyNote` — width: "1540", height: "420", content: "## Scenario 2 - Scheduled analyses"
12. **Sticky Note1** `stickyNote` — width: "1540", height: "320", content: "## Scenario 1 - Get Chart "
13. **Sticky Note4** `stickyNote` — height: "80", content: "### Replace Telegram connection"
14. **Sticky Note5** `stickyNote` — height: "80", content: "### Replace Chat ID"
15. **Sticky Note6** `stickyNote` — color: "3", width: "220", height: "80"
16. **Sticky Note7** `stickyNote` — color: "3", width: "220", height: "80"
17. **Sticky Note8** `stickyNote` — color: "3", width: "220", height: "80"
18. **Sticky Note11** `stickyNote` — color: "7", width: "330.5152611046425", height: "239.5888196628349"
19. **Sticky Note9** `stickyNote` — color: "7", width: "280", height: "586"
20. **Sticky Note12** `stickyNote` — color: "7", width: "636", height: "577"
21. **Switch** `switch` — rules: "[object Object]", options: "[object Object]"
22. **Set Values** `set` — options: "[object Object]", assignments: "[object Object]"
23. **Set Text1** `set` — options: "[object Object]", assignments: "[object Object]"
24. **Get tokens** `airtable` — operation: **search**, table: `[object Object]`
25. **Download File** `telegram` — resource: **file**
26. **Set Text** `set` — options: "[object Object]", assignments: "[object Object]"
27. **Get Chart URL** `httpRequest` — method: **POST**, url: `https://api.chart-img.com/v2/tradingview/advanced-chart/storage`
28. **Transcribe** `openAi` — resource: **audio**, operation: **transcribe**
29. **Download Chart** `httpRequest` — url: `={{ $json.url }}`
30. **AI Agent** `agent` — text: "={{ $json.text }}", options: "[object Object]", promptType: "define"
31. **Technical Analysis** `openAi` — resource: **image**, operation: **analyze**
32. **Send Analysis** `telegram` — text: "={{ $json.output }}", chatId: "=335458847", additionalFields: "[object Object]"
33. **Send Chart** `telegram` — operation: **sendPhoto**
34. **response** `set` — options: "[object Object]", assignments: "[object Object]"

## 💡 AI-Powered Ideas for Improvement
### Explain
This n8n workflow automates stock analysis using Telegram and Airtable. Users send stock tickers via Telegram, which triggers the workflow. It fetches and analyzes stock charts through APIs, using OpenAI for technical analysis. Results are sent back via Telegram and stored in Airtable for future reference.

### Demonstrate
A financial consultant uses this workflow to provide clients with instant stock analysis. Clients send a ticker via Telegram, receive detailed chart insights, and all interactions are logged in Airtable for tracking and future consultations.

### Imitate
1. Import the workflow into n8n.
2. Set up Telegram, OpenAI, and Airtable credentials.
3. Define a Telegram bot to receive stock ticker messages.
4. Run the workflow to analyze a stock and send results back.
5. Adjust Airtable fields to match your data structure.

### Practice
Create a test Telegram bot and Airtable base. Send a stock ticker to the bot. Verify the workflow processes the chart, performs analysis, and updates Airtable. Experiment with different tickers and chart styles to see how results vary.

### WIIFM
Mastering this workflow enables you to offer AI-driven stock analysis to clients, enhancing your service portfolio. It positions you as a tech-savvy consultant, attracting more clients and increasing revenue in the AI automation space.

## 🔧 Setup Instructions
1. **Connect Credentials:** telegramApi, httpHeaderAuth, openAiApi, airtableTokenApi.
2. **Data Mapping:** Verify base/sheet IDs and column names match exactly to prevent silent failures.
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
