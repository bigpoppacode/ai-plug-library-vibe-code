# Jira Stickynote Sync Triggered
  ## 🚀 What It Does
  Moves data between apps and a **database/spreadsheet**, with logic and optional AI steps.
  
  ## 💼 Business Use Case
  Use to eliminate manual copy-paste and standardize a recurring business process.
  
  ## ⚙️ How It Works
  1. **Trigger:** This workflow starts with **On issues created/updated/deleted**.
  2. **Note** `stickyNote` — width: "232.65822784810126", height: "137.9746835443038", content: "### `IF` & `Switch` nodes
These conditional nodes (`IF` and `Switch`) determine which Notion [**CRUD**](https://www.sumologic.com/glossary/crud/) operations will be performed."
3. **On issues created/updated/deleted** `jiraTrigger` — events: "jira:issue_created,jira:issue_deleted,jira:issue_updated", additionalFields: "[object Object]"
4. **Lookup table** `code` — jsCode: "/* Lookup table for the statuses in Jira. You can find the status IDs by
   following the instructions provided at this link:
   https://community.atlassian.com/t5/Jira-Service-Man…[truncated]"
5. **IF** `if` — conditions: "[object Object]"
6. **Create database page** `notion` — resource: **databasePage**
7. **Create custom Notion filters** `code` — jsCode: "const new_items = [];
for (item of $items("On issues created/updated/deleted")) {

  // do not process this item if action is created
  if (item.json["webhookEvent"] == "jira:issue…[truncated]"
8. **Find database page** `notion` — resource: **databasePage**, operation: **getAll**
9. **Switch** `switch` — rules: "[object Object]", value1: "={{$node["On issues created/updated/deleted"].json["webhookEvent"]}}", dataType: "string"
10. **Update issue** `notion` — resource: **databasePage**, operation: **update**
11. **Delete issue** `notion` — operation: **archive**
  
  ## 💡 AI-Powered Ideas for Improvement
  **Explain**: This n8n workflow syncs Jira issues with a Notion database. It listens for issue events in Jira, such as creation, updates, or deletions. Based on the type of event, it performs different actions in Notion, like creating, updating, or archiving database pages. This ensures that the Notion database reflects the current state of Jira issues.

**Demonstrate**: A project manager could use this workflow to ensure their Notion-based project documentation stays up-to-date with the team's Jira issue tracking, enhancing collaboration and transparency.

**Imitate**: 
1. Import the workflow into n8n.
2. Connect your Jira and Notion accounts.
3. Adjust the Notion database ID and properties to align with your setup.
4. Activate the workflow to start syncing Jira issues to Notion.

**Practice**: Create a test Jira project and Notion database. Trigger different issue events (create, update, delete) in Jira and observe how the corresponding entries in Notion are updated or archived.

**WIIFM**: Mastering this workflow enhances your ability to offer integrated project management solutions, ensuring seamless data synchronization between tools. This can attract clients looking for efficient cross-platform integrations, boosting your automation business.
  
  ## 🔧 Setup Instructions
  1. **Connect Credentials:** notionApi, jiraSoftwareCloudApi.
  
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
  