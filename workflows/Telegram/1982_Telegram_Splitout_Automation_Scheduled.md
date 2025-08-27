# Telegram Splitout Automation Scheduled
## 🚀 What It Does
Monitors events, processes them, and **notifies** people/apps (Slack/Email) with structured updates.

## 💼 Business Use Case
Use as a **glue/API broker**: receive data, enrich/validate via APIs, and pass to downstream systems.

## ⚙️ How It Works
1. **Trigger:** This workflow starts with **On form submission**.
2. **On form submission** `formTrigger` — options: "[object Object]", formTitle: "RSS Feed for YouTube Channels", formFields: "[object Object]"
3. **Sticky Note14** `stickyNote` — color: "3", width: "680", height: "300"
4. **Sticky Note12** `stickyNote` — width: "340", height: "380", content: "[redacted]"
5. **OpenAI Chat Model** `lmChatOpenAi` — model: `[object Object]`
6. **OpenAI Chat Model1** `lmChatOpenAi` — model: `[object Object]`
7. **Sticky Note** `stickyNote` — color: "5", width: "520", height: "280"
8. **Sticky Note1** `stickyNote` — color: "6", width: "680", height: "400"
9. **Sticky Note2** `stickyNote` — color: "6", width: "680", height: "400"
10. **Sticky Note3** `stickyNote` — color: "3", width: "880", height: "300"
11. **Sticky Note4** `stickyNote` — width: "880", height: "280", content: "## Prepare the List of YouTube Channel Ids"
12. **Sticky Note5** `stickyNote` — color: "4", width: "280", height: "260"
13. **Sticky Note6** `stickyNote` — color: "4", width: "280", height: "260"
14. **Every Day** `scheduleTrigger` — rule: "[object Object]"
15. **Sticky Note7** `stickyNote` — color: "7", width: "2640", height: "1660"
16. **Sticky Note8** `stickyNote` — color: "2", width: "880", height: "320"
17. **When clicking ‘Test workflow’** `manualTrigger` — configured for its default action.
18. **Sticky Note9** `stickyNote` — width: "540", height: "1060", content: "[redacted]"
19. **YouTube Channel Ids** `set` — options: "[object Object]", assignments: "[object Object]"
20. **YouTube Channel Ids1** `set` — options: "[object Object]", assignments: "[object Object]"
21. **Default YouTube Channel Ids** `set` — options: "[object Object]", assignments: "[object Object]", includeOtherFields: "true"
22. **Create List of Channel Ids1** `splitOut` — options: "[object Object]", fieldToSplitOut: "ids"
23. **Get Channel Ids** `set` — options: "[object Object]", assignments: "[object Object]"
24. **Create RSS Feed URLs** `set` — options: "[object Object]", assignments: "[object Object]"
25. **Create List of Channel Ids** `splitOut` — options: "[object Object]", fieldToSplitOut: "ids"
26. **RSS Read  - Max 15 Latest Videos per Channel1** `rssFeedRead` — url: `={{ $json.rss_feed_url }}`
27. **Create RSS Feed URLs1** `set` — options: "[object Object]", assignments: "[object Object]"
28. **RSS Read  - Max 15 Latest Videos per Channel** `rssFeedRead` — url: `={{ $json.rss_feed_url }}`
29. **Label New Videos** `code` — jsCode: "/**
 * Processes YouTube video items and adds recent_videos flag based on publication date
 * @param {Object[]} $input.all() - Array of input items from previous node
 * @param {nu…[truncated]"
30. **Get New Videos** `filter` — options: "[object Object]", conditions: "[object Object]"
31. **Workflow Variables** `set` — options: "[object Object]", assignments: "[object Object]"
32. **Create YouTube API URL** `code` — jsCode: "[redacted]"
33. **Get YouTube Video Details** `httpRequest` — url: `={{ $json.youtubeUrl }}`
34. **Prepare YouTube Data** `set` — options: "[object Object]", assignments: "[object Object]"
35. **Merge** `merge` — mode: "combine", options: "[object Object]", advanced: "true"
36. **Create Email per Video** `chainLlm` — text: "=Create a list of responsive HTML email cards with the following requirements:

## Use the following JSON data to populate the content:
{{ $json.items.toJsonString() }}

## Design …[truncated]", promptType: "define"
37. **One List Object** `aggregate` — options: "[object Object]", aggregate: "aggregateAllItemData"
38. **Prepare For Telegram Message** `set` — options: "[object Object]", assignments: "[object Object]"
39. **Multiple Emails** `gmail` — sendTo: "joe@example.com", message: "={{ $json.text }}", options: "[object Object]"
40. **Create One Email for All Videos** `chainLlm` — text: "=Create a list of responsive HTML email cards with the following requirements:

## Use the following JSON data to populate the content:
{{ $json.data.toJsonString() }}

## Design r…[truncated]", promptType: "define"
41. **Telegram** `telegram` — operation: **sendPhoto**
42. **Single Email** `gmail` — sendTo: "joe@example.com", message: "={{ $json.text }}", options: "[object Object]"

## 💡 AI-Powered Ideas for Improvement
**Explain:** This workflow automates the process of tracking new YouTube videos from specified channels using RSS feeds. It sends notifications via email and Telegram whenever a new video is uploaded. Users can input YouTube channel IDs through a form, and the workflow checks these channels daily for new uploads, processing and sending alerts if new content is detected.

**Demonstrate:** A content creator could use this workflow to receive immediate notifications about new videos from competitors or collaborators, allowing them to stay updated and engage promptly.

**Imitate:** 1) Import the workflow into n8n. 2) Connect your email and Telegram accounts. 3) Set up the form to input YouTube channel IDs. 4) Schedule the workflow to run daily. 5) Test with a few channels to ensure notifications are working.

**Practice:** Create a test YouTube channel and upload a video. Add the channel ID to the workflow and run it. Check if you receive the email and Telegram notifications.

**WIIFM:** Mastering this workflow allows you to offer real-time content monitoring services, which can attract clients interested in competitive analysis or content curation. It enhances your service portfolio, potentially increasing your income as an automation consultant.

## 🔧 Setup Instructions
1. **Connect Credentials:** openAiApi, gmailOAuth2, telegramApi.
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
