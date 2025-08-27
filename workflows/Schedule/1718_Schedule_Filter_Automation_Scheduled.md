# Schedule Filter Automation Scheduled
## 🚀 What It Does
Automates a flow using stickyNote×5, todoist×2, filter×2.

## 💼 Business Use Case
Great for **content, summarization, triage, or decisioning** where AI adds speed and consistency.

## ⚙️ How It Works
1. **Trigger:** Runs on a **schedule** (e.g., `[object Object]`).
2. **Schedule Trigger** `scheduleTrigger` — rule: "[object Object]"
3. **Sticky Note** `stickyNote` — color: "3", width: "358.6620209059232", height: "256.5853658536585"
4. **Sticky Note1** `stickyNote` — width: "192.77351916376313", height: "80", content: " 👆🏽 Add your projects and priority here"
5. **Sticky Note2** `stickyNote` — width: "192.77351916376313", height: "80", content: " 👇🏽 Add your Todoist credentials here"
6. **Sticky Note3** `stickyNote` — width: "192.77351916376313", height: "80", content: " 👇🏽 Add your Todoist credentials here"
7. **Sticky Note4** `stickyNote` — width: "192.77351916376313", height: "80", content: " 👆🏽 Add your OpenAI credentials here"
8. **Your Projects** `set` — options: "[object Object]", assignments: "[object Object]"
9. **Get inbox tasks** `todoist` — operation: **getAll**
10. **If task is not a subtask** `filter` — options: "[object Object]", conditions: "[object Object]"
11. **Categorize** `openAi` — modelId: "[object Object]", options: "[object Object]", messages: "[object Object]"
12. **If other or ai hallucinates** `filter` — options: "[object Object]", conditions: "[object Object]"
13. **Update priority in todoist** `todoist` — operation: **update**

## 💡 AI-Powered Ideas for Improvement
**Explain**  
This n8n workflow automates the prioritization of tasks in Todoist. It begins by retrieving tasks from the Todoist inbox on a scheduled basis. Tasks are checked to ensure they are not subtasks. The workflow uses OpenAI to categorize each task into a project based on predefined categories. If the categorization is successful and matches a project, it updates the task's priority in Todoist. This ensures tasks are organized and prioritized according to their project relevance.

**Demonstrate**  
A project manager could use this workflow to automatically sort and prioritize tasks based on their project categories, ensuring that high-priority tasks are addressed first, enhancing productivity and task management efficiency.

**Imitate**  
1. Import the workflow into n8n.
2. Connect your Todoist and OpenAI accounts.
3. Set up your project names and priority levels in the workflow.
4. Schedule the workflow to run at your desired frequency.
5. Test with a few tasks to ensure they are categorized and prioritized correctly.

**Practice**  
Create a test Todoist project and add some tasks with varying descriptions. Run the workflow to see how it categorizes and updates task priorities. Modify the project names in the workflow to see how changes affect task categorization.

**WIIFM**  
Mastering this workflow enables you to offer task management automation services to clients, helping them streamline their operations and improve productivity. This can lead to higher client satisfaction, retention, and potential upsells in your automation business.

## 🔧 Setup Instructions
1. **Connect Credentials:** todoistApi, openAiApi.
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
