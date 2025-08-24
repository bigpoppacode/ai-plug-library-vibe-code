# Splitout Schedule Import Webhook

## 🚀 What It Does
This workflow automates a process involving scheduleTrigger, httpRequest, filter.

## 💼 Business Use Case
Use it to automate research, content creation, or data analysis. It saves hours of manual work.

## ⚙️ How It Works
1.  **Trigger:** This workflow is designed to run on a schedule. Configure the interval in the Schedule node.
2. **Step 1: Schedule Trigger (scheduleTrigger)** - This step performs a key action in the workflow.
3. **Step 2: Get Deals (httpRequest)** - This step performs a key action in the workflow.
4. **Step 3: Get contact for deals (httpRequest)** - This step performs a key action in the workflow.
5. **Step 4: Unassigned Deals (filter)** - This step performs a key action in the workflow.
6. **Step 5: Split out deals (splitOut)** - This step performs a key action in the workflow.
7. **Step 6: Assign by Region (switch)** - This step performs a key action in the workflow.
8. **Step 7: Assign deal to John (hubspot)** - This step performs a key action in the workflow.
9. **Step 8: Assign to Max (hubspot)** - This step performs a key action in the workflow.
10. **Step 9: Assign to Eeden (hubspot)** - This step performs a key action in the workflow.
11. **Step 10: Assign to Peter (hubspot)** - This step performs a key action in the workflow.
12. **Step 11: Get company of contact(s) (httpRequest)** - This step performs a key action in the workflow.
13. **Step 12: Assign US deals by company size (switch)** - This step performs a key action in the workflow.
14. **Step 13: Sticky Note (stickyNote)** - This step performs a key action in the workflow.
15. **Step 14: Sticky Note1 (stickyNote)** - This step performs a key action in the workflow.
16. **Step 15: Sticky Note2 (stickyNote)** - This step performs a key action in the workflow.
17. **Step 16: Sticky Note3 (stickyNote)** - This step performs a key action in the workflow.
18. **Step 17: Sticky Note4 (stickyNote)** - This step performs a key action in the workflow.
19. **Step 18: Sticky Note5 (stickyNote)** - This step performs a key action in the workflow.
20. **Step 19: Assign deal to Edward (hubspot)** - This step performs a key action in the workflow.
21. **Step 20: Assign to Michael (hubspot)** - This step performs a key action in the workflow.
22. **Step 21: Assign to Suka (hubspot)** - This step performs a key action in the workflow.
23. **Step 22: Assign DE deals by company size (switch)** - This step performs a key action in the workflow.

## 💡 AI-Powered Ideas for Improvement
### Explain
This n8n workflow automates the assignment of unassigned sales deals based on specific criteria like region and company size. It triggers every two days, retrieves deals from HubSpot, filters unassigned ones, and assigns them to sales representatives accordingly.

### Demonstrate
A business owner could use this workflow to automatically assign new sales leads from HubSpot to the appropriate sales reps based on region and company size, ensuring no leads are left unattended and optimizing sales efficiency.

### Imitate
1. Set up a **Schedule Trigger** for a specific interval.
2. Use **HTTP Request** nodes to retrieve deals and contacts from HubSpot.
3. Apply a **Filter** to find unassigned deals.
4. Use a **Switch** node to route deals based on criteria (region, company size).
5. Use **HubSpot nodes** to assign deals to sales reps based on the routing.

### Practice
Try creating a simplified version of this workflow that only retrieves and logs unassigned deals to a Google Sheet. This will help you understand data flow and filtering without the complexity of assignment logic.

### WIIFM
Mastering this workflow can help you streamline lead management processes for clients, making you more attractive as an automation consultant. Efficient lead handling can lead to increased sales and customer satisfaction, driving more business and revenue for you.

## 🔧 Setup Instructions
1. **Connect Credentials:** OpenAI, Google Sheets, Slack, and other nodes must be authenticated.
2. **Customize Core Logic:** Review "Schedule Trigger" and "Assign DE deals by company size" for IDs, table names, and URLs.
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
