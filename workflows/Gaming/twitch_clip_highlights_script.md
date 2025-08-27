# Twitch Clip Highlights Script
  ## 🚀 What It Does
  Moves data between apps and a **database/spreadsheet**, with logic and optional AI steps.
  
  ## 💼 Business Use Case
  Ideal for **lead intake**, **enrichment**, and **CRM updates** with alerts to the right channel.
  
  ## ⚙️ How It Works
  1. **Trigger:** This workflow starts with **Sticky**.
  2. **Sticky** `stickyNote` — content: "## Twitch Clip Highlights Script", height: "520", width: "1100"
3. **Webhook** `webhook` — method: **POST**, path: `/twitch_clip_highlights_script`
4. **Insert** `vectorStoreWeaviate` — mode: "insert", indexName: "twitch_clip_highlights_script"
5. **Query** `vectorStoreWeaviate` — indexName: "twitch_clip_highlights_script"
6. **Tool** `toolVectorStore` — name: "Weaviate"
7. **Chat** `lmChatHf` — configured for its default action.
8. **Agent** `agent` — promptType: "define", text: "={{ $json }}"
9. **Splitter** `textSplitterCharacterTextSplitter` — chunkSize: "400", chunkOverlap: "40"
10. **Memory** `memoryBufferWindow` — configured for its default action.
11. **Sheet** `googleSheets` — operation: **append**
12. **Embeddings** `embeddingsCohere` — model: `default`
  
  ## 💡 AI-Powered Ideas for Improvement
  **Explain**  
This n8n workflow automates the process of creating scripts for Twitch clip highlights. It starts by receiving data via a webhook, processes the text by splitting it into manageable chunks, generates embeddings, and stores them in a Weaviate vector store. The workflow then queries this store and uses an AI agent to define and format the script, which is finally logged into a Google Sheet for easy access and review.

**Demonstrate**  
A Twitch streamer could use this workflow to automatically generate highlight scripts from their streams, making it easier to create engaging content for social media or YouTube without manual editing or scripting.

**Imitate**  
1. Set up a webhook in n8n and connect it to your Twitch clips source.  
2. Configure the Splitter and Embeddings nodes to process the clip content.  
3. Ensure Weaviate is set up and connected for storing and querying data.  
4. Use an AI agent to generate scripts and log outputs to Google Sheets.  
5. Test with sample clips to ensure smooth functionality.

**Practice**  
Create a test Twitch account and record some clips. Use this workflow to generate scripts from these clips, then compare the results with manual scripting to understand the AI's effectiveness and areas for improvement.

**WIIFM (What's In It For Me)**  
Mastering this workflow enables you to offer automated content creation services to streamers, enhancing their social media presence. This can attract new clients, increase revenue, and differentiate your automation business by offering innovative, AI-driven solutions.
  
  ## 🔧 Setup Instructions
  1. **Connect Credentials:** cohereApi, weaviateApi, huggingFaceApi, googleSheetsOAuth2Api.
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
  