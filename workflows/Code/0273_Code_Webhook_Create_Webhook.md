# Code Webhook Create Webhook
  ## 🚀 What It Does
  Monitors events, processes them, and **notifies** people/apps (Slack/Email) with structured updates.
  
  ## 💼 Business Use Case
  Use to eliminate manual copy-paste and standardize a recurring business process.
  
  ## ⚙️ How It Works
  1. **Trigger:** Triggered by **Webhook** at `POST` **/b7845b15-0a44-4be5-b513-f4f4bb8989a6**.
  2. **On new Zendesk ticket** `webhook` — method: **POST**, path: `/b7845b15-0a44-4be5-b513-f4f4bb8989a6`
3. **Configure** `set` — values: "[object Object]", options: "[object Object]"
4. **Note** `stickyNote` — width: "469.4813676974197", height: "268.2900466166276", content: "## Sync Zendesk tickets to Slack threads
### Setup
1. Add your [Zendesk credential](https://docs.n8n.io/integrations/builtin/credentials/zendesk/) to the `Get ticket` and `Update t…[truncated]"
5. **Get ticket** `zendesk` — operation: **get**
6. **Code** `code` — jsCode: "/* configure here =========================================================== */
/*  Zendesk field ID which represents the "Slack Thread ID" field.
*/
const ISSUE_KEY_FIELD_ID = 70…[truncated]"
7. **IF** `if` — conditions: "[object Object]"
8. **Create reply on existing thread** `slack` — channel/topic: `={{$node["Configure"].parameter["values"]["string"][0]["value"]}}`
9. **Create thread** `slack` — channel/topic: `={{$node["Configure"].parameter["values"]["string"][0]["value"]}}`
10. **Update ticket** `zendesk` — operation: **update**
  
  ## 💡 AI-Powered Ideas for Improvement
  - **Explain:** This workflow automates the process of syncing Zendesk tickets to Slack threads. When a new Zendesk ticket is created, it checks if a Slack thread already exists for the ticket. If it does, it posts a reply in the existing Slack thread. If not, it creates a new Slack thread for the ticket. The workflow updates the Zendesk ticket with the Slack thread ID for future reference.
  
- **Demonstrate:** A customer support team could use this workflow to ensure that all team members are aware of new tickets and updates by syncing ticket discussions with Slack, where they can collaborate more efficiently.

- **Imitate:** To apply this workflow, import it to your n8n instance, add your Zendesk and Slack credentials, and configure the Slack channel in the 'Configure' node. Test by creating a ticket in Zendesk to see if it posts in Slack.

- **Practice:** Create a test Zendesk ticket and observe how it is processed by the workflow. Modify the Slack channel in the 'Configure' node and see how the workflow adapts to the changes.

- **WIIFM:** Mastering this workflow can help you streamline communication between your support team and other departments, improving response times and collaboration. This skill is valuable for offering enhanced customer support solutions to clients, potentially increasing your service offerings and revenue.
  
  ## 🔧 Setup Instructions
  1. **Connect Credentials:** zendeskApi, slackOAuth2Api.
2. **Expose Webhook:** Map your external app to the listed path/method; test with curl/Postman before activation.
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
  