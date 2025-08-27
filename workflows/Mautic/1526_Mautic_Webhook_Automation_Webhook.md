# Mautic Webhook Automation Webhook
  ## 🚀 What It Does
  Automates a flow using if×6, stickyNote×6, mautic×4.
  
  ## 💼 Business Use Case
  Use to eliminate manual copy-paste and standardize a recurring business process.
  
  ## ⚙️ How It Works
  1. **Trigger:** This workflow starts with **Shopify Trigger**.
  2. **Shopify Trigger** `shopifyTrigger` — channel/topic: `customers/update`
3. **Webhook** `webhook` — method: **POST**, path: `/6485fca6-c641-4067-b19a-192709b88e45`
4. **Sticky Note1** `stickyNote` — width: "580.807881773399", content: "## Webhook Validation
We use the same key shared with Mautic to hash the incoming request. If the computed hash is identical to the one delivered the request is valid and can be pr…[truncated]"
5. **Sticky Note2** `stickyNote` — width: "279.1188177339898", height: "383.7477832512317", content: "## Mautic Segments
The n8n Shopify node cannot Please make sure to select your segment on both nodes"
6. **Sticky Note** `stickyNote` — width: "279.1188177339898", content: "## Shopify 
The n8n Shopify node cannot get customer marketing consent, so we get this from the Shopify GraphQL API"
7. **Sticky Note3** `stickyNote` — width: "279.1188177339898", content: "## Set your Shopify Subdomain here"
8. **Sticky Note4** `stickyNote` — color: "4", width: "360.408084305475", height: "315.5897364788551"
9. **Sticky Note5** `stickyNote` — color: "4", width: "360.408084305475", height: "315.5897364788551"
10. **Search for Contact by Email** `mautic` — operation: **getAll**
11. **Crypto** `crypto` — type: "SHA256", action: "hmac", secret: "a031f434181d2bce0a81694c11fafb5887c78a48c50da98d62b7ab7c6d57080c"
12. **Set Shopify Subdomain** `set` — fields: "[object Object]", options: "[object Object]"
13. **Contact exists?** `if` — options: "[object Object]", conditions: "[object Object]"
14. **If** `if` — options: "[object Object]", conditions: "[object Object]"
15. **Accepts Marketing?** `if` — options: "[object Object]", conditions: "[object Object]"
16. **Accepts Marketing?1** `if` — options: "[object Object]", conditions: "[object Object]"
17. **GraphQL** `graphql` — query: "=query {
  customers(first: 1, query: "email:'{{ $json["body"]["mautic.lead_channel_subscription_changed"][0]["contact"]["fields"]["core"]["email"]["value"] }}'") {
    edges {
   …[truncated]", endpoint: "=https://{{ $('Set Shopify Subdomain').params["fields"]["values"][0]["stringValue"] }}.myshopify.com/admin/api/2024-01/graphql.json", authentication: "headerAuth"
18. **No Operation, do nothing1** `noOp` — configured for its default action.
19. **Remove from confirmed segment** `mautic` — resource: **contactSegment**, operation: **remove**
20. **Create a new contact** `mautic` — email: "={{ $('Shopify Trigger').item.json.email }}", company: "=", options: "[object Object]"
21. **No Operation, do nothing** `noOp` — configured for its default action.
22. **Customer exists?** `if` — options: "[object Object]", conditions: "[object Object]"
23. **Add to confirmed segment** `mautic` — resource: **contactSegment**
24. **Mautic - Accepts Marketing?** `if` — options: "[object Object]", conditions: "[object Object]"
25. **No Operation, do nothing2** `noOp` — configured for its default action.
26. **Marketing Consent - subscribed** `graphql` — query: "mutation customerEmailMarketingConsentUpdate($input: CustomerEmailMarketingConsentUpdateInput!) {
  customerEmailMarketingConsentUpdate(input: $input) {
    customer {
      id
   …[truncated]", endpoint: "=https://{{ $('Set Shopify Subdomain').params["fields"]["values"][0]["stringValue"] }}.myshopify.com/admin/api/2024-01/graphql.json", variables: "={
  "input": {
    "customerId": "{{ $json["data"]["customers"]["edges"][0]["node"]["id"] }}",
    "emailMarketingConsent": {
      "consentUpdatedAt": "{{ $now }}",
      "market…[truncated]"
27. **Marketing Consent - unsubscribed** `graphql` — query: "mutation customerEmailMarketingConsentUpdate($input: CustomerEmailMarketingConsentUpdateInput!) {
  customerEmailMarketingConsentUpdate(input: $input) {
    customer {
      id
   …[truncated]", endpoint: "=https://{{ $('Set Shopify Subdomain').params["fields"]["values"][0]["stringValue"] }}.myshopify.com/admin/api/2024-01/graphql.json", variables: "={
  "input": {
    "customerId": "{{ $json["data"]["customers"]["edges"][0]["node"]["id"] }}",
    "emailMarketingConsent": {
      "consentUpdatedAt": "{{ $now }}",
      "market…[truncated]"
  
  ## 💡 AI-Powered Ideas for Improvement
  **Explain:**  
This workflow integrates Shopify and Mautic to manage customer data and marketing consent. When a customer's data is updated in Shopify, the workflow checks if the customer exists in Mautic. If they do, it updates their marketing preferences. If not, it creates a new contact in Mautic. The workflow uses GraphQL to fetch customer data from Shopify and updates marketing consent based on customer actions.

**Demonstrate:**  
A business owner can use this workflow to ensure their Shopify customer list is synchronized with their marketing platform, Mautic. This ensures marketing campaigns are sent only to customers who have opted in, maintaining compliance and improving engagement.

**Imitate:**  
1. Import the workflow into your n8n instance.
2. Connect your Shopify and Mautic accounts.
3. Set your Shopify subdomain in the workflow.
4. Customize the Mautic segments as needed.
5. Test the workflow by updating a customer in Shopify to see changes reflected in Mautic.

**Practice:**  
Run a test by updating a customer's email marketing consent in Shopify. Observe the workflow process and verify that the customer's consent status is correctly updated in Mautic.

**WIIFM:**  
By mastering this workflow, you can offer a valuable service to businesses using Shopify and Mautic, ensuring their customer data is accurate and their marketing efforts are compliant. This can lead to increased customer retention and open opportunities for offering additional automation services.
  
  ## 🔧 Setup Instructions
  1. **Connect Credentials:** shopifyAccessTokenApi, mauticOAuth2Api, httpHeaderAuth.
  
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
  