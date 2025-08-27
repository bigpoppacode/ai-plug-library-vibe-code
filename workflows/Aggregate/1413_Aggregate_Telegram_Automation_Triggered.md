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
10. **Email Agent** `toolWorkflow` — name: "EmailAgent", description: "use this tool to send,get and lable emails", workflowId: "[object Object]"
11. **Airtable** `airtable` — operation: **search**, table: `[object Object]`
12. **Switch** `switch` — rules: "[object Object]", options: "[object Object]"
13. **Aggregate** `aggregate` — fieldsToAggregate: "[object Object]", options: "[object Object]"
14. **Edit Fields** `set` — assignments: "[object Object]", options: "[object Object]"
15. **Telegram** `telegram` — resource: **file**
16. **OpenAI** `openAi` — resource: **audio**, operation: **transcribe**
17. **Merge** `merge` — mode: "combine", combineBy: "combineAll", options: "[object Object]"
18. **AI Agent** `agent` — promptType: "define", text: "={{ $json.text }}", options: "[object Object]"
19. **Telegram1** `telegram` — chatId: "={{ $('Telegram Trigger').item.json.message.chat.id }}", text: "={{ $json.output }}", additionalFields: "[object Object]"
  
  ## 💡 AI-Powered Ideas for Improvement
  - **Explain:** This n8n workflow is designed to process and respond to messages received via Telegram. It starts by triggering on new messages, then checks if the message is text or voice. If it's a voice message, it's transcribed using OpenAI. The workflow also uses tools like Google Gemini Chat Model, Calculator, Wikipedia, and memory storage to enhance responses. Finally, it sends a response back to the user on Telegram.

- **Demonstrate:** A business owner could use this workflow to automate customer support on Telegram, providing instant responses to common queries and improving customer engagement without human intervention.

- **Imitate:** To apply this workflow, import it into n8n, connect your Telegram, OpenAI, and other necessary accounts. Customize the nodes to fit your specific use case, such as changing the AI model or integrating additional tools. Test thoroughly to ensure accuracy and reliability.

- **Practice:** Set up a test Telegram group and run the workflow. Send different types of messages (text, voice) and observe how the workflow processes and responds to them. Adjust settings to improve response quality.

- **WIIFM:** Mastering this workflow allows you to offer automated communication services, enhancing customer support and engagement for businesses. This can lead to increased client satisfaction and open new revenue streams by providing scalable automation solutions.
  
  ## 🔧 Setup Instructions
  1. **Connect Credentials:** telegramApi, openAiApi, airtableTokenApi.
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
  