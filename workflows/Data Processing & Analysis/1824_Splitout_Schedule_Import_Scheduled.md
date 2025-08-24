# Splitout Schedule Import Scheduled

## 🚀 What It Does
This workflow automates a process involving manualTrigger, httpRequest, splitOut.

## 💼 Business Use Case
Use it to automate research, content creation, or data analysis. It saves hours of manual work.

## ⚙️ How It Works
1.  **Trigger:** This workflow starts with a **On clicking 'execute'** node.
2. **Step 1: On clicking 'execute' (manualTrigger)** - This step performs a key action in the workflow.
3. **Step 2: Query Orders (httpRequest)** - This step performs a key action in the workflow.
4. **Step 3: Split Out Order  (splitOut)** - This step performs a key action in the workflow.
5. **Step 4: Squarespace Orders Spreadsheet (googleSheets)** - This step performs a key action in the workflow.
6. **Step 5: Globals (set)** - This step performs a key action in the workflow.
7. **Step 6: Sticky Note3 (stickyNote)** - This step performs a key action in the workflow.
8. **Step 7: Schedule Trigger (scheduleTrigger)** - This step performs a key action in the workflow.
9. **Step 8: Sticky Note (stickyNote)** - This step performs a key action in the workflow.

## 💡 AI-Powered Ideas for Improvement
### Explain
This n8n workflow automatically retrieves all orders from a Squarespace store and saves them into a Google Sheets spreadsheet. It uses API calls to gather order data, processes that data, and updates the spreadsheet for easy access and analysis.

### Demonstrate
A business owner could use this workflow to streamline order management. Instead of manually exporting and entering order data into spreadsheets, they can automate the process, saving time and reducing errors, thus focusing on strategic tasks.

### Imitate
1. Open n8n and create a new workflow.
2. Add a **Manual Trigger** node to start the workflow.
3. Use the **HTTP Request** node to query Squarespace orders.
4. Add a **Split Out** node to handle multiple orders.
5. Connect a **Google Sheets** node to append or update the order data.
6. Set up a **Set** node for any global variables needed (like API version).
7. Save and execute the workflow.

### Practice
Try modifying the workflow to filter orders based on a specific date range. Adjust the query parameters in the HTTP Request node to only fetch orders placed within the last week, then run the workflow to see how it updates the spreadsheet.

### WIIFM
Mastering this workflow allows you to offer valuable automation services to businesses, saving them time and improving accuracy. This skill can attract customers looking for efficiency, potentially leading to significant income through automation consulting or services.

## 🔧 Setup Instructions
1. **Connect Credentials:** OpenAI, Google Sheets, Slack, and other nodes must be authenticated.
2. **Customize Core Logic:** Review "On clicking 'execute'" and "Sticky Note" for IDs, table names, and URLs.
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
