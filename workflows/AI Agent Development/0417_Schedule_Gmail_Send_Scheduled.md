# Schedule Gmail Send Scheduled

## 🚀 What It Does
This workflow automates a process involving gmail, hubspot, scheduleTrigger.

## 💼 Business Use Case
Use it to automate research, content creation, or data analysis. It saves hours of manual work.

## ⚙️ How It Works
1.  **Trigger:** This workflow is designed to run on a schedule. Configure the interval in the Schedule node.
2. **Step 1: Send outreach email (gmail)** - This step performs a key action in the workflow.
3. **Step 2: Get uncontacted HubSpot contacts (hubspot)** - This step performs a key action in the workflow.
4. **Step 3: Every day at 9 am (scheduleTrigger)** - This step performs a key action in the workflow.
5. **Step 4: Sticky Note2 (stickyNote)** - This step performs a key action in the workflow.
6. **Step 5: Sticky Note (stickyNote)** - This step performs a key action in the workflow.
7. **Step 6: Set keys (set)** - This step performs a key action in the workflow.
8. **Step 7: Sticky Note1 (stickyNote)** - This step performs a key action in the workflow.
9. **Step 8: Record engagement in HubSpot (hubspot)** - This step performs a key action in the workflow.

## 💡 AI-Powered Ideas for Improvement
### Explain
This n8n workflow automates sending outreach emails to uncontacted HubSpot contacts daily at 9 AM. It retrieves contacts without a last contact date, sends personalized emails, and records engagement back in HubSpot, streamlining the outreach process.

### Demonstrate
A marketing consultant can use this workflow to automate follow-ups with potential clients. Instead of manually emailing each contact, the workflow sends tailored outreach messages daily, ensuring consistent engagement without extra effort.

### Imitate
1. Create a new workflow in n8n.
2. Add a **Schedule Trigger** for 9 AM daily.
3. Use the **HubSpot node** to retrieve uncontacted contacts.
4. Set up a **Set node** to customize email content.
5. Add a **Gmail node** to send the emails.
6. Connect a final **HubSpot node** to log engagement.
7. Test the workflow to ensure it runs smoothly.

### Practice
Try modifying the workflow to send a different email every week. Change the email content in the **Set node** and test the workflow to see how it sends different messages based on the day of the week.

### WIIFM
Mastering this workflow allows you to provide value to businesses by automating outreach, saving time, and improving engagement rates. This skill can help you attract clients seeking automation solutions, enhancing your consulting services and income potential.

## 🔧 Setup Instructions
1. **Connect Credentials:** OpenAI, Google Sheets, Slack, and other nodes must be authenticated.
2. **Customize Core Logic:** Review "Send outreach email" and "Record engagement in HubSpot" for IDs, table names, and URLs.
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
