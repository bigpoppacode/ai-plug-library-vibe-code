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
  **Explain**:  
This n8n workflow helps YouTube creators find trending videos in their niche. It starts when a chat message is received, prompting the AI agent to identify the user's niche. The workflow then uses a YouTube search tool to find trending videos, analyzes the data, and provides insights into what content is trending, including view counts, likes, and comments.

**Demonstrate**:  
A YouTube content creator can use this workflow to discover trending topics in their niche, allowing them to create timely and relevant content that captures audience interest and potentially increases their channel's visibility and engagement.

**Imitate**:  
1. Import the workflow into n8n.
2. Set up your YouTube and OpenAI credentials.
3. Customize the AI agent to match your niche requirements.
4. Test the workflow with a chat message to trigger the search and analysis.
5. Review the insights and apply them to your content creation strategy.

**Practice**:  
Create a test YouTube account and use the workflow to find trending topics in a specific niche. Analyze the results and plan a mock content strategy based on the insights provided by the workflow.

**WIIFM**:  
Mastering this workflow can help you offer content strategy services to YouTube creators, enabling them to capitalize on trending topics. This can enhance your service offerings and create new revenue streams in the AI automation business, positioning you as a valuable partner for content creators.
  
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
  