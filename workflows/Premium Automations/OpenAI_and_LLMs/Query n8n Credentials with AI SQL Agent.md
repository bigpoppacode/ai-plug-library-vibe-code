# Query N8n Credentials With AI Sql Agent

## 🚀 What It Does
This workflow automates a process involving manualTrigger, set, stickyNote.

## 💼 Business Use Case
Use it to automate research, content creation, or data analysis. It saves hours of manual work.

## ⚙️ How It Works
1.  **Trigger:** This workflow starts with a **When clicking "Test workflow"** node.
2. **Step 1: When clicking "Test workflow" (manualTrigger)** - This step performs a key action in the workflow.
3. **Step 2: Map Workflows & Credentials (set)** - This step performs a key action in the workflow.
4. **Step 3: Sticky Note (stickyNote)** - This step performs a key action in the workflow.
5. **Step 4: Save to Database (code)** - This step performs a key action in the workflow.
6. **Step 5: Chat Trigger (chatTrigger)** - This step performs a key action in the workflow.
7. **Step 6: Query Workflow Credentials Database (toolCode)** - This step performs a key action in the workflow.
8. **Step 7: OpenAI Chat Model (lmChatOpenAi)** - This step performs a key action in the workflow.
9. **Step 8: Window Buffer Memory (memoryBufferWindow)** - This step performs a key action in the workflow.
10. **Step 9: Sticky Note1 (stickyNote)** - This step performs a key action in the workflow.
11. **Step 10: Sticky Note2 (stickyNote)** - This step performs a key action in the workflow.
12. **Step 11: Workflow Credentials Helper Agent (agent)** - This step performs a key action in the workflow.
13. **Step 12: Sticky Note4 (stickyNote)** - This step performs a key action in the workflow.
14. **Step 13: n8n (n8n)** - This step performs a key action in the workflow.

## 💡 AI-Powered Ideas for Improvement
### Explain
This n8n workflow automates the process of managing workflow credentials. It triggers on a manual input, maps workflow details, saves them to a database, and allows querying those credentials using an AI chatbot, enhancing data retrieval efficiency.

### Demonstrate
A business owner could use this workflow to quickly identify which workflows use specific credentials (like Slack or Google Sheets), making it easier to manage integrations and ensure compliance across multiple automation setups.

### Imitate
1. **Import the Workflow**: Load the JSON into n8n.
2. **Set Up Trigger**: Use the manual trigger to start the workflow.
3. **Map Credentials**: Configure the Set node to capture workflow details.
4. **Database Storage**: Use the Code node to save credentials in SQLite.
5. **Query with AI**: Set up the AI chat model to ask about workflows and receive responses.

### Practice
Try modifying the workflow to add a new credential type, such as "Trello". Update the mapping and ensure it saves correctly in the database. Test querying this new credential with the AI agent.

### WIIFM
Mastering this workflow allows you to streamline credential management across various automations, enhancing your service offerings. This can help you attract clients looking for efficient solutions, ultimately increasing your income potential as an automation consultant.

## 🔧 Setup Instructions
1. **Connect Credentials:** OpenAI, Google Sheets, Slack, and other nodes must be authenticated.
2. **Customize Core Logic:** Review "When clicking "Test workflow"" and "n8n" for IDs, table names, and URLs.
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
