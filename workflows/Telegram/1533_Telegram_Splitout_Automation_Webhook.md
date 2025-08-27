# Telegram Splitout Automation Webhook
## 🚀 What It Does
Automates a flow using stickyNote×3, lmChatOpenAi×2, telegram×2.

## 💼 Business Use Case
Great for **content, summarization, triage, or decisioning** where AI adds speed and consistency.

## ⚙️ How It Works
1. **Trigger:** This workflow starts with **Trigger on Telegram Message**.
2. **gpt-4o-mini** `lmChatOpenAi` — options: "[object Object]"
3. **Trigger on Telegram Message** `chatTrigger` — options: "[object Object]"
4. **Receive YouTube URL via Webhook** `webhook` — path: `/8f0beaaf-b2c3-4148-8006-3b73fa146f60`
5. **Telegram Trigger** `telegramTrigger` — updates: "message", additionalFields: "[object Object]"
6. **OpenAI Chat Model** `lmChatOpenAi` — model: `[object Object]`
7. **Window Buffer Memory** `memoryBufferWindow` — sessionKey: "={{ $json.message.text }}", sessionIdType: "customKey"
8. **Google Docs2** `googleDocsTool` — operation: **get**
9. **Sticky Note** `stickyNote` — color: "5", width: "540", height: "500"
10. **Sticky Note1** `stickyNote` — color: "4", width: "540", height: "360"
11. **Sticky Note2** `stickyNote` — color: "3", width: "1020", height: "600"
12. **Extract YouTube URL from Input** `set` — options: "[object Object]", assignments: "[object Object]"
13. **Handle User Questions via AI** `agent` — text: "={{ $json.message.text }}", options: "[object Object]", promptType: "define"
14. **Extract Video ID from URL** `code` — language: "python", pythonCode: "# Loop over input items and add a new field called 'myNewField' to the JSON of each one
for item in _input.all():
  item.json.myNewField = 1
return _input.all()"
15. **Send AI Response via Telegram** `telegram` — text: "={{ $json.output }}", additionalFields: "[object Object]"
16. **Extract YouTube Transcript** `youtubeTranscripter` — videoId: "={{ $json.videoId}}"
17. **Split Transcript into Segments** `splitOut` — options: "[object Object]", fieldToSplitOut: "transcript"
18. **Concatenate Transcript Segments** `summarize` — options: "[object Object]", fieldsToSummarize: "[object Object]"
19. **Generate Summary with GPT-4o-mini** `chainLlm` — text: "=Please analyze the given text and create a structured summary following these guidelines:

1. *General Summary*:
   - Provide a concise overview of the main topic or purpose of th…[truncated]", promptType: "define"
20. **Retrieve Transcript from Google Docs** `googleDocs` — operation: **get**
21. **Send Summary via Telegram** `telegram` — text: "={{ $json.text }}


{{ $('Extract YouTube URL from Input').item.json.youtubeUrl}}", additionalFields: "[object Object]"
22. **Update Transcript in Google Docs** `googleDocs` — operation: **update**
23. **Send Response to Webhook** `respondToWebhook` — options: "[object Object]"

## 💡 AI-Powered Ideas for Improvement
**Explain:**  
This n8n workflow automates the process of summarizing YouTube videos and interacting with users about the content via Telegram. It starts by receiving a YouTube URL through a webhook or Telegram message, extracting the video's transcript, and splitting it into segments. The transcript segments are then concatenated and summarized using GPT-4o-mini. The summary is sent back to the user via Telegram, and the transcript is stored in Google Docs for reference. Users can also ask questions about the video, which are answered using AI based on the stored transcript.

**Demonstrate:**  
A consultant could use this workflow to help clients quickly generate summaries of video content for internal training or content creation, saving time on manual note-taking and allowing for streamlined information sharing.

**Imitate:**  
1. Import the workflow into n8n.
2. Connect your Telegram, OpenAI, and Google Docs accounts.
3. Set up a webhook to receive YouTube URLs.
4. Customize paths where necessary (e.g., Google Docs URL).
5. Test the workflow with a sample YouTube video to ensure summaries and responses are generated correctly.

**Practice:**  
Create a test YouTube video and use this workflow to generate a summary. Send the video URL to the workflow via Telegram or webhook. Ask a few questions about the video content to see how the AI handles responses based on the transcript.

**WIIFM:**  
Mastering this workflow allows you to offer an automated video content summarization and interaction service. This can attract businesses needing efficient content processing, helping you generate income through automation services, reduce content review time, and enhance client engagement.

## 🔧 Setup Instructions
1. **Connect Credentials:** openAiApi, telegramApi, googleDocsOAuth2Api.

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
