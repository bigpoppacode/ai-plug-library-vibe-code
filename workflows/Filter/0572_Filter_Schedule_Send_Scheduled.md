# Filter Schedule Send Scheduled
  ## 🚀 What It Does
  Monitors events, processes them, and **notifies** people/apps (Slack/Email) with structured updates.
  
  ## 💼 Business Use Case
  Great for **content, summarization, triage, or decisioning** where AI adds speed and consistency.
  
  ## ⚙️ How It Works
  1. **Trigger:** This workflow starts with **When clicking ‘Test workflow’**.
  2. **When clicking ‘Test workflow’** `manualTrigger` — configured for its default action.
3. **Schedule Trigger** `scheduleTrigger` — rule: "[object Object]"
4. **Sticky Note** `stickyNote` — color: "4", width: "265.6985239367243", height: "702.0052321200026"
5. **Sticky Note1** `stickyNote` — width: "648.1928627806343", height: "710.0046767294216", content: "## Fetch, filter and sort notion tasks
Currently tasks are filtered by having a deadline and sorted by this"
6. **Sticky Note2** `stickyNote` — width: "442.45022302855995", height: "707.700156943336", content: "## Generate HTML template per task
Generate a template for each task. It displays the headline and some prperties.
You can adjust the template here to show more or less information…[truncated]"
7. **Sticky Note3** `stickyNote` — width: "1185.3702378922917", height: "707.7001569433354", content: "## Create groups of tasks to "overdue" and "due to"
This is used to group the tasks and display them accordingly in the final html email template."
8. **Sticky Note4** `stickyNote` — width: "314.11124235866913", height: "705.8925656662948", content: "## Create html email template
Here the whole html email template is set up.
Styles are applied and some sugar around list of tasks are shown.
You may change this to your design and…[truncated]"
9. **Sticky Note5** `stickyNote` — color: "4", width: "355.68584173060526", height: "704.0849743892543"
10. **Sticky Note6** `stickyNote` — color: "6", width: "539.3442720010472", height: "199.46339277184228"
11. **Sticky Note7** `stickyNote` — width: "284.11715106246396", height: "706.9018085580076", content: "## Set workflow variables
Adjust this node to your needs!"
12. **Sticky Note8** `stickyNote` — color: "3", width: "296.4350404695249", height: "463.2108881217612"
13. **Set Workflow vars** `set` — options: "[object Object]", assignments: "[object Object]"
14. **Notion** `notion` — resource: **databasePage**, operation: **getAll**
15. **Filter for deadline** `filter` — options: "[object Object]", conditions: "[object Object]"
16. **Sort by closest deadline** `sort` — options: "[object Object]", sortFieldsUi: "[object Object]"
17. **HTML for Task** `html` — html: "<div class="task">
  <a href="{{ $json.url }}">
    <h3>{{ $json.name }}"</h3>
  </a>
  <p>
    <strong>Deadline: </strong>{{ $json.property_deadline.start.toDateTime().format('dd.…[truncated]"
18. **Merge** `merge` — mode: "combine", options: "[object Object]", combineBy: "combineByPosition"
19. **If deadline is overdue** `if` — options: "[object Object]", conditions: "[object Object]"
20. **Aggregate overdue tasks** `aggregate` — options: "[object Object]", aggregate: "aggregateAllItemData", destinationFieldName: "overdue"
21. **Aggregate due to tasks** `aggregate` — options: "[object Object]", aggregate: "aggregateAllItemData", destinationFieldName: "due_to"
22. **HTML overdue List** `html` — html: "<h2>Tasks which are already <u>overdue</u></h2>
{{ $if($json.overdue.length > 0, $json.overdue.pluck('html'), 'No overdue tasks. Great!') }}"
23. **HTML due to List** `html` — html: "<h2>Tasks with an <u>upcoming</u> deadline</h2>
{{ $json.due_to.pluck('html') }}"
24. **Merge groups** `merge` — configured for its default action.
25. **Aggregate** `aggregate` — options: "[object Object]", aggregate: "aggregateAllItemData", destinationFieldName: "html_groups"
26. **HTML** `html` — html: "<!DOCTYPE html>

<html>
<head>
  <meta charset="UTF-8" />
  <title>Weekly Update about Notion Tasks</title>
  <meta name="color-scheme" content="only">
  <style>
    body {font-fam…[truncated]"
27. **Send Email** `emailSend` — html: "={{ $json.html }}", options: "[object Object]", subject: "Weekly Update about Notion Tasks"
28. **Pushover** `pushover` — message: "You received a weekly update about your Notion Tasks. Check your mails!", userKey: "={{ $('Set Workflow vars').item.json.pushover_user_key }}", priority: "1"
  
  ## 💡 AI-Powered Ideas for Improvement
  - **Explain:** This n8n workflow automates the process of managing tasks in Notion. It fetches tasks, filters them by deadline, sorts them, and groups them into overdue and upcoming categories. The tasks are then formatted into an HTML email template and sent as a weekly update, along with a push notification.

- **Demonstrate:** A project manager can use this workflow to automatically receive a weekly email summary of tasks in Notion, categorized by overdue and upcoming deadlines, ensuring they stay on top of project timelines.

- **Imitate:** 1. Import the workflow into n8n. 2. Connect your Notion account. 3. Set up your email and Pushover credentials. 4. Customize the Notion filters and email template as needed. 5. Schedule the workflow to run weekly.

- **Practice:** Create a small Notion database with a few tasks, each with different deadlines. Run the workflow to see how it categorizes and emails you the tasks. Experiment by changing deadlines and observe the workflow's adaptability.

- **WIIFM:** Mastering this workflow enables you to offer automated task management and reporting solutions to clients, enhancing project management efficiency. This skill can attract clients looking for streamlined operations, potentially increasing your income as an automation consultant.
  
  ## 🔧 Setup Instructions
  1. **Connect Credentials:** notionApi, smtp, pushoverApi.
2. **Notification Targets:** Confirm channel/email IDs and that the bot/app is authorized to post.
  
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
  