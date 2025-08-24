# Telegram Splitout Automation Webhook

## 🚀 What It Does
This workflow automates a process involving splitOut, set, code.

## 💼 Business Use Case
Use it to automate research, content creation, or data analysis. It saves hours of manual work.

## ⚙️ How It Works
1.  **Trigger:** This workflow starts with a **Trigger on Telegram Message** node.
2. **Step 1: Split Transcript into Segments (splitOut)** - This step performs a key action in the workflow.
3. **Step 2: Extract YouTube URL from Input (set)** - This step performs a key action in the workflow.
4. **Step 3: Extract Video ID from URL (code)** - This step performs a key action in the workflow.
5. **Step 4: gpt-4o-mini (lmChatOpenAi)** - This step performs a key action in the workflow.
6. **Step 5: Generate Summary with GPT-4o-mini (chainLlm)** - This step performs a key action in the workflow.
7. **Step 6: Concatenate Transcript Segments (summarize)** - This step performs a key action in the workflow.
8. **Step 7: Trigger on Telegram Message (chatTrigger)** - This step performs a key action in the workflow.
9. **Step 8: Extract YouTube Transcript (youtubeTranscripter)** - This step performs a key action in the workflow.
10. **Step 9: Send Summary via Telegram (telegram)** - This step performs a key action in the workflow.
11. **Step 10: Receive YouTube URL via Webhook (webhook)** - This step performs a key action in the workflow.
12. **Step 11: Send Response to Webhook (respondToWebhook)** - This step performs a key action in the workflow.
13. **Step 12: Telegram Trigger (telegramTrigger)** - This step performs a key action in the workflow.
14. **Step 13: Retrieve Transcript from Google Docs (googleDocs)** - This step performs a key action in the workflow.
15. **Step 14: Update Transcript in Google Docs (googleDocs)** - This step performs a key action in the workflow.
16. **Step 15: Handle User Questions via AI (agent)** - This step performs a key action in the workflow.
17. **Step 16: OpenAI Chat Model (lmChatOpenAi)** - This step performs a key action in the workflow.
18. **Step 17: Window Buffer Memory (memoryBufferWindow)** - This step performs a key action in the workflow.
19. **Step 18: Google Docs2 (googleDocsTool)** - This step performs a key action in the workflow.
20. **Step 19: Send AI Response via Telegram (telegram)** - This step performs a key action in the workflow.
21. **Step 20: Sticky Note (stickyNote)** - This step performs a key action in the workflow.
22. **Step 21: Sticky Note1 (stickyNote)** - This step performs a key action in the workflow.
23. **Step 22: Sticky Note2 (stickyNote)** - This step performs a key action in the workflow.

## 💡 AI-Powered Ideas for Improvement
### Explain
This n8n workflow automates the process of summarizing YouTube videos and facilitating chat interactions via Telegram. It extracts video transcripts, generates a summary using AI, and sends it to a user through Telegram, improving efficiency in content consumption.

### Demonstrate
A consultant could use this workflow to help clients digest long video content quickly. For instance, a marketing agency could summarize training videos for staff, enabling faster onboarding and knowledge sharing without watching entire videos.

### Imitate
1. Set up a webhook in n8n to receive YouTube video URLs.
2. Add a node to extract the video ID and fetch the transcript.
3. Use an AI model to summarize the transcript.
4. Send the summary via Telegram to the user who requested it.
5. Test the workflow by sending a sample video URL.

### Practice
Try adapting the workflow by changing the AI model to generate different types of summaries (e.g., bullet points vs. detailed summaries). Use a sample YouTube video link and observe how the output changes.

### WIIFM
Mastering this workflow allows you to provide valuable services to clients, such as quick content summaries, saving them time and enhancing productivity. This can help you attract more customers and generate income through automation consulting services.

## 🔧 Setup Instructions
1. **Connect Credentials:** OpenAI, Google Sheets, Slack, and other nodes must be authenticated.
2. **Customize Core Logic:** Review "Split Transcript into Segments" and "Sticky Note2" for IDs, table names, and URLs.
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
