# Wordpress   AI Chatbot To Enhance User Experience   With Supabase And Openai

## 🚀 What It Does
This workflow automates a process involving manualTrigger, embeddingsOpenAi, documentDefaultDataLoader.

## 💼 Business Use Case
Use it to automate research, content creation, or data analysis. It saves hours of manual work.

## ⚙️ How It Works
1.  **Trigger:** This workflow starts with a **When clicking ‘Test workflow’** node.
2. **Step 1: When clicking ‘Test workflow’ (manualTrigger)** - This step performs a key action in the workflow.
3. **Step 2: Embeddings OpenAI (embeddingsOpenAi)** - This step performs a key action in the workflow.
4. **Step 3: Default Data Loader (documentDefaultDataLoader)** - This step performs a key action in the workflow.
5. **Step 4: Token Splitter (textSplitterTokenSplitter)** - This step performs a key action in the workflow.
6. **Step 5: Embeddings OpenAI1 (embeddingsOpenAi)** - This step performs a key action in the workflow.
7. **Step 6: OpenAI Chat Model (lmChatOpenAi)** - This step performs a key action in the workflow.
8. **Step 7: Postgres Chat Memory (memoryPostgresChat)** - This step performs a key action in the workflow.
9. **Step 8: Respond to Webhook (respondToWebhook)** - This step performs a key action in the workflow.
10. **Step 9: Set fields (set)** - This step performs a key action in the workflow.
11. **Step 10: Embeddings OpenAI2 (embeddingsOpenAi)** - This step performs a key action in the workflow.
12. **Step 11: Default Data Loader1 (documentDefaultDataLoader)** - This step performs a key action in the workflow.
13. **Step 12: Token Splitter1 (textSplitterTokenSplitter)** - This step performs a key action in the workflow.
14. **Step 13: Markdown1 (markdown)** - This step performs a key action in the workflow.
15. **Step 14: Postgres (postgres)** - This step performs a key action in the workflow.
16. **Step 15: Aggregate (aggregate)** - This step performs a key action in the workflow.
17. **Step 16: Aggregate1 (aggregate)** - This step performs a key action in the workflow.
18. **Step 17: Aggregate2 (aggregate)** - This step performs a key action in the workflow.
19. **Step 18: Sticky Note (stickyNote)** - This step performs a key action in the workflow.
20. **Step 19: Sticky Note1 (stickyNote)** - This step performs a key action in the workflow.
21. **Step 20: Sticky Note2 (stickyNote)** - This step performs a key action in the workflow.
22. **Step 21: Wordpress - Get all posts (wordpress)** - This step performs a key action in the workflow.
23. **Step 22: Wordpress - Get all pages (wordpress)** - This step performs a key action in the workflow.
24. **Step 23: Sticky Note3 (stickyNote)** - This step performs a key action in the workflow.
25. **Step 24: Set fields1 (set)** - This step performs a key action in the workflow.
26. **Step 25: Filter - Only published & unprotected content (filter)** - This step performs a key action in the workflow.
27. **Step 26: HTML To Markdown (markdown)** - This step performs a key action in the workflow.
28. **Step 27: Supabase - Store workflow execution (supabase)** - This step performs a key action in the workflow.
29. **Step 28: Sticky Note4 (stickyNote)** - This step performs a key action in the workflow.
30. **Step 29: Every 30 seconds (scheduleTrigger)** - This step performs a key action in the workflow.
31. **Step 30: Sticky Note5 (stickyNote)** - This step performs a key action in the workflow.
32. **Step 31: Wordpress - Get posts modified after last workflow execution (httpRequest)** - This step performs a key action in the workflow.
33. **Step 32: Wordpress - Get posts modified after last workflow execution1 (httpRequest)** - This step performs a key action in the workflow.
34. **Step 33: Set fields2 (set)** - This step performs a key action in the workflow.
35. **Step 34: Filter - Only published and unprotected content (filter)** - This step performs a key action in the workflow.
36. **Step 35: Loop Over Items (splitInBatches)** - This step performs a key action in the workflow.
37. **Step 36: Set fields3 (set)** - This step performs a key action in the workflow.
38. **Step 37: Set fields4 (set)** - This step performs a key action in the workflow.
39. **Step 38: Store documents on Supabase (vectorStoreSupabase)** - This step performs a key action in the workflow.
40. **Step 39: Store workflow execution id and timestamptz (supabase)** - This step performs a key action in the workflow.
41. **Step 40: Aggregate documents (aggregate)** - This step performs a key action in the workflow.
42. **Step 41: Sticky Note6 (stickyNote)** - This step performs a key action in the workflow.
43. **Step 42: Sticky Note7 (stickyNote)** - This step performs a key action in the workflow.
44. **Step 43: Postgres - Create documents table (postgres)** - This step performs a key action in the workflow.
45. **Step 44: Postgres - Create workflow execution history table (postgres)** - This step performs a key action in the workflow.
46. **Step 45: Merge Wordpress Posts and Pages (merge)** - This step performs a key action in the workflow.
47. **Step 46: Merge retrieved WordPress posts and pages (merge)** - This step performs a key action in the workflow.
48. **Step 47: Postgres - Filter on existing documents (postgres)** - This step performs a key action in the workflow.
49. **Step 48: Supabase - Delete row if documents exists (supabase)** - This step performs a key action in the workflow.
50. **Step 49: Switch (switch)** - This step performs a key action in the workflow.
51. **Step 50: When chat message received (chatTrigger)** - This step performs a key action in the workflow.
52. **Step 51: Supabase - Retrieve documents from chatinput (vectorStoreSupabase)** - This step performs a key action in the workflow.
53. **Step 52: AI Agent (agent)** - This step performs a key action in the workflow.
54. **Step 53: Supabase Vector Store (vectorStoreSupabase)** - This step performs a key action in the workflow.

## 💡 AI-Powered Ideas for Improvement
### Explain
This n8n workflow automates the process of managing WordPress content, utilizing AI for chat interactions, and storing data in a vector database. It retrieves posts and pages, processes them with OpenAI for embeddings, and allows for chat-based inquiries, enhancing user experience on a website.

### Demonstrate
A business owner could use this workflow to automate content management for their website. For example, after posting a new blog, the workflow updates the database and enables a chat feature that answers visitor questions based on the content, improving engagement and support.

### Imitate
1. Import the workflow into n8n and configure your WordPress and OpenAI credentials.
2. Set up webhook triggers for chat messages.
3. Adjust settings for embedding models and database connections.
4. Test the workflow to ensure it retrieves and processes data correctly.

### Practice
Experiment by adding new content to your WordPress site. Trigger the workflow and check if the chat feature can answer questions about the new content. Modify the chat agent's response style for a more personalized touch.

### WIIFM
Mastering this workflow empowers you to offer clients efficient content management solutions, enhancing user engagement and reducing manual effort. This can be a key selling point for your automation services, helping you attract and retain customers.

## 🔧 Setup Instructions
1. **Connect Credentials:** OpenAI, Google Sheets, Slack, and other nodes must be authenticated.
2. **Customize Core Logic:** Review "When clicking ‘Test workflow’" and "Supabase Vector Store" for IDs, table names, and URLs.
3. **Activate the Workflow:** Set the workflow to "Active" after testing.

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
