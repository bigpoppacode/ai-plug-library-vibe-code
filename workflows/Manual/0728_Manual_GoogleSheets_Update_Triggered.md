# Manual GoogleSheets Update Triggered
  ## 🚀 What It Does
  Moves data between apps and a **database/spreadsheet**, with logic and optional AI steps.
  
  ## 💼 Business Use Case
  Ideal for **lead intake**, **enrichment**, and **CRM updates** with alerts to the right channel.
  
  ## ⚙️ How It Works
  1. **Trigger:** This workflow starts with **When clicking ‘Test workflow’**.
  2. **When clicking ‘Test workflow’** `manualTrigger` — configured for its default action.
3. **OpenAI Chat Model** `lmChatOpenAi` — model: `[object Object]`
4. **Structured Output Parser** `outputParserStructured` — jsonSchemaExample: "{
	"Isservice": "yes"
}"
5. **Fetch Keywords from Sheet** `googleSheets` — options: "[object Object]", sheetName: "[object Object]", documentId: "[object Object]"
  
  ## 💡 AI-Powered Ideas for Improvement
  ### Explain
This n8n workflow automates the process of checking keywords from a Google Sheet to determine if they contain names of known IT software, services, tools, or apps. It fetches keywords from the sheet, processes them in batches, uses OpenAI to analyze if they match known services, and updates the sheet with the results.

### Demonstrate
A business consultant could use this workflow to quickly identify relevant IT services mentioned in client documents, helping streamline the analysis process and making it easier to provide strategic advice.

### Imitate
1. Import the workflow into n8n.
2. Connect your Google Sheets and OpenAI accounts.
3. Configure the document ID and sheet name in the Google Sheets node.
4. Set up a trigger, for example, a manual trigger to start the workflow.
5. Test the workflow to ensure it updates the sheet correctly with the analysis results.

### Practice
Create a Google Sheet with a list of keywords, then run the workflow. Observe how it updates the sheet with "yes" or "no" based on whether each keyword includes a known IT service. Modify some keywords to see how the workflow reacts.

### WIIFM
Mastering this workflow can help you offer automated keyword analysis services, aiding businesses in identifying key IT services in large datasets quickly. This enhances your service offerings, potentially leading to increased client satisfaction and revenue in your automation business.
  
  ## 🔧 Setup Instructions
  1. **Connect Credentials:** openAiApi, googleSheetsOAuth2Api.
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
  