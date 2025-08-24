# Manual Comparedatasets Automation Triggered

## 🚀 What It Does
This workflow automates a process involving manualTrigger, compareDatasets, mySql.

## 💼 Business Use Case
Use it to automate research, content creation, or data analysis. It saves hours of manual work.

## ⚙️ How It Works
1.  **Trigger:** This workflow starts with a **When clicking "Execute Workflow"** node.
2. **Step 1: When clicking "Execute Workflow" (manualTrigger)** - This step performs a key action in the workflow.
3. **Step 2: Compare Datasets (compareDatasets)** - This step performs a key action in the workflow.
4. **Step 3: Orders from 2003 and 2004 (mySql)** - This step performs a key action in the workflow.
5. **Step 4: Orders from 2004 and 2005 (mySql)** - This step performs a key action in the workflow.
6. **Step 5: Change ordercount (set)** - This step performs a key action in the workflow.

## 💡 AI-Powered Ideas for Improvement
### Explain
This n8n workflow automates the comparison of order datasets from two different time periods in SQL databases. It triggers manually, retrieves order data, compares the datasets, and adjusts the order count based on the comparison results.

### Demonstrate
A business owner could use this workflow to analyze sales trends over different years, identifying growth or declines in customer orders, which informs inventory and marketing strategies, ultimately driving sales performance.

### Imitate
1. Create a new workflow in n8n.
2. Add a **Manual Trigger** node.
3. Add two **MySQL** nodes for fetching order data from different years.
4. Insert a **Compare Datasets** node to analyze the fetched data.
5. Use a **Set** node to update any necessary values based on the comparison.

### Practice
Experiment by modifying the SQL queries in the MySQL nodes to pull data from different years or products. Execute the workflow and observe how changing the data affects the comparison results.

### WIIFM
Mastering this workflow enables you to provide valuable insights into sales data for clients, helping them make informed decisions. This can lead to increased efficiency, better customer targeting, and ultimately higher revenue, positioning you as a sought-after automation consultant.

## 🔧 Setup Instructions
1. **Connect Credentials:** OpenAI, Google Sheets, Slack, and other nodes must be authenticated.
2. **Customize Core Logic:** Review "When clicking "Execute Workflow"" and "Change ordercount" for IDs, table names, and URLs.
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
