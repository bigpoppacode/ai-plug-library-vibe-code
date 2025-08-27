# Googletaskstool Telegram Automation Webhook
  ## 🚀 What It Does
  Moves data between apps and a **database/spreadsheet**, with logic and optional AI steps.
  
  ## 💼 Business Use Case
  Use as a **glue/API broker**: receive data, enrich/validate via APIs, and pass to downstream systems.
  
  ## ⚙️ How It Works
  1. **Trigger:** This workflow starts with **Receber Mensagem Telegram**.
  2. **OpenAI Chat Model1** `lmChatOpenAi` — model: `[object Object]`
3. **Google Tasks** `googleTasksTool` — task: "bDQ5ZlNVV2lPQ3pYT3NsNA", title: "={{ /*n8n-auto-generated-fromAI-override*/ $fromAI('Title', ``, 'string') }}", additionalFields: "[object Object]"
4. **MCP Google Calendar** `mcpClientTool` — sseEndpoint: "https://engaging-seahorse-19.rshare.io/mcp/ceb17fa5-1937-405f-8000-ea3be7d2b032/mcp/:tool/calendar/sse"
5. **Receber Mensagem Telegram** `telegramTrigger` — updates: "message", additionalFields: "[object Object]"
6. **Postgres Chat Memory** `memoryPostgresChat` — sessionKey: "100", sessionIdType: "customKey", contextWindowLength: "10"
7. **OpenAI Chat Model** `lmChatOpenAi` — model: `[object Object]`
8. **Enviar alerta de cancelamento** `telegramTool` — text: "={{ /*n8n-auto-generated-fromAI-override*/ $fromAI('Text', ``, 'string') }}", chatId: "={{ /*n8n-auto-generated-fromAI-override*/ $fromAI('Chat_ID', ``, 'string') }}", additionalFields: "[object Object]"
9. **Gatilho diário** `scheduleTrigger` — rule: "[object Object]"
10. **Sticky Note** `stickyNote` — color: "5", width: "1940", height: "600"
11. **Sticky Note2** `stickyNote` — color: "3", width: "1780", height: "640"
12. **Sticky Note3** `stickyNote` — color: "4", width: "1800", height: "640"
13. **Postgres Chat Memory1** `memoryPostgresChat` — sessionKey: "= {{ $('Webhook1').item.json.body.data.key.id }}", sessionIdType: "customKey", contextWindowLength: "50"
14. **MCP Google Calendar2** `mcpClientTool` — sseEndpoint: "https://engaging-seahorse-19.rshare.io/mcp/ceb17fa5-1937-405f-8000-ea3be7d2b032/mcp/:tool/calendar/sse"
15. **MCP GMAIL** `mcpClientTool` — sseEndpoint: "https://engaging-seahorse-19.rshare.io/mcp/82a7a338-618c-44f5-a1c3-f2e32b6b4833/mcp/:tool/gmail/sse"
16. **MCP CALENDAR** `mcpClientTool` — sseEndpoint: "https://engaging-seahorse-19.rshare.io/mcp/ceb17fa5-1937-405f-8000-ea3be7d2b032/mcp/:tool/calendar/sse"
17. **OpenRouter Chat Model1** `lmChatOpenRouter` — model: `google/gemini-2.0-flash-exp:free`
18. **Webhook1** `webhook` — method: **POST**, path: `/evolutionAPIKORE`
19. **Sticky Note5** `stickyNote` — color: "6", width: "1580", height: "640"
20. **Sticky Note1** `stickyNote` — width: "1760", height: "480", content: "## "Download Audio and Convert to MP4"
Description:

Purpose:
Handles retrieval, conversion, and transcription of audio files sent by patients via WhatsApp.

Instructions for Use:
…[truncated]"
21. **Sticky Note6** `stickyNote` — width: "1820", height: "480", content: "# "Extract Text from Images"
Description:

Purpose:
Processes images received via WhatsApp to extract text (OCR) and describe their visual content for further contextual analysis.
…[truncated]"
22. **OpenRouter Chat Model2** `lmChatOpenRouter` — model: `google/gemini-2.5-pro-exp-03-25:free`
23. **Sticky Note4** `stickyNote` — width: "1960", height: "680", content: "## "Internal Clinic Assistant"
Description:

Purpose:
Represents the Internal Assistant for the clinic, used exclusively by the internal team via Telegram to manage patient resched…[truncated]"
24. **CallToHuman** `toolWorkflow` — name: "escalar_humano", workflowId: "[object Object]", description: "=Use essa ferramenta ao perceber que o paciente fala de:
- Situações urgentes (sentindo-se mal, etc.)
- Assuntos não relacionados à clínica
- Insatisfação extrema ou pedidos de fal…[truncated]"
25. **OpenAI Chat Model2** `lmChatOpenAi` — model: `[object Object]`
26. **Assistente clinica interno** `agent` — text: "={{ $json.message.text }}", options: "[object Object]", promptType: "define"
27. **Assistente de confirmação** `agent` — text: "=Hoje é {{ $now }}. Você é um agente especializado em **confirmação de consultas** para a clínica. Sua função principal é:

1. **Listar os eventos** agendados para o próximo dia no…[truncated]", options: "[object Object]", promptType: "define"
28. **Edit Fields1** `set` — options: "[object Object]", assignments: "[object Object]"
29. **Telegram** `telegram` — text: "={{ $json.output }}", chatId: "={{ $('Receber Mensagem Telegram').item.json.message.chat.id }}", additionalFields: "[object Object]"
30. **REMINDER** `evolutionApi` — resource: **messages-api**
31. **Switch** `switch` — rules: "[object Object]", options: "[object Object]"
32. **OpenAI1** `openAi` — resource: **image**, operation: **analyze**
33. **Evolution API** `evolutionApi` — resource: **chat-api**, operation: **get-media-base64**
34. **AI Agent2** `agent` — text: "={{$json.output}}", options: "[object Object]", promptType: "define"
35. **Convert to File** `convertToFile` — operation: **toBinary**
36. **OpenAI** `openAi` — resource: **audio**, operation: **transcribe**
37. **Assistente Clínica** `agent` — text: "={{ $json.text }}{{ $json.output}}", options: "[object Object]", promptType: "define"
38. **AI Agent** `agent` — text: "={{ $json.output }}", options: "[object Object]", promptType: "define"
39. **Evolution API2** `evolutionApi` — resource: **messages-api**
  
  ## 💡 AI-Powered Ideas for Improvement
  ### Explain
This n8n workflow automates various tasks within a clinic setting. It manages patient appointment confirmations, rescheduling, and communication using tools like Google Calendar, Telegram, and OpenAI. It receives messages via Telegram, processes them with AI agents, and updates calendars or sends confirmations, ensuring efficient scheduling and communication.

### Demonstrate
A clinic uses this workflow to manage patient appointments efficiently. By automating confirmations and rescheduling through AI, the clinic reduces manual errors and saves time, providing a seamless experience for both staff and patients.

### Imitate
1. Import the workflow into n8n.
2. Connect your Google Calendar, Telegram, and OpenAI accounts.
3. Set up triggers for incoming messages and daily scheduling.
4. Customize AI prompts and calendar settings to fit your clinic's needs.
5. Test the workflow to ensure smooth operation and accurate message handling.

### Practice
Create a test scenario by simulating a new patient appointment request via Telegram. Run the workflow to see how it processes the request, updates the calendar, and sends a confirmation message. Adjust settings to handle different scenarios like rescheduling or cancellations.

### WIIFM
Mastering this workflow enables you to offer automated scheduling and communication services to clinics, enhancing their operational efficiency. This could lead to new business opportunities, improved client satisfaction, and steady income from automation solutions tailored to healthcare providers.
  
  ## 🔧 Setup Instructions
  1. **Connect Credentials:** openAiApi, googleTasksOAuth2Api, telegramApi, postgres, openRouterApi.
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
  