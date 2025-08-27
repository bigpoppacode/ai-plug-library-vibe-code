# Manual HTTP Send Webhook
  ## 🚀 What It Does
  Automates a flow using stickyNote×3, manualTrigger, code.
  
  ## 💼 Business Use Case
  Use as a **glue/API broker**: receive data, enrich/validate via APIs, and pass to downstream systems.
  
  ## ⚙️ How It Works
  1. **Trigger:** This workflow starts with **When clicking "Execute Workflow"**.
  2. **When clicking "Execute Workflow"** `manualTrigger` — configured for its default action.
3. **Sticky Note** `stickyNote` — height: "243.6494382022472", content: "## Perform an email search with Icypeas (single)

This workflow demonstrates how to perform an email search using Icypeas. Visit https://icypeas.com to create your account.


"
4. **Sticky Note1** `stickyNote` — width: "506", height: "1042.9602832148855", content: "[redacted]"
5. **Sticky Note2** `stickyNote` — width: "492", height: "961.061974298911", content: "[redacted]"
6. **Authenticates to your Icypeas account** `code` — jsCode: "[redacted]"
7. **Run email search (single)** `httpRequest` — method: **POST**, url: `={{ $json.api.url }}`
  
  ## 💡 AI-Powered Ideas for Improvement
  **Explain:**  
This n8n workflow performs an email search using the Icypeas service. When executed, it authenticates with your Icypeas account using API credentials, and sends a request to search for an email address based on specified criteria like first name, last name, and company domain. The workflow ensures you can easily find email addresses related to specific individuals within a company.

**Demonstrate:**  
A recruiter could use this workflow to find email addresses of potential candidates by searching with their names and associated company domains, streamlining the recruitment process.

**Imitate:**  
1. Import the workflow into n8n.
2. Get your Icypeas API credentials and insert them in the code node.
3. Set up a trigger to execute the workflow.
4. Customize the body parameters with the names and domain you want to search.
5. Run the workflow to test email searches.

**Practice:**  
Create a new Icypeas account and use the workflow to search for email addresses of colleagues or test names using fictitious company domains. Observe how the workflow retrieves and processes the data.

**WIIFM:**  
Mastering this workflow enables you to offer efficient contact discovery services to clients, adding value to your business by helping them expand their network and reach potential leads or employees, thereby generating income through automation services.
  
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
  