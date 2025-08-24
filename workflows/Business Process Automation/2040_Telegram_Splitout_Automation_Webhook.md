# Telegram Splitout Automation Webhook

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
This n8n workflow automates the process of collecting a YouTube video's transcript, analyzing it with AI for insights, and sending a summary via Telegram. It uses a webhook to trigger the process, retrieves the video data, and summarizes the transcript for easy consumption.

### Demonstrate
A business owner could use this workflow to automatically summarize video content from their YouTube channel, allowing them to quickly share insights with their team or audience on Telegram without manually watching each video.

### Imitate
1. Import the workflow into n8n.
2. Set up a webhook to trigger the workflow.
3. Replace the YouTube video URL with your own in the "Get YouTube URL" node.
4. Configure the Telegram node with your credentials to send messages.
5. Test the workflow to ensure it retrieves and summarizes the transcript correctly.

### Practice
Try modifying the workflow to send the summary to your email instead of Telegram. Adjust the "Respond to Webhook" node to include an email node that sends the summary to your address.

### WIIFM
Mastering this workflow enables you to provide valuable content summarization services, saving time for clients. This can lead to more clients seeking your automation expertise, ultimately increasing your income and establishing you as a go-to expert in AI-driven business solutions.

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
