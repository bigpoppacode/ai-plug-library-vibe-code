# Woocommercetool Manual Automation Webhook
## 🚀 What It Does
Calls external APIs and uses **AI** to transform or decide, then routes the result downstream.

## 💼 Business Use Case
Use as a **glue/API broker**: receive data, enrich/validate via APIs, and pass to downstream systems.

## ⚙️ How It Works
1. **Trigger:** This workflow starts with **When chat message received**.
2. **When chat message received** `chatTrigger` — options: "[object Object]"
3. **Window Buffer Memory** `memoryBufferWindow` — sessionKey: "={{ $('Edit Fields').item.json.sessionId }}", sessionIdType: "customKey"
4. **Calculator** `toolCalculator` — configured for its default action.
5. **OpenAI Chat Model** `lmChatOpenAi` — options: "[object Object]"
6. **RAG** `toolVectorStore` — name: "informazioni_negozio", description: "Informazioni relative al negozio: orari di apertura, indirizzo, contatti, informazioni generali"
7. **Qdrant Vector Store** `vectorStoreQdrant` — options: "[object Object]", qdrantCollection: "[object Object]"
8. **Embeddings OpenAI** `embeddingsOpenAi` — options: "[object Object]"
9. **OpenAI Chat Model1** `lmChatOpenAi` — options: "[object Object]"
10. **personal_shopper** `wooCommerceTool` — operation: **getAll**
11. **OpenAI Chat Model2** `lmChatOpenAi` — options: "[object Object]"
12. **Embeddings OpenAI3** `embeddingsOpenAi` — options: "[object Object]"
13. **Default Data Loader2** `documentDefaultDataLoader` — options: "[object Object]", dataType: "binary"
14. **Token Splitter1** `textSplitterTokenSplitter` — chunkSize: "300", chunkOverlap: "30"
15. **When clicking ‘Test workflow’** `manualTrigger` — configured for its default action.
16. **Sticky Note** `stickyNote` — width: "259.7740863787376", height: "234.1528239202657", content: "Replace the URL and Collection name with your own"
17. **Sticky Note1** `stickyNote` — color: "3", width: "1301.621262458471", height: "105.6212624584717"
18. **Sticky Note2** `stickyNote` — color: "3", width: "1301.621262458471", height: "105.6212624584717"
19. **Sticky Note3** `stickyNote` — color: "3", width: "1301.621262458471", height: "105.6212624584717"
20. **Edit Fields** `set` — options: "[object Object]", assignments: "[object Object]"
21. **HTTP Request** `httpRequest` — method: **POST**, url: `https://QDRANTURL/collections/NAME/points/delete`
22. **Information Extractor** `informationExtractor` — text: "={{ $json.chatInput }}", options: "[object Object]", schemaType: "manual"
23. **Google Drive2** `googleDrive` — resource: **fileFolder**
24. **AI Agent** `agent` — text: "={{ $('When chat message received').item.json.chatInput }}", options: "[object Object]", promptType: "define"
25. **Google Drive1** `googleDrive` — operation: **download**
26. **Qdrant Vector Store1** `vectorStoreQdrant` — mode: "insert", options: "[object Object]", qdrantCollection: "[object Object]"

## 💡 AI-Powered Ideas for Improvement
**Explain:** This n8n workflow acts as a personal shopping assistant using AI to handle chat inquiries about products. When a chat message is received, it checks if the user is inquiring about a product. If so, it extracts relevant details like keywords, price range, and SKU, and searches the WooCommerce store to find matching products. For general store-related questions, it retrieves information from a vector database containing store details such as hours and contact info. The workflow uses OpenAI models to process queries and provide responses.

**Demonstrate:** A small business owner could use this workflow to automate customer interactions on their website. It helps provide instant responses to product inquiries and general questions, enhancing customer experience and freeing up staff time.

**Imitate:** 
1. Import the workflow into n8n.
2. Connect your OpenAI, WooCommerce, and Qdrant accounts.
3. Set up your chat system to trigger this workflow.
4. Customize the store information in the vector database and WooCommerce settings.
5. Test the workflow with sample queries to ensure it functions as expected.

**Practice:** Set up a test environment with a few sample products in WooCommerce and a basic chat interface. Simulate customer inquiries to see how the workflow extracts information and responds. Adjust parameters and test again to fine-tune the system.

**WIIFM:** Mastering this workflow allows you to offer automated customer support solutions to e-commerce businesses, enhancing their operational efficiency and customer satisfaction. This can increase your service offerings, attract more clients, and boost your income in the AI automation sector.

## 🔧 Setup Instructions
1. **Connect Credentials:** openAiApi, qdrantApi, wooCommerceApi, googleDriveOAuth2Api, httpHeaderAuth.
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
