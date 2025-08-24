# Code Filter Create Scheduled

## 🚀 What It Does
This workflow automates a process involving googleSheets, set, code.

## 💼 Business Use Case
Use it to automate research, content creation, or data analysis. It saves hours of manual work.

## ⚙️ How It Works
1.  **Trigger:** This workflow starts with a **Execute Workflow Trigger** node.
2. **Step 1: Update last contacted time (googleSheets)** - This step performs a key action in the workflow.
3. **Step 2: Set message template (set)** - This step performs a key action in the workflow.
4. **Step 3: Email sequence (set)** - This step performs a key action in the workflow.
5. **Step 4: Fill message placeholders (code)** - This step performs a key action in the workflow.
6. **Step 5: Compose message (set)** - This step performs a key action in the workflow.
7. **Step 6: Get previous message threads (gmail)** - This step performs a key action in the workflow.
8. **Step 7: Get thread details (gmail)** - This step performs a key action in the workflow.
9. **Step 8: Classify threads (code)** - This step performs a key action in the workflow.
10. **Step 9: Next message due? (filter)** - This step performs a key action in the workflow.
11. **Step 10: Sticky Note2 (stickyNote)** - This step performs a key action in the workflow.
12. **Step 11: Execute Workflow Trigger (executeWorkflowTrigger)** - This step performs a key action in the workflow.
13. **Step 12: Replying? (if)** - This step performs a key action in the workflow.
14. **Step 13: Send new message (gmail)** - This step performs a key action in the workflow.
15. **Step 14: Call message send sub-workflow (executeWorkflow)** - This step performs a key action in the workflow.
16. **Step 15: Prepare reply params (set)** - This step performs a key action in the workflow.
17. **Step 16: Prepare first message params (set)** - This step performs a key action in the workflow.
18. **Step 17: Sticky Note4 (stickyNote)** - This step performs a key action in the workflow.
19. **Step 18: Call message send sub-workflow1 (executeWorkflow)** - This step performs a key action in the workflow.
20. **Step 19: To email? (filter)** - This step performs a key action in the workflow.
21. **Step 20: Decode messages (code)** - This step performs a key action in the workflow.
22. **Step 21: Decode placeholder values (code)** - This step performs a key action in the workflow.
23. **Step 22: Package placeholder values (code)** - This step performs a key action in the workflow.
24. **Step 23: Settings (set)** - This step performs a key action in the workflow.
25. **Step 24: Reply to message (gmail)** - This step performs a key action in the workflow.
26. **Step 25: Get emails (googleSheets)** - This step performs a key action in the workflow.
27. **Step 26: Sticky Note5 (stickyNote)** - This step performs a key action in the workflow.
28. **Step 27: Sticky Note6 (stickyNote)** - This step performs a key action in the workflow.
29. **Step 28: Sticky Note7 (stickyNote)** - This step performs a key action in the workflow.
30. **Step 29: Every hour (scheduleTrigger)** - This step performs a key action in the workflow.
31. **Step 30: Sticky Note3 (stickyNote)** - This step performs a key action in the workflow.
32. **Step 31: Don't email on weekends (filter)** - This step performs a key action in the workflow.
33. **Step 32: Sticky Note8 (stickyNote)** - This step performs a key action in the workflow.

## 💡 AI-Powered Ideas for Improvement
### Explain
This n8n workflow automates email follow-ups. It updates the last contact time in Google Sheets, prepares personalized email messages, checks for replies, and sends follow-up emails based on a predefined sequence, ensuring timely communication without manual effort.

### Demonstrate
A business owner can use this workflow to automate follow-ups with leads who haven't responded to initial emails. This saves time, increases response rates, and ensures no potential client is overlooked, enhancing sales efficiency.

### Imitate
1. Set up a Google Sheet with contact details.
2. Create an n8n workflow with a schedule trigger to run every hour.
3. Add nodes to check for emails, prepare messages, and send follow-ups.
4. Customize email templates and sequences based on your business needs.
5. Test the workflow using sample data before going live.

### Practice
Clone the provided Google Sheet, adjust the workflow settings in n8n, and run a test by sending emails to yourself. Monitor the workflow’s execution to ensure emails are sent correctly and check for any errors.

### WIIFM
Mastering this workflow can help you provide value to clients by automating their communication processes, allowing them to focus on closing deals rather than managing follow-ups. This skill can lead to more business opportunities and increased income as an automation consultant.

## 🔧 Setup Instructions
1. **Connect Credentials:** OpenAI, Google Sheets, Slack, and other nodes must be authenticated.
2. **Customize Core Logic:** Review "Update last contacted time" and "Sticky Note8" for IDs, table names, and URLs.
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
