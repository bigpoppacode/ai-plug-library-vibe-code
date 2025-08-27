# Code Filter Process Triggered
  ## 🚀 What It Does
  Monitors events, processes them, and **notifies** people/apps (Slack/Email) with structured updates.
  
  ## 💼 Business Use Case
  Ideal for **lead intake**, **enrichment**, and **CRM updates** with alerts to the right channel.
  
  ## ⚙️ How It Works
  1. **Trigger:** Triggered by **incoming email** (new message).
  2. **OpenAI Chat Model** `lmChatOpenAi` — model: `[object Object]`
3. **Calculator** `toolCalculator` — configured for its default action.
4. **Structured Output Parser** `outputParserStructured` — jsonSchemaExample: "{
  "Tipo": "Factura",
  "Numero_Factura": "FAC-2025-00123",
  "Fecha_Emision": "2025-05-07",
  "CUFE": "f4a6c8b03e1e4e8b90f9e3e2945d8b23c5b4e2fa",
  "NIT_Emisor": "900123456",
  "…[truncated]"
5. **On Email receipt** `gmailTrigger` — simple: "false", filters: "[object Object]", options: "[object Object]"
6. **Sticky Note** `stickyNote` — width: "960", height: "880", content: "# 🧾 Colombian electronic invoices processing

This N8N workflow automates the extraction and organization of **personal electronic invoices** in Colombia received via **Gmail**. I…[truncated]"
7. **Get Filename and mimeType** `code` — jsCode: "let results = [];

for (item of items) {
    for (key of Object.keys(item.binary)) {
        results.push({
            json: {
                fileName: item.binary[key].fileName,…[truncated]"
8. **Filter ZIP files only** `filter` — options: "[object Object]", conditions: "[object Object]"
9. **Unzip Invoice** `compression` — configured for its default action.
  
  ## 💡 AI-Powered Ideas for Improvement
  ### Explain
This n8n workflow automates the processing of Colombian electronic invoices received via Gmail. It starts by checking for emails with ZIP attachments, which are assumed to contain invoices. The workflow unzips these files, identifies PDF and XML formats, and extracts relevant data using an AI model. The data is validated, ensuring the invoice totals match calculations, and the documents are stored in Google Drive with organized naming. Finally, the invoice details are logged into Google Sheets.

### Demonstrate
A small business in Colombia could use this workflow to automate their invoice processing, saving time and reducing human error. By automatically extracting and validating invoice data, they ensure compliance and maintain organized records.

### Imitate
1. Import the workflow into n8n.
2. Connect to your Gmail, Google Drive, and Google Sheets accounts.
3. Set up a Gmail trigger for emails with ZIP attachments.
4. Test the workflow with sample invoices to ensure proper extraction and storage.
5. Customize the Google Sheets and Drive settings to match your organizational needs.

### Practice
Create a test Gmail account and send a ZIP file containing a sample PDF and XML invoice to it. Run the workflow to see how it processes the email, extracts the data, and stores it in Google Drive and Sheets. Adjust any settings to better fit your specific requirements.

### WIIFM
Mastering this workflow can streamline your invoice processing, saving time and reducing errors. As an automation consultant, you can offer this solution to clients, enhancing their operational efficiency and opening opportunities for recurring income through support and customization services.
  
  ## 🔧 Setup Instructions
  1. **Connect Credentials:** openAiApi, gmailOAuth2, googleDriveOAuth2Api, googleSheetsOAuth2Api.
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
  