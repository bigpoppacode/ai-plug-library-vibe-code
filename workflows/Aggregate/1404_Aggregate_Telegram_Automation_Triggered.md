# Aggregate Telegram Automation Triggered
  ## 🚀 What It Does
  Moves data between apps and a **database/spreadsheet**, with logic and optional AI steps.
  
  ## 💼 Business Use Case
  Ideal for **lead intake**, **enrichment**, and **CRM updates** with alerts to the right channel.
  
  ## ⚙️ How It Works
  1. **Trigger:** This workflow starts with **Telegram Trigger**.
  2. **Telegram Trigger** `telegramTrigger` — updates: "message", additionalFields: "[object Object]"
3. **Google Gemini Chat Model** `lmChatGoogleGemini` — modelName: "models/gemini-1.5-flash-001", options: "[object Object]"
4. **Calculator** `toolCalculator` — configured for its default action.
5. **Wikipedia** `toolWikipedia` — configured for its default action.
6. **Simple Memory** `memoryBufferWindow` — sessionIdType: "customKey", sessionKey: "={{ $('Telegram Trigger').item.json.message.chat.id }}"
7. **OpenAI Chat Model** `lmChatOpenAi` — model: `[object Object]`
8. **memory_tool** `airtableTool` — operation: **create**, table: `[object Object]`
9. **contentCreatorAgent** `toolWorkflow` — name: "contentCreatorAgent", description: "call this tool whan you need to create contact,post or blog", workflowId: "[object Object]"
10. **Airtable** `airtable` — operation: **search**, table: `[object Object]`
11. **Switch** `switch` — rules: "[object Object]", options: "[object Object]"
12. **Aggregate** `aggregate` — fieldsToAggregate: "[object Object]", options: "[object Object]"
13. **Edit Fields** `set` — assignments: "[object Object]", options: "[object Object]"
14. **Telegram** `telegram` — resource: **file**
15. **OpenAI** `openAi` — resource: **audio**, operation: **transcribe**
16. **Merge** `merge` — mode: "combine", combineBy: "combineAll", options: "[object Object]"
17. **AI Agent** `agent` — promptType: "define", text: "={{ $json.text }}", options: "[object Object]"
18. **Telegram1** `telegram` — chatId: "={{ $('Telegram Trigger').item.json.message.chat.id }}", text: "={{ $json.output }}", additionalFields: "[object Object]"
  
  ## 💡 AI-Powered Ideas for Improvement
  - **Explain:** This n8n workflow automates the process of handling messages received via Telegram. When a message or voice note is received, it triggers the workflow. Text messages are processed for further actions, and voice messages are transcribed using OpenAI's transcription service. The workflow utilizes tools like Wikipedia for information retrieval and a calculator for computations. It stores session data for personalized interactions and can generate new content such as posts or blogs using an AI-powered content creation agent. The results are then sent back to the user on Telegram.

- **Demonstrate:** A business owner could use this workflow to provide a 24/7 interactive support chatbot on Telegram that answers customer questions, performs calculations, and retrieves information, freeing up human resources for more complex tasks.

- **Imitate:** Import the workflow into n8n. Set up your Telegram, OpenAI, and Airtable accounts. Configure the Airtable table for data storage and ensure the AI models are set up for your specific needs. Test the workflow by sending different types of messages to see how it processes and responds.

- **Practice:** Create a Telegram bot and connect it to n8n. Send various text and voice messages to the bot to see how the workflow handles them. Experiment with adding new nodes, like a different AI service, to extend its capabilities.

- **WIIFM:** Mastering this workflow enables you to provide automated customer support or content creation services, offering value to clients who need scalable, efficient solutions. This skill can help you attract clients looking to integrate AI into their business processes, potentially increasing your income.
  
  ## 🔧 Setup Instructions
  1. **Connect Credentials:** telegramApi, openAiApi, googlePalmApi, airtableTokenApi.
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
  