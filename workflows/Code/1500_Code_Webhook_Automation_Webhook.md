# Code Webhook Automation Webhook
  ## 🚀 What It Does
  Automates a flow using set×21, switch×4, if×2.
  
  ## 💼 Business Use Case
  Use to eliminate manual copy-paste and standardize a recurring business process.
  
  ## ⚙️ How It Works
  1. **Trigger:** This workflow starts with **Sticky Note**.
  2. **API** `webhook` — method: **POST**, path: `/docker-minio`
3. **Sticky Note** `stickyNote` — color: "6", width: "639", height: "909"
4. **Parametrs** `set` — options: "[object Object]", assignments: "[object Object]"
5. **If** `if` — options: "[object Object]", conditions: "[object Object]"
6. **Container Stat** `switch` — rules: "[object Object]", options: "[object Object]"
7. **Container Actions** `switch` — rules: "[object Object]", options: "[object Object]"
8. **MinIO** `switch` — rules: "[object Object]", options: "[object Object]"
9. **If1** `if` — options: "[object Object]", conditions: "[object Object]"
10. **422-Invalid server domain** `respondToWebhook` — options: "[object Object]", respondWith: "json", responseBody: "[{
  "status": "error",
  "error": "Invalid server domain"
}]"
11. **Inspect** `set` — options: "[object Object]", assignments: "[object Object]"
12. **Stat** `set` — options: "[object Object]", assignments: "[object Object]"
13. **Log** `set` — options: "[object Object]", assignments: "[object Object]"
14. **Start** `set` — options: "[object Object]", assignments: "[object Object]"
15. **Stop** `set` — options: "[object Object]", assignments: "[object Object]"
16. **Mount Disk** `set` — options: "[object Object]", assignments: "[object Object]"
17. **Unmount Disk** `set` — options: "[object Object]", assignments: "[object Object]"
18. **GET ACL** `set` — options: "[object Object]", assignments: "[object Object]"
19. **SET ACL** `set` — options: "[object Object]", assignments: "[object Object]"
20. **GET NET** `set` — options: "[object Object]", assignments: "[object Object]"
21. **Version** `set` — options: "[object Object]", assignments: "[object Object]"
22. **Users** `set` — options: "[object Object]", assignments: "[object Object]"
23. **nginx** `set` — options: "[object Object]", assignments: "[object Object]"
24. **Deploy-docker-compose** `set` — options: "[object Object]", assignments: "[object Object]"
25. **Service Actions** `switch` — rules: "[object Object]", options: "[object Object]"
26. **Test Connection1** `set` — options: "[object Object]", assignments: "[object Object]"
27. **Deploy** `set` — options: "[object Object]", assignments: "[object Object]"
28. **Suspend** `set` — options: "[object Object]", assignments: "[object Object]"
29. **Unsuspend** `set` — options: "[object Object]", assignments: "[object Object]"
30. **Terminated** `set` — options: "[object Object]", assignments: "[object Object]"
31. **ChangePackage** `set` — options: "[object Object]", assignments: "[object Object]"
32. **SSH** `ssh` — cwd: "=/", command: "={{ $json.sh }}"
33. **Code1** `code` — mode: "runOnceForEachItem", jsCode: "try {
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
34. **API answer** `respondToWebhook` — options: "[object Object]", respondWith: "allIncomingItems"
  
  ## 💡 AI-Powered Ideas for Improvement
  **Explain:**  
This n8n workflow manages Docker containers using MinIO for storage and is triggered via an API call. It checks the validity of server domains, performs various container actions (like start, stop, mount/unmount disks), and manages network and access control settings. If the server domain is invalid, it returns an error. It uses SSH to interact with the system and execute commands based on the input received via the API.

**Demonstrate:**  
A business owner could use this workflow to automate the deployment and management of Docker containers for a web hosting service, ensuring efficient resource allocation and minimizing downtime.

**Imitate:**  
1. Import the workflow into n8n.
2. Set up API credentials and SSH access.
3. Update the parameters for server domain and directories.
4. Configure the API trigger and test with a POST request.
5. Customize the container actions as needed.

**Practice:**  
Create a test server with Docker installed. Set up a few Docker containers and use this workflow to automate starting and stopping them. Test different API commands to see how the workflow manages container operations.

**WIIFM:**  
By mastering this workflow, you can offer automated server management solutions, reducing operational costs and improving service reliability. This skill can attract clients looking for efficient infrastructure management, creating new revenue streams in the automation and AI industry.
  
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
  