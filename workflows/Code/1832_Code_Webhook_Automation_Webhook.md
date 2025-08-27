# Code Webhook Automation Webhook
  ## 🚀 What It Does
  Automates a flow using set×24, switch×6, if×3.
  
  ## 💼 Business Use Case
  Use as a **glue/API broker**: receive data, enrich/validate via APIs, and pass to downstream systems.
  
  ## ⚙️ How It Works
  1. **Trigger:** This workflow starts with **Sticky Note**.
  2. **API** `webhook` — method: **POST**, path: `/docker-nextcloud`
3. **Sticky Note** `stickyNote` — color: "6", width: "639", height: "909"
4. **Parametrs** `set` — options: "[object Object]", assignments: "[object Object]"
5. **If** `if` — options: "[object Object]", conditions: "[object Object]"
6. **Container Stats** `switch` — rules: "[object Object]", options: "[object Object]"
7. **Container Actions** `switch` — rules: "[object Object]", options: "[object Object]"
8. **NextCloud** `switch` — rules: "[object Object]", options: "[object Object]"
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
28. **Test Connection** `set` — options: "[object Object]", assignments: "[object Object]"
29. **Deploy** `set` — options: "[object Object]", assignments: "[object Object]"
30. **Split domain** `code` — jsCode: "const domain = $('API').item.json.body.domain;

const parts = domain.split('.');

let subDomain = '';
let mainDomain = domain;

if (parts.length > 2) {
    subDomain = parts[0]; 
 …[truncated]"
31. **Suspend** `set` — options: "[object Object]", assignments: "[object Object]"
32. **Unsuspend** `set` — options: "[object Object]", assignments: "[object Object]"
33. **Terminated** `set` — options: "[object Object]", assignments: "[object Object]"
34. **ChangePackage** `set` — options: "[object Object]", assignments: "[object Object]"
35. **DNS Parametrs** `set` — options: "[object Object]", assignments: "[object Object]"
36. **Servers Switch** `switch` — rules: "[object Object]", options: "[object Object]"
37. **If2** `if` — options: "[object Object]", conditions: "[object Object]"
38. **d01-test.uuq.pl** `ssh` — cwd: "=/", command: "={{ $json.sh }}"
39. **d02-test.uuq.pl** `ssh` — cwd: "=/", command: "={{ $json.sh }}"
40. **DNS Service Actions** `switch` — rules: "[object Object]", options: "[object Object]"
41. **Code** `code` — mode: "runOnceForEachItem", jsCode: "try {
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
42. **Add record** `httpRequest` — method: **PATCH**, url: `={{ $('DNS Parametrs').item.json.api_url }}/api/v1/servers/localhost/zones/{{ $('Split domain').item.json.mainDomain }}`
43. **API answer1** `respondToWebhook` — options: "[object Object]", respondWith: "json", responseBody: "{
  "status": "success",
  "message": "",
  "data": ""
}
"
44. **Delete record** `httpRequest` — method: **PATCH**, url: `={{ $('DNS Parametrs').item.json.api_url }}/api/v1/servers/localhost/zones/{{ $('Split domain').item.json.mainDomain }}`
45. **API answer2** `respondToWebhook` — options: "[object Object]", respondWith: "allIncomingItems"
  
  ## 💡 AI-Powered Ideas for Improvement
  - **Explain:** This workflow automates the deployment and management of NextCloud instances using Docker, based on API requests. It starts by receiving a webhook POST request, checks the server domain, and performs actions like starting, stopping, or updating Docker containers. It also manages DNS records and server configurations for WHMCS/WISECP integration.
  
- **Demonstrate:** A web hosting company could use this to automate the deployment of NextCloud instances for new customers, ensuring consistent setups and efficient resource management. It streamlines operations by reducing manual intervention in server management.

- **Imitate:** 1. Set up a webhook to receive POST requests. 2. Configure Docker and DNS settings in n8n. 3. Customize the workflow to match your server environment. 4. Test with a sample API call to ensure containers are managed as expected.

- **Practice:** Try creating a test deployment of a NextCloud instance using this workflow. Use a local Docker environment and a mock API request to simulate the process. Adjust parameters to see the effects on container management.

- **WIIFM:** This workflow enables you to offer automated cloud services, reducing operational overhead and allowing you to scale your business. By mastering it, you can provide robust, scalable solutions to clients, increasing your marketability and potential revenue streams.
  
  ## 🔧 Setup Instructions
  1. **Connect Credentials:** httpBasicAuth, sshPassword.
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
  