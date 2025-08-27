# Filter Telegram Send Triggered
  ## 🚀 What It Does
  Automates a flow using n8n×4, stickyNote×3, switch×3.
  
  ## 💼 Business Use Case
  Use to eliminate manual copy-paste and standardize a recurring business process.
  
  ## ⚙️ How It Works
  1. **Trigger:** This workflow starts with **Receive commands from Telegram**.
  2. **Sticky Note** `stickyNote` — width: "307", height: "1003.1537835638735", content: "### Switch depending on content
0 = if command contains the word "marketing"
1 = if command contains the word "sales""
3. **Sticky Note1** `stickyNote` — height: "382", content: "### Switch depending on command
0 = /stop
1 = /start"
4. **Sticky Note2** `stickyNote` — width: "846", height: "575.2554922701386", content: "# Telegram N8N workflow (de)activator

## What does it do?
This workflow helps you to quickly activate or deactivate a workflow through Telegram. Sometimes we are not able to acces…[truncated]"
5. **Receive commands from Telegram** `telegramTrigger` — updates: "message", additionalFields: "[object Object]"
6. **Keep only messages from a specific chat id** `filter` — conditions: "[object Object]"
7. **Switch depending on command** `switch` — rules: "[object Object]", value1: "={{ $json.message.text }}", dataType: "string"
8. **Switch depending on content (deactivate)** `switch` — rules: "[object Object]", value1: "={{ $json.message.text }}", dataType: "string"
9. **Switch depending on content (activate)** `switch` — rules: "[object Object]", value1: "={{ $json.message.text }}", dataType: "string"
10. **Deactivate the marketing workflow** `n8n` — operation: **deactivate**
11. **Deactivate the sales workflow** `n8n` — operation: **deactivate**
12. **Activate the marketing workflow** `n8n` — operation: **activate**
13. **Activate the sales workflow** `n8n` — operation: **activate**
  
  ## 💡 AI-Powered Ideas for Improvement
  **Explain:** This n8n workflow allows you to control the activation or deactivation of other workflows via Telegram commands. By sending messages like '/start marketing' or '/stop sales', you can remotely manage the operation of your marketing and sales workflows. This is particularly useful when you need to quickly respond to changes or issues without direct access to your computer.

**Demonstrate:** A business owner could use this workflow to remotely manage marketing campaigns. If a campaign needs to be paused due to unforeseen circumstances, they can simply send a command via Telegram to stop the relevant workflow without needing to be at their desk.

**Imitate:** 1. Set up a Telegram bot and get your chat ID using BotFather. 2. Connect your Telegram and n8n accounts in the workflow. 3. Define the specific workflow IDs you want to control. 4. Test by sending '/start' or '/stop' commands followed by 'marketing' or 'sales' to your Telegram bot.

**Practice:** Create a test workflow in n8n, then use the Telegram command workflow to start and stop it. Observe how commands sent from Telegram affect the workflow's state, ensuring you understand the activation and deactivation process.

**WIIFM:** Mastering this workflow gives you the ability to offer remote workflow management services, adding flexibility and control for your clients. It enhances your service offerings, allowing you to provide quick responses and maintain workflow efficiency, ultimately increasing customer satisfaction and retention.
  
  ## 🔧 Setup Instructions
  1. **Connect Credentials:** n8nApi, telegramApi.
  
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
  