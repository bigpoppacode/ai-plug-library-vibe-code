# Splitout Code Automation Webhook

## 🚀 What It Does
This workflow automates a process involving executeWorkflowTrigger, stickyNote, code.

## 💼 Business Use Case
Use it to automate research, content creation, or data analysis. It saves hours of manual work.

## ⚙️ How It Works
1.  **Trigger:** This workflow starts with a **When Executed by Another Workflow** node.
2. **Step 1: When Executed by Another Workflow (executeWorkflowTrigger)** - This step performs a key action in the workflow.
3. **Step 2: Sticky Note10 (stickyNote)** - This step performs a key action in the workflow.
4. **Step 3: Create YouTube API URL (code)** - This step performs a key action in the workflow.
5. **Step 4: Get YouTube Video Details (httpRequest)** - This step performs a key action in the workflow.
6. **Step 5: Merge YouTube Details & Transcript (merge)** - This step performs a key action in the workflow.
7. **Step 6: Create One JSON Object (aggregate)** - This step performs a key action in the workflow.
8. **Step 7: Workflow Variables (set)** - This step performs a key action in the workflow.
9. **Step 8: Sticky Note12 (stickyNote)** - This step performs a key action in the workflow.
10. **Step 9: Sticky Note14 (stickyNote)** - This step performs a key action in the workflow.
11. **Step 10: Sticky Note15 (stickyNote)** - This step performs a key action in the workflow.
12. **Step 11: Combine Comments (summarize)** - This step performs a key action in the workflow.
13. **Step 12: Split Out Comments (splitOut)** - This step performs a key action in the workflow.
14. **Step 13: Get YouTube Video Comments (httpRequest)** - This step performs a key action in the workflow.
15. **Step 14: When clicking ‘Test workflow’ (manualTrigger)** - This step performs a key action in the workflow.
16. **Step 15: Create YouTube API URL for Comments (code)** - This step performs a key action in the workflow.
17. **Step 16: Gmail Report (gmail)** - This step performs a key action in the workflow.
18. **Step 17: Sticky Note (stickyNote)** - This step performs a key action in the workflow.
19. **Step 18: gpt-4o-mini (lmChatOpenAi)** - This step performs a key action in the workflow.
20. **Step 19: Sticky Note1 (stickyNote)** - This step performs a key action in the workflow.
21. **Step 20: Markdown to HTML (markdown)** - This step performs a key action in the workflow.
22. **Step 21: YouTube Video Report Agent (agent)** - This step performs a key action in the workflow.
23. **Step 22: Sticky Note2 (stickyNote)** - This step performs a key action in the workflow.
24. **Step 23: Get Video Comments with Pagination (code)** - This step performs a key action in the workflow.
25. **Step 24: Save Report to Google Drive (googleDrive)** - This step performs a key action in the workflow.
26. **Step 25: Sticky Note4 (stickyNote)** - This step performs a key action in the workflow.

## 💡 AI-Powered Ideas for Improvement
### Explain
This n8n workflow automates the analysis of YouTube video details and comments. It retrieves video data, processes comments, and generates a report, which is then sent via email and saved to Google Drive.

### Demonstrate
A business owner could use this workflow to analyze audience engagement on their YouTube videos. By automating the report generation, they can quickly identify trends and improve their content strategy without manual data collection.

### Imitate
1. Import the workflow into n8n.
2. Set up YouTube API credentials.
3. Replace the `VIDEO_ID` in the `Workflow Variables` node with your desired video ID.
4. Configure the Gmail node to send reports to your email.
5. Run the workflow and review the generated report.

### Practice
Try modifying the workflow to analyze a different YouTube video. Change the `VIDEO_ID` and see how the report varies based on different content. Experiment with the email format to personalize it further.

### WIIFM
Mastering this workflow allows you to provide valuable insights to content creators, helping them enhance engagement and strategy. This can lead to new clients, increased service offerings, and higher income as part of an AI automation business.

## 🔧 Setup Instructions
1. **Connect Credentials:** OpenAI, Google Sheets, Slack, and other nodes must be authenticated.
2. **Customize Core Logic:** Review "When Executed by Another Workflow" and "Sticky Note4" for IDs, table names, and URLs.
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
