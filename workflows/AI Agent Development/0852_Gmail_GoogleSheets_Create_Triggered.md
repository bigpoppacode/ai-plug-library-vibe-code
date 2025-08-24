# Gmail GoogleSheets Create Triggered

## 🚀 What It Does
This workflow automates a process involving outputParserStructured, stickyNote, extractFromFile.

## 💼 Business Use Case
Use it to automate research, content creation, or data analysis. It saves hours of manual work.

## ⚙️ How It Works
1.  **Trigger:** This workflow starts with a **Trigger on new Email Received** node.
2. **Step 1: Structured Output Parser (outputParserStructured)** - This step performs a key action in the workflow.
3. **Step 2: Sticky Note (stickyNote)** - This step performs a key action in the workflow.
4. **Step 3: Extract text from PDF File (extractFromFile)** - This step performs a key action in the workflow.
5. **Step 4: AI Agent to evaluate Resume (agent)** - This step performs a key action in the workflow.
6. **Step 5: OpenAI Chat Model (GPT 4o-mini) (lmChatOpenAi)** - This step performs a key action in the workflow.
7. **Step 6: Add Resume Evaluation to Google Sheets (googleSheets)** - This step performs a key action in the workflow.
8. **Step 7: Trigger on new Email Received (gmailTrigger)** - This step performs a key action in the workflow.

## 💡 AI-Powered Ideas for Improvement
### Explain
This n8n workflow automates the evaluation of resumes received via email. It extracts text from PDF resumes, uses AI to analyze and score them, and saves the results in Google Sheets, streamlining the hiring process.

### Demonstrate
A recruitment agency could use this workflow to automatically evaluate incoming resumes from job applicants. Instead of manually reviewing each one, the agency can quickly score and store evaluated resumes, saving time and ensuring consistency.

### Imitate
1. Set up a Gmail Trigger to capture new emails with PDF attachments.
2. Use the Extract text from PDF node to retrieve resume content.
3. Implement an AI Agent to analyze the extracted text and score the resume.
4. Connect an OpenAI model to refine the evaluation process.
5. Append the evaluation results to a Google Sheet for tracking.

### Practice
Try creating a simplified version of this workflow by manually inputting a sample resume text instead of extracting from a PDF. Evaluate it using the AI Agent and save the results in a Google Sheet.

### WIIFM
Mastering this workflow allows you to offer valuable automation services to businesses, enhancing hiring efficiency. This skill can attract clients looking for streamlined recruitment processes, boosting your income potential as an automation consultant.

## 🔧 Setup Instructions
1. **Connect Credentials:** OpenAI, Google Sheets, Slack, and other nodes must be authenticated.
2. **Customize Core Logic:** Review "Structured Output Parser" and "Trigger on new Email Received" for IDs, table names, and URLs.
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
