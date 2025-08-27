# Form GoogleSheets Automation Triggered
  ## 🚀 What It Does
  Monitors events, processes them, and **notifies** people/apps (Slack/Email) with structured updates.
  
  ## 💼 Business Use Case
  Ideal for **lead intake**, **enrichment**, and **CRM updates** with alerts to the right channel.
  
  ## ⚙️ How It Works
  1. **Trigger:** This workflow starts with **On form submission**.
  2. **On form submission** `formTrigger` — options: "[object Object]", formTitle: "Contacts", formFields: "[object Object]"
3. **OpenAI** `lmChatOpenAi` — model: `[object Object]`
4. **Sticky Note** `stickyNote` — width: "580", height: "280", content: "## Important notes

This very simple workflow is ideal for eCommerce businesses or customer support teams looking to automate and streamline the handling of contact form submission…[truncated]"
5. **Text Classifier** `textClassifier` — options: "[object Object]", inputText: "={{ $json.Message }}", categories: "[object Object]"
6. **Quote Dep.** `emailSend` — html: "=Name: {{ $json.Name }}
Email: {{ $json.Email }}

Message:
{{ $json.Message }}

Tipo prodotto: {{ $json["tipo prodotto"] }}", options: "[object Object]", subject: "=[n8n Contacts] Quote"
7. **Prod. Dep.** `emailSend` — html: "=Name: {{ $json.Name }}
Email: {{ $json.Email }}

Message:
{{ $json.Message }}

Tipo prodotto: {{ $json["tipo prodotto"] }}", options: "[object Object]", subject: "=[n8n Contacts] Product info"
8. **Gen. Dep.** `emailSend` — html: "=Name: {{ $json.Name }}
Email: {{ $json.Email }}

Message:
{{ $json.Message }}

Tipo prodotto: {{ $json["tipo prodotto"] }}", options: "[object Object]", subject: "=[n8n Contacts] General"
9. **Order Dep.** `emailSend` — html: "=Name: {{ $json.Name }}
Email: {{ $json.Email }}

Message:
{{ $json.Message }}

Tipo prodotto: {{ $json["tipo prodotto"] }}", options: "[object Object]", subject: "=[n8n Contacts] Order info"
10. **Other Dep.** `emailSend` — html: "=Name: {{ $json.Name }}
Email: {{ $json.Email }}

Message:
{{ $json.Message }}

Tipo prodotto: {{ $json["tipo prodotto"] }}", options: "[object Object]", subject: "=[n8n Contacts] Other"
11. **Quote DB** `googleSheets` — operation: **append**
12. **Prod DB** `googleSheets` — operation: **append**
13. **General DB** `googleSheets` — operation: **append**
14. **Order DB** `googleSheets` — operation: **append**
15. **Other DB** `googleSheets` — operation: **append**
  
  ## 💡 AI-Powered Ideas for Improvement
  - **Explain:** This n8n workflow automates the processing of contact form submissions for eCommerce businesses. It begins with a form submission, then uses a text classifier to categorize the message into specific categories like 'Request Quote' or 'Product Info'. Based on the classification, it sends an email to the relevant department and logs the message details into a Google Sheet for record-keeping.
  
- **Demonstrate:** A customer support team could use this workflow to automatically sort and respond to customer inquiries based on their nature, improving response times and ensuring inquiries are directed to the correct department for faster resolution.

- **Imitate:** Import the workflow into your n8n instance. Connect your form service to the 'On form submission' node. Set up your email and Google Sheets credentials. Customize the text classifier categories and email templates to match your business needs. Test the workflow with sample submissions.

- **Practice:** Create a test contact form and submit different types of inquiries. Observe how the workflow classifies and routes each message. Experiment with changing the classifier categories to see how it affects the email routing and logging.

- **WIIFM:** Mastering this workflow enables you to streamline customer interactions, improving efficiency and customer satisfaction. This skill can be offered as a valuable service to businesses looking to enhance their customer support capabilities, potentially leading to increased income through service offerings.
  
  ## 🔧 Setup Instructions
  1. **Connect Credentials:** openAiApi, smtp, googleSheetsOAuth2Api.
2. **Data Mapping:** Verify base/sheet IDs and column names match exactly to prevent silent failures.
3. **Notification Targets:** Confirm channel/email IDs and that the bot/app is authorized to post.
  
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
  