# Splitout Code Automation Webhook
## 🚀 What It Does
Monitors events, processes them, and **notifies** people/apps (Slack/Email) with structured updates.

## 💼 Business Use Case
Use as a **glue/API broker**: receive data, enrich/validate via APIs, and pass to downstream systems.

## ⚙️ How It Works
1. **Trigger:** This workflow starts with **When Executed by Another Workflow**.
2. **When Executed by Another Workflow** `executeWorkflowTrigger` — inputSource: "jsonExample", jsonExample: "{
  "query": {
	"videoId": "YouTube video id"
  }
}"
3. **Sticky Note10** `stickyNote` — color: "7", width: "1730", height: "760"
4. **Sticky Note12** `stickyNote` — width: "300", height: "460", content: "[redacted]"
5. **Sticky Note14** `stickyNote` — color: "3", width: "500", height: "300"
6. **Sticky Note15** `stickyNote` — color: "5", width: "700", height: "320"
7. **When clicking ‘Test workflow’** `manualTrigger` — configured for its default action.
8. **Create YouTube API URL for Comments** `code` — jsCode: "[redacted]"
9. **Sticky Note** `stickyNote` — color: "6", width: "1100", height: "500"
10. **gpt-4o-mini** `lmChatOpenAi` — model: `[object Object]`
11. **Sticky Note1** `stickyNote` — color: "4", width: "260", height: "260"
12. **Sticky Note2** `stickyNote` — color: "5", width: "580", height: "320"
13. **Sticky Note4** `stickyNote` — width: "520", height: "760", content: "# YouTube Video Comment Analysis Agent

This agent is designed to analyze YouTube video details and comments to generate a **comprehensive and actionable report** for content creat…[truncated]"
14. **Workflow Variables** `set` — options: "[object Object]", assignments: "[object Object]"
15. **Get YouTube Video Comments** `httpRequest` — url: `={{ $json.url }}`
16. **Create YouTube API URL** `code` — jsCode: "[redacted]"
17. **Get Video Comments with Pagination** `code` — jsCode: "[redacted]"
18. **Get YouTube Video Details** `httpRequest` — url: `={{ $json.youtubeUrl }}`
19. **Split Out Comments** `splitOut` — options: "[object Object]", fieldToSplitOut: "comments"
20. **Combine Comments** `summarize` — options: "[object Object]", fieldsToSummarize: "[object Object]"
21. **Merge YouTube Details & Transcript** `merge` — mode: "combine", options: "[object Object]", combineBy: "combineByPosition"
22. **Create One JSON Object** `aggregate` — options: "[object Object]", aggregate: "aggregateAllItemData"
23. **YouTube Video Report Agent** `agent` — text: "=This is the YouTube video detals and comments: {{ $json.data.toJsonString() }}", agent: "conversationalAgent", options: "[object Object]"
24. **Markdown to HTML** `markdown` — mode: "markdownToHtml", options: "[object Object]", markdown: "={{ $json.output }}"
25. **Gmail Report** `gmail` — sendTo: "joe@example.com", message: "={{ $json.html }}", options: "[object Object]"
26. **Save Report to Google Drive** `googleDrive` — operation: **createFromText**

## 💡 AI-Powered Ideas for Improvement
**Explain**  
This workflow is designed to analyze YouTube video details and comments to generate a comprehensive report. It pulls video and comment data using the YouTube API, processes the information with the help of AI (using GPT-4), and produces insights on video performance, audience engagement, and potential content opportunities. The final report is formatted in HTML and sent via Gmail, with a copy saved to Google Drive.

**Demonstrate**  
A content creator could use this workflow to gain insights into their YouTube video's performance and viewer engagement, helping them make data-driven decisions for future content creation and audience targeting.

**Imitate**  
1. Set up your n8n instance and import the workflow.  
2. Connect YouTube, OpenAI, Gmail, and Google Drive accounts.  
3. Configure your API keys in the workflow variables.  
4. Input a YouTube video ID to test the workflow.  
5. Run the workflow to ensure it captures and processes data correctly.

**Practice**  
Create a sample YouTube video and use this workflow to analyze its comments and engagement. Compare the AI-generated insights with your observations and adjust the video content strategy accordingly.

**WIIFM**  
Mastering this workflow enables you to offer valuable insights to YouTube creators, enhancing their content strategy and engagement. This can increase your value as a consultant or service provider, potentially leading to new clients and increased revenue in AI automation services.

## 🔧 Setup Instructions
1. **Connect Credentials:** gmailOAuth2, openAiApi, googleDriveOAuth2Api.
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
