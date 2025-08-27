# Datetime Schedule Create Webhook
  ## 🚀 What It Does
  Monitors events, processes them, and **notifies** people/apps (Slack/Email) with structured updates.
  
  ## 💼 Business Use Case
  Use as a **glue/API broker**: receive data, enrich/validate via APIs, and pass to downstream systems.
  
  ## ⚙️ How It Works
  1. **Trigger:** Runs on a **schedule** (e.g., `[object Object]`).
  2. **On schedule** `scheduleTrigger` — rule: "[object Object]"
3. **On updated database page** `notionTrigger` — event: "pagedUpdatedInDatabase", pollTimes: "[object Object]", databaseId: "[object Object]"
4. **Sticky Note** `stickyNote` — width: "501.0810810810809", height: "545.405405405404", content: "## Send labeled email to a Notion database
This workflow sends the contents of an email to a Notion database. The email must be labeled with a specific label for the workflow to tr…[truncated]"
5. **Derive last request time** `dateTime` — operation: **subtractFromDate**
6. **If checked off** `if` — conditions: "[object Object]"
7. **Get emails from label and last request time** `gmail` — operation: **getAll**
8. **Remove label from target email** `gmail` — operation: **removeLabels**
9. **Not yet checked off, do nothing** `noOp` — configured for its default action.
10. **Try get database page** `notion` — resource: **databasePage**, operation: **getAll**
11. **Merge** `merge` — mode: "combine", options: "[object Object]", joinMode: "enrichInput1"
12. **If database page not found** `if` — conditions: "[object Object]"
13. **Find my email address** `httpRequest` — url: `https://gmail.googleapis.com/gmail/v1/users/me/profile`
14. **If found, do nothing** `noOp` — configured for its default action.
15. **Create database page** `notion` — resource: **databasePage**
  
  ## 💡 AI-Powered Ideas for Improvement
  - **Explain:** This n8n workflow automates the process of transferring emails labeled with a specific tag from Gmail to a Notion database. It runs at scheduled intervals, checks for new emails with the label, and if the email isn't already in the Notion database, it creates a new page with the email's subject as the title and a snippet of the email body as the content. Once the task is marked complete in Notion, the label is removed from the email in Gmail.

- **Demonstrate:** A business owner who receives customer inquiries via email could use this workflow to automatically organize and track these inquiries in Notion, ensuring they are addressed and followed up on efficiently.

- **Imitate:** To apply this workflow, import it into n8n, connect your Gmail and Notion accounts, and configure the specific label and Notion database. Test the workflow to ensure it correctly identifies and processes emails as intended.

- **Practice:** Create a labeled email in Gmail and run the workflow to see how it appears in your Notion database. Adjust the setup to test with different labels or Notion fields.

- **WIIFM:** Mastering this workflow allows you to offer a valuable service to clients who need streamlined email management and task tracking. This can enhance their productivity and improve client satisfaction, potentially leading to more business opportunities and income.
  
  ## 🔧 Setup Instructions
  1. **Connect Credentials:** gmailOAuth2, notionApi.
2. **Cron/Schedule:** Confirm timezone and cadence; start with a test window (e.g., every 5 minutes) then scale.
3. **Notification Targets:** Confirm channel/email IDs and that the bot/app is authorized to post.
4. **API Contracts:** Validate required headers and 2xx/4xx handling; add retries for 429/5xx.
  
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
  