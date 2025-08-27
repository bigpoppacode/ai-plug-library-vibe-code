# Manual GoogleSheets Automation Triggered
  ## 🚀 What It Does
  Moves data between apps and a **database/spreadsheet**, with logic and optional AI steps.
  
  ## 💼 Business Use Case
  Ideal for **lead intake**, **enrichment**, and **CRM updates** with alerts to the right channel.
  
  ## ⚙️ How It Works
  1. **Trigger:** This workflow starts with **When clicking ‘Test workflow’**.
  2. **When clicking ‘Test workflow’** `manualTrigger` — configured for its default action.
3. **Get companies** `googleSheets` — options: "[object Object]", sheetName: "[object Object]", documentId: "[object Object]"
4. **Calculate ICP Scoring** `airtop` — resource: **extraction**, operation: **query**, url: `={{ $json['Linkedin_URL_Company'] }}`, prompt: "# LinkedIn Company Analysis Prompt

Extract and analyze the following information from the provided LinkedIn company page. Present the results in a structured JSON format.

## Requ…[truncated]"
5. **Format response** `code` — mode: "runOnceForEachItem", jsCode: "const row_number = $('Get companies').item.json.row_number
const Linkedin_URL_Company = $('Get companies').item.json.Linkedin_URL_Company
const icp_scoring = JSON.parse($input.item…[truncated]"
6. **Update row** `googleSheets` — operation: **update**
  
  ## 💡 AI-Powered Ideas for Improvement
  **Explain:**  
This n8n workflow automates the process of scoring companies based on their LinkedIn profiles. It retrieves a list of companies from Google Sheets and uses an AI tool to analyze each company's LinkedIn page. The analysis includes evaluating the company's size, technical sophistication, and AI focus. The results are formatted and updated back into Google Sheets, providing a structured ICP (Ideal Customer Profile) score for each company.

**Demonstrate:**  
A consultant could use this workflow to evaluate potential clients, helping prioritize outreach efforts based on which companies align best with their ideal customer profile.

**Imitate:**  
1. Import the workflow into n8n.
2. Connect your Google Sheets and AI tool accounts.
3. Set up the Google Sheets with company LinkedIn URLs.
4. Run the workflow to analyze and score the companies.
5. Review the updated scores in Google Sheets.

**Practice:**  
Create a test Google Sheet with sample company LinkedIn URLs. Run the workflow to see how it scores each company, then adjust the parameters to better fit your needs.

**WIIFM:**  
Mastering this workflow can help you offer data-driven insights to clients, enhancing your consulting services. It enables you to efficiently identify and target high-potential prospects, potentially increasing client acquisition and revenue.
  
  ## 🔧 Setup Instructions
  1. **Connect Credentials:** googleSheetsOAuth2Api, airtopApi.
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
  