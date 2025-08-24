# Schedule Manual Monitor Scheduled

## 🚀 What It Does
This workflow automates a process involving manualTrigger, if, stickyNote.

## 💼 Business Use Case
Use it to automate research, content creation, or data analysis. It saves hours of manual work.

## ⚙️ How It Works
1.  **Trigger:** This workflow starts with a **When clicking ‘Test workflow’** node.
2. **Step 1: When clicking ‘Test workflow’ (manualTrigger)** - This step performs a key action in the workflow.
3. **Step 2: Check if Primary Opportunity Contains Value (if)** - This step performs a key action in the workflow.
4. **Step 3: Check if Opportunity Stage is Meeting Booked or Discovery (if)** - This step performs a key action in the workflow.
5. **Step 4: Sticky Note5 (stickyNote)** - This step performs a key action in the workflow.
6. **Step 5: Sticky Note4 (stickyNote)** - This step performs a key action in the workflow.
7. **Step 6: Format call into correct JSON Object (set)** - This step performs a key action in the workflow.
8. **Step 7: Pass to Gong Call Preprocessor (executeWorkflow)** - This step performs a key action in the workflow.
9. **Step 8: Get Gong Call (gong)** - This step performs a key action in the workflow.
10. **Step 9: Sort by date (sort)** - This step performs a key action in the workflow.
11. **Step 10: Get all custom Salesforce Gong Objects (salesforce)** - This step performs a key action in the workflow.
12. **Step 11: Run Hourly (scheduleTrigger)** - This step performs a key action in the workflow.

## 💡 AI-Powered Ideas for Improvement
### Explain
This n8n workflow automates the process of checking sales opportunities in Salesforce. It triggers manually, verifies if the opportunity has value and is in specific stages, formats call data into JSON, retrieves Gong call details, and processes them hourly.

### Demonstrate
A business owner can use this workflow to automate call analysis from Gong, ensuring only valuable sales calls in specific stages are processed and logged. This saves time and improves data accuracy in sales reporting.

### Imitate
1. Open n8n and create a new workflow.
2. Add a **Manual Trigger** node.
3. Insert an **If Node** to check if the opportunity has value.
4. Add another **If Node** to filter opportunity stages.
5. Use **Set Node** to format call data.
6. Add **Gong Node** to retrieve call details.
7. Schedule the workflow to run hourly with **Schedule Trigger**.

### Practice
Experiment by modifying the workflow to include an additional condition, such as checking for a specific user role in the opportunity. Test the workflow to see how it affects the output and processing flow.

### WIIFM
Mastering this workflow allows you to provide value to clients by automating tedious data checks, enhancing their sales processes, and creating efficient reporting systems—leading to potential revenue growth and client retention.

## 🔧 Setup Instructions
1. **Connect Credentials:** OpenAI, Google Sheets, Slack, and other nodes must be authenticated.
2. **Customize Core Logic:** Review "When clicking ‘Test workflow’" and "Run Hourly" for IDs, table names, and URLs.
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
