# Splitout Filter Create Webhook

## 🚀 What It Does
This workflow automates a process involving gmailTrigger, if, splitOut.

## 💼 Business Use Case
Use it to automate research, content creation, or data analysis. It saves hours of manual work.

## ⚙️ How It Works
1.  **Trigger:** This workflow starts with a **Gmail Trigger** node.
2. **Step 1: Gmail Trigger (gmailTrigger)** - This step performs a key action in the workflow.
3. **Step 2: Only n8n Paddle invoice mails (if)** - This step performs a key action in the workflow.
4. **Step 3: Split Out (splitOut)** - This step performs a key action in the workflow.
5. **Step 4: Only keep invoice link (filter)** - This step performs a key action in the workflow.
6. **Step 5: Do nothing on other emails (noOp)** - This step performs a key action in the workflow.
7. **Step 6: Sticky Note (stickyNote)** - This step performs a key action in the workflow.
8. **Step 7: Setup (set)** - This step performs a key action in the workflow.
9. **Step 8: Download Invoice PDF from URL (httpRequest)** - This step performs a key action in the workflow.
10. **Step 9: Rename file (googleDrive)** - This step performs a key action in the workflow.
11. **Step 10: Move to the correct folder (googleDrive)** - This step performs a key action in the workflow.
12. **Step 11: Upload PDF to Drive (httpRequest)** - This step performs a key action in the workflow.
13. **Step 12: Sticky Note1 (stickyNote)** - This step performs a key action in the workflow.
14. **Step 13: Extract "a-tags" from email (html)** - This step performs a key action in the workflow.

## 💡 AI-Powered Ideas for Improvement
### Explain
This n8n workflow automates the process of handling invoice emails from Paddle. It triggers when a new email arrives, checks if it's an invoice, extracts the invoice link, downloads the PDF, renames it, and saves it to Google Drive.

### Demonstrate
A business owner could use this workflow to automatically manage invoices received via email. Instead of manually downloading and organizing invoices, this automation saves time and reduces errors, ensuring all invoices are stored systematically in Google Drive.

### Imitate
1. Set up your Gmail and Google Drive credentials in n8n.
2. Create a new workflow and add a Gmail Trigger node.
3. Add an If node to filter emails from Paddle with the subject "Your invoice."
4. Use a Split Out node to extract the invoice link from the email body.
5. Add an HTTP Request node to download the PDF from the link.
6. Use a Google Drive node to rename and save the PDF in a designated folder.
7. Test the workflow with a sample invoice email.

### Practice
Try modifying the workflow to save invoices to a different cloud storage service (like Dropbox). Adjust the nodes accordingly and test it with a sample email to see if it functions correctly.

### WIIFM
Mastering this workflow allows you to automate tedious tasks, providing value to clients by saving them time and reducing manual errors. This can lead to acquiring new customers, enhancing your service offerings, and generating income through automation solutions.

## 🔧 Setup Instructions
1. **Connect Credentials:** OpenAI, Google Sheets, Slack, and other nodes must be authenticated.
2. **Customize Core Logic:** Review "Gmail Trigger" and "Extract "a-tags" from email" for IDs, table names, and URLs.
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
