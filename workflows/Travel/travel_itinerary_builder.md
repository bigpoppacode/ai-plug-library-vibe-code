# Travel Itinerary Builder
  ## 🚀 What It Does
  Moves data between apps and a **database/spreadsheet**, with logic and optional AI steps.
  
  ## 💼 Business Use Case
  Ideal for **lead intake**, **enrichment**, and **CRM updates** with alerts to the right channel.
  
  ## ⚙️ How It Works
  1. **Trigger:** This workflow starts with **Sticky**.
  2. **Sticky** `stickyNote` — content: "## Travel Itinerary Builder", height: "520", width: "1100"
3. **Webhook** `webhook` — method: **POST**, path: `/travel_itinerary_builder`
4. **Insert** `vectorStoreSupabase` — mode: "insert", indexName: "travel_itinerary_builder"
5. **Query** `vectorStoreSupabase` — indexName: "travel_itinerary_builder"
6. **Tool** `toolVectorStore` — name: "Supabase"
7. **Chat** `lmChatOpenAi` — configured for its default action.
8. **Agent** `agent` — promptType: "define", text: "={{ $json }}"
9. **Splitter** `textSplitterCharacterTextSplitter` — chunkSize: "400", chunkOverlap: "40"
10. **Memory** `memoryBufferWindow` — configured for its default action.
11. **Sheet** `googleSheets` — operation: **append**
12. **Embeddings** `embeddingsCohere` — model: `default`
  
  ## 💡 AI-Powered Ideas for Improvement
  ### Explain
This n8n workflow is designed to build a travel itinerary. It starts by receiving data through a webhook, processes the information using text splitting and embeddings, and stores it in a Supabase vector store. The workflow then queries the data and uses a language model to generate a detailed itinerary. Finally, the itinerary is logged in a Google Sheet.

### Demonstrate
A travel agency could use this workflow to automate itinerary creation for clients. By inputting client preferences, the agency can quickly generate a personalized travel plan, saving time and ensuring consistency across all customer interactions.

### Imitate
1. Set up a webhook in n8n to receive travel-related data.
2. Connect and configure Supabase for storing and querying data.
3. Use Cohere for generating embeddings and OpenAI for language processing.
4. Append the generated itinerary details to a Google Sheet for record-keeping.
5. Test the workflow with sample data to ensure it outputs a coherent itinerary.

### Practice
Create a test scenario where you input a simple travel request via the webhook. Observe how the workflow processes this input and generates an itinerary logged in a Google Sheet. Adjust parameters to see different outcomes.

### WIIFM
Mastering this workflow enables you to offer automated travel itinerary services, enhancing client satisfaction and expanding your business offerings. This skill can attract travel agencies looking to streamline operations, providing you with a competitive edge and potential revenue growth in the automation market.
  
  ## 🔧 Setup Instructions
  1. **Connect Credentials:** cohereApi, supabaseApi, openAiApi, googleSheetsOAuth2Api.
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
  