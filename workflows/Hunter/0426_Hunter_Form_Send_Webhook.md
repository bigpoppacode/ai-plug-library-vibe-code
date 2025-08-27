# Hunter Form Send Webhook
  ## 🚀 What It Does
  Monitors events, processes them, and **notifies** people/apps (Slack/Email) with structured updates.
  
  ## 💼 Business Use Case
  Use as a **glue/API broker**: receive data, enrich/validate via APIs, and pass to downstream systems.
  
  ## ⚙️ How It Works
  1. **Trigger:** This workflow starts with **n8n Form Trigger**.
  2. **Sticky Note** `stickyNote` — color: "5", width: "731", height: "210.61602497398542"
3. **n8n Form Trigger** `formTrigger` — path: `/0bf8840f-1cc4-46a9-86af-a3fa8da80608`
4. **Sticky Note1** `stickyNote` — color: "7", width: "162", height: "139"
5. **Sticky Note2** `stickyNote` — color: "7", width: "162", height: "84"
6. **Sticky Note3** `stickyNote` — color: "7", width: "162", height: "84"
7. **Verify email with Hunter** `hunter` — operation: **emailVerifier**
8. **Check if the email is valid** `if` — options: "[object Object]", conditions: "[object Object]"
9. **Score lead with MadKudu** `httpRequest` — url: `=https://api.madkudu.com/v1/persons?email={{ $json.email }}`
10. **Email is not valid, do nothing** `noOp` — configured for its default action.
11. **if customer fit score > 60** `if` — options: "[object Object]", conditions: "[object Object]"
12. **HubSpot** `hubspot` — email: "={{ $json.email }}", options: "[object Object]", authentication: "oAuth2"
13. **Not interesting enough** `noOp` — configured for its default action.
14. **Set keys** `set` — options: "[object Object]", assignments: "[object Object]"
15. **Send outreach email** `gmail` — sendTo: "={{ $json.to }}", message: "={{ $json.html }}", options: "[object Object]"
16. **Record engagement in HubSpot** `hubspot` — resource: **engagement**
  
  ## 💡 AI-Powered Ideas for Improvement
  ### Explain
This n8n workflow automates lead validation and scoring. It starts with collecting an email via a form. The email is then verified using Hunter for validity. Valid emails proceed to be scored using MadKudu to assess customer fit. If the score exceeds 60, the lead is added to HubSpot for follow-up and an outreach email is sent using Gmail. Invalid emails or low-scoring leads are not processed further.

### Demonstrate
A business consultant could use this workflow to streamline the process of qualifying leads. By automatically filtering out invalid emails and low-potential leads, they can focus their efforts on high-value prospects, saving time and improving conversion rates.

### Imitate
1. Import the workflow into n8n.
2. Set up your credentials for MadKudu, Hunter, Gmail, and HubSpot.
3. Customize the email content and subject in the workflow.
4. Use the provided form URL to collect leads.
5. Test the workflow by submitting an email address to ensure it processes correctly.

### Practice
Create a test form and submit various email addresses, including invalid ones. Observe how the workflow filters and processes them. Adjust the customer fit score threshold and test how it affects lead qualification.

### WIIFM
Mastering this workflow empowers you to offer advanced lead qualification services. This can enhance your ability to deliver high-quality leads to clients, increasing their sales efficiency and your value as a service provider, ultimately boosting your income in the AI automation business.
  
  ## 🔧 Setup Instructions
  1. **Connect Credentials:** httpHeaderAuth, hunterApi, gmailOAuth2, hubspotOAuth2Api.
2. **Notification Targets:** Confirm channel/email IDs and that the bot/app is authorized to post.
3. **API Contracts:** Validate required headers and 2xx/4xx handling; add retries for 429/5xx.
  
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
  