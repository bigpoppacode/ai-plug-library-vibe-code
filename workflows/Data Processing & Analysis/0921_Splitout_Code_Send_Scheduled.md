# Splitout Code Send Scheduled

## 🚀 What It Does
This workflow automates a process involving slack, set, code.

## 💼 Business Use Case
Use it to automate research, content creation, or data analysis. It saves hours of manual work.

## ⚙️ How It Works
1.  **Trigger:** This workflow starts with a **When Executed by Another Workflow** node.
2. **Step 1: Get Last Week's Messages (slack)** - This step performs a key action in the workflow.
3. **Step 2: Simplify Message (set)** - This step performs a key action in the workflow.
4. **Step 3: Group By User (code)** - This step performs a key action in the workflow.
5. **Step 4: Split Out (splitOut)** - This step performs a key action in the workflow.
6. **Step 5: Messages to Items (code)** - This step performs a key action in the workflow.
7. **Step 6: Get User (slack)** - This step performs a key action in the workflow.
8. **Step 7: Aggregate (aggregate)** - This step performs a key action in the workflow.
9. **Step 8: Split Out1 (splitOut)** - This step performs a key action in the workflow.
10. **Step 9: Get Thread (slack)** - This step performs a key action in the workflow.
11. **Step 10: Aggregate1 (aggregate)** - This step performs a key action in the workflow.
12. **Step 11: Simplify Thread Comments (set)** - This step performs a key action in the workflow.
13. **Step 12: Filter (filter)** - This step performs a key action in the workflow.
14. **Step 13: Message Ref (noOp)** - This step performs a key action in the workflow.
15. **Step 14: Split Out2 (splitOut)** - This step performs a key action in the workflow.
16. **Step 15: Map Reply UserIds (set)** - This step performs a key action in the workflow.
17. **Step 16: Get Reply Users (slack)** - This step performs a key action in the workflow.
18. **Step 17: Google Gemini Chat Model (lmChatGoogleGemini)** - This step performs a key action in the workflow.
19. **Step 18: Summarise Threads (chainLlm)** - This step performs a key action in the workflow.
20. **Step 19: Aggregate2 (aggregate)** - This step performs a key action in the workflow.
21. **Step 20: Aggregate Reply Users (aggregate)** - This step performs a key action in the workflow.
22. **Step 21: Reply Users (set)** - This step performs a key action in the workflow.
23. **Step 22: Google Gemini Chat Model1 (lmChatGoogleGemini)** - This step performs a key action in the workflow.
24. **Step 23: Loop Over Items (splitInBatches)** - This step performs a key action in the workflow.
25. **Step 24: Aggregate3 (set)** - This step performs a key action in the workflow.
26. **Step 25: Aggregate4 (aggregate)** - This step performs a key action in the workflow.
27. **Step 26: When Executed by Another Workflow (executeWorkflowTrigger)** - This step performs a key action in the workflow.
28. **Step 27: Switch (switch)** - This step performs a key action in the workflow.
29. **Step 28: Map Users to Messages (executeWorkflow)** - This step performs a key action in the workflow.
30. **Step 29: Get User Info (set)** - This step performs a key action in the workflow.
31. **Step 30: Fetch Message Replies (executeWorkflow)** - This step performs a key action in the workflow.
32. **Step 31: Has ReplyUsers? (if)** - This step performs a key action in the workflow.
33. **Step 32: Messages to Items1 (code)** - This step performs a key action in the workflow.
34. **Step 33: Aggregate Results (set)** - This step performs a key action in the workflow.
35. **Step 34: Team Member Weekly Report Agent (chainLlm)** - This step performs a key action in the workflow.
36. **Step 35: Merge with Results (set)** - This step performs a key action in the workflow.
37. **Step 36: Team Weekly Report Agent (chainLlm)** - This step performs a key action in the workflow.
38. **Step 37: Google Gemini Chat Model2 (lmChatGoogleGemini)** - This step performs a key action in the workflow.
39. **Step 38: Post Report in Team Channel (slack)** - This step performs a key action in the workflow.
40. **Step 39: Sticky Note (stickyNote)** - This step performs a key action in the workflow.
41. **Step 40: Sticky Note1 (stickyNote)** - This step performs a key action in the workflow.
42. **Step 41: Sticky Note2 (stickyNote)** - This step performs a key action in the workflow.
43. **Step 42: Summarize Message Threads (executeWorkflow)** - This step performs a key action in the workflow.
44. **Step 43: Sticky Note3 (stickyNote)** - This step performs a key action in the workflow.
45. **Step 44: Sticky Note4 (stickyNote)** - This step performs a key action in the workflow.
46. **Step 45: Sticky Note5 (stickyNote)** - This step performs a key action in the workflow.
47. **Step 46: Monday @ 6am (scheduleTrigger)** - This step performs a key action in the workflow.
48. **Step 47: Sticky Note6 (stickyNote)** - This step performs a key action in the workflow.

## 💡 AI-Powered Ideas for Improvement
### Explain
This n8n workflow automates the process of gathering messages from a Slack channel over the past week, summarizes them by user, and generates a report that is posted back to the channel each Monday. It leverages AI to enhance the summaries and provides a structured overview of team activities.

### Demonstrate
A business owner can use this workflow to automatically compile weekly activity reports for their team. This saves time, enhances communication, and ensures that everyone is aligned on achievements and challenges without needing to manually sift through chat logs.

### Imitate
1. Import the workflow into your n8n instance.
2. Set up the Slack credentials and specify the relevant channel.
3. Adjust the schedule trigger to run every Monday at 6 AM.
4. Modify the message summary format as needed.
5. Test the workflow to ensure it pulls messages and posts the report correctly.

### Practice
Try adapting the workflow to pull messages from a different Slack channel or time frame. Experiment with changing the summary style or adding additional metrics, like counting the number of messages per user, to see how it affects the output.

### WIIFM
Mastering this workflow allows you to create value by automating tedious reporting tasks, making you more efficient and attractive to clients. As part of an AI automation business, you can offer this as a service, saving clients time and enhancing their operational effectiveness.

## 🔧 Setup Instructions
1. **Connect Credentials:** OpenAI, Google Sheets, Slack, and other nodes must be authenticated.
2. **Customize Core Logic:** Review "Get Last Week's Messages" and "Sticky Note6" for IDs, table names, and URLs.
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
