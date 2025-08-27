# Car Insurance Quote Generator
  ## 🚀 What It Does
  Moves data between apps and a **database/spreadsheet**, with logic and optional AI steps.
  
  ## 💼 Business Use Case
  Ideal for **lead intake**, **enrichment**, and **CRM updates** with alerts to the right channel.
  
  ## ⚙️ How It Works
  1. **Trigger:** This workflow starts with **Sticky**.
  2. **Sticky** `stickyNote` — content: "## Car Insurance Quote Generator", height: "520", width: "1100"
3. **Webhook** `webhook` — method: **POST**, path: `/car_insurance_quote_generator`
4. **Insert** `vectorStorePinecone` — mode: "insert", indexName: "car_insurance_quote_generator"
5. **Query** `vectorStorePinecone` — indexName: "car_insurance_quote_generator"
6. **Tool** `toolVectorStore` — name: "Pinecone"
7. **Chat** `lmChatAnthropic` — configured for its default action.
8. **Agent** `agent` — promptType: "define", text: "={{ $json }}"
9. **Splitter** `textSplitterCharacterTextSplitter` — chunkSize: "400", chunkOverlap: "40"
10. **Memory** `memoryBufferWindow` — configured for its default action.
11. **Sheet** `googleSheets` — operation: **append**
12. **Embeddings** `embeddingsHuggingFace` — model: `default`
  
  ## 💡 AI-Powered Ideas for Improvement
  ### Explain
This n8n workflow automates the process of generating car insurance quotes. It receives requests via a webhook, processes the data through a series of nodes that split, embed, and store information in a Pinecone vector database, and uses AI to assist in generating the quote. The final output is logged in a Google Sheet.

### Demonstrate
A car insurance company could use this workflow to automate their quote generation process, reducing manual data entry and accelerating response times to potential customers. This enhances customer satisfaction and streamlines operations.

### Imitate
1. Import the workflow into n8n.
2. Set up a POST webhook to receive quote requests.
3. Configure Pinecone and HuggingFace API credentials.
4. Customize the Google Sheet ID for logging.
5. Test the workflow with sample data to ensure correct operation.

### Practice
Create a test webhook request with sample car data and observe how the workflow processes this information and outputs a quote into the Google Sheet. Adjust the workflow to handle additional data points as needed.

### WIIFM
Mastering this workflow enables you to automate complex data processing tasks, improving efficiency and response times for clients. This skill can be marketed to insurance companies looking to modernize their operations, potentially leading to lucrative service contracts.
  
  ## 🔧 Setup Instructions
  1. **Connect Credentials:** huggingFaceApi, pineconeApi, anthropicApi, googleSheetsOAuth2Api.
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
  