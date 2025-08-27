# FunctionItem Manual Create Triggered
  ## 🚀 What It Does
  Monitors events, processes them, and **notifies** people/apps (Slack/Email) with structured updates.
  
  ## 💼 Business Use Case
  Great for **content, summarization, triage, or decisioning** where AI adds speed and consistency.
  
  ## ⚙️ How It Works
  1. **Trigger:** This workflow starts with **On clicking 'execute'**.
  2. **On clicking 'execute'** `manualTrigger` — configured for its default action.
3. **Customer Datastore** `n8nTrainingCustomerDatastore` — operation: **getAllPeople**
4. **Item Lists** `itemLists` — operation: **sort**
5. **All items, one template** `DocumentGenerator` — template: "<html>
<head>
</head>
<body>
New customers in last 24h:
<ul id="customer_list">
  {{#each items}}
  <li>{{name}}: {{email}}</li>
  {{/each}}
</ul>
</body>
</html>", oneTemplate: "true"
6. **Add lines** `functionItem` — functionCode: "item.lines = [
  {
    concept: "Service",
    description: "Design of HTML banners",
    quantity: 1,
    amount: 22,
    vat: 22 * 0.21,
    total: 22 * 1.21
  },
  {
    concept…[truncated]"
7. **Send one HTML Email per list** `emailSend` — html: "={{ $json["text"] }}", options: "[object Object]", subject: "New customers"
8. **One item per template** `DocumentGenerator` — template: "Date: {{created}}
To: {{name}} <{{email}}>
Address: {{country}}
Details:
{{#each lines}}
- "{{description}}" x {{quantity}} = {{amount}}€ + {{vat}}€ = {{total}}€
{{/each}}
Total in…[truncated]"
9. **Send one TEXT email per item** `emailSend` — html: "={{ $json["text"] }}", options: "[object Object]", subject: "=Invoice for {{ $node["Add lines"].json["name"] }}"
  
  ## 💡 AI-Powered Ideas for Improvement
  **Explain:** This n8n workflow automates the process of retrieving customer data, sorting it, and sending emails. It starts with manually triggering the workflow, fetching customer information, sorting the data by name, and generating HTML and text documents. It then sends an HTML email listing new customers and a text invoice email to each customer.

**Demonstrate:** A business owner can use this workflow to automatically send welcome emails to new customers and invoices for services rendered, ensuring timely communication and efficient operations.

**Imitate:** 
1. Import the workflow into n8n. 
2. Set up your customer data source. 
3. Customize the HTML and text templates to fit your needs.
4. Connect your email service provider.
5. Test the workflow to ensure it sends emails correctly.

**Practice:** Create a mock customer database and run the workflow to see how it generates and sends emails. Adjust the sorting and templates to see how changes affect the output.

**WIIFM:** Mastering this workflow can enhance your business's communication efficiency, reduce manual tasks, and improve customer satisfaction. It can also serve as a template for offering automated email communication services to clients, expanding your service offerings and potential income.
  
  ## 🔧 Setup Instructions
  1. **Connect Credentials:** smtp.
2. **Notification Targets:** Confirm channel/email IDs and that the bot/app is authorized to post.
  
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
  