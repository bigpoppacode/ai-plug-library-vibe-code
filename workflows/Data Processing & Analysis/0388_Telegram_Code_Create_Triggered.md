# Telegram Code Create Triggered

## 🚀 What It Does
This workflow automates a process involving noOp, telegramTrigger, if.

## 💼 Business Use Case
Use it to automate research, content creation, or data analysis. It saves hours of manual work.

## ⚙️ How It Works
1.  **Trigger:** This workflow starts with a **Get interest name** node.
2. **Step 1: No Operation, do nothing (noOp)** - This step performs a key action in the workflow.
3. **Step 2: Get interest name (telegramTrigger)** - This step performs a key action in the workflow.
4. **Step 3: Check message contents (if)** - This step performs a key action in the workflow.
5. **Step 4: Extract message (code)** - This step performs a key action in the workflow.
6. **Step 5: Split Message (code)** - This step performs a key action in the workflow.
7. **Step 6: Connect to Graph API (facebookGraphApi)** - This step performs a key action in the workflow.
8. **Step 7: Split Interests into a Table (code)** - This step performs a key action in the workflow.
9. **Step 8: Get variables (code)** - This step performs a key action in the workflow.
10. **Step 9: Create a Spreadsheet (spreadsheetFile)** - This step performs a key action in the workflow.
11. **Step 10: Send the Spreadsheet file (telegram)** - This step performs a key action in the workflow.
12. **Step 11: Sticky Note (stickyNote)** - This step performs a key action in the workflow.

## 💡 AI-Powered Ideas for Improvement
### Explain
This n8n workflow automates the process of receiving interest requests via Telegram, extracting relevant data, querying Facebook's Graph API for related interests, and compiling the results into a CSV spreadsheet which is then sent back to the user via Telegram.

### Demonstrate
A business owner could use this workflow to gather insights on customer interests from Telegram messages. For example, a marketing consultant can automate the collection and analysis of target audience interests to tailor campaigns more effectively.

### Imitate
1. Set up a Telegram bot and link it to n8n.
2. Create a **Telegram Trigger** to receive messages.
3. Use an **If Node** to check if the message starts with a specific keyword (e.g., "#interest").
4. Extract and split the message with a **Code Node**.
5. Connect to Facebook's Graph API to search interests.
6. Save results in a **Spreadsheet Node** and send the file back via Telegram.

### Practice
Try modifying the workflow to accept different keywords or interests. Test it by sending various Telegram messages to see how the workflow responds and to ensure it captures the intended data correctly.

### WIIFM
Mastering this workflow allows you to offer valuable automation services, helping businesses efficiently gather and analyze customer interests, ultimately leading to better-targeted marketing strategies and increased customer engagement.

## 🔧 Setup Instructions
1. **Connect Credentials:** OpenAI, Google Sheets, Slack, and other nodes must be authenticated.
2. **Customize Core Logic:** Review "No Operation, do nothing" and "Sticky Note" for IDs, table names, and URLs.
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
