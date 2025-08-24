# Stopanderror Splitout Create Webhook

## 🚀 What It Does
This workflow automates a process involving youTube, scheduleTrigger, if.

## 💼 Business Use Case
Use it to automate research, content creation, or data analysis. It saves hours of manual work.

## ⚙️ How It Works
1.  **Trigger:** This workflow is designed to run on a schedule. Configure the interval in the Schedule node.
2. **Step 1: Get video details (youTube)** - This step performs a key action in the workflow.
3. **Step 2: Schedule Trigger (scheduleTrigger)** - This step performs a key action in the workflow.
4. **Step 3: Filter out shorts (if)** - This step performs a key action in the workflow.
5. **Step 4: Sticky Note (stickyNote)** - This step performs a key action in the workflow.
6. **Step 5: Sticky Note1 (stickyNote)** - This step performs a key action in the workflow.
7. **Step 6: Sticky Note2 (stickyNote)** - This step performs a key action in the workflow.
8. **Step 7: Sticky Note3 (stickyNote)** - This step performs a key action in the workflow.
9. **Step 8: Sticky Note4 (stickyNote)** - This step performs a key action in the workflow.
10. **Step 9: Get latest 15 videos of each channel (rssFeedRead)** - This step performs a key action in the workflow.
11. **Step 10: Get my subscriptions (httpRequest)** - This step performs a key action in the workflow.
12. **Step 11: Check for errors (if)** - This step performs a key action in the workflow.
13. **Step 12: Only keep channels with unwatched videos (filter)** - This step performs a key action in the workflow.
14. **Step 13: Keep only videos published since last run (filter)** - This step performs a key action in the workflow.
15. **Step 14: Send an email for each new video (emailSend)** - This step performs a key action in the workflow.
16. **Step 15: If the HTTP request failed, throw the error (stopAndError)** - This step performs a key action in the workflow.
17. **Step 16: Split out subscriptions to process individually (splitOut)** - This step performs a key action in the workflow.
18. **Step 17: Sticky Note5 (stickyNote)** - This step performs a key action in the workflow.
19. **Step 18: Filter out channels (filter)** - This step performs a key action in the workflow.

## 💡 AI-Powered Ideas for Improvement
### Explain
This n8n workflow automates the process of checking new YouTube videos from subscribed channels. It retrieves video details, filters out short videos, and sends email notifications for new uploads, helping users stay updated effortlessly.

### Demonstrate
A business owner could use this workflow to automatically notify subscribers via email whenever a new video is uploaded to their YouTube channel, ensuring they never miss engagement opportunities and can promptly respond to viewers.

### Imitate
1. Import the workflow into n8n.
2. Set up a **Schedule Trigger** to run hourly.
3. Use the **Get my subscriptions** node to retrieve YouTube channel subscriptions.
4. Add filters to exclude short videos and retain unwatched ones.
5. Configure the **Email Send** node to notify you of new videos.

### Practice
Try modifying the workflow to send a summary email at the end of each day instead of hourly. This will help you understand how to adjust the schedule and filter settings.

### WIIFM
Mastering this workflow allows you to offer valuable automation services to clients, saving them time and enhancing their engagement strategies, ultimately leading to increased customer satisfaction and potential revenue growth.

## 🔧 Setup Instructions
1. **Connect Credentials:** OpenAI, Google Sheets, Slack, and other nodes must be authenticated.
2. **Customize Core Logic:** Review "Get video details" and "Filter out channels" for IDs, table names, and URLs.
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
