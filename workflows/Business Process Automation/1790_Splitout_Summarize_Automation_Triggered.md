# Splitout Summarize Automation Triggered

## 🚀 What It Does
This workflow automates a process involving chatTrigger, splitInBatches, memoryBufferWindow.

## 💼 Business Use Case
Use it to automate research, content creation, or data analysis. It saves hours of manual work.

## ⚙️ How It Works
1.  **Trigger:** This workflow starts with a **When chat message received** node.
2. **Step 1: When chat message received (chatTrigger)** - This step performs a key action in the workflow.
3. **Step 2: Loop Over Items (splitInBatches)** - This step performs a key action in the workflow.
4. **Step 3: Simple Memory (memoryBufferWindow)** - This step performs a key action in the workflow.
5. **Step 4: Chat Memory Manager (memoryManager)** - This step performs a key action in the workflow.
6. **Step 5: Sticky Note (stickyNote)** - This step performs a key action in the workflow.
7. **Step 6: OpenRouter Chat Model (lmChatOpenRouter)** - This step performs a key action in the workflow.
8. **Step 7: Sticky Note1 (stickyNote)** - This step performs a key action in the workflow.
9. **Step 8: Sticky Note2 (stickyNote)** - This step performs a key action in the workflow.
10. **Step 9: Set model, sessionId, chatInput, sessionIdBase (set)** - This step performs a key action in the workflow.
11. **Step 10: AI Agent (agent)** - This step performs a key action in the workflow.
12. **Step 11: Sticky Note3 (stickyNote)** - This step performs a key action in the workflow.
13. **Step 12: Sticky Note4 (stickyNote)** - This step performs a key action in the workflow.
14. **Step 13: Sticky Note5 (stickyNote)** - This step performs a key action in the workflow.
15. **Step 14: Concatenate Chat Answers (summarize)** - This step performs a key action in the workflow.
16. **Step 15: Sticky Note6 (stickyNote)** - This step performs a key action in the workflow.
17. **Step 16: Group Model Outputs for Evaluation (aggregate)** - This step performs a key action in the workflow.
18. **Step 17: Add Model Results to Google Sheet (googleSheets)** - This step performs a key action in the workflow.
19. **Step 18: Prepare Data for Chat and Google Sheets (set)** - This step performs a key action in the workflow.
20. **Step 19: Define Models to Compare (set)** - This step performs a key action in the workflow.
21. **Step 20: Split Models into Items (splitOut)** - This step performs a key action in the workflow.
22. **Step 21: Set Output for Chat UI (set)** - This step performs a key action in the workflow.

## 💡 AI-Powered Ideas for Improvement
### Explain
This n8n workflow automates the comparison of two language models (LLMs) based on user chat inputs. When a message is received, it sends the input to both models, collects their responses, and logs the results in Google Sheets for evaluation.

### Demonstrate
A business owner developing an AI chatbot could use this workflow to determine which language model (e.g., OpenAI vs. another provider) provides better responses for customer interactions, helping them choose the best model for their service.

### Imitate
1. Set up a n8n instance.
2. Create a new workflow and add a "When chat message received" trigger.
3. Use "Loop Over Items" to send input to two LLMs.
4. Add nodes to log responses in Google Sheets.
5. Test the workflow by sending sample chat messages.

### Practice
Try modifying the model IDs in the "Define Models to Compare" node to include different language models. Observe how changes affect the responses and logging in Google Sheets.

### WIIFM
Mastering this workflow allows you to offer comparative analysis services for AI models, helping clients make informed decisions. This can lead to more clients, increased revenue, and a competitive edge in the growing AI automation market.

## 🔧 Setup Instructions
1. **Connect Credentials:** OpenAI, Google Sheets, Slack, and other nodes must be authenticated.
2. **Customize Core Logic:** Review "When chat message received" and "Set Output for Chat UI" for IDs, table names, and URLs.
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
