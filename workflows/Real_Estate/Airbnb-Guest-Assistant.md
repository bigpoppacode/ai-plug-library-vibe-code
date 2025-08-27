# Airbnb Guest Assistant
  ## 🚀 What It Does
  Moves data between apps and a **database/spreadsheet**, with logic and optional AI steps.
  
  ## 💼 Business Use Case
  Use as a **glue/API broker**: receive data, enrich/validate via APIs, and pass to downstream systems.
  
  ## ⚙️ How It Works
  1. **Trigger:** This workflow starts with **When chat message received**.
  2. **OpenAI Chat Model** `lmChatOpenAi` — options: "[object Object]"
3. **OpenAI Chat Model1** `lmChatOpenAi` — options: "[object Object]"
4. **Google Drive** `googleDrive` — resource: **folder**
5. **Get File Content** `googleDrive` — operation: **download**
6. **Default Data Loader** `documentDefaultDataLoader` — options: "[object Object]"
7. **Character Text Splitter** `textSplitterCharacterTextSplitter` — chunkSize: "500", chunkOverlap: "50"
8. **Embeddings OpenAI1** `embeddingsOpenAi` — model: `text-embedding-3-small`
9. **Sticky Note1** `stickyNote` — content: "## Tool to Add a Google Drive File to Vector DB", height: "661.3783861449286", width: "1290.2441524753906"
10. **Sticky Note2** `stickyNote` — content: "## RAG AI Agent with Chat Interface", height: "711.4232611135845", width: "1905.0323056629377"
11. **Embeddings OpenAI2** `embeddingsOpenAi` — model: `text-embedding-3-small`
12. **Vector Store Tool** `toolVectorStore` — name: "Pinecone", description: "this is the vector database that contains the property info faq and answers. use this first to look for answers."
13. **Pinecone Vector Store1** `vectorStorePinecone` — pineconeIndex: "[object Object]", options: "[object Object]"
14. **When chat message received** `chatTrigger` — public: "true", initialMessages: "Hi there! 👋
My name is FiFi. How can I assist you today?", options: "[object Object]"
15. **SerpAPI** `toolSerpApi` — options: "[object Object]"
16. **Zep** `memoryZep` — sessionIdType: "customKey", sessionKey: "{{ $json.session_id || Math.random().toString(36).substring(2, 10) }}"
17. **HTTP Request** `httpRequest` — url: `https://api.getzep.com/api/v2/sessions-ordered`
18. **Window Buffer Memory** `memoryBufferWindow` — configured for its default action.
19. **Extract from File** `extractFromFile` — operation: **text**
20. **Captures session id** `set` — assignments: "[object Object]", options: "[object Object]"
21. **Code** `code` — jsCode: "// Parse the input data
const data = JSON.parse($json.data);

// Extract the sessions array
const sessions = data.sessions || [];

// Map the sessions array to extract only session…[truncated]"
22. **Pinecone Vector Store** `vectorStorePinecone` — mode: "insert", pineconeIndex: "[object Object]", options: "[object Object]"
23. **RAG AI Agent** `agent` — promptType: "define", text: "={{ $('When chat message received').item.json.chatInput }}", options: "[object Object]"
24. **Code1** `code` — jsCode: "// Create dynamic URLs for each session ID
return items.map(item => {
  return {
    json: {
      session_id: item.json.session_id,
      url: `https://api.getzep.com/api/v2/sessi…[truncated]"
25. **HTTP Request1** `httpRequest` — url: `={{$json["url"]}}`
26. **Code2** `code` — jsCode: "[redacted]"
27. **Google Sheets** `googleSheets` — operation: **append**
  
  ## 💡 AI-Powered Ideas for Improvement
  **Explain**  
This n8n workflow acts as an intelligent assistant for Airbnb guests. It retrieves and processes property information from Google Drive, stores it in a vector database (Pinecone), and uses OpenAI to provide guests with accurate answers. When a guest sends a chat message, the workflow captures the session ID, queries the Pinecone database for relevant information, and uses a RAG AI Agent to respond with the most accurate details. The workflow also logs sessions and responses into Google Sheets, ensuring a record of interactions.

**Demonstrate**  
A property manager could use this workflow to automate guest inquiries, providing immediate, accurate responses regarding check-in details, amenities, and local attractions, enhancing guest satisfaction and reducing manual workload.

**Imitate**  
1. Import the workflow into n8n.  
2. Connect your Google Drive and Pinecone accounts.  
3. Customize the AI prompts for your property details.  
4. Set up a chat interface for guest interaction.  
5. Test the workflow to ensure correct information retrieval and response.

**Practice**  
Create a mock property database in Google Drive and test the workflow by sending common guest questions through the chat interface. Verify that the responses are accurate and reflect the information stored in the vector database.

**WIIFM**  
Mastering this workflow can enhance your service offerings by providing clients with automated, intelligent guest support systems. This can lead to increased client satisfaction, reduced operational costs, and potential income from offering advanced AI-driven solutions.
  
  ## 🔧 Setup Instructions
  1. **Connect Credentials:** openAiApi, googleDriveOAuth2Api, pineconeApi, serpApi, zepApi.
2. **Data Mapping:** Verify base/sheet IDs and column names match exactly to prevent silent failures.
3. **API Contracts:** Validate required headers and 2xx/4xx handling; add retries for 429/5xx.
  
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
  