# Filter Form Send Triggered
  ## 🚀 What It Does
  Monitors events, processes them, and **notifies** people/apps (Slack/Email) with structured updates.
  
  ## 💼 Business Use Case
  Great for **content, summarization, triage, or decisioning** where AI adds speed and consistency.
  
  ## ⚙️ How It Works
  1. **Trigger:** This workflow starts with **n8n Form Trigger**.
  2. **n8n Form Trigger** `formTrigger` — path: `/1ad4ce6c-f29a-4371-a5b9-a17ce7939280`
3. **Sticky Note** `stickyNote` — width: "272.6648579939821", height: "228.48330548901615", content: "### Setup
1. Add the `Clearbit` and `Gmail` credentials
2. Click on `Test Workflow`
3. Enter your own email (which needs to be a business email to work) in the Form
4. Check your e…[truncated]"
4. **Sticky Note1** `stickyNote` — color: "5", width: "190", height: "232"
5. **Sticky Note2** `stickyNote` — color: "5", width: "190", height: "229.23497494011445"
6. **Sticky Note3** `stickyNote` — color: "7", width: "190", height: "247.95993317363863"
7. **Sticky Note4** `stickyNote` — color: "5", width: "190", height: "218"
8. **Map email field** `set` — options: "[object Object]", assignments: "[object Object]"
9. **Filter out personal emails** `filter` — options: "[object Object]", conditions: "[object Object]"
10. **Clearbit** `clearbit` — resource: **person**
11. **Enrich Company** `clearbit` — domain: "={{ $json.employment.domain }}", additionalFields: "[object Object]"
12. **If B2B and > 499 employees** `if` — options: "[object Object]", conditions: "[object Object]"
13. **Send Email** `gmail` — sendTo: "={{ $('Map email field').item.json.email }}", message: "=Hi {{ $('Clearbit').item.json.name.givenName }},

thanks so much for contacting us. We'll get back to your soon.
Best
Your Name", options: "[object Object]"
14. **Submission does not match criteria, don't do anything** `noOp` — configured for its default action.
  
  ## 💡 AI-Powered Ideas for Improvement
  ### Explain
This n8n workflow automates the process of handling contact form submissions. When someone submits a form, their business email is extracted and checked to ensure it's not a personal email. The workflow uses Clearbit to enrich the email data, checking if the company is B2B and has more than 499 employees. If these conditions are met, a thank-you email is sent to the contact.

### Demonstrate
A business owner could use this workflow to efficiently manage incoming leads by ensuring only high-value business contacts receive follow-up emails, streamlining their sales process and focusing efforts on significant potential clients.

### Imitate
1. Import the workflow into n8n.
2. Add Clearbit and Gmail credentials.
3. Customize the form trigger path and form fields.
4. Adjust the conditions in the "If" node as needed.
5. Test and activate the workflow to start automating your lead management.

### Practice
Create a test form on your website and submit it using different types of emails. Observe how the workflow filters personal emails and processes business emails, sending a thank-you message only to those meeting the criteria.

### WIIFM
Mastering this workflow enables you to automate lead qualification, saving time and increasing efficiency. It helps you focus on valuable leads, potentially increasing conversion rates and revenue, making you a more attractive service provider in the automation industry.
  
  ## 🔧 Setup Instructions
  1. **Connect Credentials:** clearbitApi, gmailOAuth2.
2. **Notification Targets:** Confirm channel/email IDs and that the bot/app is authorized to post.
  
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
  