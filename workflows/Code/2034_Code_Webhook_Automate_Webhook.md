# Code Webhook Automate Webhook
  ## 🚀 What It Does
  Automates a flow using if×3, stickyNote×3, httpRequest×2.
  
  ## 💼 Business Use Case
  Use as a **glue/API broker**: receive data, enrich/validate via APIs, and pass to downstream systems.
  
  ## ⚙️ How It Works
  1. **Trigger:** This workflow starts with **Sticky Note**.
  2. **Webhook** `webhook` — path: `/891ad1cd-6a50-4a88-8789-95680c78f14c`
3. **Sticky Note** `stickyNote` — width: "510", height: "207", content: "[redacted]"
4. **Sticky Note1** `stickyNote` — content: "At this point the user is authenticated, you have access to his profile from the user info result and you continue doing things"
5. **Sticky Note2** `stickyNote` — width: "776", height: "336", content: "[redacted]"
6. **Set variables : auth, token, userinfo, client id, scope** `set` — values: "[object Object]", options: "[object Object]"
7. **Code** `code` — jsCode: "let myCookies = {};
let cookies = [];

cookies = $input.item.json.headers.cookie.split(';')
for (item of cookies ) {
  myCookies[item.split('=')[0].trim()]=item.split('=')[1].trim(…[truncated]"
8. **IF we have code in URI and not in PKCE mode** `if` — conditions: "[object Object]"
9. **get access_token from /token endpoint with code** `httpRequest` — method: **POST**, url: `[redacted]`
10. **IF token is present** `if` — conditions: "[object Object]"
11. **user info** `httpRequest` — url: `[redacted]`
12. **IF user info ok** `if` — conditions: "[object Object]"
13. **Welcome page** `html` — html: "<!DOCTYPE html>

<html>
<head>
  <meta charset="UTF-8" />
  <title>My HTML document</title>
</head>
<body>
  <div class="container">
    <h1>Welcome {{$('user info').item.json.emai…[truncated]"
14. **login form** `html` — html: "[redacted]"
15. **send back welcome page** `respondToWebhook` — options: "[object Object]", respondWith: "text", responseBody: "={{ $json.html }}"
16. **send back login page** `respondToWebhook` — options: "[object Object]", respondWith: "text", responseBody: "={{ $json.html }}"
  
  ## 💡 AI-Powered Ideas for Improvement
  **Explain:**  
This n8n workflow is designed to authenticate users using OpenID Connect (OIDC). It starts by capturing a request via a webhook, processes authentication using cookies, and retrieves an access token. If the token is valid, it fetches user information and displays a welcome page; otherwise, it shows a login form. This ensures that only authenticated users can access certain parts of an application, enhancing security.

**Demonstrate:**  
A developer could use this workflow to secure access to a web application, ensuring only authenticated users can view specific content or perform actions, thus protecting sensitive data and features.

**Imitate:**  
1. Import the workflow into n8n.
2. Set up your identity provider to provide auth, token, and userinfo URLs.
3. Configure the `Set variables` node with your client ID, scope, and redirect URI.
4. Test the workflow by visiting the webhook URL and completing the authentication flow.

**Practice:**  
Create a test environment with a mock identity provider and run the workflow. Experiment by altering the user information or token validity to see how the workflow responds, ensuring you understand each step.

**WIIFM:**  
Mastering this workflow enables you to offer authentication solutions to clients, ensuring secure access to applications. This can significantly increase your service offerings and value, as security is a top priority for businesses, leading to more opportunities and potential income.
  
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
  