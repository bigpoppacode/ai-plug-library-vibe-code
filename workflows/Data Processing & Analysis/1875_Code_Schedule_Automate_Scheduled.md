# Code Schedule Automate Scheduled

## 🚀 What It Does
This workflow automates a process involving code, reddit, if.

## 💼 Business Use Case
Use it to automate research, content creation, or data analysis. It saves hours of manual work.

## ⚙️ How It Works
1.  **Trigger:** This workflow is designed to run on a schedule. Configure the interval in the Schedule node.
2. **Step 1: Split Topics into Items (code)** - This step performs a key action in the workflow.
3. **Step 2: Search Posts (reddit)** - This step performs a key action in the workflow.
4. **Step 3: Upvotes Requirement Filtering (if)** - This step performs a key action in the workflow.
5. **Step 4: Set Reddit Posts (set)** - This step performs a key action in the workflow.
6. **Step 5: Remove Duplicates (code)** - This step performs a key action in the workflow.
7. **Step 6: Loop Over Items (splitInBatches)** - This step performs a key action in the workflow.
8. **Step 7: Get Comments (reddit)** - This step performs a key action in the workflow.
9. **Step 8: Extract Top Comments (code)** - This step performs a key action in the workflow.
10. **Step 9: Format Comments (code)** - This step performs a key action in the workflow.
11. **Step 10: Set for Loop (set)** - This step performs a key action in the workflow.
12. **Step 11: Get News Content (httpRequest)** - This step performs a key action in the workflow.
13. **Step 12: Set Final Report (set)** - This step performs a key action in the workflow.
14. **Step 13: Convert to File (convertToFile)** - This step performs a key action in the workflow.
15. **Step 14: Compress files (compression)** - This step performs a key action in the workflow.
16. **Step 15: Merge Binary Files (code)** - This step performs a key action in the workflow.
17. **Step 16: Google Drive6 (googleDrive)** - This step performs a key action in the workflow.
18. **Step 17: Google Drive7 (googleDrive)** - This step performs a key action in the workflow.
19. **Step 18: Send files to Mattermost3 (httpRequest)** - This step performs a key action in the workflow.
20. **Step 19: Aggregate (aggregate)** - This step performs a key action in the workflow.
21. **Step 20: Schedule Trigger (scheduleTrigger)** - This step performs a key action in the workflow.
22. **Step 21: Anthropic Chat Model (lmChatAnthropic)** - This step performs a key action in the workflow.
23. **Step 22: Anthropic Chat Model1 (lmChatAnthropic)** - This step performs a key action in the workflow.
24. **Step 23: Keep Last (code)** - This step performs a key action in the workflow.
25. **Step 24: Anthropic Chat Model2 (lmChatAnthropic)** - This step performs a key action in the workflow.
26. **Step 25: Sticky Note (stickyNote)** - This step performs a key action in the workflow.
27. **Step 26: Comments Analysis (chainLlm)** - This step performs a key action in the workflow.
28. **Step 27: News Analysis (chainLlm)** - This step performs a key action in the workflow.
29. **Step 28: Stories Report (chainLlm)** - This step performs a key action in the workflow.
30. **Step 29: Set Data (set)** - This step performs a key action in the workflow.

## 💡 AI-Powered Ideas for Improvement
### Explain
This n8n workflow automates the process of gathering and analyzing trending news from Reddit, extracting key comments, and generating a report that is saved and shared via Google Drive and Mattermost.

### Demonstrate
A business owner could use this workflow to automatically track industry-related discussions on Reddit, analyze public sentiment, and generate a report for their marketing team, saving time and enhancing strategic planning.

### Imitate
1. Set up a **Schedule Trigger** to run weekly.
2. Use **Split Topics into Items** to define topics of interest.
3. Implement **Search Posts** on Reddit with relevant keywords.
4. Filter posts with **Upvotes Requirement Filtering**.
5. Extract comments using **Get Comments** and analyze them with the **Anthropic Chat Model**.
6. Format and save results to **Google Drive**.

### Practice
Try modifying the workflow to focus on a different topic, such as "technology." Adjust the keywords in the **Search Posts** step and see how the output changes. Experiment with different upvote thresholds in the filtering step.

### WIIFM
Mastering this workflow enables you to offer valuable insights to clients, streamline their content strategies, and enhance customer engagement through timely analysis, positioning you as a sought-after consultant in automation and AI.

## 🔧 Setup Instructions
1. **Connect Credentials:** OpenAI, Google Sheets, Slack, and other nodes must be authenticated.
2. **Customize Core Logic:** Review "Split Topics into Items" and "Set Data" for IDs, table names, and URLs.
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
