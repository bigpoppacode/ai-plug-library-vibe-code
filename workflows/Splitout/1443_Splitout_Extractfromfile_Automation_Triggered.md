# Splitout Extractfromfile Automation Triggered
## 🚀 What It Does
Monitors events, processes them, and **notifies** people/apps (Slack/Email) with structured updates.

## 💼 Business Use Case
Ideal for **lead intake**, **enrichment**, and **CRM updates** with alerts to the right channel.

## ⚙️ How It Works
1. **Trigger:** Triggered by **incoming email** (new message).
2. **Get invoice** `gmailTrigger` — simple: "false", filters: "[object Object]", options: "[object Object]"
3. **Get payment** `gmailTrigger` — simple: "false", filters: "[object Object]", options: "[object Object]"
4. **Structured Output Parser1** `outputParserStructured` — schemaType: "manual", inputSchema: "{
 "title": "Expense Record Schema",
 "description": "Schema used to parse expense record emails, including date, service name, transaction details, amount, category, currency, and…[truncated]"
5. **Google Gemini Chat Model1** `lmChatGoogleGemini` — options: "[object Object]", modelName: "models/gemini-1.5-flash"
6. **Groq Chat Model** `lmChatGroq` — model: `llama-3.2-11b-text-preview`
7. **Structured Output Parser** `outputParserStructured` — schemaType: "manual", inputSchema: "{
 "title": "Transaction Record Schema",
 "description": "Schema for parsing transaction record emails, including date, service name, transaction details, amount, category, currenc…[truncated]"
8. **Sticky Note** `stickyNote` — width: "720", height: "560", content: "# A. Get data
- Set up labels in Gmail
- Suggested using Gmail filters to move emails to labels automatically"
9. **Sticky Note1** `stickyNote` — width: "920", height: "960", content: "# B. Deal with the data
1. Multiple payment info in one mail: input the "sender" of the emails that contain more than one payment info. e.g. credit card daily spend notification
2.…[truncated]"
10. **Sticky Note2** `stickyNote` — width: "840", height: "980", content: "# C. Get spend details and send to google sheet
- Edit the output schema to fit your google sheet format
- Edit the prompt to fit your needs"
11. **Extract invoice** `extractFromFile` — operation: **pdf**
12. **Extract payment** `extractFromFile` — operation: **pdf**
13. **Invoice data** `set` — options: "[object Object]", assignments: "[object Object]"
14. **Payment data** `set` — options: "[object Object]", assignments: "[object Object]"
15. **Switch** `switch` — rules: "[object Object]", options: "[object Object]"
16. **HTML** `html` — operation: **extractHtmlContent**
17. **Set data 1** `set` — options: "[object Object]", assignments: "[object Object]"
18. **Set data 2** `set` — options: "[object Object]", assignments: "[object Object]"
19. **Split Out** `splitOut` — options: "[object Object]", fieldToSplitOut: "spend"
20. **Extract details1** `chainLlm` — text: "=Email Date: {{ $json.email_date }}
Email Subject: {{ $json.email_subject }}
Email Content:
{{ $json.email_content }}", messages: "[object Object]", promptType: "define"
21. **Set data 0** `set` — options: "[object Object]", assignments: "[object Object]"
22. **Send1** `googleSheets` — operation: **append**
23. **Merge** `merge` — configured for its default action.
24. **Extract details** `chainLlm` — text: "=Email Date: {{ $json.email_date }}
Email Subject: {{ $json.email_subject }}
Email Content:
{{ $json.email_content }}
Email Source: {{ $json.email_type }}", messages: "[object Object]", promptType: "define"
25. **Send** `googleSheets` — operation: **append**

## 💡 AI-Powered Ideas for Improvement
**Explain**  
This n8n workflow automates the extraction and processing of spend details from emails. It retrieves invoices and payment emails from Gmail, extracts PDF content, parses transaction details using AI models, and sends structured data to Google Sheets. The workflow is designed to streamline financial data management by automatically capturing and organizing expense and transaction records.

**Demonstrate**  
A financial consultant could use this workflow to automate client expense tracking. By automatically logging transaction details to a Google Sheet, the consultant can save time on manual data entry, reduce errors, and provide clients with up-to-date financial insights.

**Imitate**  
1. Import the workflow into n8n.
2. Set up Gmail triggers to fetch invoice and payment emails.
3. Connect Google Sheets to store parsed transaction details.
4. Customize the output schema to match your Google Sheet format.
5. Test the workflow with sample emails to ensure accurate data extraction.

**Practice**  
Create a test Gmail account and send sample invoice and payment emails. Use the workflow to extract and log the details into a Google Sheet. Experiment with different email formats to see how the workflow adapts and ensure the data is captured correctly.

**WIIFM**  
Mastering this workflow allows you to offer automated financial data management services, reducing manual work for clients and improving their operational efficiency. This skill can help you attract more clients, offering them valuable automation solutions and generating additional income streams.

## 🔧 Setup Instructions
1. **Connect Credentials:** gmailOAuth2, googlePalmApi, googleSheetsOAuth2Api, groqApi.
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
