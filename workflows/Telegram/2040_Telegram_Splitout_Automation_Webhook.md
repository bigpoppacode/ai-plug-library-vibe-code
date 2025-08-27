# Telegram Splitout Automation Webhook
## 🚀 What It Does
Automates a flow using set×2, webhook, youtubeTranscripter.

## 💼 Business Use Case
Great for **content, summarization, triage, or decisioning** where AI adds speed and consistency.

## ⚙️ How It Works
1. **Trigger:** This workflow starts with **Response Object**.
2. **Webhook** `webhook` — method: **POST**, path: `/ytube`
3. **YouTube Transcript** `youtubeTranscripter` — configured for its default action.
4. **Split Out** `splitOut` — options: "[object Object]", fieldToSplitOut: "transcript"
5. **gpt-4o-mini** `lmChatOpenAi` — options: "[object Object]"
6. **Get YouTube URL** `set` — options: "[object Object]", assignments: "[object Object]"
7. **Concatenate** `summarize` — options: "[object Object]", fieldsToSummarize: "[object Object]"
8. **YouTube Video ID** `code` — jsCode: "const extractYoutubeId = (url) => {
 // Regex pattern that matches both youtu.be and youtube.com URLs
 const pattern = /(?:youtube\.com\/(?:[^\/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=…[truncated]"
9. **Summarize & Analyze Transcript** `chainLlm` — text: "=Please analyze the given text and create a structured summary following these guidelines:

1. Break down the content into main topics using Level 2 headers (##)
2. Under each head…[truncated]", promptType: "define"
10. **Get YouTube Video** `youTube` — resource: **video**, operation: **get**
11. **Response Object** `set` — options: "[object Object]", assignments: "[object Object]"
12. **Respond to Webhook** `respondToWebhook` — options: "[object Object]"
13. **Telegram** `telegram` — text: "={{ $json.title }}
{{ $json.youtubeUrl }}", additionalFields: "[object Object]"

## 💡 AI-Powered Ideas for Improvement
### Explain
This workflow automates the process of extracting, analyzing, and summarizing YouTube video transcripts. It starts by receiving a YouTube URL via a webhook, retrieves the transcript, splits and analyzes it using AI to generate a structured summary, and then sends this summary along with the video title and URL via Telegram.

### Demonstrate
A content creator could use this workflow to quickly generate summaries of their YouTube videos for social media posts, newsletters, or blog content, saving time and ensuring consistency in messaging.

### Imitate
1. Set up an n8n instance and import the workflow.
2. Configure the webhook to receive YouTube URLs.
3. Connect your Telegram account and set up a bot.
4. Test the workflow with a sample YouTube URL to ensure it retrieves, processes, and sends the summary correctly.

### Practice
Create a test YouTube video, generate a transcript, and run the workflow. Compare the AI-generated summary with your own to understand the AI's strengths and limitations. Adjust the prompt for better results.

### WIIFM
Mastering this workflow enables you to offer automated content summarization services, which can streamline client workflows, enhance content marketing strategies, and open new revenue streams by packaging these services for other content creators or businesses.

## 🔧 Setup Instructions
1. **Test & Activate:** Run a manual execution with sample data, then set the workflow Active.

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
