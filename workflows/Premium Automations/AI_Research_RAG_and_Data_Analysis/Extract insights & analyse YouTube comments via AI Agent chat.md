# Extract Insights & Analyse Youtube Comments Via AI Agent Chat

## 🚀 What It Does
This workflow automates a process involving stickyNote, lmChatOpenAi, toolWorkflow.

## 💼 Business Use Case
Use it to automate research, content creation, or data analysis. It saves hours of manual work.

## ⚙️ How It Works
1.  **Trigger:** This workflow starts with a **When chat message received** node.
2. **Step 1: Sticky Note9 (stickyNote)** - This step performs a key action in the workflow.
3. **Step 2: Sticky Note7 (stickyNote)** - This step performs a key action in the workflow.
4. **Step 3: Sticky Note6 (stickyNote)** - This step performs a key action in the workflow.
5. **Step 4: OpenAI Chat Model (lmChatOpenAi)** - This step performs a key action in the workflow.
6. **Step 5: get_channel_details (toolWorkflow)** - This step performs a key action in the workflow.
7. **Step 6: get_video_description (toolWorkflow)** - This step performs a key action in the workflow.
8. **Step 7: get_list_of_videos (toolWorkflow)** - This step performs a key action in the workflow.
9. **Step 8: get_list_of_comments (toolWorkflow)** - This step performs a key action in the workflow.
10. **Step 9: search (toolWorkflow)** - This step performs a key action in the workflow.
11. **Step 10: analyze_thumbnail (toolWorkflow)** - This step performs a key action in the workflow.
12. **Step 11: video_transcription (toolWorkflow)** - This step performs a key action in the workflow.
13. **Step 12: Postgres Chat Memory (memoryPostgresChat)** - This step performs a key action in the workflow.
14. **Step 13: AI Agent (agent)** - This step performs a key action in the workflow.
15. **Step 14: When chat message received (chatTrigger)** - This step performs a key action in the workflow.
16. **Step 15: Sticky Note (stickyNote)** - This step performs a key action in the workflow.
17. **Step 16: Get Comments (httpRequest)** - This step performs a key action in the workflow.
18. **Step 17: Execute Workflow Trigger (executeWorkflowTrigger)** - This step performs a key action in the workflow.
19. **Step 18: Get Channel Details (httpRequest)** - This step performs a key action in the workflow.
20. **Step 19: Get Video Description (httpRequest)** - This step performs a key action in the workflow.
21. **Step 20: Edit Fields (set)** - This step performs a key action in the workflow.
22. **Step 21: Run Query (httpRequest)** - This step performs a key action in the workflow.
23. **Step 22: Get Videos by Channel (httpRequest)** - This step performs a key action in the workflow.
24. **Step 23: Response (set)** - This step performs a key action in the workflow.
25. **Step 24: Switch (switch)** - This step performs a key action in the workflow.
26. **Step 25: Get Video Transcription (httpRequest)** - This step performs a key action in the workflow.
27. **Step 26: OpenAI (openAi)** - This step performs a key action in the workflow.
28. **Step 27: Sticky Note1 (stickyNote)** - This step performs a key action in the workflow.
29. **Step 28: Sticky Note2 (stickyNote)** - This step performs a key action in the workflow.
30. **Step 29: Sticky Note3 (stickyNote)** - This step performs a key action in the workflow.

## 💡 AI-Powered Ideas for Improvement
### Explain
This n8n workflow automates the process of gathering insights from YouTube videos, including analyzing comments, transcribing videos, and evaluating thumbnails. It uses various APIs to create a comprehensive understanding of video content, helping users generate more engaging material.

### Demonstrate
A business owner could use this workflow to analyze their YouTube channel's performance. By automating the extraction of comments and video data, they can quickly assess viewer preferences and improve future content, saving time and enhancing audience engagement.

### Imitate
1. Set up an n8n account and create a new workflow.
2. Add a Webhook Trigger to start the process.
3. Integrate nodes for YouTube API calls (e.g., get channel details, fetch comments).
4. Use OpenAI API for analyzing comments or transcriptions.
5. Store results in a database or send insights via email.

### Practice
Try modifying the workflow to include a new feature: add a node that analyzes video performance metrics (like views and likes) alongside comments and transcriptions. Test the workflow with a sample YouTube channel to see how it collects and processes data.

### WIIFM
Mastering this workflow allows you to offer valuable insights and content optimization services to clients, positioning you as an expert in automation and digital marketing. This can lead to new business opportunities and increased revenue as you help clients enhance their online presence.

## 🔧 Setup Instructions
1. **Connect Credentials:** OpenAI, Google Sheets, Slack, and other nodes must be authenticated.
2. **Customize Core Logic:** Review "Sticky Note9" and "Sticky Note3" for IDs, table names, and URLs.
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
