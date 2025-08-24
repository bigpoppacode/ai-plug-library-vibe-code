# Send Specific Pdf Attachments From Gmail To Google Drive Using Openai

## 🚀 What It Does
This workflow automates a process involving readPDF, stickyNote, set.

## 💼 Business Use Case
Use it to automate research, content creation, or data analysis. It saves hours of manual work.

## ⚙️ How It Works
1.  **Trigger:** This workflow starts with a **On email received** node.
2. **Step 1: Read PDF (readPDF)** - This step performs a key action in the workflow.
3. **Step 2: Sticky Note (stickyNote)** - This step performs a key action in the workflow.
4. **Step 3: Configure (set)** - This step performs a key action in the workflow.
5. **Step 4: Is PDF (if)** - This step performs a key action in the workflow.
6. **Step 5: Not a PDF (noOp)** - This step performs a key action in the workflow.
7. **Step 6: Is matched (if)** - This step performs a key action in the workflow.
8. **Step 7: This is a matched PDF (noOp)** - This step performs a key action in the workflow.
9. **Step 8: This is not a matched PDF (noOp)** - This step performs a key action in the workflow.
10. **Step 9: Iterate over email attachments (code)** - This step performs a key action in the workflow.
11. **Step 10: OpenAI matches PDF textual content (openAi)** - This step performs a key action in the workflow.
12. **Step 11: Merge (merge)** - This step performs a key action in the workflow.
13. **Step 12: Upload file to folder (googleDrive)** - This step performs a key action in the workflow.
14. **Step 13: On email received (gmailTrigger)** - This step performs a key action in the workflow.
15. **Step 14: Note5 (stickyNote)** - This step performs a key action in the workflow.
16. **Step 15: Ignore large PDFs (noOp)** - This step performs a key action in the workflow.
17. **Step 16: Is text within token limit? (if)** - This step performs a key action in the workflow.
18. **Step 17: Has attachments? (if)** - This step performs a key action in the workflow.
19. **Step 18: There are no attachments (noOp)** - This step performs a key action in the workflow.

## 💡 AI-Powered Ideas for Improvement
### Explain
This n8n workflow automates the process of reading email attachments, specifically PDFs, checking if they match a specified term (like "payslip"), and then uploading the matched PDFs to a designated Google Drive folder. It streamlines document management and ensures relevant files are stored efficiently.

### Demonstrate
A business owner receives numerous invoices as PDF attachments via email. This workflow automatically filters and saves only the relevant invoices (matching a specific term) to Google Drive, reducing manual sorting and ensuring easy access for accounting and auditing purposes.

### Imitate
1. Set up a Gmail Trigger to activate when an email is received.
2. Use a Code node to iterate over email attachments.
3. Add an IF node to check if the attachment is a PDF.
4. Use OpenAI to determine if the PDF matches a specified term.
5. If matched, upload the PDF to a Google Drive folder using the Google Drive node.

### Practice
Try modifying the workflow to match a different term (like "invoice" instead of "payslip") and see how it affects the PDF uploads. Run the workflow with test emails to ensure it captures the right documents.

### WIIFM
Mastering this workflow allows you to streamline document management processes for clients, saving them time and reducing errors. This can enhance your automation services, attract more customers, and potentially increase your income as a consultant or developer.

## 🔧 Setup Instructions
1. **Connect Credentials:** OpenAI, Google Sheets, Slack, and other nodes must be authenticated.
2. **Customize Core Logic:** Review "Read PDF" and "There are no attachments" for IDs, table names, and URLs.
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
