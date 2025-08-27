# Zendesk Github Create Webhook
## 🚀 What It Does
Automates a flow using zendesk×2, github×2, if.

## 💼 Business Use Case
Use to eliminate manual copy-paste and standardize a recurring business process.

## ⚙️ How It Works
1. **Trigger:** Triggered by **Webhook** at `POST` **/b4253880-b5e2-4d61-bb2a-b0ea335bee14**.
2. **On new Zendesk ticket** `webhook` — method: **POST**, path: `/b4253880-b5e2-4d61-bb2a-b0ea335bee14`
3. **Get ticket** `zendesk` — operation: **get**
4. **Determine** `function` — functionCode: "/* configure here =========================================================== */
/*  Zendesk field ID which represents the "GitHub Issue Number" field.
*/
const ISSUE_KEY_FIELD_ID …[truncated]"
5. **IF** `if` — conditions: "[object Object]"
6. **Create comment on existing issue** `github` — operation: **createComment**
7. **Create issue** `github` — owner: "John-n8n", title: "={{$node["Get ticket"].json["subject"]}}", labels: ""
8. **Update ticket** `zendesk` — operation: **update**

## 💡 AI-Powered Ideas for Improvement
### Explain
This n8n workflow automates the handling of new Zendesk tickets by integrating with GitHub. When a new ticket is created in Zendesk, it retrieves the ticket details, checks if there's an associated GitHub issue, and either comments on the existing issue or creates a new one. Finally, it updates the Zendesk ticket with the GitHub issue number, ensuring both platforms are synchronized.

### Demonstrate
A software company could use this workflow to streamline their support and development processes. When a customer submits a bug report via Zendesk, the workflow ensures it is tracked in GitHub, allowing developers to address it efficiently and keeping the support team updated.

### Imitate
1. Import the workflow into n8n.
2. Connect your Zendesk and GitHub accounts.
3. Set up a webhook in Zendesk to trigger the workflow.
4. Customize the GitHub repository and fields to match your project.
5. Test the workflow by creating a test ticket in Zendesk.

### Practice
Create a test Zendesk ticket and observe how the workflow creates or comments on a GitHub issue. Modify the ticket details and rerun the workflow to see how updates are handled. Experiment with different ticket types to see how the logic branches.

### WIIFM
Mastering this workflow can enhance your ability to offer integrated support and development solutions, increasing efficiency and customer satisfaction. It positions you to provide high-value automation services, potentially increasing your income through consulting or service offerings.

## 🔧 Setup Instructions
1. **Connect Credentials:** zendeskApi, githubApi.
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
