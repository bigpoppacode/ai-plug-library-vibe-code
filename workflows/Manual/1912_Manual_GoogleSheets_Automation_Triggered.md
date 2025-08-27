# Manual GoogleSheets Automation Triggered
  ## 🚀 What It Does
  Moves data between apps and a **database/spreadsheet**, with logic and optional AI steps.
  
  ## 💼 Business Use Case
  Ideal for **lead intake**, **enrichment**, and **CRM updates** with alerts to the right channel.
  
  ## ⚙️ How It Works
  1. **Trigger:** This workflow starts with **When clicking ‘Test workflow’**.
  2. **When clicking ‘Test workflow’** `manualTrigger` — configured for its default action.
3. **Person info** `googleSheets` — options: "[object Object]", sheetName: "[object Object]", documentId: "[object Object]"
4. **Search profile** `airtop` — resource: **extraction**, operation: **query**, url: `=https://www.google.com/search?q={{ encodeURI($json['Person Info']) }}`, prompt: "=This is Google Search results. the first results should be the Linkedin Page of {{ $json['Person Info'] }} 
Return the Linkedin URL and nothing else.
If you cannot find the Linked…[truncated]"
5. **Parse response** `code` — mode: "runOnceForEachItem", jsCode: "const linkedInProfile = $json.data.modelResponse
const rowData = $('Person info').item.json

return { json: {
  ...rowData,
  'LinkedIn URL': linkedInProfile
}};"
6. **Update row** `googleSheets` — operation: **update**
  
  ## 💡 AI-Powered Ideas for Improvement
  ### Explain
This n8n workflow automates the process of finding LinkedIn profiles based on names stored in a Google Sheets document. When triggered, it retrieves a list of names, performs a Google search to find the corresponding LinkedIn profiles, and updates the Google Sheets document with the LinkedIn URLs. This helps maintain an organized and updated contact list for networking or marketing purposes.

### Demonstrate
A business owner might use this workflow to streamline the process of updating contact databases with LinkedIn information, ensuring accurate and efficient networking and outreach efforts.

### Imitate
1. Import the workflow into n8n.
2. Connect your Google Sheets account.
3. Set up the Google Sheets node to read your sheet with names.
4. Ensure Airtop is configured for web scraping.
5. Test the workflow to make sure LinkedIn URLs are added to the sheet.

### Practice
Create a Google Sheet with a list of names. Run the workflow to see if it successfully retrieves LinkedIn URLs. Modify a few names to test how the workflow handles different inputs and ensure accuracy.

### WIIFM
Mastering this workflow can enhance your service offerings by allowing you to quickly build and maintain a database of professional contacts, increasing your efficiency in business development and client outreach, ultimately leading to better networking and potential income growth.
  
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
  