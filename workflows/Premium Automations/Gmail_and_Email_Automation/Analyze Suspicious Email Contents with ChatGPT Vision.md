# Analyze Suspicious Email Contents With Chatgpt Vision

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
10. **Step 9: Set Email Variables (set)** - This step performs a key action in the workflow.
11. **Step 10: ChatGPT Analysis (openAi)** - This step performs a key action in the workflow.
12. **Step 11: Create Jira Ticket (jira)** - This step performs a key action in the workflow.
13. **Step 12: Rename Screenshot (code)** - This step performs a key action in the workflow.
14. **Step 13: Upload Screenshot of Email to Jira (jira)** - This step performs a key action in the workflow.
15. **Step 14: Sticky Note (stickyNote)** - This step performs a key action in the workflow.
16. **Step 15: Sticky Note1 (stickyNote)** - This step performs a key action in the workflow.
17. **Step 16: Sticky Note2 (stickyNote)** - This step performs a key action in the workflow.
18. **Step 17: Sticky Note3 (stickyNote)** - This step performs a key action in the workflow.
19. **Step 18: Sticky Note4 (stickyNote)** - This step performs a key action in the workflow.

## 💡 AI-Powered Ideas for Improvement
### Explain
This n8n workflow automates the process of monitoring emails from Gmail and Outlook, analyzing them for potential phishing attempts using AI, and creating Jira tickets to report them, ensuring security and efficiency in email management.

### Demonstrate
A business owner could use this workflow to automatically identify and report phishing emails, saving time and reducing the risk of human error in email security, thereby protecting sensitive company information.

### Imitate
1. Set up n8n and create a new workflow.
2. Add a Gmail Trigger to monitor incoming emails.
3. Add a Microsoft Outlook Trigger for additional email sources.
4. Configure HTTP requests to capture email content and generate screenshots.
5. Use ChatGPT to analyze emails for phishing indicators.
6. Create a Jira ticket for flagged emails with relevant details.
7. Test and refine the workflow based on results.

### Practice
Try modifying the workflow by adding an additional action that sends a notification (like a Slack message) whenever a phishing email is reported, reinforcing your understanding of how each step interacts.

### WIIFM
Mastering this workflow allows you to offer automated email security solutions to businesses, enhancing their safety protocols and potentially leading to new clients or income streams as a service provider in AI automation.

## 🔧 Setup Instructions
1. **Connect Credentials:** OpenAI, Google Sheets, Slack, and other nodes must be authenticated.
2. **Customize Core Logic:** Review "Gmail Trigger" and "Sticky Note4" for IDs, table names, and URLs.
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
