# Send Triggered
## 🚀 What It Does
Automates a flow using mcpClientTool×2, chatTrigger, agent.

## 💼 Business Use Case
Great for **content, summarization, triage, or decisioning** where AI adds speed and consistency.

## ⚙️ How It Works
1. **Trigger:** This workflow starts with **When chat message received**.
2. **When chat message received** `chatTrigger` — options: "[object Object]"
3. **n8n-assistant Tool Lookup** `mcpClientTool` — configured for its default action.
4. **n8n-assistant Execute Tool** `mcpClientTool` — operation: **executeTool**
5. **OpenAI Chat Model2** `lmChatOpenAi` — model: `[object Object]`
6. **n8n Research AI Agent** `agent` — options: "[object Object]"

## 💡 AI-Powered Ideas for Improvement
### Explain
This n8n workflow automates the retrieval and execution of tools based on chat messages received. When a chat message is detected, it uses the n8n Research AI Agent to determine the appropriate tools or content needed. It then looks up the necessary tools using the n8n-assistant Tool Lookup and executes them via the n8n-assistant Execute Tool. An OpenAI model is used to assist in processing and generating responses, making the workflow dynamic and responsive to user queries.

### Demonstrate
A business owner could use this workflow to streamline customer support. When a customer sends a query, the workflow can automatically identify relevant tools or information to provide a quick, accurate response, improving efficiency and customer satisfaction.

### Imitate
1. Import the workflow into n8n.
2. Connect your chat application to the `chatTrigger`.
3. Configure the `mcpClientTool` nodes with your specific tool details.
4. Set up the OpenAI model with your API credentials.
5. Test the workflow by sending a chat message to see it in action.

### Practice
Create a mock chat application and connect it to this workflow. Send various sample messages and observe how the workflow retrieves and executes different tools or content based on the queries. Adjust the workflow to improve response accuracy.

### WIIFM
Mastering this workflow can enhance your ability to offer automated customer support solutions, reducing response times and increasing satisfaction. It can also open opportunities to offer sophisticated AI-driven automation services, attracting more clients and generating income.

## 🔧 Setup Instructions
1. **Connect Credentials:** mcpClientApi, openAiApi.

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
