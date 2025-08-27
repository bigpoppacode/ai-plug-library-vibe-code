# Hotel Review Sentiment
  ## 🚀 What It Does
  Moves data between apps and a **database/spreadsheet**, with logic and optional AI steps.
  
  ## 💼 Business Use Case
  Ideal for **lead intake**, **enrichment**, and **CRM updates** with alerts to the right channel.
  
  ## ⚙️ How It Works
  1. **Trigger:** This workflow starts with **Sticky**.
  2. **Sticky** `stickyNote` — content: "## Hotel Review Sentiment", height: "520", width: "1100"
3. **Webhook** `webhook` — method: **POST**, path: `/hotel_review_sentiment`
4. **Insert** `vectorStorePinecone` — mode: "insert", indexName: "hotel_review_sentiment"
5. **Query** `vectorStorePinecone` — indexName: "hotel_review_sentiment"
6. **Tool** `toolVectorStore` — name: "Pinecone"
7. **Chat** `lmChatHf` — configured for its default action.
8. **Agent** `agent` — promptType: "define", text: "={{ $json }}"
9. **Splitter** `textSplitterCharacterTextSplitter` — chunkSize: "400", chunkOverlap: "40"
10. **Memory** `memoryBufferWindow` — configured for its default action.
11. **Sheet** `googleSheets` — operation: **append**
12. **Embeddings** `embeddingsHuggingFace` — model: `default`
  
  ## 💡 AI-Powered Ideas for Improvement
  **Explain:**  
This n8n workflow processes hotel reviews to determine their sentiment. It starts by receiving reviews through a webhook, then splits and converts them into embeddings using Hugging Face. The embeddings are inserted into Pinecone for storage. The workflow queries Pinecone to retrieve relevant sentiment data, uses an AI chat model for sentiment analysis, and logs the results in a Google Sheet.

**Demonstrate:**  
A hotel manager could use this workflow to automatically analyze guest reviews, helping to quickly identify trends in customer satisfaction and address issues promptly, thereby improving service quality and guest experience.

**Imitate:**  
1. Import the workflow to n8n.
2. Set up a webhook to capture hotel reviews.
3. Connect your Pinecone and Hugging Face accounts.
4. Configure Google Sheets to log sentiment analysis results.
5. Test the workflow with sample reviews to ensure it functions correctly.

**Practice:**  
Create a sample Google Sheet and use the workflow to analyze a set of hotel reviews. Check if the workflow correctly logs the sentiment in the sheet. Modify some reviews' sentiments to see how the AI analysis adapts.

**WIIFM:**  
Mastering this workflow allows you to offer sentiment analysis services, enhancing business decision-making for clients. This can lead to increased customer satisfaction and open opportunities for offering additional AI-driven insights, boosting your automation business revenue.
  
  ## 🔧 Setup Instructions
  1. **Connect Credentials:** huggingFaceApi, pineconeApi, googleSheetsOAuth2Api.
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
  