# Filter Manual Automation Webhook

## 🚀 What It Does
This workflow automates a process involving manualTrigger, filter, stickyNote.

## 💼 Business Use Case
Use it to automate research, content creation, or data analysis. It saves hours of manual work.

## ⚙️ How It Works
1.  **Trigger:** This workflow starts with a **When clicking ‘Test workflow’** node.
2. **Step 1: When clicking ‘Test workflow’ (manualTrigger)** - This step performs a key action in the workflow.
3. **Step 2: Filter (filter)** - This step performs a key action in the workflow.
4. **Step 3: Sticky Note (stickyNote)** - This step performs a key action in the workflow.
5. **Step 4: Save company data into Sheets (googleSheets)** - This step performs a key action in the workflow.
6. **Step 5: Loop Over Items (splitInBatches)** - This step performs a key action in the workflow.
7. **Step 6: ProspectLens API call (httpRequest)** - This step performs a key action in the workflow.
8. **Step 7: Get all rows from Sheets (googleSheets)** - This step performs a key action in the workflow.

## 💡 AI-Powered Ideas for Improvement
### Explain
This n8n workflow automates the process of researching company data by fetching information from a Google Sheet, filtering it, calling the ProspectLens API for details, and saving the results back into the sheet. It streamlines data collection and enhances productivity.

### Demonstrate
A business owner can use this workflow to quickly gather and update information about potential clients or competitors. For example, a marketing consultant could automate research on companies in a target market, saving time and ensuring data accuracy for strategic planning.

### Imitate
1. Set up n8n and create a new workflow.
2. Add a **Manual Trigger** to start the process.
3. Use the **Google Sheets** node to read company data from a specified sheet.
4. Implement a **Filter** to process only new or unprocessed entries.
5. Add an **HTTP Request** node to call the ProspectLens API for each company.
6. Use another **Google Sheets** node to save the updated company data back into the sheet.

### Practice
Try modifying the existing workflow by changing the API used or adding additional data fields to extract from the Google Sheet. Test it with a small dataset to see how it processes and updates the information.

### WIIFM
Mastering this workflow enables you to deliver high-value automation services, streamline data processes for clients, and enhance your offerings as a consultant or developer. This can lead to increased client satisfaction, repeat business, and higher income potential.

## 🔧 Setup Instructions
1. **Connect Credentials:** OpenAI, Google Sheets, Slack, and other nodes must be authenticated.
2. **Customize Core Logic:** Review "When clicking ‘Test workflow’" and "Get all rows from Sheets" for IDs, table names, and URLs.
3. **Activate the Workflow:** Set the workflow to "Active" after testing.

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
