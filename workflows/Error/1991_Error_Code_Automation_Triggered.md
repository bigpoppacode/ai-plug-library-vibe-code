# Error Code Automation Triggered
  ## 🚀 What It Does
  Monitors events, processes them, and **notifies** people/apps (Slack/Email) with structured updates.
  
  ## 💼 Business Use Case
  Great for **content, summarization, triage, or decisioning** where AI adds speed and consistency.
  
  ## ⚙️ How It Works
  1. **Trigger:** This workflow starts with **Error Trigger**.
  2. **Error Trigger** `errorTrigger` — configured for its default action.
3. **Code** `code` — configured for its default action.
4. **Sticky Note** `stickyNote` — color: "5", width: "220", height: "380"
5. **Sticky Note1** `stickyNote` — color: "4", width: "1060", height: "820"
6. **Sticky Note2** `stickyNote` — height: "380", content: "## Gmail credentials
Setup your Gmail account credentials here."
7. **Config** `set` — options: "[object Object]", assignments: "[object Object]", includeOtherFields: "true"
8. **Constants** `set` — options: "[object Object]", assignments: "[object Object]", includeOtherFields: "true"
9. **If** `if` — options: "[object Object]", conditions: "[object Object]"
10. **HTML for Execution Error** `html` — html: "<h2>Execution details</h2>
<p>See execution details at <a href="{{ $json.execution.url }}">{{ $json.execution.url }}</a></p>
<p>Execution id: {{ $json.execution.id }}</p>
<p>retryO…[truncated]"
11. **HTML for Trigger Error** `html` — html: "<h2>Trigger failure details</h2>
<p>A trigger on main workflow has thrown an error.</p>
<h3>Mode</h3>
<p>{{ $json.trigger.mode }}</p>
<h3>Error</h3>
<p>Message: {{ $json.trigger.er…[truncated]"
12. **KeepEitherOfHTMLs** `merge` — mode: "combine", options: "[object Object]", combineBy: "combineByPosition"
13. **Merge** `merge` — mode: "combine", options: "[object Object]", combineBy: "combineByPosition"
14. **Gmail** `gmail` — sendTo: "={{ $json.config.emailing.sendTo }}", message: "=<p>Workflow <a href="{{ $json.workflow.url }}">{{ $json.workflow.id }}</a> ({{ $json.workflow.name }})<br/>
has triggered the error handling workflow <a href="{{ $json.errorHandli…[truncated]", options: "[object Object]"
  
  ## 💡 AI-Powered Ideas for Improvement
  ### Explain
This n8n workflow is designed to handle errors in other workflows by sending detailed error reports via email. When an error occurs in a connected workflow, the Error Trigger node captures it. The workflow then determines whether the error occurred during execution or trigger, formats the error details into HTML, and merges the information. Finally, it sends an email using Gmail with the error details, including links to the affected workflow and the error handling workflow.

### Demonstrate
A business owner could use this workflow to monitor critical automations and receive immediate notifications of any failures, ensuring quick response times to minimize downtime and maintain operational efficiency.

### Imitate
1. Import the workflow into n8n.
2. Set up Gmail credentials for sending emails.
3. Define your app URL, recipient email, and sender name in the Config node.
4. Connect this workflow as the error handler in your main workflows.
5. Test by intentionally causing an error in a workflow to see the email alert.

### Practice
Create a simple workflow that intentionally fails (e.g., an API call to a non-existent endpoint). Use this error handling workflow to capture and report the error. Check your email for the detailed error report.

### WIIFM
Mastering this workflow allows you to offer robust error monitoring services to clients, providing peace of mind and ensuring critical systems remain functional. This can enhance your service offerings and increase client satisfaction, potentially leading to more business opportunities.
  
  ## 🔧 Setup Instructions
  1. **Connect Credentials:** gmailOAuth2.
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
  