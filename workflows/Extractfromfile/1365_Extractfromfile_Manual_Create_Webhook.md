# Extractfromfile Manual Create Webhook
  ## 🚀 What It Does
  Calls external APIs and uses **AI** to transform or decide, then routes the result downstream.
  
  ## 💼 Business Use Case
  Use as a **glue/API broker**: receive data, enrich/validate via APIs, and pass to downstream systems.
  
  ## ⚙️ How It Works
  1. **Trigger:** This workflow starts with **WhatsApp Trigger**.
  2. **WhatsApp Trigger** `whatsAppTrigger` — updates: "messages"
3. **OpenAI Chat Model** `lmChatOpenAi` — model: `gpt-4o-2024-08-06`
4. **Window Buffer Memory** `memoryBufferWindow` — sessionKey: "=whatsapp-75-{{ $json.messages[0].from }}", sessionIdType: "customKey"
5. **Vector Store Tool** `toolVectorStore` — name: "query_product_brochure", description: "Call this tool to query the product brochure. Valid for the year 2024."
6. **Embeddings OpenAI** `embeddingsOpenAi` — model: `text-embedding-3-small`
7. **OpenAI Chat Model1** `lmChatOpenAi` — model: `gpt-4o-2024-08-06`
8. **When clicking ‘Test workflow’** `manualTrigger` — configured for its default action.
9. **Embeddings OpenAI1** `embeddingsOpenAi` — model: `text-embedding-3-small`
10. **Default Data Loader** `documentDefaultDataLoader` — options: "[object Object]", jsonData: "={{ $('Extract from File').item.json.text }}", jsonMode: "expressionData"
11. **Recursive Character Text Splitter** `textSplitterRecursiveCharacterTextSplitter` — options: "[object Object]", chunkSize: "2000", chunkOverlap: "[object Object]"
12. **Product Catalogue** `vectorStoreInMemory` — memoryKey: "whatsapp-75"
13. **Sticky Note** `stickyNote` — color: "7", width: "640.4375", height: "434.6875"
14. **Sticky Note1** `stickyNote` — color: "7", width: "614.6875", height: "731.1875"
15. **Sticky Note2** `stickyNote` — color: "7", width: "546.6875", height: "484.1875"
16. **Sticky Note3** `stickyNote` — width: "338", height: "92", content: "### Want to handle all message types?
Check out my other WhatsApp template in my creator page! https://n8n.io/creators/jimleuk/"
17. **Sticky Note4** `stickyNote` — color: "7", width: "337.6875", height: "311.1875"
18. **Sticky Note5** `stickyNote` — color: "7", width: "746.6875", height: "929.1875"
19. **Sticky Note6** `stickyNote` — color: "7", width: "495.4375", height: "484.1875"
20. **Sticky Note7** `stickyNote` — width: "401.25", height: "582.6283033962263", content: "## Try It Out!

### This n8n template builds a simple WhatsApp chabot acting as a Sales Agent. The Agent is backed by a product catalog vector store to better answer user's questio…[truncated]"
21. **Sticky Note8** `stickyNote` — color: "5", width: "345.10906976744184", height: "114.53583720930231"
22. **Sticky Note9** `stickyNote` — color: "5", width: "364.6293255813954", height: "107.02804651162779"
23. **Handle Message Types** `switch` — rules: "[object Object]", options: "[object Object]"
24. **get Product Brochure** `httpRequest` — url: `https://usa.yamaha.com/files/download/brochure/1/1474881/Yamaha-Powered-Loudspeakers-brochure-2024-en-web.pdf`
25. **AI Sales Agent** `agent` — text: "={{ $json.messages[0].text.body }}", options: "[object Object]", promptType: "define"
26. **Reply To User1** `whatsApp` — operation: **send**
27. **Extract from File** `extractFromFile` — operation: **pdf**
28. **Reply To User** `whatsApp` — operation: **send**
29. **Create Product Catalogue** `vectorStoreInMemory` — mode: "insert", memoryKey: "whatsapp-75", clearStore: "true"
  
  ## 💡 AI-Powered Ideas for Improvement
  **Explain:**  
This workflow is designed to automate customer interactions via WhatsApp by utilizing AI to provide accurate and helpful information about Yamaha Powered Loudspeakers. When a message is received on WhatsApp, it triggers the workflow, which then uses OpenAI to interpret the message and retrieve relevant information from a pre-loaded product brochure stored in a vector database. The AI agent formulates a response based on the customer's inquiry and sends it back through WhatsApp. If the message is not text-based, a default response is sent.

**Demonstrate:**  
A business owner could use this workflow to handle customer inquiries about products via WhatsApp, providing instant and accurate responses, thus improving customer satisfaction and freeing up human resources from repetitive tasks.

**Imitate:**  
1. Import the workflow into n8n.
2. Connect your WhatsApp and OpenAI accounts.
3. Download and extract the product brochure.
4. Set the vector store with the brochure data.
5. Test the workflow by sending a text message via WhatsApp.

**Practice:**  
Create a test scenario where you send different text queries about the Yamaha speakers, and observe how the AI provides responses based on the product brochure data. Try sending a non-text message to see the default response.

**WIIFM:**  
This workflow can significantly enhance customer service efficiency, allowing you to offer a 24/7 AI-powered assistant to handle inquiries. Mastering this could position you as a valuable automation consultant, helping businesses improve customer engagement and potentially increasing your revenue streams through automation services.
  
  ## 🔧 Setup Instructions
  1. **Connect Credentials:** whatsAppTriggerApi, openAiApi, whatsAppApi.
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
  