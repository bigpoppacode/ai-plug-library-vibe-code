# EditImage Manual Automation Webhook
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
  - **Explain**: This n8n workflow automates the evaluation of candidate resumes. It downloads a resume from Google Drive, converts it to an image using Stirling PDF, and then uses a Vision Language Model (VLM) to assess the candidate's suitability for a role. The workflow ensures that the resume is free from hidden prompts that might manipulate automated systems.

- **Demonstrate**: A recruitment agency could use this workflow to efficiently screen large volumes of resumes, ensuring that only qualified candidates are shortlisted, thereby saving time and reducing bias in the hiring process.

- **Imitate**: 
  1. Import the workflow into n8n.
  2. Connect Google Drive to download resumes.
  3. Set up Stirling PDF for image conversion.
  4. Configure the Vision Language Model for assessment.
  5. Test the workflow with sample resumes.

- **Practice**: Create a test Google Drive folder with sample resumes. Run the workflow to see how it processes and evaluates each resume. Experiment with altering the resumes to see how the workflow handles changes.

- **WIIFM**: Mastering this workflow enables you to offer efficient resume screening services, enhancing recruitment processes for clients. It can position you as a valuable partner in talent acquisition, potentially increasing your business revenue by offering advanced automation solutions.
  
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
  