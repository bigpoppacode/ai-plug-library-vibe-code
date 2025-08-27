# Splitout Code Automation Webhook
## 🚀 What It Does
Automates a flow using httpRequest×11, stickyNote×8, set×7.

## 💼 Business Use Case
Use as a **glue/API broker**: receive data, enrich/validate via APIs, and pass to downstream systems.

## ⚙️ How It Works
1. **Trigger:** Runs on a **schedule** (e.g., `[object Object]`).
2. **Sticky Note3** `stickyNote` — width: "730.3433300216063", height: "394.8862809393426", content: "## Shopify Line Locations
For multi-location Shopify accounts, these group of nodes get the active location id for each order line."
3. **Sticky Note6** `stickyNote` — width: "354.40926061252037", height: "398.9698970525732", content: "## Get Shopify Orders
1.- Get Shopify Orders created/updated since one day prior. The Flow will get every order created or updated on the last 24 hours.

2.- Filter to get paid ord…[truncated]"
4. **Sticky Note8** `stickyNote` — width: "974.6786178827637", height: "520.8878646073657", content: "## Existing Customer Lookup (Business Central)
Lookup for existing customer in Business Central based on the logic defined in the URI, if a customer exist then that id is used, oth…[truncated]"
5. **Sticky Note12** `stickyNote` — color: "3", width: "509.9611651710956", height: "705.3721586313337"
6. **Sticky Note** `stickyNote` — width: "978.7262207141349", height: "502.3149881728773", content: "## Existing Order Lookup (Business Central)

1.- This logic will avoid duplication of Business Central Sales Orders/Sales Invoices validating if an order with the same external Id …[truncated]"
7. **Sticky Note10** `stickyNote` — width: "1330.0330040471722", height: "434.94851154152406", content: "## Sales Order Creation

1.- Map on the "Sales Order Mapping" node any requiered fields to be integrated into Business Central.

2- The HTTP Node will perform a POST call to Busine…[truncated]"
8. **Sticky Note11** `stickyNote` — width: "442.73662194943114", height: "398.9698970525732", content: "## Configure Business Central Environment Variables
1.- Enter your BC tenantId,companyId, name.
2.- Set the SKU number for the Items to be used for Taxes and Discounts."
9. **Schedule Trigger** `scheduleTrigger` — rule: "[object Object]"
10. **Sticky Note13** `stickyNote` — width: "1330.0330040471722", height: "434.94851154152406", content: "## Sales Order Creation

1. Map on the "Sales Invoice Mapping" node any requiered fields to be integrated into Business Central.

2. The HTTP Node will perform a POST call to Busin…[truncated]"
11. **D365 BC Environment Settings** `set` — values: "[object Object]", options: "[object Object]", keepOnlySet: "true"
12. **Shopify** `shopify` — operation: **getAll**
13. **Filter** `filter` — conditions: "[object Object]"
14. **GetFufillmentOrders** `httpRequest` — url: `=https://integrocloud.myshopify.com/admin/api/2024-01/orders/{{ $json.id }}/fulfillment_orders.json`
15. **SelectFields** `set` — values: "[object Object]", options: "[object Object]", keepOnlySet: "true"
16. **orderPreprocessing** `code` — mode: "runOnceForEachItem", jsCode: "const orderJson = $input.item.json;

// Create a map of line_item_id to assigned_location_id
const lineItemToLocationMap = {};
orderJson.fulfillment_orders.forEach(fulfillmentOrder…[truncated]"

## 💡 AI-Powered Ideas for Improvement
**Explain**  
This n8n workflow automates the process of integrating Shopify orders into Microsoft Dynamics 365 Business Central. It retrieves new or updated Shopify orders, filters for paid ones, and processes them to avoid duplicates. If a customer exists in Business Central, it uses their ID; otherwise, it creates a new customer. The workflow then creates sales orders or invoices in Business Central, depending on whether the order was from a Point-of-Sale or web source. It ensures all relevant data, including line items, taxes, and discounts, are accurately mapped and transferred.

**Demonstrate**  
A business owner could use this workflow to streamline order management by automatically syncing Shopify sales with their accounting system, eliminating manual data entry, and reducing errors.

**Imitate**  
1. Import the workflow into n8n.
2. Configure the Shopify node with your store credentials.
3. Set up the Business Central environment variables with your details.
4. Customize the filters to match your business needs.
5. Test the workflow with sample orders.

**Practice**  
Create a test Shopify order and run the workflow manually. Check Business Central to ensure the order appears with all details. Adjust the mapping if necessary to fit your data structure.

**WIIFM**  
Mastering this workflow enables you to offer seamless e-commerce integrations to clients, enhancing their operations. As an automation consultant, this skill can differentiate your services and increase your revenue potential by reducing clients' operational overhead.

## 🔧 Setup Instructions
1. **Connect Credentials:** httpHeaderAuth, shopifyAccessTokenApi, oAuth2Api.
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
