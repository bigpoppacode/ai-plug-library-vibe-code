# Splitout Code Import Triggered

## 🚀 What It Does
This workflow automates a process involving manualTrigger, splitOut, filter.

## 💼 Business Use Case
Use it to automate research, content creation, or data analysis. It saves hours of manual work.

## ⚙️ How It Works
1.  **Trigger:** This workflow starts with a **When clicking ‘Test workflow’** node.
2. **Step 1: When clicking ‘Test workflow’ (manualTrigger)** - This step performs a key action in the workflow.
3. **Step 2: Split Out Comments (splitOut)** - This step performs a key action in the workflow.
4. **Step 3: Filter Out Null Comments (filter)** - This step performs a key action in the workflow.
5. **Step 4: Select Result Field (set)** - This step performs a key action in the workflow.
6. **Step 5: Split Out Posts (splitOut)** - This step performs a key action in the workflow.
7. **Step 6: Facebook Graph API : Get Post from Page (facebookGraphApi)** - This step performs a key action in the workflow.
8. **Step 7: Facebook : Get Each Post Comments (facebookGraphApi)** - This step performs a key action in the workflow.
9. **Step 8: Merge Post & Comments (merge)** - This step performs a key action in the workflow.
10. **Step 9: Reverse Item to Match another Branch (code)** - This step performs a key action in the workflow.
11. **Step 10: Set PageID & Number of Latest Posts (set)** - This step performs a key action in the workflow.
12. **Step 11: Sticky Note (stickyNote)** - This step performs a key action in the workflow.

## 💡 AI-Powered Ideas for Improvement
### Explain
This n8n workflow automates the process of fetching comments from a Facebook page, filtering out irrelevant data, and structuring it for further analysis or reporting. It starts with a manual trigger and proceeds through various steps to ensure only useful comments are captured and merged with their corresponding posts.

### Demonstrate
A business owner could use this workflow to automatically gather customer feedback from Facebook comments on product posts. This data can then be analyzed for insights, improving customer service and engagement without manual effort.

### Imitate
1. Import the workflow into n8n.
2. Set up a **Manual Trigger** to start the workflow.
3. Configure **Facebook Graph API** nodes to fetch posts and comments from your page.
4. Use **Filter** and **Set** nodes to clean and structure the data.
5. Merge posts with comments for a comprehensive overview.

### Practice
As an exercise, create a simplified version of this workflow that only fetches comments from a single Facebook post. Test it with different posts to see how the workflow handles various comment types.

### WIIFM
Mastering this workflow allows you to automate data collection from social media, saving time and enhancing your ability to provide actionable insights for clients. This skill can attract new customers and generate income as a service provider in automation and AI.

## 🔧 Setup Instructions
1. **Connect Credentials:** OpenAI, Google Sheets, Slack, and other nodes must be authenticated.
2. **Customize Core Logic:** Review "When clicking ‘Test workflow’" and "Sticky Note" for IDs, table names, and URLs.
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
