# FunctionItem Zendesk Create Webhook
  ## 🚀 What It Does
  Automates a flow using zendesk×5, set×3, merge×3.
  
  ## 💼 Business Use Case
  Use as a **glue/API broker**: receive data, enrich/validate via APIs, and pass to downstream systems.
  
  ## ⚙️ How It Works
  1. **Trigger:** This workflow starts with **Every 5 minutes**.
  2. **Every 5 minutes** `cron` — triggerTimes: "[object Object]"
3. **Get agents and admins** `zendesk` — resource: **user**, operation: **getAll**
4. **Get last execution timestamp** `functionItem` — functionCode: "// Code here will run once per input item.
// More info and help: https://docs.n8n.io/nodes/n8n-nodes-base.functionItem
// Tip: You can use luxon for dates and $jmespath for queryi…[truncated]"
5. **Keep only email and Id** `set` — values: "[object Object]", options: "[object Object]", keepOnlySet: "true"
6. **Get tickets created after last execution** `zendesk` — operation: **getAll**
7. **Get requester information** `zendesk` — resource: **user**, operation: **get**
8. **Keep only needed requester information** `set` — values: "[object Object]", options: "[object Object]", keepOnlySet: "true"
9. **Add requester information to ticket data** `merge` — mode: "mergeByKey", propertyName1: "requester_id", propertyName2: "requester_id"
10. **Search requester in pipedrive** `pipedrive` — resource: **person**, operation: **search**
11. **Get owner information of Pipedrive contact** `httpRequest` — url: `=https://n8n.pipedrive.com/api/v1/users/{{$json["owner"]["id"]}}`
12. **Keep only requester owner email** `set` — values: "[object Object]", options: "[object Object]", keepOnlySet: "true"
13. **Add Pipedrive agent data to pipedrive contact information** `merge` — mode: "mergeByKey", propertyName1: "requester_pipedrive_owner_email", propertyName2: "agent_email"
14. **Add contact owner to ticket data** `merge` — mode: "mergeByKey", propertyName1: "requester_email", propertyName2: "requester_pipedrive_email"
15. **Contact exists in Pipedrive** `if` — conditions: "[object Object]"
16. **Change assignee to Pipedrive contact owner** `zendesk` — operation: **update**
17. **Add a note requester not found** `zendesk` — operation: **update**
18. **Set new last execution timestamp** `functionItem` — functionCode: "// Code here will run once per input item.
// More info and help: https://docs.n8n.io/nodes/n8n-nodes-base.functionItem
// Tip: You can use luxon for dates and $jmespath for queryi…[truncated]"
  
  ## 💡 AI-Powered Ideas for Improvement
  - **Explain:** This n8n workflow automates the process of managing Zendesk tickets by checking if the requester exists in Pipedrive. Every 5 minutes, it retrieves new Zendesk tickets, checks if the requester is already in Pipedrive, and updates the ticket with the Pipedrive contact owner as the assignee. If the requester is not found in Pipedrive, it adds a note to the ticket.

- **Demonstrate:** A business could use this workflow to streamline support ticket assignment by automatically matching tickets to the correct sales contact in Pipedrive, ensuring that customers get prompt responses from the right team member.

- **Imitate:** To adapt this workflow, import it into your n8n instance, connect your Zendesk and Pipedrive accounts, and set up the necessary credentials. Adjust the nodes to match your specific data fields and test the workflow to ensure it updates tickets as expected.

- **Practice:** Create a test Zendesk ticket and run the workflow to see how it processes the ticket. Check if the ticket's assignee is updated correctly based on Pipedrive data, and experiment with different scenarios to understand the workflow's logic.

- **WIIFM:** Mastering this workflow helps you offer automated customer support solutions, enhancing efficiency and customer satisfaction. By providing such services, you can attract more clients and increase your revenue in the automation business.
  
  ## 🔧 Setup Instructions
  1. **Connect Credentials:** zendeskApi, pipedriveApi.
2. **Cron/Schedule:** Confirm timezone and cadence; start with a test window (e.g., every 5 minutes) then scale.
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
  