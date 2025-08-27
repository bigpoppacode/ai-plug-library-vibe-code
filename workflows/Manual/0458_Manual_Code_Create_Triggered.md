# Manual Code Create Triggered
  ## 🚀 What It Does
  Automates a flow using stickyNote×4, set×4, vectorStorePinecone×2.
  
  ## 💼 Business Use Case
  Great for **content, summarization, triage, or decisioning** where AI adds speed and consistency.
  
  ## ⚙️ How It Works
  1. **Trigger:** This workflow starts with **When clicking "Execute Workflow"**.
  2. **When clicking "Execute Workflow"** `manualTrigger` — configured for its default action.
3. **Sticky Note** `stickyNote` — color: "7", width: "1086.039382705461", height: "728.4168721167887"
4. **Sticky Note2** `stickyNote` — height: "350.7942096493649", content: "# Try me out
1. In Pinecone, create an index with 1536 dimensions and select it in the two vector store nodes
2. Populate Pinecone by clicking the 'test workflow' button below
3. C…[truncated]"
5. **Sticky Note1** `stickyNote` — color: "7", width: "1594", height: "529"
6. **Sticky Note4** `stickyNote` — color: "7", width: "179.58883583572606", height: "257.75985739596473"
7. **When chat message received** `chatTrigger` — options: "[object Object]"
8. **OpenAI Chat Model1** `lmChatOpenAi` — model: `[object Object]`
9. **Default Data Loader** `documentDefaultDataLoader` — options: "[object Object]", dataType: "binary"
10. **Embeddings OpenAI2** `embeddingsOpenAi` — options: "[object Object]"
11. **Embeddings OpenAI** `embeddingsOpenAi` — options: "[object Object]"
12. **Recursive Character Text Splitter** `textSplitterRecursiveCharacterTextSplitter` — options: "[object Object]", chunkSize: "3000", chunkOverlap: "200"
13. **Set file URL in Google Drive** `set` — options: "[object Object]", assignments: "[object Object]"
14. **Set max chunks to send to model** `set` — options: "[object Object]", assignments: "[object Object]", includeOtherFields: "true"
15. **Download file** `googleDrive` — operation: **download**
16. **Get top chunks matching query** `vectorStorePinecone` — prompt: "={{ $json.chatInput }}"
17. **Pinecone Vector Store** `vectorStorePinecone` — mode: "insert", options: "[object Object]", pineconeIndex: "[object Object]"
18. **Prepare chunks** `code` — jsCode: "let out = ""
for (const i in $input.all()) {
  let itemText = "--- CHUNK " + i + " ---\n"
  itemText += $input.all()[i].json.document.pageContent + "\n"
  itemText += "\n"
  out +=…[truncated]"
19. **Answer the query based on chunks** `informationExtractor` — text: "={{ $json.context }}

Question: {{ $('When chat message received').first().json.chatInput }}
Helpful Answer:", options: "[object Object]", schemaType: "manual"
20. **Compose citations** `set` — options: "[object Object]", assignments: "[object Object]"
21. **Generate response** `set` — options: "[object Object]", assignments: "[object Object]"
  
  ## 💡 AI-Powered Ideas for Improvement
  ### Explain
This n8n workflow is designed to process a document stored in Google Drive, transform it into manageable chunks, and load these into a Pinecone vector database for semantic search and retrieval. It then allows users to query this data via a chat interface, using OpenAI to generate responses based on the retrieved document chunks, complete with citations.

### Demonstrate
A research firm could use this workflow to manage large volumes of documents, enabling team members to query and retrieve relevant information quickly. This ensures data-driven decisions are made efficiently, improving the firm's research output and client satisfaction.

### Imitate
1. Import the workflow into n8n.
2. Set up a Pinecone index with 1536 dimensions.
3. Connect Google Drive and OpenAI accounts.
4. Configure file URL and vector store nodes with your credentials.
5. Test the workflow by executing it and querying with chat inputs.

### Practice
Create a Google Drive document with a few pages of text. Run the workflow and try querying different sections of the text using the chat interface. Observe how the workflow processes and retrieves relevant information, then adjust chunk sizes or overlap settings to see different results.

### WIIFM
Mastering this workflow can position you as a valuable asset in data-driven industries, offering services that enhance information retrieval and knowledge management. This can lead to lucrative opportunities in sectors like research, legal, and consulting, where efficient data handling is critical.
  
  ## 🔧 Setup Instructions
  1. **Connect Credentials:** pineconeApi, openAiApi, googleDriveOAuth2Api.
  
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
  