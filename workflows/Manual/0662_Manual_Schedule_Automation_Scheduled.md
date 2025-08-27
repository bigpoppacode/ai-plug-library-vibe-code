# Manual Schedule Automation Scheduled
  ## 🚀 What It Does
  Automates a flow using n8n×3, manualTrigger, if.
  
  ## 💼 Business Use Case
  Use to eliminate manual copy-paste and standardize a recurring business process.
  
  ## ⚙️ How It Works
  1. **Trigger:** This workflow starts with **When clicking ‘Test workflow’**.
  2. **When clicking ‘Test workflow’** `manualTrigger` — configured for its default action.
3. **n8n1** `n8n` — resource: **execution**
4. **Schedule Trigger** `scheduleTrigger` — rule: "[object Object]"
5. **n8n list execution** `n8n` — resource: **execution**
6. **If** `if` — options: "[object Object]", conditions: "[object Object]"
7. **delete execution** `n8n` — resource: **execution**, operation: **delete**
8. **No Operation, do nothing** `noOp` — configured for its default action.
  
  ## 💡 AI-Powered Ideas for Improvement
  ### Explain
This n8n workflow is designed to manage and clean up old workflow executions. It starts by triggering manually or on a schedule to list all workflow executions. It then checks if any executions are older than 10 days. If they are, the workflow deletes these old executions to conserve resources. If not, it does nothing.

### Demonstrate
A developer managing automated tasks can use this workflow to routinely clear out old execution logs, ensuring the system runs efficiently without unnecessary data cluttering the server.

### Imitate
1. Import the workflow into your n8n instance.
2. Connect your n8n account for API access.
3. Set up the schedule trigger to run at a convenient time.
4. Test the workflow using the manual trigger to ensure it correctly identifies and deletes old executions.
5. Adjust the conditions if you want to change the age threshold for deletions.

### Practice
Create a test workflow that generates execution logs. Run the cleanup workflow to see it delete logs older than 10 days. Experiment by changing the date condition to see how it affects the execution.

### WIIFM
Mastering this workflow allows you to maintain a clean and efficient n8n environment. It helps you provide reliable automation services by preventing performance issues caused by data bloat, thus enhancing your credibility and service quality in the automation business.
  
  ## 🔧 Setup Instructions
  1. **Connect Credentials:** n8nApi.
  
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
  