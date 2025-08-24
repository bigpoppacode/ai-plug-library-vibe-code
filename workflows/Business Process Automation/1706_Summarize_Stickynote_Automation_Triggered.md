# Summarize Stickynote Automation Triggered

## 🚀 What It Does
This workflow automates a process involving jira, agent, lmChatOpenAi.

## 💼 Business Use Case
Use it to automate research, content creation, or data analysis. It saves hours of manual work.

## ⚙️ How It Works
1.  **Trigger:** This workflow starts with a **Jira Trigger** node.
2. **Step 1: Jira Get All Issues (jira)** - This step performs a key action in the workflow.
3. **Step 2: Jira Get All Comments (jira)** - This step performs a key action in the workflow.
4. **Step 3: AI Agent (agent)** - This step performs a key action in the workflow.
5. **Step 4: OpenAI Chat Model (lmChatOpenAi)** - This step performs a key action in the workflow.
6. **Step 5: Edit Fields (set)** - This step performs a key action in the workflow.
7. **Step 6: Summarize (summarize)** - This step performs a key action in the workflow.
8. **Step 7: Google Docs (googleDocs)** - This step performs a key action in the workflow.
9. **Step 8: Jira Trigger (jiraTrigger)** - This step performs a key action in the workflow.
10. **Step 9: If (if)** - This step performs a key action in the workflow.
11. **Step 10: Simple Memory (memoryBufferWindow)** - This step performs a key action in the workflow.
12. **Step 11: Sticky Note (stickyNote)** - This step performs a key action in the workflow.
13. **Step 12: Sticky Note1 (stickyNote)** - This step performs a key action in the workflow.
14. **Step 13: Sticky Note2 (stickyNote)** - This step performs a key action in the workflow.

## 💡 AI-Powered Ideas for Improvement
### Explain
This workflow automates the process of generating Agile retrospective documents from Jira issues. It retrieves all issues and comments, analyzes them with AI, summarizes findings, and saves the report to Google Docs. This streamlines the retrospective process for teams.

### Demonstrate
A project manager can use this workflow to automate the generation of retrospective reports after a sprint. Instead of manually compiling feedback and insights, the workflow gathers data from Jira, analyzes it, and creates a structured report in Google Docs, saving time and improving consistency.

### Imitate
1. Set up an n8n account and create a new workflow.
2. Add a **Jira Trigger** to start the workflow when an issue is updated.
3. Use **Jira Get All Issues** to fetch relevant issues.
4. Add **Jira Get All Comments** to gather comments from those issues.
5. Use the **AI Agent** to analyze the comments and issues.
6. Summarize findings with the **OpenAI Chat Model**.
7. Format the report using **Edit Fields**.
8. Save the document in **Google Docs**.
9. Test the workflow.

### Practice
Create a simple version of this workflow that just retrieves issues from Jira and sends their titles to your email. This will help you understand each node's function without the complexity of AI analysis and document formatting.

### WIIFM
Mastering this workflow enables you to offer valuable automation services to teams and organizations seeking efficiency in their retrospective processes. By providing automated reporting, you can attract clients looking to streamline operations, ultimately generating income and expanding your service offerings.

## 🔧 Setup Instructions
1. **Connect Credentials:** OpenAI, Google Sheets, Slack, and other nodes must be authenticated.
2. **Customize Core Logic:** Review "Jira Get All Issues" and "Sticky Note2" for IDs, table names, and URLs.
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
