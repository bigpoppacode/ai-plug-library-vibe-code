# 🚀 Local Multi LLM Testing & Performance Tracker

## 🚀 What It Does
This workflow automates a process involving stickyNote, httpRequest, chatTrigger.

## 💼 Business Use Case
Use it to automate research, content creation, or data analysis. It saves hours of manual work.

## ⚙️ How It Works
1.  **Trigger:** This workflow starts with a **When chat message received** node.
2. **Step 1: Sticky Note (stickyNote)** - This step performs a key action in the workflow.
3. **Step 2: Get Models (httpRequest)** - This step performs a key action in the workflow.
4. **Step 3: Sticky Note1 (stickyNote)** - This step performs a key action in the workflow.
5. **Step 4: When chat message received (chatTrigger)** - This step performs a key action in the workflow.
6. **Step 5: Sticky Note2 (stickyNote)** - This step performs a key action in the workflow.
7. **Step 6: Sticky Note3 (stickyNote)** - This step performs a key action in the workflow.
8. **Step 7: Get timeDifference (dateTime)** - This step performs a key action in the workflow.
9. **Step 8: Sticky Note4 (stickyNote)** - This step performs a key action in the workflow.
10. **Step 9: Sticky Note5 (stickyNote)** - This step performs a key action in the workflow.
11. **Step 10: Sticky Note6 (stickyNote)** - This step performs a key action in the workflow.
12. **Step 11: Run Model with Dunamic Inputs (lmChatOpenAi)** - This step performs a key action in the workflow.
13. **Step 12: Analyze LLM Response Metrics (code)** - This step performs a key action in the workflow.
14. **Step 13: Save Results to Google Sheets (googleSheets)** - This step performs a key action in the workflow.
15. **Step 14: Capture End Time (dateTime)** - This step performs a key action in the workflow.
16. **Step 15: Capture Start Time (dateTime)** - This step performs a key action in the workflow.
17. **Step 16: Prepare Data for Analysis (set)** - This step performs a key action in the workflow.
18. **Step 17: Extract Model IDsto Run Separately (splitOut)** - This step performs a key action in the workflow.
19. **Step 18: Sticky Note7 (stickyNote)** - This step performs a key action in the workflow.
20. **Step 19: Add System Prompt (set)** - This step performs a key action in the workflow.
21. **Step 20: LLM Response Analysis (chainLlm)** - This step performs a key action in the workflow.
22. **Step 21: Sticky Note8 (stickyNote)** - This step performs a key action in the workflow.

## 💡 AI-Powered Ideas for Improvement
### Explain
This n8n workflow automates the process of analyzing multiple local language models (LLMs) by receiving chat messages, querying the models, analyzing the responses, and saving the results to Google Sheets. It helps streamline data collection and evaluation.

### Demonstrate
A business owner could use this workflow to analyze customer inquiries by sending them to various AI models for response generation. This allows for quick feedback on customer sentiment and improves response quality, saving time and enhancing service.

### Imitate
1. Set up n8n and create a new workflow.
2. Add a **Chat Trigger** to receive messages.
3. Use **HTTP Request** to get model IDs from your local LLM server.
4. Run the models with dynamic inputs and analyze the responses.
5. Save the results to Google Sheets for tracking.

### Practice
Create a simple version of this workflow that triggers on a manual input (like a form submission) instead of a chat message. Test it by sending a prompt to one LLM and logging the response in a Google Sheet.

### WIIFM
Mastering this workflow enables you to provide valuable insights through AI analysis, attracting clients seeking automation solutions. It enhances your service offerings, allowing you to charge for efficiency and innovation, ultimately generating more income.

## 🔧 Setup Instructions
1. **Connect Credentials:** OpenAI, Google Sheets, Slack, and other nodes must be authenticated.
2. **Customize Core Logic:** Review "Sticky Note" and "Sticky Note8" for IDs, table names, and URLs.
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
