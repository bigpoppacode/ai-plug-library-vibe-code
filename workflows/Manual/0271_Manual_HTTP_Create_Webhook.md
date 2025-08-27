# Manual HTTP Create Webhook
  ## 🚀 What It Does
  Moves data between apps and a **database/spreadsheet**, with logic and optional AI steps.
  
  ## 💼 Business Use Case
  Use as a **glue/API broker**: receive data, enrich/validate via APIs, and pass to downstream systems.
  
  ## ⚙️ How It Works
  1. **Trigger:** This workflow starts with **On clicking 'execute'**.
  2. **On clicking 'execute'** `manualTrigger` — configured for its default action.
3. **Note** `stickyNote` — width: "436", height: "169", content: "## n8n version

This workflow was created using n8n version 0.197.1 and uses a new [expression syntax](https://docs.n8n.io/code-examples/methods-variables-reference/) as well as a …[truncated]"
4. **Download XML File** `httpRequest` — url: `https://www.w3schools.com/xml/simple.xml`
5. **Parse XML content** `xml` — options: "[object Object]"
6. **Split out food items** `itemLists` — options: "[object Object]", fieldToSplitOut: "breakfast_menu.food"
7. **Create new spreadsheet file** `googleSheets` — resource: **spreadsheet**
8. **Define header row** `set` — values: "[object Object]", options: "[object Object]", keepOnlySet: "true"
9. **Write header row** `googleSheets` — operation: **update**, sheet: `={{ $("Create new spreadsheet file").first().json["spreadsheetId"] }}`
10. **Wait for spreadsheet creation** `merge` — mode: "chooseBranch", output: "input2"
11. **Write data to sheet** `googleSheets` — operation: **append**, sheet: `={{ $("Create new spreadsheet file").first().json["spreadsheetId"] }}`
  
  ## 💡 AI-Powered Ideas for Improvement
  **Explain:**  
This n8n workflow automates the process of downloading an XML file from a URL, parsing its content to extract specific data (in this case, food items from a breakfast menu), and then organizing this data into a structured format within a Google Sheets spreadsheet. It starts with a manual trigger, downloads the XML, parses it to extract food items, creates a new Google Sheets file, sets up the header row, and appends the extracted data into the spreadsheet.

**Demonstrate:**  
A restaurant manager could use this workflow to regularly update their menu items in a Google Sheet for inventory tracking or menu planning by parsing an XML file from a supplier.

**Imitate:**  
1. Import the workflow into n8n.
2. Connect your Google account for Google Sheets access.
3. Modify the XML URL if needed.
4. Customize the spreadsheet title and headers.
5. Test the workflow to ensure it populates the Google Sheet correctly.

**Practice:**  
Create a test XML file with a few food items and modify the workflow to use this file. Run the workflow and check the Google Sheet to see how data is organized. Adjust headers or data fields as needed.

**WIIFM:**  
Mastering this workflow allows you to offer automated data processing services, such as updating inventories or generating reports, to clients. This can enhance your service offerings, leading to increased client satisfaction and potential revenue growth in your automation business.
  
  ## 🔧 Setup Instructions
  1. **Connect Credentials:** googleSheetsOAuth2Api.
2. **Data Mapping:** Verify base/sheet IDs and column names match exactly to prevent silent failures.
3. **API Contracts:** Validate required headers and 2xx/4xx handling; add retries for 429/5xx.
  
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
  