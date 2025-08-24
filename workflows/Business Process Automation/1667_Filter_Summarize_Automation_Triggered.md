# Filter Summarize Automation Triggered

## 🚀 What It Does
This workflow automates a process involving stickyNote, embeddingsOpenAi, textSplitterTokenSplitter.

## 💼 Business Use Case
Use it to automate research, content creation, or data analysis. It saves hours of manual work.

## ⚙️ How It Works
1.  **Trigger:** This workflow starts with a **Notion - Page Added Trigger** node.
2. **Step 1: Sticky Note (stickyNote)** - This step performs a key action in the workflow.
3. **Step 2: Embeddings OpenAI (embeddingsOpenAi)** - This step performs a key action in the workflow.
4. **Step 3: Token Splitter (textSplitterTokenSplitter)** - This step performs a key action in the workflow.
5. **Step 4: Notion - Page Added Trigger (notionTrigger)** - This step performs a key action in the workflow.
6. **Step 5: Notion - Retrieve Page Content (notion)** - This step performs a key action in the workflow.
7. **Step 6: Filter Non-Text Content (filter)** - This step performs a key action in the workflow.
8. **Step 7: Summarize - Concatenate Notion's blocks content (summarize)** - This step performs a key action in the workflow.
9. **Step 8: Create metadata and load content (documentDefaultDataLoader)** - This step performs a key action in the workflow.
10. **Step 9: Supabase Vector Store (vectorStoreSupabase)** - This step performs a key action in the workflow.

## 💡 AI-Powered Ideas for Improvement
### Explain
This n8n workflow automates the process of storing Notion pages as vector documents in a Supabase database. It triggers when a new page is added to Notion, retrieves its content, filters out non-text elements, creates embeddings, and stores everything in Supabase for later retrieval.

### Demonstrate
A business could use this workflow to automatically archive and analyze customer feedback written in Notion. By converting the feedback into vector documents, they can improve insights from data and enhance customer satisfaction through targeted actions.

### Imitate
1. Set up your Notion database to capture content.
2. Create the n8n workflow with a Notion trigger for new pages.
3. Add nodes to retrieve content, filter it, and create embeddings.
4. Connect to Supabase to store the vector documents.
5. Test the workflow by adding a new page in Notion.

### Practice
Try adding a new page to your Notion database with various content types. Run the workflow and check Supabase to see if the text content was stored correctly, ensuring non-text elements were filtered out.

### WIIFM
Mastering this workflow can help you offer valuable automation services, allowing businesses to manage and analyze their data efficiently. This could lead to finding customers or generating income as part of an AI automation business.

## 🔧 Setup Instructions
1. **Connect Credentials:** OpenAI, Google Sheets, Slack, and other nodes must be authenticated.
2. **Customize Core Logic:** Review "Sticky Note" and "Supabase Vector Store" for IDs, table names, and URLs.
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
