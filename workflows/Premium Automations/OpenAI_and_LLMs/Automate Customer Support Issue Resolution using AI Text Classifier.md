# Automate Customer Support Issue Resolution Using AI Text Classifier

## 🚀 What It Does
This workflow automates a process involving lmChatOpenAi, scheduleTrigger, jira.

## 💼 Business Use Case
Use it to automate research, content creation, or data analysis. It saves hours of manual work.

## ⚙️ How It Works
1.  **Trigger:** This workflow is designed to run on a schedule. Configure the interval in the Schedule node.
2. **Step 1: OpenAI Chat Model (lmChatOpenAi)** - This step performs a key action in the workflow.
3. **Step 2: OpenAI Chat Model1 (lmChatOpenAi)** - This step performs a key action in the workflow.
4. **Step 3: OpenAI Chat Model3 (lmChatOpenAi)** - This step performs a key action in the workflow.
5. **Step 4: OpenAI Chat Model4 (lmChatOpenAi)** - This step performs a key action in the workflow.
6. **Step 5: Schedule Trigger (scheduleTrigger)** - This step performs a key action in the workflow.
7. **Step 6: Get Issue Comments (jira)** - This step performs a key action in the workflow.
8. **Step 7: Close Issue (jira)** - This step performs a key action in the workflow.
9. **Step 8: Send Reminder (jira)** - This step performs a key action in the workflow.
10. **Step 9: Join Comments (aggregate)** - This step performs a key action in the workflow.
11. **Step 10: Add Autoclose Message (jira)** - This step performs a key action in the workflow.
12. **Step 11: Ask For Feedback Message (jira)** - This step performs a key action in the workflow.
13. **Step 12: Simplify Thread For AI (set)** - This step performs a key action in the workflow.
14. **Step 13: Solution Found? (if)** - This step performs a key action in the workflow.
15. **Step 14: Reply to Issue (jira)** - This step performs a key action in the workflow.
16. **Step 15: Last Message is Not Bot (if)** - This step performs a key action in the workflow.
17. **Step 16: Structured Output Parser (outputParserStructured)** - This step performs a key action in the workflow.
18. **Step 17: Get Issue Metadata (set)** - This step performs a key action in the workflow.
19. **Step 18: Notify Slack Channel (slack)** - This step performs a key action in the workflow.
20. **Step 19: Close Issue2 (jira)** - This step performs a key action in the workflow.
21. **Step 20: Get List of Unresolved Long Lived Issues (jira)** - This step performs a key action in the workflow.
22. **Step 21: Sticky Note1 (stickyNote)** - This step performs a key action in the workflow.
23. **Step 22: Execute Workflow (executeWorkflow)** - This step performs a key action in the workflow.
24. **Step 23: Execute Workflow Trigger (executeWorkflowTrigger)** - This step performs a key action in the workflow.
25. **Step 24: Sticky Note2 (stickyNote)** - This step performs a key action in the workflow.
26. **Step 25: Sticky Note3 (stickyNote)** - This step performs a key action in the workflow.
27. **Step 26: Sticky Note4 (stickyNote)** - This step performs a key action in the workflow.
28. **Step 27: Customer Satisfaction Agent (sentimentAnalysis)** - This step performs a key action in the workflow.
29. **Step 28: Sticky Note5 (stickyNote)** - This step performs a key action in the workflow.
30. **Step 29: KnowledgeBase Agent (agent)** - This step performs a key action in the workflow.
31. **Step 30: Sticky Note6 (stickyNote)** - This step performs a key action in the workflow.
32. **Step 31: Issue Reminder Agent (chainLlm)** - This step performs a key action in the workflow.
33. **Step 32: Sticky Note (stickyNote)** - This step performs a key action in the workflow.
34. **Step 33: Find Simlar Issues (jiraTool)** - This step performs a key action in the workflow.
35. **Step 34: Query KnowledgeBase (notionTool)** - This step performs a key action in the workflow.
36. **Step 35: Report Unhappy Resolution (slack)** - This step performs a key action in the workflow.
37. **Step 36: Classify Current Issue State (textClassifier)** - This step performs a key action in the workflow.

## 💡 AI-Powered Ideas for Improvement
### Explain
This n8n workflow automates the management of Jira issues. It retrieves comments, determines if the issue is resolved, and sends reminders or feedback requests, using AI to analyze sentiment and engage users effectively.

### Demonstrate
A business owner could use this workflow to streamline customer support by automating responses to unresolved Jira tickets, ensuring timely follow-ups and feedback, which leads to improved customer satisfaction and operational efficiency.

### Imitate
1. Create a new workflow in n8n.
2. Add a Schedule Trigger to check unresolved issues daily.
3. Use the Jira nodes to get comments and issue metadata.
4. Implement AI nodes to analyze sentiment and classify issue status.
5. Set up notifications (via Slack or email) for unresolved issues or feedback requests.

### Practice
Try modifying the workflow to include a new feature: automatically escalate unresolved issues that have been open for more than 14 days. Test it with sample data to see how it manages escalations.

### WIIFM
Mastering this workflow can significantly enhance your automation skills, allowing you to offer high-value services to clients, improve their operational efficiency, and potentially generate recurring income by managing their support processes effectively.

## 🔧 Setup Instructions
1. **Connect Credentials:** OpenAI, Google Sheets, Slack, and other nodes must be authenticated.
2. **Customize Core Logic:** Review "OpenAI Chat Model" and "Classify Current Issue State" for IDs, table names, and URLs.
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
