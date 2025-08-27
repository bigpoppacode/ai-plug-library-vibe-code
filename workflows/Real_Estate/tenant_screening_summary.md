# Tenant Screening Summary
  ## 🚀 What It Does
  Moves data between apps and a **database/spreadsheet**, with logic and optional AI steps.
  
  ## 💼 Business Use Case
  Ideal for **lead intake**, **enrichment**, and **CRM updates** with alerts to the right channel.
  
  ## ⚙️ How It Works
  1. **Trigger:** This workflow starts with **Sticky**.
  2. **Sticky** `stickyNote` — content: "## Tenant Screening Summary", height: "520", width: "1100"
3. **Webhook** `webhook` — method: **POST**, path: `/tenant_screening_summary`
4. **Insert** `vectorStorePinecone` — mode: "insert", indexName: "tenant_screening_summary"
5. **Query** `vectorStorePinecone` — indexName: "tenant_screening_summary"
6. **Tool** `toolVectorStore` — name: "Pinecone"
7. **Chat** `lmChatHf` — configured for its default action.
8. **Agent** `agent` — promptType: "define", text: "={{ $json }}"
9. **Splitter** `textSplitterCharacterTextSplitter` — chunkSize: "400", chunkOverlap: "40"
10. **Memory** `memoryBufferWindow` — configured for its default action.
11. **Sheet** `googleSheets` — operation: **append**
12. **Embeddings** `embeddingsCohere` — model: `default`
  
  ## 💡 AI-Powered Ideas for Improvement
  - **Explain:** This n8n workflow automates tenant screening by collecting data through a webhook, processing it with a language model, and storing the results in a Google Sheet. It uses Pinecone for document storage and retrieval, ensuring efficient data handling and retrieval for further analysis or decision-making.

- **Demonstrate:** A property manager could use this workflow to streamline tenant applications, reducing manual data entry and ensuring quick access to applicant summaries for faster decision-making.

- **Imitate:** 
  1. Import the workflow to n8n.
  2. Set up a POST webhook to receive tenant data.
  3. Connect Pinecone for data storage and retrieval.
  4. Configure the Google Sheets node to log results.
  5. Test with sample tenant data to ensure proper execution.

- **Practice:** Create a test tenant application form and submit data to the webhook. Observe how the workflow processes and logs the information into Google Sheets. Modify some data points to see the workflow's adaptability.

- **WIIFM:** Mastering this workflow can help you offer automated tenant screening services to property managers, enhancing their efficiency and accuracy. This capability can attract clients and generate income through streamlined property management solutions.
  
  ## 🔧 Setup Instructions
  1. **Connect Credentials:** cohereApi, pineconeApi, huggingFaceApi, googleSheetsOAuth2Api.
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
  