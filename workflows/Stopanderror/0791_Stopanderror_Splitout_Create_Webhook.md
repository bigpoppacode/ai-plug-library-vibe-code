# Stopanderror Splitout Create Webhook
## 🚀 What It Does
Monitors events, processes them, and **notifies** people/apps (Slack/Email) with structured updates.

## 💼 Business Use Case
Use as a **glue/API broker**: receive data, enrich/validate via APIs, and pass to downstream systems.

## ⚙️ How It Works
1. **Trigger:** Runs on a **schedule** (e.g., `[object Object]`).
2. **Schedule Trigger** `scheduleTrigger` — rule: "[object Object]"
3. **Sticky Note** `stickyNote` — color: "7", width: "220", height: "460"
4. **Sticky Note1** `stickyNote` — color: "5", width: "880", height: "460"
5. **Sticky Note2** `stickyNote` — color: "4", width: "440", height: "280"
6. **Sticky Note3** `stickyNote` — color: "3", width: "400", height: "280"
7. **Sticky Note4** `stickyNote` — color: "6", width: "260", height: "280"
8. **Sticky Note5** `stickyNote` — width: "220", height: "360", content: "## Manually filter out channels
To find the channel ID of a channel, click on the description → Share channel → Copy channel ID"
9. **Get my subscriptions** `httpRequest` — url: `https://www.googleapis.com/youtube/v3/subscriptions`
10. **Check for errors** `if` — options: "[object Object]", conditions: "[object Object]"
11. **If the HTTP request failed, throw the error** `stopAndError` — errorMessage: "=Status code: {{ $json.error.code }}
Message: {{ $json.error.message }}"
12. **Split out subscriptions to process individually** `splitOut` — options: "[object Object]", fieldToSplitOut: "items"
13. **Only keep channels with unwatched videos** `filter` — options: "[object Object]", conditions: "[object Object]"
14. **Filter out channels** `filter` — options: "[object Object]", conditions: "[object Object]"
15. **Get latest 15 videos of each channel** `rssFeedRead` — url: `=https://www.youtube.com/feeds/videos.xml?channel_id={{ $json.snippet.resourceId.channelId }}`
16. **Keep only videos published since last run** `filter` — options: "[object Object]", conditions: "[object Object]"
17. **Get video details** `youTube` — resource: **video**, operation: **get**
18. **Filter out shorts** `if` — options: "[object Object]", conditions: "[object Object]"
19. **Send an email for each new video** `emailSend` — html: "=<h1 style="text-align: center;">{{ $json.snippet.title }}</h1>
<a href="https://www.youtube.com/watch?v={{ $json.id }}">
  <img src="{{ $json.snippet.thumbnails[Object.keys($json.…[truncated]", options: "[object Object]", subject: "={{ $json.snippet.channelTitle }}"

## 💡 AI-Powered Ideas for Improvement
### Explain
This n8n workflow automates the process of monitoring YouTube subscriptions for new videos. It checks for new videos from subscribed channels using the YouTube API and RSS feeds, filters out unwanted content like shorts, and sends an email notification with video details for each new video found. The process is triggered every hour to ensure timely updates.

### Demonstrate
A YouTube content manager could use this workflow to stay updated on new videos from channels they follow, ensuring they never miss relevant content. This can be crucial for timely content curation or competitive analysis.

### Imitate
1. Import the workflow into n8n.
2. Connect your YouTube and SMTP credentials.
3. Set the schedule trigger to your desired frequency.
4. Customize email settings to match your preferences.
5. Test the workflow with a few subscriptions to ensure it works as expected.

### Practice
Create a dummy YouTube account and subscribe to a few channels. Run the workflow to see how it processes new videos and sends email notifications. Adjust filter settings to exclude or include specific types of content.

### WIIFM
Mastering this workflow allows you to offer automated content monitoring services to clients, enhancing their content strategy and engagement. It can be a valuable addition to your automation business, helping clients stay informed and responsive to new content trends.

## 🔧 Setup Instructions
1. **Connect Credentials:** youTubeOAuth2Api, smtp.
2. **Cron/Schedule:** Confirm timezone and cadence; start with a test window (e.g., every 5 minutes) then scale.
3. **Notification Targets:** Confirm channel/email IDs and that the bot/app is authorized to post.
4. **API Contracts:** Validate required headers and 2xx/4xx handling; add retries for 429/5xx.

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
