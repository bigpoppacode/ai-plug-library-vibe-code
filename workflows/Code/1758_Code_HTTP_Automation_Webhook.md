# Code HTTP Automation Webhook
  ## 🚀 What It Does
  Calls external APIs and uses **AI** to transform or decide, then routes the result downstream.
  
  ## 💼 Business Use Case
  Use as a **glue/API broker**: receive data, enrich/validate via APIs, and pass to downstream systems.
  
  ## ⚙️ How It Works
  1. **Trigger:** This workflow starts with **chat_message_received**.
  2. **chat_message_received** `chatTrigger` — options: "[object Object]"
3. **youtube_search** `toolWorkflow` — name: "youtube_search", workflowId: "[object Object]", description: "Call this tool to search for trending videos based on a query."
4. **openai_llm** `lmChatOpenAi` — options: "[object Object]"
5. **window_buffer_memory** `memoryBufferWindow` — configured for its default action.
6. **Sticky Note1** `stickyNote` — color: "7", width: "693.2572054941234", height: "354.53098948245656"
7. **get_videos1** `youTube` — resource: **video**
8. **Sticky Note2** `stickyNote` — color: "5", width: "1607", height: "520"
9. **AI Agent** `agent` — options: "[object Object]"
  
  ## 💡 AI-Powered Ideas for Improvement
  ### Explain
This workflow helps YouTube creators discover trending videos in their niche. It starts by receiving a chat message to identify the niche. The AI Agent then uses a YouTube search tool up to three times to find trending videos. It analyzes data like views, likes, and comments and provides insights on trending themes, not just individual videos, helping creators focus on content that resonates with audiences.

### Demonstrate
A content creator can use this workflow to identify popular topics in their niche, ensuring their videos align with current trends. This could help increase their viewership and engagement by tapping into what the audience is currently interested in.

### Imitate
1. Import the workflow into n8n.
2. Connect your YouTube account.
3. Set up a chat trigger to initiate the workflow.
4. Customize the AI Agent to refine the niche suggestions.
5. Test the workflow to ensure it accurately identifies and reports trending topics.

### Practice
Create a sample YouTube channel and select a niche. Use this workflow to identify trending topics within that niche and produce a video on one of the suggested topics. Track the video’s performance to see if it aligns with trending insights.

### WIIFM
Mastering this workflow can help you offer trend analysis services to YouTube creators, enhancing their content strategy. This can lead to monetization opportunities through consultancy or subscription-based services, increasing your income in the AI automation business.
  
  ## 🔧 Setup Instructions
  1. **Connect Credentials:** youTubeOAuth2Api.
2. **API Contracts:** Validate required headers and 2xx/4xx handling; add retries for 429/5xx.
  
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
  