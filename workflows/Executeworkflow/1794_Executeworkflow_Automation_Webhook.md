# ExecuteWorkflow Automation Webhook
  ## 🚀 What It Does
  Automates a flow using set×2, toolHttpRequest, agent.
  
  ## 💼 Business Use Case
  Use as a **glue/API broker**: receive data, enrich/validate via APIs, and pass to downstream systems.
  
  ## ⚙️ How It Works
  1. **Trigger:** This workflow starts with **When Executed by Another Workflow**.
  2. **Tavily** `toolHttpRequest` — method: **POST**, url: `https://api.tavily.com/search`
3. **Anthropic Chat Model** `lmChatAnthropic` — options: "[object Object]"
4. **When Executed by Another Workflow** `executeWorkflowTrigger` — inputSource: "passthrough"
5. **Content Creator Agent** `agent` — promptType: "define", text: "={{ $json.query}}", options: "[object Object]"
6. **Response** `set` — assignments: "[object Object]", options: "[object Object]"
7. **Try Again** `set` — assignments: "[object Object]", options: "[object Object]"
  
  ## 💡 AI-Powered Ideas for Improvement
  **Explain:** This workflow automates content creation by searching the web for information using the Tavily API, then using an AI agent to generate a blog post based on the search results. It formats the content in HTML and ensures it is engaging and informative. If an error occurs during the process, it provides a retry mechanism.

**Demonstrate:** A content marketer could use this workflow to quickly generate blog posts on trending topics, ensuring the content is fresh and relevant, thus keeping their audience engaged and boosting their SEO.

**Imitate:** 
1. Import the workflow into n8n.
2. Connect your Tavily and AI service accounts.
3. Customize the search query to match your content needs.
4. Set the workflow to trigger as needed.
5. Test the workflow to ensure it generates the desired content.

**Practice:** Create a test query for a topic like "AI in healthcare," and run the workflow. Observe how the AI generates content and adjust the search depth and content style settings to see different outcomes.

**WIIFM:** Mastering this workflow enables you to offer automated content creation services, reducing the time and cost for clients to produce high-quality blogs. This can enhance your offerings in the AI automation business, attract more clients, and increase revenue.
  
  ## 🔧 Setup Instructions
  1. **Connect Credentials:** anthropicApi.
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
  