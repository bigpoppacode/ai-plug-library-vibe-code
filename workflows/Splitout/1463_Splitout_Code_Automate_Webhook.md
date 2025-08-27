# Splitout Code Automate Webhook
## 🚀 What It Does
Calls external APIs and uses **AI** to transform or decide, then routes the result downstream.

## 💼 Business Use Case
Use as a **glue/API broker**: receive data, enrich/validate via APIs, and pass to downstream systems.

## ⚙️ How It Works
1. **Trigger:** This workflow starts with **When Executed by Another Workflow**.
2. **When Executed by Another Workflow** `executeWorkflowTrigger` — inputSource: "jsonExample", jsonExample: "{
  "query": {
	"videoId": "YouTube video id"
  }
}"
3. **When chat message received** `chatTrigger` — options: "[object Object]"
4. **Sticky Note** `stickyNote` — color: "6", width: "580", height: "380"
5. **Sticky Note1** `stickyNote` — width: "280", height: "280", content: "## 🛠️ YouTube Video Processing Tool"
6. **Sticky Note2** `stickyNote` — color: "5", width: "280", height: "280"
7. **Window Buffer Memory** `memoryBufferWindow` — configured for its default action.
8. **Sticky Note13** `stickyNote` — color: "2", width: "280", height: "280"
9. **gpt-4o-mini1** `lmChatOpenAi` — model: `[object Object]`
10. **Sticky Note10** `stickyNote` — color: "7", width: "1910", height: "720"
11. **Sticky Note12** `stickyNote` — width: "260", height: "340", content: "## Workflow Variables
https://cloud.google.com/docs/get-started/access-apis

"
12. **Sticky Note14** `stickyNote` — color: "4", width: "500", height: "300"
13. **Sticky Note15** `stickyNote` — color: "5", width: "700", height: "300"
14. **Sticky Note3** `stickyNote` — color: "4", width: "280", height: "380"
15. **YouTube Processing Tool** `toolWorkflow` — name: "youtube_video_analyzer", workflowId: "={{ $workflow.id }}", description: "Call this tool to get details and transcript from a YouTube video.  Get the videoId from the users prompt."
16. **Sticky Note4** `stickyNote` — color: "3", width: "620", height: "780"
17. **DeepSeek-V3   Chat** `lmChatOpenAi` — model: `=deepseek-chat`
18. **Sticky Note5** `stickyNote` — color: "3", width: "360", height: "480"
19. **Sticky Note6** `stickyNote` — color: "6", width: "360", height: "280"
20. **Sticky Note7** `stickyNote` — color: "7", width: "880", height: "80"
21. **Workflow Variables** `set` — options: "[object Object]", assignments: "[object Object]"
22. **YouTube Video Agent** `agent` — text: "={{ $json.chatInput }}", options: "[object Object]", promptType: "define"
23. **Create YouTube API URL** `code` — jsCode: "[redacted]"
24. **Get YouTube Transcript** `code` — jsCode: "// Get all input items
const items = $input.all();
const results = [];

// Import the YoutubeTranscript module from the youtube-transcript package
// npm i -g youtube-transcript
co…[truncated]"
25. **Get YouTube Video Details** `httpRequest` — url: `={{ $json.youtubeUrl }}`
26. **Split Out Transcript Segments** `splitOut` — options: "[object Object]", fieldToSplitOut: "transcript"
27. **Combine Transcript Segments** `summarize` — options: "[object Object]", fieldsToSummarize: "[object Object]"
28. **Merge YouTube Details & Transcript** `merge` — mode: "combine", options: "[object Object]", combineBy: "combineByPosition"
29. **Create One JSON Object** `aggregate` — options: "[object Object]", aggregate: "aggregateAllItemData"
30. **Respond with YouTube Details & Transcript** `set` — options: "[object Object]", assignments: "[object Object]"

## 💡 AI-Powered Ideas for Improvement
**Explain:**  
This n8n workflow is designed to analyze and summarize YouTube videos using AI. It extracts video details and transcripts based on a provided YouTube video ID, then processes this information through an AI agent to generate summaries or insights. This enables users to interactively explore video content without needing to watch the entire video.

**Demonstrate:**  
A digital marketing consultant could use this workflow to quickly analyze competitors' YouTube content, extracting key points and insights for strategic planning without watching each video in full.

**Imitate:**  
1. Import the workflow into n8n.
2. Connect your YouTube API and OpenAI credentials.
3. Set up triggers to input YouTube video IDs.
4. Customize the workflow to fit your specific analysis needs.
5. Test the workflow to ensure it provides accurate summaries.

**Practice:**  
Create a test workflow using a sample YouTube video ID. Run the workflow to generate a summary and compare it with the actual video content to assess accuracy and comprehensiveness.

**WIIFM:**  
Mastering this workflow can enhance your service offerings by providing automated video analysis, saving clients time and effort. It can attract content creators, marketers, and educators looking for efficient content analysis solutions, potentially increasing your income through new service offerings.

## 🔧 Setup Instructions
1. **Connect Credentials:** openAiApi.
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
