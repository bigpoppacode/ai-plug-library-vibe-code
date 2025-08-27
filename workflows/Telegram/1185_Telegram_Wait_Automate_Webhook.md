# Telegram Wait Automate Webhook
## 🚀 What It Does
Automates a flow using stickyNote×15, merge×3, googleDrive×3.

## 💼 Business Use Case
Great for **content, summarization, triage, or decisioning** where AI adds speed and consistency.

## ⚙️ How It Works
1. **Trigger:** This workflow starts with **When clicking ‘Test workflow’**.
2. **Data Loader** `documentDefaultDataLoader` — options: "[object Object]", dataType: "binary"
3. **Token Splitter** `textSplitterTokenSplitter` — chunkSize: "3000"
4. **When clicking ‘Test workflow’** `manualTrigger` — configured for its default action.
5. **Google Gemini Chat Model** `lmChatGoogleGemini` — options: "[object Object]", modelName: "models/gemini-2.0-flash-exp"
6. **text-embeddings-3-large** `embeddingsOpenAi` — model: `text-embedding-3-large`
7. **gpt-4o-mini1** `lmChatOpenAi` — options: "[object Object]"
8. **Sticky Note** `stickyNote` — color: "3", width: "1180", height: "760"
9. **Sticky Note1** `stickyNote` — color: "7", width: "920", height: "640"
10. **Sticky Note2** `stickyNote` — width: "480", height: "840", content: "## 🌟Workflow Config

- Google Drive Folder Id
- Qdrant Collection Name
- List of Google Drive File Id's"
11. **Sticky Note3** `stickyNote` — color: "6", width: "640", height: "420"
12. **Sticky Note4** `stickyNote` — color: "2", width: "300", height: "320"
13. **Sticky Note5** `stickyNote` — color: "5", width: "1360", height: "1480"
14. **Sticky Note6** `stickyNote` — color: "5", width: "420", height: "400"
15. **Sticky Note7** `stickyNote` — color: "4", width: "380", height: "520"
16. **Sticky Note8** `stickyNote` — color: "4", width: "340", height: "460"
17. **Webhook** `webhook` — path: `/upsert`
18. **Window Buffer Memory** `memoryBufferWindow` — contextWindowLength: "40"
19. **When chat message received** `chatTrigger` — options: "[object Object]"
20. **Google Gemini Chat Model1** `lmChatGoogleGemini` — options: "[object Object]", modelName: "models/gemini-2.0-flash-exp"
21. **text-embeddings-3-large1** `embeddingsOpenAi` — model: `text-embedding-3-large`
22. **Sticky Note9** `stickyNote` — color: "5", width: "860", height: "680"
23. **Sticky Note10** `stickyNote` — color: "4", width: "340", height: "320"
24. **Sticky Note11** `stickyNote` — color: "7", width: "2880", height: "1880"
25. **Sticky Note12** `stickyNote` — color: "7", width: "1780", height: "880"
26. **Google Drive** `googleDrive` — operation: **createFromText**
27. **Sticky Note13** `stickyNote` — color: "4", width: "340", height: "300"
28. **Qdrant Vector Store Tool** `vectorStoreQdrant` — mode: "retrieve-as-tool", topK: "20", options: "[object Object]"
29. **OpenAI Chat Model** `lmChatOpenAi` — model: `[object Object]`
30. **Sticky Note14** `stickyNote` — width: "700", height: "1240", content: "# 🤖 AI-Powered RAG Chatbot with Google Drive Integration

This workflow creates a powerful RAG (Retrieval-Augmented Generation) chatbot that can process, store, and interact with …[truncated]"
31. **Google Folder ID** `set` — options: "[object Object]", assignments: "[object Object]"
32. **AI Agent** `agent` — text: "={{ $json.chatInput }}", options: "[object Object]", promptType: "define"
33. **Find File Ids in Google Drive Folder** `googleDrive` — resource: **fileFolder**
34. **Update Chat History** `googleDocs` — operation: **update**
35. **Respond to User** `set` — options: "[object Object]", assignments: "[object Object]"
36. **File Id List** `summarize` — options: "[object Object]", fieldsToSummarize: "[object Object]"
37. **Qdrant Collection Name** `set` — options: "[object Object]", assignments: "[object Object]"
38. **Merge1** `merge` — mode: "combine", options: "[object Object]", combineBy: "combineByPosition"
39. **Confirm Qdrant Delete Points** `telegram` — operation: **sendAndWait**
40. **If** `if` — options: "[object Object]", conditions: "[object Object]"
41. **Delete Qdrant Points by File ID** `code` — code: "[object Object]", inputs: "[object Object]", outputs: "[object Object]"
42. **Send Declined Message** `telegram` — text: "Qdrant vector store upsert declined", chatId: "={{ $env.TELEGRAM_CHAT_ID }}", additionalFields: "[object Object]"
43. **Merge2** `merge` — configured for its default action.

## 💡 AI-Powered Ideas for Improvement
**Explain:**  
This n8n workflow is designed to create a Retrieval-Augmented Generation (RAG) chatbot that integrates with Google Drive. It processes and stores documents from Google Drive into a Qdrant vector store, enabling efficient retrieval of relevant information. The chatbot uses AI models from OpenAI and Google Gemini to interact with users, providing context-aware responses based on stored documents. It maintains chat history in Google Docs and includes features for document management and secure deletion with human verification.

**Demonstrate:**  
A business owner could use this workflow to create a customer support chatbot that retrieves product information from internal documents stored in Google Drive, ensuring accurate and up-to-date responses to customer inquiries.

**Imitate:**  
1. Import the workflow into n8n.
2. Connect Google Drive and Qdrant API credentials.
3. Set up Google Drive folder ID and Qdrant collection name.
4. Test the workflow by uploading a document to Google Drive.
5. Interact with the chatbot to verify document retrieval and response accuracy.

**Practice:**  
Experiment with a small set of documents in a Google Drive folder. Add, modify, or remove documents and observe the chatbot's response changes. Use different queries to test the retrieval and response capabilities.

**WIIFM:**  
Mastering this workflow enables you to offer AI-powered chatbot services that enhance customer support and information retrieval for businesses. This can increase your service offerings, attract more clients, and generate additional income in the AI automation industry.

## 🔧 Setup Instructions
1. **Connect Credentials:** qdrantApi, googlePalmApi, googleDriveOAuth2Api, openAiApi, telegramApi.

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
