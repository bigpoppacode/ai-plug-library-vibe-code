# Summarize Respondtowebhook Automation Webhook
## 🚀 What It Does
Automates a flow using stickyNote×9, agent×6, set×6.

## 💼 Business Use Case
Use to eliminate manual copy-paste and standardize a recurring business process.

## ⚙️ How It Works
1. **Trigger:** This workflow starts with **Chat**.
2. **Chat** `chatTrigger` — options: "[object Object]"
3. **Gemini Classification** `lmChatGoogleGemini` — options: "[object Object]", modelName: "models/gemini-2.0-flash-lite"
4. **Gemini Factual** `lmChatGoogleGemini` — options: "[object Object]", modelName: "models/gemini-2.0-flash"
5. **Gemini Analytical** `lmChatGoogleGemini` — options: "[object Object]", modelName: "models/gemini-2.0-flash"
6. **Chat Buffer Memory Analytical** `memoryBufferWindow` — sessionKey: "={{ $('Combined Fields').item.json.chat_memory_key }}", sessionIdType: "customKey", contextWindowLength: "10"
7. **Chat Buffer Memory Factual** `memoryBufferWindow` — sessionKey: "={{ $('Combined Fields').item.json.chat_memory_key }}", sessionIdType: "customKey", contextWindowLength: "10"
8. **Gemini Opinion** `lmChatGoogleGemini` — options: "[object Object]", modelName: "models/gemini-2.0-flash"
9. **Chat Buffer Memory Opinion** `memoryBufferWindow` — sessionKey: "={{ $('Combined Fields').item.json.chat_memory_key }}", sessionIdType: "customKey", contextWindowLength: "10"
10. **Gemini Contextual** `lmChatGoogleGemini` — options: "[object Object]", modelName: "models/gemini-2.0-flash"
11. **Chat Buffer Memory Contextual** `memoryBufferWindow` — sessionKey: "={{ $('Combined Fields').item.json.chat_memory_key }}", sessionIdType: "customKey", contextWindowLength: "10"
12. **Embeddings** `embeddingsGoogleGemini` — modelName: "models/text-embedding-004"
13. **Sticky Note** `stickyNote` — color: "7", width: "700", height: "520"
14. **Sticky Note1** `stickyNote` — color: "7", width: "700", height: "520"
15. **Sticky Note2** `stickyNote` — color: "7", width: "700", height: "520"
16. **Sticky Note3** `stickyNote` — color: "7", width: "700", height: "520"
17. **Gemini Answer** `lmChatGoogleGemini` — options: "[object Object]", modelName: "models/gemini-2.0-flash"
18. **Chat Buffer Memory** `memoryBufferWindow` — sessionKey: "={{ $('Combined Fields').item.json.chat_memory_key }}", sessionIdType: "customKey", contextWindowLength: "10"
19. **Sticky Note4** `stickyNote` — color: "7", width: "820", height: "580"
20. **Sticky Note5** `stickyNote` — color: "7", width: "740", height: "580"
21. **Sticky Note6** `stickyNote` — color: "7", width: "700", height: "580"
22. **When Executed by Another Workflow** `executeWorkflowTrigger` — workflowInputs: "[object Object]"
23. **Sticky Note7** `stickyNote` — width: "1280", height: "1300", content: "# Adaptive RAG Workflow

This n8n workflow implements a version of the Adaptive Retrieval-Augmented Generation (RAG) approach. It classifies user queries and applies different retr…[truncated]"
24. **Sticky Note8** `stickyNote` — color: "7", width: "320", height: "580"
25. **Combined Fields** `set` — options: "[object Object]", assignments: "[object Object]"
26. **Query Classification** `agent` — text: "=Classify this query: {{ $('Combined Fields').item.json.user_query }}", options: "[object Object]", promptType: "define"
27. **Switch** `switch` — rules: "[object Object]", options: "[object Object]"
28. **Factual Strategy - Focus on Precision** `agent` — text: "=Enhance this factual query: {{ $('Combined Fields').item.json.user_query }}", options: "[object Object]", promptType: "define"
29. **Analytical Strategy - Comprehensive Coverage** `agent` — text: "=Generate sub-questions for this analytical query: {{ $('Combined Fields').item.json.user_query }}", options: "[object Object]", promptType: "define"
30. **Opinion Strategy - Diverse Perspectives** `agent` — text: "=Identify different perspectives on: {{ $('Combined Fields').item.json.user_query }}", options: "[object Object]", promptType: "define"
31. **Contextual Strategy - User Context Integration** `agent` — text: "=Infer the implied context in this query: {{ $('Combined Fields').item.json.user_query }}", options: "[object Object]", promptType: "define"
32. **Factual Prompt and Output** `set` — options: "[object Object]", assignments: "[object Object]"
33. **Analytical Prompt and Output** `set` — options: "[object Object]", assignments: "[object Object]"
34. **Opinion Prompt and Output** `set` — options: "[object Object]", assignments: "[object Object]"
35. **Contextual Prompt and Output** `set` — options: "[object Object]", assignments: "[object Object]"
36. **Set Prompt and Output** `set` — options: "[object Object]", assignments: "[object Object]"
37. **Retrieve Documents from Vector Store** `vectorStoreQdrant` — prompt: "={{ $json.prompt }}

User query: 
{{ $json.output }}"
38. **Concatenate Context** `summarize` — options: "[object Object]", fieldsToSummarize: "[object Object]"
39. **Answer** `agent` — text: "=User query: {{ $('Combined Fields').item.json.user_query }}", options: "[object Object]", promptType: "define"
40. **Respond to Webhook** `respondToWebhook` — options: "[object Object]"

## 💡 AI-Powered Ideas for Improvement
- **Explain**: This n8n workflow uses the Adaptive Retrieval-Augmented Generation (RAG) approach to enhance question-answering. It classifies user queries into Factual, Analytical, Opinion, or Contextual categories and applies specific strategies to retrieve and generate accurate responses using a knowledge base stored in a vector database.

- **Demonstrate**: A business owner could use this workflow to automate customer support, providing precise, context-aware answers to common inquiries, thus reducing response times and improving customer satisfaction.

- **Imitate**: Import the workflow into n8n and connect to a vector database. Set up the chat interface or another trigger to input queries. Ensure the workflow is configured with appropriate credentials and vector store IDs. Test the workflow with various query types to see tailored responses.

- **Practice**: Create a test scenario by inputting different types of queries (e.g., factual, analytical) into the workflow. Observe how the workflow classifies and processes each query, and note the differences in responses.

- **WIIFM**: Mastering this workflow can position you as an expert in AI-driven automation solutions. It can help you offer advanced, scalable customer support systems to businesses, enhancing service offerings and increasing potential revenue in the AI automation market.

## 🔧 Setup Instructions
1. **Connect Credentials:** googlePalmApi, qdrantApi.

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
