# Telegram GoogleCalendar Automation Webhook
## 🚀 What It Does
Calls external APIs and uses **AI** to transform or decide, then routes the result downstream.

## 💼 Business Use Case
Use as a **glue/API broker**: receive data, enrich/validate via APIs, and pass to downstream systems.

## ⚙️ How It Works
1. **Trigger:** This workflow starts with **When clicking ‘Test workflow’**.
2. **OpenAI Chat Model** `lmChatOpenAi` — model: `[object Object]`
3. **Structured Output Parser** `outputParserStructured` — schemaType: "manual", inputSchema: "{
	"type": "object",
	"properties": {
		"first_name": {
			"type": "string",
            "description":""
		},
		"last_name": {
			"type": "string",
            "description":""
		…[truncated]"
4. **n8n_rag_function** `webhook` — method: **POST**, path: `/edb1e894-1210-4902-a34f-a014bbdad8d8`
5. **Retrive Qdrant Vector Store** `vectorStoreQdrant` — options: "[object Object]", qdrantCollection: "[object Object]"
6. **Embeddings OpenAI2** `embeddingsOpenAi` — options: "[object Object]"
7. **RAG** `toolVectorStore` — name: "company_data", description: "Retrive data about company knowledge from vector store"
8. **OpenAI Chat Model2** `lmChatOpenAi` — model: `[object Object]`
9. **OpenAI Chat Model1** `lmChatOpenAi` — model: `[object Object]`
10. **OpenAI Chat Model3** `lmChatOpenAi` — model: `[object Object]`
11. **Structured Output Parser1** `outputParserStructured` — schemaType: "manual", inputSchema: "{
	"type": "object",
	"properties": {
		"start": {
			"type": "string"
		},
		"end": {
			"type": "string"
		}
	}
}"
12. **n8n_call** `webhook` — method: **POST**, path: `/b352dd49-d3b3-4e0a-a781-17137f7199c8`
13. **Sticky Note** `stickyNote` — width: "1140", height: "920", content: "# STEP 3 - RETELL AI

- Register on [Retell AI](https://retellai.com) (10$ FREE credits)
- Create an Agent an set "Voice & Language" and add your system prompt
- In Webhook setting…[truncated]"
14. **Sticky Note1** `stickyNote` — color: "5", width: "1220", content: "# STEP 4
Intercept the "end call" event and get the full call transcript
- Add your CHAT_ID in Telegram node"
15. **n8n_check_available** `webhook` — method: **POST**, path: `/4dcd68b1-91d3-40bc-8aa6-c681126752b2`
16. **When clicking ‘Test workflow’** `manualTrigger` — configured for its default action.
17. **Embeddings OpenAI** `embeddingsOpenAi` — options: "[object Object]"
18. **Default Data Loader** `documentDefaultDataLoader` — options: "[object Object]", dataType: "binary"
19. **Token Splitter** `textSplitterTokenSplitter` — chunkSize: "300", chunkOverlap: "30"
20. **Sticky Note3** `stickyNote` — color: "6", width: "880", height: "220"
21. **Sticky Note4** `stickyNote` — color: "4", width: "620", height: "400"
22. **Sticky Note2** `stickyNote` — color: "5", width: "1100", content: "# STEP 5
If required, create the event in the calendar
- Enter the title and description of the event"
23. **Sticky Note5** `stickyNote` — color: "5", width: "1220", content: "# STEP 6
If required retrive the informations by RAG system"
24. **Sticky Note6** `stickyNote` — color: "3", width: "2580", height: "360"
25. **Retrive Agent** `agent` — text: "={{ $json.body.args.query }}", agent: "conversationalAgent", options: "[object Object]"
26. **Filter** `filter` — options: "[object Object]", conditions: "[object Object]"
27. **Concert start date** `chainLlm` — text: "=Convert this date to a compatible format for Google Calendar APIs for the start date, and for the end date add 1 hour to the start date.

Here is the start date:
{{ $json.body.arg…[truncated]", promptType: "define", hasOutputParser: "true"
28. **Create collection** `httpRequest` — method: **POST**, url: `https://QDRANTURL/collections/COLLECTION`
29. **Refresh collection** `httpRequest` — method: **POST**, url: `https://QDRANTURL/collections/COLLECTION/points/delete`
30. **Respond to Webhook** `respondToWebhook` — options: "[object Object]"
31. **Set call fields** `set` — options: "[object Object]", assignments: "[object Object]"
32. **Google Calendar** `googleCalendar` — end: "={{ $json.output.end }}", start: "={{ $json.output.start }}", calendar: "[object Object]"
33. **Get folder** `googleDrive` — resource: **fileFolder**
34. **Extract key points** `chainLlm` — text: "=To: {{ $json.To }}

Complete transcript:
{{ $json.Transcript }} ", messages: "[object Object]", promptType: "define"
35. **Download Files** `googleDrive` — operation: **download**
36. **Telegram** `telegram` — text: "=Call summary:
{{ $json.output.summary }}

First name: {{ $json.output.first_name }}
Last name: {{ $json.output.last_name }}
Email: {{ $json.output.email }}
Telephone: {{ $json.out…[truncated]", chatId: "CHAT_ID", additionalFields: "[object Object]"
37. **Qdrant Vector Store** `vectorStoreQdrant` — mode: "insert", options: "[object Object]", qdrantCollection: "[object Object]"

## 💡 AI-Powered Ideas for Improvement
**Explain:**  
This workflow is designed to automate the process of managing phone interactions using AI. It integrates with RetellAI to handle calls, transcribes them, and uses OpenAI models to analyze and summarize the conversation. It also uses a vector database to retrieve relevant company data to provide accurate responses. Additionally, it can schedule appointments on Google Calendar and send summaries and details via Telegram.

**Demonstrate:**  
A business owner could use this workflow to automate customer service calls. By summarizing call details and retrieving relevant company information, the workflow ensures consistent and accurate customer interactions, saving time and enhancing customer satisfaction.

**Imitate:**  
1. Register on RetellAI and Twilio, and set up your agent.
2. Connect OpenAI and Qdrant accounts in n8n.
3. Import the workflow and configure the nodes with your credentials.
4. Customize the system prompts and calendar events as needed.
5. Test the workflow with a sample call to ensure it functions correctly.

**Practice:**  
Create a test call scenario where you mimic a customer inquiry. Let the AI agent handle the call and observe how the workflow processes and summarizes the conversation. Check if the calendar and Telegram notifications are accurately updated.

**WIIFM:**  
Mastering this workflow enables you to offer advanced AI-driven customer service solutions. By automating call handling and data retrieval, you can improve service efficiency for clients, leading to increased customer satisfaction and potentially boosting your income by offering high-value automation services.

## 🔧 Setup Instructions
1. **Connect Credentials:** openAiApi, qdrantApi, telegramApi, googleCalendarOAuth2Api, httpHeaderAuth.
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
