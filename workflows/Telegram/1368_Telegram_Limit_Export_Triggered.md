# Telegram Limit Export Triggered
## 🚀 What It Does
Monitors events, processes them, and **notifies** people/apps (Slack/Email) with structured updates.

## 💼 Business Use Case
Great for **content, summarization, triage, or decisioning** where AI adds speed and consistency.

## ⚙️ How It Works
1. **Trigger:** This workflow starts with **Start Workflow**.
2. **Sticky Note** `stickyNote` — color: "3", width: "260", height: "280"
3. **Sticky Note1** `stickyNote` — color: "5", width: "1560", height: "280"
4. **Sticky Note2** `stickyNote` — color: "6", width: "1560", height: "280"
5. **Sticky Note3** `stickyNote` — color: "2", width: "460", height: "280"
6. **Sticky Note4** `stickyNote` — color: "4", width: "300", height: "300"
7. **Sticky Note5** `stickyNote` — width: "700", height: "340", content: "## Wait for Google Drive Trigger and Send for User Approval to Proceed (Human in the Loop)
(optional)"
8. **Sticky Note6** `stickyNote` — color: "2", width: "880", height: "300"
9. **Sticky Note7** `stickyNote` — width: "660", height: "480", content: "## 7️⃣ Send Transcription Report Links to User"
10. **Start Workflow** `manualTrigger` — configured for its default action.
11. **On File Created Trigger** `googleDriveTrigger` — event: "fileCreated", options: "[object Object]", pollTimes: "[object Object]"
12. **Gmail User for Approval** `gmail` — operation: **sendAndWait**
13. **Search Google Drive** `googleDrive` — resource: **fileFolder**
14. **Filter by .m4a extension** `filter` — options: "[object Object]", conditions: "[object Object]", looseTypeValidation: "true"
15. **Limit to last file** `limit` — keep: "lastItems"
16. **Download audio file** `googleDrive` — operation: **download**
17. **Transcribe with OpenAI** `openAi` — resource: **audio**, operation: **transcribe**
18. **Set Config** `set` — options: "[object Object]", assignments: "[object Object]"
19. **Summarize to JSON** `openAi` — modelId: "[object Object]", options: "[object Object]", messages: "[object Object]"
20. **Summarize to Structured JSON** `openAi` — modelId: "[object Object]", options: "[object Object]", messages: "[object Object]"
21. **Save Raw Transcript to Google Drive** `googleDrive` — operation: **createFromText**
22. **Convert JSON to Markdown** `openAi` — modelId: "[object Object]", options: "[object Object]", messages: "[object Object]"
23. **Get Filename for JSON** `set` — options: "[object Object]", assignments: "[object Object]"
24. **Get Filename for Markdown** `set` — options: "[object Object]", assignments: "[object Object]"
25. **Save JSON file to Google Drive** `googleDrive` — operation: **createFromText**
26. **Save Markdown file to Google Drive** `googleDrive` — operation: **createFromText**
27. **Get JSON File Meta** `googleDrive` — resource: **fileFolder**
28. **Get Markdown File Meta** `googleDrive` — resource: **fileFolder**
29. **Prepare Response JSON** `set` — options: "[object Object]", assignments: "[object Object]"
30. **Prepare Response Markdown** `set` — options: "[object Object]", assignments: "[object Object]"
31. **Merge All Paths** `merge` — mode: "combine", options: "[object Object]", combineBy: "combineByPosition"
32. **Send Telegram Message** `telegram` — text: "=Audio Transcribed and Reports Generated
{{ $json.id_json.webViewLink }}
{{ $json.id_markdown.webViewLink }}", chatId: "={{ $env.TELEGRAM_CHAT_ID }}", additionalFields: "[object Object]"
33. **Email Content Formatter** `openAi` — modelId: "[object Object]", options: "[object Object]", messages: "[object Object]"
34. **Send Gmail Message** `gmail` — sendTo: "={{ $env.EMAIL_ADDRESS_JOE }} ", message: "={{ $json.message.content }}", options: "[object Object]"

## 💡 AI-Powered Ideas for Improvement
### Explain
This n8n workflow automates the transcription of audio files uploaded to Google Drive. It starts with a manual trigger or waits for a new file in a specified Google Drive folder. Once an audio file is detected, it sends an approval request via Gmail. Upon approval, the workflow downloads the audio, transcribes it using OpenAI, and summarizes the transcript into both JSON and Markdown formats. These documents are saved back to Google Drive, and links to the files are sent to the user via Telegram and email.

### Demonstrate
A business owner could use this workflow to automate the transcription of meeting recordings. By streamlining the transcription and summarization process, it saves time and ensures that meeting notes are easily accessible and shareable, improving team communication and record-keeping.

### Imitate
1. Import the workflow into n8n.
2. Connect your Google Drive, OpenAI, Gmail, and Telegram accounts.
3. Set up the Google Drive trigger and adjust the folder path.
4. Customize the Gmail approval settings.
5. Test the workflow with a sample audio file to ensure it transcribes and sends the report links correctly.

### Practice
Create a test Google Drive folder and upload an audio file. Run the workflow and observe how it processes the file. Experiment with different audio formats and observe the results. Check how the JSON and Markdown summaries are generated and saved.

### WIIFM
Mastering this workflow allows you to offer transcription services to clients, saving them time and resources. Automating audio-to-text conversion and report generation can enhance your service offerings, attract new clients, and create income opportunities in the AI automation business.

## 🔧 Setup Instructions
1. **Connect Credentials:** gmailOAuth2, openAiApi, googleDriveOAuth2Api, telegramApi.
2. **Notification Targets:** Confirm channel/email IDs and that the bot/app is authorized to post.

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
