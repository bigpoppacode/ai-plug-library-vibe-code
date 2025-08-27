# Hunter Form Send Webhook
  ## 🚀 What It Does
  Monitors events, processes them, and **notifies** people/apps (Slack/Email) with structured updates.
  
  ## 💼 Business Use Case
  Use as a **glue/API broker**: receive data, enrich/validate via APIs, and pass to downstream systems.
  
  ## ⚙️ How It Works
  1. **Trigger:** This workflow starts with **n8n Form Trigger**.
  2. **n8n Form Trigger** `formTrigger` — path: `/0bf8840f-1cc4-46a9-86af-a3fa8da80608`
3. **Sticky Note** `stickyNote` — color: "5", width: "547", height: "158"
4. **Sticky Note1** `stickyNote` — color: "7", width: "162", height: "139"
5. **Sticky Note2** `stickyNote` — color: "7", width: "162", height: "84"
6. **Sticky Note3** `stickyNote` — color: "7", width: "162", height: "84"
7. **Verify email with Hunter** `hunter` — operation: **emailVerifier**
8. **Check if the email is valid** `if` — options: "[object Object]", conditions: "[object Object]"
9. **Score lead with MadKudu** `httpRequest` — url: `=https://api.madkudu.com/v1/persons?email={{ $json.email }}`
10. **Email is not valid, do nothing** `noOp` — configured for its default action.
11. **if customer fit score > 60** `if` — options: "[object Object]", conditions: "[object Object]"
12. **Gmail** `gmail` — sendTo: "mutasem@n8n.io", message: "=Got a hot lead for you  {{ $json.properties.first_name }} {{ $json.properties.last_name }} from  {{ $json.company.properties.name }} ({{ $json.company.properties.domain }}) based …[truncated]", options: "[object Object]"
13. **Not interesting enough** `noOp` — configured for its default action.
  
  ## 💡 AI-Powered Ideas for Improvement
  ### Explain
This n8n workflow automates lead validation and scoring. It starts with a form submission, verifying the email with Hunter. If valid, the lead is scored using MadKudu. Leads with a score above 60 trigger an email alert, while invalid emails or low scores result in no further action.

### Demonstrate
A sales team could use this to automatically filter and prioritize leads. Validated, high-scoring leads are immediately flagged to sales reps, ensuring they focus on the most promising prospects, saving time and boosting conversion rates.

### Imitate
1. Import the workflow into n8n.
2. Connect Hunter, MadKudu, and Gmail accounts.
3. Customize the form trigger URL and email alert settings.
4. Test by submitting a form with a sample email.
5. Activate the workflow for production use.

### Practice
Create a test form and submit various emails, including invalid ones. Observe how the workflow processes each email, sending alerts for high-scoring leads and ignoring invalid ones. Adjust scoring criteria and email settings to fit your needs.

### WIIFM
Mastering this workflow enables you to streamline lead management, ensuring sales teams focus on high-value opportunities. Offering such automation solutions can enhance your service portfolio, attract more clients, and increase revenue in the AI automation business.
  
  ## 🔧 Setup Instructions
  1. **Connect Credentials:** httpHeaderAuth, hunterApi, gmailOAuth2.
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
  