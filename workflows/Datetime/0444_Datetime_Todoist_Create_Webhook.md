# Datetime Todoist Create Webhook
  ## 🚀 What It Does
  Automates a flow using stickyNote×4, if×3, set×3.
  
  ## 💼 Business Use Case
  Use as a **glue/API broker**: receive data, enrich/validate via APIs, and pass to downstream systems.
  
  ## ⚙️ How It Works
  1. **Trigger:** Runs on a **schedule** (e.g., `[object Object]`).
  2. **at 5am** `scheduleTrigger` — rule: "[object Object]"
3. **every 5 min** `scheduleTrigger` — rule: "[object Object]"
4. **Sticky Note3** `stickyNote` — color: "5", width: "390.83694011071975", height: "182.09360845495712"
5. **Sticky Note2** `stickyNote` — color: "7", width: "202", height: "100"
6. **Sticky Note** `stickyNote` — color: "7", width: "202", height: "100"
7. **Sticky Note1** `stickyNote` — color: "7", width: "202", height: "100"
8. **Get snoozed tasks** `todoist` — operation: **getAll**
9. **Get inbox tasks to snooze** `todoist` — operation: **getAll**
10. **if task is not a subtask** `if` — conditions: "[object Object]"
11. **If task has due date** `if` — conditions: "[object Object]"
12. **Get date to unsnooze** `dateTime` — operation: **subtractFromDate**
13. **if after unsnooze date** `if` — conditions: "[object Object]"
14. **Set inbox project id** `set` — fields: "[object Object]", options: "[object Object]"
15. **Set snoozed project id** `set` — fields: "[object Object]", options: "[object Object]"
16. **If not same project** `filter` — conditions: "[object Object]"
17. **Set args to move** `set` — fields: "[object Object]", include: "none", options: "[object Object]"
18. **Generate unique uuid for move** `crypto` — action: "generate", dataPropertyName: "uuid"
19. **Merge all items into a list** `itemLists` — operation: **concatenateItems**
20. **Move the tasks** `httpRequest` — method: **POST**, url: `https://api.todoist.com/sync/v9/sync`
  
  ## 💡 AI-Powered Ideas for Improvement
  **Explain:**  
This workflow automates task management in Todoist. At 5 AM, it checks for tasks in the "snoozed" project and retrieves them. Every 5 minutes, it checks the "inbox" for tasks to snooze. It moves tasks between projects based on their due dates, ensuring tasks are snoozed or returned to the inbox as needed.

**Demonstrate:**  
A consultant managing multiple projects can use this workflow to ensure tasks are organized efficiently. Tasks nearing their due dates can automatically be moved to a priority list, ensuring nothing is missed.

**Imitate:**  
1. Import workflow into n8n.
2. Connect your Todoist account.
3. Create projects named "inbox" and "snoozed".
4. Set project IDs in the respective nodes.
5. Test the workflow to ensure tasks move correctly based on due dates.

**Practice:**  
Create a few tasks in Todoist with varying due dates. Run the workflow and observe how tasks are moved between the "snoozed" and "inbox" projects. Adjust due dates to see different behaviors.

**WIIFM:**  
Mastering this workflow can enhance your task management services, offering clients automated task organization. This added value can attract new clients and increase your income by providing efficient project management solutions.
  
  ## 🔧 Setup Instructions
  1. **Connect Credentials:** todoistApi.
2. **Cron/Schedule:** Confirm timezone and cadence; start with a test window (e.g., every 5 minutes) then scale.
3. **API Contracts:** Validate required headers and 2xx/4xx handling; add retries for 429/5xx.
  
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
  