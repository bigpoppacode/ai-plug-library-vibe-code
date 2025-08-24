# HTTP Schedule Create Scheduled

## 🚀 What It Does
This workflow automates a process involving httpRequest, if, splitInBatches.

## 💼 Business Use Case
Use it to automate research, content creation, or data analysis. It saves hours of manual work.

## ⚙️ How It Works
1.  **Trigger:** This workflow is designed to run on a schedule. Configure the interval in the Schedule node.
2. **Step 1: API to Check existing merge request (httpRequest)** - This step performs a key action in the workflow.
3. **Step 2: Is Exists (if)** - This step performs a key action in the workflow.
4. **Step 3: Create New Merge Request (httpRequest)** - This step performs a key action in the workflow.
5. **Step 4: Loop Over Items (splitInBatches)** - This step performs a key action in the workflow.
6. **Step 5: API to CLOSE existing Merge Request (httpRequest)** - This step performs a key action in the workflow.
7. **Step 6: Add Custom Notes To Merge Request (httpRequest)** - This step performs a key action in the workflow.
8. **Step 7: 30 secs wait to approve merge request and pipeline to finish1 (wait)** - This step performs a key action in the workflow.
9. **Step 8: Merge When Pipeline Succeeds (httpRequest)** - This step performs a key action in the workflow.
10. **Step 9: setValueForMerge (set)** - This step performs a key action in the workflow.
11. **Step 10: Schedule Trigger (scheduleTrigger)** - This step performs a key action in the workflow.

## 💡 AI-Powered Ideas for Improvement
### Explain
This n8n workflow automates the process of managing GitLab merge requests. It checks for existing requests, closes them if needed, creates new ones, adds comments, and merges them once the pipeline is successful, all triggered on a schedule.

### Demonstrate
A software development team can use this workflow to manage code changes efficiently. Instead of manually checking for open merge requests, closing them, and creating new ones, the automation saves time and reduces errors, enhancing productivity.

### Imitate
1. Import the workflow into n8n.
2. Configure the GitLab API credentials and project ID.
3. Adjust the source and target branches as needed.
4. Set up the schedule trigger to run at desired intervals.
5. Test the workflow to ensure it operates as intended.

### Practice
Create a simple version of this workflow that only checks for existing merge requests and logs the results in a Google Sheet. This will help you understand the logic flow without the complexity of merging or closing requests.

### WIIFM
Mastering this workflow allows you to streamline software development processes, reducing manual effort and increasing efficiency. This skill can attract clients looking for automation solutions, helping you build a profitable automation business.

## 🔧 Setup Instructions
1. **Connect Credentials:** OpenAI, Google Sheets, Slack, and other nodes must be authenticated.
2. **Customize Core Logic:** Review "API to Check existing merge request" and "Schedule Trigger" for IDs, table names, and URLs.
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
