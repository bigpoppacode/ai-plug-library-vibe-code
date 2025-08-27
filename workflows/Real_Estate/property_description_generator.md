# Property Description Generator
  ## 🚀 What It Does
  Moves data between apps and a **database/spreadsheet**, with logic and optional AI steps.
  
  ## 💼 Business Use Case
  Ideal for **lead intake**, **enrichment**, and **CRM updates** with alerts to the right channel.
  
  ## ⚙️ How It Works
  1. **Trigger:** This workflow starts with **Sticky**.
  2. **Sticky** `stickyNote` — content: "## Property Description Generator", height: "520", width: "1100"
3. **Webhook** `webhook` — method: **POST**, path: `/property_description_generator`
4. **Insert** `vectorStoreSupabase` — mode: "insert", indexName: "property_description_generator"
5. **Query** `vectorStoreSupabase` — indexName: "property_description_generator"
6. **Tool** `toolVectorStore` — name: "Supabase"
7. **Chat** `lmChatHf` — configured for its default action.
8. **Agent** `agent` — promptType: "define", text: "={{ $json }}"
9. **Splitter** `textSplitterCharacterTextSplitter` — chunkSize: "400", chunkOverlap: "40"
10. **Memory** `memoryBufferWindow` — configured for its default action.
11. **Sheet** `googleSheets` — operation: **append**
12. **Embeddings** `embeddingsHuggingFace` — model: `default`
  
  ## 💡 AI-Powered Ideas for Improvement
  **Explain:**  
This workflow automates the generation of property descriptions using AI. It starts with a webhook that takes input data, splits it into manageable chunks, and uses AI to create embeddings. These embeddings are stored in a vector database (Supabase) and queried to generate a property description. The AI-generated description is then logged into a Google Sheet for record-keeping.

**Demonstrate:**  
A real estate agency could use this workflow to automatically generate engaging property descriptions based on input attributes, saving time and ensuring consistent quality in their listings.

**Imitate:**  
1. Import the workflow to n8n.
2. Connect your Supabase and Google Sheets accounts.
3. Set up a POST webhook to receive property data.
4. Configure the AI and database nodes with your credentials.
5. Test with sample data to ensure descriptions are generated and logged correctly.

**Practice:**  
Create a sample property dataset. Use the workflow to generate descriptions and check the results in Google Sheets. Modify property attributes and observe changes in the output to understand how input affects the AI generation.

**WIIFM:**  
Mastering this workflow enables you to offer automated content creation services to real estate clients, enhancing their marketing efforts and potentially increasing your income by providing a unique, scalable solution.
  
  ## 🔧 Setup Instructions
  1. **Connect Credentials:** huggingFaceApi, supabaseApi, googleSheetsOAuth2Api.
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
  