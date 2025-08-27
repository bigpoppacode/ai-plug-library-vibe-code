# HTTP Stickynote Automation Webhook
  ## 🚀 What It Does
  Automates a flow using set×2, executeWorkflowTrigger, stickyNote.
  
  ## 💼 Business Use Case
  Use as a **glue/API broker**: receive data, enrich/validate via APIs, and pass to downstream systems.
  
  ## ⚙️ How It Works
  1. **Trigger:** This workflow starts with **When Executed by Another Workflow**.
  2. **When Executed by Another Workflow** `executeWorkflowTrigger` — inputSource: "passthrough"
3. **Extract API Response** `set` — options: "[object Object]", assignments: "[object Object]"
4. **Workflow Overview** `stickyNote` — width: "1080", height: "300", content: "## Perplexity Research Workflow Overview
This workflow takes a user query, formats it using a system prompt, and sends it to the Perplexity AI Sonar model for search.
Responses are…[truncated]"
5. **Perplexity Research Content1** `httpRequest` — method: **POST**, url: `https://api.perplexity.ai/chat/completions`
6. **Set Prompt Variables** `set` — options: "[object Object]", assignments: "[object Object]"
  
  ## 💡 AI-Powered Ideas for Improvement
  **Explain:**  
This n8n workflow is designed to take a user query and use it to interact with the Perplexity AI Sonar model. It starts when triggered by another workflow, setting up the query with specific prompt variables. The query is then sent to the AI model, which processes it and returns a response. The workflow extracts this response and formats it for further use, ensuring users receive a clear and concise output based on their input query.

**Demonstrate:**  
A business owner could use this workflow to automate research tasks, quickly retrieving detailed information from Perplexity AI to inform decision-making, saving time and reducing manual effort.

**Imitate:**  
1. Import the workflow into your n8n setup.  
2. Connect necessary credentials to Perplexity AI.  
3. Set up another workflow to trigger this one.  
4. Customize the prompt variables to suit your query needs.  
5. Test the workflow with sample queries to ensure it functions correctly.

**Practice:**  
Create a simple trigger workflow that sends a predefined query through this workflow. Observe how the response is processed and customize the prompt to see different outputs.

**WIIFM:**  
Mastering this workflow allows you to offer advanced AI-powered research capabilities to clients, enhancing your service offerings. This can lead to new business opportunities, increased client satisfaction, and a competitive edge in the AI automation market.
  
  ## 🔧 Setup Instructions
  1. **Connect Credentials:** httpHeaderAuth.
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
  