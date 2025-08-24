# Openai Assistant With Custom Tools

## 🚀 What It Does
This workflow automates a process involving manualChatTrigger, openAiAssistant, executeWorkflowTrigger.

## 💼 Business Use Case
Use it to automate research, content creation, or data analysis. It saves hours of manual work.

## ⚙️ How It Works
1.  **Trigger:** This workflow starts with a **On new manual Chat Message** node.
2. **Step 1: On new manual Chat Message (manualChatTrigger)** - This step performs a key action in the workflow.
3. **Step 2: OpenAI Assistant (openAiAssistant)** - This step performs a key action in the workflow.
4. **Step 3: Execute Workflow Trigger (executeWorkflowTrigger)** - This step performs a key action in the workflow.
5. **Step 4: Mapping data (code)** - This step performs a key action in the workflow.
6. **Step 5: List countries? (if)** - This step performs a key action in the workflow.
7. **Step 6: Mapping data1 (code)** - This step performs a key action in the workflow.
8. **Step 7: Sticky Note (stickyNote)** - This step performs a key action in the workflow.
9. **Step 8: Return country list (set)** - This step performs a key action in the workflow.
10. **Step 9: Return specific capital (set)** - This step performs a key action in the workflow.
11. **Step 10: Tool to call the workflow below (toolWorkflow)** - This step performs a key action in the workflow.
12. **Step 11: Concatenate country names (summarize)** - This step performs a key action in the workflow.
13. **Step 12: Get the matching country's details (merge)** - This step performs a key action in the workflow.
14. **Step 13: Sticky Note1 (stickyNote)** - This step performs a key action in the workflow.
15. **Step 14: Tool: Get current date and time (toolCode)** - This step performs a key action in the workflow.

## 💡 AI-Powered Ideas for Improvement
### Explain
This n8n workflow automates interactions with an OpenAI Assistant, allowing users to ask about fictional countries and their capitals. It listens for messages, processes requests, and returns either a list of countries or specific capital information.

### Demonstrate
A business owner could use this workflow to create a customer engagement tool on their website. When users ask about fictional countries, the tool provides instant responses, enhancing user experience and engagement without manual input.

### Imitate
1. Set up n8n and create a new workflow.
2. Add a "Manual Trigger" node to start the workflow.
3. Connect an "OpenAI Assistant" node to process user queries.
4. Use "If" nodes to determine if the request is for a list of countries or a specific capital.
5. Return the response using "Set" nodes for output formatting.

### Practice
Try adapting the workflow by adding a new fictional country and its capital. Test the workflow by querying the OpenAI Assistant to ensure it recognizes the new entry and responds correctly.

### WIIFM
Mastering this workflow enables you to create engaging AI-driven tools for businesses, enhancing customer interaction. This skill can lead to increased client satisfaction, more customers, and potential income through automation services.

## 🔧 Setup Instructions
1. **Connect Credentials:** OpenAI, Google Sheets, Slack, and other nodes must be authenticated.
2. **Customize Core Logic:** Review "On new manual Chat Message" and "Tool: Get current date and time" for IDs, table names, and URLs.
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
