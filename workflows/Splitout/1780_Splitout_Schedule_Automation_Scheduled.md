# Splitout Schedule Automation Scheduled
## 🚀 What It Does
Automates a flow using stickyNote×4, set×2, baserow.

## 💼 Business Use Case
Use to eliminate manual copy-paste and standardize a recurring business process.

## ⚙️ How It Works
1. **Trigger:** Runs on a **schedule** (e.g., `[object Object]`).
2. **Every day at 00:00** `scheduleTrigger` — rule: "[object Object]"
3. **Sticky Note4** `stickyNote` — color: "4", width: "360.408084305475", height: "315.5897364788551"
4. **Sticky Note3** `stickyNote` — width: "279.1188177339898", content: "## Set your Shopify Subdomain here"
5. **Sticky Note** `stickyNote` — width: "279.1188177339898", content: "## Shopify 
The n8n Shopify node cannot get the customer journey, so we get this from the Shopify GraphQL API"
6. **Sticky Note2** `stickyNote` — width: "279.1188177339898", height: "157.78205353137358", content: "## Baserow
Please map the fields coming from the IF node to your own structure in Baserow"
7. **Set Shopify Subdomain** `set` — fields: "[object Object]", options: "[object Object]"
8. **Get orders from Shopify** `graphql` — query: "=query yersterdaysOrders {
  orders(query: "created_at:{{$today.minus({days: 1})}}", first: 100) {
    edges {
      node {
        id
        name
        totalReceived
        cu…[truncated]", endpoint: "=https://{{ $('Set Shopify Subdomain').params["fields"]["values"][0]["stringValue"] }}.myshopify.com/admin/api/2024-01/graphql.json", authentication: "headerAuth"
9. **Split Shopify data into n8n items** `splitOut` — options: "[object Object]", fieldToSplitOut: "data.orders.edges"
10. **Transform incoming data structure** `set` — fields: "[object Object]", include: "none", options: "[object Object]"
11. **Check if "Campaign" is present** `if` — options: "[object Object]", conditions: "[object Object]"
12. **Baserow** `baserow` — operation: **create**, table: `646`
13. **No Operation, do nothing** `noOp` — configured for its default action.

## 💡 AI-Powered Ideas for Improvement
### Explain
This n8n workflow automates the daily retrieval of Shopify orders, processes the data, and stores it in Baserow for further analysis. It runs every day at midnight, fetching orders from the previous day, extracting details like order ID, total received, and UTM parameters. It checks if a "Campaign" parameter is present and if so, records the data in Baserow, which helps in tracking marketing efforts and customer journeys.

### Demonstrate
A business owner can use this workflow to automate the collection of Shopify order data and analyze marketing campaign effectiveness, ensuring they make data-driven decisions to optimize sales strategies.

### Imitate
1. Import the workflow into n8n.
2. Set your Shopify subdomain in the "Set Shopify Subdomain" node.
3. Connect your Shopify and Baserow accounts.
4. Customize the Baserow node to match your database structure.
5. Activate the workflow to run daily.

### Practice
Create a test environment in Shopify and Baserow, then run the workflow manually. Check if orders are correctly recorded in Baserow, and adjust the field mappings as needed for accuracy.

### WIIFM
Mastering this workflow can enhance your ability to offer comprehensive e-commerce analytics services, helping clients optimize marketing campaigns and track sales performance, which can increase your value as an automation consultant and lead to more business opportunities.

## 🔧 Setup Instructions
1. **Connect Credentials:** baserowApi, httpHeaderAuth.
2. **Cron/Schedule:** Confirm timezone and cadence; start with a test window (e.g., every 5 minutes) then scale.

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
