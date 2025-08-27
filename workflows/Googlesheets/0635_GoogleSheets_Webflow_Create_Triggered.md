# GoogleSheets Webflow Create Triggered
  ## 🚀 What It Does
  Moves data between apps and a **database/spreadsheet**, with logic and optional AI steps.
  
  ## 💼 Business Use Case
  Ideal for **lead intake**, **enrichment**, and **CRM updates** with alerts to the right channel.
  
  ## ⚙️ How It Works
  1. **Trigger:** This workflow starts with **On Form Submission**.
  2. **Sticky Note1** `stickyNote` — color: "2", width: "270", height: "250"
3. **Sticky Note2** `stickyNote` — color: "6", width: "267", height: "394"
4. **Sticky Note3** `stickyNote` — color: "4", width: "270", height: "274"
5. **On Form Submission** `webflowTrigger` — site: "640cfc01791fc750653436fd"
6. **Sticky Note4** `stickyNote` — color: "7", width: "520", height: "1680"
7. **Prepare Fields** `code` — jsCode: "const formData = $input.all()[0].json.payload.data
const Date = $input.all()[0].json.payload.submittedAt || new Date()

return {
  ...formData, // creates a new field for every ele…[truncated]"
8. **Append New Row** `googleSheets` — operation: **append**
  
  ## 💡 AI-Powered Ideas for Improvement
  ### Explain
This n8n workflow automates the process of capturing form submissions from a Webflow site and storing them in a Google Sheets spreadsheet. When a form is submitted, the workflow triggers, captures the form data, adds a timestamp, and appends this information as a new row in a Google Sheets document. This ensures that all form submissions are systematically recorded and timestamped for further analysis or record-keeping.

### Demonstrate
A business owner could use this workflow to automatically log customer inquiries from their website into a Google Sheets document, making it easier to track and respond to customer requests without manually copying data.

### Imitate
1. Import the workflow into n8n.
2. Connect your Webflow and Google Sheets accounts.
3. Set the Webflow site ID in the trigger node.
4. Customize the Google Sheets node with your specific spreadsheet ID and sheet name.
5. Test the workflow by submitting a form on your Webflow site.

### Practice
Create a simple form on a Webflow site with fields like Name, Email, and Message. Then, run the workflow and submit the form. Check the Google Sheets document to verify that the data is recorded correctly with timestamps.

### WIIFM
Mastering this workflow allows you to efficiently manage and record web form submissions, saving time and reducing manual data entry errors. This can enhance customer relationship management and provide valuable data insights, helping you offer improved services and potentially increasing revenue.
  
  ## 🔧 Setup Instructions
  1. **Connect Credentials:** webflowOAuth2Api, googleSheetsOAuth2Api.
2. **Data Mapping:** Verify base/sheet IDs and column names match exactly to prevent silent failures.
  
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
  