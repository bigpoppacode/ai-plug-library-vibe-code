# FunctionItem Zendesk Create Scheduled

## 🚀 What It Does
This workflow automates a process involving noOp, functionItem, if.

## 💼 Business Use Case
Use it to automate research, content creation, or data analysis. It saves hours of manual work.

## ⚙️ How It Works
1.  **Trigger:** This workflow starts with a **NoOp** node.
2. **Step 1: NoOp (noOp)** - This step performs a key action in the workflow.
3. **Step 2: Get last execution timestamp (functionItem)** - This step performs a key action in the workflow.
4. **Step 3: Set new last execution timestamp (functionItem)** - This step performs a key action in the workflow.
5. **Step 4: Pipedrive person Id found (if)** - This step performs a key action in the workflow.
6. **Step 5: NoOp1 (noOp)** - This step performs a key action in the workflow.
7. **Step 6: Get Zendesk comments for tickets (httpRequest)** - This step performs a key action in the workflow.
8. **Step 7: Add comments to tickets (merge)** - This step performs a key action in the workflow.
9. **Step 8: Add Pipedrive person Id to Zendesk tickets (merge)** - This step performs a key action in the workflow.
10. **Step 9: Get tickets updated after last execution (zendesk)** - This step performs a key action in the workflow.
11. **Step 10: Channel is email (if)** - This step performs a key action in the workflow.
12. **Step 11: Rename fields and keep only needed fields (set)** - This step performs a key action in the workflow.
13. **Step 12: Search persons by email (pipedrive)** - This step performs a key action in the workflow.
14. **Step 13: Remove duplicates to make search efficient (itemLists)** - This step performs a key action in the workflow.
15. **Step 14: Set search email (set)** - This step performs a key action in the workflow.
16. **Step 15: Process commenst per ticket (splitInBatches)** - This step performs a key action in the workflow.
17. **Step 16: New comment (if)** - This step performs a key action in the workflow.
18. **Step 17: Split comments to seperate items (itemLists)** - This step performs a key action in the workflow.
19. **Step 18: Add comment as a note in Pipedrive (pipedrive)** - This step performs a key action in the workflow.
20. **Step 19: NoOp2 (noOp)** - This step performs a key action in the workflow.
21. **Step 20: Every day at 09:00 (cron)** - This step performs a key action in the workflow.
22. **Step 21: Done processing (if)** - This step performs a key action in the workflow.

## 💡 AI-Powered Ideas for Improvement
### Explain
This n8n workflow automates the process of retrieving Zendesk ticket comments, matching them with Pipedrive contacts, and storing relevant information, ensuring efficient management of customer interactions across platforms.

### Demonstrate
A business owner can use this workflow to automatically log customer support interactions from Zendesk into their CRM (Pipedrive), ensuring a complete view of customer engagement without manual entry, thus saving time and reducing errors.

### Imitate
1. Import the workflow into n8n.
2. Configure the triggers (like a daily cron job).
3. Set up the connections to Zendesk and Pipedrive using your API credentials.
4. Adapt the logic nodes to fit your specific data structure and needs.
5. Test the workflow by creating sample tickets in Zendesk.

### Practice
Try creating a simplified version of this workflow where it only retrieves comments from Zendesk for one specific ticket, then logs that information to a Google Sheet. This will reinforce your understanding of data retrieval and storage.

### WIIFM
Mastering this workflow allows you to streamline customer support processes, enhance data accuracy across platforms, and offer valuable automation services to businesses, helping you build a profitable automation consultancy.

## 🔧 Setup Instructions
1. **Connect Credentials:** OpenAI, Google Sheets, Slack, and other nodes must be authenticated.
2. **Customize Core Logic:** Review "NoOp" and "Done processing" for IDs, table names, and URLs.
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
