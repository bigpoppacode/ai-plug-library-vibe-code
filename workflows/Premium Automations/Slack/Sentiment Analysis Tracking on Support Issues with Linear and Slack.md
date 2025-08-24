# Sentiment Analysis Tracking On Support Issues With Linear And Slack

## 🚀 What It Does
This workflow automates a process involving splitOut, lmChatOpenAi, set.

## 💼 Business Use Case
Use it to automate research, content creation, or data analysis. It saves hours of manual work.

## ⚙️ How It Works
1.  **Trigger:** This workflow starts with a **Airtable Trigger** node.
2. **Step 1: Issues to List (splitOut)** - This step performs a key action in the workflow.
3. **Step 2: OpenAI Chat Model (lmChatOpenAi)** - This step performs a key action in the workflow.
4. **Step 3: Combine Sentiment Analysis (set)** - This step performs a key action in the workflow.
5. **Step 4: Sentiment over Issue Comments (informationExtractor)** - This step performs a key action in the workflow.
6. **Step 5: Copy of Issue (set)** - This step performs a key action in the workflow.
7. **Step 6: For Each Issue... (splitInBatches)** - This step performs a key action in the workflow.
8. **Step 7: Get Existing Sentiment (airtable)** - This step performs a key action in the workflow.
9. **Step 8: Update Row (airtable)** - This step performs a key action in the workflow.
10. **Step 9: Airtable Trigger (airtableTrigger)** - This step performs a key action in the workflow.
11. **Step 10: Sentiment Transition (switch)** - This step performs a key action in the workflow.
12. **Step 11: Fetch Active Linear Issues (graphql)** - This step performs a key action in the workflow.
13. **Step 12: Schedule Trigger (scheduleTrigger)** - This step performs a key action in the workflow.
14. **Step 13: Deduplicate Notifications (removeDuplicates)** - This step performs a key action in the workflow.
15. **Step 14: Report Issue Negative Transition (slack)** - This step performs a key action in the workflow.
16. **Step 15: Sticky Note (stickyNote)** - This step performs a key action in the workflow.
17. **Step 16: Sticky Note1 (stickyNote)** - This step performs a key action in the workflow.
18. **Step 17: Sticky Note2 (stickyNote)** - This step performs a key action in the workflow.
19. **Step 18: Sticky Note3 (stickyNote)** - This step performs a key action in the workflow.
20. **Step 19: Sticky Note4 (stickyNote)** - This step performs a key action in the workflow.

## 💡 AI-Powered Ideas for Improvement
### Explain
This n8n workflow automates the process of monitoring issues from a project management tool, analyzing sentiment in comments, and updating a database with this sentiment. It sends alerts if the sentiment transitions to negative, helping teams respond quickly to potential issues.

### Demonstrate
A business owner may use this workflow to monitor customer feedback on support tickets. By analyzing sentiment, they can identify frustrated customers and address concerns proactively, improving customer satisfaction and retention.

### Imitate
1. Set up a trigger (e.g., schedule or webhook) to fetch issues.
2. Use the OpenAI Chat Model node to analyze sentiment in comments.
3. Store results in Airtable with the Update Row node.
4. Add a switch to check for negative sentiment and send alerts (e.g., via Slack).

### Practice
Create a simplified version of this workflow. Set up a manual trigger to input sample comments, analyze their sentiment, and log results in a Google Sheet. Experiment with different comments to see how sentiment analysis changes.

### WIIFM
Mastering this workflow helps you provide valuable insights to businesses, enabling them to improve customer service and retention. As a consultant or developer, this skill can attract clients seeking efficient solutions and generate income through automation services.

## 🔧 Setup Instructions
1. **Connect Credentials:** OpenAI, Google Sheets, Slack, and other nodes must be authenticated.
2. **Customize Core Logic:** Review "Issues to List" and "Sticky Note4" for IDs, table names, and URLs.
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
