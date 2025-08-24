# Calendly Filter Create Triggered

## 🚀 What It Does
This workflow automates a process involving if, stickyNote, clearbit.

## 💼 Business Use Case
Use it to automate research, content creation, or data analysis. It saves hours of manual work.

## ⚙️ How It Works
1.  **Trigger:** This workflow starts with a **Calendly Trigger** node.
2. **Step 1: if company does not exist on CRM (if)** - This step performs a key action in the workflow.
3. **Step 2: Sticky Note (stickyNote)** - This step performs a key action in the workflow.
4. **Step 3: Sticky Note1 (stickyNote)** - This step performs a key action in the workflow.
5. **Step 4: Sticky Note2 (stickyNote)** - This step performs a key action in the workflow.
6. **Step 5: Sticky Note3 (stickyNote)** - This step performs a key action in the workflow.
7. **Step 6: Enrich company (clearbit)** - This step performs a key action in the workflow.
8. **Step 7: Create company (hubspot)** - This step performs a key action in the workflow.
9. **Step 8: Upsert contact (hubspot)** - This step performs a key action in the workflow.
10. **Step 9: Update company (hubspot)** - This step performs a key action in the workflow.
11. **Step 10: Contact not found, do nothing (noOp)** - This step performs a key action in the workflow.
12. **Step 11: Enrich email (clearbit)** - This step performs a key action in the workflow.
13. **Step 12: Filter out personal emails (filter)** - This step performs a key action in the workflow.
14. **Step 13: Search company (hubspot)** - This step performs a key action in the workflow.
15. **Step 14: Upsert lead (hubspot)** - This step performs a key action in the workflow.
16. **Step 15: If person has a company (if)** - This step performs a key action in the workflow.
17. **Step 16: Calendly Trigger (calendlyTrigger)** - This step performs a key action in the workflow.

## 💡 AI-Powered Ideas for Improvement
### Explain
This n8n workflow automates the process of managing company and contact data. It checks if a company exists in the CRM, enriches company and email data, creates or updates records in HubSpot, and filters personal emails, streamlining lead management.

### Demonstrate
A business owner could use this workflow to automate lead management. When a new meeting is booked via Calendly, the workflow checks if the company's data exists in HubSpot, enriches it, and updates contact details, saving time and ensuring accurate records.

### Imitate
1. Create a new workflow in n8n.
2. Add a **Calendly Trigger** node to start the workflow.
3. Add an **If** node to check if the company exists in HubSpot.
4. Use **Clearbit** to enrich company data if it doesn't exist.
5. Add **HubSpot** nodes to create or update company and contact info.
6. Test the workflow by booking a meeting in Calendly.

### Practice
Try setting up the workflow to enrich and create a company record using fake data. Test by simulating a Calendly booking and ensuring the data flows correctly through each node. Observe how it handles existing vs. non-existing companies.

### WIIFM
Mastering this workflow helps you automate lead management processes, making your services more efficient and appealing. This expertise can attract clients seeking automation solutions, increasing your income potential in the growing AI automation market.

## 🔧 Setup Instructions
1. **Connect Credentials:** OpenAI, Google Sheets, Slack, and other nodes must be authenticated.
2. **Customize Core Logic:** Review "if company does not exist on CRM" and "Calendly Trigger" for IDs, table names, and URLs.
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
