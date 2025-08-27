# Filter Summarize Automation Triggered
  ## 🚀 What It Does
  Moves data between apps and a **database/spreadsheet**, with logic and optional AI steps.
  
  ## 💼 Business Use Case
  Use to eliminate manual copy-paste and standardize a recurring business process.
  
  ## ⚙️ How It Works
  1. **Trigger:** This workflow starts with **Notion - Page Added Trigger**.
  2. **Token Splitter** `textSplitterTokenSplitter` — chunkSize: "256", chunkOverlap: "30"
3. **Notion - Page Added Trigger** `notionTrigger` — simple: "false", pollTimes: "[object Object]", databaseId: "[object Object]"
4. **Create metadata and load content** `documentDefaultDataLoader` — options: "[object Object]", jsonData: "={{ $json.concatenated_content }}", jsonMode: "expressionData"
5. **Embeddings Google Gemini** `embeddingsGoogleGemini` — modelName: "models/text-embedding-004"
6. **Notion - Retrieve Page Content** `notion` — resource: **block**, operation: **getAll**
7. **Filter Non-Text Content** `filter` — options: "[object Object]", conditions: "[object Object]"
8. **Summarize - Concatenate Notion's blocks content** `summarize` — options: "[object Object]", fieldsToSummarize: "[object Object]"
9. **Pinecone Vector Store** `vectorStorePinecone` — mode: "insert", options: "[object Object]", pineconeIndex: "[object Object]"
  
  ## 💡 AI-Powered Ideas for Improvement
  ### Explain
This workflow automates the process of updating a vector store with content from Notion. It triggers when a new page is added in Notion, retrieves the page content, filters out non-text elements, and summarizes the text. The summarized content is then split into manageable chunks, converted into embeddings using Google Gemini, and stored in a Pinecone vector database. This helps in creating a searchable knowledge base that can be used for efficient information retrieval and AI applications.

### Demonstrate
A business owner might use this workflow to transform their Notion documentation into a searchable database, enabling quick access to company knowledge and facilitating AI-driven insights and decision-making.

### Imitate
1. Import the workflow to n8n.
2. Connect your Notion and Pinecone accounts.
3. Set up the Notion trigger for your desired database.
4. Customize the chunk size and overlap in the Token Splitter.
5. Test the workflow by adding a new page in Notion and verifying the data in Pinecone.

### Practice
Create a test Notion page with various content types. Run the workflow to observe how it processes text content, converts it to embeddings, and stores it in Pinecone. Modify the page content and rerun to see changes.

### WIIFM
Mastering this workflow equips you to offer services that transform client documentation into actionable data. This capability can enhance decision-making processes and provide a competitive edge, potentially increasing your service offerings and revenue streams.
  
  ## 🔧 Setup Instructions
  1. **Connect Credentials:** notionApi, googlePalmApi, pineconeApi.
  
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
  