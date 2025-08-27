# Limit Schedule Automation Scheduled
  ## 🚀 What It Does
  Moves data between apps and a **database/spreadsheet**, with logic and optional AI steps.
  
  ## 💼 Business Use Case
  Great for **content, summarization, triage, or decisioning** where AI adds speed and consistency.
  
  ## ⚙️ How It Works
  1. **Trigger:** This workflow starts with **When chat message received**.
  2. **Embeddings OpenAI** `embeddingsOpenAi` — options: "[object Object]"
3. **Token Splitter** `textSplitterTokenSplitter` — chunkSize: "500"
4. **Vector Store Retriever** `retrieverVectorStore` — configured for its default action.
5. **OpenAI Chat Model** `lmChatOpenAi` — model: `gpt-4o`
6. **When chat message received** `chatTrigger` — public: "true", options: "[object Object]"
7. **Schedule Trigger** `scheduleTrigger` — rule: "[object Object]"
8. **Sticky Note** `stickyNote` — width: "329.16412916774584", height: "312.52803480051045", content: "## Switch trigger (optional)
If you are on the cloud plan, consider switching to the Notion Trigger Node instead, to save on executions."
9. **Default Data Loader** `documentDefaultDataLoader` — options: "[object Object]"
10. **Sticky Note1** `stickyNote` — width: "376.2098538932132", height: "264.37628764336097", content: "## Adjust chunk size and overlap
For more accurate search results, increase the overlap. For the *text-embedding-ada-002* model the chunk size plus overlap must not exceed 8191"
11. **Notion Trigger** `notionTrigger` — event: "pagedUpdatedInDatabase", pollTimes: "[object Object]", databaseId: "[object Object]"
12. **Sticky Note23** `stickyNote` — color: "7", width: "216.47293010628914", height: "275.841854198618"
13. **Sticky Note24** `stickyNote` — color: "7", width: "216.47293010628914", height: "275.841854198618"
14. **Sticky Note25** `stickyNote` — color: "7", width: "216.47293010628914", height: "275.841854198618"
15. **Sticky Note26** `stickyNote` — color: "7", width: "216.47293010628914", height: "275.841854198618"
16. **Sticky Note27** `stickyNote` — color: "7", width: "216.47293010628914", height: "275.841854198618"
17. **Sticky Note28** `stickyNote` — color: "7", width: "375.9283286479995", height: "275.841854198618"
18. **Supabase Vector Store1** `vectorStoreSupabase` — options: "[object Object]", tableName: "[object Object]"
19. **Sticky Note30** `stickyNote` — color: "7", width: "730.7522093855692", height: "668.724737081502"
20. **Sticky Note31** `stickyNote` — color: "7", width: "219.31927574471658", height: "275.841854198618"
21. **Sticky Note32** `stickyNote` — color: "7", width: "216.47293010628914", height: "275.841854198618"
22. **Sticky Note29** `stickyNote` — color: "7", width: "376.0759088111347", height: "275.841854198618"
23. **Sticky Note33** `stickyNote` — color: "7", width: "216.47293010628914", height: "275.841854198618"
24. **Sticky Note34** `stickyNote` — width: "216.47293010628914", height: "275.841854198618", content: "## Select Database
Choose the database which represents your Knowledge Base"
25. **Sticky Note35** `stickyNote` — color: "7", width: "216.47293010628914", height: "275.841854198618"
26. **Question and Answer Chain** `chainRetrievalQa` — options: "[object Object]"
27. **Get updated pages** `notion` — resource: **databasePage**, operation: **getAll**
28. **Input Reference** `noOp` — configured for its default action.
  
  ## 💡 AI-Powered Ideas for Improvement
  ### Explain
This workflow integrates Notion, OpenAI, and Supabase to create a context-aware chatbot. It updates a knowledge base in Supabase whenever a Notion page is modified. The chatbot can then retrieve relevant information from this database to answer questions. The workflow splits text into manageable chunks, creates embeddings using OpenAI, and stores these in Supabase. It processes updates from Notion, deletes old embeddings, and inserts new ones, ensuring the chatbot always has the latest information.

### Demonstrate
A business owner might use this workflow to power a customer support chatbot that answers FAQs based on the latest company policies stored in Notion, ensuring accurate and up-to-date information is provided to users.

### Imitate
1. Set up Notion and Supabase accounts.
2. Import the workflow into n8n.
3. Connect your Notion, OpenAI, and Supabase credentials.
4. Modify the Notion database ID and Supabase table settings.
5. Test the chatbot by triggering a Notion page update and querying the chatbot.

### Practice
Create a new Notion page with sample FAQs, update it, and run the workflow. Ask the chatbot questions related to the FAQs to see how it retrieves and uses the updated data. Experiment with different Notion page structures and observe the chatbot's responses.

### WIIFM
Mastering this workflow enables you to offer advanced AI-driven customer support solutions. It can enhance client engagement and streamline operations by providing accurate, instant responses, thereby increasing customer satisfaction and retention.
  
  ## 🔧 Setup Instructions
  1. **Connect Credentials:** openAiApi, supabaseApi, notionApi.
  
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
  