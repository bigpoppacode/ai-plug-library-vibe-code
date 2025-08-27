# Telegram Splitout Monitor Scheduled
## 🚀 What It Does
Moves data between apps and a **database/spreadsheet**, with logic and optional AI steps.

## 💼 Business Use Case
Great for **content, summarization, triage, or decisioning** where AI adds speed and consistency.

## ⚙️ How It Works
1. **Trigger:** Runs on a **schedule** (e.g., `[object Object]`).
2. **Google Gemini Chat Model** `lmChatGoogleGemini` — options: "[object Object]", modelName: "models/gemini-2.5-flash-preview-04-17"
3. **Sticky Note** `stickyNote` — width: "1703", height: "580", content: "## Automated Financial Tracker: Telegram Invoices to Notion with AI Summaries & Reports
"
4. **Sticky Note1** `stickyNote` — color: "5", width: "1706", height: "527"
5. **Schedule Trigger | for send chart report** `scheduleTrigger` — rule: "[object Object]"
6. **Telegram Trigger | When recive photo** `telegramTrigger` — updates: "message", additionalFields: "[object Object]"
7. **Parse To your object | Table** `outputParserStructured` — schemaType: "manual", inputSchema: "{
  "type": "object",
  "properties": {
    "message": {
      "type": "string"
    },
    "summary": {
      "type": "array",
      "items": {
        "type": "object",
        "p…[truncated]"
8. **Sticky Note2** `stickyNote` — color: "3", width: "340", height: "280"
9. **Sticky Note3** `stickyNote` — color: "5", width: "360", height: "460"
10. **Sticky Note4** `stickyNote` — color: "5", width: "280", height: "200"
11. **Sticky Note5** `stickyNote` — color: "2", width: "380", height: "240"
12. **Sticky Note6** `stickyNote` — height: "280", content: "REPORTING SCHEDULE 🗓️
Set how often you want to receive your spending report (e.g., weekly, monthly)."
13. **Sticky Note7** `stickyNote` — color: "2", width: "280", height: "380"
14. **Sticky Note8** `stickyNote` — width: "320", height: "360", content: "➕ SUMMARIZING SPENDING ➕
Aggregates your expenses, usually by category,
to prepare for the chart."
15. **Sticky Note9** `stickyNote` — width: "300", height: "340", content: "📈 GENERATING VISUAL REPORT 📈
Creates the actual chart image based on your spending data.
You can customize chart type (bar, pie, etc.) here."
16. **Sticky Note10** `stickyNote` — color: "6", width: "300", height: "300"
17. **Sticky Note11** `stickyNote` — color: "6", width: "300", height: "280"
18. **Sticky Note12** `stickyNote` — color: "7", width: "460", height: "240"
19. **Get Recent Data from Notions** `notion` — resource: **databasePage**, operation: **getAll**
20. **Telegram** `telegram` — resource: **file**
21. **Summarize Transaction Data** `summarize` — options: "[object Object]", fieldsToSplitBy: "property_category", fieldsToSummarize: "[object Object]"
22. **Get Image Info** `editImage` — operation: **information**
23. **Convert Data to JSON chart payload** `code` — jsCode: "const labels = [];
const values = [];

for (const item of items) {
  labels.push(item.json.property_category);
  values.push(item.json.sum_property_total);
}

return [
  {
    json…[truncated]"
24. **Basic LLM Chain** `chainLlm` — text: "=ini ada base64 invoice rangkumkan Pengeluaran dari invoice tersebut Nama Barang jumlah dan Pengeluaran masing masing barang dan total, outputnya jangan panjang panjang saya cukup …[truncated]", messages: "[object Object]", promptType: "define"
25. **Generate Chart** `quickChart` — data: "={{ $json.chart.data.datasets[0].data }}", labelsMode: "array", labelsArray: "={{ $json.chart.data.labels }}"
26. **Split Out | data transaction** `splitOut` — options: "[object Object]", fieldToSplitOut: "output.summary"
27. **Sendback to chat and give summarize text** `telegram` — text: "={{ $json.output.message }}", chatId: "={{ $('Telegram Trigger | When recive photo').item.json.message.chat.id }}", additionalFields: "[object Object]"
28. **Send Chart Image to Group or Private Chat** `telegram` — operation: **sendPhoto**
29. **Record To Notion Database** `notion` — resource: **databasePage**

## 💡 AI-Powered Ideas for Improvement
**Explain**: This n8n workflow automates financial tracking by processing invoices sent via Telegram. It extracts data using AI, summarizes transactions, and records them in Notion. It also generates visual spending reports and sends them via Telegram on a scheduled basis, providing users with regular updates on their financial activities.

**Demonstrate**: A small business owner could use this workflow to streamline their expense tracking. By simply sending invoice photos through Telegram, they receive organized transaction summaries and visual reports, reducing manual data entry and improving financial oversight.

**Imitate**: 
1. Import the workflow into n8n.
2. Connect your Telegram, Google Gemini, and Notion accounts.
3. Set up a Telegram bot to receive invoice photos.
4. Customize the Notion database schema to match your financial tracking needs.
5. Schedule the reporting frequency as required.

**Practice**: Create a test Notion database and send a few sample invoice images via Telegram. Observe how the workflow extracts data, updates Notion, and generates reports. Experiment with different report schedules and formats.

**WIIFM**: Mastering this workflow positions you to offer financial automation services, helping clients efficiently manage expenses and reports. This enhances your service portfolio, potentially leading to increased customer satisfaction and revenue in your automation business.

## 🔧 Setup Instructions
1. **Connect Credentials:** googlePalmApi, notionApi, telegramApi.
2. **Cron/Schedule:** Confirm timezone and cadence; start with a test window (e.g., every 5 minutes) then scale.

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
