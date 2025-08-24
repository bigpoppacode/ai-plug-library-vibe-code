# Screen Applicants With Ai, Notify Hr And Save Them In A Google Sheet

## 🚀 What It Does
This workflow automates a process involving lmChatGoogleGemini, gmail, chainLlm.

## 💼 Business Use Case
Use it to automate research, content creation, or data analysis. It saves hours of manual work.

## ⚙️ How It Works
1.  **Trigger:** This workflow starts with a **Application Form** node.
2. **Step 1: Google Gemini Chat Model (lmChatGoogleGemini)** - This step performs a key action in the workflow.
3. **Step 2: Confirmation of CV Submission (gmail)** - This step performs a key action in the workflow.
4. **Step 3: Inform HR New CV Received (gmail)** - This step performs a key action in the workflow.
5. **Step 4: Using AI Analysis & Rating (chainLlm)** - This step performs a key action in the workflow.
6. **Step 5: Convert Binary to Json (extractFromFile)** - This step performs a key action in the workflow.
7. **Step 6: Application Form (formTrigger)** - This step performs a key action in the workflow.
8. **Step 7: Candidate Lists (googleSheets)** - This step performs a key action in the workflow.

## 💡 AI-Powered Ideas for Improvement
### Explain
This n8n workflow automates the CV screening process. It collects applications via a form, confirms receipt via email, analyzes the CV with an AI model, and logs the results in a Google Sheet for HR review.

### Demonstrate
A business owner could use this workflow when hiring for a software engineer position. It streamlines CV submissions, automates candidate analysis, and ensures HR receives timely notifications, saving time and reducing manual effort.

### Imitate
1. Set up a new workflow in n8n.
2. Add a **Form Trigger** node for CV submissions.
3. Connect a **Gmail** node to confirm receipt.
4. Use an **AI Analysis** node to evaluate CVs.
5. Log results in a **Google Sheets** node.
6. Test and adjust parameters as needed.

### Practice
Try modifying the workflow to include a rejection email for candidates who don’t meet criteria. This will help reinforce the structure and make it more comprehensive.

### WIIFM
Mastering this workflow allows you to offer valuable automation services to businesses, enhancing their hiring processes. This can help you attract clients, reduce operational costs, and potentially generate significant income through service packages.

## 🔧 Setup Instructions
1. **Connect Credentials:** OpenAI, Google Sheets, Slack, and other nodes must be authenticated.
2. **Customize Core Logic:** Review "Google Gemini Chat Model" and "Candidate Lists" for IDs, table names, and URLs.
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
