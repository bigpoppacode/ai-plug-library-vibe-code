# Aggregate Telegram Automate Triggered
  ## 🚀 What It Does
  Moves data between apps and a **database/spreadsheet**, with logic and optional AI steps.
  
  ## 💼 Business Use Case
  Ideal for **lead intake**, **enrichment**, and **CRM updates** with alerts to the right channel.
  
  ## ⚙️ How It Works
  1. **Trigger:** This workflow starts with **Telegram Trigger**.
  2. **Sticky Note3** `stickyNote` — width: "780", height: "540", content: "### 3. Do you need more details?
Find a step-by-step guide in this tutorial
![Guide](https://www.samirsaci.com/content/images/2025/04/Flash-Cards.png)
[🎥 Watch My Tutorial](https:…[truncated]"
3. **OpenAI Chat Model** `lmChatOpenAi` — model: `[object Object]`
4. **Simple Memory** `memoryBufferWindow` — sessionKey: "={{ $('Telegram Trigger').item.json.message.chat.id }}", sessionIdType: "customKey"
5. **Telegram Trigger** `telegramTrigger` — updates: "message", additionalFields: "[object Object]"
6. **Sticky Note1** `stickyNote` — color: "7", width: "680", height: "540"
7. **Sticky Note** `stickyNote` — color: "7", width: "760", height: "780"
8. **Retrive Vocabulary** `googleSheets` — options: "[object Object]", sheetName: "[object Object]", documentId: "[object Object]"
9. **Aggregate Vocabulary Lists** `aggregate` — options: "[object Object]", fieldsToAggregate: "[object Object]"
10. **AI Agent** `agent` — text: "={{ $('Telegram Trigger').item.json.message.text }}", options: "[object Object]", promptType: "define"
11. **Answer to the User** `telegram` — text: "={{ $json.output }}", chatId: "={{ $('Telegram Trigger').item.json.message.chat.id }}", additionalFields: "[object Object]"
  
  ## 💡 AI-Powered Ideas for Improvement
  **Explain**  
This n8n workflow is designed to help users practice Chinese vocabulary through interactive Multiple-Choice Questions (MCQs) on Telegram. It retrieves vocabulary lists from Google Sheets, aggregates them, and uses an AI agent to generate and evaluate MCQs. User responses are checked, and feedback is given through Telegram.

**Demonstrate**  
A language tutor could use this workflow to provide students with an engaging way to practice vocabulary, offering immediate feedback and continuous learning opportunities. This automation saves time and enhances learning efficiency.

**Imitate**  
1. Import the workflow into n8n.  
2. Set up Telegram and Google Sheets credentials.  
3. Customize the Google Sheet with your vocabulary lists.  
4. Test the workflow by sending a message to your Telegram bot to initiate the vocabulary practice session.

**Practice**  
Create a small Google Sheet with 5 Chinese-English vocabulary pairs. Run the workflow and interact with the Telegram bot to ensure it generates MCQs and provides feedback. Adjust the vocabulary or format to see how the workflow adapts.

**WIIFM (What's In It For Me)**  
Mastering this workflow allows you to offer personalized language learning solutions, attracting clients who value efficient, AI-driven tutoring. This can expand your service offerings and increase revenue in the educational technology sector.
  
  ## 🔧 Setup Instructions
  1. **Data Mapping:** Verify base/sheet IDs and column names match exactly to prevent silent failures.
  
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
  