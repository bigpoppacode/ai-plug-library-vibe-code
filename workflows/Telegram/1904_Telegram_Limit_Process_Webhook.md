# Telegram Limit Process Webhook
## 🚀 What It Does
Monitors events, processes them, and **notifies** people/apps (Slack/Email) with structured updates.

## 💼 Business Use Case
Use as a **glue/API broker**: receive data, enrich/validate via APIs, and pass to downstream systems.

## ⚙️ How It Works
1. **Trigger:** Triggered by **incoming email** (new message).
2. **Webhook** `webhook` — method: **POST**, path: `/parse`
3. **Gmail Trigger** `gmailTrigger` — filters: "[object Object]", pollTimes: "[object Object]"
4. **Sticky Note** `stickyNote` — color: "6", width: "320", height: "340"
5. **gpt-4o-mini** `lmChatOpenAi` — model: `[object Object]`
6. **gpt-4o-mini1** `lmChatOpenAi` — options: "[object Object]"
7. **gpt-4o-mini2** `lmChatOpenAi` — model: `gpt-4o`
8. **gpt-4o-mini3** `lmChatOpenAi` — model: `gpt-4o`
9. **Sticky Note1** `stickyNote` — width: "920", height: "320", content: "## Check for Supported File Extension
https://docs.cloud.llamaindex.ai/API/get-supported-file-extensions-api-v-1-parsing-supported-file-extensions-get"
10. **Sticky Note2** `stickyNote` — color: "3", width: "920", height: "400"
11. **Sticky Note3** `stickyNote` — color: "4", width: "460", height: "300"
12. **Sticky Note4** `stickyNote` — color: "5", width: "460", height: "380"
13. **Sticky Note5** `stickyNote` — color: "4", width: "300", height: "300"
14. **Sticky Note9** `stickyNote` — width: "540", height: "1340", content: "# Description

This workflow automates document processing using LlamaParse to extract and analyze text from various file formats. It intelligently processes documents, extracts st…[truncated]"
15. **Sticky Note8** `stickyNote` — color: "4", width: "260", height: "280"
16. **Sticky Note6** `stickyNote` — color: "7", width: "2600", height: "1180"
17. **Sticky Note7** `stickyNote` — color: "6", width: "1160", height: "540"
18. **Sticky Note10** `stickyNote` — width: "360", height: "420", content: "## Extract Invoice as JSON
☀️Update User & System Prompt for Your Specific Use Case"
19. **Sticky Note11** `stickyNote` — color: "5", width: "980", height: "520"
20. **Sticky Note12** `stickyNote` — width: "360", height: "400", content: "## Summarize Document
☀️Update User & System Prompt for Your Specific Use Case"
21. **Sticky Note13** `stickyNote` — color: "4", width: "440", height: "420"
22. **Sticky Note14** `stickyNote` — color: "3", width: "260", height: "320"
23. **Sticky Note15** `stickyNote` — width: "340", height: "320", content: "## Receive Parsed Document from LlamaParse"
24. **Sticky Note16** `stickyNote` — color: "7", width: "2400", height: "1180"
25. **Sticky Note17** `stickyNote` — color: "5", width: "440", height: "400"
26. **Get Parsed Markdown** `set` — options: "[object Object]", assignments: "[object Object]"
27. **Gmail** `gmail` — operation: **getAll**
28. **Classify Parsed Document** `textClassifier` — options: "[object Object]", inputText: "={{ $json.data }}", categories: "[object Object]"
29. **Save Parsed Document to Google Drive** `googleDrive` — operation: **createFromText**
30. **Limit** `limit` — keep: "lastItems"
31. **Summarize Document** `chainLlm` — text: "=Please analyze this document and provide:

## Document Analysis
- A concise executive summary (2-3 sentences)
- Key themes and main points
- Notable findings or insights
- Data hi…[truncated]", promptType: "define"
32. **Extract Invoice Details as JSON** `chainLlm` — text: "[redacted]", promptType: "define"
33. **Get Message** `gmail` — operation: **get**
34. **Send Document Summary as Telegram Message** `telegram` — text: "={{ $json.text }}", chatId: "={{ $env.TELEGRAM_CHAT_ID }}", additionalFields: "[object Object]"
35. **Save Summarized Document to Google Drive** `googleDrive` — operation: **createFromText**
36. **Send Error Message 1** `telegram` — text: "=Error in workflow", chatId: "={{ $env.TELEGRAM_CHAT_ID }}", additionalFields: "[object Object]"
37. **Invoice Details** `set` — options: "[object Object]", assignments: "[object Object]"
38. **Send Error Message 2** `telegram` — text: "=Error in workflow", chatId: "={{ $env.TELEGRAM_CHAT_ID }}", additionalFields: "[object Object]"
39. **Is there an Email Attachement** `if` — options: "[object Object]", conditions: "[object Object]"
40. **Prepare Message** `set` — options: "[object Object]", assignments: "[object Object]"
41. **Update Google Sheet by LlamaParse ID** `googleSheets` — operation: **update**
42. **HTTP Request** `httpRequest` — url: `https://api.cloud.llamaindex.ai/api/parsing/supported_file_extensions`
43. **No Operation, do nothing** `noOp` — configured for its default action.
44. **Send Invoice Details as Telegram Message** `telegram` — text: "={{ $json.summary }}
--------
{{ $json.invoice_summary.toJsonString() }}", chatId: "={{ $env.TELEGRAM_CHAT_ID }}", additionalFields: "[object Object]"
45. **Aggregate** `aggregate` — options: "[object Object]", aggregate: "aggregateAllItemData", destinationFieldName: "extensions"
46. **Edit Fields** `set` — options: "[object Object]", assignments: "[object Object]"
47. **If Supported File Extensions** `if` — options: "[object Object]", conditions: "[object Object]"
48. **Merge** `merge` — mode: "combine", options: "[object Object]", combineBy: "combineAll"
49. **No Operation, do nothing1** `noOp` — configured for its default action.
50. **Parse Document with LlamaParse** `httpRequest` — method: **POST**, url: `https://api.cloud.llamaindex.ai/api/parsing/upload`
51. **Save Document to Google Drive** `googleDrive` — name: "={{ $('Is there an Email Attachement').item.json.id }}_{{ $('Is there an Email Attachement').item.binary.file0.fileName }}", driveId: "[object Object]", options: "[object Object]"
52. **Summarize Email** `chainLlm` — text: "={{ $('Is there an Email Attachement').item.json.text }}", messages: "[object Object]", promptType: "define"
53. **Prepare Data** `set` — options: "[object Object]", assignments: "[object Object]"
54. **Merge Email Processing** `merge` — mode: "combine", options: "[object Object]", combineBy: "combineByPosition"
55. **Save LlamaParse ID and Summary to Google Sheets** `googleSheets` — operation: **appendOrUpdate**

## 💡 AI-Powered Ideas for Improvement
- **Explain:** This n8n workflow automates document processing using LlamaParse. It starts by monitoring Gmail for email attachments or receiving documents via a webhook. The workflow checks if the file format is supported, uploads documents to LlamaParse for text extraction, and stores the original documents in Google Drive. It classifies document types, extracts structured data, generates summaries, and converts text into JSON. Additionally, it processes invoices, extracting details, calculating financial data, and updating Google Sheets for tracking.

- **Demonstrate:** A business could use this workflow to automate invoice processing, ensuring all invoices are correctly categorized, summarized, and stored in Google Drive. This streamlines accounting and reduces manual data entry.

- **Imitate:** To implement this workflow, connect your Gmail and Google Drive accounts in n8n. Set up the webhook URL to receive documents, configure LlamaParse for text extraction, and map the extracted data to Google Sheets. Test the workflow with sample documents to ensure accuracy.

- **Practice:** Create a test email with an invoice attachment and send it to your Gmail. Run the workflow to see how it processes the document, extracts data, and updates Google Sheets. Adjust settings to match your business needs.

- **WIIFM:** Mastering this workflow can help you automate tedious document processing tasks, improving efficiency and accuracy. Offering this as a service can attract clients looking to streamline operations, creating a revenue stream for your automation business.

## 🔧 Setup Instructions
1. **Connect Credentials:** gmailOAuth2, httpHeaderAuth, openAiApi, googleSheetsOAuth2Api, googleDriveOAuth2Api.
2. **Data Mapping:** Verify base/sheet IDs and column names match exactly to prevent silent failures.
3. **Notification Targets:** Confirm channel/email IDs and that the bot/app is authorized to post.
4. **API Contracts:** Validate required headers and 2xx/4xx handling; add retries for 429/5xx.

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
