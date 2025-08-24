# Technical Analyst AI Agent

## 🚀 What It Does
This workflow automates a process involving memoryBufferWindow, toolWorkflow, agent.

## 💼 Business Use Case
Use it to automate research, content creation, or data analysis. It saves hours of manual work.

## ⚙️ How It Works
1.  **Trigger:** This workflow starts with a **Telegram Trigger** node.
2. **Step 1: Window Buffer Memory (memoryBufferWindow)** - This step performs a key action in the workflow.
3. **Step 2: Get Chart (toolWorkflow)** - This step performs a key action in the workflow.
4. **Step 3: AI Agent (agent)** - This step performs a key action in the workflow.
5. **Step 4: Telegram Trigger (telegramTrigger)** - This step performs a key action in the workflow.
6. **Step 5: Send Analysis (telegram)** - This step performs a key action in the workflow.
7. **Step 6: Workflow Input Trigger (executeWorkflowTrigger)** - This step performs a key action in the workflow.
8. **Step 7: response (set)** - This step performs a key action in the workflow.
9. **Step 8: Download Chart (httpRequest)** - This step performs a key action in the workflow.
10. **Step 9: Get Chart URL (httpRequest)** - This step performs a key action in the workflow.
11. **Step 10: Send Chart (telegram)** - This step performs a key action in the workflow.
12. **Step 11: OpenAI Chat Model (lmChatOpenAi)** - This step performs a key action in the workflow.
13. **Step 12: Switch (switch)** - This step performs a key action in the workflow.
14. **Step 13: Transcribe (openAi)** - This step performs a key action in the workflow.
15. **Step 14: Download File (telegram)** - This step performs a key action in the workflow.
16. **Step 15: Set Text (set)** - This step performs a key action in the workflow.
17. **Step 16: Set Values (set)** - This step performs a key action in the workflow.
18. **Step 17: Technical Analysis (openAi)** - This step performs a key action in the workflow.
19. **Step 18: Webhook (webhook)** - This step performs a key action in the workflow.
20. **Step 19: Set Text1 (set)** - This step performs a key action in the workflow.
21. **Step 20: Save Ticker (airtableTool)** - This step performs a key action in the workflow.
22. **Step 21: Loop Over Items (splitInBatches)** - This step performs a key action in the workflow.
23. **Step 22: Schedule Trigger (scheduleTrigger)** - This step performs a key action in the workflow.
24. **Step 23: Run Agent (httpRequest)** - This step performs a key action in the workflow.
25. **Step 24: Get tokens (airtable)** - This step performs a key action in the workflow.
26. **Step 25: Sticky Note (stickyNote)** - This step performs a key action in the workflow.
27. **Step 26: Sticky Note3 (stickyNote)** - This step performs a key action in the workflow.
28. **Step 27: Sticky Note1 (stickyNote)** - This step performs a key action in the workflow.
29. **Step 28: Sticky Note4 (stickyNote)** - This step performs a key action in the workflow.
30. **Step 29: Sticky Note5 (stickyNote)** - This step performs a key action in the workflow.
31. **Step 30: Sticky Note6 (stickyNote)** - This step performs a key action in the workflow.
32. **Step 31: Sticky Note7 (stickyNote)** - This step performs a key action in the workflow.
33. **Step 32: Sticky Note8 (stickyNote)** - This step performs a key action in the workflow.
34. **Step 33: Sticky Note11 (stickyNote)** - This step performs a key action in the workflow.
35. **Step 34: Sticky Note9 (stickyNote)** - This step performs a key action in the workflow.
36. **Step 35: Sticky Note12 (stickyNote)** - This step performs a key action in the workflow.

## 💡 AI-Powered Ideas for Improvement
### Explain
This n8n workflow automates stock analysis via Telegram. It processes user messages, retrieves stock charts, performs technical analysis using AI, and sends back insights and visualizations, all triggered by user interactions.

### Demonstrate
A business owner could use this workflow to provide clients with instant stock analysis via Telegram. For example, a financial advisor could automate responses about stock performance, saving time and enhancing client engagement.

### Imitate
1. Set up a Telegram bot and connect it to n8n.
2. Create a Webhook Trigger for incoming messages.
3. Use the AI Agent to process requests for stock analysis.
4. Retrieve stock charts using an API and perform analysis.
5. Send results back to the user via Telegram.

### Practice
Try modifying the workflow to analyze a different stock or use a different chart style. Experiment with different user queries and see how the workflow responds to various inputs.

### WIIFM
Mastering this workflow allows you to offer valuable services like automated stock analysis. This can help you attract clients in finance, enhance customer engagement, and create a revenue stream through automation services.

## 🔧 Setup Instructions
1. **Connect Credentials:** OpenAI, Google Sheets, Slack, and other nodes must be authenticated.
2. **Customize Core Logic:** Review "Window Buffer Memory" and "Sticky Note12" for IDs, table names, and URLs.
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
