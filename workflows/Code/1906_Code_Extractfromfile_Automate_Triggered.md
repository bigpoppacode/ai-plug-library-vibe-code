# Code Extractfromfile Automate Triggered
  ## 🚀 What It Does
  Automates a flow using vectorStorePinecone×2, embeddingsGoogleGemini×2, code×2.
  
  ## 💼 Business Use Case
  Use to eliminate manual copy-paste and standardize a recurring business process.
  
  ## ⚙️ How It Works
  1. **Trigger:** This workflow starts with **Monitor Google Drive for New Files**.
  2. **Monitor Google Drive for New Files** `googleDriveTrigger` — event: "fileCreated", options: "[object Object]", pollTimes: "[object Object]"
3. **Generate Document Embeddings (Google Gemini)** `embeddingsGoogleGemini` — modelName: "models/text-embedding-004"
4. **Load Document Data for Processing** `documentDefaultDataLoader` — options: "[object Object]"
5. **Split Document Text into Chunks** `textSplitterRecursiveCharacterTextSplitter` — options: "[object Object]", chunkSize: "3000", chunkOverlap: "300"
6. **Chat Message Trigger** `chatTrigger` — options: "[object Object]"
7. **Generate Query Embeddings (Google Gemini)** `embeddingsGoogleGemini` — modelName: "models/text-embedding-004"
8. **OpenRouter Chat Model Interface** `lmChatOpenRouter` — model: `google/gemini-2.0-flash-exp:free`
9. **Download File from Google Drive** `googleDrive` — operation: **download**
10. **Retrieve Relevant Documents from Pinecone** `vectorStorePinecone` — prompt: "={{ $json.chatInput }}"
11. **Extract PDF Content** `extractFromFile` — operation: **pdf**
12. **Generate Chat Prompt with Context** `code` — jsCode: "const userQuery =  $('Chat Message Trigger').first().json.chatInput
// Retrieve the user query from the previous node output.
// Assuming the Pinecone node has passed an array of i…[truncated]"
13. **Clean and Normalize PDF Text** `code` — jsCode: "const rawData = $json["text"];
const cleanedData = rawData
  .replace(/(\r\n|\n|\r)/gm, " ")   // remove line breaks
  .trim()                           // remove extra spaces
  .r…[truncated]"
14. **AI Agent** `agent` — text: "={{ $json.prompt }}", options: "[object Object]", promptType: "define"
15. **Insert Document into Pinecone Vector Store** `vectorStorePinecone` — mode: "insert", options: "[object Object]", pineconeIndex: "[object Object]"
  
  ## 💡 AI-Powered Ideas for Improvement
  ### Explain
This n8n workflow automates document processing by monitoring a Google Drive folder for new files. When a new file is added, it downloads and extracts text from PDFs, cleans and normalizes the text, and then splits it into chunks. The text is processed to generate embeddings using Google Gemini, which are then stored in a Pinecone vector database. This setup allows for efficient retrieval of relevant documents based on chat queries, enhancing AI-driven interactions.

### Demonstrate
A business owner could use this workflow to streamline document management, enabling fast access to relevant information for customer support or research purposes. It ensures that the latest documents are always indexed and searchable, improving efficiency.

### Imitate
1. Set up Google Drive and Pinecone accounts.
2. Import the workflow into n8n and connect the necessary credentials.
3. Configure the Google Drive trigger to monitor your folder.
4. Adjust the Pinecone vector store settings to match your database.
5. Test by adding a PDF to your Drive folder and observing the workflow's processing.

### Practice
Create a Google Drive folder and add sample PDFs. Run the workflow to see how it processes and indexes the documents. Try querying the system using various chat inputs to see how well it retrieves relevant information.

### WIIFM
Mastering this workflow can help you offer advanced document management solutions, increasing efficiency and accuracy for businesses. It can attract clients needing robust data processing and retrieval systems, adding value to your automation services and potentially boosting your income.
  
  ## 🔧 Setup Instructions
  1. **Connect Credentials:** googleDriveOAuth2Api, pineconeApi, googlePalmApi, openRouterApi.
  
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
  