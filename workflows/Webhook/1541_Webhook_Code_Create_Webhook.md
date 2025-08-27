# Webhook Code Create Webhook
## 🚀 What It Does
Monitors events, processes them, and **notifies** people/apps (Slack/Email) with structured updates.

## 💼 Business Use Case
Use as a **glue/API broker**: receive data, enrich/validate via APIs, and pass to downstream systems.

## ⚙️ How It Works
1. **Trigger:** This workflow starts with **Sticky Note**.
2. **Receive Sublime Security Alert** `webhook` — method: **POST**, path: `/3ea0b887-9caa-477e-b6e4-1d3edf72d11e`
3. **Sticky Note** `stickyNote` — width: "718.6188455173532", height: "863.9601939404693", content: "[redacted]"
4. **Sticky Note3** `stickyNote` — width: "714.4547337311393", height: "522.7074838611178", content: "![Slack](https://i.imgur.com/iKyMV0N.png)
## Try to find quarantined email user's slack username 
With the quarantined email’s details at hand, n8n tries to notify the user via Sla…[truncated]"
5. **Sticky Note1** `stickyNote` — width: "718.1630306649816", height: "516.9144812801944", content: "![Jira](https://upload.wikimedia.org/wikipedia/commons/thumb/8/82/Jira_%28Software%29_logo.svg/320px-Jira_%28Software%29_logo.svg.png)
## If user opened email before quarantine, cr…[truncated]"
6. **Get message details in Sublime Security** `httpRequest` — url: `=https://api.platform.sublimesecurity.com/v0/messages/{{ $json.body.data.messageId }}`
7. **has email been opened?** `if` — conditions: "[object Object]"
8. **lookup slack user by email** `httpRequest` — url: `https://slack.com/api/users.lookupByEmail`
9. **Yes, prep flaggedRules table** `code` — mode: "runOnceForEachItem", jsCode: "console.log($("Receive Sublime Security Alert").item.json.body);

const table = $("Receive Sublime Security Alert")
  .item.json.body.data.flagged_rules.map(
    (rule) => `|${rule…[truncated]"
10. **No, do nothing** `noOp` — configured for its default action.
11. **user found?** `if` — conditions: "[object Object]"
12. **Jira Software** `jira` — project: "[object Object]", summary: "=Flagged email has been opened before quarantine | {{ $('Get message details in Sublime Security').item.json.subject }}", issueType: "[object Object]"
13. **Found, notify user** `slack` — text: "=Hello,
Our security team has detected a potentially malicious email sent to your inbox and have quarantined it undergoing investigation.

From: {{ $('Get message details in Sublim…[truncated]", user: "[object Object]", select: "user"
14. **Not Found, Do Nothing** `noOp` — configured for its default action.

## 💡 AI-Powered Ideas for Improvement
**Explain:**  
This workflow automates the notification and incident management process for potentially malicious emails detected by Sublime Security. When an email is flagged and quarantined, it checks if the email was opened before quarantine. If opened, it creates a Jira ticket for further investigation. It also attempts to notify the user via Slack by finding their username using the email address.

**Demonstrate:**  
A security operations team might use this workflow to ensure quick response to email threats. By automating notifications and incident creation, they maintain efficient communication and faster incident handling.

**Imitate:**  
1. Import the workflow into n8n.  
2. Connect Sublime Security, Slack, and Jira accounts.  
3. Configure the webhook to receive alerts from Sublime Security.  
4. Test by sending a sample alert to ensure Slack notifications and Jira tickets are created correctly.

**Practice:**  
Create a test scenario by simulating a quarantine alert from Sublime Security. Check if the workflow successfully creates a Jira ticket when the email is opened and sends a Slack notification to the user.

**WIIFM:**  
Mastering this workflow enhances your ability to provide security automation solutions. It can help you offer value-added services to clients by increasing their security response efficiency, potentially leading to new business opportunities and increased revenue in your automation business.

## 🔧 Setup Instructions
1. **Connect Credentials:** httpHeaderAuth, jiraSoftwareCloudApi, slackApi, slackOAuth2Api.
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
