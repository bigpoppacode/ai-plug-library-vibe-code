# Wait Code Automation Webhook
## 🚀 What It Does
Moves data between apps and a **database/spreadsheet**, with logic and optional AI steps.

## 💼 Business Use Case
Use as a **glue/API broker**: receive data, enrich/validate via APIs, and pass to downstream systems.

## ⚙️ How It Works
1. **Trigger:** This workflow starts with **When clicking ‘Test workflow’**.
2. **When clicking ‘Test workflow’** `manualTrigger` — configured for its default action.
3. **Sticky Note** `stickyNote` — width: "820", height: "240", content: "## Create Image Background
Generate an image using prompt from Google Sheet via PiAPI Flux (Txt2img)."
4. **Sticky Note1** `stickyNote` — color: "3", width: "1180", height: "240"
5. **Sticky Note2** `stickyNote` — color: "4", width: "1180", height: "240"
6. **Sticky Note3** `stickyNote` — color: "5", width: "760", height: "300"
7. **Sticky Note4** `stickyNote` — color: "6", width: "340", height: "240"
8. **Sticky Note5** `stickyNote` — color: "6", width: "400", height: "300"
9. **Get data from Google Sheet** `googleSheets` — options: "[object Object]", filtersUI: "[object Object]", sheetName: "[object Object]"
10. **Generate Image** `httpRequest` — method: **POST**, url: `https://api.piapi.ai/api/v1/task`
11. **Wait image 2 min** `wait` — unit: "minutes", amount: "2"
12. **Get image** `httpRequest` — url: `=https://api.piapi.ai/api/v1/task/{{ $json.data.task_id }}`
13. **Update image background URL** `googleSheets` — operation: **update**
14. **Image-to-Video** `httpRequest` — method: **POST**, url: `https://api.piapi.ai/api/v1/task`
15. **Wait video 5 min** `wait` — unit: "minutes"
16. **Get Video** `httpRequest` — url: `=https://api.piapi.ai/api/v1/task/{{ $json.data.task_id }}`
17. **Get Binary Video Background** `httpRequest` — url: `={{ $json.data.output.video_url }}`
18. **Save Video Background Locally1** `readWriteFile` — operation: **write**
19. **Update video background URL** `googleSheets` — operation: **update**
20. **Generate Audio** `httpRequest` — method: **POST**, url: `https://api.elevenlabs.io/v1/sound-generation`
21. **Upload Sound to Google Drive** `googleDrive` — name: "={{ $('Get data from Google Sheet').item.json['Background (EN)'] }}.mp3", driveId: "[object Object]", options: "[object Object]"
22. **Save Music Background Locally1** `readWriteFile` — operation: **write**
23. **Update Sound background URL** `googleSheets` — operation: **update**
24. **Prepare Overlay Text (Quote & Author)1** `code` — jsCode: "// Define separate configuration for the quote and the author
const quoteFont = "Kanit-Italic.ttf";      
const quoteFontSize = 70;
const authorFont = "Kanit-Italic.ttf";     
cons…[truncated]"
25. **Generate Final Video Clip1** `executeCommand` — command: "=ffmpeg -i {{ $('Save Video Background Locally1').item.json.fileName }} -i {{ $('Save Music Background Locally1').item.json.fileName }} -filter_complex "[0:v]scale=1080:1920:force_…[truncated]"
26. **Initiate YouTube Resumable Upload** `httpRequest` — method: **POST**, url: `=https://www.googleapis.com/upload/youtube/v3/videos?part=snippet,status&uploadType=resumable`
27. **Read output file** `readWriteFile` — options: "[object Object]", fileSelector: "=output.mp4"
28. **Upload Video to YouTube** `httpRequest` — method: **PUT**, url: `={{ $('Initiate YouTube Resumable Upload').item.json.headers.location }}`
29. **Update Quote Upload Status** `googleSheets` — operation: **appendOrUpdate**

## 💡 AI-Powered Ideas for Improvement
**Explain:**  
This n8n workflow automates the creation and publication of a video on YouTube. It starts by retrieving data from a Google Sheet to generate an image using a prompt via PiAPI Flux. The image is then transformed into a video with PiAPI Kling, and audio is generated using ElevenLabs. The video and audio are merged with overlay text using FFmpeg, and the final video is uploaded to YouTube. The workflow updates Google Sheets with the status and links of the uploaded video.

**Demonstrate:**  
A content creator could use this workflow to automate the creation of motivational videos with quotes. They save time by letting the workflow handle video production and upload, allowing them to focus on content strategy and engagement.

**Imitate:**  
1. Set up a Google Sheet with prompts and quotes.
2. Connect n8n to Google Sheets, PiAPI, ElevenLabs, and YouTube.
3. Import the workflow and configure API keys.
4. Test the workflow with sample data.
5. Adjust parameters for desired video and audio output.

**Practice:**  
Create a simple quote in your Google Sheet and run the workflow. Check if the generated video meets your expectations. Modify the workflow to change video styles or audio settings and observe the results.

**WIIFM:**  
Mastering this workflow allows you to offer automated video creation services, attracting clients looking for cost-effective content production. This capability can differentiate your business, increase efficiency, and open new revenue streams in digital content creation.

## 🔧 Setup Instructions
1. **Connect Credentials:** googleSheetsOAuth2Api, googleDriveOAuth2Api, youTubeOAuth2Api.
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
