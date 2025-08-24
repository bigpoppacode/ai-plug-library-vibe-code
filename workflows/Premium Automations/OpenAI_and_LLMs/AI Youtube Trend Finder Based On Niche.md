# AI Youtube Trend Finder Based On Niche

## 🚀 What It Does
This workflow automates a process involving agent, chatTrigger, toolWorkflow.

## 💼 Business Use Case
Use it to automate research, content creation, or data analysis. It saves hours of manual work.

## ⚙️ How It Works
1.  **Trigger:** This workflow starts with a **chat_message_received** node.
2. **Step 1: AI Agent (agent)** - This step performs a key action in the workflow.
3. **Step 2: chat_message_received (chatTrigger)** - This step performs a key action in the workflow.
4. **Step 3: youtube_search (toolWorkflow)** - This step performs a key action in the workflow.
5. **Step 4: openai_llm (lmChatOpenAi)** - This step performs a key action in the workflow.
6. **Step 5: window_buffer_memory (memoryBufferWindow)** - This step performs a key action in the workflow.
7. **Step 6: Sticky Note1 (stickyNote)** - This step performs a key action in the workflow.
8. **Step 7: find_video_data1 (httpRequest)** - This step performs a key action in the workflow.
9. **Step 8: get_videos1 (youTube)** - This step performs a key action in the workflow.
10. **Step 9: response1 (set)** - This step performs a key action in the workflow.
11. **Step 10: group_data1 (set)** - This step performs a key action in the workflow.
12. **Step 11: save_data_to_memory1 (code)** - This step performs a key action in the workflow.
13. **Step 12: retrieve_data_from_memory1 (code)** - This step performs a key action in the workflow.
14. **Step 13: loop_over_items1 (splitInBatches)** - This step performs a key action in the workflow.
15. **Step 14: if_longer_than_3_ (if)** - This step performs a key action in the workflow.
16. **Step 15: Sticky Note2 (stickyNote)** - This step performs a key action in the workflow.

## 💡 AI-Powered Ideas for Improvement
### Explain
This n8n workflow automates the process of finding trending YouTube videos based on a user's specified niche. It uses an AI agent to interact with the user, conducts searches via YouTube, analyzes the results, and presents insights about video trends, including links to the content.

### Demonstrate
A business owner might use this workflow to quickly identify trending content in their industry for content creation or marketing strategies. For example, a digital marketing consultant can leverage it to keep clients informed about popular topics in real-time, enhancing their content strategy.

### Imitate
1. Import the workflow into n8n.
2. Set up a Webhook Trigger to receive user input.
3. Use the AI Agent node to ask for the niche.
4. Implement the YouTube Search node to find videos.
5. Process the results with a Code node to analyze data.
6. Set responses to send insights back to the user.

### Practice
Try modifying the workflow to search for videos on a different platform, like TikTok, by adjusting the API calls and parameters. This will help reinforce how to adapt workflows for different data sources.

### WIIFM
Mastering this workflow can help you provide valuable insights to clients, enhancing their marketing strategies. By automating video trend analysis, you can save time and offer a unique service, potentially increasing your income as an automation consultant.

## 🔧 Setup Instructions
1. **Connect Credentials:** OpenAI, Google Sheets, Slack, and other nodes must be authenticated.
2. **Customize Core Logic:** Review "AI Agent" and "Sticky Note2" for IDs, table names, and URLs.
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
