# Googledocs Googledrivetool Monitor Triggered
  ## 🚀 What It Does
  Monitors events, processes them, and **notifies** people/apps (Slack/Email) with structured updates.
  
  ## 💼 Business Use Case
  Ideal for **lead intake**, **enrichment**, and **CRM updates** with alerts to the right channel.
  
  ## ⚙️ How It Works
  1. **Trigger:** This workflow starts with **Google Drive - Resume CV File Created**.
  2. **Google Drive - Resume CV File Created** `googleDriveTrigger` — event: "fileCreated", options: "[object Object]", pollTimes: "[object Object]"
3. **Gmail:Notification** `gmailTool` — sendTo: "aiix.space.noreply@gmail.com", message: "={{ /*n8n-auto-generated-fromAI-override*/ $fromAI('Message', ``, 'string') }}", options: "[object Object]"
4. **Sticky Note** `stickyNote` — color: "4", width: "660", height: "400"
5. **Sticky Note1** `stickyNote` — color: "4", width: "320", height: "400"
6. **Sticky Note2** `stickyNote` — color: "4", width: "320", height: "400"
7. **Sticky Note3** `stickyNote` — color: "2", width: "380", height: "400"
8. **Sticky Note4** `stickyNote` — color: "2", width: "380", height: "400"
9. **Sticky Note5** `stickyNote` — color: "6", width: "620", height: "1040"
10. **Sticky Note6** `stickyNote` — color: "2", width: "260", height: "400"
11. **Gdrive:Move-To-Reject-Folder** `googleDriveTool` — operation: **move**
12. **Gdrive:Move-To-KIV-Folder** `googleDriveTool` — operation: **move**
13. **Gdrive:Move-To-Shortlisted-Folder** `googleDriveTool` — operation: **move**
14. **Gsheet: Update Candidate Tracker** `googleSheetsTool` — operation: **appendOrUpdate**
15. **Sticky Note7** `stickyNote` — color: "6", width: "600", height: "1300"
16. **Sticky Note8** `stickyNote` — color: "7", width: "150", height: "80"
17. **Groq - llama 4 AI MODEL** `lmChatGroq` — model: `meta-llama/llama-4-maverick-17b-128e-instruct`
18. **Download Resume File From Gdrive** `googleDrive` — operation: **download**
19. **Extract from File** `extractFromFile` — operation: **pdf**
20. **GDocs - Get Job Desc** `googleDocs` — operation: **get**
21. **AI Agent** `agent` — text: "=You are expert backend principal engineer specialize in python. You will compare job description and candidate profile.

Then you will response with decision [REJECTED/KIV/SHORTLI…[truncated]", options: "[object Object]", promptType: "define"
  
  ## 💡 AI-Powered Ideas for Improvement
  **Explain:** This workflow automates the screening of resumes by using AI to compare candidate profiles with job descriptions. When a resume is uploaded to a specific Google Drive folder, the workflow downloads it, extracts the content, and uses an AI model to evaluate it against the job description. The AI then categorizes the resume as "REJECTED," "KIV" (Keep in View), or "SHORTLISTED," moves the file to the appropriate folder, updates a Google Sheet tracker, and sends a notification email with the results.

**Demonstrate:** A recruitment agency could use this workflow to automate the initial screening of job applicants, saving time and ensuring consistent evaluation criteria, thereby improving the efficiency of their hiring process.

**Imitate:** 1. Set up Google Drive, Gmail, Google Sheets, and Google Docs accounts. 2. Create folders for resume sorting. 3. Import the workflow into n8n. 4. Connect your accounts. 5. Customize the job description and AI evaluation criteria. 6. Test by uploading a resume to the specified Google Drive folder.

**Practice:** Create a test environment with a few resumes and a job description. Run the workflow to see how it categorizes each resume and updates the tracker. Adjust the AI criteria to see how changes affect the categorization.

**WIIFM:** Mastering this workflow can streamline your hiring process, reduce manual workload, and provide a scalable solution for handling large volumes of applications, helping you or your clients make better hiring decisions and save on recruitment costs.
  
  ## 🔧 Setup Instructions
  1. **Connect Credentials:** googleDocsOAuth2Api, googleDriveOAuth2Api, gmailOAuth2, googleSheetsOAuth2Api, groqApi.
2. **Data Mapping:** Verify base/sheet IDs and column names match exactly to prevent silent failures.
3. **Notification Targets:** Confirm channel/email IDs and that the bot/app is authorized to post.
  
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
  