# Telegram Code Automate Webhook
## 🚀 What It Does
Calls external APIs and uses **AI** to transform or decide, then routes the result downstream.

## 💼 Business Use Case
Use as a **glue/API broker**: receive data, enrich/validate via APIs, and pass to downstream systems.

## ⚙️ How It Works
1. **Trigger:** This workflow starts with **Telegram Trigger**.
2. **Telegram Trigger** `telegramTrigger` — updates: "message", additionalFields: "[object Object]"
3. **Email Agent** `toolWorkflow` — name: "emailAgent", description: "Call this tool for any email actions.", workflowId: "[object Object]"
4. **Contact Agent** `toolWorkflow` — name: "contactAgent", description: "Call this tool for any contact related actions.", workflowId: "[object Object]"
5. **Content Creator Agent** `toolWorkflow` — name: "contentCreator", description: "Call this tool whenever you need to create any kind of written content for the user.  
This includes but is not limited to: reminders, messages, summaries, emails, posts, or even f…[truncated]", workflowId: "[object Object]"
6. **Tavily** `toolHttpRequest` — method: **POST**, url: `https://api.tavily.com/search`
7. **Calendar Agent** `toolWorkflow` — name: "calendarAgent", description: "Call this tool for any calendar action.", workflowId: "[object Object]"
8. **Calculator1** `toolCalculator` — configured for its default action.
9. **Wikipedia** `toolWikipedia` — configured for its default action.
10. **Default Data Loader** `documentDefaultDataLoader` — jsonMode: "expressionData", jsonData: "={{ $json.text }}
", options: "[object Object]"
11. **Recursive Character Text Splitter** `textSplitterRecursiveCharacterTextSplitter` — options: "[object Object]"
12. **OpenAI Chat Model** `lmChatOpenAi` — model: `[object Object]`
13. **Embeddings OpenAI1** `embeddingsOpenAi` — model: `text-embedding-ada-002`
14. **Qdrant Vector Store1** `vectorStoreQdrant` — mode: "retrieve-as-tool", toolName: "memory_store", toolDescription: "Call this tool to Retrieve relevant family information to give context to the assistant's decisions. Includes names, roles, events, and personal preferences.
"
15. **Embeddings OpenAI** `embeddingsOpenAi` — options: "[object Object]"
16. **Window Buffer Memory** `memoryBufferWindow` — sessionIdType: "customKey", sessionKey: "={{ $('Telegram Trigger').item.json.message.chat.id }}"
17. **Switch1** `switch` — rules: "[object Object]", options: "[object Object]"
18. **Download File** `telegram` — resource: **file**
19. **Set 'Text'1** `set` — assignments: "[object Object]", options: "[object Object]"
20. **Download File1** `telegram` — resource: **file**
21. **Transcribe** `openAi` — resource: **audio**, operation: **transcribe**
22. **If** `if` — conditions: "[object Object]", options: "[object Object]"
23. **Code** `code` — jsCode: "const fileContent = JSON.parse(Buffer.from($input.first().binary.data.data, 'base64').toString());
return fileContent.map(item => ({
  json: {
    id: item.id,
    text: item.text,…[truncated]"
24. **Edit Fields** `set` — assignments: "[object Object]", options: "[object Object]"
25. **Qdrant Vector Store** `vectorStoreQdrant` — mode: "insert", qdrantCollection: "[object Object]", options: "[object Object]"
26. **Edit Fields1** `set` — assignments: "[object Object]", options: "[object Object]"
27. **Ultimate Assistant** `agent` — promptType: "define", text: "={{ $json.text }} {{ $json.fullPrompt }}
", options: "[object Object]"
28. **Response1** `telegram` — chatId: "={{ $('Telegram Trigger').item.json.message.chat.id }}", text: "={{ $json.output }}", additionalFields: "[object Object]"

## 💡 AI-Powered Ideas for Improvement
**Explain**  
This n8n workflow is designed as a smart assistant for busy parents. It listens for messages on Telegram, processes the input (text or voice), and delegates tasks to specialized tools like email, calendar, and content creation agents. It can handle various tasks such as sending emails, creating calendar events, and generating content in Hebrew, all while maintaining a warm, empathetic tone.

**Demonstrate**  
A busy parent could use this workflow to manage their daily tasks via Telegram. For example, they could send a voice message to create a reminder for a doctor's appointment or a text message to draft and send a thank-you email to a teacher, all without switching apps or typing extensively.

**Imitate**  
1. Set up an n8n instance and connect your Telegram account.  
2. Import the workflow and configure each tool (email, calendar, etc.) with your credentials.  
3. Customize the content and tone rules in the Ultimate Assistant node.  
4. Test the workflow by sending different types of messages via Telegram to see how it handles each request.

**Practice**  
Create a test scenario where you send a voice message via Telegram asking to schedule a meeting next week. Observe how the workflow transcribes, processes, and delegates the task to create a calendar event.

**WIIFM**  
Mastering this workflow allows you to offer personalized automation services for families, helping them save time and reduce stress. This can be a unique selling point for attracting clients who value convenience and efficiency, potentially leading to new business opportunities and increased income in the automation sector.

## 🔧 Setup Instructions
1. **Connect Credentials:** telegramApi, openAiApi, qdrantApi.
2. **API Contracts:** Validate required headers and 2xx/4xx handling; add retries for 429/5xx.

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
