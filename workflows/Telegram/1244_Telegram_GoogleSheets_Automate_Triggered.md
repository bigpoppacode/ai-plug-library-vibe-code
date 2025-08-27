# Telegram GoogleSheets Automate Triggered
## 🚀 What It Does
Moves data between apps and a **database/spreadsheet**, with logic and optional AI steps.

## 💼 Business Use Case
Ideal for **lead intake**, **enrichment**, and **CRM updates** with alerts to the right channel.

## ⚙️ How It Works
1. **Trigger:** This workflow starts with **Get message**.
2. **OpenAI Chat Model** `lmChatOpenAi` — model: `[object Object]`
3. **Simple Memory** `memoryBufferWindow` — sessionKey: "={{ $('Get session').item.json.SESSION }}", sessionIdType: "customKey", contextWindowLength: "100"
4. **Get message** `telegramTrigger` — updates: "message", additionalFields: "[object Object]"
5. **Sticky Note** `stickyNote` — color: "3", width: "620", height: "360"
6. **OpenAI Chat Model1** `lmChatOpenAi` — model: `[object Object]`
7. **OpenAI Chat Model2** `lmChatOpenAi` — model: `[object Object]`
8. **Sticky Note1** `stickyNote` — width: "580", height: "80", content: "## NEW SESSION
"
9. **Sticky Note2** `stickyNote` — width: "580", height: "80", content: "## GET CURRENT SESSION
"
10. **Sticky Note3** `stickyNote` — width: "580", height: "80", content: "## RESUME SESSION
"
11. **Sticky Note4** `stickyNote` — width: "580", height: "80", content: "## GET SUMMARY
"
12. **Sticky Note5** `stickyNote` — width: "580", height: "80", content: "## SEND QUESTION
"
13. **Sticky Note6** `stickyNote` — width: "580", height: "80", content: "## CHATBOT
"
14. **Get session** `googleSheets` — options: "[object Object]", filtersUI: "[object Object]", sheetName: "[object Object]"
15. **Command or text?** `switch` — rules: "[object Object]", options: "[object Object]"
16. **Disable previous session** `googleSheets` — operation: **update**
17. **Send current session** `telegram` — text: "=The current session is {{ $('Get session').item.json.SESSION }}", chatId: "={{ $('Get message').item.json.message.from.id }}", additionalFields: "[object Object]"
18. **Get message1** `set` — options: "[object Object]", assignments: "[object Object]"
19. **Get session1** `googleSheets` — options: "[object Object]", filtersUI: "[object Object]", sheetName: "[object Object]"
20. **Get message2** `set` — options: "[object Object]", assignments: "[object Object]"
21. **Telegram Chatbot** `agent` — text: "={{ $('Get message').item.json.message.text }}", options: "[object Object]", promptType: "define"
22. **Set new session** `googleSheets` — operation: **append**
23. **Trim resume** `code` — jsCode: "for (const item of $input.all()) {
  const text = item.json.text || '';
  const match = text.match(/\/resume\s+(.*)/);

  if (match) {
    item.json.resume = match[1].trim();
  } e…[truncated]"
24. **Prompt + Resume** `code` — jsCode: "let fullText = '';

for (const item of $input.all()) {
  const prompt = item.json.PROMPT || '';
  const response = item.json.RESPONSE || '';
  fullText += `PROMPT: ${prompt}\nRESPO…[truncated]"
25. **Trim question** `code` — jsCode: "for (const item of $input.all()) {
  const text = item.json.text || '';
  const match = text.match(/\/question\s+(.*)/);

  if (match) {
    item.json.question = match[1].trim();
 …[truncated]"
26. **Send response** `telegram` — text: "={{ $json.output }}", chatId: "={{ $('Get message').item.json.message.from.id }}", additionalFields: "[object Object]"
27. **Session activated** `telegram` — text: "New session activated", chatId: "={{ $('Get message').item.json.message.from.id }}", additionalFields: "[object Object]"
28. **Set to expire** `googleSheets` — operation: **update**
29. **Summarization Chain** `chainSummarization` — options: "[object Object]"
30. **Response + Text** `googleSheets` — options: "[object Object]", filtersUI: "[object Object]", sheetName: "[object Object]"
31. **Update database** `googleSheets` — operation: **append**
32. **Set new current session** `googleSheets` — operation: **update**
33. **Send summary** `telegram` — text: "={{ $json.response.text }}", chatId: "={{ $('Prompt + Resume').item.json.chat_id }}", additionalFields: "[object Object]"
34. **fullText** `code` — jsCode: "let fullText = '';

for (const item of $input.all()) {
  const prompt = item.json.PROMPT || '';
  const response = item.json.RESPONSE || '';
  fullText += `PROMPT: ${prompt}\nRESPO…[truncated]"
35. **Exist?** `if` — options: "[object Object]", conditions: "[object Object]"
36. **Basic LLM Chain** `chainLlm` — text: "=Question:
{{ $json.question }}", messages: "[object Object]", promptType: "define"
37. **KO** `telegram` — text: "=This session doesn't exist", chatId: "={{ $('Get message').item.json.message.from.id }}", additionalFields: "[object Object]"
38. **OK** `telegram` — text: "=The current session is {{ $json.SESSION }}", chatId: "={{ $('Get message').item.json.message.from.id }}", additionalFields: "[object Object]"
39. **Send answer** `telegram` — text: "={{ $json.text }}", chatId: "={{ $('fullText').item.json.chat_id }}", additionalFields: "[object Object]"

## 💡 AI-Powered Ideas for Improvement
**Explain:**  
This n8n workflow creates a Telegram chatbot with session management capabilities. Users can start new conversations, check current sessions, resume past sessions, get summaries, and ask questions. The chatbot uses OpenAI for processing and Google Sheets for session tracking, ensuring smooth and organized conversations.

**Demonstrate:**  
A business owner could use this workflow to provide customer support through Telegram. By managing chat sessions, they can ensure that conversations are organized and that users receive consistent and accurate responses, improving the overall customer experience.

**Imitate:**  
1. Import the workflow into n8n.  
2. Connect your Telegram and Google Sheets accounts.  
3. Configure the OpenAI API for processing messages.  
4. Set up the Google Sheets to track session data.  
5. Test the chatbot by sending commands like `/new`, `/current`, and `/question`.

**Practice:**  
Create a test Google Sheet and set up a Telegram bot. Use the workflow to manage a simple chat session, sending commands to start a new session and resume it. Monitor the Google Sheet to see how sessions are tracked and updated.

**WIIFM:**  
Mastering this workflow allows you to offer advanced chatbot services, enhancing customer interactions for businesses. This can lead to increased customer satisfaction, retention, and potential revenue from offering customized chatbot solutions.

## 🔧 Setup Instructions
1. **Connect Credentials:** openAiApi, telegramApi, googleSheetsOAuth2Api.
2. **Data Mapping:** Verify base/sheet IDs and column names match exactly to prevent silent failures.

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
