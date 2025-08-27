# Github Stickynote Create Triggered
  ## 🚀 What It Does
  Moves data between apps and a **database/spreadsheet**, with logic and optional AI steps.
  
  ## 💼 Business Use Case
  Use to eliminate manual copy-paste and standardize a recurring business process.
  
  ## ⚙️ How It Works
  1. **Trigger:** This workflow starts with **Trigger on issues**.
  2. **Note** `stickyNote` — content: "## IF & Switch
Depends on what action was taken on an issue in GitHub."
3. **Trigger on issues** `githubTrigger` — owner: "John-n8n", events: "issues", repository: "DemoRepo"
4. **IF** `if` — conditions: "[object Object]"
5. **Create database page** `notion` — resource: **databasePage**
6. **Create custom Notion filters** `function` — functionCode: "const new_items = [];
for (item of $items("Trigger on issues")) {

  // do not process this item if action is created
  if (item.json["body"]["action"] == "opened") {
    continue;…[truncated]"
7. **Find database page** `notion` — resource: **databasePage**, operation: **getAll**
8. **Switch** `switch` — rules: "[object Object]", value1: "={{$node["Trigger on issues"].json["body"]["action"]}}", dataType: "string"
9. **Edit issue** `notion` — resource: **databasePage**, operation: **update**
10. **Delete issue** `notion` — operation: **archive**
11. **Close issue** `notion` — resource: **databasePage**, operation: **update**
12. **Reopen issue** `notion` — resource: **databasePage**, operation: **update**
  
  ## 💡 AI-Powered Ideas for Improvement
  ### Explain
This n8n workflow automates the management of GitHub issues by syncing them with a Notion database. When an issue is created, edited, deleted, closed, or reopened in a GitHub repository, the workflow triggers corresponding actions in Notion. It creates, updates, archives, or reopens database entries based on the issue's status, ensuring that the Notion database remains up-to-date with the latest issue information from GitHub.

### Demonstrate
A software development team can use this workflow to keep track of their project's GitHub issues in Notion. This allows for a centralized view of all issues, making it easier to manage tasks and collaborate effectively across the team, especially for those who prefer using Notion for project management.

### Imitate
1. Import the workflow into n8n.
2. Connect your GitHub and Notion accounts.
3. Customize the Notion database to fit your issue tracking needs.
4. Set up the GitHub trigger for your repository.
5. Test the workflow by creating or updating issues in GitHub to see how they reflect in Notion.

### Practice
Create a test repository on GitHub and a corresponding database in Notion. Use the workflow to track issues by creating, editing, closing, and reopening them in GitHub. Observe how these actions are mirrored in Notion, ensuring synchronization.

### WIIFM
Mastering this workflow can help you offer automated project management solutions to development teams, enhancing their efficiency and collaboration. This can expand your service offerings and attract clients looking for seamless integration between their favorite tools, boosting your income potential in the automation business.
  
  ## 🔧 Setup Instructions
  1. **Connect Credentials:** notionApi, githubApi.
  
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
  