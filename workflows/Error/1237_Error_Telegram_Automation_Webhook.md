# Error Telegram Automation Webhook
  ## 🚀 What It Does
  Moves data between apps and a **database/spreadsheet**, with logic and optional AI steps.
  
  ## 💼 Business Use Case
  Use as a **glue/API broker**: receive data, enrich/validate via APIs, and pass to downstream systems.
  
  ## ⚙️ How It Works
  1. **Trigger:** This workflow starts with **Google Drive Trigger**.
  2. **Google Drive Trigger** `googleDriveTrigger` — event: "fileCreated", options: "[object Object]", pollTimes: "[object Object]"
3. **Error Trigger** `errorTrigger` — configured for its default action.
4. **Sticky Note** `stickyNote` — width: "860", height: "260", content: "[redacted]"
5. **Google Drive** `googleDrive` — operation: **download**
6. **If** `if` — options: "[object Object]", conditions: "[object Object]"
7. **Read video from Google Drive** `writeBinaryFile` — options: "[object Object]", fileName: "={{ $json.originalFilename.replaceAll(" ", "_") }}"
8. **Telegram** `telegram` — text: "=🔔 ERROR SUBIENDO VIDEOS", additionalFields: "[object Object]"
9. **Get Audio from Video** `openAi` — resource: **audio**, operation: **transcribe**
10. **Generate Description for Videos  in Tiktok and Instagram** `openAi` — modelId: "[object Object]", options: "[object Object]", messages: "[object Object]"
11. **Read Video from Google Drive** `readBinaryFile` — filePath: "={{ $('Read video from Google Drive').item.json.originalFilename.replaceAll(" ", "_") }}", dataPropertyName: "datavideo"
12. **Read Video from Google Drive2** `readBinaryFile` — filePath: "={{ $('Read video from Google Drive').item.json.originalFilename.replaceAll(" ", "_") }}", dataPropertyName: "datavideo"
13. **Read Video from Google Drive3** `readBinaryFile` — filePath: "={{ $('Read video from Google Drive').item.json.originalFilename.replaceAll(" ", "_") }}", dataPropertyName: "datavideo"
14. **Upload Video and Description to Tiktok** `httpRequest` — method: **POST**, url: `https://api.upload-post.com/api/upload`
15. **Upload Video and Description to Instagram** `httpRequest` — method: **POST**, url: `https://api.upload-post.com/api/upload`
16. **Upload Video and Description to Youtube** `httpRequest` — method: **POST**, url: `https://api.upload-post.com/api/upload`
  
  ## 💡 AI-Powered Ideas for Improvement
  **Explain**  
This n8n workflow automates video uploads to social media platforms. When a new video is added to a specific Google Drive folder, the workflow downloads it, extracts audio for transcription, generates engaging descriptions using OpenAI, and uploads the video with descriptions to TikTok, Instagram, and YouTube. Errors trigger a Telegram notification for troubleshooting.

**Demonstrate**  
A content creator can use this workflow to streamline posting videos across platforms, saving time and ensuring consistent branding. It automates the tedious process of manually uploading videos and creating descriptions, allowing the creator to focus on content creation.

**Imitate**  
1. Import the workflow to n8n.
2. Connect Google Drive and OpenAI accounts.
3. Set Google Drive folder to monitor for new videos.
4. Customize OpenAI prompts for your content.
5. Add your API tokens for social media uploads.
6. Test the workflow with a sample video.

**Practice**  
Create a test Google Drive folder and add a video. Run the workflow and check if the video uploads successfully with the generated description. Modify the OpenAI prompt to see how it affects the description's style and tone.

**WIIFM**  
Mastering this workflow enables you to offer social media automation services, saving clients time and enhancing their content reach. You can expand your service portfolio, attract more clients, and increase income by providing efficient, automated video content management.
  
  ## 🔧 Setup Instructions
  1. **Connect Credentials:** googleDriveOAuth2Api, openAiApi, httpHeaderAuth.
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
  