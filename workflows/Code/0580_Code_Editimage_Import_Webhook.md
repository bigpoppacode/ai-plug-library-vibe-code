# Code EditImage Import Webhook
  ## 🚀 What It Does
  Calls external APIs and uses **AI** to transform or decide, then routes the result downstream.
  
  ## 💼 Business Use Case
  Use as a **glue/API broker**: receive data, enrich/validate via APIs, and pass to downstream systems.
  
  ## ⚙️ How It Works
  1. **Trigger:** This workflow starts with **When clicking ‘Test workflow’**.
  2. **When clicking ‘Test workflow’** `manualTrigger` — configured for its default action.
3. **Google Gemini Chat Model** `lmChatGoogleGemini` — options: "[object Object]", modelName: "models/gemini-1.5-pro-latest"
4. **Sticky Note** `stickyNote` — width: "437.0502325581392", height: "430.522325581395", content: "## Try Me Out!

### This workflow converts a bank statement to markdown, faithfully capturing the details using the power of Vision Language Models ("VLMs"). The resulting markdown…[truncated]"
5. **Sticky Note1** `stickyNote` — color: "7", width: "546.4534883720931", height: "478.89348837209275"
6. **Sticky Note2** `stickyNote` — color: "7", width: "848.0232558139535", height: "533.5469767441862"
7. **Sticky Note3** `stickyNote` — color: "7", width: "775.3441860465115", height: "636.0809302325588"
8. **Google Gemini Chat Model1** `lmChatGoogleGemini` — options: "[object Object]", modelName: "models/gemini-1.5-pro-latest"
9. **Sticky Note4** `stickyNote` — color: "7", width: "719.7534883720941", height: "574.3134883720929"
10. **Sticky Note6** `stickyNote` — color: "5", width: "366.00558139534894", height: "125.41023255813957"
11. **Sticky Note5** `stickyNote` — width: "199.23348837209306", height: "374.95069767441856", content: "















### Privacy Warning!
This example uses a public third party service. If your data is senstive, please swap this out for the self-hosted version!"
12. **Sticky Note7** `stickyNote` — color: "5", width: "498.18790697674433", height: "130.35162790697677"
13. **Get Bank Statement** `googleDrive` — operation: **download**
14. **Split PDF into Images** `httpRequest` — method: **POST**, url: `http://stirling-pdf:8080/api/v1/convert/pdf/img`
15. **Extract Zip File** `compression` — configured for its default action.
16. **Images To List** `code` — jsCode: "let results = [];

for (item of items) {
    for (key of Object.keys(item.binary)) {
        results.push({
            json: {
                fileName: item.binary[key].fileName
…[truncated]"
17. **Sort Pages** `sort` — options: "[object Object]", sortFieldsUi: "[object Object]"
18. **Resize Images For AI** `editImage` — operation: **resize**
19. **Transcribe to Markdown** `chainLlm` — text: "transcribe the image to markdown.", messages: "[object Object]", promptType: "define"
20. **Combine All Pages** `aggregate` — options: "[object Object]", fieldsToAggregate: "[object Object]"
21. **Extract All Deposit Table Rows** `informationExtractor` — text: "= {{ $json.pages.join('---') }}", options: "[object Object]", schemaType: "manual"
  
  ## 💡 AI-Powered Ideas for Improvement
  ### Explain
This n8n workflow automates the process of converting a bank statement PDF into a structured markdown format using Vision Language Models (VLMs). The workflow starts by downloading the bank statement from Google Drive, converting the PDF pages into images, and resizing them for AI processing. It then transcribes the images into markdown text, which retains the document's structure, such as tables and headings. Finally, it extracts specific data, like deposit table rows, from the markdown text, allowing for easy data analysis and integration into other systems.

### Demonstrate
A finance department could use this workflow to automate the extraction of financial data from scanned bank statements, converting them into a structured format for reporting and analysis, saving time and reducing errors compared to manual data entry.

### Imitate
1. Import the workflow into your n8n instance.
2. Connect your Google Drive account to access bank statements.
3. Adjust the PDF file ID in the "Get Bank Statement" node.
4. Run the workflow to test the PDF conversion and data extraction.
5. Customize the markdown processing and data extraction for your specific needs.

### Practice
Create a sample PDF with mock bank statement data, upload it to Google Drive, and run the workflow. Observe how the workflow processes the document and extracts data. Modify the markdown conversion settings to see how different configurations affect the output.

### WIIFM
Mastering this workflow can help you offer automated document processing services, improving efficiency and accuracy for clients in finance or data management. This skill can attract new clients and increase revenue by providing high-value automation solutions.
  
  ## 🔧 Setup Instructions
  1. **Connect Credentials:** googlePalmApi, googleDriveOAuth2Api.
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
  