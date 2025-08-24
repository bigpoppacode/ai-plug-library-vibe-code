# Customer Support Automation

## 🚀 What It Does
This workflow automates a process involving lmChatOpenAi, documentDefaultDataLoader, embeddingsOpenAi.

## 💼 Business Use Case
Use it to automate research, content creation, or data analysis. It saves hours of manual work.

## ⚙️ How It Works
1.  **Trigger:** This workflow starts with a **File Created** node.
2. **Step 1: OpenAI Chat Model (lmChatOpenAi)** - This step performs a key action in the workflow.
3. **Step 2: OpenAI Chat Model1 (lmChatOpenAi)** - This step performs a key action in the workflow.
4. **Step 3: Default Data Loader (documentDefaultDataLoader)** - This step performs a key action in the workflow.
5. **Step 4: Embeddings OpenAI1 (embeddingsOpenAi)** - This step performs a key action in the workflow.
6. **Step 5: Retrieve Documents (toolVectorStore)** - This step performs a key action in the workflow.
7. **Step 6: Sticky Note1 (stickyNote)** - This step performs a key action in the workflow.
8. **Step 7: Download File (googleDrive)** - This step performs a key action in the workflow.
9. **Step 8: File Created (googleDriveTrigger)** - This step performs a key action in the workflow.
10. **Step 9: File Updated (googleDriveTrigger)** - This step performs a key action in the workflow.
11. **Step 10: Extract Document Text (extractFromFile)** - This step performs a key action in the workflow.
12. **Step 11: Embeddings OpenAI (embeddingsOpenAi)** - This step performs a key action in the workflow.
13. **Step 12: Postgres Chat Memory (memoryPostgresChat)** - This step performs a key action in the workflow.
14. **Step 13: Recursive Character Text Splitter (textSplitterRecursiveCharacterTextSplitter)** - This step performs a key action in the workflow.
15. **Step 14: Delete Old Doc Rows (supabase)** - This step performs a key action in the workflow.
16. **Step 15: Set File ID (set)** - This step performs a key action in the workflow.
17. **Step 16: When chat message received (chatTrigger)** - This step performs a key action in the workflow.
18. **Step 17: Supabase Vector Store (vectorStoreSupabase)** - This step performs a key action in the workflow.
19. **Step 18: Insert into Supabase Vectorstore (vectorStoreSupabase)** - This step performs a key action in the workflow.
20. **Step 19: Create Ticket (airtableTool)** - This step performs a key action in the workflow.
21. **Step 20: Search Order (airtableTool)** - This step performs a key action in the workflow.
22. **Step 21: Get Slots (toolWorkflow)** - This step performs a key action in the workflow.
23. **Step 22: Schedule Call (googleCalendarTool)** - This step performs a key action in the workflow.
24. **Step 23: AI Agent (agent)** - This step performs a key action in the workflow.
25. **Step 24: Execute Workflow Trigger (executeWorkflowTrigger)** - This step performs a key action in the workflow.
26. **Step 25: Google Calendar Events (googleCalendar)** - This step performs a key action in the workflow.
27. **Step 26: Get Free Slots (code)** - This step performs a key action in the workflow.
28. **Step 27: Set Start/End of Day (set)** - This step performs a key action in the workflow.
29. **Step 28: Set Response (itemLists)** - This step performs a key action in the workflow.
30. **Step 29: Sticky Note (stickyNote)** - This step performs a key action in the workflow.

## 💡 AI-Powered Ideas for Improvement
### Explain
This n8n workflow automates customer support for order and delivery inquiries. It uses AI to process chat messages, retrieves relevant documents, and manages tasks like creating tickets, scheduling calls, and sending email notifications, all triggered by specific events.

### Demonstrate
A business owner could use this workflow to handle customer inquiries about order status or support requests. Instead of manually responding to each query, the workflow automatically retrieves the necessary information, creates tickets, and schedules calls, improving efficiency and response time.

### Imitate
1. Open n8n and create a new workflow.
2. Add a **Webhook Trigger** to start the process when a chat message is received.
3. Connect to the **AI Agent** node to analyze the message.
4. Use **Retrieve Documents** to fetch relevant information.
5. Add nodes to create tickets and schedule calls based on the inquiry.
6. Test the workflow by simulating a customer inquiry.

### Practice
Try modifying the workflow to send automated email responses to customers based on their inquiries. Set up a simple email node that sends a confirmation message when a ticket is created.

### WIIFM
Mastering this workflow allows you to offer valuable automation services to businesses, helping them save time and improve customer satisfaction. This skill can lead to new clients, higher income, and a competitive edge in automation consulting.

## 🔧 Setup Instructions
1. **Connect Credentials:** OpenAI, Google Sheets, Slack, and other nodes must be authenticated.
2. **Customize Core Logic:** Review "OpenAI Chat Model" and "Sticky Note" for IDs, table names, and URLs.
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
