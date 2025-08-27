# Telegram Redis Create Webhook
## 🚀 What It Does
Moves data between apps and a **database/spreadsheet**, with logic and optional AI steps.

## 💼 Business Use Case
Use as a **glue/API broker**: receive data, enrich/validate via APIs, and pass to downstream systems.

## ⚙️ How It Works
1. **Trigger:** This workflow starts with **Telegram Trigger**.
2. **Telegram Trigger** `telegramTrigger` — updates: "message", additionalFields: "[object Object]"
3. **Memory3** `memoryRedisChat` — sessionKey: "={{ $('Set Variables1').first().json.cacheKey }}_history", sessionIdType: "customKey", contextWindowLength: "10"
4. **Memory4** `memoryRedisChat` — sessionKey: "={{ $('Set Variables1').first().json.cacheKey }}_history", sessionIdType: "customKey", contextWindowLength: "100"
5. **Model2** `lmChatOpenAi` — model: `[object Object]`
6. **Model3** `lmChatOpenAi` — model: `[object Object]`
7. **Sticky Note8** `stickyNote` — color: "7", width: "760", height: "500"
8. **Sticky Note2** `stickyNote` — color: "7", width: "420", height: "380"
9. **Sticky Note3** `stickyNote` — color: "7", width: "440", height: "420"
10. **Sticky Note4** `stickyNote` — color: "7", width: "700", height: "500"
11. **Sticky Note5** `stickyNote` — color: "7", width: "740", height: "380"
12. **Sticky Note6** `stickyNote` — color: "7", width: "620", height: "520"
13. **Sticky Note7** `stickyNote` — width: "580", height: "1020", content: "## Try It Out
### This n8n template demonstrates how you can build a structured chat journey augmented with AI for your business.

In this scenario, a chatbot conducts a product sa…[truncated]"
14. **Set Variables1** `set` — options: "[object Object]", assignments: "[object Object]"
15. **Execution Data2** `executionData` — dataToSave: "[object Object]"
16. **Get State2** `redis` — operation: **get**
17. **Message Type1** `switch` — rules: "[object Object]", options: "[object Object]"
18. **Get Command1** `set` — options: "[object Object]", assignments: "[object Object]"
19. **Get Record1** `googleSheets` — options: "[object Object]", filtersUI: "[object Object]", sheetName: "[object Object]"
20. **Bot Actions1** `switch` — rules: "[object Object]", options: "[object Object]"
21. **Has No Record?** `if` — options: "[object Object]", conditions: "[object Object]"
22. **Create Record1** `googleSheets` — operation: **appendOrUpdate**
23. **Send Start1** `telegram` — text: "=Sorry, that command is unrecognised. The available options are /start or /next.", chatId: "={{ $('Telegram Trigger').first().json.message.chat.id }}", additionalFields: "[object Object]"
24. **Create Record2** `googleSheets` — operation: **appendOrUpdate**
25. **Get Last Bot Message1** `redis` — operation: **get**
26. **Start Session1** `redis` — operation: **set**
27. **Append Responses1** `set` — options: "[object Object]", assignments: "[object Object]"
28. **Send Start** `telegram` — text: "={{ $('Set Variables1').first().json.title }}.
Welcome! Thank you for taking the time to participate in our survey.

You'll be asked a couple of pre-defined questions. For each que…[truncated]", chatId: "={{ $('Telegram Trigger').first().json.message.chat.id }}", additionalFields: "[object Object]"
29. **Should Follow Up?1** `textClassifier` — options: "[object Object]", inputText: "=AI: {{ $('Get Last Bot Message1').item.json.data?.first().parseJson().data.content ?? ''}}
USER: {{ $('Telegram Trigger').first().json.message.text }}", categories: "[object Object]"
30. **Update Answer3** `httpRequest` — method: **PUT**, url: `=https://sheets.googleapis.com/v4/spreadsheets/{{ $('Set Variables1').first().json.gsheetId }}/values/Sheet1!{{ $('Append Responses1').first().json.cell }}`
31. **Interview Agent1** `agent` — text: "={{ $('Telegram Trigger').first().json.message.text }}", options: "[object Object]", promptType: "define"
32. **Get State3** `redis` — operation: **get**
33. **Update Answer2** `httpRequest` — method: **PUT**, url: `=https://sheets.googleapis.com/v4/spreadsheets/{{ $('Set Variables1').first().json.gsheetId }}/values/Sheet1!{{ $('Append Responses1').first().json.cell }}`
34. **Get Columns1** `googleSheets` — options: "[object Object]", sheetName: "[object Object]", documentId: "[object Object]"
35. **Send Response** `telegram` — text: "={{ $('Interview Agent1').first().json.output }}", chatId: "={{ $('Telegram Trigger').first().json.message.chat.id }}", additionalFields: "[object Object]"
36. **Get Survey State1** `set` — options: "[object Object]", assignments: "[object Object]"
37. **Increment Index1** `redis` — operation: **set**
38. **Is Survey Continue?** `if` — options: "[object Object]", conditions: "[object Object]"
39. **Reset Agent Memory1** `memoryManager` — mode: "insert", messages: "[object Object]", insertMode: "override"
40. **Completed Survey** `telegram` — text: "=Done! Thank you for completing our survey.
To start the survey again, use "/start".", chatId: "={{ $('Telegram Trigger').first().json.message.chat.id }}", additionalFields: "[object Object]"
41. **Send Next Question** `telegram` — text: "={{ $('Get Survey State1').first().json.next_question_idx }}. {{ Object.values($('Get Columns1').first().json)[$('Get Survey State1').first().json.next_question_idx+1] }}", chatId: "={{ $('Telegram Trigger').first().json.message.chat.id }}", additionalFields: "[object Object]"

## 💡 AI-Powered Ideas for Improvement
**Explain:**  
This n8n workflow automates a product satisfaction survey via Telegram. It initiates a chat with the user, asks predefined questions from a Google Sheet, and uses AI to determine if follow-up questions are needed. It records responses in a Google Sheet and manages session states using Redis.

**Demonstrate:**  
A business could use this workflow to collect customer feedback on a new product. By automating the survey process, they ensure consistent data collection and can quickly analyze customer satisfaction and insights.

**Imitate:**  
1. Set up a Telegram bot.
2. Create a Google Sheet with survey questions.
3. Configure Redis for session management.
4. Import the workflow into n8n and connect your accounts.
5. Test the workflow with a sample chat.

**Practice:**  
Create a test survey with a few questions in a Google Sheet. Run the workflow and simulate a chat session to see how responses are recorded and follow-up questions are managed.

**WIIFM:**  
Mastering this workflow allows you to offer automated survey solutions to clients, enhancing their customer engagement and feedback analysis. This can lead to increased service offerings and potential income in your automation business.

## 🔧 Setup Instructions
1. **Connect Credentials:** telegramApi, redis, googleSheetsOAuth2Api, openAiApi.
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
