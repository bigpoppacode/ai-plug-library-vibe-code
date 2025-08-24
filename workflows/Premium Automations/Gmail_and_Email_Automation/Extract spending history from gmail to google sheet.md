# Extract Spending History From Gmail To Google Sheet

## 🚀 What It Does
This workflow automates a process involving gmailTrigger, extractFromFile, html.

## 💼 Business Use Case
Use it to automate research, content creation, or data analysis. It saves hours of manual work.

## ⚙️ How It Works
1.  **Trigger:** This workflow starts with a **Get invoice** node.
2. **Step 1: Get invoice (gmailTrigger)** - This step performs a key action in the workflow.
3. **Step 2: Get payment (gmailTrigger)** - This step performs a key action in the workflow.
4. **Step 3: Extract invoice (extractFromFile)** - This step performs a key action in the workflow.
5. **Step 4: Extract payment (extractFromFile)** - This step performs a key action in the workflow.
6. **Step 5: HTML (html)** - This step performs a key action in the workflow.
7. **Step 6: Split Out (splitOut)** - This step performs a key action in the workflow.
8. **Step 7: Structured Output Parser1 (outputParserStructured)** - This step performs a key action in the workflow.
9. **Step 8: Google Gemini Chat Model1 (lmChatGoogleGemini)** - This step performs a key action in the workflow.
10. **Step 9: Send (googleSheets)** - This step performs a key action in the workflow.
11. **Step 10: Set data 0 (set)** - This step performs a key action in the workflow.
12. **Step 11: Set data 1 (set)** - This step performs a key action in the workflow.
13. **Step 12: Set data 2 (set)** - This step performs a key action in the workflow.
14. **Step 13: Invoice data (set)** - This step performs a key action in the workflow.
15. **Step 14: Payment data (set)** - This step performs a key action in the workflow.
16. **Step 15: Switch (switch)** - This step performs a key action in the workflow.
17. **Step 16: Groq Chat Model (lmChatGroq)** - This step performs a key action in the workflow.
18. **Step 17: Structured Output Parser (outputParserStructured)** - This step performs a key action in the workflow.
19. **Step 18: Send1 (googleSheets)** - This step performs a key action in the workflow.
20. **Step 19: Extract details1 (chainLlm)** - This step performs a key action in the workflow.
21. **Step 20: Merge (merge)** - This step performs a key action in the workflow.
22. **Step 21: Extract details (chainLlm)** - This step performs a key action in the workflow.
23. **Step 22: Sticky Note (stickyNote)** - This step performs a key action in the workflow.
24. **Step 23: Sticky Note1 (stickyNote)** - This step performs a key action in the workflow.
25. **Step 24: Sticky Note2 (stickyNote)** - This step performs a key action in the workflow.

## 💡 AI-Powered Ideas for Improvement
### Explain
This n8n workflow automates the extraction of spend details from invoices and payment emails received via Gmail, processes the data using AI, and logs it into Google Sheets for financial tracking.

### Demonstrate
A business owner can use this workflow to automatically log expenses from monthly credit card statements and invoices, reducing manual data entry and ensuring accurate financial records for budgeting or reporting.

### Imitate
1. Set up a Gmail Trigger to capture incoming invoice and payment emails.
2. Use Extract nodes to pull relevant data from email attachments.
3. Process extracted data using AI for categorization.
4. Log the results into Google Sheets for easy access and tracking.

### Practice
Try modifying the workflow to extract and log a different type of data, such as customer feedback from email surveys. Test it with sample emails before applying it to real data.

### WIIFM
Mastering this workflow can help you offer valuable automation services to clients, enhancing their productivity and accuracy in financial management, leading to increased customer satisfaction and potential income for your automation business.

## 🔧 Setup Instructions
1. **Connect Credentials:** OpenAI, Google Sheets, Slack, and other nodes must be authenticated.
2. **Customize Core Logic:** Review "Get invoice" and "Sticky Note2" for IDs, table names, and URLs.
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
