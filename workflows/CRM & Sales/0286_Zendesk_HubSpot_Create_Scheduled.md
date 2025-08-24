# Zendesk Hubspot Create Scheduled

## 🚀 What It Does
This workflow automates a process involving if, zendesk, set.

## 💼 Business Use Case
Use it to automate research, content creation, or data analysis. It saves hours of manual work.

## ⚙️ How It Works
1.  **Trigger:** This workflow starts with a **Ticket Exists** node.
2. **Step 1: Ticket Exists (if)** - This step performs a key action in the workflow.
3. **Step 2: Get user data of Ticket requester (zendesk)** - This step performs a key action in the workflow.
4. **Step 3: Only keep needed data (set)** - This step performs a key action in the workflow.
5. **Step 4: Add user data (merge)** - This step performs a key action in the workflow.
6. **Step 5: Update existing ticket (hubspot)** - This step performs a key action in the workflow.
7. **Step 6: Update Zendesk ticket with External Id (zendesk)** - This step performs a key action in the workflow.
8. **Step 7: Get last execution timestamp (functionItem)** - This step performs a key action in the workflow.
9. **Step 8: Get tickets updated after last execution (zendesk)** - This step performs a key action in the workflow.
10. **Step 9: Set new last execution timestamp (functionItem)** - This step performs a key action in the workflow.
11. **Step 10: Every 5 minutes (cron)** - This step performs a key action in the workflow.
12. **Step 11: Create new Ticket (hubspot)** - This step performs a key action in the workflow.
13. **Step 12: Update External Id in Zendesk for contact (zendesk)** - This step performs a key action in the workflow.
14. **Step 13: Create or update contact (hubspot)** - This step performs a key action in the workflow.

## 💡 AI-Powered Ideas for Improvement
### Explain
This n8n workflow automates the management of customer support tickets. It checks for existing tickets, fetches user data, updates ticket details in HubSpot, and synchronizes information between Zendesk and HubSpot every five minutes.

### Demonstrate
A business owner could use this workflow to streamline support ticket management. For instance, when a customer submits a ticket, their data is automatically updated in HubSpot, ensuring the support team has all necessary information without manual entry.

### Imitate
1. Import the workflow into n8n.
2. Connect your Zendesk and HubSpot accounts.
3. Adjust the ticket and user data fields as needed.
4. Set up the cron trigger for every 5 minutes.
5. Test by creating a ticket in Zendesk and verifying updates in HubSpot.

### Practice
Create a simple version of this workflow that only checks for new tickets and fetches user data. Test it by manually submitting a ticket in Zendesk and checking if the user data appears correctly in the workflow output.

### WIIFM
Mastering this workflow allows you to offer valuable automation services to businesses, saving them time and reducing errors in ticket management. This skill can help you attract clients and generate income by streamlining their customer support processes.

## 🔧 Setup Instructions
1. **Connect Credentials:** OpenAI, Google Sheets, Slack, and other nodes must be authenticated.
2. **Customize Core Logic:** Review "Ticket Exists" and "Create or update contact" for IDs, table names, and URLs.
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
