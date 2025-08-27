# Drone Image Crop Health
  ## 🚀 What It Does
  Moves data between apps and a **database/spreadsheet**, with logic and optional AI steps.
  
  ## 💼 Business Use Case
  Ideal for **lead intake**, **enrichment**, and **CRM updates** with alerts to the right channel.
  
  ## ⚙️ How It Works
  1. **Trigger:** This workflow starts with **Sticky**.
  2. **Sticky** `stickyNote` — content: "## Drone Image Crop Health", height: "520", width: "1100"
3. **Webhook** `webhook` — method: **POST**, path: `/drone_image_crop_health`
4. **Insert** `vectorStoreSupabase` — mode: "insert", indexName: "drone_image_crop_health"
5. **Query** `vectorStoreSupabase` — indexName: "drone_image_crop_health"
6. **Tool** `toolVectorStore` — name: "Supabase"
7. **Chat** `lmChatAnthropic` — configured for its default action.
8. **Agent** `agent` — promptType: "define", text: "={{ $json }}"
9. **Splitter** `textSplitterCharacterTextSplitter` — chunkSize: "400", chunkOverlap: "40"
10. **Memory** `memoryBufferWindow` — configured for its default action.
11. **Sheet** `googleSheets` — operation: **append**
12. **Embeddings** `embeddingsOpenAi` — model: `default`
  
  ## 💡 AI-Powered Ideas for Improvement
  **Explain**  
This n8n workflow processes drone images to assess crop health. It starts with a Webhook receiving data, which is then split into smaller chunks. These chunks are converted into embeddings using OpenAI, stored in a Supabase vector database, and queried for insights. The results are processed by an AI agent, and the final output is logged into a Google Sheet for record-keeping.

**Demonstrate**  
A farmer could use this workflow to analyze drone images of their fields, identifying areas needing attention. This helps in optimizing resource use, improving yield, and reducing costs associated with crop management.

**Imitate**  
1. Import the workflow in n8n.  
2. Connect Supabase, OpenAI, and Google Sheets accounts.  
3. Set up a webhook to receive drone image data.  
4. Customize the Google Sheet to match your logging needs.  
5. Run tests to ensure the workflow processes images correctly.

**Practice**  
Create a test dataset of drone images with known crop health issues. Use the workflow to analyze these images and validate if the results match the expected outcomes. Adjust parameters and logic to improve accuracy.

**WIIFM**  
Mastering this workflow allows you to offer precision agriculture services, helping farmers optimize crop health and productivity. This can enhance your service portfolio, attract new clients, and increase your revenue in the AI automation business.
  
  ## 🔧 Setup Instructions
  1. **Connect Credentials:** openAiApi, supabaseApi, anthropicApi, googleSheetsOAuth2Api.
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
  