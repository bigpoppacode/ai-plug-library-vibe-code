# FunctionItem Zendesk Create Webhook

## 🚀 What It Does
This workflow automates a process involving functionItem, zendesk, set.

## 💼 Business Use Case
Use it to automate research, content creation, or data analysis. It saves hours of manual work.

## ⚙️ How It Works
1.  **Trigger:** This workflow starts with a **Get last execution timestamp** node.
2. **Step 1: Get last execution timestamp (functionItem)** - This step performs a key action in the workflow.
3. **Step 2: Set new last execution timestamp (functionItem)** - This step performs a key action in the workflow.
4. **Step 3: Get tickets created after last execution (zendesk)** - This step performs a key action in the workflow.
5. **Step 4: Get requester information (zendesk)** - This step performs a key action in the workflow.
6. **Step 5: Keep only needed requester information (set)** - This step performs a key action in the workflow.
7. **Step 6: Keep only requester owner email (set)** - This step performs a key action in the workflow.
8. **Step 7: Every 5 minutes (cron)** - This step performs a key action in the workflow.
9. **Step 8: Add requester information to ticket data (merge)** - This step performs a key action in the workflow.
10. **Step 9: Search requester in pipedrive (pipedrive)** - This step performs a key action in the workflow.
11. **Step 10: Get owner information of Pipedrive contact (httpRequest)** - This step performs a key action in the workflow.
12. **Step 11: Get agents and admins (zendesk)** - This step performs a key action in the workflow.
13. **Step 12: Keep only email and Id (set)** - This step performs a key action in the workflow.
14. **Step 13: Add Pipedrive agent data to pipedrive contact information (merge)** - This step performs a key action in the workflow.
15. **Step 14: Add contact owner to ticket data (merge)** - This step performs a key action in the workflow.
16. **Step 15: Contact exists in Pipedrive (if)** - This step performs a key action in the workflow.
17. **Step 16: Change assignee to Pipedrive contact owner (zendesk)** - This step performs a key action in the workflow.
18. **Step 17: Add a note requester not found (zendesk)** - This step performs a key action in the workflow.

## 💡 AI-Powered Ideas for Improvement
### Explain
This n8n workflow automates the process of checking for new Zendesk tickets every five minutes, gathering requester information, and assigning the ticket to the appropriate owner based on their details in Pipedrive. It ensures efficient ticket management and quick responses.

### Demonstrate
A business owner might use this workflow to streamline customer support. For instance, if a new support ticket comes in, the workflow automatically checks who the requester is, finds their Pipedrive contact, and assigns the ticket to the correct agent, speeding up response time.

### Imitate
1. Create a new n8n workflow.
2. Add a Cron node to trigger every 5 minutes.
3. Use a Zendesk node to fetch new tickets.
4. Add a Pipedrive node to find requester details.
5. Merge data and assign tickets based on owner information.
6. Test the workflow to ensure it runs smoothly.

### Practice
Try creating a simplified version of this workflow. Set it to check for new emails in your inbox every 10 minutes, log the sender's details, and send a response acknowledging receipt. Adjust as needed based on your email service.

### WIIFM
Mastering this workflow enhances your automation skills, allowing you to offer valuable services to clients. By automating ticket management, you can help businesses save time and improve customer satisfaction, leading to increased revenue opportunities for your automation business.

## 🔧 Setup Instructions
1. **Connect Credentials:** OpenAI, Google Sheets, Slack, and other nodes must be authenticated.
2. **Customize Core Logic:** Review "Get last execution timestamp" and "Add a note requester not found" for IDs, table names, and URLs.
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
