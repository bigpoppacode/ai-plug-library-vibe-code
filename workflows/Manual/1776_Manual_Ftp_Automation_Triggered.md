# Manual FTP Automation Triggered
  ## 🚀 What It Does
  Automates a flow using stickyNote×5, ftp×2, vectorStoreQdrant.
  
  ## 💼 Business Use Case
  Great for **content, summarization, triage, or decisioning** where AI adds speed and consistency.
  
  ## ⚙️ How It Works
  1. **Trigger:** This workflow starts with **When clicking ‘Test workflow’**.
  2. **When clicking ‘Test workflow’** `manualTrigger` — configured for its default action.
3. **Embeddings OpenAI** `embeddingsOpenAi` — options: "[object Object]"
4. **Default Data Loader** `documentDefaultDataLoader` — options: "[object Object]", dataType: "binary"
5. **Character Text Splitter** `textSplitterCharacterTextSplitter` — separator: ""chunk_id""
6. **Sticky Note** `stickyNote` — color: "4", width: "260", height: "200"
7. **Sticky Note1** `stickyNote` — color: "5", height: "180", content: "### Iterate Over Files
**Node:** Loop Over Items

Batches each file path individually for processing."
8. **Sticky Note2** `stickyNote` — color: "4", width: "420", height: "220"
9. **Sticky Note3** `stickyNote` — color: "3", width: "320", height: "400"
10. **Sticky Note4** `stickyNote` — width: "480", height: "460", content: "### Store in Vector DB
**Node:** Qdrant Vector Store
**Batch Size:** 100

**Collection:** <collection_name>
Sends cleaned text chunks to OpenAI to get embeddings (1536 dim for text…[truncated]"
  
  ## 💡 AI-Powered Ideas for Improvement
  - **Explain:** This n8n workflow automates the process of embedding text data into a Qdrant vector database. It lists JSON files, downloads them, splits their content into chunks, and uses OpenAI to generate embeddings. These embeddings are then stored in the Qdrant database, allowing for efficient semantic retrieval.

- **Demonstrate:** A developer could use this workflow to prepare a large set of documents for semantic search in a customer support database, enhancing the speed and accuracy of information retrieval in response to user queries.

- **Imitate:** Import the workflow into n8n. Connect your FTP, OpenAI, and Qdrant accounts. Customize the file paths and database settings to match your data sources and storage requirements. Test the workflow with sample data to ensure it processes and stores embeddings correctly.

- **Practice:** Create a small JSON file dataset and run the workflow. Verify that the files are listed, downloaded, and processed into embeddings stored in Qdrant. Experiment by modifying the text splitter logic to see how it affects the chunking of data.

- **WIIFM:** Mastering this workflow enables you to offer advanced semantic search capabilities to clients, improving data accessibility and user experience. It positions you to provide high-value AI-driven solutions, attracting new customers and increasing revenue in your automation business.
  
  ## 🔧 Setup Instructions
  1. **Connect Credentials:** qdrantApi, openAiApi, ftp.
  
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
  