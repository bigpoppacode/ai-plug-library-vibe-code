# Telegram Splitout Import Webhook

## 🚀 What It Does
This workflow automates a process involving webhook, youtubeTranscripter, splitOut.

## 💼 Business Use Case
Use it to automate research, content creation, or data analysis. It saves hours of manual work.

## ⚙️ How It Works
1.  **Trigger:** This workflow is triggered by an incoming webhook. It acts as a live API endpoint.
2. **Step 1: Webhook (webhook)** - This step performs a key action in the workflow.
3. **Step 2: YouTube Transcript (youtubeTranscripter)** - This step performs a key action in the workflow.
4. **Step 3: Split Out (splitOut)** - This step performs a key action in the workflow.
5. **Step 4: Respond to Webhook (respondToWebhook)** - This step performs a key action in the workflow.
6. **Step 5: Telegram (telegram)** - This step performs a key action in the workflow.
7. **Step 6: Get YouTube URL (set)** - This step performs a key action in the workflow.
8. **Step 7: YouTube Video ID (code)** - This step performs a key action in the workflow.
9. **Step 8: Get YouTube Video (youTube)** - This step performs a key action in the workflow.
10. **Step 9: gpt-4o-mini (lmChatOpenAi)** - This step performs a key action in the workflow.
11. **Step 10: Summarize & Analyze Transcript (chainLlm)** - This step performs a key action in the workflow.
12. **Step 11: Concatenate (summarize)** - This step performs a key action in the workflow.
13. **Step 12: Response Object (set)** - This step performs a key action in the workflow.

## 💡 AI-Powered Ideas for Improvement
### Explain
This n8n workflow automates the process of receiving a YouTube video link via a webhook, extracting its transcript, summarizing the content using AI, and sending the results via Telegram. It streamlines video content analysis and sharing.

### Demonstrate
A business owner could use this workflow to automatically summarize educational YouTube videos for a newsletter. Instead of watching each video, they receive concise summaries, saving time and enhancing content curation.

### Imitate
1. Set up a webhook in n8n to receive YouTube URLs.
2. Use the YouTube Transcript node to fetch the video transcript.
3. Split the transcript into manageable parts.
4. Summarize the content using an AI node.
5. Send the summary to a Telegram channel.
6. Test the workflow with a sample YouTube link.

### Practice
Try adapting the workflow by changing the AI summarization criteria. For instance, ask the AI to highlight specific topics or create a list of key takeaways from the video transcript, then send it to yourself via email instead of Telegram.

### WIIFM
Mastering this workflow allows you to offer valuable services like automated content analysis, enhancing your appeal to clients needing efficient content management. It positions you as a tech-savvy consultant capable of providing innovative solutions, ultimately leading to higher income opportunities.

## 🔧 Setup Instructions
1. **Connect Credentials:** OpenAI, Google Sheets, Slack, and other nodes must be authenticated.
2. **Customize Core Logic:** Review "Webhook" and "Response Object" for IDs, table names, and URLs.
3. **Activate the Workflow:** Set the workflow to "Active" after testing.

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
