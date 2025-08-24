# Filter Form Send Triggered

## 🚀 What It Does
This workflow automates a process involving formTrigger, clearbit, if.

## 💼 Business Use Case
Use it to automate research, content creation, or data analysis. It saves hours of manual work.

## ⚙️ How It Works
1.  **Trigger:** This workflow starts with a **n8n Form Trigger** node.
2. **Step 1: n8n Form Trigger (formTrigger)** - This step performs a key action in the workflow.
3. **Step 2: Clearbit (clearbit)** - This step performs a key action in the workflow.
4. **Step 3: Enrich Company (clearbit)** - This step performs a key action in the workflow.
5. **Step 4: If B2B and > 499 employees (if)** - This step performs a key action in the workflow.
6. **Step 5: Send Email (gmail)** - This step performs a key action in the workflow.
7. **Step 6: Sticky Note (stickyNote)** - This step performs a key action in the workflow.
8. **Step 7: Sticky Note1 (stickyNote)** - This step performs a key action in the workflow.
9. **Step 8: Sticky Note2 (stickyNote)** - This step performs a key action in the workflow.
10. **Step 9: Map email field (set)** - This step performs a key action in the workflow.
11. **Step 10: Sticky Note3 (stickyNote)** - This step performs a key action in the workflow.
12. **Step 11: Sticky Note4 (stickyNote)** - This step performs a key action in the workflow.
13. **Step 12: Submission does not match criteria, don't do anything (noOp)** - This step performs a key action in the workflow.
14. **Step 13: Filter out personal emails (filter)** - This step performs a key action in the workflow.

## 💡 AI-Powered Ideas for Improvement
### Explain
This n8n workflow automates the process of receiving form submissions, enriching the data using Clearbit, filtering based on company size and type, and then sending personalized emails to B2B leads while logging the interactions.

### Demonstrate
A marketing consultant could use this workflow to streamline lead generation. When potential clients fill out a contact form, the workflow checks if they meet specific criteria (B2B with over 499 employees) and sends tailored emails, saving time on manual follow-ups.

### Imitate
1. Create a new workflow in n8n.
2. Add a Form Trigger node to capture submissions.
3. Use Clearbit nodes to enrich the data with company details.
4. Set an If node to filter B2B leads with over 499 employees.
5. Add a Gmail node to send personalized emails to qualified leads.
6. Test the workflow and activate it.

### Practice
Try modifying the workflow by adding a new condition in the If node, such as filtering leads based on industry type or employee range. Test it by submitting different form responses to see how it impacts the email sending.

### WIIFM
Mastering this workflow can help you create valuable automated systems for clients, allowing you to offer high-demand services like lead qualification and follow-up management, ultimately increasing your income as an automation consultant.

## 🔧 Setup Instructions
1. **Connect Credentials:** OpenAI, Google Sheets, Slack, and other nodes must be authenticated.
2. **Customize Core Logic:** Review "n8n Form Trigger" and "Filter out personal emails" for IDs, table names, and URLs.
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
