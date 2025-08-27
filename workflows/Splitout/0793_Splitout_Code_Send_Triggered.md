# Splitout Code Send Triggered
## 🚀 What It Does
Monitors events, processes them, and **notifies** people/apps (Slack/Email) with structured updates.

## 💼 Business Use Case
Ideal for **lead intake**, **enrichment**, and **CRM updates** with alerts to the right channel.

## ⚙️ How It Works
1. **Trigger:** Triggered by **incoming email** (new message).
2. **Sticky Note3** `stickyNote` — width: "780", height: "540", content: "### 5. Do you need more details?
Find a step-by-step guide in this tutorial
![Guide](https://www.samirsaci.com/content/images/2025/04/EDI-Message-Parser.png)
[🎥 Watch My Tutorial]…[truncated]"
3. **Sticky Note1** `stickyNote` — color: "7", width: "380", height: "620"
4. **Sticky Note** `stickyNote` — width: "800", height: "880", content: "### Example of EDI Message
You can send yourself this email to test the workflow.

UNA:+.? '
UNB+UNOC:3+SENDER_ID+RECEIVER_ID+240317:1200+ORDER67890'
UNH+1+ORDERS:D:96A:UN'
BGM+220…[truncated]"
5. **Sticky Note2** `stickyNote` — color: "7", width: "440", height: "620"
6. **Email Trigger** `gmailTrigger` — filters: "[object Object]", pollTimes: "[object Object]"
7. **Sticky Note4** `stickyNote` — color: "7", width: "700", height: "620"
8. **Sticky Note5** `stickyNote` — color: "7", width: "320", height: "620"
9. **Subject includes EDI** `if` — options: "[object Object]", conditions: "[object Object]"
10. **Get Email** `gmail` — operation: **get**
11. **Extract Body** `set` — options: "[object Object]", assignments: "[object Object]"
12. **Parse EDI Message** `code` — jsCode: "// EDI Parser function for n8n JavaScript node
function parseEDI(ediMessage) {
  // Define the data structure to store parsed results
  const result = {
    interchangeHeader: {},
…[truncated]"
13. **Order Information** `set` — options: "[object Object]", assignments: "[object Object]"
14. **Flatten Data to Orderlines** `code` — jsCode: "// EDI to Flattened Tabular Data Transformer for n8n JavaScript node
function transformToFlattened(parsedEDI) {
  const flattened = [];
  
  // Create a header object with all orde…[truncated]"
15. **Split Out by Line** `splitOut` — options: "[object Object]", fieldToSplitOut: "data"
16. **Order Info + Orderlines** `merge` — mode: "combineBySql"
17. **Order Type** `if` — options: "[object Object]", conditions: "[object Object]"
18. **Return Orders** `googleSheets` — operation: **append**
19. **Outbound Orders** `googleSheets` — operation: **append**

## 💡 AI-Powered Ideas for Improvement
### Explain
This n8n workflow automates the process of parsing and managing Electronic Data Interchange (EDI) messages received via email. It triggers when a new email with "EDI" in the subject is received, extracts the email body, and parses it to retrieve order details. The extracted data is then transformed into a structured format, split into individual order lines, and stored in Google Sheets under separate sheets for "Return Orders" and "Outbound Orders."

### Demonstrate
A logistics company could use this workflow to automate the processing of incoming EDI orders, ensuring timely and accurate data entry into their system. This reduces manual data entry errors and accelerates order processing.

### Imitate
1. Set up your Gmail API credentials in n8n.
2. Import the workflow into your n8n instance.
3. Ensure your Google Sheets API is configured and accessible.
4. Test the workflow by sending a sample EDI email to your Gmail.
5. Verify that the parsed data appears correctly in your Google Sheets.

### Practice
Create a test Gmail account and send yourself an EDI-formatted email. Use the workflow to parse and store the data in a Google Sheet. Try modifying the EDI message and observe how the workflow handles different data.

### WIIFM
Mastering this workflow enables you to offer automated EDI processing services, enhancing operational efficiency for businesses dealing with large volumes of EDI transactions. This can attract clients looking to streamline their order management processes, providing a valuable service that can generate recurring revenue.

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
