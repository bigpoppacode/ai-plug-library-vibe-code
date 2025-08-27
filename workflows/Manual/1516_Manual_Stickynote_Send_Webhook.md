# Manual Stickynote Send Webhook
  ## 🚀 What It Does
  Automates a flow using stickyNote×3, manualTrigger, httpRequest.
  
  ## 💼 Business Use Case
  Use as a **glue/API broker**: receive data, enrich/validate via APIs, and pass to downstream systems.
  
  ## ⚙️ How It Works
  1. **Trigger:** This workflow starts with **When clicking "Execute Workflow"**.
  2. **When clicking "Execute Workflow"** `manualTrigger` — configured for its default action.
3. **Sticky Note** `stickyNote` — height: "250.2614840989399", content: "## Email verification with Icypeas (single)

This workflow demonstrates how to perform an email verification using Icypeas. Visit https://icypeas.com to create your account.


"
4. **Sticky Note1** `stickyNote` — width: "506", height: "1030", content: "[redacted]"
5. **Sticky Note2** `stickyNote` — width: "492", height: "748", content: "[redacted]"
6. **Authenticates to your Icypeas account** `code` — jsCode: "[redacted]"
7. **Run email verification (single)** `httpRequest` — method: **POST**, url: `={{ $json.api.url }}`
  
  ## 💡 AI-Powered Ideas for Improvement
  ### Explain
This n8n workflow is designed to verify email addresses using the Icypeas service. It starts manually, authenticates with your Icypeas account using API credentials, and then sends a POST request to Icypeas to check a single email for validity. This helps maintain clean and valid email lists for marketing or communication purposes.

### Demonstrate
A business owner could use this workflow to regularly clean their customer email list, ensuring only valid addresses are used for marketing campaigns. This reduces bounce rates and increases the effectiveness of email marketing efforts.

### Imitate
1. Import the workflow into your n8n instance.
2. Set up an Icypeas account and obtain API credentials.
3. Insert your API Key, Secret, and User ID into the code node.
4. Configure the HTTP Request node with the email you wish to verify.
5. Execute the workflow to test email verification.

### Practice
Create a sample list of email addresses and use this workflow to verify them. Observe the results returned by Icypeas and adjust your email list accordingly. This will help you understand how the workflow operates and its impact on your email data quality.

### WIIFM
Mastering this workflow enables you to offer email validation services, enhancing client email marketing effectiveness. This can expand your service offerings, improve client satisfaction, and potentially increase your income by offering reliable data management solutions.
  
  ## 🔧 Setup Instructions
  1. **Connect Credentials:** httpHeaderAuth.
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
  