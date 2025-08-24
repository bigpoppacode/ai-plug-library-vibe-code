# Datetime GoogleCalendar Send Scheduled

## 🚀 What It Does
This workflow automates a process involving dateTime, cron, switch.

## 💼 Business Use Case
Use it to automate research, content creation, or data analysis. It saves hours of manual work.

## ⚙️ How It Works
1.  **Trigger:** This workflow starts with a **Previous Month** node.
2. **Step 1: Previous Month (dateTime)** - This step performs a key action in the workflow.
3. **Step 2: 1st of Every month at 8am (cron)** - This step performs a key action in the workflow.
4. **Step 3: Check Summary for Illness or Holiday (switch)** - This step performs a key action in the workflow.
5. **Step 4: Holiday (noOp)** - This step performs a key action in the workflow.
6. **Step 5: Illness (noOp)** - This step performs a key action in the workflow.
7. **Step 6: Filter Holiday Days (set)** - This step performs a key action in the workflow.
8. **Step 7: Filter Illness Days (set)** - This step performs a key action in the workflow.
9. **Step 8: Merge (merge)** - This step performs a key action in the workflow.
10. **Step 9: Get previous months events (googleCalendar)** - This step performs a key action in the workflow.
11. **Step 10: Send email to payroll (emailSend)** - This step performs a key action in the workflow.
12. **Step 11: Combine Holiday Counts (code)** - This step performs a key action in the workflow.
13. **Step 12: Combine Illness Counts (code)** - This step performs a key action in the workflow.
14. **Step 13: Build the message to send (code)** - This step performs a key action in the workflow.

## 💡 AI-Powered Ideas for Improvement
### Explain
This n8n workflow automates the process of collecting and processing employee absence data from the previous month, distinguishing between holidays and illnesses, and sending a summary email to the payroll team.

### Demonstrate
A business owner could use this workflow to streamline payroll processing by automatically gathering absence data, reducing manual tracking and ensuring accurate payroll calculations for employees on leave.

### Imitate
1. Set up a **Cron Trigger** to run monthly.
2. Use a **DateTime Node** to calculate the previous month.
3. Add a **Google Calendar Node** to fetch absence events.
4. Implement **Switch Nodes** to filter holidays and illnesses.
5. Use **Code Nodes** to summarize and format the data.
6. Send the compiled summary via an **Email Node**.

### Practice
Create a simplified version of this workflow that only tracks holidays. Set a weekly trigger to collect data and send a summary email to yourself. Test its functionality by adding dummy holiday events to your calendar.

### WIIFM
Mastering this workflow can save you hours in payroll processing, improve accuracy in absence tracking, and position you as a valuable asset in any organization, making you more attractive to potential clients or employers in automation services.

## 🔧 Setup Instructions
1. **Connect Credentials:** OpenAI, Google Sheets, Slack, and other nodes must be authenticated.
2. **Customize Core Logic:** Review "Previous Month" and "Build the message to send" for IDs, table names, and URLs.
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
