# Youtube Telegram Send Scheduled

## 🚀 What It Does
This workflow automates a process involving set, function, interval.

## 💼 Business Use Case
Use it to automate research, content creation, or data analysis. It saves hours of manual work.

## ⚙️ How It Works
1.  **Trigger:** This workflow starts with a **Set** node.
2. **Step 1: Set (set)** - This step performs a key action in the workflow.
3. **Step 2: Function (function)** - This step performs a key action in the workflow.
4. **Step 3: CheckTime (interval)** - This step performs a key action in the workflow.
5. **Step 4: GetVideosYT (youTube)** - This step performs a key action in the workflow.
6. **Step 5: SendVideo (telegram)** - This step performs a key action in the workflow.

## 💡 AI-Powered Ideas for Improvement
### Explain
This n8n workflow automates the process of checking for new YouTube videos from a specific channel every 30 minutes and sends a message about each new video to a Telegram chat, including the title and link.

### Demonstrate
A business owner might use this workflow to keep their audience updated on new video content automatically, saving time on manual notifications and ensuring followers never miss important updates.

### Imitate
1. Set up an n8n account and create a new workflow.
2. Add a "CheckTime" node to trigger every 30 minutes.
3. Use the "GetVideosYT" node to fetch videos from a chosen YouTube channel.
4. Set the "Function" node to filter out already sent videos.
5. Finally, use the "SendVideo" node to post updates to your Telegram chat.

### Practice
Try modifying the workflow to check a different YouTube channel or change the message format sent to Telegram. Test it to see how the adjustments affect the output.

### WIIFM
Mastering this workflow can help you automate content notifications for clients, enhancing their engagement and saving time—an attractive service for businesses looking to improve their online presence without increased effort.

## 🔧 Setup Instructions
1. **Connect Credentials:** OpenAI, Google Sheets, Slack, and other nodes must be authenticated.
2. **Customize Core Logic:** Review "Set" and "SendVideo" for IDs, table names, and URLs.
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
