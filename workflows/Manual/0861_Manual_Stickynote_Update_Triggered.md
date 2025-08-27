# Manual Stickynote Update Triggered
  ## 🚀 What It Does
  Automates a flow using quickChart, set, googleDrive.
  
  ## 💼 Business Use Case
  Use to eliminate manual copy-paste and standardize a recurring business process.
  
  ## ⚙️ How It Works
  1. **Trigger:** This workflow starts with **When clicking ‘Test workflow’**.
  2. **Sticky Note** `stickyNote` — width: "1460", height: "1060", content: "## Chart Generator
**Generate Dynamic Line Chart from JSON Data to Upload to Google Drive
### How to Use & Customize

* **Change Input Data:** Modify the `labels` and `salesData` a…[truncated]"
3. **When clicking ‘Test workflow’** `manualTrigger` — configured for its default action.
4. **Edit Fields: Set JSON data to test** `set` — options: "[object Object]", assignments: "[object Object]"
5. **QuickChart** `quickChart` — data: "={{ $json.jsonData.salesData }}", chartType: "line", labelsMode: "array"
6. **Google Drive: Upload File** `googleDrive` — name: "=chart.{{ $binary.data.fileExtension }}", driveId: "[object Object]", options: "[object Object]"
  
  ## 💡 AI-Powered Ideas for Improvement
  **Explain:**  
This n8n workflow generates a dynamic line chart from JSON data, specifically sales data over four quarters. It uses the QuickChart service to create a visual representation of the data and then uploads the resulting chart image to Google Drive. The workflow starts manually, sets test JSON data, generates the chart, and finally uploads it to a specified Google Drive folder.

**Demonstrate:**  
A business owner could use this workflow to automatically generate sales performance charts every quarter for presentations or reports, saving time and ensuring consistent visual representation.

**Imitate:**  
1. Import the workflow into your n8n environment.  
2. Connect your Google Drive account.  
3. Modify the JSON data in the "Edit Fields" node to reflect your sales data.  
4. Test the workflow to ensure it uploads the chart correctly.  
5. Schedule it to run automatically at the end of each quarter.

**Practice:**  
Create a test dataset with different sales figures, modify the JSON data in the workflow, and observe the changes in the generated chart. Try changing the chart type in the QuickChart node to see different visualizations.

**WIIFM (What's In It For Me):**  
Mastering this workflow allows you to offer automated data visualization services, enhancing client presentations and reports. This skill can help you attract more clients, offering value-added services that can increase your income in the AI automation business.
  
  ## 🔧 Setup Instructions
  1. **Connect Credentials:** googleDriveOAuth2Api.
  
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
  