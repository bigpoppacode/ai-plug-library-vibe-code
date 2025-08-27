# Gmail GoogleSheets Create Triggered
  ## 🚀 What It Does
  Monitors events, processes them, and **notifies** people/apps (Slack/Email) with structured updates.
  
  ## 💼 Business Use Case
  Ideal for **lead intake**, **enrichment**, and **CRM updates** with alerts to the right channel.
  
  ## ⚙️ How It Works
  1. **Trigger:** Triggered by **incoming email** (new message).
  2. **Structured Output Parser** `outputParserStructured` — schemaType: "manual", inputSchema: "{
	"type": "object",
	"properties": {
		"name": {
			"type": "string"
		},
      "email": {
			"type": "string"
		},
      "linkedin": {
			"type": "string"
		},
      "score": {
	…[truncated]"
3. **Sticky Note** `stickyNote` — width: "480", height: "260", content: "[redacted]"
4. **OpenAI Chat Model (GPT 4o-mini)** `lmChatOpenAi` — model: `[object Object]`
5. **Trigger on new Email Received** `gmailTrigger` — simple: "false", filters: "[object Object]", options: "[object Object]"
6. **Extract text from PDF File** `extractFromFile` — operation: **pdf**
7. **AI Agent to evaluate Resume** `agent` — text: "=Here is the resume:

{{ $json.text }}", options: "[object Object]", promptType: "define"
8. **Add Resume Evaluation to Google Sheets** `googleSheets` — operation: **append**
  
  ## 💡 AI-Powered Ideas for Improvement
  **Explain:**  
This n8n workflow automates the process of evaluating resumes received via email. When a new email with an attachment is received, the workflow extracts text from the attached PDF resume. Then, an AI agent analyzes the resume, extracts key details like name, email, LinkedIn profile, and assigns a score based on the resume content. Finally, the evaluation results are appended to a Google Sheets document for easy tracking and further analysis.

**Demonstrate:**  
A recruitment agency can use this workflow to automatically screen job applications received via email, saving time and ensuring a consistent evaluation process for all candidates.

**Imitate:**  
1. Set up n8n and import the workflow.
2. Connect your Gmail and Google Sheets accounts.
3. Configure the Gmail trigger to watch for new emails with PDF attachments.
4. Customize the Google Sheets columns to match your data needs.
5. Test by sending a sample resume to your email.

**Practice:**  
Create a test email with a sample resume PDF attached and send it to your monitored email address. Observe how the workflow extracts data, evaluates the resume, and logs the results in Google Sheets.

**WIIFM:**  
Mastering this workflow can help you streamline recruitment processes, offering clients efficient resume screening services. This adds value to your automation portfolio, increases client satisfaction, and opens up opportunities for recurring revenue through ongoing automation management services.
  
  ## 🔧 Setup Instructions
  1. **Connect Credentials:** openAiApi, googleSheetsOAuth2Api, gmailOAuth2.
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
  