# EditImage Manual Update Webhook
  ## 🚀 What It Does
  Calls external APIs and uses **AI** to transform or decide, then routes the result downstream.
  
  ## 💼 Business Use Case
  Use as a **glue/API broker**: receive data, enrich/validate via APIs, and pass to downstream systems.
  
  ## ⚙️ How It Works
  1. **Trigger:** This workflow starts with **When clicking ‘Test workflow’**.
  2. **When clicking ‘Test workflow’** `manualTrigger` — configured for its default action.
3. **Sticky Note** `stickyNote` — width: "365.05232558139534", height: "401.24529475392126", content: "## Try me out!

### This workflow converts a Candidate Resume PDF to an image which is then "read" by a Vision Language Model (VLM). The VLM assesses if the candidate's CV is a fit…[truncated]"
4. **Structured Output Parser** `outputParserStructured` — jsonSchemaExample: "{
	"is_qualified": true,
	"reason": ""
}"
5. **Sticky Note1** `stickyNote` — color: "7", width: "543.5706868577606", height: "563.6162790697684"
6. **Sticky Note2** `stickyNote` — color: "7", width: "605.0267171444024", height: "595.3148729042731"
7. **Sticky Note3** `stickyNote` — color: "7", width: "747.8139534883712", height: "603.1395348837208"
8. **Google Gemini Chat Model** `lmChatGoogleGemini` — options: "[object Object]", modelName: "models/gemini-1.5-pro-latest"
9. **Sticky Note4** `stickyNote` — width: "225.51725256895617", height: "418.95152406706313", content: "


















### Data Privacy Warning!
For demo purposes, we're using the public online version of Stirling PDF. It is recommended to setup your own private instance of Stirl…[truncated]"
10. **Download Resume** `googleDrive` — operation: **download**
11. **PDF-to-Image API** `httpRequest` — method: **POST**, url: `https://stirlingpdf.io/api/v1/convert/pdf/img`
12. **Resize Converted Image** `editImage` — operation: **resize**
13. **Candidate Resume Analyser** `chainLlm` — text: "=Evaluate the candidate's resume.", messages: "[object Object]", promptType: "define"
14. **Should Proceed To Stage 2?** `if` — options: "[object Object]", conditions: "[object Object]"
  
  ## 💡 AI-Powered Ideas for Improvement
  **Explain**  
This workflow automates the process of evaluating candidate resumes. It downloads a resume from Google Drive, converts the PDF to an image, and uses a Vision Language Model (VLM) to assess the candidate's suitability for a role. The workflow helps identify if a candidate is qualified and provides reasons for the decision.

**Demonstrate**  
A recruiting agency could use this workflow to quickly screen resumes and identify top candidates for interviews, saving significant time and effort in the hiring process.

**Imitate**  
1. Import the workflow into n8n.
2. Connect your Google Drive and Stirling PDF accounts.
3. Set up the workflow to trigger manually or on a schedule.
4. Customize the role evaluation criteria in the Candidate Resume Analyser.
5. Test the workflow with a sample resume.

**Practice**  
Create a test Google Drive folder with sample resumes. Run the workflow and note how it evaluates each resume. Modify the evaluation criteria and observe changes in the output.

**WIIFM**  
Mastering this workflow allows you to offer efficient resume screening services, enhancing your recruitment process. This can attract more clients and generate additional income by streamlining hiring decisions with AI-driven assessments.
  
  ## 🔧 Setup Instructions
  1. **Connect Credentials:** googleDriveOAuth2Api, googlePalmApi.
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
  