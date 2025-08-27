# Code Schedule Automation Scheduled
  ## 🚀 What It Does
  Monitors events, processes them, and **notifies** people/apps (Slack/Email) with structured updates.
  
  ## 💼 Business Use Case
  Use as a **glue/API broker**: receive data, enrich/validate via APIs, and pass to downstream systems.
  
  ## ⚙️ How It Works
  1. **Trigger:** This workflow starts with **When clicking ‘Test workflow’**.
  2. **When clicking ‘Test workflow’** `manualTrigger` — configured for its default action.
3. **Every Friday afternoon** `scheduleTrigger` — rule: "[object Object]"
4. **Get completed tasks via Todoist API** `httpRequest` — method: **POST**, url: `https://api.todoist.com/sync/v9/completed/get_all`
5. **Optional: Ignore specific projects** `code` — jsCode: "// maintain this array with ignored Todoist project_id's
// empty "[]" it when you don't want to ignore any
const ignoredProjects = ['2335544024'];

// Remove ignored projects
cons…[truncated]"
6. **Format the email body** `code` — jsCode: "const items = $input.all();

// Group items by day
const grouped = items.reduce((acc, item) => {
  const date = new Date(item.json.completed_at).toISOString().split('T')[0];
  acc[…[truncated]"
7. **Send Email** `emailSend` — options: "[object Object]", subject: "Todoist Weekly Review", emailFormat: "={{ $('Format the email body').item.json.emailBody }}"
  
  ## 💡 AI-Powered Ideas for Improvement
  **Explain:**  
This n8n workflow automates the process of generating a weekly review email for tasks completed in Todoist. Every Friday afternoon, it retrieves completed tasks from the Todoist API, optionally filters out tasks from specific projects, formats the tasks by grouping them by day, and then sends an email summarizing the completed tasks for that week.

**Demonstrate:**  
A project manager could use this workflow to automatically receive a summary of their team's completed tasks every week. This helps in tracking productivity and identifying areas that may need more focus without manually checking each task.

**Imitate:**  
1. Import the workflow into your n8n instance.  
2. Connect your Todoist and email accounts.  
3. Set the schedule for every Friday afternoon.  
4. Customize the ignored projects array if needed.  
5. Test the workflow to ensure it sends the email correctly.

**Practice:**  
Create a test project in Todoist and complete several tasks. Run the workflow manually to see how it captures and formats the tasks. Modify the array of ignored projects and observe the changes in the email output.

**WIIFM:**  
Mastering this workflow can enhance your ability to deliver valuable automation solutions for productivity tracking. It can help you gain clients interested in optimizing their task management and reporting processes, leading to increased revenue and client satisfaction in your automation business.
  
  ## 🔧 Setup Instructions
  1. **Connect Credentials:** todoistApi.
2. **Notification Targets:** Confirm channel/email IDs and that the bot/app is authorized to post.
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
  