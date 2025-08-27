# Schedule Filter Update Scheduled
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
### Explain
This n8n workflow automates task management in Todoist using AI. It starts with a scheduled trigger to retrieve tasks from Todoist. Each task is checked to ensure it's not a subtask. Then, an AI model categorizes the task based on predefined projects. If the AI's categorization is correct, it updates the task's priority in Todoist according to the project's priority settings. If the AI's categorization is uncertain, it handles the task differently, ensuring tasks are prioritized accurately.

### Demonstrate
A consultant might use this workflow to streamline their task management, categorizing tasks into projects like "apartment," "health," or "german" and prioritizing them automatically. This saves time and ensures focus on high-priority tasks.

### Imitate
1. Import the workflow into n8n.
2. Add your Todoist and OpenAI credentials.
3. Define your project names and priorities in the "Your Projects" node.
4. Set a schedule for the "Schedule Trigger" node.
5. Run the workflow to see tasks categorized and prioritized.

### Practice
Create a few test tasks in Todoist. Run the workflow to see how it categorizes and prioritizes them. Adjust project priorities and test different task descriptions to observe changes in prioritization.

### WIIFM
Mastering this workflow helps you or your clients automate task prioritization, enhancing productivity. It can also be offered as a service to clients looking to streamline their task management, increasing your business's value proposition.

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
