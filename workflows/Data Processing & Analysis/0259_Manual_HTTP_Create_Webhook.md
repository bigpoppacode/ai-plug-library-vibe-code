# Manual HTTP Create Webhook

## 🚀 What It Does
This workflow automates a process involving manualTrigger, salesforce, merge.

## 💼 Business Use Case
Use it to automate research, content creation, or data analysis. It saves hours of manual work.

## ⚙️ How It Works
1.  **Trigger:** This workflow starts with a **On clicking 'execute'** node.
2. **Step 1: On clicking 'execute' (manualTrigger)** - This step performs a key action in the workflow.
3. **Step 2: Search Salesforce accounts (salesforce)** - This step performs a key action in the workflow.
4. **Step 3: Keep new companies (merge)** - This step performs a key action in the workflow.
5. **Step 4: Merge existing account data (merge)** - This step performs a key action in the workflow.
6. **Step 5: Account found? (if)** - This step performs a key action in the workflow.
7. **Step 6: Remove duplicate companies (itemLists)** - This step performs a key action in the workflow.
8. **Step 7: Set Account ID for existing accounts (renameKeys)** - This step performs a key action in the workflow.
9. **Step 8: Retrieve new company contacts (merge)** - This step performs a key action in the workflow.
10. **Step 9: Set new account name (set)** - This step performs a key action in the workflow.
11. **Step 10: Create Salesforce account (salesforce)** - This step performs a key action in the workflow.
12. **Step 11: Create Salesforce contact (salesforce)** - This step performs a key action in the workflow.
13. **Step 12: Note (stickyNote)** - This step performs a key action in the workflow.
14. **Step 13: Download file (httpRequest)** - This step performs a key action in the workflow.
15. **Step 14: Spreadsheet File (spreadsheetFile)** - This step performs a key action in the workflow.

## 💡 AI-Powered Ideas for Improvement
**Explain:** This n8n workflow automates the process of managing Salesforce accounts by checking for duplicates, merging data, and creating new accounts and contacts from a spreadsheet. It starts with a manual trigger and ends with data stored in Salesforce.

**Demonstrate:** A consultant could use this workflow to streamline client onboarding by automatically importing new company data from a spreadsheet into Salesforce, ensuring no duplicates exist and saving time on manual data entry.

**Imitate:** To adapt this workflow, 1) Set up a manual trigger in n8n. 2) Use the HTTP Request node to fetch a spreadsheet. 3) Add Salesforce nodes to create or update accounts and contacts. 4) Test the workflow and refine data mappings as needed.

**Practice:** Try creating a smaller version of this workflow that only checks for duplicates in a local spreadsheet and logs the results in a Google Sheet. This will help you understand data flow and merging processes.

**WIIFM:** Mastering this workflow enables you to offer valuable automation services, improving client data management, saving time, and increasing efficiency—essential for attracting customers and generating income in an AI automation business.

## 🔧 Setup Instructions
1. **Connect Credentials:** OpenAI, Google Sheets, Slack, and other nodes must be authenticated.
2. **Customize Core Logic:** Review "On clicking 'execute'" and "Spreadsheet File" for IDs, table names, and URLs.
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
