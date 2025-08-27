# Telegram Wait Automation Webhook
## 🚀 What It Does
Moves data between apps and a **database/spreadsheet**, with logic and optional AI steps.

## 💼 Business Use Case
Use as a **glue/API broker**: receive data, enrich/validate via APIs, and pass to downstream systems.

## ⚙️ How It Works
1. **Trigger:** This workflow starts with **Trigger: Telegram Prompt**.
2. **Sticky Note** `stickyNote` — width: "2640", height: "420", content: "# 🟫 STEP 1 — Create Video Using AI
## This step handles the full video creation pipeline using AI.
### It starts from a Telegram message containing a prompt, 
### refines the prom…[truncated]"
3. **Sticky Note1** `stickyNote` — width: "2640", height: "260", content: "# 🟫 STEP 2 — Add Voice-Over to Video
## Here, a short-form voice-over script is generated using GPT-4 based on the topic.
### The script is converted to speech, uploaded, and merg…[truncated]"
4. **Sticky Note3** `stickyNote` — color: "3", width: "2640", height: "540"
5. **Sticky Note4** `stickyNote` — width: "2640", height: "260", content: "# 🟫 STEP 4 — Save Video & Notify via Telegram
## This step generates a title and caption for the video, 
## saves the content metadata to a Google Sheet for future tracking, 
### …[truncated]"
6. **Sticky Note2** `stickyNote` — width: "2640", height: "260", content: "# 🟫 STEP 3 — Add Captions to Enhance Engagement
## To increase accessibility and boost social engagement, 
## this step overlays professional-looking subtitles on the video using …[truncated]"
7. **Trigger: Telegram Prompt** `telegramTrigger` — updates: "message", additionalFields: "[object Object]"
8. **OpenAI Model Bridge** `lmChatOpenAi` — model: `[object Object]`
9. **Extract Prompt & Caption** `code` — jsCode: "
  inputText=$input.first().json.message.text;
  // Remove "generate video" prefix (case-insensitive) and trim whitespace
  const cleaned = inputText.replace(/^generate video/i, ''…[truncated]"
10. **Transform Prompt for Kling (GPT-4)** `agent` — text: "={{ $json.videoPrompt }}", options: "[object Object]", promptType: "define"
11. **Generate Video via Kling API** `httpRequest` — method: **POST**, url: `https://api.piapi.ai/api/v1/task`
12. **Wait for Video Generation** `wait` — unit: "minutes", amount: "7"
13. **Get Generated Video URL** `httpRequest` — url: `=https://api.piapi.ai/api/v1/task/{{ $json.data.task_id }}`
14. **Generate Voice-Over Script** `openAi` — modelId: "[object Object]", options: "[object Object]", messages: "[object Object]"
15. **Convert Script to Audio (TTS)** `openAi` — resource: **audio**
16. **Upload Audio to Cloudinary** `httpRequest` — url: `https://api.cloudinary.com/v1_1/dc5wapno3/auto/upload`
17. **Merge Audio + Video** `httpRequest` — method: **POST**, url: `https://api.json2video.com/v2/movies`
18. **Wait for Audio/Video Fusion** `wait` — unit: "minutes", amount: "1"
19. **Get Video URL with Audio** `httpRequest` — url: `=https://api.json2video.com/v2/movies?id={{ $json.project }}`
20. **Wait Before Captioning** `wait` — amount: "30"
21. **Add Captions/Subtitles to Video** `httpRequest` — method: **POST**, url: `https://api.json2video.com/v2/movies`
22. **Wait for Caption Render** `wait` — unit: "minutes", amount: "1"
23. **Get Final Video URL (Audio + Captions)** `httpRequest` — url: `=https://api.json2video.com/v2/movies?id={{ $json.project }}`
24. **Generate Social Caption from Voiceover** `openAi` — modelId: "[object Object]", options: "[object Object]", messages: "[object Object]"
25. **Generate YouTube-Style Title** `openAi` — modelId: "[object Object]", options: "[object Object]", messages: "[object Object]"
26. **Save Video Metadata to Google Sheets** `googleSheets` — operation: **append**
27. **Send Final Video to Telegram** `telegram` — operation: **sendVideo**
28. **Send Caption Link via Telegram** `telegram` — text: "={{ $('Save Video Metadata to Google Sheets').item.json.DESCRIPTION }}

Link here : {{ $('Save Video Metadata to Google Sheets').item.json['URL VIDEO'] }}", chatId: "={{ $json.result.chat.id }}", additionalFields: "[object Object]"
29. **Assign Social Media IDs** `set` — mode: "raw", options: "[object Object]", jsonOutput: "{
  "instagram_id": "1687",
  "youtube_id": "873",
  "threads_id": "507",
  "tiktok_id": "2079",
  "facebook_id": "1759",
  "facebook_page_id": "101603614680195",
  "twitter_id": "…[truncated]"
30. **Upload Video to Blotato** `httpRequest` — method: **POST**, url: `https://backend.blotato.com/v2/media`
31. **Post to Instagram** `httpRequest` — method: **POST**, url: `https://backend.blotato.com/v2/posts`
32. **Post to YouTube** `httpRequest` — method: **POST**, url: `https://backend.blotato.com/v2/posts`
33. **Post to TikTok** `httpRequest` — method: **POST**, url: `https://backend.blotato.com/v2/posts`
34. **Post to Facebook Page** `httpRequest` — method: **POST**, url: `https://backend.blotato.com/v2/posts`
35. **Post to Threads** `httpRequest` — method: **POST**, url: `https://backend.blotato.com/v2/posts`
36. **Post to Twitter (X)** `httpRequest` — method: **POST**, url: `https://backend.blotato.com/v2/posts`
37. **Post to LinkedIn** `httpRequest` — method: **POST**, url: `https://backend.blotato.com/v2/posts`
38. **Post to Bluesky** `httpRequest` — method: **POST**, url: `https://backend.blotato.com/v2/posts`
39. **Post to Pinterest** `httpRequest` — method: **POST**, url: `https://backend.blotato.com/v2/posts`

## 💡 AI-Powered Ideas for Improvement
**Explain:** This workflow automates creating and distributing videos using AI. It begins with a Telegram message that serves as a prompt, which is refined by GPT-4 to generate a video via Kling's API. A voice-over script is created and converted to audio, which is merged with the video. Captions are added, and the final video is saved and shared via Telegram. The workflow also auto-publishes the video to various social media platforms using Blotato's API.

**Demonstrate:** A business owner could use this workflow to automate the creation and distribution of promotional videos across multiple social media platforms, saving time and ensuring consistent messaging.

**Imitate:** Import the workflow into n8n. Connect your Telegram, OpenAI, Google Sheets, and social media accounts. Customize the video prompts and social media messaging. Test the workflow with a sample prompt to ensure it generates and posts videos correctly.

**Practice:** Create a simple Telegram bot that sends a prompt to the workflow. Use a test prompt to generate a video and see how it is processed and distributed. Modify the captions and observe the changes in the final output.

**WIIFM:** Mastering this workflow allows you to offer automated video content creation and distribution services, attracting clients looking for efficient marketing solutions. This can significantly expand your service offerings and increase your income in the AI automation business.

## 🔧 Setup Instructions
1. **Connect Credentials:** telegramApi, openAiApi, httpHeaderAuth, httpBasicAuth, googleSheetsOAuth2Api.
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
