# Code Manual Automation Webhook
  ## 🚀 What It Does
  Monitors events, processes them, and **notifies** people/apps (Slack/Email) with structured updates.
  
  ## 💼 Business Use Case
  Use as a **glue/API broker**: receive data, enrich/validate via APIs, and pass to downstream systems.
  
  ## ⚙️ How It Works
  1. **Trigger:** This workflow starts with **When clicking ‘Test workflow’**.
  2. **When clicking ‘Test workflow’** `manualTrigger` — configured for its default action.
3. **OpenAI Chat Model** `lmChatOpenAi` — model: `[object Object]`
4. **OpenRouter Chat Model** `lmChatOpenRouter` — model: `deepseek/deepseek-r1:free`
5. **DeepSeek Chat Model** `lmChatDeepSeek` — model: `deepseek-reasoner`
6. **Structured Output Parser** `outputParserStructured` — schemaType: "manual", inputSchema: "{
	"type": "object",
	"properties": {
		"title": {
			"type": "string"
		},
		"text": {
			"type": "string"
		}
	}
}"
7. **Sticky Note** `stickyNote` — width: "220", height: "260", content: "Get a FREE API on youtube-transcript.io and insert the Authentication"
8. **Sticky Note1** `stickyNote` — width: "220", height: "260", content: "Get the Youtube video ID from the URL"
9. **Sticky Note2** `stickyNote` — width: "220", height: "260", content: "Get the Youtube video transcript"
10. **Sticky Note3** `stickyNote` — width: "200", height: "260", content: "Not all videos have text translations of the video"
11. **Sticky Note4** `stickyNote` — width: "220", height: "240", content: "Get the full video transcript in a single variable"
12. **Sticky Note5** `stickyNote` — width: "340", height: "240", content: "Generate detailed video analysis and create a title"
13. **Sticky Note6** `stickyNote` — color: "3", width: "660", height: "200"
14. **Sticky Note7** `stickyNote` — width: "200", height: "260", content: "Set Youtube video URL manually"
15. **Set YouTube URL** `set` — options: "[object Object]", assignments: "[object Object]"
16. **YouTube Video ID** `code` — jsCode: "const extractYoutubeId = (url) => {
  // Regex pattern that matches both youtu.be and youtube.com URLs
  const pattern = /(?:youtube\.com\/(?:[^\/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]…[truncated]"
17. **Generate transcript** `httpRequest` — method: **POST**, url: `=https://www.youtube-transcript.io/api/transcripts`
18. **Get transcript** `set` — options: "[object Object]", assignments: "[object Object]"
19. **Exist?** `if` — options: "[object Object]", conditions: "[object Object]"
20. **Get Fulltext** `code` — jsCode: "let fulltext = "";

for (const item of $input.all()[0].json.transcript) {
  fulltext += item.text + " ";
}

fulltext = fulltext.trim();

return { fulltext };"
21. **Analyze LLM Chain** `chainLlm` — text: "={{ $json.fulltext }}", messages: "[object Object]", promptType: "define"
22. **Send Email** `emailSend` — text: "={{ $json.output.text }}", options: "[object Object]", subject: "={{ $json.output.title }}"
  
  ## 💡 AI-Powered Ideas for Improvement
  **Explain**  
This workflow is designed to analyze YouTube videos by extracting their transcripts, summarizing the content using AI models, and sending the analysis via email. It starts by manually triggering the workflow, sets the YouTube video URL, extracts the video ID, and retrieves the transcript. The transcript is then processed to generate a full text, which is analyzed using AI models to create a structured summary and title. Finally, the summary is emailed to the user.

**Demonstrate**  
A content creator could use this workflow to quickly analyze and summarize YouTube videos for content planning, saving time and enhancing their research process.

**Imitate**  
1. Import the workflow into n8n.  
2. Set up the YouTube URL in the workflow.  
3. Ensure API keys for youtube-transcript.io and email are configured.  
4. Run the workflow manually to test.  
5. Customize the email node to send the analysis to your desired email address.

**Practice**  
Create a test YouTube video with subtitles. Run the workflow to extract and analyze the transcript. Modify the video content and observe how the workflow adapts to changes in the transcript for practice.

**WIIFM**  
Mastering this workflow allows you to offer video analysis services to clients, improving their content strategy and enhancing your service offerings. This can lead to increased client engagement and potential revenue growth in your automation business.
  
  ## 🔧 Setup Instructions
  1. **Connect Credentials:** openAiApi, openRouterApi, deepSeekApi, smtp, httpHeaderAuth.
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
  