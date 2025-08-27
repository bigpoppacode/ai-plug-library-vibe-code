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
 <title>Email Summary - isbonline@quantana.…[truncated]", options: "[object Object]"
  
  ## 💡 AI-Powered Ideas for Improvement
  - **Explain:** This workflow automatically fetches emails received in the last 24 hours every day at 7 AM, organizes the data (including sender, receiver, CC, and a snippet), summarizes the emails using OpenAI, and sends a styled HTML summary report to specified recipients. It ensures you start your day with a concise overview of all critical communications.

- **Demonstrate:** A business owner can use this workflow to get a daily summary of all client communications, helping them prioritize responses and manage their day more effectively.

- **Imitate:** To apply this workflow: 1) Import it into n8n. 2) Connect your Gmail and OpenAI accounts. 3) Update the "sendTo" and "ccList" fields with your desired recipients. 4) Adjust the trigger time if needed and activate the workflow.

- **Practice:** Set up a test Gmail account and run the workflow with sample emails. Verify the summary report's accuracy and appearance. Adjust the HTML layout or summary logic if necessary.

- **WIIFM:** Mastering this workflow allows you to offer email summarization services to busy professionals, enhancing their productivity. This skill can become a valuable part of your AI automation business, generating income by saving clients time and helping them focus on high-priority tasks.
  
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
  