# Telegram Splitout Import Webhook
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
  const pattern = /(?:youtube\.com\/(?:[^\/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]…[truncated]"
9. **Summarize & Analyze Transcript** `chainLlm` — text: "=Please analyze the given text and create a structured summary following these guidelines:

1. Break down the content into main topics using Level 2 headers (##)
2. Under each head…[truncated]", promptType: "define"
10. **Get YouTube Video** `youTube` — resource: **video**, operation: **get**
11. **Response Object** `set` — options: "[object Object]", assignments: "[object Object]"
12. **Respond to Webhook** `respondToWebhook` — options: "[object Object]"
13. **Telegram** `telegram` — text: "={{ $json.title }}
{{ $json.youtubeUrl }}", additionalFields: "[object Object]"

## 💡 AI-Powered Ideas for Improvement
**Explain:**  
This n8n workflow automates the process of analyzing and summarizing YouTube video transcripts. It starts by receiving a YouTube URL via a webhook, retrieves the video transcript, and splits it into manageable parts. The transcript is then summarized and analyzed using GPT-4, creating a structured overview. Finally, it sends the summary back through the webhook and posts the video title and link to Telegram.

**Demonstrate:**  
A content creator could use this workflow to quickly generate structured summaries of their YouTube videos for blog posts, saving time and ensuring consistency in content promotion.

**Imitate:**  
1. Import the workflow into n8n.
2. Connect the webhook to receive YouTube URLs.
3. Set up the Telegram node with your API credentials.
4. Test by sending a YouTube URL to the webhook path.
5. Review the summary and Telegram message for accuracy.

**Practice:**  
Create a test YouTube video and use this workflow to generate a summary. Adjust the prompt in the GPT-4 node to change the summary style and see how it affects the output.

**WIIFM:**  
Mastering this workflow can help you offer content summarization services, allowing businesses to repurpose video content efficiently. This can increase your service offerings and attract clients looking to enhance their content strategy with AI-driven solutions.

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
