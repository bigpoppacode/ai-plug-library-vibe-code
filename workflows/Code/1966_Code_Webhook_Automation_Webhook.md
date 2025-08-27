# Code Webhook Automation Webhook
  ## 🚀 What It Does
  Automates a flow using set×23, switch×4, if×2.
  
  ## 💼 Business Use Case
  Use to eliminate manual copy-paste and standardize a recurring business process.
  
  ## ⚙️ How It Works
  1. **Trigger:** This workflow starts with **Sticky Note**.
  2. **API** `webhook` — method: **POST**, path: `/docker-immich`
3. **Sticky Note** `stickyNote` — color: "6", width: "639", height: "909"
4. **Parametrs** `set` — options: "[object Object]", assignments: "[object Object]"
5. **If** `if` — options: "[object Object]", conditions: "[object Object]"
6. **Container Stat** `switch` — rules: "[object Object]", options: "[object Object]"
7. **Container Actions** `switch` — rules: "[object Object]", options: "[object Object]"
8. **Immich** `switch` — rules: "[object Object]", options: "[object Object]"
9. **If1** `if` — options: "[object Object]", conditions: "[object Object]"
10. **422-Invalid server domain** `respondToWebhook` — options: "[object Object]", respondWith: "json", responseBody: "[{
  "status": "error",
  "error": "Invalid server domain"
}]"
11. **Inspect** `set` — options: "[object Object]", assignments: "[object Object]"
12. **Stat** `set` — options: "[object Object]", assignments: "[object Object]"
13. **Log** `set` — options: "[object Object]", assignments: "[object Object]"
14. **Dependent containers Stat** `set` — options: "[object Object]", assignments: "[object Object]"
15. **Start** `set` — options: "[object Object]", assignments: "[object Object]"
16. **Stop** `set` — options: "[object Object]", assignments: "[object Object]"
17. **Mount Disk** `set` — options: "[object Object]", assignments: "[object Object]"
18. **Unmount Disk** `set` — options: "[object Object]", assignments: "[object Object]"
19. **GET ACL** `set` — options: "[object Object]", assignments: "[object Object]"
20. **SET ACL** `set` — options: "[object Object]", assignments: "[object Object]"
21. **GET NET** `set` — options: "[object Object]", assignments: "[object Object]"
22. **Version** `set` — options: "[object Object]", assignments: "[object Object]"
23. **Users** `set` — options: "[object Object]", assignments: "[object Object]"
24. **Change Password** `set` — options: "[object Object]", assignments: "[object Object]"
25. **nginx** `set` — options: "[object Object]", assignments: "[object Object]"
26. **Deploy-docker-compose** `set` — options: "[object Object]", assignments: "[object Object]"
27. **Service Actions** `switch` — rules: "[object Object]", options: "[object Object]"
28. **Test Connection1** `set` — options: "[object Object]", assignments: "[object Object]"
29. **Deploy** `set` — options: "[object Object]", assignments: "[object Object]"
30. **Suspend** `set` — options: "[object Object]", assignments: "[object Object]"
31. **Unsuspend** `set` — options: "[object Object]", assignments: "[object Object]"
32. **Terminated** `set` — options: "[object Object]", assignments: "[object Object]"
33. **ChangePackage** `set` — options: "[object Object]", assignments: "[object Object]"
34. **SSH** `ssh` — cwd: "=/", command: "={{ $json.sh }}"
35. **Code1** `code` — mode: "runOnceForEachItem", jsCode: "try {
  if ($json.stdout === 'success') {
    return {
      json: {
        status: 'success',
        message: '',
        data: '',
      }
    };
  }

  const parsedData = JSON…[truncated]"
36. **API answer** `respondToWebhook` — options: "[object Object]", respondWith: "allIncomingItems"
  
  ## 💡 AI-Powered Ideas for Improvement
  **Explain**: This n8n workflow automates the deployment and management of Docker containers for Immich, a photo and video management system, using API calls. It handles container operations like starting, stopping, and inspecting Docker containers, setting access control lists (ACLs), mounting disks, and managing network settings. The workflow also validates server domains and provides feedback on operations through webhooks.

**Demonstrate**: A business owner hosting a photo management service could use this workflow to automate the deployment and maintenance of their Docker-based application, ensuring it runs efficiently and securely with minimal manual intervention.

**Imitate**: To apply this workflow:
1. Import the JSON into your n8n instance.
2. Set up the necessary credentials for API and SSH access.
3. Modify the parameters node with your server details.
4. Test the workflow by sending POST requests to the `/docker-immich` endpoint with the appropriate JSON body.

**Practice**: Create a test environment with a Docker server and use this workflow to deploy a simple web application. Experiment with different container operations like starting, stopping, and inspecting to see how the workflow manages them.

**WIIFM**: Mastering this workflow enables you to offer automated Docker management services, reducing operational costs and improving service reliability for clients. This skill can be a valuable asset in a tech consulting or DevOps business, attracting more clients and increasing revenue through efficient automation solutions.
  
  ## 🔧 Setup Instructions
  1. **Connect Credentials:** httpBasicAuth, sshPassword.
  
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
  