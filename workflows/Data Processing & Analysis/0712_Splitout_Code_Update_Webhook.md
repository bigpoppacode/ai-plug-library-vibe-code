# Splitout Code Update Webhook

## 🚀 What It Does
This workflow automates a process involving httpRequest, code, scheduleTrigger.

## 💼 Business Use Case
Use it to automate research, content creation, or data analysis. It saves hours of manual work.

## ⚙️ How It Works
1.  **Trigger:** This workflow is designed to run on a schedule. Configure the interval in the Schedule node.
2. **Step 1: Fetch Manifest Digest (httpRequest)** - This step performs a key action in the workflow.
3. **Step 2: Remove Old Tags (httpRequest)** - This step performs a key action in the workflow.
4. **Step 3: Retrieve Image Tags (httpRequest)** - This step performs a key action in the workflow.
5. **Step 4: List Images (httpRequest)** - This step performs a key action in the workflow.
6. **Step 5: Extract Image Names (code)** - This step performs a key action in the workflow.
7. **Step 6: Identify Tags to Remove (code)** - This step performs a key action in the workflow.
8. **Step 7: Scheduled Trigger (scheduleTrigger)** - This step performs a key action in the workflow.
9. **Step 8: Send Notification Email (emailSend)** - This step performs a key action in the workflow.
10. **Step 9: Split Tags (splitOut)** - This step performs a key action in the workflow.
11. **Step 10: Filter Valid Tags (filter)** - This step performs a key action in the workflow.
12. **Step 11: Fetch Manifest Digest for Blob (httpRequest)** - This step performs a key action in the workflow.
13. **Step 12: Update Fields (set)** - This step performs a key action in the workflow.
14. **Step 13: Group Tags by Image (code)** - This step performs a key action in the workflow.
15. **Step 14: Sort by Creation Date (sort)** - This step performs a key action in the workflow.
16. **Step 15: Send Failure Notification Email (emailSend)** - This step performs a key action in the workflow.
17. **Step 16: Execute Garbage Collection (ssh)** - This step performs a key action in the workflow.

## 💡 AI-Powered Ideas for Improvement
### Explain
This n8n workflow automates the process of managing Docker image tags in a registry. It checks for old tags, removes them, and sends notifications about the changes, all scheduled to run at a specific time. This helps keep the registry clean and organized.

### Demonstrate
A developer managing a Docker registry can use this workflow to automatically clean up old image tags that are no longer used. This prevents the registry from becoming cluttered and ensures only relevant images are retained, saving storage and reducing confusion.

### Imitate
1. Import the workflow into n8n.
2. Set your Docker registry URL in the appropriate nodes.
3. Configure the email nodes with your email addresses.
4. Adjust the scheduled trigger to your preferred time.
5. Test the workflow to ensure it fetches and cleans up tags as expected.

### Practice
Try modifying the workflow to only notify you about tags that were removed, rather than all actions taken. This will help you understand how to customize notifications and refine workflow outputs.

### WIIFM
Mastering this workflow can help you automate and streamline Docker image management for clients, increasing your value as a consultant. It allows you to offer efficient solutions that save time and reduce costs, making your services more attractive.

## 🔧 Setup Instructions
1. **Connect Credentials:** OpenAI, Google Sheets, Slack, and other nodes must be authenticated.
2. **Customize Core Logic:** Review "Fetch Manifest Digest" and "Execute Garbage Collection" for IDs, table names, and URLs.
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
