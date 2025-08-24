# Share Youtube Videos With AI Summaries On Discord

## 🚀 What It Does
This workflow automates a process involving rssFeedReadTrigger, httpRequest, extractFromFile.

## 💼 Business Use Case
Use it to automate research, content creation, or data analysis. It saves hours of manual work.

## ⚙️ How It Works
1.  **Trigger:** This workflow starts with a **YouTube Video Trigger** node.
2. **Step 1: YouTube Video Trigger (rssFeedReadTrigger)** - This step performs a key action in the workflow.
3. **Step 2: Retrieve Caption Data (httpRequest)** - This step performs a key action in the workflow.
4. **Step 3: Download Captions (httpRequest)** - This step performs a key action in the workflow.
5. **Step 4: Caption File Conversion (extractFromFile)** - This step performs a key action in the workflow.
6. **Step 5: Caption Summary with ChatGPT (openAi)** - This step performs a key action in the workflow.
7. **Step 6: Post to Discord (discord)** - This step performs a key action in the workflow.
8. **Step 7: Find English Captions (set)** - This step performs a key action in the workflow.
9. **Step 8: Sticky Note (stickyNote)** - This step performs a key action in the workflow.

## 💡 AI-Powered Ideas for Improvement
### Explain
This n8n workflow automates the process of monitoring a YouTube channel for new videos, retrieves captions, summarizes them using AI, and posts updates to a Discord channel, streamlining content sharing.

### Demonstrate
A content creator can use this workflow to automatically notify their Discord community about new YouTube videos, providing a quick summary and encouraging engagement, saving time and enhancing visibility.

### Imitate
1. Set up an n8n account and create a new workflow.
2. Add a YouTube Video Trigger node with your channel's feed URL.
3. Use HTTP Request nodes to retrieve and download captions.
4. Implement a ChatGPT node to summarize the captions.
5. Post the summary to Discord using the Discord node.
6. Test and adjust the workflow as needed.

### Practice
Try modifying the workflow to include a notification to your email or another platform like Slack instead of Discord. This will help you understand how to adapt workflows for different communication channels.

### WIIFM
Mastering this workflow can help you offer automation services to clients, creating value by saving them time and enhancing their online presence, potentially leading to new revenue streams in your automation business.

## 🔧 Setup Instructions
1. **Connect Credentials:** OpenAI, Google Sheets, Slack, and other nodes must be authenticated.
2. **Customize Core Logic:** Review "YouTube Video Trigger" and "Sticky Note" for IDs, table names, and URLs.
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
