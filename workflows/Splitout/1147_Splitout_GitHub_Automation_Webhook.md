# Splitout Github Automation Webhook
## 🚀 What It Does
Automates a flow using stickyNote×3, manualTrigger, set.

## 💼 Business Use Case
Use as a **glue/API broker**: receive data, enrich/validate via APIs, and pass to downstream systems.

## ⚙️ How It Works
1. **Trigger:** This workflow starts with **When clicking ‘Test workflow’**.
2. **When clicking ‘Test workflow’** `manualTrigger` — configured for its default action.
3. **Sticky Note1** `stickyNote` — width: "320", height: "420", content: "## Restore from GitHub 
This workflow will restore all instance credentials from GitHub backups.


### Setup
Open `Globals` node and update the values below 👇

- **repo.owner:** y…[truncated]"
4. **Sticky Note4** `stickyNote` — color: "4", width: "150", height: "80"
5. **Sticky Note** `stickyNote` — color: "4", content: "## Skip credential
- The empty json files
- The n8n account api
- ...edit this node at will"
6. **Globals** `set` — options: "[object Object]", assignments: "[object Object]"
7. **Get all files in given path** `httpRequest` — url: `=https://api.github.com/repos/{{ $json.repo.owner }}/{{ $json.repo.name }}/contents/{{ $json.repo.path }}`
8. **Split the result** `splitOut` — options: "[object Object]", fieldToSplitOut: "path"
9. **Get file content from GitHub** `github` — resource: **file**, operation: **get**
10. **Convert files to JSON** `extractFromFile` — operation: **fromJson**
11. **Check for skipped Credentials** `if` — options: "[object Object]", conditions: "[object Object]"
12. **Restore n8n Credentials** `n8n` — resource: **credential**

## 💡 AI-Powered Ideas for Improvement
### Explain
This n8n workflow automates the process of restoring credentials from a GitHub repository. It retrieves JSON files containing credentials from a specified GitHub repository path, converts them into usable data, and restores these credentials into an n8n instance. This ensures that your n8n instance can quickly recover its configuration after a data loss or migration.

### Demonstrate
A developer managing multiple projects might use this workflow to ensure that all their n8n instance credentials are backed up on GitHub. This allows for quick restoration if they need to set up a new instance or recover from a system failure.

### Imitate
1. Import the workflow into your n8n instance.
2. Update the 'Globals' node with your GitHub repository details (owner, name, path).
3. Run the workflow using the manual trigger to test the restoration process.
4. Verify that credentials are restored in your n8n instance.

### Practice
Create a test GitHub repository with a few JSON files representing credentials. Run the workflow to see how it processes these files and updates your n8n instance. Experiment by adding or removing files to see how the workflow adapts.

### WIIFM
Mastering this workflow can provide a reliable backup and restoration system for your n8n credentials, adding value to your automation services. This capability can attract clients who need robust data recovery solutions, enhancing your service offerings and income potential.

## 🔧 Setup Instructions
1. **Connect Credentials:** githubApi, n8nApi.
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
