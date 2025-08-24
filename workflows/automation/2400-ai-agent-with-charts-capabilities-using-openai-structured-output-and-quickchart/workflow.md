# Workflow

## 🚀 What It Does
This workflow automates a process involving lmChatOpenAi, memoryBufferWindow, toolWorkflow.

## 💼 Business Use Case
Use it to automate research, content creation, or data analysis. It saves hours of manual work.

## ⚙️ How It Works
1.  **Trigger:** This workflow starts with a **Execute "Generate a chart" tool** node.
2. **Step 1: OpenAI Chat Model (lmChatOpenAi)** - This step performs a key action in the workflow.
3. **Step 2: Window Buffer Memory (memoryBufferWindow)** - This step performs a key action in the workflow.
4. **Step 3: Generate a chart (toolWorkflow)** - This step performs a key action in the workflow.
5. **Step 4: Execute "Generate a chart" tool (executeWorkflowTrigger)** - This step performs a key action in the workflow.
6. **Step 5: OpenAI - Generate Chart definition with Structured Output (httpRequest)** - This step performs a key action in the workflow.
7. **Step 6: Set response (set)** - This step performs a key action in the workflow.
8. **Step 7: Sticky Note1 (stickyNote)** - This step performs a key action in the workflow.
9. **Step 8: Sticky Note (stickyNote)** - This step performs a key action in the workflow.
10. **Step 9: Sticky Note2 (stickyNote)** - This step performs a key action in the workflow.
11. **Step 10: AI Agent (agent)** - This step performs a key action in the workflow.
12. **Step 11: When chat message received (chatTrigger)** - This step performs a key action in the workflow.

## 💡 AI-Powered Ideas for Improvement
### Explain
This n8n workflow integrates an AI agent that can generate charts based on user queries. It listens for chat messages, uses OpenAI to create a chart definition, and then generates an image of the chart, which it sends back in the chat.

### Demonstrate
A business owner can use this workflow to automatically generate visual data reports for team meetings. Instead of manually creating charts, they can ask the AI for insights (e.g., "Show sales trends for Q1") and receive instant visualizations.

### Imitate
1. Create a new n8n workflow.
2. Add a **Webhook Trigger** to listen for chat messages.
3. Integrate an **OpenAI Chat Model** node to process queries.
4. Use a **Generate Chart** node to create the chart definition.
5. Connect to an **HTTP Request** node to generate the chart image.
6. Set up a **response node** to send the chart back to the chat.

### Practice
Experiment by modifying the chart query you send to the AI. For example, change the prompt to ask for a pie chart of the top five products sold, and observe how the output changes. 

### WIIFM
Mastering this workflow enables you to offer valuable data visualization services, attract more clients, and increase your income by automating reporting tasks, enhancing decision-making with instant insights.

## 🔧 Setup Instructions
1. **Connect Credentials:** OpenAI, Google Sheets, Slack, and other nodes must be authenticated.
2. **Customize Core Logic:** Review "OpenAI Chat Model" and "When chat message received" for IDs, table names, and URLs.
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
