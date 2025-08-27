# FunctionItem Pipedrive Create Scheduled
  ## 🚀 What It Does
  Automates a flow using merge×2, pipedrive×2, functionItem×2.
  
  ## 💼 Business Use Case
  Use as a **glue/API broker**: receive data, enrich/validate via APIs, and pass to downstream systems.
  
  ## ⚙️ How It Works
  1. **Trigger:** This workflow starts with **Get customers**.
  2. **Get customers** `stripe` — resource: **customer**, operation: **getAll**
3. **Every day at 8 am** `cron` — triggerTimes: "[object Object]"
4. **Rename fields and keep only needed fields** `set` — values: "[object Object]", options: "[object Object]", keepOnlySet: "true"
5. **Get last execution timestamp** `functionItem` — functionCode: "// Code here will run once per input item.
// More info and help: https://docs.n8n.io/nodes/n8n-nodes-base.functionItem
// Tip: You can use luxon for dates and $jmespath for queryi…[truncated]"
6. **Search for charges in Stripe** `httpRequest` — url: `https://api.stripe.com/v1/charges/search`
7. **Split array of charges to items** `itemLists` — options: "[object Object]", fieldToSplitOut: "data"
8. **Add customer name to charge data** `merge` — mode: "mergeByKey", propertyName1: "customer", propertyName2: "customerId"
9. **Search organisation** `pipedrive` — resource: **organization**, operation: **search**
10. **Add organisation Information to charge data** `merge` — join: "inner", mode: "mergeByIndex"
11. **Create note with charge information** `pipedrive` — resource: **note**
12. **Set new last execution timestamp** `functionItem` — functionCode: "// Code here will run once per input item.
// More info and help: https://docs.n8n.io/nodes/n8n-nodes-base.functionItem
// Tip: You can use luxon for dates and $jmespath for queryi…[truncated]"
  
  ## 💡 AI-Powered Ideas for Improvement
  **Explain:**  
This n8n workflow automates customer and charge management using Stripe and Pipedrive. It retrieves all Stripe customers daily at 8 am, gets recent successful charges since the last execution, and associates each charge with its customer and organization. It then creates a note in Pipedrive with the charge details and updates the last execution timestamp for future runs.

**Demonstrate:**  
A business owner could use this workflow to automatically track customer charges and maintain updated records in their CRM, ensuring accurate data for financial analysis and customer relationship management.

**Imitate:**  
1. Import the workflow into n8n.
2. Connect your Stripe and Pipedrive accounts.
3. Schedule the workflow to run daily.
4. Ensure your Pipedrive has organization data matching your customers.
5. Test the workflow to ensure it logs charges correctly.

**Practice:**  
Create a test environment with a few Stripe customers and mock charges. Run the workflow and check if it logs the charge details in Pipedrive accurately. Adjust field mappings if necessary.

**WIIFM:**  
Mastering this workflow helps streamline financial tracking and CRM updates, freeing time for strategic tasks. Offering such automations as a service can attract clients seeking to optimize their operations, potentially increasing your income and business reach.
  
  ## 🔧 Setup Instructions
  1. **Connect Credentials:** stripeApi, pipedriveApi.
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
  