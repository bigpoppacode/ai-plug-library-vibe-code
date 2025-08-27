# FunctionItem HTTP Create Webhook
  ## 🚀 What It Does
  Automates a flow using httpRequest×2, pipedriveTrigger, functionItem.
  
  ## 💼 Business Use Case
  Use as a **glue/API broker**: receive data, enrich/validate via APIs, and pass to downstream systems.
  
  ## ⚙️ How It Works
  1. **Trigger:** This workflow starts with **On product created**.
  2. **On product created** `pipedriveTrigger` — action: "added", object: "product"
3. **Set item to only current product data** `functionItem` — functionCode: "// Code here will run once per input item.
// More info and help: https://docs.n8n.io/nodes/n8n-nodes-base.functionItem
// Tip: You can use luxon for dates and $jmespath for queryi…[truncated]"
4. **Create product in Stripe** `httpRequest` — url: `https://api.stripe.com/v1/products`
5. **Keep only productId of created product** `set` — values: "[object Object]", options: "[object Object]", keepOnlySet: "true"
6. **Add created product Id to data** `merge` — mode: "mergeByIndex"
7. **Split prices to seperate items** `itemLists` — include: "selectedOtherFields", options: "[object Object]", fieldToSplitOut: "prices"
8. **Create price records in Stripe** `httpRequest` — url: `https://api.stripe.com/v1/prices`
  
  ## 💡 AI-Powered Ideas for Improvement
  ### Explain
This n8n workflow automates the process of creating and pricing products in Stripe when a new product is added in Pipedrive. It listens for new product entries in Pipedrive, processes the product data, creates the product in Stripe, extracts the product ID, merges it with pricing data, splits the pricing details, and finally, creates corresponding price records in Stripe, ensuring seamless synchronization between Pipedrive and Stripe.

### Demonstrate
A small business owner using Pipedrive for sales management could use this workflow to automatically sync new product information with Stripe, streamlining product and price management across platforms, reducing manual data entry, and minimizing errors.

### Imitate
1. Import the workflow into n8n.
2. Connect your Pipedrive and Stripe accounts.
3. Trigger the workflow with a new product addition in Pipedrive.
4. Ensure the function node processes product data correctly.
5. Test the workflow to verify product and price creation in Stripe.

### Practice
Create a test product in Pipedrive with multiple pricing tiers. Run the workflow and check Stripe to see if the product and prices are correctly created. Modify a price and rerun to observe changes.

### WIIFM
Mastering this workflow allows you to offer automated product management services, enhancing client operations, and expanding your service offerings. This can lead to increased efficiency, customer satisfaction, and potential upsells in your automation business.
  
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
  