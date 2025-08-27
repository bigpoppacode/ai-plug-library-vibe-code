# GoogleCalendar Webhook Create Webhook
  ## 🚀 What It Does
  Calls external APIs and uses **AI** to transform or decide, then routes the result downstream.
  
  ## 💼 Business Use Case
  Use as a **glue/API broker**: receive data, enrich/validate via APIs, and pass to downstream systems.
  
  ## ⚙️ How It Works
  1. **Trigger:** This workflow starts with **When clicking ‘Test workflow’**.
  2. **n8n_order** `webhook` — path: `/9ff7a394-5b4b-4790-a96b-c41c4ba27fa5`
3. **OpenAI Chat Model3** `lmChatOpenAi` — model: `[object Object]`
4. **n8n_appointment** `webhook` — path: `/f5edfe92-649b-40da-ab35-f818ccb55ad4`
5. **Retrive Qdrant Vector Store** `vectorStoreQdrant` — options: "[object Object]", qdrantCollection: "[object Object]"
6. **Embeddings OpenAI2** `embeddingsOpenAi` — options: "[object Object]"
7. **RAG** `toolVectorStore` — name: "company_data", description: "Retrive data about company knowledge from vector store"
8. **OpenAI Chat Model2** `lmChatOpenAi` — model: `[object Object]`
9. **OpenAI Chat Model1** `lmChatOpenAi` — model: `[object Object]`
10. **n8n_rag** `webhook` — path: `/edb1e894-1210-4902-a34f-a014bbdad8d8`
11. **Structured Output Parser** `outputParserStructured` — schemaType: "manual", inputSchema: "{
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
12. **Sticky Note** `stickyNote` — width: "1140", height: "2200", content: "# STEP 6 - VOICEFLOW

- Register on [Voiceflow](https://www.voiceflow.com/) 
- Create the workflow as shown in the following image
![image](https://i.postimg.cc/3rSPwMn2/langflow.p…[truncated]"
13. **When clicking ‘Test workflow’** `manualTrigger` — configured for its default action.
14. **Embeddings OpenAI** `embeddingsOpenAi` — options: "[object Object]"
15. **Default Data Loader** `documentDefaultDataLoader` — options: "[object Object]", dataType: "binary"
16. **Token Splitter** `textSplitterTokenSplitter` — chunkSize: "300", chunkOverlap: "30"
17. **Sticky Note3** `stickyNote` — color: "6", width: "880", height: "220"
18. **Sticky Note4** `stickyNote` — color: "4", width: "620", height: "400"
19. **Sticky Note5** `stickyNote` — color: "5", width: "1220", content: "# STEP 5
If required retrive the informations by RAG system"
20. **Sticky Note6** `stickyNote` — color: "5", width: "1220", content: "# STEP 3
If required retrive the informations by Order system
- Set your API URL Tracking service"
21. **Sticky Note7** `stickyNote` — color: "5", width: "1220", content: "# STEP 4
If required retrive the informations by Appointment system"
22. **API URL Tracking** `httpRequest` — url: `URL_TRACKING`
23. **Concert start date** `chainLlm` — text: "=Convert this date to a compatible format for Google Calendar APIs for the start date, and for the end date add 1 hour to the start date.

Here is the start date:
{{ $json.query.Ap…[truncated]", promptType: "define", hasOutputParser: "true"
24. **Retrive Agent** `agent` — text: "={{ $json.query.Question }}", agent: "conversationalAgent", options: "[object Object]"
25. **Create collection** `httpRequest` — method: **POST**, url: `https://QDRANTURL/collections/COLLECTION`
26. **Refresh collection** `httpRequest` — method: **POST**, url: `https://QDRANTURL/collections/COLLECTION/points/delete`
27. **Tracking response** `set` — options: "[object Object]", assignments: "[object Object]"
28. **Google Calendar** `googleCalendar` — end: "={{ $json.output.end }}", start: "={{ $json.output.start }}", calendar: "[object Object]"
29. **Webhook RAG response** `respondToWebhook` — options: "[object Object]"
30. **Get folder** `googleDrive` — resource: **fileFolder**
31. **Webhook tracking response** `respondToWebhook` — options: "[object Object]"
32. **Calendar response** `set` — options: "[object Object]", assignments: "[object Object]"
33. **Download Files** `googleDrive` — operation: **download**
34. **Webhook calendar response** `respondToWebhook` — options: "[object Object]"
35. **Qdrant Vector Store** `vectorStoreQdrant` — mode: "insert", options: "[object Object]", qdrantCollection: "[object Object]"
  
  ## 💡 AI-Powered Ideas for Improvement
  ### Explain
This n8n workflow is designed to automate tasks related to orders, appointments, and data retrieval. It uses webhooks to receive order and appointment data, processes this data with OpenAI models for intelligent responses, and integrates with tools like Google Calendar for scheduling. The workflow also utilizes a Qdrant Vector Store for storing and retrieving company knowledge, allowing for enhanced AI interactions and responses.

### Demonstrate
A business owner could use this workflow to automate customer interactions, such as booking appointments or providing order updates, by integrating with their existing systems. This streamlines operations, reduces manual workload, and improves customer service efficiency.

### Imitate
1. Import the workflow into your n8n instance.
2. Connect necessary services (OpenAI, Google Calendar, Qdrant).
3. Customize webhook paths for orders and appointments.
4. Set up Qdrant Vector Store with company data.
5. Test the workflow to ensure data is processed and responded to correctly.

### Practice
Create a test scenario where you simulate an order and an appointment request. Use the workflow to process these entries and verify that the system updates Google Calendar and responds with accurate information using the AI models.

### WIIFM
Mastering this workflow empowers you to offer advanced automation solutions to clients, enhancing their operational efficiency and customer engagement. This expertise can help you attract more business, increase your service offerings, and generate additional revenue through AI-driven automation solutions.
  
  ## 🔧 Setup Instructions
  1. **Connect Credentials:** googleCalendarOAuth2Api, openAiApi, qdrantApi, httpHeaderAuth, googleDriveOAuth2Api.
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
  