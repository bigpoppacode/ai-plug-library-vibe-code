# Schedule Stickynote Automation Scheduled
## 🚀 What It Does
Automates a flow using asana×4, stickyNote×3, if×2.

## 💼 Business Use Case
Use to eliminate manual copy-paste and standardize a recurring business process.

## ⚙️ How It Works
1. **Trigger:** Runs on a **schedule** (e.g., `[object Object]`).
2. **Everyday at 7am** `scheduleTrigger` — rule: "[object Object]"
3. **Sticky Note** `stickyNote` — color: "5", width: "640", height: "240"
4. **Sticky Note1** `stickyNote` — color: "7", width: "160", height: "100"
5. **Sticky Note2** `stickyNote` — color: "7", width: "200", height: "100"
6. **Get user tasks** `asana` — operation: **getAll**
7. **Get task infos** `asana` — operation: **get**
8. **Task is open?** `if` — options: "[object Object]", conditions: "[object Object]"
9. **Due date in the past?** `if` — options: "[object Object]", conditions: "[object Object]", looseTypeValidation: "true"
10. **Clean up task** `asana` — operation: **delete**
11. **Set due date to Today** `asana` — operation: **update**

## 💡 AI-Powered Ideas for Improvement
**Explain:** This n8n workflow automates the management of tasks in Asana. Every day at 7 AM, it retrieves all tasks assigned to a user. It checks if tasks are open and if their due dates have passed. Overdue tasks have their due date updated to today, while completed tasks are deleted, keeping the workspace organized.

**Demonstrate:** A project manager could use this workflow to ensure that team members' task lists are always current, preventing overdue tasks from slipping through the cracks and ensuring completed tasks don't clutter the workspace.

**Imitate:** 
1. Import the workflow into n8n.
2. Connect your Asana account.
3. Adjust the schedule if needed.
4. Set the workspace and user details in the "Get user tasks" node.
5. Test the workflow to ensure it updates tasks as expected.

**Practice:** Create a test project in Asana, assign tasks with varying due dates, and run the workflow. Observe how it updates overdue tasks and deletes completed ones, ensuring it functions correctly.

**WIIFM:** Mastering this workflow can help you offer task management automation services, enhancing team productivity and organization. This expertise can attract clients who need efficient project management, creating opportunities for recurring revenue in your automation business.

## 🔧 Setup Instructions
1. **Connect Credentials:** asanaApi.
2. **Cron/Schedule:** Confirm timezone and cadence; start with a test window (e.g., every 5 minutes) then scale.

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
