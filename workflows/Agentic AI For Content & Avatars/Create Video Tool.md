# Create Video Tool
## 🚀 What It Does
Calls external APIs and uses **AI** to transform or decide, then routes the result downstream.

## 💼 Business Use Case
Use as a **glue/API broker**: receive data, enrich/validate via APIs, and pass to downstream systems.

## ⚙️ How It Works
1. **Trigger:** This workflow starts with **When Executed by Another Workflow**.
2. **When Executed by Another Workflow** `executeWorkflowTrigger` — workflowInputs: "[object Object]"
3. **Sticky Note5** `stickyNote` — content: "# Trigger
", height: "260", width: "212"
4. **Sticky Note1** `stickyNote` — content: "# Generate Video

", height: "260", width: "732"
5. **Sticky Note7** `stickyNote` — content: "# Send Content", height: "240", width: "300"
6. **Sticky Note6** `stickyNote` — content: "# Write to Drive", height: "240", width: "300"
7. **Generate Video** `httpRequest` — method: **POST**, url: `https://queue.fal.run/fal-ai/veo3/fast`
8. **1 Minute** `wait` — amount: "1", unit: "minutes"

## 💡 AI-Powered Ideas for Improvement
### Explain
This n8n workflow automates the creation and distribution of videos. It starts when executed by another workflow, generates a video using an external service based on specific inputs (like prompt and aspect ratio), waits for processing, retrieves the result, and then downloads the video. The video is then sent to a specified Telegram chat and uploaded to a Google Drive folder.

### Demonstrate
A content creator or social media manager could use this workflow to automate the production of promotional videos. It streamlines the process from video creation to distribution, saving time and ensuring consistency across platforms.

### Imitate
1. Import the workflow into n8n.
2. Configure your credentials for the video service, Telegram, and Google Drive.
3. Set up another workflow to trigger this one with the necessary inputs.
4. Test the workflow to ensure videos are generated and distributed correctly.

### Practice
Create a simple video generation workflow using mock data. Run the workflow and check if the video is sent to Telegram and uploaded to Google Drive. Modify inputs like aspect ratio and prompt to see how it affects the output.

### WIIFM
Mastering this workflow enables you to offer automated video content creation services, appealing to digital marketers and influencers. This can enhance your service portfolio, attract new clients, and increase revenue through automation-driven efficiency.

## 🔧 Setup Instructions
1. **Connect Credentials:** httpHeaderAuth, googleDriveOAuth2Api, telegramApi.
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
