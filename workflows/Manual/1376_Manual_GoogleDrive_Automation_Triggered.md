# Manual GoogleDrive Automation Triggered
  ## 🚀 What It Does
  Automates a flow using stickyNote×4, set×4, embeddingsOpenAi×2.
  
  ## 💼 Business Use Case
  Great for **content, summarization, triage, or decisioning** where AI adds speed and consistency.
  
  ## ⚙️ How It Works
  1. **Trigger:** This workflow starts with **When clicking "Execute Workflow"**.
  2. **When clicking "Execute Workflow"** `manualTrigger` — configured for its default action.
3. **Embeddings OpenAI** `embeddingsOpenAi` — options: "[object Object]"
4. **Sticky Note** `stickyNote` — color: "7", width: "1086.039382705461", height: "728.4168721167887"
5. **Default Data Loader** `documentDefaultDataLoader` — options: "[object Object]", dataType: "binary"
6. **Sticky Note2** `stickyNote` — height: "350.7942096493649", content: "# Try me out
1. In Pinecone, create an index with 1536 dimensions and select it in the two vector store nodes
2. Populate Pinecone by clicking the 'test workflow' button below
3. C…[truncated]"
7. **Chat Trigger** `chatTrigger` — configured for its default action.
8. **Embeddings OpenAI2** `embeddingsOpenAi` — options: "[object Object]"
9. **OpenAI Chat Model** `lmChatOpenAi` — options: "[object Object]"
10. **Structured Output Parser** `outputParserStructured` — jsonSchema: "{
 "type": "object",
 "properties": {
 "answer": {
 "type": "string"
 },
 "citations": {
 "type": "array",
 "items": {
 "type": "number"
 }
 }
 }
}"
11. **Sticky Note1** `stickyNote` — color: "7", width: "1693.989843925635", height: "548.5086735412393"
12. **Sticky Note4** `stickyNote` — color: "7", width: "179.58883583572606", height: "257.75985739596473"
13. **Recursive Character Text Splitter** `textSplitterRecursiveCharacterTextSplitter` — chunkSize: "3000", chunkOverlap: "200"
14. **Set file URL in Google Drive** `set` — options: "[object Object]", assignments: "[object Object]"
15. **Set max chunks to send to model** `set` — options: "[object Object]", assignments: "[object Object]", includeOtherFields: "true"
16. **Download file** `googleDrive` — operation: **download**
17. **Get top chunks matching query** `vectorStorePinecone` — prompt: "={{ $json.chatInput }}"
18. **Add in metadata** `code` — mode: "runOnceForEachItem", jsCode: "// Add a new field called 'myNewField' to the JSON of the item
$input.item.json.file_name = $input.item.binary.data.fileName;
$input.item.json.file_ext = $input.item.binary.data.fi…[truncated]"
19. **Prepare chunks** `code` — jsCode: "let out = ""
for (const i in $input.all()) {
 let itemText = "--- CHUNK " + i + " ---\n"
 itemText += $input.all()[i].json.document.pageContent + "\n"
 itemText += "\n"
 out += ite…[truncated]"
20. **Add to Pinecone vector store** `vectorStorePinecone` — mode: "insert", options: "[object Object]", pineconeIndex: "[object Object]"
21. **Answer the query based on chunks** `chainLlm` — text: "=Use the following pieces of context to answer the question at the end. If you don't know the answer, just say that you don't know, don't try to make up an answer. Important: In yo…[truncated]", promptType: "define", hasOutputParser: "true"
22. **Compose citations** `set` — options: "[object Object]", assignments: "[object Object]", includeOtherFields: "true"
23. **Generate response** `set` — options: "[object Object]", assignments: "[object Object]"
  
  ## 💡 AI-Powered Ideas for Improvement
  - **Explain:** This n8n workflow processes a text file from Google Drive, splits it into manageable parts, and stores these in a Pinecone vector database. It then allows users to query the stored data via chat, returning relevant information along with citations. This setup is useful for retrieving specific information from large documents without manually searching through them.

- **Demonstrate:** A business consultant could use this workflow to efficiently search through extensive company reports or legal documents, quickly finding and citing relevant sections to inform decision-making or client consultations.

- **Imitate:** Import the workflow into n8n, set up your Google Drive and Pinecone accounts, and adjust the nodes to point to your specific files and indexes. Test by uploading a sample document and querying it through the chat trigger to see the responses and citations.

- **Practice:** Create a test document with different sections in Google Drive. Run the workflow to index it in Pinecone, then use the chat feature to query specific topics or phrases. Observe how the workflow retrieves and cites the relevant sections.

- **WIIFM:** Mastering this workflow can enhance your service offerings by enabling you to provide fast, reliable document search capabilities to clients. This can lead to increased efficiency, client satisfaction, and potential new revenue streams in automation and AI services.
  
  ## 🔧 Setup Instructions
  1. **Connect Credentials:** openAiApi, googleDriveOAuth2Api, pineconeApi.
  
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
  