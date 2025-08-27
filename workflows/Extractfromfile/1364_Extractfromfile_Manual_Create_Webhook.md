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
  ### Explain
This n8n workflow automates a WhatsApp chatbot that acts as a Sales Agent for Yamaha Powered Loudspeakers. When a user sends a message, the workflow triggers, processes the message with OpenAI's GPT-4 model to understand the query, and uses a vector store containing the product catalog to provide accurate responses. If the message is not text, it politely notifies the user. The workflow ensures users get quick, relevant information about Yamaha products, enhancing customer interaction and support.

### Demonstrate
A business owner could use this workflow to streamline customer inquiries, providing instant information about products, thereby improving customer service and potentially increasing sales without needing a human representative for each interaction.

### Imitate
1. Import the workflow into n8n.
2. Connect your WhatsApp and OpenAI accounts.
3. Download the product brochure and extract its text.
4. Create a vector store with the product information for accurate responses.
5. Test the workflow by sending WhatsApp messages to see how the chatbot responds.

### Practice
Set up a mock WhatsApp account and send various product-related questions. Observe how the AI responds and tweak the vector store or AI prompts to improve accuracy and relevance of the answers.

### WIIFM
Mastering this workflow enables you to offer AI-driven customer service solutions, reducing the need for manual customer support. This can enhance client satisfaction, streamline operations, and provide a competitive edge, leading to more business opportunities and increased revenue.
  
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
  