# Supabase Stickynote Create Triggered
## 🚀 What It Does
Automates a flow using stickyNote×5, vectorStoreSupabase×3, embeddingsOpenAi×3.

## 💼 Business Use Case
Great for **content, summarization, triage, or decisioning** where AI adds speed and consistency.

## ⚙️ How It Works
1. **Trigger:** This workflow starts with **When chat message received**.
2. **Google Drive** `googleDrive` — operation: **download**
3. **Default Data Loader** `documentDefaultDataLoader` — loader: "epubLoader", options: "[object Object]", dataType: "binary"
4. **Sticky Note** `stickyNote` — width: "749.1276349295781", height: "820.5109034066329", content: "# INSERTING

- it's important to use the same embedding model when for any interaction with your vector database (inserting, upserting and retrieval)"
5. **Sticky Note1** `stickyNote` — color: "3", width: "873.9739981925188", height: "534.0012007720542"
6. **Sticky Note2** `stickyNote` — color: "4", width: "876.5116990000852", height: "821.787041589866"
7. **Sticky Note3** `stickyNote` — color: "5", width: "810.9488123113013", height: "821.9537074055816"
8. **OpenAI Chat Model** `lmChatOpenAi` — options: "[object Object]"
9. **Vector Store Retriever** `retrieverVectorStore` — topK: "10"
10. **Recursive Character Text Splitter1** `textSplitterRecursiveCharacterTextSplitter` — options: "[object Object]"
11. **When chat message received** `chatTrigger` — public: "true", options: "[object Object]", initialMessages: "=Hi there! 🙏

You can ask me anything about Venerable Geshe Kelsang Gyatso's Book - 'How To Transform Your Life'

What would you like to know? "
12. **Retrieve by Query** `vectorStoreSupabase` — options: "[object Object]", tableName: "[object Object]"
13. **Embeddings OpenAI Retrieval** `embeddingsOpenAi` — options: "[object Object]"
14. **Embeddings OpenAI Insertion** `embeddingsOpenAi` — model: `text-embedding-3-small`
15. **Placeholder (File/Content to Upsert)** `set` — mode: "raw", options: "[object Object]", jsonOutput: "={
  "Date": "{{ $now.format('dd MMM yyyy') }}",
  "Time": "{{ $now.format('HH:mm ZZZZ z') }}"
}
"
16. **Embeddings OpenAI Upserting** `embeddingsOpenAi` — model: `text-embedding-3-small`
17. **Retrieve Rows from Table** `supabase` — operation: **getAll**, table: `n8n`
18. **Sticky Note4** `stickyNote` — color: "6", width: "1587.0771183771394", height: "537.3056597675153"
19. **Insert Documents** `vectorStoreSupabase` — mode: "insert", options: "[object Object]", tableName: "[object Object]"
20. **Question and Answer Chain** `chainRetrievalQa` — configured for its default action.
21. **Update Documents** `vectorStoreSupabase` — id: "1", mode: "update", options: "[object Object]"
22. **Customize Response** `set` — options: "[object Object]", assignments: "[object Object]"

## 💡 AI-Powered Ideas for Improvement
### Explain
This n8n workflow is designed to facilitate an interactive chat system about Venerable Geshe Kelsang Gyatso's book, "How To Transform Your Life." It begins by downloading the book from Google Drive and processing it into a format suitable for AI analysis. The text is split into manageable chunks, embedded using OpenAI's model, and stored in a vector database. When a chat message is received, the workflow retrieves relevant sections from the database, and an AI model generates a response based on these sections. The final answer is then customized and sent back to the user.

### Demonstrate
A business owner could use this workflow to create an automated customer support system that provides instant responses to inquiries by leveraging company knowledge stored in documents.

### Imitate
1. Import the workflow into n8n.
2. Connect your Google Drive and OpenAI accounts.
3. Upload the desired document to Google Drive.
4. Customize the initial chat message and embedding settings.
5. Test the chat system to ensure it retrieves and responds correctly.

### Practice
Set up a test with a document of your choice in Google Drive. Run the workflow and ask questions related to the document's content, observing how the AI retrieves and responds with relevant information.

### WIIFM
By mastering this workflow, you can offer AI-powered customer support systems to clients, enhancing their customer service capabilities. This can lead to increased customer satisfaction, reduced support costs, and the potential to scale your AI automation business.

## 🔧 Setup Instructions
1. **Test & Activate:** Run a manual execution with sample data, then set the workflow Active.

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
