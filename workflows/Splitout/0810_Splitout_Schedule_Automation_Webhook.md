# Splitout Schedule Automation Webhook
## 🚀 What It Does
Automates a flow using stickyNote×4, httpRequest×2, manualTrigger.

## 💼 Business Use Case
Use as a **glue/API broker**: receive data, enrich/validate via APIs, and pass to downstream systems.

## ⚙️ How It Works
1. **Trigger:** This workflow starts with **On clicking 'execute'**.
2. **On clicking 'execute'** `manualTrigger` — configured for its default action.
3. **Sticky Note3** `stickyNote` — color: "4", width: "150", height: "80"
4. **Schedule Trigger** `scheduleTrigger` — rule: "[object Object]"
5. **Sticky Note** `stickyNote` — width: "320", height: "660", content: "## Squarespace Fulfillment Automation with n8n
Retrieves all Squarespace Orders and mark them as fulfilled automatically Squarespace Commerce API

### Setup
Open `Globals` node and…[truncated]"
6. **Sticky Note4** `stickyNote` — width: "232", height: "346", content: "## Create fulfillment  👇

[Fulfill an order](https://developers.squarespace.com/commerce-apis/fulfill-order)
- `shouldSendNotification` to send notifications to customer"
7. **Sticky Note1** `stickyNote` — height: "440", content: "## Filtering orders for fulfillment 👇
Filter the valid orders for programatically fulfillments

- you exclusively sell digital downloads or digital gift cards
- you use fulfillmen…[truncated]"
8. **Globals** `set` — options: "[object Object]", assignments: "[object Object]"
9. **Query pending Orders** `httpRequest` — url: `=https://api.squarespace.com/{{ $json["api-version"] }}/commerce/orders`
10. **Split Out Order ** `splitOut` — options: "[object Object]", fieldToSplitOut: "result"
11. **Filter Orders** `filter` — options: "[object Object]", conditions: "[object Object]"

## 💡 AI-Powered Ideas for Improvement
### Explain
This n8n workflow automates the process of fulfilling Squarespace orders. It retrieves pending orders from Squarespace, filters them based on specific criteria, and then marks them as fulfilled using the Squarespace Commerce API. The workflow begins with a manual or scheduled trigger, retrieves orders, filters them to ensure they are eligible for fulfillment, and then updates their status to fulfilled, optionally notifying customers.

### Demonstrate
A business owner with an online store on Squarespace could use this workflow to automate order fulfillment, reducing manual effort and ensuring timely updates to customers about their order status, thus improving customer satisfaction and operational efficiency.

### Imitate
1. Import the workflow to n8n.
2. Connect your Squarespace account through API credentials.
3. Set up the `Globals` node with your API version and other parameters.
4. Schedule the workflow to run at desired intervals.
5. Test the workflow with a few orders to ensure it fulfills them correctly.

### Practice
Create a test environment in Squarespace with a few orders. Run the workflow and observe how it processes each order, filtering and fulfilling them based on the set criteria. Adjust the filter conditions to see how changes affect the workflow.

### WIIFM
Mastering this workflow enables you to offer fulfillment automation services to e-commerce clients, enhancing their operations and customer service. This expertise can expand your service offerings and increase your value as an automation consultant, leading to more business opportunities.

## 🔧 Setup Instructions
1. **Connect Credentials:** oAuth2Api, httpHeaderAuth.
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
