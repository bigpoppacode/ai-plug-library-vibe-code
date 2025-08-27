# Extractfromfile Manual Process Webhook
  ## 🚀 What It Does
  Automates a flow using stickyNote×5, httpRequest×2, manualTrigger.
  
  ## 💼 Business Use Case
  Use as a **glue/API broker**: receive data, enrich/validate via APIs, and pass to downstream systems.
  
  ## ⚙️ How It Works
  1. **Trigger:** This workflow starts with **When clicking 'Test workflow'**.
  2. **When clicking 'Test workflow'** `manualTrigger` — configured for its default action.
3. **Sticky Note1** `stickyNote` — color: "7", width: "601", height: "585"
4. **Sticky Note** `stickyNote` — color: "5", width: "320", height: "360"
5. **Sticky Note2** `stickyNote` — color: "5", width: "320", height: "240"
6. **Sticky Note3** `stickyNote` — color: "5", width: "380", height: "280"
7. **Sticky Note4** `stickyNote` — color: "5", width: "220", height: "280"
8. **Define Prompt** `set` — options: "[object Object]", assignments: "[object Object]"
9. **Google Drive** `googleDrive` — operation: **download**
10. **Extract from File** `extractFromFile` — operation: **binaryToPropery**
11. **Call Claude 3.5 Sonnet with PDF Capabilities** `httpRequest` — method: **POST**, url: `https://api.anthropic.com/v1/messages`
12. **Call Gemini 2.0 Flash with PDF Capabilities** `httpRequest` — method: **POST**, url: `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash-exp:generateContent`
  
  ## 💡 AI-Powered Ideas for Improvement
  ### Explain
This n8n workflow automates the extraction of data from a PDF stored in Google Drive. It downloads the PDF, converts it to a base64 format, and sends this data to both Claude 3.5 Sonnet and Gemini 2.0 Flash APIs. These APIs extract specific information from the PDF based on a defined prompt, allowing you to compare their results in terms of accuracy, speed, and cost.

### Demonstrate
A business could use this workflow to automatically extract financial data from invoices stored in Google Drive, using AI to handle large volumes efficiently and accurately, reducing manual processing time.

### Imitate
1. Import the workflow into n8n.
2. Connect your Google Drive account and update the file ID for your PDF.
3. Configure API keys for Claude 3.5 and Gemini 2.0.
4. Modify the prompt in the "Define Prompt" node to suit your data extraction needs.
5. Test the workflow with the "Test workflow" trigger.

### Practice
Create a test PDF with sample data and upload it to Google Drive. Run the workflow to extract specific information, like invoice numbers or totals, and compare the output from both AI services.

### WIIFM
Mastering this workflow allows you to offer advanced document processing solutions, automating tasks like data extraction from invoices or contracts. This can enhance service offerings, attract new clients, and increase revenue in your automation business.
  
  ## 🔧 Setup Instructions
  1. **Connect Credentials:** googleDriveOAuth2Api, anthropicApi, googlePalmApi.
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
  