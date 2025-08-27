# Zendesk Jira Create Webhook
## 🚀 What It Does
Automates a flow using jira×2, zendesk×2, if.

## 💼 Business Use Case
Use to eliminate manual copy-paste and standardize a recurring business process.

## ⚙️ How It Works
1. **Trigger:** Triggered by **Webhook** at `POST` **/d596c0c6-7377-4a17-9ed5-6ee953f072b9**.
2. **On new Zendesk ticket** `webhook` — method: **POST**, path: `/d596c0c6-7377-4a17-9ed5-6ee953f072b9`
3. **Get ticket** `zendesk` — operation: **get**
4. **Determine** `function` — functionCode: "/* configure here =========================================================== */
/*  Zendesk field ID which represents the "Jira Issue Key" field.
*/
const ISSUE_KEY_FIELD_ID = 668…[truncated]"
5. **IF** `if` — conditions: "[object Object]"
6. **Create comment to existing issue** `jira` — resource: **issueComment**
7. **Create issue** `jira` — project: "10000", summary: "={{$node["Get ticket"].json["subject"]}}", issueType: "10003"
8. **Update ticket** `zendesk` — operation: **update**

## 💡 AI-Powered Ideas for Improvement
**Explain**  
This n8n workflow automates the integration between Zendesk and Jira. When a new ticket arrives in Zendesk, it checks if a Jira issue already exists. If it does, it adds a comment to the existing Jira issue. If not, it creates a new Jira issue and updates the Zendesk ticket with the Jira issue key, ensuring seamless tracking and communication between support and development teams.

**Demonstrate**  
A software company can use this workflow to streamline bug tracking. When a customer reports an issue through Zendesk, the workflow automatically logs it in Jira, ensuring developers are promptly notified and can track the issue's resolution.

**Imitate**  
1. Import the workflow into n8n.  
2. Connect your Zendesk and Jira accounts.  
3. Set up a webhook in Zendesk to trigger this workflow.  
4. Customize the Jira project and issue type settings.  
5. Test the workflow with a sample ticket submission.

**Practice**  
Create a test Zendesk ticket with a unique issue. Run the workflow to see if it correctly creates a Jira issue and updates the ticket with the Jira key. Modify the ticket to include different details and observe the workflow's response.

**WIIFM**  
Mastering this workflow can help you offer integration services to businesses needing efficient support and development coordination. This can enhance your service offerings, attract clients, and increase revenue in your automation business.

## 🔧 Setup Instructions
1. **Connect Credentials:** jiraSoftwareCloudApi, zendeskApi.
2. **Expose Webhook:** Map your external app to the listed path/method; test with curl/Postman before activation.

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
