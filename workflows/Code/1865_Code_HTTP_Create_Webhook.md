# Code HTTP Create Webhook
  ## 🚀 What It Does
  Calls external APIs and uses **AI** to transform or decide, then routes the result downstream.
  
  ## 💼 Business Use Case
  Use as a **glue/API broker**: receive data, enrich/validate via APIs, and pass to downstream systems.
  
  ## ⚙️ How It Works
  1. **Trigger:** This workflow starts with **New Video?**.
  2. **New Video?** `googleDriveTrigger` — event: "fileCreated", options: "[object Object]", pollTimes: "[object Object]"
3. **2.5FlashPrev** `lmChatGoogleGemini` — options: "[object Object]", modelName: "models/gemini-2.5-flash-preview-04-17"
4. **Sticky Note** `stickyNote` — color: "4", width: "700", height: "240"
5. **Sticky Note1** `stickyNote` — color: "4", width: "2660", height: "500"
6. **Download New Video** `googleDrive` — operation: **download**
7. **Upload Video to Youtube** `youTube` — resource: **video**, operation: **upload**
8. **ApifyToken** `set` — options: "[object Object]", assignments: "[object Object]"
9. **Get Transcript** `httpRequest` — method: **POST**, url: `=https://api.apify.com/v2/acts/pintostudio~youtube-transcript-scraper/run-sync-get-dataset-items`
10. **Adjust Transcript Format** `code` — jsCode: "const items = $input.all();

const transcriptStrings = items.flatMap(item => {
  const dataArray = item.json.data;

  if (!dataArray || !Array.isArray(dataArray)) {
    return [];
…[truncated]"
11. **Create Description** `openAi` — modelId: "[object Object]", options: "[object Object]", messages: "[object Object]"
12. **YT Tags** `agent` — text: "=Now follows the actual topic/transcript. Give me the YouTube tags for it:

{{ $('Adjust Transcript Format').item.json.transcript }}", options: "[object Object]", promptType: "define"
13. **YT Title** `openAi` — modelId: "[object Object]", options: "[object Object]", messages: "[object Object]"
14. **Update Video's Metadata** `youTube` — resource: **video**, operation: **update**
15. **Delete File from Upload Folder (Optional)** `googleDrive` — operation: **deleteFile**
  
  ## 💡 AI-Powered Ideas for Improvement
  **Explain:**  
This n8n workflow automates the process of uploading new videos to YouTube. It begins by detecting a new video file in a specific Google Drive folder. Once detected, the video is downloaded and uploaded to YouTube. It then retrieves the video's transcript, formats it, and uses AI to generate a video description, title, and tags. These metadata elements are then updated on YouTube, enhancing the video's SEO. Finally, the original file can be deleted from Google Drive to save space.

**Demonstrate:**  
A YouTuber can use this workflow to streamline video uploads, ensuring every video is optimized with an AI-generated description, title, and tags, saving time and enhancing visibility.

**Imitate:**  
1. Import the workflow into n8n.
2. Connect your Google Drive and YouTube accounts.
3. Set the Google Drive folder to monitor for new videos.
4. Test the workflow with a sample video to see how it generates and updates metadata.

**Practice:**  
Create a test Google Drive folder and upload a sample video. Run the workflow to see it in action, then check YouTube to verify the video has been uploaded with the correct metadata.

**WIIFM:**  
Mastering this workflow can help you offer automated video optimization services, providing value to content creators by saving them time and improving their video SEO, which can lead to increased views and revenue.
  
  ## 🔧 Setup Instructions
  1. **Connect Credentials:** googleDriveOAuth2Api, openAiApi, googlePalmApi, youTubeOAuth2Api.
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
  