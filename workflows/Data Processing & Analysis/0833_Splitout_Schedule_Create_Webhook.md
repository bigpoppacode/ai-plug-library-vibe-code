# Splitout Schedule Create Webhook

## 🚀 What It Does
This workflow automates a process involving scheduleTrigger, microsoftExcel, set.

## 💼 Business Use Case
Use it to automate research, content creation, or data analysis. It saves hours of manual work.

## ⚙️ How It Works
1.  **Trigger:** This workflow is designed to run on a schedule. Configure the interval in the Schedule node.
2. **Step 1: Schedule Trigger (scheduleTrigger)** - This step performs a key action in the workflow.
3. **Step 2: Get Subscribers (microsoftExcel)** - This step performs a key action in the workflow.
4. **Step 3: Get Unique Categories (set)** - This step performs a key action in the workflow.
5. **Step 4: OpenAI Chat Model (lmChatOpenAi)** - This step performs a key action in the workflow.
6. **Step 5: Aggregate (aggregate)** - This step performs a key action in the workflow.
7. **Step 6: Collect Fields (set)** - This step performs a key action in the workflow.
8. **Step 7: Categories to Items (splitOut)** - This step performs a key action in the workflow.
9. **Step 8: For Each Category (splitInBatches)** - This step performs a key action in the workflow.
10. **Step 9: Workflows to Items (splitOut)** - This step performs a key action in the workflow.
11. **Step 10: Workflow Summarizer (chainLlm)** - This step performs a key action in the workflow.
12. **Step 11: Merge (merge)** - This step performs a key action in the workflow.
13. **Step 12: Fetch Latest 10 per Category (httpRequest)** - This step performs a key action in the workflow.
14. **Step 13: No Operation, do nothing (noOp)** - This step performs a key action in the workflow.
15. **Step 14: Get Relevant Workflows (set)** - This step performs a key action in the workflow.
16. **Step 15: Flatten Workflows (set)** - This step performs a key action in the workflow.
17. **Step 16: Remove Already Seen (removeDuplicates)** - This step performs a key action in the workflow.
18. **Step 17: Workflow to Items (splitOut)** - This step performs a key action in the workflow.
19. **Step 18: Combine Workflows (aggregate)** - This step performs a key action in the workflow.
20. **Step 19: Has New Workflows? (if)** - This step performs a key action in the workflow.
21. **Step 20: With User Reference (set)** - This step performs a key action in the workflow.
22. **Step 21: Generate HTML Template (html)** - This step performs a key action in the workflow.
23. **Step 22: Parse Rows (set)** - This step performs a key action in the workflow.
24. **Step 23: Send Daily Digest (microsoftOutlook)** - This step performs a key action in the workflow.
25. **Step 24: Append Category (set)** - This step performs a key action in the workflow.
26. **Step 25: Sticky Note (stickyNote)** - This step performs a key action in the workflow.
27. **Step 26: Sticky Note1 (stickyNote)** - This step performs a key action in the workflow.
28. **Step 27: Sticky Note2 (stickyNote)** - This step performs a key action in the workflow.
29. **Step 28: Sticky Note3 (stickyNote)** - This step performs a key action in the workflow.
30. **Step 29: Sticky Note4 (stickyNote)** - This step performs a key action in the workflow.
31. **Step 30: Sticky Note5 (stickyNote)** - This step performs a key action in the workflow.
32. **Step 31: Sticky Note6 (stickyNote)** - This step performs a key action in the workflow.
33. **Step 32: For Each Subscriber (splitInBatches)** - This step performs a key action in the workflow.
34. **Step 33: Sticky Note7 (stickyNote)** - This step performs a key action in the workflow.

## 💡 AI-Powered Ideas for Improvement
### Explain
This n8n workflow automates the process of sending daily email digests to subscribers based on their category preferences. It pulls subscriber data from Excel, fetches relevant workflows from n8n, summarizes them using AI, and sends personalized emails to each subscriber.

### Demonstrate
A business owner could use this workflow to automatically send daily updates of new templates or resources to clients based on their interests, saving time and ensuring clients receive the most relevant information without manual effort.

### Imitate
1. Set up a Schedule Trigger to run daily.
2. Use the Microsoft Excel node to pull subscriber data.
3. Identify unique categories from the subscribers.
4. Fetch the latest workflows from an API based on those categories.
5. Summarize the workflows using an AI model.
6. Generate an HTML email template and send it through Outlook.

### Practice
Try modifying the workflow to change the email frequency or add new categories. Test it with a small subscriber list to see how the emails look and ensure the summaries are relevant and accurate.

### WIIFM
Mastering this workflow allows you to automate client communications, providing consistent value while saving time and resources. As an automation consultant, you can charge for setting up similar systems, increasing your revenue potential significantly.

## 🔧 Setup Instructions
1. **Connect Credentials:** OpenAI, Google Sheets, Slack, and other nodes must be authenticated.
2. **Customize Core Logic:** Review "Schedule Trigger" and "Sticky Note7" for IDs, table names, and URLs.
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
