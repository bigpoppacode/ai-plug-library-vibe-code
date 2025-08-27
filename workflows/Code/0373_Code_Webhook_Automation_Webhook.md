# Code Webhook Automation Webhook
  ## 🚀 What It Does
  Automates a flow using stickyNote×7, if×2, httpRequest×2.
  
  ## 💼 Business Use Case
  Use as a **glue/API broker**: receive data, enrich/validate via APIs, and pass to downstream systems.
  
  ## ⚙️ How It Works
  1. **Trigger:** This workflow starts with **Sticky Note**.
  2. **Webhook** `webhook` — method: **POST**, path: `/5dc2467c-0b39-43e9-bdbd-399231f69c4e`
3. **Sticky Note** `stickyNote` — color: "7", width: "253.05487804878055", height: "376"
4. **Sticky Note1** `stickyNote` — color: "7", width: "246.67682926829286", height: "318"
5. **Sticky Note2** `stickyNote` — color: "7", width: "185", height: "80"
6. **Sticky Note3** `stickyNote` — color: "7", width: "180", height: "80"
7. **Sticky Note4** `stickyNote` — color: "7", width: "272", height: "258.34634146341466"
8. **Sticky Note5** `stickyNote` — color: "7", width: "214", height: "145"
9. **Sticky Note6** `stickyNote` — width: "361.2353658536575", height: "305.7548780487801", content: "## Low Stock & Sold Out Watcher for Shopify
This n8n workflow automates the process of monitoring inventory levels for Shopify products, ensuring timely updates and efficient stock…[truncated]"
10. **Code** `code` — jsCode: "
const available = items[0].json.body.available;
const inventory_item = items[0].json.body.inventory_item_id;
const lowInventory = available > 0 && available < 4;
const outOfStock …[truncated]"
11. **Low Inventory** `if` — conditions: "[object Object]"
12. **Out of stock** `if` — conditions: "[object Object]"
13. **GraphQL1- shopify** `graphql` — query: "={
  inventoryItem(id: "gid://shopify/InventoryItem/{{ $json.inventory_tem }}") {
    id
    variant {
      id
      title
      inventoryQuantity  # This line adds the inventory …[truncated]", endpoint: "https://store.myshopify.com/admin/api/2023-10/graphql.json", authentication: "headerAuth"
14. **GraphQL -  shopify** `graphql` — query: "={
  inventoryItem(id: "gid://shopify/InventoryItem/{{ $json.inventory_tem }}") {
    id
    variant {
      id
      title
      inventoryQuantity  # This line adds the inventory …[truncated]", endpoint: "https://store.myshopify.com/admin/api/2023-10/graphql.json", authentication: "headerAuth"
15. **HTTP Request** `httpRequest` — method: **POST**
16. **HTTP Request1** `httpRequest` — method: **POST**
  
  ## 💡 AI-Powered Ideas for Improvement
  **Explain:**  
This n8n workflow is designed to monitor inventory levels of Shopify products. When inventory changes are detected via a webhook, the workflow checks if the product is either low on stock (less than 4 items) or out of stock. It then retrieves detailed product information using Shopify's GraphQL API and sends alerts through Discord, providing timely updates and ensuring efficient stock management.

**Demonstrate:**  
A retailer could use this workflow to automatically notify their team when products are running low or are out of stock, ensuring timely restocking and minimizing lost sales.

**Imitate:**  
1. Import the workflow into n8n.  
2. Set up a Shopify webhook for inventory updates.  
3. Configure Shopify GraphQL and Discord credentials.  
4. Adjust inventory thresholds if needed.  
5. Test with a product's inventory update.

**Practice:**  
Create a test product in Shopify with varying stock levels. Trigger the workflow by updating the inventory and observe how alerts are sent through Discord.

**WIIFM:**  
Mastering this workflow enables you to offer inventory monitoring services to e-commerce businesses, helping them optimize stock levels and avoid lost sales, thereby enhancing your service portfolio and potential income.
  
  ## 🔧 Setup Instructions
  1. **Connect Credentials:** discordBotApi.
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
  