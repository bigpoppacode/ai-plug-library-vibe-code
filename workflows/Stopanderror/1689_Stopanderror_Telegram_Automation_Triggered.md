# Stopanderror Telegram Automation Triggered
## 🚀 What It Does
Automates a flow using telegram×3, embeddingsOpenAi×2, stopAndError×2.

## 💼 Business Use Case
Great for **content, summarization, triage, or decisioning** where AI adds speed and consistency.

## ⚙️ How It Works
1. **Trigger:** This workflow starts with **Telegram Trigger**.
2. **Telegram Trigger** `telegramTrigger` — updates: "message", additionalFields: "[object Object]"
3. **Embeddings OpenAI** `embeddingsOpenAi` — options: "[object Object]"
4. **Default Data Loader** `documentDefaultDataLoader` — options: "[object Object]", dataType: "binary"
5. **Recursive Character Text Splitter** `textSplitterRecursiveCharacterTextSplitter` — options: "[object Object]", chunkSize: "3000", chunkOverlap: "200"
6. **Vector Store Retriever** `retrieverVectorStore` — configured for its default action.
7. **Pinecone Vector Store1** `vectorStorePinecone` — options: "[object Object]", pineconeIndex: "[object Object]"
8. **Groq Chat Model** `lmChatGroq` — model: `llama-3.1-70b-versatile`
9. **Sticky Note** `stickyNote` — color: "7", width: "1139.5159692915001", height: "873.6068151028411"
10. **Sticky Note1** `stickyNote` — color: "7", width: "1344.7918019808176", height: "806.8716167324012"
11. **Embeddings** `embeddingsOpenAi` — options: "[object Object]"
12. **Check If is a document** `if` — options: "[object Object]", conditions: "[object Object]"
13. **Telegram get File** `telegram` — resource: **file**
14. **Question and Answer Chain** `chainRetrievalQa` — text: "={{ $json.message.text }}
Search the database with the retriever for information for the answer", promptType: "define"
15. **Change to application/pdf** `code` — jsCode: "// Função para modificar os metadados do arquivo binário
function modifyBinaryMetadata(items) {
 for (const item of items) {
 if (item.binary && item.binary.data) {
 // Modifica o …[truncated]"
16. **Telegram Response** `telegram` — text: "={{ $json.response.text }}", chatId: "={{ $('Telegram Trigger').item.json.message.chat.id }}", additionalFields: "[object Object]"
17. **Pinecone Vector Store** `vectorStorePinecone` — mode: "insert", options: "[object Object]", pineconeIndex: "[object Object]"
18. **Stop and Error** `stopAndError` — errorMessage: "An error occurred"
19. **Limit to 1** `limit` — configured for its default action.
20. **Telegram Response about Database** `telegram` — text: "={{ $json.metadata.pdf.totalPages }} pages saved on Pinecone", chatId: "={{ $('Telegram Trigger').item.json.message.chat.id }}", additionalFields: "[object Object]"
21. **Stop and Error1** `stopAndError` — errorMessage: "An error occurred."

## 💡 AI-Powered Ideas for Improvement
**Explain:**  
This n8n workflow automates the process of handling PDF documents received via Telegram. When a message or document is received, it checks if it's a document, retrieves the file, and converts it to a PDF format if necessary. It then splits the document into chunks, generates embeddings, and stores them in a Pinecone vector database. This setup allows for efficient retrieval of information from the document, which can be used to answer queries related to the document's content. The workflow also handles errors and sends notifications via Telegram.

**Demonstrate:**  
A business owner could use this workflow to archive and query PDF documents sent by customers through Telegram. This enables quick access to document information, improving response times and customer service efficiency.

**Imitate:**  
1. Import the workflow to n8n.  
2. Set up a Telegram bot and connect it to the workflow.  
3. Configure Pinecone and OpenAI credentials.  
4. Test by sending a PDF via Telegram to ensure it processes correctly.  
5. Adjust chunk sizes and overlap for optimal retrieval.

**Practice:**  
Create a test Telegram bot and send a few PDF documents to see how the workflow handles them. Experiment with different document types and sizes to understand chunking and retrieval processes.

**WIIFM:**  
Mastering this workflow allows you to offer document management and retrieval solutions to businesses. This can enhance your service offerings, attract clients looking for efficient document handling, and increase your income through automation services.

## 🔧 Setup Instructions
1. **Connect Credentials:** telegramApi, openAiApi, pineconeApi, groqApi.

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
