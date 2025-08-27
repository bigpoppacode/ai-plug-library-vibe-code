# Wait Webhook Automation Webhook
## 🚀 What It Does
Moves data between apps and a **database/spreadsheet**, with logic and optional AI steps.

## 💼 Business Use Case
Use as a **glue/API broker**: receive data, enrich/validate via APIs, and pass to downstream systems.

## ⚙️ How It Works
1. **Trigger:** This workflow starts with **Application Form 1 of 3**.
2. **Structured Output Parser** `outputParserStructured` — schemaType: "manual", inputSchema: "{
	"type": "object",
	"properties": {
		"resume_score": {
			"type": "string"
		},
		"resume_evaluation": {
			"type": "string"
		}
	}
}"
3. **Sticky Note2** `stickyNote` — width: "360", height: "480", content: "## Applicant Qualifications
### Creates individual summary for Education, Job History, and Skills that is sent to LLM for processing; captures total years of experience"
4. **Sticky Note3** `stickyNote` — width: "360", height: "400", content: "## Applicant Summary 
### Writes a concise summary of applicant’s Education, Job History, and Skills."
5. **Sticky Note5** `stickyNote` — width: "360", height: "400", content: "## HR Expert Evaluation
### Compares resume to job description in Notion ATS and assesses candidate, outputting evaluation rationale and score of 1 to 10"
6. **Sticky Note6** `stickyNote` — width: "300", height: "400", content: "## Gets Job Description 
### Searches Notion ATS database and pulls description that matches Job Code in Applicant form trigger"
7. **Sticky Note** `stickyNote` — width: "280", height: "400", content: "## Creates ATS Record
### Updates Notion ATS database (free template) with applicant information, including AI assessment of qualifications vs job description."
8. **Sticky Note7** `stickyNote` — width: "280", height: "400", content: "## Creates G-Sheets Record
### Updates Google Sheet with applicant data as source for compliance reporting"
9. **Sticky Note8** `stickyNote` — width: "360", height: "400", content: "## Job Description Summary
### Summarizes the job description into a string, 250 words or less"
10. **Sticky Note9** `stickyNote` — width: "300", height: "400", content: "## Application Data
### Captures data elements from Application Form and provides as input for workflow "
11. **Sticky Note4** `stickyNote` — width: "360", height: "660", content: "  "
12. **Sticky Note12** `stickyNote` — color: "4", width: "500", height: "180"
13. **Sticky Note13** `stickyNote` — color: "3", width: "4500", content: "# Candidate Application > Resume Screen > ATS Record Creation > Invite to Interview
## Automating the process from application to first round interview invitation."
14. **ElevenLabs Web Hook** `webhook` — method: **POST**
15. **Sticky Note14** `stickyNote` — width: "280", height: "400", content: "## Elevenlabs Trigger
### AI Conversation agent behavior-based interview data/audio sent at end of conversation.  Includes an AI evaluation of interview questions.   
"
16. **Sticky Note15** `stickyNote` — width: "260", height: "400", content: "## Data Mapping
### Conversation data elements, including evaluation criteria and transcript summary mapped as output fields
"
17. **Sticky Note16** `stickyNote` — width: "440", height: "400", content: "## AI Agent Interview Assessment
### AI agent reviews full conversation transcript and provides overall assessment of behavior based interview, scoring applicants from 1 low to 5 h…[truncated]"
18. **Sticky Note17** `stickyNote` — width: "260", height: "400", content: "## Applicant Tracker
### Pulls applicant record from Notion db"
19. **Sticky Note18** `stickyNote` — width: "260", height: "400", content: "## Applicant ID
### Using phone number captured during interview, matches interview with candidate record in db"
20. **Sticky Note19** `stickyNote` — width: "260", height: "400", content: "## Update Notion DB
### Matches record and updates applicant record with AI conversation agent criteria evaluation and N8N AI agent overall interview score.
"
21. **Sticky Note20** `stickyNote` — width: "260", height: "400", content: "## Conversation Audio
### Downloads conversation audio and saves to Google Drive.  Option to delete audio from Elevenlabs server.
"
22. **Sticky Note21** `stickyNote` — color: "4", width: "720", height: "180"
23. **Sticky Note22** `stickyNote` — color: "3", width: "4480", content: "# Conversation AI Agent Interview > AI Assessment - Evaluation > Notion ATS Update with Audio transcript
## Automating behavioral based interview evaluation and scoring; updating m…[truncated]"
24. **Sticky Note23** `stickyNote` — color: "5", width: "520", height: "980"
25. **Sticky Note24** `stickyNote` — color: "5", width: "520", height: "400"
26. **Sticky Note10** `stickyNote` — width: "360", height: "140", content: "### Configuration Note: 
Update Title and Job code in form to match your job posting hosted in Notion (free template) 
"
27. **Sticky Note25** `stickyNote` — width: "340", height: "400", content: "## Embed audio transcript in Notion
### Embeds audio transcript in applicant profile hosted in Notion ATS database, providing hiring manager easy access to validate AI assessment. …[truncated]"
28. **Sticky Note11** `stickyNote` — color: "5", width: "520", content: "# Workflow 1"
29. **Sticky Note26** `stickyNote` — color: "5", width: "520", height: "140"
30. **Application Form 1 of 3** `formTrigger` — options: "[object Object]", formTitle: "Sr Account Executive", formFields: "[object Object]"
31. **Application Form 2 of 3** `formTrigger` — options: "[object Object]", formTitle: "Full Stack Developer", formFields: "[object Object]"
32. **Application form 3 of 3** `formTrigger` — options: "[object Object]", formTitle: "IT Support Analyst", formFields: "[object Object]"
33. **Google Gemini** `lmChatGoogleGemini` — options: "[object Object]", modelName: "models/gemini-2.0-flash-001"
34. **Evaluation Criteria** `notionTool` — resource: **databasePage**, operation: **getAll**
35. **Google Gemini Model** `lmChatGoogleGemini` — options: "[object Object]", modelName: "models/gemini-2.0-flash"
36. **Sticky Note1** `stickyNote` — configured for its default action.
37. **Sticky Note27** `stickyNote` — width: "960", content: "# Processes Application and extracts resume"
38. **Sticky Note28** `stickyNote` — width: "920", content: "# Summarizes Applicant’s Education, Job History, and Skills"
39. **Sticky Note29** `stickyNote` — width: "860", content: "# Gets role specific Job Description from Notion"
40. **Sticky Note30** `stickyNote` — width: "1040", content: "# Scores Applicant’s resume, adding applicant record to Notion"
41. **Sticky Note31** `stickyNote` — width: "560", content: "# Receives AI Voice agent interview from Elevenlabs  "
42. **Sticky Note32** `stickyNote` — width: "460", content: "# Scores interview and provides assessment"
43. **Sticky Note33** `stickyNote` — width: "1700", content: "# Updates applicant record with AI Interview Assessment and Interview Audio file"
44. **ai_convo_items** `set` — options: "[object Object]", assignments: "[object Object]"
45. **Upload CV** `googleDrive` — driveId: "[object Object]", options: "[object Object]", folderId: "[object Object]"
46. **Application Data** `set` — options: "[object Object]", assignments: "[object Object]", includeOtherFields: "true"
47. **AI Agent** `agent` — text: "={{ $json.full_transcript }}", options: "[object Object]", promptType: "define"
48. **Resume URL** `set` — options: "[object Object]", assignments: "[object Object]"
49. **Extract Resume** `extractFromFile` — operation: **pdf**
50. **Applicant Record** `notion` — resource: **databasePage**, operation: **getAll**
51. **Wait** `wait` — configured for its default action.
52. **Applicant Qualifications** `informationExtractor` — text: "={{ $json.text }}", options: "[object Object]", attributes: "[object Object]"
53. **Applicant Personal Data** `informationExtractor` — text: "={{ $json.text }}", options: "[object Object]", schemaType: "manual"
54. **Filter_Notion_db** `filter` — options: "[object Object]", conditions: "[object Object]"
55. **Get Applicant Record** `notion` — resource: **databasePage**, operation: **getAll**
56. **Merge** `merge` — mode: "combine", options: "[object Object]", combineBy: "combineAll"
57. **Update_Applicant_Record** `notion` — resource: **databasePage**, operation: **update**
58. **Embed Resume in Notion** `notion` — resource: **databasePage**, operation: **update**
59. **Applicant Summary** `chainSummarization` — options: "[object Object]"
60. **Extract_Audio** `httpRequest` — url: `=https://api.elevenlabs.io/v1/convai/conversations/{{ $node["ai_convo_items"].json.ai_screen_conversation_id }}/audio`
61. **Get Job Description** `notion` — resource: **databasePage**, operation: **getAll**
62. **Upload Audio to Drive** `googleDrive` — name: "={{ $json.name }}", driveId: "[object Object]", options: "[object Object]"
63. **Job Description Summary** `chainLlm` — text: "={{ $json.property_job_description }}", messages: "[object Object]", promptType: "define"
64. **Link Audio in Notion** `notion` — resource: **databasePage**, operation: **update**
65. **Job Description Mapping** `set` — options: "[object Object]", assignments: "[object Object]"
66. **HR Expert** `chainLlm` — text: "=Profile received:
{{ $json.job_description }}

Candidate:
{{ $('Applicant Summary').item.json.response.text }}", messages: "[object Object]", promptType: "define"
67. **Applicant Data Backup** `googleSheets` — operation: **append**
68. **Create Applicant Record** `notion` — resource: **databasePage**

## 💡 AI-Powered Ideas for Improvement
**Explain:** This n8n workflow automates the hiring process by handling candidate applications. It starts by extracting application data from forms and resumes, summarizes qualifications, and compares them to job descriptions from a Notion database. An AI agent evaluates the resume against job criteria, providing a score and rationale. The workflow updates applicant records in Notion, stores data in Google Sheets for compliance, and manages audio from AI interviews, ensuring a streamlined recruitment process.

**Demonstrate:** A recruitment agency can use this workflow to automate initial candidate screening, reducing manual resume reviews and ensuring consistent evaluation against job criteria, leading to faster hiring decisions.

**Imitate:** 1. Import the workflow into n8n. 2. Connect Notion, Google Sheets, and ElevenLabs accounts. 3. Customize the application forms and Notion database for your job roles. 4. Test the workflow with sample data to ensure it evaluates and updates records correctly.

**Practice:** Create a mock job application and submit it through the form. Observe how the workflow processes the data, evaluates the resume, and updates Notion and Google Sheets. Adjust parameters to see different outcomes.

**WIIFM:** Mastering this workflow allows you to offer automated recruitment solutions, improving efficiency and consistency in hiring processes. This can attract clients seeking to enhance their recruitment operations, increasing your service offerings and revenue potential.

## 🔧 Setup Instructions
1. **Connect Credentials:** googleDriveOAuth2Api, notionApi, googleSheetsOAuth2Api, googlePalmApi.
2. **Data Mapping:** Verify base/sheet IDs and column names match exactly to prevent silent failures.
3. **API Contracts:** Validate required headers and 2xx/4xx handling; add retries for 429/5xx.

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
