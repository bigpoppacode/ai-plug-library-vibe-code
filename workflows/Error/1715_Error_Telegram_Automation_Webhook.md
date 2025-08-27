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
8. **Telegram** `telegram` — text: "=🔔 ERROR SUBIENDO VIDEOS", chatId: "-4127128831", additionalFields: "[object Object]"
9. **Get Audio from Video** `openAi` — resource: **audio**, operation: **transcribe**
10. **Generate Description for Videos in Tiktok and Instagram** `openAi` — modelId: "[object Object]", options: "[object Object]", messages: "[object Object]"
11. **Read Video from Google Drive** `readBinaryFile` — filePath: "={{ $('Read video from Google Drive').item.json.originalFilename.replaceAll(" ", "_") }}", dataPropertyName: "datavideo"
12. **Read Video from Google Drive2** `readBinaryFile` — filePath: "={{ $('Read video from Google Drive').item.json.originalFilename.replaceAll(" ", "_") }}", dataPropertyName: "datavideo"
13. **Upload Video and Description to Tiktok** `httpRequest` — method: **POST**, url: `https://api.upload-post.com/api/upload`
14. **Upload Video and Description to Instagram** `httpRequest` — method: **POST**, url: `https://api.upload-post.com/api/upload`
  
  ## 💡 AI-Powered Ideas for Improvement
  **Explain:**  
This n8n workflow automates the process of uploading videos to TikTok and Instagram. It starts by monitoring a Google Drive folder for new video files. Once a file is detected, it downloads the video, extracts the audio, and uses OpenAI to generate a description for social media posts. The videos and their generated descriptions are then uploaded to TikTok and Instagram. If any errors occur during the upload process, a notification is sent via Telegram.

**Demonstrate:**  
A content creator can use this workflow to streamline their social media posting. By automating video uploads and description generation, they can save time and ensure consistent posting across platforms, boosting engagement and reach.

**Imitate:**  
1. Set up a Google Drive folder and connect it to n8n.
2. Configure the workflow to trigger when a new video is uploaded.
3. Set up OpenAI to generate descriptions from extracted audio.
4. Connect your TikTok and Instagram accounts for automatic uploads.
5. Test the workflow to ensure it runs smoothly.

**Practice:**  
Create a test video and upload it to the designated Google Drive folder. Observe how the workflow processes the video, generates a description, and uploads it to TikTok and Instagram. Adjust any parameters as needed.

**WIIFM:**  
Mastering this workflow allows you to offer automated social media management services to clients, saving them time and ensuring consistent content delivery. This can lead to increased client satisfaction and potential revenue growth for your automation business.
  
  ## 🔧 Setup Instructions
  1. **Connect Credentials:** googleDriveOAuth2Api, telegramApi, openAiApi, httpHeaderAuth.
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
  