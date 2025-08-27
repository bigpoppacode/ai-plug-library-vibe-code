# Slack Manual Automate Webhook
## 🚀 What It Does
Monitors events, processes them, and **notifies** people/apps (Slack/Email) with structured updates.

## 💼 Business Use Case
Use as a **glue/API broker**: receive data, enrich/validate via APIs, and pass to downstream systems.

## ⚙️ How It Works
1. **Trigger:** This workflow starts with **Get message**.
2. **Simple Memory** `memoryBufferWindow` — sessionKey: "={{ $('Get message').item.json.channel }}_{{ $('Get message').item.json.blocks[0].elements[0].elements[0].user_id }}", sessionIdType: "customKey", contextWindowLength: "10"
3. **Embeddings OpenAI1** `embeddingsOpenAi` — options: "[object Object]"
4. **RAG** `vectorStoreQdrant` — mode: "retrieve-as-tool", topK: "10", options: "[object Object]"
5. **Calculator** `toolCalculator` — configured for its default action.
6. **Get message** `slackTrigger` — options: "[object Object]", trigger: "app_mention", channelId: "[object Object]"
7. **When clicking ‘Test workflow’** `manualTrigger` — configured for its default action.
8. **Default Data Loader** `documentDefaultDataLoader` — options: "[object Object]", dataType: "binary"
9. **Token Splitter** `textSplitterTokenSplitter` — chunkSize: "300", chunkOverlap: "30"
10. **Sticky Note3** `stickyNote` — color: "6", width: "880", height: "220"
11. **Sticky Note5** `stickyNote` — color: "4", width: "620", height: "400"
12. **Sticky Note2** `stickyNote` — color: "3", width: "1400", height: "200"
13. **Embeddings OpenAI2** `embeddingsOpenAi` — options: "[object Object]"
14. **Sticky Note4** `stickyNote` — width: "900", height: "640", content: "[redacted]"
15. **Anthropic Chat Model** `lmChatAnthropic` — model: `[object Object]`
16. **AI Agent** `agent` — text: "={{ $json.blocks[0].elements[0].elements[1].text }}", options: "[object Object]", promptType: "define"
17. **Create collection** `httpRequest` — method: **POST**, url: `https://QDRANTURL/collections/COLLECTION`
18. **Refresh collection** `httpRequest` — method: **POST**, url: `https://QDRANTURL/collections/COLLECTION/points/delete`
19. **Send message** `slack` — text: "={{ $json.output }}", select: "channel", channelId: "[object Object]"
20. **Get folder** `googleDrive` — resource: **fileFolder**
21. **Download Files** `googleDrive` — operation: **download**
22. **Qdrant Vector Store1** `vectorStoreQdrant` — mode: "insert", options: "[object Object]", qdrantCollection: "[object Object]"

## 💡 AI-Powered Ideas for Improvement
**Explain**  
This workflow is designed to function as an AI chatbot on Slack for company staff, using Retrieval-Augmented Generation (RAG) to provide accurate, context-aware responses. It retrieves Slack messages, processes them with AI tools, accesses a vector database for relevant company documents, and sends back the information in an easy-to-read format. This setup helps employees quickly find and understand company-related information, enhancing productivity and reducing manual search time.

**Demonstrate**  
A business owner might use this workflow to automate internal support, providing instant answers to employee queries about company policies or procedures, thus reducing the workload on HR or IT departments and ensuring consistent communication.

**Imitate**  
1. Import the workflow into your n8n setup.
2. Connect Slack, Qdrant, and OpenAI accounts.
3. Configure Slack triggers for message mentions.
4. Set up Qdrant collections with relevant company documents.
5. Test the workflow by mentioning the bot in Slack with a query.

**Practice**  
Create a test Slack channel and interact with the bot using queries related to company policies. Observe how the bot retrieves and presents information. Adjust document sources or AI parameters to fine-tune responses.

**WIIFM**  
Mastering this workflow enables you to offer AI-driven support systems, reducing operational costs and increasing efficiency for businesses. By providing these solutions, you can attract new clients and generate recurring revenue through automation services.

## 🔧 Setup Instructions
1. **Connect Credentials:** openAiApi, qdrantApi, slackApi, httpHeaderAuth, googleDriveOAuth2Api.
2. **Notification Targets:** Confirm channel/email IDs and that the bot/app is authorized to post.
3. **API Contracts:** Validate required headers and 2xx/4xx handling; add retries for 429/5xx.

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
