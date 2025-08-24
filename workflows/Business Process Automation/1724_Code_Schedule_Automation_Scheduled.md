# Code Schedule Automation Scheduled

## 🚀 What It Does
This workflow automates a process involving manualTrigger, httpRequest, code.

## 💼 Business Use Case
Use it to automate research, content creation, or data analysis. It saves hours of manual work.

## ⚙️ How It Works
1.  **Trigger:** This workflow starts with a **When clicking ‘Test workflow’** node.
2. **Step 1: When clicking ‘Test workflow’ (manualTrigger)** - This step performs a key action in the workflow.
3. **Step 2: Get completed tasks via Todoist API (httpRequest)** - This step performs a key action in the workflow.
4. **Step 3: Optional: Ignore specific projects (code)** - This step performs a key action in the workflow.
5. **Step 4: Format the email body (code)** - This step performs a key action in the workflow.
6. **Step 5: Every Friday afternoon (scheduleTrigger)** - This step performs a key action in the workflow.
7. **Step 6: Send Email (emailSend)** - This step performs a key action in the workflow.

## 💡 AI-Powered Ideas for Improvement
### Explain
This n8n workflow automates a weekly review of completed tasks from Todoist. It retrieves tasks, formats them into an email, and schedules the email to be sent every Friday, helping users stay organized and informed without manual effort.

### Demonstrate
A business owner might use this workflow to automatically summarize weekly accomplishments for their team. Instead of manually compiling task lists, the workflow sends a formatted email with completed tasks, saving time and improving communication.

### Imitate
1. Create a new n8n workflow.
2. Add a **Schedule Trigger** for Fridays at 3 PM.
3. Use the **HTTP Request** node to fetch completed tasks from Todoist.
4. Add a **Code** node to filter tasks if needed.
5. Format the results in another **Code** node.
6. Use the **Email Send** node to send the formatted email.

### Practice
Try modifying the filter in the "Ignore specific projects" step to exclude different projects from your Todoist tasks. Test the workflow by running it manually to see how it affects the email output.

### WIIFM
Mastering this workflow allows you to automate reporting tasks, which can free up time for more strategic work, enhancing productivity. As a consultant, you can offer this as a service to clients, helping them streamline their operations and improve efficiency.

## 🔧 Setup Instructions
1. **Connect Credentials:** OpenAI, Google Sheets, Slack, and other nodes must be authenticated.
2. **Customize Core Logic:** Review "When clicking ‘Test workflow’" and "Send Email" for IDs, table names, and URLs.
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
