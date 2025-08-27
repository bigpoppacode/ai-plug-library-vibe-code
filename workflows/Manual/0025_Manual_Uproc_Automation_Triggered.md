# Manual uProc Automation Triggered
  ## 🚀 What It Does
  Automates a flow using awsSes×2, manualTrigger, uproc.
  
  ## 💼 Business Use Case
  Use to eliminate manual copy-paste and standardize a recurring business process.
  
  ## ⚙️ How It Works
  1. **Trigger:** This workflow starts with **Send Spanish Email**.
  2. **Send Spanish Email** `awsSes` — body: "Hola,

¡Gracias por registrarte!", subject: "Bienvenido a bordo", fromEmail: "sample@uproc.io"
  
  ## 💡 AI-Powered Ideas for Improvement
  ### Explain
This workflow determines the location of a user based on their IP address and sends a welcome email in either Spanish or English. It starts by creating an IP and email item, checks the user's geographical location, and if the user is in Spain, it sends a Spanish email, otherwise, it sends an English email.

### Demonstrate
A business can use this workflow to personalize their customer communication based on location. For instance, a company expanding into Spain can use it to automatically send welcome emails in Spanish to new users from Spain, enhancing customer engagement.

### Imitate
1. Import the workflow into your n8n instance.
2. Set up AWS SES credentials for email sending.
3. Adjust the IP and email data in the "Create IP and Email Item" node.
4. Test the workflow to ensure emails are sent based on location.

### Practice
Create a test workflow using a different IP address to simulate a user from another country. Verify if the correct email language is sent based on the simulated location.

### WIIFM
Mastering this workflow enables you to offer personalized email communication services, increasing customer engagement. This can be a valuable addition to your automation offerings, leading to enhanced client satisfaction and potential revenue growth in your automation business.
  
  ## 🔧 Setup Instructions
  1. **Connect Credentials:** uprocApi, aws.
  
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
  