# Code Schedule Create Webhook
  ## 🚀 What It Does
  Automates a flow using stickyNote×9, if×3, stripe×2.
  
  ## 💼 Business Use Case
  Use as a **glue/API broker**: receive data, enrich/validate via APIs, and pass to downstream systems.
  
  ## ⚙️ How It Works
  1. **Trigger:** Runs on a **schedule** (e.g., `[object Object]`).
  2. **On schedule** `scheduleTrigger` — rule: "[object Object]"
3. **Note** `stickyNote` — width: "219.61431588546765", height: "378.32426823578305", content: "### `Merge data`
More specifically, we merge the Stripe data from `Get charges` and `Get customer` nodes. Only the charges with customers on them will continue."
4. **Note1** `stickyNote` — width: "218.46574043407196", height: "379.1631729345614", content: "### `Aggregate totals`
Given the merged data, we now aggregate the amounts from charges to the customers/contacts."
5. **Note2** `stickyNote` — width: "297.57428772569784", height: "325.06310253513686", content: "### ``Aggregate `amount_captured` ``
This does nothing. It is an alternative way to find the totals of every charge in existence in Stripe. Potentially useful for debugging purpose…[truncated]"
6. **Note3** `stickyNote` — width: "504", height: "510.0404950205649", content: "## Sync Stripe charges to HubSpot contacts
This workflow pushes Stripe charges to HubSpot contacts. It uses the Stripe API to get all charges and the HubSpot API to update the cont…[truncated]"
7. **Note4** `stickyNote` — width: "298.2919335506821", height: "339.6783118583311", content: "### `Remove duplicate customers`
Ensures that we do not poll Stripe too many times unnecessarily. If multiple charges have the same customer, we ensure that we do not ask for the s…[truncated]"
8. **Note5** `stickyNote` — width: "656.5118956254801", height: "367.20468504951214", content: "### Create HubSpot field if required
















_These nodes create a HubSpot field if required.
It makes the contact field that this workflow uses 
to store the Stripe inform…[truncated]"
9. **Note6** `stickyNote` — width: "338.8262165118159", height: "505.43603897947025", content: "### Configuration












By default, this does not need to be updated. 

__`contactPropertyId` (required)__: Only change if the specific HubSpot field ID has been taken.

__`c…[truncated]"
10. **Note7** `stickyNote` — width: "219.86482940052417", height: "377.58888520886353", content: "### `Create or update customer`
By default, the only field updated is "Stripe - Total Spend". The contact is identified by its email."
11. **Note8** `stickyNote` — width: "298.2919335506821", height: "247.94509463108915", content: "### `Do nothing`
This is useful to know what Stripe charges had no customer assigned."
12. **Configure** `set` — values: "[object Object]", options: "[object Object]"
13. **Skip field checking** `if` — conditions: "[object Object]"
14. **Get HubSpot field** `httpRequest` — url: `=https://api.hubapi.com/crm/v3/properties/contact/{{$("Configure").first().json["contactPropertyId"]}}`
15. **If field exists** `if` — conditions: "[object Object]"
16. **Create field in HubSpot** `httpRequest` — method: **POST**, url: `https://api.hubapi.com/crm/v3/properties/contact`
17. **Get all charges** `stripe` — resource: **charge**, operation: **getAll**
18. **If charge has customer** `if` — conditions: "[object Object]"
19. **Remove duplicate customers** `itemLists` — operation: **removeDuplicates**
20. **Aggregate `amount_captured`** `itemLists` — operation: **aggregateItems**
21. **Do nothing** `noOp` — configured for its default action.
22. **Get customer** `stripe` — resource: **customer**
23. **Merge data** `merge` — mode: "combine", options: "[object Object]", mergeByFields: "[object Object]"
24. **Aggregate totals** `code` — jsCode: "// aggregate `amounts_captured` with the customer, taking note 
// that `aggregateAmountsPerContact` is the value in cents
const aggregateAmountsPerContact = new Object();
for (con…[truncated]"
25. **Create or update customer** `hubspot` — resource: **contact**
  
  ## 💡 AI-Powered Ideas for Improvement
  **Explain**  
This n8n workflow syncs Stripe charges with HubSpot contacts. It retrieves all Stripe charges, checks for associated customers, removes duplicates, aggregates total spend, and updates HubSpot contacts with this information. It runs on a set schedule and ensures that only charges with customer information are processed.

**Demonstrate**  
A business owner uses this workflow to automatically update their CRM (HubSpot) with the total spending of each customer from Stripe transactions, helping them better understand customer value and tailor marketing efforts.

**Imitate**  
1. Import the workflow into n8n.
2. Connect Stripe and HubSpot accounts.
3. Schedule the workflow to run at desired intervals.
4. Configure the HubSpot field to store Stripe data.
5. Test to ensure the workflow updates HubSpot correctly.

**Practice**  
Create a test Stripe account and HubSpot account. Run the workflow with test transactions to observe how customer spending data is aggregated and updated in HubSpot. Adjust settings and test different scenarios.

**WIIFM**  
Mastering this workflow allows you to offer CRM integration services, enhancing customer data management and marketing strategies. This service can attract businesses looking to automate and optimize their sales and marketing processes, thus generating income for your AI automation business.
  
  ## 🔧 Setup Instructions
  1. **Connect Credentials:** stripeApi, hubspotOAuth2Api.
2. **Cron/Schedule:** Confirm timezone and cadence; start with a test window (e.g., every 5 minutes) then scale.
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
  