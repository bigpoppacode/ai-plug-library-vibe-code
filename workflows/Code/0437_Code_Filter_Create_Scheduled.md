# Code Filter Create Scheduled
  ## 🚀 What It Does
  Monitors events, processes them, and **notifies** people/apps (Slack/Email) with structured updates.
  
  ## 💼 Business Use Case
  Ideal for **lead intake**, **enrichment**, and **CRM updates** with alerts to the right channel.
  
  ## ⚙️ How It Works
  1. **Trigger:** This workflow starts with **Execute Workflow Trigger**.
  2. **Sticky Note2** `stickyNote` — color: "7", width: "181.66573318934627", height: "344.96230939963334"
3. **Execute Workflow Trigger** `executeWorkflowTrigger` — configured for its default action.
4. **Sticky Note4** `stickyNote` — color: "7", width: "181.66573318934627", height: "410.4105111871959"
5. **Sticky Note5** `stickyNote` — color: "7", width: "1790.5345476157208", height: "515.1374038700677"
6. **Sticky Note6** `stickyNote` — color: "7", width: "1797.4980261229769", height: "515.1374038700677"
7. **Sticky Note7** `stickyNote` — color: "7", width: "1797.4980261229769", height: "515.1374038700677"
8. **Every hour** `scheduleTrigger` — rule: "[object Object]"
9. **Sticky Note3** `stickyNote` — color: "7", width: "181.66573318934627", height: "306.5470605243249"
10. **Sticky Note8** `stickyNote` — width: "404.04123613412946", height: "418.96364526464185", content: "# Try me out
1. Clone [this Google worksheet](https://docs.google.com/spreadsheets/d/12dsbRpvtVFDdPmyZ7-39vuHuFpM1eMyfOqGGGdsnrtc/edit#gid=0) and update the 'Settings' node with it…[truncated]"
11. **Set message template** `set` — fields: "[object Object]", include: "none", options: "[object Object]"
12. **Don't email on weekends** `filter` — options: "[object Object]", conditions: "[object Object]"
13. **Fill message placeholders** `code` — mode: "runOnceForEachItem", jsCode: "function extractPlaceholders(str) {
    // Regular expression to match placeholders
    // It matches any alphanumeric character including dashes and underscores between {}
    con…[truncated]"
14. **Settings** `set` — options: "[object Object]", assignments: "[object Object]"
15. **Compose message** `set` — fields: "[object Object]", options: "[object Object]"
16. **Email sequence** `set` — mode: "raw", options: "[object Object]", jsonOutput: "{
  "emails": [
    {
      "message": "Hi {name}, hope you're well!<br />\n<br />\nYou're doing some great things at {company}, and I wanted to touch base to see if you wanted to …[truncated]"
17. **Replying?** `if` — options: "[object Object]", conditions: "[object Object]"
18. **Get previous message threads** `gmail` — resource: **thread**
19. **Get emails** `googleSheets` — options: "[object Object]", sheetName: "[object Object]", documentId: "[object Object]"
20. **Reply to message** `gmail` — operation: **reply**
21. **Send new message** `gmail` — sendTo: "={{ $json.to_email }}", message: "={{ $json.message }}", options: "[object Object]"
22. **Get thread details** `gmail` — resource: **thread**, operation: **get**
23. **To email?** `filter` — options: "[object Object]", conditions: "[object Object]"
24. **Decode messages** `code` — jsCode: "// TODO: Some messages have an empty payload and a parts field instead (containing an array)

for (const item of $input.all()) {
  for (const message of item.json.messages) {
    c…[truncated]"
25. **Prepare first message params** `set` — fields: "[object Object]", options: "[object Object]"
26. **Classify threads** `code` — jsCode: "// Because emails are sent slightly after the schedule trigger runs, we'll end up waiting an extra day to send unless we take into account the execution time of the workflow
let bu…[truncated]"
27. **Package placeholder values** `code` — mode: "runOnceForEachItem", jsCode: "function extractPlaceholders(str) {
    // Regular expression to match placeholders
    // It matches any alphanumeric character including dashes and underscores between {}
    con…[truncated]"
28. **Next message due?** `filter` — options: "[object Object]", conditions: "[object Object]"
29. **Call message send sub-workflow1** `executeWorkflow` — mode: "each", options: "[object Object]", workflowId: "={{ $workflow.id }}"
30. **Prepare reply params** `set` — fields: "[object Object]", include: "none", options: "[object Object]"
31. **Update last contacted time** `googleSheets` — operation: **update**
32. **Decode placeholder values** `code` — mode: "runOnceForEachItem", jsCode: "const html = $('Decode messages').item.json.messages[0].html
const matches = html.match(/data-ph='([^']*)'/)
let placeholders = {}
if(matches?.length > 0) {
  ph = JSON.parse(match…[truncated]"
33. **Call message send sub-workflow** `executeWorkflow` — options: "[object Object]", workflowId: "={{ $workflow.id }}"
  
  ## 💡 AI-Powered Ideas for Improvement
  **Explain:**  
This n8n workflow automates email outreach by sending personalized emails based on a predefined sequence. It retrieves email data from a Google Sheet, checks if the recipient is eligible for an email, and updates the sheet with the contact date. The workflow sends initial and follow-up emails, skips weekends, and checks if a reply was received before sending the next message.

**Demonstrate:**  
A business owner could use this workflow to automate follow-up emails for leads, ensuring timely communication without manual tracking. This reduces the risk of losing potential customers due to delayed responses and helps maintain engagement.

**Imitate:**  
1. Clone the Google Sheet and update the 'Settings' node with its URL.
2. Adjust email sequences in the 'Email Sequence' node.
3. Connect your Gmail and Google Sheets accounts.
4. Set the schedule to run the workflow.
5. Test by adding a few email addresses to the sheet.

**Practice:**  
Create a test Google Sheet with email addresses and run the workflow. Observe how it sends emails and updates the 'first_emailed' column. Modify the schedule and email content to see the impact on workflow execution.

**WIIFM (What's In It For Me):**  
Mastering this workflow can enhance your service offerings by providing automated email marketing solutions. This can lead to increased client satisfaction, streamlined operations, and potential for upselling automation services, ultimately generating more income for your business.
  
  ## 🔧 Setup Instructions
  1. **Connect Credentials:** googleSheetsOAuth2Api, gmailOAuth2.
2. **Data Mapping:** Verify base/sheet IDs and column names match exactly to prevent silent failures.
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
  