# HTTP Github Send Webhook
  ## 🚀 What It Does
  Automates a flow using pipedrive×2, httpRequest, if.
  
  ## 💼 Business Use Case
  Use as a **glue/API broker**: receive data, enrich/validate via APIs, and pass to downstream systems.
  
  ## ⚙️ How It Works
  1. **Trigger:** This workflow starts with **ON Pull Request**.
  2. **ON Pull Request** `githubTrigger` — owner: "John-n8n", events: "pull_request", repository: "DemoRepo"
3. **HTTP Request** `httpRequest` — url: `={{$json["body"].sender.url}}`
4. **Search PR user in Pipedrive by email** `pipedrive` — resource: **person**, operation: **search**
5. **person exists** `if` — conditions: "[object Object]"
6. **Pipedrive** `pipedrive` — resource: **note**
7. **NoOp** `noOp` — configured for its default action.
  
  ## 💡 AI-Powered Ideas for Improvement
  ### Explain
This n8n workflow is triggered by a new pull request event in a GitHub repository. It retrieves the sender's details using an HTTP request, then searches for the sender's email in Pipedrive to check if the person exists. If the person is found, a note about the pull request is added to their record in Pipedrive. If not, no further action is taken.

### Demonstrate
A software development company could use this workflow to automatically log pull request activities in their CRM (Pipedrive) whenever a developer submits a pull request. This helps in tracking developer contributions and maintaining comprehensive records for team management and client reporting.

### Imitate
1. Import the workflow into n8n.
2. Connect your GitHub and Pipedrive accounts.
3. Configure the GitHub trigger with your repository details.
4. Set the HTTP Request node to retrieve the sender's URL.
5. Ensure Pipedrive search and note nodes are linked correctly.
6. Test the workflow by creating a pull request in your GitHub repository.

### Practice
Create a test repository and a test Pipedrive account. Trigger the workflow by submitting a pull request in the test repository, and observe how the workflow searches and updates Pipedrive accordingly. Modify the workflow to handle cases where the user doesn't exist in Pipedrive.

### WIIFM
Mastering this workflow allows you to offer automated CRM updates for software teams, enhancing client relationship management and developer tracking. This capability can increase your service offerings, leading to higher client retention and potential upsells in your automation business.
  
  ## 🔧 Setup Instructions
  1. **Connect Credentials:** githubApi, pipedriveApi.
2. **API Contracts:** Validate required headers and 2xx/4xx handling; add retries for 429/5xx.
  
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
  