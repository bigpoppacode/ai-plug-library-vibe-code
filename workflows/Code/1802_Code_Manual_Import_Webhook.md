# Code Manual Import Webhook
  ## 🚀 What It Does
  Automates a flow using stickyNote×4, httpRequest×2, googleDrive×2.
  
  ## 💼 Business Use Case
  Use as a **glue/API broker**: receive data, enrich/validate via APIs, and pass to downstream systems.
  
  ## ⚙️ How It Works
  1. **Trigger:** This workflow starts with **When clicking ‘Test workflow’**.
  2. **When clicking ‘Test workflow’** `manualTrigger` — configured for its default action.
3. **Sticky Note** `stickyNote` — color: "6", width: "460", height: "360"
4. **Sticky Note1** `stickyNote` — color: "5", width: "380", height: "360"
5. **Sticky Note2** `stickyNote` — color: "4", width: "400", height: "360"
6. **Sticky Note3** `stickyNote` — color: "7", width: "500", height: "320"
7. **Get TikTok Video Page Data** `httpRequest` — url: `https://www.tiktok.com/@randomspamvideos25/video/7251387037834595630`
8. **Scrape raw video URL** `code` — jsCode: "const html = $input.first().json.data;
const headers = $input.first().json.headers || {};
const cookies = headers['set-cookie'] || [];

if (!html) {
  throw new Error("HTML body is…[truncated]"
9. **Output video file without watermark** `httpRequest` — url: `={{ $json.videoUrl }}`
10. **Upload to Google Drive** `googleDrive` — name: "={{ $node["Get TikTok Video Page Data"].parameter["url"].match(/\/video\/(\d+)/)[1] + ".mp4" }}", driveId: "[object Object]", options: "[object Object]"
11. **Set file permissions to public with link** `googleDrive` — operation: **share**
  
  ## 💡 AI-Powered Ideas for Improvement
  ### Explain
This n8n workflow automates the process of downloading a TikTok video without a watermark and uploading it to Google Drive. It begins by manually triggering the workflow to fetch the video page data, scrapes the raw video URL, downloads the video file without a watermark, and uploads it to Google Drive. Finally, it sets the file permissions to be public with a link.

### Demonstrate
A social media manager could use this workflow to save time by quickly downloading and storing TikTok videos for content repurposing or archiving, ensuring that they have access to the original video files without watermarks.

### Imitate
1. Import the workflow into n8n.
2. Replace the TikTok URL in the HTTP Request node with your desired video URL.
3. Connect your Google Drive account.
4. Test the workflow using the manual trigger.
5. Ensure the video uploads correctly to Google Drive and is accessible via a public link.

### Practice
Create a test Google Drive folder and run the workflow with a sample TikTok video URL. Verify that the video appears in your Google Drive without a watermark and that the link sharing settings allow public access.

### WIIFM
Mastering this workflow allows you to offer services to clients who need to manage TikTok content efficiently. It can enhance your service offerings in social media management and digital marketing, potentially increasing your business revenue through specialized automation solutions.
  
  ## 🔧 Setup Instructions
  1. **Connect Credentials:** googleDriveOAuth2Api.
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
  