# Telegram Schedule Update Webhook
## 🚀 What It Does
Automates a flow using stickyNote×13, ssh×4, telegram×3.

## 💼 Business Use Case
Use as a **glue/API broker**: receive data, enrich/validate via APIs, and pass to downstream systems.

## ⚙️ How It Works
1. **Trigger:** This workflow starts with **When clicking ‘Test workflow’**.
2. **When clicking ‘Test workflow’** `manualTrigger` — configured for its default action.
3. **Schedule Trigger** `scheduleTrigger` — rule: "[object Object]"
4. **Sticky Note** `stickyNote` — height: "500", content: "## Default Variables  
Before starting, please set the following variables:  

- **working-directory**: The directory where your `docker-compose.yml` file is located.  
- **n8n-con…[truncated]"
5. **Sticky Note1** `stickyNote` — height: "300", content: "














Get information from the n8n GitHub repository to find the latest released version of n8n.  
"
6. **Sticky Note2** `stickyNote` — height: "300", content: "











This node removes "n8n@" from the version string.  
For example:  
- Before: `n8n@1.84.3`  
- After: `1.84.3`  

"
7. **Sticky Note3** `stickyNote` — height: "400", content: "## Check Installed Image Version  
Execute a command on the server to determine which version of n8n is currently running.  
"
8. **Sticky Note4** `stickyNote` — width: "420", height: "520", content: "## SQL Query: Merging Inputs  
This query retrieves the `stdout` field from `input1` and `tag_name` from `input2`.  
It uses a `LEFT JOIN` to merge the data based on matching `id` …[truncated]"
9. **Sticky Note5** `stickyNote` — height: "380", content: "## Telegram Notificaton [OPTIONAL]
Send a Telegram message and inform that there is nothing to do and n8n is already on the latest version.








"
10. **Sticky Note6** `stickyNote` — height: "340", content: "## Compare Versions  
This node compares two versions: one from Docker and another from the n8n GitHub repository.  
If a new version is available, it will be detected.  


"
11. **Sticky Note7** `stickyNote` — height: "340", content: "## Telegram Approve
Send a Telegram notification and inform that a new version is available. Ask if the user wants to update.











"
12. **Sticky Note8** `stickyNote` — height: "340", content: "## Pull Docker Image
Pull the latest n8n image. You can modify the command as needed.








"
13. **Sticky Note9** `stickyNote` — height: "340", content: "## Docker Compose Pull
Runs in the directory you defined in the Default variable.









"
14. **Sticky Note10** `stickyNote` — height: "340", content: "## Docker Compose Up 
In this step, the container will be started with the new image.










"
15. **Sticky Note11** `stickyNote` — height: "340", content: "## Telegram Notificaton
Send a Telegram notification and inform that n8n has been updated.








"
16. **Sticky Note12** `stickyNote` — height: "340", content: "## Schedule Trigger  
You can schedule this workflow, for example, every three days to check n8n images.





"
17. **Set Default variable** `set` — options: "[object Object]", assignments: "[object Object]"
18. **check n8n installed version** `ssh` — cwd: "={{ $json['working-directory'] }}", command: "=sudo docker inspect "{{ $json['n8n-container-name'] }}" | jq -r '.[0].Config.Labels["org.opencontainers.image.version"]'"
19. **Github HTTP Request** `httpRequest` — url: `https://api.github.com/repos/n8n-io/n8n/releases/latest`
20. **Edit Version String** `set` — options: "[object Object]", assignments: "[object Object]"
21. **Merge Results** `merge` — mode: "combineBySql", query: "SELECT input1.stdout, input2.tag_name 
FROM input1 
LEFT JOIN input2 ON true;"

## 💡 AI-Powered Ideas for Improvement
**Explain:** This n8n workflow is designed to automate the process of checking and updating the n8n application running on a server. It compares the installed version of n8n with the latest version available on GitHub. If a newer version is available, the workflow pulls the latest Docker image, updates the container, and sends notifications via Telegram to inform users about the update status.

**Demonstrate:** A developer managing multiple servers with n8n instances can use this workflow to ensure all instances are up-to-date, minimizing security risks and ensuring access to new features without manual checks.

**Imitate:** Import the workflow into your n8n instance, configure the necessary variables such as working directory and container name, connect your Telegram account, and set a schedule to run the workflow periodically. Test the setup by triggering it manually to see how it updates and notifies you.

**Practice:** Create a test environment with an outdated n8n version. Run the workflow to observe how it detects the version difference, updates the Docker image, and sends notifications. Modify variables to see different outcomes.

**WIIFM:** Mastering this workflow allows you to offer automated update management services for n8n deployments, ensuring clients' systems are secure and up-to-date. This expertise can enhance your service offerings and increase potential revenue streams in automation consulting.

## 🔧 Setup Instructions
1. **Connect Credentials:** sshPassword, telegramApi.
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
