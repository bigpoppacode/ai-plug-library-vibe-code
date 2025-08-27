# Code Extractfromfile Monitor Triggered
  ## 🚀 What It Does
  Automates a flow using stickyNote×6, microsoftOutlook×3, if×2.
  
  ## 💼 Business Use Case
  Great for **content, summarization, triage, or decisioning** where AI adds speed and consistency.
  
  ## ⚙️ How It Works
  1. **Trigger:** This workflow starts with **Outlook Trigger**.
  2. **Sticky Note** `stickyNote` — color: "7", width: "740", height: "680"
3. **Sticky Note1** `stickyNote` — color: "7", width: "640", height: "680"
4. **Sticky Note5** `stickyNote` — width: "460", height: "1400", content: "## Try it out!
### This n8n template imports purchase order submissions from Outlook and converts attached purchase order form in XLSX format into structured output.

Data entry jo…[truncated]"
5. **Sticky Note7** `stickyNote` — color: "5", width: "340", height: "140"
6. **OpenAI Chat Model** `lmChatOpenAi` — model: `[object Object]`
7. **Sticky Note2** `stickyNote` — color: "7", width: "940", height: "680"
8. **Outlook Trigger** `microsoftOutlookTrigger` — fields: "body,categories,conversationId,from,hasAttachments,internetMessageId,sender,subject,toRecipients,receivedDateTime,webLink", output: "fields", filters: "[object Object]"
9. **Sticky Note3** `stickyNote` — color: "7", width: "840", height: "680"
10. **OpenAI Chat Model1** `lmChatOpenAi` — model: `[object Object]`
11. **Is Submitting a Purchase Order?** `textClassifier` — options: "[object Object]", inputText: "=from: {{ $json.from.emailAddress.name }} <{{ $json.from.emailAddress.address }}>
subject: {{ $json.subject }}
message:
{{ $json.body.content }}", categories: "[object Object]"
12. **Is Excel Document?** `if` — options: "[object Object]", conditions: "[object Object]"
13. **Do Nothing** `noOp` — configured for its default action.
14. **Extract from File** `extractFromFile` — operation: **xlsx**
15. **Reply Invalid Format** `microsoftOutlook` — operation: **reply**
16. **XLSX to Markdown Table** `code` — jsCode: "const rows = $input.all().map(item => item.json.row);
const maxLength = Math.max(...rows.map(row => row.length));

const table = [
  '|' + rows[0].join('|') + '|',
  '|' + Array(ma…[truncated]"
17. **Extract Purchase Order Details** `informationExtractor` — text: "={{ $json.table }}", options: "[object Object]", schemaType: "manual"
18. **Fix Excel Dates** `set` — mode: "raw", options: "[object Object]", jsonOutput: "={{
{
  output: {
    ...$json.output,
    purchase_order_date: $json.output.purchase_order_date
      ? new Date((new Date(1900, 0, 1)).getTime() + (Number($json.output.purchase_o…[truncated]"
19. **Run Checks** `set` — options: "[object Object]", assignments: "[object Object]"
20. **Is Valid Purchase Order?** `if` — options: "[object Object]", conditions: "[object Object]"
21. **Reply Accepted** `microsoftOutlook` — operation: **reply**
22. **Reply Rejection** `microsoftOutlook` — operation: **reply**
23. **Do Something with Purchase Order** `noOp` — configured for its default action.
  
  ## 💡 AI-Powered Ideas for Improvement
  ### Explain
This n8n workflow automates the processing of purchase orders received via email. It starts by monitoring an Outlook inbox for new emails with attachments. When an email with an XLSX purchase order is detected, it verifies the file format, extracts data from the XLSX file, converts it to a markdown table, and uses AI to extract purchase order details. It then performs validation checks to ensure the purchase order is complete and correct, sending a confirmation or rejection email based on the results.

### Demonstrate
A small business owner could use this workflow to streamline processing purchase orders received by email, reducing manual data entry, minimizing errors, and ensuring timely responses to suppliers, thereby improving operational efficiency.

### Imitate
1. Set up an Outlook trigger in n8n to monitor emails with attachments.
2. Configure the workflow to check for XLSX files and extract data.
3. Use AI to interpret the data and validate purchase orders.
4. Customize email responses for valid/invalid orders.
5. Test the workflow with sample purchase orders.

### Practice
Create a test email account and send sample XLSX purchase orders to it. Run the workflow to process these orders, checking if the extracted data and email responses meet expectations. Adjust settings as needed for accuracy.

### WIIFM
Mastering this workflow enables you to offer automated purchase order processing services, saving time and reducing errors for businesses. This can attract customers looking for efficiency improvements, providing a new income stream for your AI automation business.
  
  ## 🔧 Setup Instructions
  1. **Connect Credentials:** openAiApi, microsoftOutlookOAuth2Api.
  
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
  