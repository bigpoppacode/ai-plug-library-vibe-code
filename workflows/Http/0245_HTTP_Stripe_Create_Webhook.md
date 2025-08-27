# HTTP Stripe Create Webhook
  ## 🚀 What It Does
  Automates a flow using if×2, pipedriveTrigger, pipedrive.
  
  ## 💼 Business Use Case
  Use as a **glue/API broker**: receive data, enrich/validate via APIs, and pass to downstream systems.
  
  ## ⚙️ How It Works
  1. **Trigger:** This workflow starts with **On deal updated**.
  2. **On deal updated** `pipedriveTrigger` — action: "updated", object: "deal"
3. **Current won time Not Equal to Previous** `if` — conditions: "[object Object]"
4. **Get organisation details** `pipedrive` — resource: **organization**, operation: **get**
5. **Search customer** `httpRequest` — url: `https://api.stripe.com/v1/customers/search`
6. **Customer does not exist** `if` — conditions: "[object Object]"
7. **Continue with organisation data** `merge` — mode: "passThrough", output: "input2"
8. **Create customer** `stripe` — resource: **customer**, operation: **create**
  
  ## 💡 AI-Powered Ideas for Improvement
  - **Explain:** This n8n workflow is triggered when a deal is updated in Pipedrive. It checks if the deal's "won" status has changed. If it has, it retrieves the organization's details and searches for a customer in Stripe using the organization's name. If the customer doesn't exist in Stripe, the workflow creates a new customer record in Stripe with the organization's details.

- **Demonstrate:** A business owner can use this workflow to automatically create customer records in Stripe when a deal is marked as won in Pipedrive, ensuring their billing system is always up-to-date.

- **Imitate:** Import the workflow into n8n and connect your Pipedrive and Stripe accounts. Customize the trigger to match your Pipedrive deal updates. Adjust the conditions and customer data mapping to fit your organization's data structure. Test the workflow with a sample deal update.

- **Practice:** Set up a test environment in Pipedrive with sample deals. Update a deal to "won" status and observe how the workflow processes the data and creates a customer in Stripe. Modify the workflow to handle different data fields or scenarios.

- **WIIFM:** Mastering this workflow enables you to automate customer management processes, reducing manual data entry and improving data consistency across platforms. This skill can enhance your service offerings, attract more clients, and increase your income in the AI automation business.
  
  ## 🔧 Setup Instructions
  1. **Connect Credentials:** pipedriveApi, stripeApi.
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
  