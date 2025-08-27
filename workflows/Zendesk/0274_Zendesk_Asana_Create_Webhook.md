# Zendesk Asana Create Webhook
## 🚀 What It Does
Automates a flow using zendesk×2, asana×2, if.

## 💼 Business Use Case
Use to eliminate manual copy-paste and standardize a recurring business process.

## ⚙️ How It Works
1. **Trigger:** Triggered by **Webhook** at `POST` **/4637a853-0b3a-43d4-9d76-92e1ce87889d**.
2. **On new Zendesk ticket** `webhook` — method: **POST**, path: `/4637a853-0b3a-43d4-9d76-92e1ce87889d`
3. **Get ticket** `zendesk` — operation: **get**
4. **Determine** `function` — functionCode: "/* configure here =========================================================== */
/*  Zendesk field ID which represents the "Jira Issue Key" field.
*/
const ISSUE_KEY_FIELD_ID = 670…[truncated]"
5. **IF** `if` — conditions: "[object Object]"
6. **Create comment on existing task** `asana` — resource: **taskComment**
7. **Create task** `asana` — name: "={{$node["Get ticket"].json["subject"]}}", workspace: "1177253494675264", otherProperties: "[object Object]"
8. **Update ticket** `zendesk` — operation: **update**

## 💡 AI-Powered Ideas for Improvement
### Explain
This n8n workflow automates the process of handling new Zendesk tickets by integrating with Asana. When a new ticket is created in Zendesk, the workflow retrieves the ticket details, checks if a related task exists in Asana, and either adds a comment to the existing task or creates a new task in Asana. Finally, it updates the Zendesk ticket with the Asana task ID, ensuring seamless coordination between customer support and project management.

### Demonstrate
A business owner could use this workflow to streamline communication between customer support teams using Zendesk and project teams using Asana, ensuring that customer issues are promptly addressed and tracked across platforms.

### Imitate
1. Import the workflow into n8n.
2. Connect your Zendesk and Asana accounts.
3. Customize the function node to match your Asana task field IDs.
4. Test the workflow with a new Zendesk ticket to ensure it creates or updates tasks in Asana correctly.

### Practice
Create a test Zendesk ticket to see how the workflow retrieves the ticket and processes it in Asana. Modify ticket details and observe changes in Asana tasks, ensuring that the workflow updates Zendesk with the correct Asana task ID.

### WIIFM
Mastering this workflow can help you offer integrated customer support and project management solutions to clients, improving their operational efficiency and service delivery. This capability can differentiate your services and potentially increase revenue in your automation business.

## 🔧 Setup Instructions
1. **Connect Credentials:** zendeskApi, asanaApi.
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
