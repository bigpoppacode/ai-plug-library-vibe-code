# Manual GoogleSheets Create Triggered

## 🚀 What It Does
This workflow automates a process involving manualTrigger, googleSheets, salesforce.

## 💼 Business Use Case
Use it to automate research, content creation, or data analysis. It saves hours of manual work.

## ⚙️ How It Works
1.  **Trigger:** This workflow starts with a **On clicking 'execute'** node.
2. **Step 1: On clicking 'execute' (manualTrigger)** - This step performs a key action in the workflow.
3. **Step 2: Read Google Sheet (googleSheets)** - This step performs a key action in the workflow.
4. **Step 3: Search Salesforce accounts (salesforce)** - This step performs a key action in the workflow.
5. **Step 4: Keep new companies (merge)** - This step performs a key action in the workflow.
6. **Step 5: Merge existing account data (merge)** - This step performs a key action in the workflow.
7. **Step 6: Account found? (if)** - This step performs a key action in the workflow.
8. **Step 7: Remove duplicate companies (itemLists)** - This step performs a key action in the workflow.
9. **Step 8: Set Account ID for existing accounts (renameKeys)** - This step performs a key action in the workflow.
10. **Step 9: Retrieve new company contacts (merge)** - This step performs a key action in the workflow.
11. **Step 10: Set new account name (set)** - This step performs a key action in the workflow.
12. **Step 11: Create Salesforce account (salesforce)** - This step performs a key action in the workflow.
13. **Step 12: Create Salesforce contact (salesforce)** - This step performs a key action in the workflow.

## 💡 AI-Powered Ideas for Improvement
### Explain
This n8n workflow automates the process of syncing company data from a Google Sheet to Salesforce. It checks for existing accounts, merges new and existing data, and creates or updates accounts and contacts in Salesforce, streamlining data management.

### Demonstrate
A business owner receives new client information in a Google Sheet. Instead of manually entering or updating Salesforce, they use this workflow to automatically sync the data, saving time and reducing errors in account management.

### Imitate
1. Import the workflow into n8n.
2. Set up your Google Sheets and Salesforce accounts in n8n.
3. Modify the Google Sheet ID and Salesforce query parameters to match your data.
4. Execute the workflow and verify that new accounts and contacts are created or updated in Salesforce.

### Practice
Create a test Google Sheet with sample company data. Run the workflow and check Salesforce to see if the data syncs correctly. Modify a few entries in the Google Sheet and re-run the workflow to observe updates.

### WIIFM
Mastering this workflow allows you to streamline data management for clients, reducing manual input and errors. This competence can help you attract customers seeking automation solutions, boosting your income as part of an AI automation business.

## 🔧 Setup Instructions
1. **Connect Credentials:** OpenAI, Google Sheets, Slack, and other nodes must be authenticated.
2. **Customize Core Logic:** Review "On clicking 'execute'" and "Create Salesforce contact" for IDs, table names, and URLs.
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
