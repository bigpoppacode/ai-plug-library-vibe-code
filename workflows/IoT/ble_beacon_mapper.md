# Ble Beacon Mapper
  ## 🚀 What It Does
  Moves data between apps and a **database/spreadsheet**, with logic and optional AI steps.
  
  ## 💼 Business Use Case
  Ideal for **lead intake**, **enrichment**, and **CRM updates** with alerts to the right channel.
  
  ## ⚙️ How It Works
  1. **Trigger:** This workflow starts with **Sticky**.
  2. **Sticky** `stickyNote` — content: "## BLE Beacon Mapper", height: "520", width: "1100"
3. **Webhook** `webhook` — method: **POST**, path: `/ble_beacon_mapper`
4. **Insert** `vectorStorePinecone` — mode: "insert", indexName: "ble_beacon_mapper"
5. **Query** `vectorStorePinecone` — indexName: "ble_beacon_mapper"
6. **Tool** `toolVectorStore` — name: "Pinecone"
7. **Chat** `lmChatOpenAi` — configured for its default action.
8. **Agent** `agent` — promptType: "define", text: "={{ $json }}"
9. **Splitter** `textSplitterCharacterTextSplitter` — chunkSize: "400", chunkOverlap: "40"
10. **Memory** `memoryBufferWindow` — configured for its default action.
11. **Sheet** `googleSheets` — operation: **append**
12. **Embeddings** `embeddingsHuggingFace` — model: `default`
  
  ## 💡 AI-Powered Ideas for Improvement
  ### Explain
This workflow is designed to process data from BLE beacons. It starts with a webhook receiving incoming data, which is then split into chunks and processed for embedding using a language model. These embeddings are inserted into a vector database (Pinecone) for storage and querying. The workflow uses AI to analyze the data, and results are logged into a Google Sheet for record-keeping.

### Demonstrate
A retail business could use this workflow to track customer movement through BLE beacons. By analyzing this data, they can optimize store layouts, improve customer experience, and increase sales.

### Imitate
1. Set up a webhook in n8n to receive BLE data.
2. Split the incoming data using the Text Splitter.
3. Embed the data with a language model.
4. Insert embeddings into Pinecone.
5. Use AI to analyze and log results in Google Sheets.

### Practice
Create a simple dataset simulating BLE beacon data. Run the workflow to observe the embedding process and how the data is stored and queried in Pinecone. Check the Google Sheet to verify the logged results.

### WIIFM
Mastering this workflow allows you to offer advanced data processing and analytics services. You can help businesses optimize operations and customer interactions, leading to potential income through consulting or service packages in AI-powered automation.
  
  ## 🔧 Setup Instructions
  1. **Connect Credentials:** huggingFaceApi, pineconeApi, openAiApi, googleSheetsOAuth2Api.
2. **Data Mapping:** Verify base/sheet IDs and column names match exactly to prevent silent failures.
  
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
  