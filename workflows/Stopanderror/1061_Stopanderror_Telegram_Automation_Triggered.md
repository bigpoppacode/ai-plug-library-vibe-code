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
      // Mo…[truncated]"
16. **Telegram Response** `telegram` — text: "={{ $json.response.text }}", chatId: "={{ $('Telegram Trigger').item.json.message.chat.id }}", additionalFields: "[object Object]"
17. **Pinecone Vector Store** `vectorStorePinecone` — mode: "insert", options: "[object Object]", pineconeIndex: "[object Object]"
18. **Stop and Error** `stopAndError` — errorMessage: "An error occurred"
19. **Limit to 1** `limit` — configured for its default action.
20. **Telegram Response about Database** `telegram` — text: "={{ $json.metadata.pdf.totalPages }} pages saved on Pinecone", chatId: "={{ $('Telegram Trigger').item.json.message.chat.id }}", additionalFields: "[object Object]"
21. **Stop and Error1** `stopAndError` — errorMessage: "An error occurred."

## 💡 AI-Powered Ideas for Improvement
**Explain:**  
This workflow processes PDF documents sent through Telegram, converting them into a format that can be searched and queried. It extracts text from PDFs, splits the text into manageable chunks, creates embeddings using OpenAI, and stores these embeddings in a Pinecone vector database. This allows for efficient retrieval of relevant document information when a user sends a question via Telegram. The workflow responds to the user's query by retrieving the relevant documents from the vector database and using a language model to generate an accurate answer.

**Demonstrate:**  
A consultant could use this workflow to create a customer support system that answers user queries with information from company documents, improving response times and accuracy.

**Imitate:**  
1. Import the workflow into your n8n setup.  
2. Connect your Telegram, OpenAI, and Pinecone accounts.  
3. Set up the Telegram bot to trigger the workflow.  
4. Customize the workflow to match your document and query needs.  
5. Test by sending a PDF and a query through Telegram.

**Practice:**  
Create a test Telegram bot and send a sample PDF to it. Ask questions related to the document to see how the workflow retrieves and answers based on the document's content.

**WIIFM:**  
Mastering this workflow enables you to offer advanced document-based query systems to clients, enhancing their customer service capabilities. This can be a lucrative service, allowing you to provide customized solutions and possibly increase your income through automation consulting.

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
