# Extractfromfile Manual Automation Webhook
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
  - **Explain:** This workflow automates the extraction of data from a PDF file stored in Google Drive. It downloads the PDF, converts it into a base64 string, and then sends this data to two AI models, Claude 3.5 Sonnet and Gemini 2.0 Flash, to extract specific information as defined by a user prompt. The workflow is designed to compare the performance and results of both models in extracting data.

- **Demonstrate:** A business owner might use this workflow to automate the extraction of VAT numbers from invoices stored in Google Drive, saving time and reducing manual data entry errors.

- **Imitate:** To apply this workflow:
  1. Import it into n8n.
  2. Connect your Google Drive and API credentials for Anthropic and Google Gemini.
  3. Modify the "Define Prompt" node to specify what data you want to extract.
  4. Test the workflow to ensure it extracts the desired data correctly.

- **Practice:** Set up a test Google Drive folder with a few PDF documents. Run the workflow to extract specific data, such as invoice numbers or dates, using different prompts to see how each AI model performs.

- **WIIFM:** Mastering this workflow allows you to offer automated document processing services, helping clients reduce manual data entry tasks. This can lead to new business opportunities, increased efficiency, and potential savings, positioning you as a valuable asset in AI-driven automation solutions.
  
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
  