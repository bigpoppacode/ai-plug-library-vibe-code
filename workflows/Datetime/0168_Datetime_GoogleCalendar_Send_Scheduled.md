# Datetime GoogleCalendar Send Scheduled
  ## 🚀 What It Does
  Monitors events, processes them, and **notifies** people/apps (Slack/Email) with structured updates.
  
  ## 💼 Business Use Case
  Great for **content, summarization, triage, or decisioning** where AI adds speed and consistency.
  
  ## ⚙️ How It Works
  1. **Trigger:** This workflow starts with **1st of Every month at 8am**.
  2. **1st of Every month at 8am** `cron` — triggerTimes: "[object Object]"
3. **Previous Month** `dateTime` — operation: **subtract**
4. **Get previous months events** `googleCalendar` — operation: **getAll**
5. **Check Summary for Illness or Holiday** `switch` — rules: "[object Object]", value1: "={{$json["summary"]}}", dataType: "string"
6. **Holiday** `noOp` — configured for its default action.
7. **Illness** `noOp` — configured for its default action.
8. **Filter Holiday Days** `set` — values: "[object Object]", options: "[object Object]", keepOnlySet: "true"
9. **Filter Illness Days** `set` — values: "[object Object]", options: "[object Object]", keepOnlySet: "true"
10. **Combine Holiday Counts** `code` — jsCode: "let names = $input.all().map(e => e.json.Name);
let unique_names = [...new Set(names)];
let results = [];

for (thisName of unique_names) {
  let result = {
    "Name": thisName,
 …[truncated]"
11. **Combine Illness Counts** `code` — jsCode: "let names = $input.all().map(e => e.json.Name);
let unique_names = [...new Set(names)];
let results = [];

for (thisName of unique_names) {
  let result = {
    "Name": thisName,
 …[truncated]"
12. **Merge** `merge` — configured for its default action.
13. **Build the message to send** `code` — jsCode: "let illnessMessage = "";
let holidayMessage = "";
let message = "Here is a breakdown of absences for the last month.\n\n";

// Loop the input items
for (item of $input.all()) {
  i…[truncated]"
14. **Send email to payroll** `emailSend` — text: "={{$json["message"]}}", options: "[object Object]", subject: "Absences from last month"
  
  ## 💡 AI-Powered Ideas for Improvement
  ### Explain
This n8n workflow is designed to automate the tracking and reporting of employee absences due to holidays and illnesses. It triggers on the first of every month, retrieves events from the previous month from a Google Calendar, categorizes them as either holiday or illness, counts the days for each employee, combines the data, and emails a summary to the payroll team.

### Demonstrate
A business could use this workflow to automate absence reporting, ensuring accurate and timely payroll adjustments based on employee absences. This reduces manual tracking, minimizes errors, and ensures compliance with attendance policies.

### Imitate
1. Import the workflow into n8n.
2. Connect your Google Calendar and email accounts.
3. Set the workflow to trigger at the start of each month.
4. Customize the Google Calendar and email settings to match your organization's needs.
5. Test the workflow to ensure it processes and sends the absence report correctly.

### Practice
Create a Google Calendar with sample events labeled as "Holiday" and "Illness" for different employees. Run the workflow and check if it accurately counts and reports the absences. Adjust the labels and run again to see how changes affect the workflow.

### WIIFM
Mastering this workflow can streamline absence management for businesses, improving payroll accuracy and efficiency. Offering this automation service can attract clients seeking reliable HR solutions, enhancing your portfolio and income potential in the automation business.
  
  ## 🔧 Setup Instructions
  1. **Connect Credentials:** googleCalendarOAuth2Api, smtp.
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
  