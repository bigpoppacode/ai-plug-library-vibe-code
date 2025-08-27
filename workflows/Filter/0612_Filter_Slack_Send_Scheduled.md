# Filter Slack Send Scheduled
  ## 🚀 What It Does
  Monitors events, processes them, and **notifies** people/apps (Slack/Email) with structured updates.
  
  ## 💼 Business Use Case
  Use to eliminate manual copy-paste and standardize a recurring business process.
  
  ## ⚙️ How It Works
  1. **Trigger:** This workflow starts with **Schedule Mon - Friday @ 09:00am**.
  2. **Schedule Mon - Friday @ 09:00am** `cron` — triggerTimes: "[object Object]"
3. **Sticky Note1** `stickyNote` — color: "7", width: "232.28640473083397", height: "395.93315440190497"
4. **Sticky Note2** `stickyNote` — color: "7", width: "377.1025213664834", height: "397.4539493179217"
5. **Sticky Note4** `stickyNote` — width: "400.70229197070614", height: "397.31352154531925", content: "## Get To Dos from Tasks Database and Filter incomplete tasks only
Retrieves all tasks from the specified Notion database and filters out tasks that are marked as "Done," ensuring …[truncated]"
6. **Sticky Note6** `stickyNote` — color: "3", width: "240.32164378964495", height: "398.1826056622561"
7. **Sticky Note7** `stickyNote` — width: "267.7344316658903", height: "398.29835161802384", content: "## Switch for Notion Users Emails
Determines which user (User 1 or User 2) is assigned the task in Notion by comparing email addresses, routing the workflow accordingly.
"
8. **Sticky Note9** `stickyNote` — color: "3", width: "455.87875185735516", height: "592.983420807127"
9. **Sticky Note11** `stickyNote` — color: "6", width: "396.6384066163515", height: "282.5799404564392"
10. **Sticky Note14** `stickyNote` — width: "777.0408639013781", height: "216.76250654583106", content: "## Setup
1. **`Connect Notion`**: You will need to connect your Notion account and specify the database containing tasks.
2. **`Connect Slack`**: Authenticate with Slack using OAut…[truncated]"
11. **Sticky Note15** `stickyNote` — color: "7", width: "777.0408639013781", height: "179.2285042683488"
12. **Sticky Note10** `stickyNote` — color: "7", width: "366.75796434038665", height: "379.6332969008185"
13. **Sticky Note12** `stickyNote` — color: "7", width: "809.515353297114", height: "999.58820121335"
14. **Sticky Note** `stickyNote` — color: "4", width: "314.0627775112129", height: "133.34123489274947"
15. **Sticky Note3** `stickyNote` — color: "7", width: "231.9017050322621", height: "132.26101263924207"
16. **Set Notion User Emails** `set` — options: "[object Object]", assignments: "[object Object]"
17. **Set Slack User Full Name** `set` — options: "[object Object]", assignments: "[object Object]"
18. **Get To Dos from Tasks Database** `notion` — resource: **databasePage**, operation: **getAll**
19. **Filter incomplete tasks only** `filter` — conditions: "[object Object]"
20. **Get All Slack Users (Darryn)** `slack` — resource: **user**, operation: **getAll**
21. **Switch for Notion Users Emails** `switch` — rules: "[object Object]", options: "[object Object]"
22. **Filter Slack User 1 Full Name** `filter` — options: "[object Object]", conditions: "[object Object]"
23. **Filter Slack User 2 Full Name** `filter` — options: "[object Object]", conditions: "[object Object]"
24. **Send a Direct Message to User 1** `slack` — channel/topic: `={{ $json.id }}`
25. **Send a Direct Message to User 2** `slack` — channel/topic: `={{ $json.id }}`
  
  ## 💡 AI-Powered Ideas for Improvement
  - **Explain:** This n8n workflow automates daily task reminders. It triggers every weekday at 9:00 AM, retrieves tasks from a Notion database, filters out completed ones, identifies the user assigned to each task, and sends personalized Slack reminders to the respective users about their pending tasks.

- **Demonstrate:** A project manager could use this workflow to ensure team members are reminded of their tasks at the start of each day, improving productivity and ensuring nothing is overlooked.

- **Imitate:** Import the workflow into n8n, connect your Notion and Slack accounts, set up your Notion database with tasks, map emails and names in the workflow, and adjust the schedule if needed. Test to verify messages are sent correctly.

- **Practice:** Create a Notion database with a few tasks and run the workflow. Observe how it sends reminders for incomplete tasks. Modify task statuses and rerun to see changes in reminders.

- **WIIFM:** Mastering this workflow enables you to offer task automation services, enhancing team productivity and organization for clients. This can lead to increased client satisfaction and potential upsells in your automation service business.
  
  ## 🔧 Setup Instructions
  1. **Connect Credentials:** slackOAuth2Api, notionApi.
2. **Cron/Schedule:** Confirm timezone and cadence; start with a test window (e.g., every 5 minutes) then scale.
3. **Notification Targets:** Confirm channel/email IDs and that the bot/app is authorized to post.
  
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
  