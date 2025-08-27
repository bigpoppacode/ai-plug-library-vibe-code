# Webhook Code Automate Webhook
## 🚀 What It Does
Automates a flow using stickyNote×16, httpRequest×4, erpNext×3.

## 💼 Business Use Case
Use as a **glue/API broker**: receive data, enrich/validate via APIs, and pass to downstream systems.

## ⚙️ How It Works
1. **Trigger:** This workflow starts with **Sticky Note4**.
2. **Sticky Note4** `stickyNote` — color: "6", width: "429.96763122593137", height: "322"
3. **Sticky Note6** `stickyNote` — color: "5", width: "677", height: "660"
4. **Sticky Note** `stickyNote` — color: "7", width: "477.2230145794152", height: "648.5051458745238"
5. **Sticky Note2** `stickyNote` — color: "5", width: "398", height: "642"
6. **Sticky Note5** `stickyNote` — color: "6", width: "258", height: "638.3801467714094"
7. **Sticky Note7** `stickyNote` — color: "4", width: "406.7864870360547", height: "662"
8. **Sticky Note8** `stickyNote` — color: "6", width: "438", height: "662"
9. **Google Gemini Chat Model** `lmChatGoogleGemini` — options: "[object Object]", modelName: "models/gemini-2.0-flash-exp"
10. **Sticky Note9** `stickyNote` — color: "5", width: "226.43884349833064", height: "682"
11. **Sticky Note10** `stickyNote` — color: "3", width: "875.658619343735", height: "302"
12. **Sticky Note11** `stickyNote` — color: "4", width: "475.27306699862953", height: "636.1483291619771"
13. **Webhook** `webhook` — method: **POST**, path: `/syncbricks-com-tutorial-candidate-shortlist`
14. **Sticky Note12** `stickyNote` — color: "6", width: "613.5767730410602", height: "654.6630436071407"
15. **Sticky Note13** `stickyNote` — color: "6", width: "429.96763122593137", height: "310.20584626167124"
16. **Txt File to Text (Example)** `extractFromFile` — operation: **text**
17. **Sticky Note14** `stickyNote` — color: "6", width: "374.6910896370089", height: "662"
18. **Sticky Note15** `stickyNote` — color: "3", width: "394.2810709723076", height: "308.0357387860514"
19. **Sticky Note16** `stickyNote` — color: "4", width: "385.4472695263088", height: "308.0357387860514"
20. **Sticky Note17** `stickyNote` — color: "6", width: "338.3336618143153", height: "623.107990360008"
21. **Code** `code` — jsCode: "// Loop over input items and add a new field called 'myNewField' to the JSON of each one
for (const item of $input.all()) {
 item.json.myNewField = 1;
}

return $input.all();"
22. **ApplicantData** `set` — options: "[object Object]", assignments: "[object Object]"
23. **Resume Link Provided** `if` — options: "[object Object]", conditions: "[object Object]"
24. **Applied Against Job** `if` — options: "[object Object]", conditions: "[object Object]"
25. **ERPNext - Reject if Resume not Attached** `erpNext` — operation: **update**
26. **Reume Attachment Link** `set` — options: "[object Object]", assignments: "[object Object]"
27. **ERPNext - Hold Applicant** `erpNext` — operation: **update**
28. **File Type** `switch` — rules: "[object Object]", options: "[object Object]"
29. **Download PDF Resume** `httpRequest` — url: `={{ $json.body.resume_attachment }}`
30. **PDF to Text** `extractFromFile` — operation: **pdf**
31. **Merge1** `merge` — configured for its default action.
32. **Get Job Opening** `erpNext` — operation: **get**
33. **Recruitment AI Agent** `agent` — text: "=System Prompt : 
You are a highly skilled AI agent trained to compare and analyze text from resumes against job descriptions. Your primary goal is to assess whether the candidate …[truncated]", agent: "reActAgent", options: "[object Object]"
34. **Convert to Fields** `code` — jsCode: "// Input text from the `output` field
const textOutput = $json.output || '';

// Function to extract values from the text
function extractFields(text) {
 const fields = {};

 // Re…[truncated]"
35. **Update Applicant Data** `httpRequest` — method: **PUT**, url: `=https://erpnext.syncbricks.com/api/resource/Job Applicant/{{ $('ApplicantData').item.json.body.name }}`
36. **If score less than 80** `if` — options: "[object Object]", conditions: "[object Object]", looseTypeValidation: "true"
37. **Reject Applicant** `httpRequest` — method: **PUT**, url: `=https://erpnext.syncbricks.com/api/resource/Job Applicant/{{ $('ApplicantData').item.json.body.name }}`
38. **Accept Applicant** `httpRequest` — method: **PUT**, url: `=https://erpnext.syncbricks.com/api/resource/Job Applicant/{{ $('ApplicantData').item.json.body.name }}`
39. **Microsoft Outlook** `microsoftOutlook` — additionalFields: "[object Object]"
40. **WhatsApp Business Cloud** `whatsApp` — operation: **send**

## 💡 AI-Powered Ideas for Improvement
**Explain:** This workflow automates the process of evaluating job applicants by analyzing their resumes against job descriptions in ERPNext. It starts with receiving application data via a webhook, checks if a resume is attached, and downloads it. The resume is converted from PDF to text and analyzed by an AI agent to determine the candidate's fit for the job. The results are updated in ERPNext, and applicants are either accepted or rejected based on their scores, with notifications sent via email or WhatsApp.

**Demonstrate:** A recruitment agency can use this workflow to streamline the applicant shortlisting process, saving time and ensuring consistency by using AI to evaluate resumes against job criteria, thus focusing on the most suitable candidates.

**Imitate:** 
1. Import the workflow into n8n.
2. Configure the webhook to receive job application data.
3. Set up ERPNext credentials and ensure job descriptions are accessible.
4. Connect an AI service like OpenAI for resume analysis.
5. Test the workflow with sample application data.

**Practice:** Create a test scenario with a few sample resumes and job descriptions in ERPNext. Run the workflow to see how it processes each application, evaluates the fit, updates the status, and sends notifications.

**WIIFM:** Mastering this workflow enables you to offer advanced recruitment automation services, enhancing efficiency and accuracy in candidate selection. This can attract more clients and generate income by providing a high-value service in the AI automation sector.

## 🔧 Setup Instructions
1. **Connect Credentials:** erpNextApi, googlePalmApi, microsoftOutlookOAuth2Api, whatsAppApi.
2. **API Contracts:** Validate required headers and 2xx/4xx handling; add retries for 429/5xx.

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
