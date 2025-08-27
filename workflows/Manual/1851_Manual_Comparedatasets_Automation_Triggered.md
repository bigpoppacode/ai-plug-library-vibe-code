# Manual Comparedatasets Automation Triggered
  ## 🚀 What It Does
  Moves data between apps and a **database/spreadsheet**, with logic and optional AI steps.
  
  ## 💼 Business Use Case
  Use to eliminate manual copy-paste and standardize a recurring business process.
  
  ## ⚙️ How It Works
  1. **Trigger:** This workflow starts with **When clicking "Execute Workflow"**.
  2. **When clicking "Execute Workflow"** `manualTrigger` — configured for its default action.
3. **Orders from 2003 and 2004** `mySql` — operation: **executeQuery**
4. **Orders from 2004 and 2005** `mySql` — operation: **executeQuery**
5. **Change ordercount** `set` — values: "[object Object]", options: "[object Object]"
6. **Compare Datasets** `compareDatasets` — options: "[object Object]", mergeByFields: "[object Object]"
  
  ## 💡 AI-Powered Ideas for Improvement
  ### Explain
This n8n workflow compares order data from two different time periods by querying a MySQL database. It extracts order totals and counts from 2003-2004 and 2004-2005, modifies the order count for the latter period, and then compares these datasets to find differences or similarities based on customer numbers and years.

### Demonstrate
A business could use this workflow to analyze customer purchasing trends over different years to identify growth patterns or shifts in spending behavior, which can inform marketing strategies or inventory decisions.

### Imitate
1. Import the workflow into n8n.
2. Connect your MySQL database with the correct credentials.
3. Update SQL queries to match your database schema.
4. Adjust the comparison fields as needed.
5. Execute the workflow to see the comparison results.

### Practice
Create a small MySQL database with sample order data from different years. Run the workflow to compare the datasets, and adjust the SQL queries to see how changes affect the output.

### WIIFM
Mastering this workflow enables you to offer data analysis services, helping businesses understand customer trends and make data-driven decisions. This skill can enhance your service offerings and boost your income potential in the automation and AI solutions market.
  
  ## 🔧 Setup Instructions
  1. **Connect Credentials:** mySql.
  
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
  