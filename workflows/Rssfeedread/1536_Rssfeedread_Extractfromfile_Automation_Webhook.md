# Rssfeedread Extractfromfile Automation Webhook
## 🚀 What It Does
Monitors events, processes them, and **notifies** people/apps (Slack/Email) with structured updates.

## 💼 Business Use Case
Use as a **glue/API broker**: receive data, enrich/validate via APIs, and pass to downstream systems.

## ⚙️ How It Works
1. **Trigger:** This workflow starts with **YouTube Video Trigger**.
2. **YouTube Video Trigger** `rssFeedReadTrigger` — feedUrl: "https://www.youtube.com/feeds/videos.xml?channel_id=UC08Fah8EIryeOZRkjBRohcQ", pollTimes: "[object Object]"
3. **Sticky Note** `stickyNote` — width: "448.11859838274916", height: "417.2722371967648", content: "[redacted]"
4. **Retrieve Caption Data** `httpRequest` — url: `https://www.googleapis.com/youtube/v3/captions`
5. **Find English Captions** `set` — options: "[object Object]", assignments: "[object Object]"
6. **Download Captions** `httpRequest` — url: `=https://www.googleapis.com/youtube/v3/captions/{{ $json.caption.id }}`
7. **Caption File Conversion** `extractFromFile` — operation: **text**
8. **Caption Summary with ChatGPT** `openAi` — modelId: "[object Object]", options: "[object Object]", messages: "[object Object]"
9. **Post to Discord** `discord` — content: "=🌟 New Video Alert! 🌟

**{{ $('YouTube Video Trigger').item.json["title"] }}**

*What’s it about?*

{{ $json["message"]["content"] }}

[Watch NOW]({{ $('YouTube Video Trigger').i…[truncated]", options: "[object Object]", authentication: "webhook"

## 💡 AI-Powered Ideas for Improvement
### Explain
This n8n workflow automatically processes new YouTube videos from a specified channel. It triggers when a new video is uploaded, retrieves the video's captions, and then uses OpenAI's ChatGPT to summarize the content. The summary is posted to a Discord channel, alerting subscribers about the new video and providing a quick overview.

### Demonstrate
A YouTube content creator could use this workflow to keep their Discord community engaged by instantly notifying them of new uploads with a quick summary. This keeps the audience informed and encourages immediate engagement, increasing video views and interaction.

### Imitate
1. Import the workflow into your n8n instance.
2. Set up your YouTube channel and Discord webhook credentials.
3. Customize the YouTube channel ID in the RSS feed URL.
4. Test the workflow by uploading a new video to ensure it triggers and posts to Discord correctly.

### Practice
Create a test YouTube channel and upload a sample video. Run the workflow to see how it processes and posts to a test Discord server. Adjust the summary format in the ChatGPT node to see how different prompts affect the output.

### WIIFM
Mastering this workflow enables you to offer automation services to content creators, enhancing their engagement strategies. This can attract clients looking to boost their social media presence and interaction, providing you with a lucrative opportunity in the digital marketing and content creation space.

## 🔧 Setup Instructions
1. **Connect Credentials:** youTubeOAuth2Api, openAiApi, discordWebhookApi.
2. **Notification Targets:** Confirm channel/email IDs and that the bot/app is authorized to post.
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
