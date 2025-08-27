# Postgres Wordpress Automation Webhook
  ## 🚀 What It Does
  Moves data between apps and a **database/spreadsheet**, with logic and optional AI steps.
  
  ## 💼 Business Use Case
  Use as a **glue/API broker**: receive data, enrich/validate via APIs, and pass to downstream systems.
  
  ## ⚙️ How It Works
  1. **Trigger:** This workflow starts with **When clicking ‘Test workflow’**.
  2. **When clicking ‘Test workflow’** `manualTrigger` — configured for its default action.
3. **Embeddings OpenAI** `embeddingsOpenAi` — model: `text-embedding-3-small`
4. **Default Data Loader** `documentDefaultDataLoader` — options: "[object Object]", jsonData: "={{ $json.data }}", jsonMode: "expressionData"
5. **Token Splitter** `textSplitterTokenSplitter` — chunkSize: "300", chunkOverlap: "30"
6. **Embeddings OpenAI1** `embeddingsOpenAi` — model: `text-embedding-3-small`
7. **OpenAI Chat Model** `lmChatOpenAi` — model: `gpt-4o-mini`
8. **Postgres Chat Memory** `memoryPostgresChat` — tableName: "website_chat_histories"
9. **Embeddings OpenAI2** `embeddingsOpenAi` — model: `text-embedding-3-small`
10. **Default Data Loader1** `documentDefaultDataLoader` — options: "[object Object]", jsonData: "={{ $json.data }}", jsonMode: "expressionData"
11. **Token Splitter1** `textSplitterTokenSplitter` — chunkSize: "300", chunkOverlap: "30"
12. **Sticky Note** `stickyNote` — color: "5", width: "3308.2687575224263", height: "1015.3571428571431"
13. **Sticky Note1** `stickyNote` — color: "5", width: "3785.6673412474183", height: "1020.4528919414245"
14. **Sticky Note2** `stickyNote` — color: "5", width: "3235.199999999999", height: "817.9199999999992"
15. **Sticky Note3** `stickyNote` — width: "1108.3519999999999", height: "561.4080000000004", content: "## Use filters to create embeddings only for content that you want to include in your GenAI application"
16. **Sticky Note4** `stickyNote` — width: "851.1898437499999", height: "275.2000000000001", content: "## Run these two nodes if the "documents" table on Supabase and the "n8n_website_embedding_histories" table do not exist"
17. **Every 30 seconds** `scheduleTrigger` — rule: "[object Object]"
18. **Sticky Note5** `stickyNote` — width: "336.25", height: "292.5", content: "## Set this node to match the frequency of publishing and updating on your website"
19. **Sticky Note6** `stickyNote` — width: "665.78125", height: "507.65625", content: "## Retrieve documents from Supabase immediately after chat input to send metadata to OpenAI"
20. **Sticky Note7** `stickyNote` — width: "1198.9843749999998", height: "515.4687499999998", content: "## Switch:
- **If the document exists and has been updated:** delete rows and insert new embedding
- **If it’s a new document:** insert embedding"
21. **Postgres - Create documents table** `postgres` — operation: **executeQuery**
22. **When chat message received** `chatTrigger` — mode: "webhook", public: "true", options: "[object Object]"
23. **Wordpress - Get all posts** `wordpress` — operation: **getAll**
24. **Wordpress - Get all pages** `wordpress` — resource: **page**, operation: **getAll**
25. **Postgres** `postgres` — operation: **executeQuery**
26. **Postgres - Create workflow execution history table** `postgres` — operation: **executeQuery**
27. **Supabase - Retrieve documents from chatinput** `vectorStoreSupabase` — prompt: "={{ $json.chatInput }}"
28. **Merge Wordpress Posts and Pages** `merge` — configured for its default action.
29. **Wordpress - Get posts modified after last workflow execution** `httpRequest` — url: `https://mydomain.com/wp-json/wp/v2/posts`
30. **Wordpress - Get posts modified after last workflow execution1** `httpRequest` — url: `https://mydomain.com/wp-json/wp/v2/pages`
31. **Aggregate documents** `aggregate` — options: "[object Object]", fieldsToAggregate: "[object Object]"
32. **Set fields1** `set` — options: "[object Object]", assignments: "[object Object]"
33. **Merge retrieved WordPress posts and pages** `merge` — configured for its default action.
34. **Set fields** `set` — options: "[object Object]", assignments: "[object Object]"
35. **Filter - Only published & unprotected content** `filter` — options: "[object Object]", conditions: "[object Object]"
36. **Set fields2** `set` — options: "[object Object]", assignments: "[object Object]"
37. **AI Agent** `agent` — text: "=Visitor's question : {{ $json.chatInput }}
Documents found: {{ $json.documents }}", agent: "conversationalAgent", options: "[object Object]"
38. **HTML To Markdown** `markdown` — html: "={{ $json.content}}", options: "[object Object]"
39. **Filter - Only published and unprotected content** `filter` — options: "[object Object]", conditions: "[object Object]"
40. **Respond to Webhook** `respondToWebhook` — options: "[object Object]"
41. **Supabase Vector Store** `vectorStoreSupabase` — mode: "insert", options: "[object Object]", tableName: "[object Object]"
42. **Aggregate** `aggregate` — options: "[object Object]", aggregate: "aggregateAllItemData"
43. **Supabase - Store workflow execution** `supabase` — table: `n8n_website_embedding_histories`
  
  ## 💡 AI-Powered Ideas for Improvement
  - **Explain:** This workflow automates the process of embedding WordPress content into a GenAI application. It retrieves, processes, and embeds WordPress posts and pages into a Supabase vector store using OpenAI embeddings. The workflow handles new and updated content, ensuring the GenAI application has access to the latest data.

- **Demonstrate:** A content creator can use this workflow to automatically embed their WordPress blog posts into a GenAI application. This ensures the AI model is always updated with the latest content, enhancing the application's responses with current and relevant information.

- **Imitate:** 
  1. Import the workflow into n8n.
  2. Connect your WordPress and Supabase accounts.
  3. Set up the schedule trigger for content updates.
  4. Customize the nodes to match your WordPress structure and Supabase schema.
  5. Test the workflow with sample data to ensure correct embedding.

- **Practice:** Create a test WordPress site and Supabase vector store. Run the workflow to see how it processes and embeds content. Experiment with different content types and observe how the workflow updates the embeddings.

- **WIIFM:** Mastering this workflow can help you offer AI content embedding services, providing clients with an automated way to keep their AI applications updated with fresh content. This can lead to new business opportunities and increased revenue in the AI automation space.
  
  ## 🔧 Setup Instructions
  1. **API Contracts:** Validate required headers and 2xx/4xx handling; add retries for 429/5xx.
  
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
  