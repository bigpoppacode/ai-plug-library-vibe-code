# Telegram Code Automate Triggered
## 🚀 What It Does
Moves data between apps and a **database/spreadsheet**, with logic and optional AI steps.

## 💼 Business Use Case
Ideal for **lead intake**, **enrichment**, and **CRM updates** with alerts to the right channel.

## ⚙️ How It Works
1. **Trigger:** This workflow starts with **telegramInput**.
2. **telegramInput** `telegramTrigger` — updates: "message", additionalFields: "[object Object]"
3. **n8nInput** `chatTrigger` — options: "[object Object]"
4. **LLM** `lmChatOpenRouter` — options: "[object Object]"
5. **Memory** `memoryBufferWindow` — sessionKey: "={{ $('Settings').first().json.chatId }}", sessionIdType: "customKey"
6. **Sticky Note** `stickyNote` — color: "2", width: "620", height: "240"
7. **Sticky Note1** `stickyNote` — color: "2", width: "620", height: "240"
8. **Sticky Note2** `stickyNote` — color: "5", width: "360", height: "240"
9. **Sticky Note3** `stickyNote` — color: "5", width: "360", height: "240"
10. **Sticky Note4** `stickyNote` — color: "7", width: "440", height: "500"
11. **Sticky Note5** `stickyNote` — color: "3", width: "560", height: "500"
12. **Sticky Note6** `stickyNote` — color: "4", width: "400", height: "500"
13. **Sticky Note7** `stickyNote` — color: "7", width: "300", height: "500"
14. **SendTyping** `telegram` — operation: **sendChatAction**
15. **n8nChatSettings** `set` — options: "[object Object]", assignments: "[object Object]"
16. **telegramChatSettings** `set` — options: "[object Object]", assignments: "[object Object]"
17. **Settings** `set` — options: "[object Object]", assignments: "[object Object]", includeOtherFields: "true"
18. **Schedule** `googleSheets` — options: "[object Object]", sheetName: "[object Object]", documentId: "[object Object]"
19. **ScheduleToMarkdown** `code` — jsCode: "// Get all rows from the input (each item has a "json" property)
const rows = items.map(item => item.json);

// If no data, return an appropriate message
if (rows.length === 0) {
 …[truncated]"
20. **ScheduleBot** `agent` — text: "={{ $('Settings').first().json.inputMessage }}", options: "[object Object]", promptType: "define"
21. **SetResponse** `set` — options: "[object Object]", assignments: "[object Object]", includeOtherFields: "true"
22. **Switch** `switch` — rules: "[object Object]", options: "[object Object]"
23. **n8nResponse** `noOp` — configured for its default action.
24. **telegramResponse** `telegram` — text: "={{ $json.responseMessage }}", chatId: "={{ $('Settings').first().json.chatId }}", additionalFields: "[object Object]"

## 💡 AI-Powered Ideas for Improvement
**Explain:** This n8n workflow functions as a Telegram bot to help manage scheduling for a meetup group. It receives messages via Telegram, processes them using a language model, retrieves and formats scheduling data from a Google Sheet, and then responds to the user. The workflow ensures that users receive accurate and updated schedule information in a conversational format.

**Demonstrate:** A developer could use this workflow to automate responses to common scheduling inquiries for a community event, reducing the need for manual updates and ensuring consistent communication with participants.

**Imitate:** 1. Import the workflow into n8n. 2. Connect your Telegram and Google Sheets accounts. 3. Set up the Google Sheet with your scheduling data. 4. Test the workflow by sending a message to the Telegram bot and verifying the response.

**Practice:** Create a test Google Sheet with sample event schedules. Run the workflow and send a Telegram message asking for schedule updates. Check how the bot formats and responds with the correct information.

**WIIFM:** Mastering this workflow enables you to offer automated chatbot services, enhancing customer interaction and satisfaction. This skill can attract clients seeking efficient communication solutions, potentially increasing your income as an automation consultant.

## 🔧 Setup Instructions
1. **Connect Credentials:** telegramApi, googleSheetsOAuth2Api, openRouterApi.
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
