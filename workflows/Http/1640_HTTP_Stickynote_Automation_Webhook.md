# HTTP Stickynote Automation Webhook
  ## 🚀 What It Does
  Automates a flow using httpRequest×5, set×3, manualTrigger.
  
  ## 💼 Business Use Case
  Use as a **glue/API broker**: receive data, enrich/validate via APIs, and pass to downstream systems.
  
  ## ⚙️ How It Works
  1. **Trigger:** This workflow starts with **When clicking ‘Test workflow’**.
  2. **When clicking ‘Test workflow’** `manualTrigger` — configured for its default action.
3. **Sticky Note1** `stickyNote` — width: "580", height: "380", content: "[redacted]"
4. **Set Github Info** `set` — options: "[object Object]", assignments: "[object Object]"
5. **File 1** `set` — options: "[object Object]", assignments: "[object Object]"
6. **File 2** `set` — options: "[object Object]", assignments: "[object Object]"
7. **Get latest commit SHA** `httpRequest` — url: `=https://api.github.com/repos/{{ $('Set Github Info').item.json['Github Username'] }}/{{ $('Set Github Info').item.json['Github Repo'] }}/git/refs/heads/{{ $('Set Github Info').ite…[truncated]`
8. **Get base tree SHA** `httpRequest` — url: `=https://api.github.com/repos/{{ $('Set Github Info').item.json['Github Username'] }}/{{ $('Set Github Info').item.json['Github Repo'] }}/git/commits/{{ $json.object.sha }}`
9. **Create new tree** `httpRequest` — method: **POST**, url: `=https://api.github.com/repos/{{ $('Set Github Info').item.json['Github Username'] }}/{{ $('Set Github Info').item.json['Github Repo'] }}/git/trees`
10. **Create commit** `httpRequest` — method: **POST**, url: `=https://api.github.com/repos/{{ $('Set Github Info').item.json['Github Username'] }}/{{ $('Set Github Info').item.json['Github Repo'] }}/git/commits`
11. **Update branch** `httpRequest` — method: **PATCH**, url: `=https://api.github.com/repos/{{ $('Set Github Info').item.json['Github Username'] }}/{{ $('Set Github Info').item.json['Github Repo'] }}/git/refs/heads/{{ $('Set Github Info').ite…[truncated]`
  
  ## 💡 AI-Powered Ideas for Improvement
  **Explain:** This n8n workflow automates the process of uploading multiple files to a GitHub repository using the GitHub REST API. It retrieves the latest commit information, creates a new tree with the files specified, commits these changes, and updates the branch to reflect the new commit. This is particularly useful for scenarios where batch file uploads are required, overcoming the limitation of the native n8n GitHub node that supports only single-file uploads.

**Demonstrate:** A software development team could use this workflow to automate the deployment of configuration files or documentation updates to their GitHub repository, ensuring that multiple files are uploaded simultaneously and consistently.

**Imitate:** 1. Import the workflow into n8n. 2. Set up your GitHub credentials in the "Set Github Info" node. 3. Configure the "File 1" and "File 2" nodes with your file contents. 4. Test the workflow to ensure files are uploaded correctly.

**Practice:** Create a test GitHub repository and run the workflow with sample files. Modify file contents and observe the changes in the repository. Experiment with adding more files to the "Create new tree" node.

**WIIFM:** Mastering this workflow enables you to offer automated GitHub file management as a service, enhancing productivity and accuracy for development teams. This skill can attract clients looking to streamline their version control processes, potentially leading to increased income for your automation business.
  
  ## 🔧 Setup Instructions
  1. **API Contracts:** Validate required headers and 2xx/4xx handling; add retries for 429/5xx.
  
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
  