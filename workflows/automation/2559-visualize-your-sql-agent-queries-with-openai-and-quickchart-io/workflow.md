# Workflow

## 🚀 What It Does
This workflow automates a process involving lmChatOpenAi, executeWorkflow, executeWorkflowTrigger.

## 💼 Business Use Case
Use it to automate research, content creation, or data analysis. It saves hours of manual work.

## ⚙️ How It Works
1.  **Trigger:** This workflow starts with a **Execute "Generate a chart" tool** node.
2. **Step 1: OpenAI Chat Model (lmChatOpenAi)** - This step performs a key action in the workflow.
3. **Step 2: Execute Workflow (executeWorkflow)** - This step performs a key action in the workflow.
4. **Step 3: Execute "Generate a chart" tool (executeWorkflowTrigger)** - This step performs a key action in the workflow.
5. **Step 4: OpenAI - Generate Chart definition with Structured Output (httpRequest)** - This step performs a key action in the workflow.
6. **Step 5: Set response (set)** - This step performs a key action in the workflow.
7. **Step 6: When chat message received (chatTrigger)** - This step performs a key action in the workflow.
8. **Step 7: Set Text output (set)** - This step performs a key action in the workflow.
9. **Step 8: Set Text + Chart output (set)** - This step performs a key action in the workflow.
10. **Step 9: AI Agent (agent)** - This step performs a key action in the workflow.
11. **Step 10: Window Buffer Memory (memoryBufferWindow)** - This step performs a key action in the workflow.
12. **Step 11: Sticky Note1 (stickyNote)** - This step performs a key action in the workflow.
13. **Step 12: Sticky Note (stickyNote)** - This step performs a key action in the workflow.
14. **Step 13: Sticky Note2 (stickyNote)** - This step performs a key action in the workflow.
15. **Step 14: OpenAI Chat Model Classifier (lmChatOpenAi)** - This step performs a key action in the workflow.
16. **Step 15: Sticky Note3 (stickyNote)** - This step performs a key action in the workflow.
17. **Step 16: Text Classifier - Chart required? (textClassifier)** - This step performs a key action in the workflow.

## 💡 AI-Powered Ideas for Improvement
### Explain
This n8n workflow automates the process of responding to chat messages with AI-generated insights and charts. It uses OpenAI to analyze user input, determines if a chart is needed, and generates a visual representation of data based on the user's request.

### Demonstrate
A business owner could use this workflow to improve customer service. For instance, when a customer inquires about sales data, the AI can provide a textual summary and a chart, enhancing clarity and engagement.

### Imitate
1. Create a new n8n workflow.
2. Add a "When chat message received" node to trigger on user input.
3. Connect to the "OpenAI Chat Model" node to analyze the message.
4. Use a "Text Classifier" to decide if a chart is needed.
5. If yes, execute the chart generation via an "HTTP Request" node.
6. Set the response with both text and the chart using "Set" nodes.

### Practice
Try adapting the workflow to respond to different user requests. For example, change the AI's prompt to summarize a different type of data (like customer feedback) and see how it generates output.

### WIIFM
Mastering this workflow can help you offer valuable automation services to clients, enhancing their customer interactions. This expertise can lead to increased demand for your services and higher income potential in the growing field of AI automation.

## 🔧 Setup Instructions
1. **Connect Credentials:** OpenAI, Google Sheets, Slack, and other nodes must be authenticated.
2. **Customize Core Logic:** Review "OpenAI Chat Model" and "Text Classifier - Chart required?" for IDs, table names, and URLs.
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
