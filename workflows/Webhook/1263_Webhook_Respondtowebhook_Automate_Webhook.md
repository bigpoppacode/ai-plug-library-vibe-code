# Webhook Respondtowebhook Automate Webhook
## 🚀 What It Does
Calls external APIs and uses **AI** to transform or decide, then routes the result downstream.

## 💼 Business Use Case
Use as a **glue/API broker**: receive data, enrich/validate via APIs, and pass to downstream systems.

## ⚙️ How It Works
1. **Trigger:** This workflow starts with **When clicking ‘Test workflow’**.
2. **Vector Store Tool** `toolVectorStore` — name: "company", description: "Risponde alle domande relative a ciò che ti viene chiesto"
3. **Qdrant Vector Store** `vectorStoreQdrant` — options: "[object Object]", qdrantCollection: "[object Object]"
4. **Embeddings OpenAI** `embeddingsOpenAi` — options: "[object Object]"
5. **Sticky Note4** `stickyNote` — color: "5", width: "1400", height: "240"
6. **Sticky Note** `stickyNote` — color: "3", width: "1420", height: "360"
7. **When clicking ‘Test workflow’** `manualTrigger` — configured for its default action.
8. **Default Data Loader** `documentDefaultDataLoader` — options: "[object Object]", dataType: "binary"
9. **Token Splitter** `textSplitterTokenSplitter` — chunkSize: "300", chunkOverlap: "30"
10. **Sticky Note3** `stickyNote` — color: "6", width: "880", height: "220"
11. **Embeddings OpenAI1** `embeddingsOpenAi` — options: "[object Object]"
12. **Sticky Note5** `stickyNote` — color: "4", width: "620", height: "400"
13. **OpenAI** `lmChatOpenAi` — options: "[object Object]"
14. **Listen** `webhook` — method: **POST**, path: `/test_voice_message_elevenlabs`
15. **Window Buffer Memory** `memoryBufferWindow` — configured for its default action.
16. **OpenAI Chat Model** `lmChatOpenAi` — options: "[object Object]"
17. **Sticky Note6** `stickyNote` — color: "7", width: "1400", height: "240"
18. **Create collection** `httpRequest` — method: **POST**, url: `https://QDRANTURL/collections/COLLECTION`
19. **Refresh collection** `httpRequest` — method: **POST**, url: `https://QDRANTURL/collections/COLLECTION/points/delete`
20. **AI Agent** `agent` — text: "={{ $json.body.question }}", options: "[object Object]", promptType: "define"
21. **Get folder** `googleDrive` — resource: **fileFolder**
22. **Respond to ElevenLabs** `respondToWebhook` — options: "[object Object]"
23. **Download Files** `googleDrive` — operation: **download**
24. **Qdrant Vector Store1** `vectorStoreQdrant` — mode: "insert", options: "[object Object]", qdrantCollection: "[object Object]"

## 💡 AI-Powered Ideas for Improvement
**Explain**  
This n8n workflow creates a voice-enabled chatbot using ElevenLabs and OpenAI. It receives voice questions through a webhook, converts them to text, and uses AI to search a vector database for relevant information. The AI then generates a response, which is sent back to ElevenLabs to be converted into a voice format and delivered to the user.

**Demonstrate**  
A business owner could use this workflow to set up a voice assistant for customer service, allowing customers to ask questions and receive spoken answers, thereby enhancing user experience and reducing wait times for support.

**Imitate**  
1. Set up an ElevenLabs agent and webhook.
2. Use n8n to connect the webhook to OpenAI and Qdrant.
3. Configure the vector store and embeddings.
4. Test the workflow by sending voice queries.
5. Adjust the AI prompts and vector database as needed.

**Practice**  
Create a simple test with a few FAQs in the vector store. Use the workflow to ask questions and check if the AI retrieves the correct information. Adjust the vector data to improve accuracy and test again.

**WIIFM**  
Mastering this workflow equips you to offer advanced AI-driven voice services. This capability can attract clients looking for innovative customer service solutions, potentially increasing your revenue and positioning you as a leader in AI automation services.

## 🔧 Setup Instructions
1. **Connect Credentials:** qdrantApi, openAiApi, httpHeaderAuth, googleDriveOAuth2Api.
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
