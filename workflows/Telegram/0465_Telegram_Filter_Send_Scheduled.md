# Telegram Filter Send Scheduled
## 🚀 What It Does
Automates a flow using stickyNote×4, telegram, scheduleTrigger.

## 💼 Business Use Case
Use to eliminate manual copy-paste and standardize a recurring business process.

## ⚙️ How It Works
1. **Trigger:** Runs on a **schedule** (e.g., `[object Object]`).
2. **Schedule Trigger** `scheduleTrigger` — rule: "[object Object]"
3. **Sticky Note3** `stickyNote` — color: "5", width: "453.88352097764886", height: "160.98843357558172"
4. **Sticky Note2** `stickyNote` — color: "7", width: "721.389633253837", height: "432.41702029585565"
5. **Sticky Note** `stickyNote` — width: "241", height: "80", content: "### 👆🏽 Set credentials to n8n here and select workflow"
6. **Sticky Note4** `stickyNote` — width: "241", height: "80", content: "### 👆🏽 Set credentials to Telegram here as well as chat-id"
7. **Get all previous executions** `n8n` — resource: **execution**
8. **Filter for executions of the week** `filter` — options: "[object Object]", conditions: "[object Object]"
9. **Set a message for each failed execution** `set` — include: "selected", options: "[object Object]", assignments: "[object Object]"
10. **Aggregate all messages** `aggregate` — options: "[object Object]", fieldsToAggregate: "[object Object]"
11. **Telegram** `telegram` — text: "={{  $json.message.join("\n") }}", additionalFields: "[object Object]"

## 💡 AI-Powered Ideas for Improvement
### Explain
This workflow is designed to monitor the execution of other workflows in n8n. It runs weekly and checks for any workflow executions that have failed in the past seven days. It compiles a list of these failures and sends a detailed report via Telegram. This helps in keeping track of and addressing issues in automated processes.

### Demonstrate
A business owner could use this workflow to ensure that their critical automations, like order processing or customer notifications, are running smoothly. Any failures are promptly reported, allowing for quick intervention and minimal disruption.

### Imitate
1. Import the workflow into n8n.
2. Set up a Schedule Trigger to run weekly.
3. Connect your n8n instance and select the workflows to monitor.
4. Configure Telegram credentials and chat ID for report delivery.
5. Test the workflow to ensure it captures and reports failures correctly.

### Practice
Create a test workflow that intentionally fails, then use this monitoring workflow to ensure it detects the failure and sends a notification. Adjust the Telegram message to include more detailed information about the failure.

### WIIFM
Mastering this workflow helps you offer reliable automation services by ensuring processes run smoothly. Quick failure detection and reporting can enhance client trust and reduce downtime, offering a competitive edge in the automation business.

## 🔧 Setup Instructions
1. **Cron/Schedule:** Confirm timezone and cadence; start with a test window (e.g., every 5 minutes) then scale.

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
