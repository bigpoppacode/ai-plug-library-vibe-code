# Extractfromfile Form Automate Triggered
  ## 🚀 What It Does
  Moves data between apps and a **database/spreadsheet**, with logic and optional AI steps.
  
  ## 💼 Business Use Case
  Ideal for **lead intake**, **enrichment**, and **CRM updates** with alerts to the right channel.
  
  ## ⚙️ How It Works
  1. **Trigger:** This workflow starts with **On form submission**.
  2. **On form submission** `formTrigger` — options: "[object Object]", formTitle: "Send CV", formFields: "[object Object]"
3. **Structured Output Parser** `outputParserStructured` — schemaType: "manual", inputSchema: "{
	"type": "object",
	"properties": {
		"vote": {
			"type": "string"
		},
		"consideration": {
			"type": "string"
		}
	}
}"
4. **OpenAI** `lmChatOpenAi` — model: `[object Object]`
5. **Sticky Note** `stickyNote` — color: "3", width: "540", content: "## HR Expert 
This workflow automates the process of handling job applications by extracting relevant information from submitted CVs, analyzing the candidate's qualifications again…[truncated]"
6. **Sticky Note1** `stickyNote` — width: "300", height: "420", content: "The CV is uploaded to Google Drive and converted so that it can be processed
"
7. **Sticky Note2** `stickyNote` — width: "360", height: "440", content: "The essential information for evaluating the candidate is collected in two different chains"
8. **Sticky Note3** `stickyNote` — width: "320", height: "240", content: "Summary of relevant information useful for classifying the candidate"
9. **Sticky Note4** `stickyNote` — width: "220", height: "240", content: "Characteristics of the profile sought by the company that intends to hire the candidate"
10. **Sticky Note5** `stickyNote` — width: "360", height: "240", content: "Candidate evaluation with vote and considerations of the HR agent relating the profile sought with the candidate's skills"
11. **Extract from File** `extractFromFile` — operation: **pdf**
12. **Upload CV** `googleDrive` — name: "=CV-{{ $now.format('yyyyLLdd') }}-{{ $json.CV[0].filename }}", driveId: "[object Object]", options: "[object Object]"
13. **Qualifications** `informationExtractor` — text: "={{ $json.text }}", options: "[object Object]", attributes: "[object Object]"
14. **Personal Data** `informationExtractor` — text: "={{ $json.text }}", options: "[object Object]", schemaType: "manual"
15. **Merge** `merge` — mode: "combine", options: "[object Object]", combineBy: "combineAll"
16. **Summarization Chain** `chainSummarization` — options: "[object Object]"
17. **Profile Wanted** `set` — options: "[object Object]", assignments: "[object Object]"
18. **HR Expert** `chainLlm` — text: "=Profilo ricercato:
{{ $json.profile_wanted }}

Candidato:
{{ $('Summarization Chain').item.json.response.text }}", messages: "[object Object]", promptType: "define"
19. **Google Sheets** `googleSheets` — operation: **append**
  
  ## 💡 AI-Powered Ideas for Improvement
  - **Explain:** This workflow automates the process of handling job applications. When a candidate submits a CV through a form, it extracts key information like personal data and qualifications. It then evaluates the candidate against a predefined profile using AI, rates them, and stores the results in a Google Sheet. The CV is also uploaded to Google Drive for record-keeping.

- **Demonstrate:** A recruitment agency could use this workflow to streamline their candidate evaluation process, allowing them to quickly assess and shortlist candidates, saving time and ensuring only qualified candidates are considered.

- **Imitate:** To apply this workflow, import it into n8n, set up the form for CV submissions, connect Google Sheets and Drive, and configure the AI model with your candidate evaluation criteria. Test the workflow with sample CVs to ensure it captures and processes data correctly.

- **Practice:** Create a mock form with sample CV submissions and run the workflow. Check Google Sheets to ensure candidate data and evaluations are correctly logged. Adjust the AI evaluation criteria to see how it impacts the candidate scoring.

- **WIIFM:** Mastering this workflow can enhance your ability to automate HR processes, making recruitment more efficient. It can be a valuable service offering for businesses, helping you attract clients looking for advanced automation solutions in HR management.
  
  ## 🔧 Setup Instructions
  1. **Connect Credentials:** googleSheetsOAuth2Api, googleDriveOAuth2Api, openAiApi.
2. **Data Mapping:** Verify base/sheet IDs and column names match exactly to prevent silent failures.
  
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
  