# GoogleSheets Gmail Send Triggered
  ## 🚀 What It Does
  Monitors events, processes them, and **notifies** people/apps (Slack/Email) with structured updates.
  
  ## 💼 Business Use Case
  Ideal for **lead intake**, **enrichment**, and **CRM updates** with alerts to the right channel.
  
  ## ⚙️ How It Works
  1. **Trigger:** Triggered by **incoming email** (new message).
  2. **Sticky Note3** `stickyNote` — width: "780", height: "540", content: "### 4. Do you need more details?
Find a step-by-step guide in this tutorial
![Guide](https://www.samirsaci.com/content/images/2025/03/Miniature-2.png)
[🎥 Watch My Tutorial](https:…[truncated]"
3. **OpenAI Chat Model** `lmChatOpenAi` — model: `[object Object]`
4. **Structured Output Parser** `outputParserStructured` — jsonSchemaExample: "{
  "purchase_order": "PO45231",
  "expected_delivery_date": "2025-03-27",
  "lines": [
    { "sku": "HERM-SHOE-001", "quantity": 120 },
    { "sku": "HERM-BAG-032", "quantity": 45…[truncated]"
5. **Sticky Note1** `stickyNote` — color: "7", width: "380", height: "720"
6. **Sticky Note2** `stickyNote` — color: "7", width: "660", height: "720"
7. **Sticky Note4** `stickyNote` — color: "7", width: "460", height: "540"
8. **Email Received** `gmailTrigger` — simple: "false", filters: "[object Object]", options: "[object Object]"
9. **Sticky Note** `stickyNote` — width: "780", height: "720", content: "### Test the workflow with this email!

#### How?
1. Send this email to the Gmail box you set up in your credentials.
2. Click on Test workflow

### Email
**Email Subject:** Inboun…[truncated]"
10. **Is PO?** `if` — options: "[object Object]", conditions: "[object Object]"
11. **AI Agent** `agent` — text: "=Email Subject:  {{ $json.subject }}
Email Body: 
{{ $json.text }}", options: "[object Object]", promptType: "define"
12. **Format Purchase Order Lines** `code` — jsCode: "const {purchase_order, expected_delivery_date, lines} = $input.first().json.output;

return lines.map( line => ({
  json: {
    purchase_order,
    expected_delivery_date,
    sku:…[truncated]"
13. **Store Purchase Order Lines** `googleSheets` — operation: **append**
  
  ## 💡 AI-Powered Ideas for Improvement
  ### Explain
This n8n workflow automates the processing of purchase orders received via Gmail. It starts by checking if an email contains an inbound order, then uses an AI agent to extract relevant details like the purchase order number, expected delivery date, and order lines with SKU and quantity. Finally, it formats this data and stores it in a Google Sheet for easy access and record-keeping.

### Demonstrate
A logistics company could use this workflow to streamline order processing. By automating data extraction from emails, they reduce manual entry errors, speed up order fulfillment, and maintain accurate records in Google Sheets for inventory management.

### Imitate
1. Set up the Gmail trigger to check for new emails with "Inbound Order" in the subject.
2. Configure AI agent to parse email content for order details.
3. Format the extracted data into a structured format.
4. Append the formatted data to a designated Google Sheet for order tracking.

### Practice
Create a mock Gmail account and send test emails with purchase order details. Run the workflow to see how it extracts and records this information in Google Sheets. Adjust email formats and test the workflow's adaptability.

### WIIFM
Mastering this workflow allows you to offer automated order processing solutions to businesses, improving their efficiency and accuracy. This expertise can attract clients in logistics and retail, opening doors for recurring automation service contracts and increasing your income potential.
  
  ## 🔧 Setup Instructions
  1. **Data Mapping:** Verify base/sheet IDs and column names match exactly to prevent silent failures.
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
  