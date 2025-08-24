# Tech Analyst Agent

## 🚀 What It Does
This workflow automates a process involving lmChatAnthropic, memoryBufferWindow, toolWorkflow.

## 💼 Business Use Case
Use it to automate research, content creation, or data analysis. It saves hours of manual work.

## ⚙️ How It Works
1.  **Trigger:** This workflow starts with a **Telegram Trigger** node.
2. **Step 1: Anthropic Chat Model (lmChatAnthropic)** - This step performs a key action in the workflow.
3. **Step 2: Window Buffer Memory (memoryBufferWindow)** - This step performs a key action in the workflow.
4. **Step 3: Get Chart (toolWorkflow)** - This step performs a key action in the workflow.
5. **Step 4: AI Agent (agent)** - This step performs a key action in the workflow.
6. **Step 5: Telegram Trigger (telegramTrigger)** - This step performs a key action in the workflow.
7. **Step 6: Send Analysis (telegram)** - This step performs a key action in the workflow.
8. **Step 7: Sticky Note (stickyNote)** - This step performs a key action in the workflow.
9. **Step 8: Sticky Note1 (stickyNote)** - This step performs a key action in the workflow.
10. **Step 9: Workflow Input Trigger (executeWorkflowTrigger)** - This step performs a key action in the workflow.
11. **Step 10: response (set)** - This step performs a key action in the workflow.
12. **Step 11: Technical Analysis (openAi)** - This step performs a key action in the workflow.
13. **Step 12: Download Chart (httpRequest)** - This step performs a key action in the workflow.
14. **Step 13: Get Chart URL (httpRequest)** - This step performs a key action in the workflow.
15. **Step 14: Set Ticker (set)** - This step performs a key action in the workflow.
16. **Step 15: Send Chart (telegram)** - This step performs a key action in the workflow.

## 💡 AI-Powered Ideas for Improvement
### Explain
This n8n workflow automates financial analysis by using an AI agent to respond to stock inquiries via Telegram. It analyzes stock data, generates charts, and sends insights back to users, streamlining the process of obtaining financial information.

### Demonstrate
A financial consultant could use this workflow to provide clients with instant stock analysis. When a client messages a stock ticker in Telegram, the workflow fetches data, performs technical analysis, and returns a chart and insights, enhancing client engagement and satisfaction.

### Imitate
1. Set up a Telegram bot and connect it to n8n.
2. Create a workflow trigger for incoming messages.
3. Use the AI agent to analyze stock tickers provided by users.
4. Integrate a charting tool to generate stock graphs.
5. Send the analysis and charts back to users via Telegram.

### Practice
Try modifying the workflow to analyze a different type of financial data, like cryptocurrency. Change the charting tool and adjust the AI prompts to reflect the new context, then test it by sending a cryptocurrency ticker to your Telegram bot.

### WIIFM
Mastering this workflow allows you to offer valuable financial insights as a service, attracting clients who need real-time analysis. This can lead to recurring revenue opportunities, positioning you as a specialist in financial automation and AI integration.

## 🔧 Setup Instructions
1. **Connect Credentials:** OpenAI, Google Sheets, Slack, and other nodes must be authenticated.
2. **Customize Core Logic:** Review "Anthropic Chat Model" and "Send Chart" for IDs, table names, and URLs.
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
