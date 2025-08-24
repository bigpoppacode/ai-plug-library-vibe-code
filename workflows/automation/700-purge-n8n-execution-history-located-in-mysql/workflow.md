# Workflow

## 🚀 What It Does
This workflow automates a process involving manualTrigger, mySql, cron.

## 💼 Business Use Case
Use it to automate research, content creation, or data analysis. It saves hours of manual work.

## ⚙️ How It Works
1.  **Trigger:** This workflow starts with a **On clicking 'execute'** node.
2. **Step 1: On clicking 'execute' (manualTrigger)** - This step performs a key action in the workflow.
3. **Step 2: MySQL (mySql)** - This step performs a key action in the workflow.
4. **Step 3: Cron (cron)** - This step performs a key action in the workflow.

## 💡 AI-Powered Ideas for Improvement
### Explain
This n8n workflow automates the deletion of old execution records from a MySQL database. It can be triggered manually or set to run daily at 7 AM. The MySQL node executes a query to remove records older than 30 days.

### Demonstrate
A business owner could use this workflow to maintain a clean database by automatically deleting outdated records. For example, a SaaS company can ensure their system runs smoothly without unnecessary data clutter, improving performance and compliance.

### Imitate
1. Open n8n and create a new workflow.
2. Add a **Manual Trigger** node.
3. Add a **MySQL** node with the DELETE query to remove old records.
4. Set up a **Cron** node to trigger daily at 7 AM.
5. Connect the nodes to execute the process.

### Practice
Try modifying the MySQL query to delete records older than 15 days instead of 30. Execute the workflow and check the database to see if the modifications work as expected.

### WIIFM
Mastering this workflow allows you to offer valuable database management services to clients, ensuring their systems remain efficient and compliant. This skill can lead to increased demand and higher revenue for your automation business.

## 🔧 Setup Instructions
1. **Connect Credentials:** OpenAI, Google Sheets, Slack, and other nodes must be authenticated.
2. **Customize Core Logic:** Review "On clicking 'execute'" and "Cron" for IDs, table names, and URLs.
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
