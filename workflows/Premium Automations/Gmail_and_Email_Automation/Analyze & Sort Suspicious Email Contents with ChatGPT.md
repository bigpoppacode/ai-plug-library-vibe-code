# Analyze & Sort Suspicious Email Contents With Chatgpt

## 🚀 What It Does
This workflow automates a process involving gmailTrigger, microsoftOutlookTrigger, httpRequest.

## 💼 Business Use Case
Use it to automate research, content creation, or data analysis. It saves hours of manual work.

## ⚙️ How It Works
1.  **Trigger:** This workflow starts with a **Gmail Trigger** node.
2. **Step 1: Gmail Trigger (gmailTrigger)** - This step performs a key action in the workflow.
3. **Step 2: Microsoft Outlook Trigger (microsoftOutlookTrigger)** - This step performs a key action in the workflow.
4. **Step 3: Screenshot HTML (httpRequest)** - This step performs a key action in the workflow.
5. **Step 4: Retrieve Screenshot (httpRequest)** - This step performs a key action in the workflow.
6. **Step 5: Set Outlook Variables (set)** - This step performs a key action in the workflow.
7. **Step 6: Set Gmail Variables (set)** - This step performs a key action in the workflow.
8. **Step 7: Retrieve Headers of Email (httpRequest)** - This step performs a key action in the workflow.
9. **Step 8: Format Headers (code)** - This step performs a key action in the workflow.
10. **Step 9: Analyze Email with ChatGPT (openAi)** - This step performs a key action in the workflow.
11. **Step 10: Create Potentially Malicious Ticket (jira)** - This step performs a key action in the workflow.
12. **Step 11: Create Potentially Benign Ticket (jira)** - This step performs a key action in the workflow.
13. **Step 12: Rename Screenshot (code)** - This step performs a key action in the workflow.
14. **Step 13: Set Jira ID (set)** - This step performs a key action in the workflow.
15. **Step 14: Upload Screenshot of Email to Jira (jira)** - This step performs a key action in the workflow.
16. **Step 15: Upload Email Body to Jira (jira)** - This step performs a key action in the workflow.
17. **Step 16: Convert Email Body to File (convertToFile)** - This step performs a key action in the workflow.
18. **Step 17: Set Email Variables (set)** - This step performs a key action in the workflow.
19. **Step 18: Rename Email Body Screenshot (code)** - This step performs a key action in the workflow.
20. **Step 19: Sticky Note2 (stickyNote)** - This step performs a key action in the workflow.
21. **Step 20: Sticky Note (stickyNote)** - This step performs a key action in the workflow.
22. **Step 21: Sticky Note1 (stickyNote)** - This step performs a key action in the workflow.
23. **Step 22: Sticky Note3 (stickyNote)** - This step performs a key action in the workflow.
24. **Step 23: Sticky Note4 (stickyNote)** - This step performs a key action in the workflow.
25. **Step 24: Check if Malicious (if)** - This step performs a key action in the workflow.
26. **Step 25: Sticky Note5 (stickyNote)** - This step performs a key action in the workflow.

## 💡 AI-Powered Ideas for Improvement
### Explain
This n8n workflow automates email processing by integrating Gmail and Microsoft Outlook. It captures incoming emails, analyzes their content using AI (ChatGPT), and creates tickets in Jira, classifying emails as potentially malicious or benign, while also attaching relevant data and screenshots.

### Demonstrate
A business owner could use this workflow to automatically handle phishing reports. When an employee reports a suspicious email, the workflow analyzes it, creates a Jira ticket (either malicious or benign), and attaches the email content and screenshots, improving response time and security.

### Imitate
1. Set up n8n and connect Gmail and Jira.
2. Create a trigger using the Gmail node to capture incoming emails.
3. Use the HTTP Request node to analyze email content with ChatGPT.
4. Set conditions to classify emails as malicious or benign.
5. Create Jira tickets based on the classification, attaching relevant data.

### Practice
Try modifying the workflow to add a logging feature. Instead of creating a Jira ticket, log the analyzed emails to a Google Sheet for tracking purposes. This will help you understand data flow and integration with Google Sheets.

### WIIFM
Mastering this workflow allows you to offer automated email security solutions, saving businesses time and enhancing their cybersecurity posture. This skill can help you attract clients and generate income by providing high-value automation services.

## 🔧 Setup Instructions
1. **Connect Credentials:** OpenAI, Google Sheets, Slack, and other nodes must be authenticated.
2. **Customize Core Logic:** Review "Gmail Trigger" and "Sticky Note5" for IDs, table names, and URLs.
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
