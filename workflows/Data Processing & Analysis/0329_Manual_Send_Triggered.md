# Manual Send Triggered

## 🚀 What It Does
This workflow automates a process involving manualTrigger, chatTrigger, agent.

## 💼 Business Use Case
Use it to automate research, content creation, or data analysis. It saves hours of manual work.

## ⚙️ How It Works
1.  **Trigger:** This workflow starts with a **When clicking ‘Test workflow’** node.
2. **Step 1: When clicking ‘Test workflow’ (manualTrigger)** - This step performs a key action in the workflow.
3. **Step 2: When chat message received (chatTrigger)** - This step performs a key action in the workflow.
4. **Step 3: AI Agent (agent)** - This step performs a key action in the workflow.
5. **Step 4: Debug Input (set)** - This step performs a key action in the workflow.
6. **Step 5: OpenAI Chat Model (lmChatOpenAi)** - This step performs a key action in the workflow.
7. **Step 6: Code Tool (toolCode)** - This step performs a key action in the workflow.

## 💡 AI-Powered Ideas for Improvement
### Explain
This n8n workflow automates the process of responding to chat messages. It starts when a message is received, processes the input using an AI agent, and executes a JavaScript function to return a random color (excluding green and blue) before sending the response back.

### Demonstrate
A business owner could use this workflow to automate customer support on their website. When users ask for product color options, the AI can respond quickly, enhancing user experience and freeing the owner from repetitive queries.

### Imitate
1. Create a new n8n workflow.
2. Add a "Manual Trigger" node to start the process.
3. Add a "Chat Trigger" node to receive messages.
4. Use an "AI Agent" node to process the message.
5. Add a "Set" node to define the input for color selection.
6. Include a "Code Tool" node to implement the JavaScript function for color selection.

### Practice
Try modifying the JavaScript function in the "Code Tool" node to return a random animal instead of a color. Test it by clicking the "Test workflow" button and observe the changes in the output.

### WIIFM
Mastering this workflow allows you to streamline customer interactions, enhancing service efficiency and satisfaction. As a result, you can attract more clients seeking automation solutions, leading to increased income and business growth.

## 🔧 Setup Instructions
1. **Connect Credentials:** OpenAI, Google Sheets, Slack, and other nodes must be authenticated.
2. **Customize Core Logic:** Review "When clicking ‘Test workflow’" and "Code Tool" for IDs, table names, and URLs.
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
