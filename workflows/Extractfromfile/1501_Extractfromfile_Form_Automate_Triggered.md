# Extractfromfile Form Automate Triggered
  ## 🚀 What It Does
  Moves data between apps and a **database/spreadsheet**, with logic and optional AI steps.
  
  ## 💼 Business Use Case
  Ideal for **lead intake**, **enrichment**, and **CRM updates** with alerts to the right channel.
  
  ## ⚙️ How It Works
  1. **Trigger:** This workflow starts with **On form submission**.
  2. **On form submission** `formTrigger` — options: "[object Object]", formTitle: "Submit your CV", formFields: "[object Object]"
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
}
"
4. **Sticky Note** `stickyNote` — width: "500", height: "660", content: "## Submission, Saving to Google Drive & Extraction

**Captures user info from the form.**
**Uploads resume to Google Drive.**
**Extracts data from the PDF (resume).**"
5. **Sticky Note1** `stickyNote` — color: "7", width: "560", height: "660"
6. **Sticky Note2** `stickyNote` — color: "5", width: "1120", height: "660"
7. **Sticky Note3** `stickyNote` — color: "4", width: "640", height: "660"
8. **Sticky Note4** `stickyNote` — color: "2", width: "1060", height: "660"
9. **OpenAI Chat Model** `lmChatOpenAi` — model: `[object Object]`
10. **Upload to google drive** `googleDrive` — name: "=Resume-{{ $now.format('yyyyLLdd') }}-{{ $json.Resume[0].filename }}", driveId: "[object Object]", options: "[object Object]"
11. **Resume extraction** `extractFromFile` — operation: **pdf**
12. **Personal Info** `informationExtractor` — text: "={{ $json.text }}", options: "[object Object]", schemaType: "manual"
13. **Qualification** `informationExtractor` — text: "={{ $json.text }}", options: "[object Object]", attributes: "[object Object]"
14. **Merge** `merge` — mode: "combine", options: "[object Object]", combineBy: "combineAll"
15. **Summarizer** `chainSummarization` — options: "[object Object]"
16. **wanted profile** `set` — options: "[object Object]", assignments: "[object Object]"
17. **HR Expert** `chainLlm` — text: "=Profile:
{{ $json['wanted-profile'] }}

Candidate:{{ $('Summarizer').item.json.response.text }}", messages: "[object Object]", promptType: "define"
18. **Google Sheets** `googleSheets` — operation: **append**
  
  ## 💡 AI-Powered Ideas for Improvement
  ### Explain
This workflow automates resume processing and evaluation. When a candidate submits their resume via a form, the workflow uploads it to Google Drive, extracts key information like personal details and qualifications, and uses AI to evaluate the candidate against a desired profile. The evaluation results, including a rating and comments, are saved in Google Sheets for easy tracking and decision-making.

### Demonstrate
A recruitment agency uses this workflow to streamline its hiring process. It automatically assesses candidates based on specific criteria, saving time and ensuring a consistent evaluation standard, ultimately speeding up the hiring process.

### Imitate
1. Set up the form to collect candidate resumes.
2. Connect Google Drive to save resumes.
3. Use the resume extraction tool to pull data.
4. Set up OpenAI for candidate evaluation.
5. Connect Google Sheets to store results.
6. Test and adjust for your specific hiring criteria.

### Practice
Create a mock recruitment scenario. Use the workflow to process a few sample resumes and verify that the extraction and evaluation results match your expectations. Adjust the criteria or form fields as needed.

### WIIFM
Mastering this workflow positions you as an expert in automating HR processes, reducing recruitment time, and improving hiring quality. It can help you attract clients looking for efficient recruitment solutions, thereby increasing your service offerings and income potential.
  
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
  