# HTTP Github Create Webhook
  ## 🚀 What It Does
  Automates a flow using pipedrive×4, if, set.
  
  ## 💼 Business Use Case
  Use as a **glue/API broker**: receive data, enrich/validate via APIs, and pass to downstream systems.
  
  ## ⚙️ How It Works
  1. **Trigger:** This workflow starts with **On fork**.
  2. **On fork** `githubTrigger` — owner: "John-n8n", events: "fork", repository: "DemoRepo"
3. **Get Github user information** `httpRequest` — url: `={{$json["body"].sender.url}}`
4. **Search forkee in Pipedrive by email** `pipedrive` — resource: **person**, operation: **search**
5. **person exists** `if` — conditions: "[object Object]"
6. **Create person** `pipedrive` — resource: **person**
7. **Set person Id** `set` — values: "[object Object]", options: "[object Object]"
8. **Create lead** `pipedrive` — resource: **lead**
9. **Create note with github url** `pipedrive` — resource: **note**
  
  ## 💡 AI-Powered Ideas for Improvement
  ### Explain
This n8n workflow is triggered when someone forks a specific GitHub repository. It retrieves the forking user's information and checks if they already exist in a Pipedrive CRM by email. If the user exists, it updates their record; if not, it creates a new contact. Then, it creates a lead associated with the user and adds a note containing the GitHub URL of the user who forked the repository.

### Demonstrate
A developer might use this workflow to track who is interested in their GitHub projects, automatically adding potential collaborators or customers to their CRM, enabling better follow-up and relationship management.

### Imitate
1. Import the workflow into n8n.
2. Connect your GitHub and Pipedrive accounts.
3. Set the GitHub trigger for a specific repository.
4. Customize the Pipedrive fields to match your CRM setup.
5. Test the workflow by forking the repository and checking the CRM for updates.

### Practice
Fork a test repository to see how the workflow captures the event and updates Pipedrive. Modify the GitHub trigger to react to different events, like issues or pull requests, and observe how it changes the workflow's behavior.

### WIIFM
Mastering this workflow can help you automate lead generation and customer relationship management, saving time and ensuring no potential collaborator or customer is overlooked. This skill can enhance your service offerings, attract more clients, and increase revenue in your automation business.
  
  ## 🔧 Setup Instructions
  1. **Connect Credentials:** pipedriveApi, githubApi.
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
  