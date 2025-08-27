# Aggregate Schedule Send Scheduled
  ## 🚀 What It Does
  Monitors events, processes them, and **notifies** people/apps (Slack/Email) with structured updates.
  
  ## 💼 Business Use Case
  Great for **content, summarization, triage, or decisioning** where AI adds speed and consistency.
  
  ## ⚙️ How It Works
  1. **Trigger:** Runs on a **schedule** (e.g., `[object Object]`).
  2. **Sticky Note** `stickyNote` — width: "248.47086922498647", height: "314.47468983163634", content: "- Starts the workflow every day at 7 AM.
- Adjust the time if you want the workflow to run at a different hour."
3. **Sticky Note1** `stickyNote` — width: "213.36643278764896", height: "313.40934714314244", content: "Fetches all emails received in the past 24 hours from the email address"
4. **Daily 7AM Trigger** `scheduleTrigger` — rule: "[object Object]"
5. **Sticky Note2** `stickyNote` — width: "226.7095107678671", height: "305.83657700487913", content: "Organizes the fetched email data, extracting fields like sender, receiver, CC, and a preview snippet."
6. **Sticky Note4** `stickyNote` — width: "232.8435827211592", height: "359.7308639651144", content: "- Sends the summarized email report to recipients with a styled HTML layout.
- Update the "sendTo" and "ccList" fields with the email addresses of your recipients.

"
7. **Fetch Emails - Past 24 Hours** `gmail` — operation: **getAll**
8. **Organize Email Data - Morning** `aggregate` — include: "specifiedFields", options: "[object Object]", aggregate: "aggregateAllItemData"
9. **Summarize Emails with OpenAI - Morning** `openAi` — modelId: "[object Object]", options: "[object Object]", messages: "[object Object]"
10. **Send Summary - Morning** `gmail` — sendTo: "team-email@example.com", message: "=<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Email Summary - isbonline@…[truncated]", options: "[object Object]"
  
  ## 💡 AI-Powered Ideas for Improvement
  ### Explain
This n8n workflow is designed to streamline email management by automatically summarizing daily emails. Every day at 7 AM, it fetches all emails received in the past 24 hours, organizes the data by extracting key fields like sender, receiver, and a snippet of the email, and then uses OpenAI to create a summary. Finally, it sends this summarized report in a styled HTML email to specified recipients, keeping teams informed without the need to manually sift through each email.

### Demonstrate
A business owner could use this workflow to keep their team updated on important communications without spending time on manual email review. This ensures that critical information is highlighted and actionable items are easily identified.

### Imitate
1. Import the workflow into your n8n environment.
2. Set up your Gmail and OpenAI credentials in n8n.
3. Adjust the time in the schedule trigger to your preference.
4. Update the "sendTo" and "ccList" fields with your recipients' emails.
5. Test the workflow to ensure it sends the email summary correctly.

### Practice
Create a test Gmail account and use it to send a few emails to yourself. Run the workflow to see how it organizes and summarizes the emails. Adjust the summary criteria and observe the changes in the output.

### WIIFM
Mastering this workflow allows you to offer automated email summarization services to clients, enhancing their productivity. This can lead to increased client satisfaction, opening doors to additional automation projects and revenue streams in your AI automation business.
  
  ## 🔧 Setup Instructions
  1. **Connect Credentials:** gmailOAuth2, openAiApi.
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
  