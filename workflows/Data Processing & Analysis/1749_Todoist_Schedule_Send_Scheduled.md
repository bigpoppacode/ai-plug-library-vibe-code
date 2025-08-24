# Todoist Schedule Send Scheduled

## 🚀 What It Does
This workflow automates a process involving manualTrigger, gmail, if.

## 💼 Business Use Case
Use it to automate research, content creation, or data analysis. It saves hours of manual work.

## ⚙️ How It Works
1.  **Trigger:** This workflow starts with a **When clicking ‘Test workflow’** node.
2. **Step 1: When clicking ‘Test workflow’ (manualTrigger)** - This step performs a key action in the workflow.
3. **Step 2: Mark As Read (gmail)** - This step performs a key action in the workflow.
4. **Step 3: Star (gmail)** - This step performs a key action in the workflow.
5. **Step 4: Get Starred From Inbox (gmail)** - This step performs a key action in the workflow.
6. **Step 5: Get Unread From Inbox (gmail)** - This step performs a key action in the workflow.
7. **Step 6: If Task Not Exist (if)** - This step performs a key action in the workflow.
8. **Step 7: OpenAI Chat Model (lmChatOpenAi)** - This step performs a key action in the workflow.
9. **Step 8: Structure Output Todoist Ready (outputParserStructured)** - This step performs a key action in the workflow.
10. **Step 9: If AI responded properly (if)** - This step performs a key action in the workflow.
11. **Step 10: Create Todoist Task (todoist)** - This step performs a key action in the workflow.
12. **Step 11: Get Full Message (gmail)** - This step performs a key action in the workflow.
13. **Step 12: Summarize Message (agent)** - This step performs a key action in the workflow.
14. **Step 13: Enrich Emails With Tasks (merge)** - This step performs a key action in the workflow.
15. **Step 14: Enrich Tasks with Emails (merge)** - This step performs a key action in the workflow.
16. **Step 15: If Email Unstarred (Not Exist) (if)** - This step performs a key action in the workflow.
17. **Step 16: Close Task (todoist)** - This step performs a key action in the workflow.
18. **Step 17: Email Trigger (IMAP) (emailReadImap)** - This step performs a key action in the workflow.
19. **Step 18: Schedule Trigger (scheduleTrigger)** - This step performs a key action in the workflow.
20. **Step 19: No Operation, do nothing (noOp)** - This step performs a key action in the workflow.
21. **Step 20: Sticky Note (stickyNote)** - This step performs a key action in the workflow.
22. **Step 21: Sticky Note1 (stickyNote)** - This step performs a key action in the workflow.
23. **Step 22: Merge Starred and Unread Messages (merge)** - This step performs a key action in the workflow.
24. **Step 23: Get Open Tasks (todoist)** - This step performs a key action in the workflow.
25. **Step 24: Sticky Note2 (stickyNote)** - This step performs a key action in the workflow.
26. **Step 25: Sticky Note3 (stickyNote)** - This step performs a key action in the workflow.

## 💡 AI-Powered Ideas for Improvement
### Explain
This n8n workflow automates email management by transforming unread or starred emails into tasks in Todoist. It reads emails, summarizes their content using AI, and creates tasks with actionable insights, helping users stay organized.

### Demonstrate
A consultant could use this workflow to streamline their task management. When they receive important emails, the workflow automatically converts them into actionable tasks in Todoist, ensuring no critical tasks are overlooked.

### Imitate
1. Import the workflow into n8n.
2. Set up Gmail and Todoist connections.
3. Modify the email filters to match your needs.
4. Customize the AI summarization prompts.
5. Test the workflow by sending a few emails to see tasks generated.

### Practice
Try running the workflow with test emails containing different subjects and content. Observe how the AI summarizes them and how tasks are created in Todoist. Adjust the AI prompts based on the results for better output.

### WIIFM
Mastering this workflow allows you to automate email management, saving time and increasing productivity. As a consultant or business owner, you can offer this service to clients, enhancing their workflow efficiency and potentially increasing your income through automation services.

## 🔧 Setup Instructions
1. **Connect Credentials:** OpenAI, Google Sheets, Slack, and other nodes must be authenticated.
2. **Customize Core Logic:** Review "When clicking ‘Test workflow’" and "Sticky Note3" for IDs, table names, and URLs.
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
