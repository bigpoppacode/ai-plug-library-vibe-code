# Video Audition Analyzer

## 🚀 What It Does
This workflow automates a process involving googleDrive, googleDriveTrigger, executeWorkflowTrigger.

## 💼 Business Use Case
Use it to automate research, content creation, or data analysis. It saves hours of manual work.

## ⚙️ How It Works
1.  **Trigger:** This workflow starts with a **Google Drive Trigger** node.
2. **Step 1: Google Drive (googleDrive)** - This step performs a key action in the workflow.
3. **Step 2: Google Drive Trigger (googleDriveTrigger)** - This step performs a key action in the workflow.
4. **Step 3: Execute Workflow Trigger (executeWorkflowTrigger)** - This step performs a key action in the workflow.
5. **Step 4: Wait (wait)** - This step performs a key action in the workflow.
6. **Step 5: Set Prompt (set)** - This step performs a key action in the workflow.
7. **Step 6: Gemini - Generate Upload URL (httpRequest)** - This step performs a key action in the workflow.
8. **Step 7: Gemini - Upload File (httpRequest)** - This step performs a key action in the workflow.
9. **Step 8: Gemini - Ask Questions (httpRequest)** - This step performs a key action in the workflow.
10. **Step 9: Save Values (set)** - This step performs a key action in the workflow.
11. **Step 10: Sticky Note (stickyNote)** - This step performs a key action in the workflow.
12. **Step 11: Sticky Note1 (stickyNote)** - This step performs a key action in the workflow.
13. **Step 12: Sticky Note2 (stickyNote)** - This step performs a key action in the workflow.
14. **Step 13: Execute Workflow (executeWorkflow)** - This step performs a key action in the workflow.
15. **Step 14: Sticky Note3 (stickyNote)** - This step performs a key action in the workflow.
16. **Step 15: Sticky Note4 (stickyNote)** - This step performs a key action in the workflow.
17. **Step 16: Sticky Note5 (stickyNote)** - This step performs a key action in the workflow.
18. **Step 17: Create record (airtable)** - This step performs a key action in the workflow.

## 💡 AI-Powered Ideas for Improvement
### Explain
This n8n workflow automates the process of analyzing audition videos for a child actor by downloading files from Google Drive, using AI to evaluate them, and storing the results in Airtable. It triggers when new videos are added to a specified folder, streamlining the review process.

### Demonstrate
A business owner in advertising could use this workflow to quickly assess audition videos for a campaign. Instead of manually watching each video, they can automate evaluations, saving time and ensuring consistent feedback for candidates.

### Imitate
1. Set up a Google Drive folder to store videos.
2. Create an n8n workflow using the Google Drive Trigger to initiate when a new file is added.
3. Add nodes to download the file, set evaluation prompts, and use AI to analyze the video.
4. Store the results in Airtable for easy access and review.

### Practice
Experiment by uploading a test video to your Google Drive folder and running the workflow. Check Airtable to see if the analysis results are correctly recorded. Adjust the evaluation criteria in the prompt to see how it affects the output.

### WIIFM
Mastering this workflow can help you save time and enhance efficiency in media reviews, making you more attractive to clients seeking automation solutions. This skill can differentiate you in the market, leading to potential income as a service provider in AI automation.

## 🔧 Setup Instructions
1. **Connect Credentials:** OpenAI, Google Sheets, Slack, and other nodes must be authenticated.
2. **Customize Core Logic:** Review "Google Drive" and "Create record" for IDs, table names, and URLs.
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
