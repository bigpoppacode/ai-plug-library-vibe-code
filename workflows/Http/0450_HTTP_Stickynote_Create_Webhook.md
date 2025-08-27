# HTTP Stickynote Create Webhook
  ## 🚀 What It Does
  Automates a flow using httpRequest×4, stickyNote×3, set×2.
  
  ## 💼 Business Use Case
  Use as a **glue/API broker**: receive data, enrich/validate via APIs, and pass to downstream systems.
  
  ## ⚙️ How It Works
  1. **Trigger:** This workflow starts with **Sticky Note**.
  2. **Bug Webhook** `webhook` — method: **POST**, path: `/e6d88547-5423-4b01-bc7f-e1f94274c4b2`
3. **Sticky Note** `stickyNote` — color: "7", width: "446", height: "321"
4. **Sticky Note1** `stickyNote` — color: "7", width: "599.3676814988288", height: "298.0562060889928"
5. **Get all linear teams** `httpRequest` — method: **POST**, url: `https://api.linear.app/graphql`
6. **Set team ID** `set` — options: "[object Object]", assignments: "[object Object]"
7. **Sticky Note2** `stickyNote` — color: "5", width: "372.78688524590143", height: "358.12646370023407"
8. **Set me up** `set` — options: "[object Object]", assignments: "[object Object]"
9. **Get linear labels for a team** `httpRequest` — method: **POST**, url: `https://api.linear.app/graphql`
10. **Create linear issue** `httpRequest` — method: **POST**, url: `https://api.linear.app/graphql`
11. **Hidden message to add bug details** `httpRequest` — method: **POST**, url: `={{ $('Bug Webhook').item.json.body.response_url }}`
  
  ## 💡 AI-Powered Ideas for Improvement
  ### Explain
This n8n workflow automates the process of logging bugs reported via Slack into Linear, a project management tool. When a user submits a bug through a Slack command, the workflow captures the details, retrieves the necessary team and label information from Linear, creates a new issue in Linear with those details, and then sends a confirmation message back to Slack with a link to the new Linear issue.

### Demonstrate
A software development company could use this workflow to streamline their bug reporting process. By integrating Slack with Linear, developers can easily report bugs during discussions, ensuring that issues are logged consistently and efficiently without leaving their communication platform.

### Imitate
1. Set up a Slack app with a command to trigger the webhook.
2. Connect n8n to your Linear account.
3. Import the workflow into n8n and configure it with your Slack and Linear credentials.
4. Test the workflow by submitting a bug via Slack and verify it creates an issue in Linear.

### Practice
Create a test Slack workspace and Linear account. Set up the workflow and submit bug reports using the Slack command. Check if the issues appear correctly in Linear and if the Slack confirmation messages include the correct issue links.

### WIIFM
Mastering this workflow allows you to offer automated bug tracking solutions to software development teams, enhancing their productivity and communication. This can expand your service offerings, attract more clients, and increase your revenue in the automation business.
  
  ## 🔧 Setup Instructions
  1. **Connect Credentials:** linearOAuth2Api.
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
  