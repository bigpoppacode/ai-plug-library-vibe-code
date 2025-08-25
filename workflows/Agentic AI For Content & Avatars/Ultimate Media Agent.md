# Ultimate Media Agent
## 🚀 What It Does
Monitors events, processes them, and **notifies** people/apps (Slack/Email) with structured updates.

## 💼 Business Use Case
Use as a **glue/API broker**: receive data, enrich/validate via APIs, and pass to downstream systems.

## ⚙️ How It Works
1. **Trigger:** This workflow starts with **Telegram Trigger**.
2. **Telegram Trigger** `telegramTrigger` — updates: "message", additionalFields: "[object Object]"
3. **Google Drive Agent** `agentTool` — toolDescription: "An AI Agent that handles all tasks in Google Drive", text: "={{ /*n8n-auto-generated-fromAI-override*/ $fromAI('Prompt__User_Message_', ``, 'string') }}", options: "[object Object]"
4. **Simple Memory** `memoryBufferWindow` — sessionIdType: "customKey", sessionKey: "={{ $('Telegram Trigger').item.json.message.chat.id }}"
5. **Change Name** `googleDriveTool` — operation: **update**
6. **Edit Image** `toolWorkflow` — description: "Call this tool to edit an image. The fields to send to this tool are:
- the image name
- the image edit request
- the file ID", workflowId: "[object Object]", workflowInputs: "[object Object]"
7. **Create Image** `toolWorkflow` — description: "Call this tool to create an image. The fields to send to this tool are:
1. Image name
2. Image prompt", workflowId: "[object Object]", workflowInputs: "[object Object]"
8. **Posting Agent** `agentTool` — toolDescription: "This agent can post images on different social platforms", text: "={{ /*n8n-auto-generated-fromAI-override*/ $fromAI('Prompt__User_Message_', ``, 'string') }}", options: "[object Object]"
9. **Send Email** `gmailTool` — sendTo: "={{ /*n8n-auto-generated-fromAI-override*/ $fromAI('To', ``, 'string') }}", subject: "={{ /*n8n-auto-generated-fromAI-override*/ $fromAI('Subject', ``, 'string') }}", message: "={{ /*n8n-auto-generated-fromAI-override*/ $fromAI('Message', ``, 'string') }}"
10. **Get Emails** `gmailTool` — operation: **getAll**
11. **Create Draft** `gmailTool` — resource: **draft**
12. **Email Reply** `gmailTool` — operation: **reply**
13. **Get Labels** `gmailTool` — resource: **label**
14. **Label Emails** `gmailTool` — operation: **addLabels**
15. **Mark Unread** `gmailTool` — operation: **markAsUnread**
16. **Email Agent** `agentTool` — toolDescription: "An email agent for all email actions", text: "={{ /*n8n-auto-generated-fromAI-override*/ $fromAI('Prompt__User_Message_', ``, 'string') }}", options: "[object Object]"
17. **Create Event with Attendee** `googleCalendarTool` — calendar: "[object Object]", start: "={{ /*n8n-auto-generated-fromAI-override*/ $fromAI('Start', ``, 'string') }}", end: "={{ /*n8n-auto-generated-fromAI-override*/ $fromAI('End', ``, 'string') }}"
18. **Create Event** `googleCalendarTool` — calendar: "[object Object]", start: "={{ /*n8n-auto-generated-fromAI-override*/ $fromAI('Start', ``, 'string') }}", end: "={{ /*n8n-auto-generated-fromAI-override*/ $fromAI('End', ``, 'string') }}"
19. **Get Events** `googleCalendarTool` — operation: **getAll**
20. **Delete Event** `googleCalendarTool` — operation: **delete**
21. **Update Event** `googleCalendarTool` — operation: **update**
22. **Calendar Agent** `agentTool` — toolDescription: "A calendar agent for all calendar actions", text: "={{ /*n8n-auto-generated-fromAI-override*/ $fromAI('Prompt__User_Message_', ``, 'string') }}", options: "[object Object]"
23. **Get Contacts** `airtableTool` — operation: **search**, table: `[object Object]`
24. **Add or Update Contact** `airtableTool` — operation: **upsert**, table: `[object Object]`
25. **Contact Agent** `agentTool` — toolDescription: "Contact agent for all contact actions, like getting contacts", text: "={{ /*n8n-auto-generated-fromAI-override*/ $fromAI('Prompt__User_Message_', ``, 'string') }}", options: "[object Object]"
26. **GPT 4.1-mini1** `lmChatOpenRouter` — options: "[object Object]"
27. **GPT 4.1-mini2** `lmChatOpenRouter` — options: "[object Object]"
28. **GPT 4.1-mini3** `lmChatOpenRouter` — options: "[object Object]"
29. **Social Media Agent** `agentTool` — toolDescription: "This agent can search through different social platforms", text: "={{ /*n8n-auto-generated-fromAI-override*/ $fromAI('Prompt__User_Message_', ``, 'string') }}", options: "[object Object]"
30. **Instagram Search** `httpRequestTool` — method: **POST**, url: `https://api.apify.com/v2/acts/apify~instagram-hashtag-scraper/run-sync-get-dataset-items`
31. **YouTube Search** `httpRequestTool` — method: **POST**, url: `https://api.apify.com/v2/acts/streamers~youtube-scraper/run-sync-get-dataset-items`
32. **Creative Agent** `agentTool` — toolDescription: "An agent that can create images and videos and edit images", text: "={{ /*n8n-auto-generated-fromAI-override*/ $fromAI('Prompt__User_Message_', ``, 'string') }}", options: "[object Object]"
33. **Instagram Post** `toolWorkflow` — description: "Call this tool to post a file on Instagram. The fields needed are:
1. the Google Drive file ID
2. the text for the post", workflowId: "[object Object]", workflowInputs: "[object Object]"
34. **Think** `toolThink` — configured for its default action.
35. **Share with Email** `googleDriveTool` — operation: **share**
36. **Share Anyone** `googleDriveTool` — operation: **share**
37. **X Post** `toolWorkflow` — description: "Call this tool to post a file on X. The fields needed are:
1. the Google Drive file ID
2. the text for the post", workflowId: "[object Object]", workflowInputs: "[object Object]"
38. **Search Media** `googleDriveTool` — resource: **fileFolder**
39. **GPT 5-mini** `lmChatOpenRouter` — model: `openai/gpt-5-mini`
40. **Fallback** `lmChatOpenAi` — model: `[object Object]`
41. **GPT 5-mini1** `lmChatOpenRouter` — model: `openai/gpt-5-mini`
42. **GPT 5-mini2** `lmChatOpenRouter` — model: `openai/gpt-5-mini`
43. **GPT 5-mini3** `lmChatOpenRouter` — model: `openai/gpt-5-mini`
44. **GPT 5-mini4** `lmChatOpenRouter` — model: `openai/gpt-5-mini`
45. **Create Doc** `toolWorkflow` — description: "Call this tool to create a Google Doc. The fields to send over are:
1. The title of the doc
2. The content for the doc", workflowId: "[object Object]", workflowInputs: "[object Object]"
46. **Search Docs** `googleDriveTool` — resource: **fileFolder**
47. **Tavily** `tavilyTool` — query: "={{ /*n8n-auto-generated-fromAI-override*/ $fromAI('Query', ``, 'string') }}", options: "[object Object]"
48. **Perplexity** `perplexityTool` — model: `sonar`
49. **OpenWeatherMap** `openWeatherMapTool` — format: "imperial", cityName: "={{ /*n8n-auto-generated-fromAI-override*/ $fromAI('City', `City name, no state`, 'string') }}", language: "en"
50. **Web Agent** `agentTool` — toolDescription: "A research agent for all research actions", text: "={{ /*n8n-auto-generated-fromAI-override*/ $fromAI('Prompt__User_Message_', ``, 'string') }}", options: "[object Object]"
51. **GPT 4.1-mini4** `lmChatOpenRouter` — options: "[object Object]"
52. **Create Video** `toolWorkflow` — description: "Call this tool to create a video from a text prompt. The fields to pass over are:
1. Video prompt
2. Video title
3. aspect ratio (Possible enum values: 16:9, 9:16, 1:1)", workflowId: "[object Object]", workflowInputs: "[object Object]"
53. **TikTok Post** `toolWorkflow` — description: "Call this tool to post a file on TikTok. The fields needed are:
1. the Google Drive file ID
2. the text for the post", workflowId: "[object Object]", workflowInputs: "[object Object]"
54. **TikTok Search** `httpRequestTool` — method: **POST**, url: `https://api.apify.com/v2/acts/clockworks~tiktok-scraper/run-sync-get-dataset-items`
55. **Image to Video** `toolWorkflow` — description: "Call this tool to create a video ad from a picture. The fields to pass over are:
1. Google Drive file ID of the image
2. Video prompt
3. Name of the image
4. aspect ratio (Possible…[truncated]", workflowId: "[object Object]", workflowInputs: "[object Object]"
56. **Sticky Note1** `stickyNote` — content: "[redacted]", height: "2256", width: "1232"
57. **Switch** `switch` — rules: "[object Object]", options: "[object Object]"
58. **Download File** `telegram` — resource: **file**
59. **Upload file** `googleDrive` — name: "={{ $now.format('yyyy-MM-dd') }}", driveId: "[object Object]", folderId: "[object Object]"
60. **Set Text** `set` — assignments: "[object Object]", options: "[object Object]"
61. **Ultimate Media Agent** `agent` — promptType: "define", text: "={{ $json.message.text }}", needsFallback: "true"
62. **Clean Up** `code` — jsCode: "[redacted]"
63. **Clean Up1** `code` — jsCode: "[redacted]"
64. **Update Log** `googleSheets` — operation: **append**
65. **Update Log1** `googleSheets` — operation: **append**
66. **Send a text message** `telegram` — chatId: "={{ $('Telegram Trigger').item.json.message.chat.id }}", text: "={{ $('Ultimate Media Agent').item.json.output }}", additionalFields: "[object Object]"
67. **Error Message** `telegram` — chatId: "={{ $('Telegram Trigger').item.json.message.chat.id }}", text: "={{ $('Ultimate Media Agent').item.json.output }}", additionalFields: "[object Object]"

## 💡 AI-Powered Ideas for Improvement
**Explain:** This n8n workflow serves as a comprehensive media management and automation system. It starts by using a Telegram trigger to receive messages, which can include text or media files. Depending on the type of message, it either processes the text or downloads and uploads media files to Google Drive. The workflow can edit or create images, manage Google Drive files, and perform tasks like sending emails, creating calendar events, and updating contact information using various integrations including Gmail, Google Calendar, and Airtable. Additionally, it supports posting content on social media platforms and logging actions in Google Sheets.

**Demonstrate:** A social media manager could use this workflow to automate the process of receiving media from clients via Telegram, editing or creating new content, and posting it on platforms like Instagram or TikTok, all while keeping track of actions in Google Sheets.

**Imitate:** To adapt this workflow:
1. Set up your Telegram bot and connect it to n8n.
2. Configure Google Drive, Gmail, and other integrations with your credentials.
3. Modify the workflow to suit your needs, such as changing the media folder in Google Drive or adjusting email recipients.
4. Test the workflow with sample messages and media files.

**Practice:** Create a test Telegram bot and send a message with an image. Watch as the workflow uploads the image to Google Drive, processes it, and logs the action. Experiment with editing image prompts or changing the file name in Google Drive.

**WIIFM:** Mastering this workflow allows you to offer a comprehensive media automation service, streamlining processes for clients and enhancing their social media presence. This skill can attract more clients, increase revenue, and position you as a valuable automation expert in the digital marketing industry.

## 🔧 Setup Instructions
1. **Connect Credentials:** telegramApi, googleDriveOAuth2Api, googleSheetsOAuth2Api, gmailOAuth2, googleCalendarOAuth2Api.
2. **Data Mapping:** Verify base/sheet IDs and column names match exactly to prevent silent failures.
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
