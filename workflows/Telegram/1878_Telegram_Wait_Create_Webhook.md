# Telegram Wait Create Webhook
## 🚀 What It Does
Moves data between apps and a **database/spreadsheet**, with logic and optional AI steps.

## 💼 Business Use Case
Use as a **glue/API broker**: receive data, enrich/validate via APIs, and pass to downstream systems.

## ⚙️ How It Works
1. **Trigger:** This workflow starts with **Trigger Telegram Prompt or Image**.
2. **Sticky Note3** `stickyNote` — color: "3", width: "880", height: "1900"
3. **Sticky Note** `stickyNote` — width: "2260", height: "760", content: "# 🟫 STEP 1 — Create Video Using AI (image or text)
## This step handles the full video creation pipeline using AI.
### It starts from a Telegram message containing a prompt or ima…[truncated]"
4. **Sticky Note1** `stickyNote` — width: "1500", height: "520", content: "# 🟫 STEP 2 — Create Music
## Here, a short-form voice-over script is generated using GPT-4 based on the topic.
### The script is converted to speech, uploaded, and merged with the…[truncated]"
5. **Sticky Note2** `stickyNote` — width: "1500", height: "460", content: "# 🟫 STEP 3 — Add Captions to Enhance Engagement
## To increase accessibility and boost social engagement, 
## this step overlays professional-looking subtitles on the video using …[truncated]"
6. **Sticky Note4** `stickyNote` — color: "4", width: "680", height: "1060"
7. **Trigger Telegram Prompt or Image** `telegramTrigger` — updates: "message", additionalFields: "[object Object]"
8. **Split Prompt or Image Input** `code` — jsCode: "const input = $input.first().json.message.text || $input.first().json.message.caption;

// Remove optional "generate video" prefix
const cleaned = input.replace(/^generate video[:]…[truncated]"
9. **Condition Input Type (Image or Text)** `if` — options: "[object Object]", conditions: "[object Object]"
10. **Generate Video with blotato** `httpRequest` — method: **POST**, url: `https://backend.blotato.com/v2/videos/creations`
11. **Download Image from Telegram** `telegram` — resource: **file**
12. **Wait for blotato Video Rendering** `wait` — unit: "minutes", amount: "2"
13. **Extract Image File URL** `httpRequest` — url: `[redacted]`
14. **Get blotato Video URL** `httpRequest` — url: `=https://backend.blotato.com/v2/videos/creations/{{ $json.item.id }}`
15. **Upload Image to Cloudinary** `httpRequest` — method: **POST**, url: `https://api.cloudinary.com/v1_1/dc5wapno3/image/upload`
16. **Convert Image to Video** `httpRequest` — method: **POST**, url: `https://api.piapi.ai/api/v1/task`
17. **Wait for Image-to-Video Rendering** `wait` — unit: "minutes", amount: "2"
18. **Get Image-Based Video URL** `httpRequest` — url: `=https://api.piapi.ai/api/v1/task/{{ $json.data.task_id }}`
19. **Merge Video Data (Image or Prompt)** `set` — options: "[object Object]", assignments: "[object Object]"
20. **Generate Music with Piapi** `httpRequest` — method: **POST**, url: `https://api.piapi.ai/api/v1/task`
21. **Wait for Music Generation** `wait` — unit: "minutes", amount: "2"
22. **Get Music File URL** `httpRequest` — url: `=https://api.piapi.ai/api/v1/task/{{ $json.data.task_id }}`
23. **Generate Script (GPT-4o-mini)** `openAi` — modelId: "[object Object]", options: "[object Object]", messages: "[object Object]"
24. **Split Script** `code` — jsCode: "const input = $input.first().json;

// Auto-detect AI output path
let aiOutput = "";

if (input?.choices?.[0]?.message?.content) {
  aiOutput = input.choices[0].message.content;
} …[truncated]"
25. **Merge Video + Music** `httpRequest` — method: **POST**, url: `https://api.json2video.com/v2/movies`
26. **Wait for Fusion Completion** `wait` — unit: "minutes", amount: "1"
27. **Get Final Video URL** `httpRequest` — url: `=https://api.json2video.com/v2/movies?id={{ $json.project }}`
28. **Generate Social Caption (GPT-4)** `openAi` — modelId: "[object Object]", options: "[object Object]", messages: "[object Object]"
29. **Generate SEO Title (GPT-4)** `openAi` — modelId: "[object Object]", options: "[object Object]", messages: "[object Object]"
30. **Append Video Data to Google Sheet** `googleSheets` — operation: **append**
31. **Send Final Video to Telegram** `telegram` — text: "=Here's your scheduled video:
----------------
Caption Text: {{ $json.caption }}
----------------
Video Link: {{ $json['url '] }}", chatId: "={{ $('Trigger Telegram Prompt or Image').first().json.message.chat.id }}", additionalFields: "[object Object]"
32. **Send Caption to Telegram** `telegram` — operation: **sendVideo**
33. **Assign Platform IDs for Blotato** `set` — mode: "raw", options: "[object Object]", jsonOutput: "{
  "instagram_id": "1111",
  "youtube_id": "2222",
  "threads_id": "3333",
  "tiktok_id": "4444",
  "facebook_id": "5555",
  "facebook_page_id": "6666",
  "twitter_id": "7777",
  …[truncated]"
34. **Upload Video to Blotato** `httpRequest` — method: **POST**, url: `https://backend.blotato.com/v2/media`
35. **Post to Instagram** `httpRequest` — method: **POST**, url: `https://backend.blotato.com/v2/posts`
36. **Post to YouTube** `httpRequest` — method: **POST**, url: `https://backend.blotato.com/v2/posts`
37. **Post to TikTok** `httpRequest` — method: **POST**, url: `https://backend.blotato.com/v2/posts`
38. **Post to Facebook Page** `httpRequest` — method: **POST**, url: `https://backend.blotato.com/v2/posts`
39. **Post to Threads** `httpRequest` — method: **POST**, url: `https://backend.blotato.com/v2/posts`
40. **Post to Twitter (X)** `httpRequest` — method: **POST**, url: `https://backend.blotato.com/v2/posts`
41. **Post to LinkedIn** `httpRequest` — method: **POST**, url: `https://backend.blotato.com/v2/posts`
42. **Post to Bluesky** `httpRequest` — method: **POST**, url: `https://backend.blotato.com/v2/posts`
43. **Post to Pinterest** `httpRequest` — method: **POST**, url: `https://backend.blotato.com/v2/posts`

## 💡 AI-Powered Ideas for Improvement
### Explain
This n8n workflow automates the creation of social media videos using AI. It starts by receiving a prompt or image from Telegram, processes it to generate a video with Blotato, adds music and captions, and then publishes the video to multiple social media platforms like Instagram, YouTube, and TikTok. The workflow also saves the video details to a Google Sheet and notifies the user via Telegram.

### Demonstrate
A social media manager could use this workflow to automate video content creation and distribution across multiple platforms, saving time and ensuring consistent posting schedules. This can enhance engagement and streamline marketing efforts.

### Imitate
1. Import the workflow into n8n.
2. Connect Telegram, Blotato, and social media accounts.
3. Set up your Google Sheets for video data logging.
4. Customize video prompts and styles as needed.
5. Test the workflow by sending a prompt via Telegram and monitor the video creation and distribution process.

### Practice
Create a test Telegram group and send different prompts or images. Observe how the workflow processes these inputs, generates videos, and posts them to your test social media accounts. Adjust parameters to see variations in output.

### WIIFM
Mastering this workflow allows you to offer automated content creation services, reducing manual labor and increasing efficiency for clients. This expertise can attract more clients, boost your service offerings, and generate additional income in the digital marketing and AI automation sectors.

## 🔧 Setup Instructions
1. **Connect Credentials:** telegramApi, httpBasicAuth, httpHeaderAuth, openAiApi, httpCustomAuth.
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
