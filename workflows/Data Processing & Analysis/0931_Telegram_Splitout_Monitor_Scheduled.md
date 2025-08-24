# Telegram Splitout Monitor Scheduled

## 🚀 What It Does
This workflow automates a process involving lmChatGoogleGemini, chainLlm, stickyNote.

## 💼 Business Use Case
Use it to automate research, content creation, or data analysis. It saves hours of manual work.

## ⚙️ How It Works
1.  **Trigger:** This workflow is designed to run on a schedule. Configure the interval in the Schedule node.
2. **Step 1: Google Gemini Chat Model (lmChatGoogleGemini)** - This step performs a key action in the workflow.
3. **Step 2: Basic LLM Chain (chainLlm)** - This step performs a key action in the workflow.
4. **Step 3: Sticky Note (stickyNote)** - This step performs a key action in the workflow.
5. **Step 4: Sticky Note1 (stickyNote)** - This step performs a key action in the workflow.
6. **Step 5: Schedule Trigger | for send chart report (scheduleTrigger)** - This step performs a key action in the workflow.
7. **Step 6: Get Recent Data from Notions (notion)** - This step performs a key action in the workflow.
8. **Step 7: Summarize Transaction Data (summarize)** - This step performs a key action in the workflow.
9. **Step 8: Generate Chart (quickChart)** - This step performs a key action in the workflow.
10. **Step 9: Send Chart Image to Group or Private Chat (telegram)** - This step performs a key action in the workflow.
11. **Step 10: Convert Data to JSON chart payload (code)** - This step performs a key action in the workflow.
12. **Step 11: Telegram Trigger | When recive photo (telegramTrigger)** - This step performs a key action in the workflow.
13. **Step 12: Get Image Info (editImage)** - This step performs a key action in the workflow.
14. **Step 13: Parse To your object | Table (outputParserStructured)** - This step performs a key action in the workflow.
15. **Step 14: Split Out | data transaction (splitOut)** - This step performs a key action in the workflow.
16. **Step 15: Sendback to chat and give summarize text (telegram)** - This step performs a key action in the workflow.
17. **Step 16: Record To Notion Database (notion)** - This step performs a key action in the workflow.
18. **Step 17: Sticky Note2 (stickyNote)** - This step performs a key action in the workflow.
19. **Step 18: Sticky Note3 (stickyNote)** - This step performs a key action in the workflow.
20. **Step 19: Sticky Note4 (stickyNote)** - This step performs a key action in the workflow.
21. **Step 20: Sticky Note5 (stickyNote)** - This step performs a key action in the workflow.
22. **Step 21: Sticky Note6 (stickyNote)** - This step performs a key action in the workflow.
23. **Step 22: Sticky Note7 (stickyNote)** - This step performs a key action in the workflow.
24. **Step 23: Sticky Note8 (stickyNote)** - This step performs a key action in the workflow.
25. **Step 24: Sticky Note9 (stickyNote)** - This step performs a key action in the workflow.
26. **Step 25: Sticky Note10 (stickyNote)** - This step performs a key action in the workflow.
27. **Step 26: Sticky Note11 (stickyNote)** - This step performs a key action in the workflow.
28. **Step 27: Sticky Note12 (stickyNote)** - This step performs a key action in the workflow.
29. **Step 28: Telegram (telegram)** - This step performs a key action in the workflow.

## 💡 AI-Powered Ideas for Improvement
### Explain
This n8n workflow automates the process of tracking financial transactions. It listens for invoice photos sent via Telegram, extracts data using an AI model, summarizes the transactions, generates a report chart, and stores the data in Notion.

### Demonstrate
A business owner can use this workflow to automatically analyze and report expenses from invoices sent through Telegram. It saves time on manual data entry and provides quick insights into spending trends, improving financial oversight.

### Imitate
1. Set up a Telegram bot to receive invoice photos.
2. Configure the Google Gemini model to extract data from images.
3. Connect Notion to store transaction data.
4. Schedule a trigger for weekly reports.
5. Generate and send a summary chart via Telegram.

### Practice
Try sending an invoice photo to your Telegram bot. Check if the workflow extracts the data correctly and saves it to Notion. Adjust parameters if necessary to improve accuracy.

### WIIFM
Mastering this workflow allows you to offer automation services that streamline financial tracking for clients, helping them save time and reduce errors. This capability can attract more customers and generate income through service fees.

## 🔧 Setup Instructions
1. **Connect Credentials:** OpenAI, Google Sheets, Slack, and other nodes must be authenticated.
2. **Customize Core Logic:** Review "Google Gemini Chat Model" and "Telegram" for IDs, table names, and URLs.
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
