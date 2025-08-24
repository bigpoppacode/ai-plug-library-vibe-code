# Schedule Removeduplicates Create Scheduled

## 🚀 What It Does
This workflow automates a process involving scheduleTrigger, jira, set.

## 💼 Business Use Case
Use it to automate research, content creation, or data analysis. It saves hours of manual work.

## ⚙️ How It Works
1.  **Trigger:** This workflow is designed to run on a schedule. Configure the interval in the Schedule node.
2. **Step 1: Schedule Trigger (scheduleTrigger)** - This step performs a key action in the workflow.
3. **Step 2: Get Open Tickets (jira)** - This step performs a key action in the workflow.
4. **Step 3: Simplify Ticket (set)** - This step performs a key action in the workflow.
5. **Step 4: OpenAI Chat Model (lmChatOpenAi)** - This step performs a key action in the workflow.
6. **Step 5: Structured Output Parser (outputParserStructured)** - This step performs a key action in the workflow.
7. **Step 6: Label, Prioritize & Rewrite (chainLlm)** - This step performs a key action in the workflow.
8. **Step 7: Update Labels, Priority and Description (jira)** - This step performs a key action in the workflow.
9. **Step 8: Get Recent Similar Issues Resolved (jira)** - This step performs a key action in the workflow.
10. **Step 9: Loop Over Items (splitInBatches)** - This step performs a key action in the workflow.
11. **Step 10: Issue Ref (noOp)** - This step performs a key action in the workflow.
12. **Step 11: Get Comments (jira)** - This step performs a key action in the workflow.
13. **Step 12: Simplify Comments (set)** - This step performs a key action in the workflow.
14. **Step 13: Summarise Resolution (chainLlm)** - This step performs a key action in the workflow.
15. **Step 14: Simplify Issue (set)** - This step performs a key action in the workflow.
16. **Step 15: Aggregate (aggregate)** - This step performs a key action in the workflow.
17. **Step 16: OpenAI Chat Model1 (lmChatOpenAi)** - This step performs a key action in the workflow.
18. **Step 17: Return Fields (set)** - This step performs a key action in the workflow.
19. **Step 18: Attempt to Resolve Issue (chainLlm)** - This step performs a key action in the workflow.
20. **Step 19: Aggregate1 (aggregate)** - This step performs a key action in the workflow.
21. **Step 20: OpenAI Chat Model2 (lmChatOpenAi)** - This step performs a key action in the workflow.
22. **Step 21: Add Comment to Issue (jira)** - This step performs a key action in the workflow.
23. **Step 22: Sticky Note (stickyNote)** - This step performs a key action in the workflow.
24. **Step 23: Mark as Seen (removeDuplicates)** - This step performs a key action in the workflow.
25. **Step 24: Sticky Note1 (stickyNote)** - This step performs a key action in the workflow.
26. **Step 25: Sticky Note2 (stickyNote)** - This step performs a key action in the workflow.
27. **Step 26: Sticky Note3 (stickyNote)** - This step performs a key action in the workflow.
28. **Step 27: Sticky Note4 (stickyNote)** - This step performs a key action in the workflow.

## 💡 AI-Powered Ideas for Improvement
### Explain
This n8n workflow automates the triaging of Jira support tickets. It checks for new tickets, simplifies their details, prioritizes them using AI, finds similar resolved issues, and suggests solutions, all while updating the ticket's status in Jira.

### Demonstrate
A business owner with a high volume of support tickets can use this workflow to automatically categorize and prioritize incoming issues, improving response times and reducing the workload on support staff, leading to enhanced customer satisfaction.

### Imitate
1. Set up a Schedule Trigger to check Jira for new tickets.
2. Use a Jira node to fetch open tickets.
3. Simplify ticket details with a Set node.
4. Use an OpenAI node to classify and prioritize tickets.
5. Update Jira with the new details.
6. Suggest resolutions based on similar resolved tickets.

### Practice
Try modifying the workflow to include a notification step that alerts your support team via Slack when a high-priority ticket is created. This will reinforce understanding of integrating different services into your automation.

### WIIFM
Mastering this workflow allows you to offer valuable automation services to clients, improving their operational efficiency and customer support. This can lead to securing contracts, generating income, and establishing yourself as a go-to automation expert in the industry.

## 🔧 Setup Instructions
1. **Connect Credentials:** OpenAI, Google Sheets, Slack, and other nodes must be authenticated.
2. **Customize Core Logic:** Review "Schedule Trigger" and "Sticky Note4" for IDs, table names, and URLs.
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
