# Manual HTTP Create Webhook

## 🚀 What It Does
This workflow automates a process involving manualTrigger, httpRequest, htmlExtract.

## 💼 Business Use Case
Use it to automate research, content creation, or data analysis. It saves hours of manual work.

## ⚙️ How It Works
1.  **Trigger:** This workflow starts with a **On clicking 'execute'** node.
2. **Step 1: On clicking 'execute' (manualTrigger)** - This step performs a key action in the workflow.
3. **Step 2: HTTP Request (httpRequest)** - This step performs a key action in the workflow.
4. **Step 3: HTML Extract (htmlExtract)** - This step performs a key action in the workflow.
5. **Step 4: list news url (itemLists)** - This step performs a key action in the workflow.
6. **Step 5: list news title (itemLists)** - This step performs a key action in the workflow.
7. **Step 6: Merge (merge)** - This step performs a key action in the workflow.
8. **Step 7: Spreadsheet File (spreadsheetFile)** - This step performs a key action in the workflow.
9. **Step 8: Send email notification (emailSend)** - This step performs a key action in the workflow.

## 💡 AI-Powered Ideas for Improvement
### Explain
This n8n workflow automates the process of fetching news from a website, extracting titles and URLs, storing them in a spreadsheet, and sending an email notification with the data. It starts with a manual trigger and involves several steps for data processing and communication.

### Demonstrate
A business owner could use this workflow to automatically gather daily news updates about their industry, compile them into a spreadsheet for review, and receive an email summary, saving time and ensuring they stay informed without manual effort.

### Imitate
1. Open n8n and create a new workflow.
2. Add a **Manual Trigger** node to start the workflow.
3. Add an **HTTP Request** node to fetch news from a specified URL.
4. Use an **HTML Extract** node to pull out news titles and URLs.
5. Add **Item Lists** nodes to list the extracted data.
6. Merge the lists using a **Merge** node.
7. Add a **Spreadsheet File** node to save the data.
8. Connect an **Email Send** node to notify recipients with the spreadsheet attached.

### Practice
Try modifying the workflow to fetch news from a different website or change the output format (e.g., CSV instead of a spreadsheet). Execute the workflow and check if the changes work as intended.

### WIIFM
Mastering this workflow helps you automate repetitive tasks, allowing you to offer valuable services to businesses, potentially increasing your income as a consultant or developer by creating tailored automation solutions that save clients time and improve efficiency.

## 🔧 Setup Instructions
1. **Connect Credentials:** OpenAI, Google Sheets, Slack, and other nodes must be authenticated.
2. **Customize Core Logic:** Review "On clicking 'execute'" and "Send email notification" for IDs, table names, and URLs.
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
