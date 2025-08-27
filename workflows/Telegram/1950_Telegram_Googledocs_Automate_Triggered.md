# Telegram Googledocs Automate Triggered
## 🚀 What It Does
Monitors events, processes them, and **notifies** people/apps (Slack/Email) with structured updates.

## 💼 Business Use Case
Great for **content, summarization, triage, or decisioning** where AI adds speed and consistency.

## ⚙️ How It Works
1. **Trigger:** This workflow starts with **When Executed by Another Workflow**.
2. **When Executed by Another Workflow** `executeWorkflowTrigger` — inputSource: "passthrough"
3. **OpenAI Chat Model2** `lmChatOpenAi` — model: `[object Object]`
4. **OpenAI Chat Model3** `lmChatOpenAi` — model: `[object Object]`
5. **📤Send Memories to Telegram** `toolWorkflow` — name: "send_memories_to_telegram", fields: "[object Object]", workflowId: "[object Object]"
6. **📫Send Memories to Gmail** `toolWorkflow` — name: "send_memories_to_gmail", fields: "[object Object]", workflowId: "[object Object]"
7. **🧠Save Memories** `toolWorkflow` — name: "save_long_term_memory", fields: "[object Object]", workflowId: "[object Object]"
8. **🔎Retrieve Memories** `toolWorkflow` — name: "retrieve_long_term_memory", fields: "[object Object]", workflowId: "[object Object]"
9. **🤯Window Buffer Memory** `memoryBufferWindow` — contextWindowLength: "10"
10. **🤖OpenAI Chat Model** `lmChatOpenAi` — model: `[object Object]`
11. **Ⓜ️ When chat message received** `chatTrigger` — options: "[object Object]"
12. **Sticky Note** `stickyNote` — color: "4", height: "280", content: "## 1️⃣ Save Memories"
13. **Sticky Note1** `stickyNote` — color: "6", height: "280", content: "## 3️⃣ Send Memories to Telegram"
14. **Sticky Note2** `stickyNote` — color: "6", height: "280", content: "## 4️⃣ Send Memories to Gmail"
15. **Sticky Note3** `stickyNote` — color: "4", height: "280", content: "## 2️⃣ Retrieve Memories"
16. **Sticky Note4** `stickyNote` — color: "3", height: "280", content: "## Short Term Chat Memory"
17. **Sticky Note5** `stickyNote` — color: "5", height: "280", content: "## Cloud LLM"
18. **Sticky Note6** `stickyNote` — width: "1740", height: "840", content: "# 🧠 AI Agent Chatbot With Long Term Memory Tools"
19. **Sticky Note7** `stickyNote` — color: "7", width: "1100", height: "400"
20. **Sticky Note8** `stickyNote` — color: "4", width: "300", height: "240"
21. **Sticky Note9** `stickyNote` — color: "4", width: "560", height: "280"
22. **Sticky Note10** `stickyNote` — color: "4", width: "560", height: "280"
23. **Sticky Note11** `stickyNote` — color: "6", width: "840", height: "360"
24. **Sticky Note12** `stickyNote` — color: "6", width: "840", height: "360"
25. **Sticky Note13** `stickyNote` — color: "2", width: "300", height: "380"
26. **Sticky Note14** `stickyNote` — color: "7", width: "260", height: "380"
27. **Sticky Note15** `stickyNote` — color: "7", width: "920", height: "1440"
28. **Sticky Note16** `stickyNote` — width: "720", height: "1300", content: "## Enhance Your AI Workflow with Long-Term Memory and Dynamic Tool Routing

#### This n8n workflow empowers your AI agent with **long-term memory** and a **dynamic tools router**, …[truncated]"
29. **Memory Tool Router** `switch` — rules: "[object Object]", options: "[object Object]"
30. **🧠 AI Agent w/Long Term Memory** `agent` — options: "[object Object]"
31. **Save Long Term Memories** `googleDocs` — operation: **update**
32. **Retrieve Long Term Memories** `googleDocs` — operation: **get**
33. **Retrieve Long Term Memories2** `googleDocs` — operation: **get**
34. **Retrieve Long Term Memories3** `googleDocs` — operation: **get**
35. **Saved response** `set` — options: "[object Object]", assignments: "[object Object]"
36. **Respond with long term memories** `set` — options: "[object Object]", assignments: "[object Object]"
37. **Prepare Telegram Message** `chainLlm` — text: "=Format this content into a simple unformatted list that can be sent to Telegram: {{ $json.content }}.  Avoid any preamble or further explanation.", promptType: "define"
38. **Prepare Gmail Message** `chainLlm` — text: "=Format this content into a simple and modern HTML table that is max 800px wide that can be used as the content for an email: {{ $json.content }}.  Avoid any preamble or further ex…[truncated]", promptType: "define"
39. **Send Success Message to Telegram** `telegram` — text: "=n8n User Memories
{{ $json.text }}", chatId: "={{ $env.TELEGRAM_CHAT_ID }}", additionalFields: "[object Object]"
40. **Email Workflow Stats** `gmail` — sendTo: "={{ $env.EMAIL_ADDRESS_JOE }}", message: "={{ $json.text }}", options: "[object Object]"

## 💡 AI-Powered Ideas for Improvement
**Explain:**  
This n8n workflow is designed to enhance an AI agent chatbot by incorporating long-term memory management and dynamic tool routing. It allows the AI agent to save and retrieve memories, such as previous interactions or user preferences, using Google Docs. The workflow can also send memory summaries and updates via Gmail or Telegram, providing context-aware responses and improving communication efficiency.

**Demonstrate:**  
A business might use this workflow to maintain a consistent and personalized customer service experience by allowing an AI chatbot to recall previous interactions and tailor responses accordingly, reducing response times and improving customer satisfaction.

**Imitate:**  
1. Import the workflow into n8n.
2. Connect your Google Docs, Gmail, and Telegram accounts.
3. Customize the AI agent's system message and routing rules.
4. Set up triggers for when chat messages are received.
5. Test the workflow to ensure it saves, retrieves, and sends memories as expected.

**Practice:**  
Create a Google Doc to store memory data. Set up a test chat in Telegram, send messages, and observe how the AI agent responds using recalled information. Adjust the workflow to improve its memory recall and response accuracy.

**WIIFM:**  
Mastering this workflow can help you offer advanced AI chatbot solutions to clients, enhancing customer interactions and streamlining communication. This can lead to increased client satisfaction, retention, and upsell opportunities in your AI automation business.

## 🔧 Setup Instructions
1. **Connect Credentials:** googleDocsOAuth2Api, telegramApi, gmailOAuth2, openAiApi.
2. **Notification Targets:** Confirm channel/email IDs and that the bot/app is authorized to post.

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
