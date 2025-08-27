# Manual Stickynote Automate Webhook
  ## 🚀 What It Does
  Automates a flow using set×2, stickyNote×2, manualTrigger.
  
  ## 💼 Business Use Case
  Use as a **glue/API broker**: receive data, enrich/validate via APIs, and pass to downstream systems.
  
  ## ⚙️ How It Works
  1. **Trigger:** This workflow starts with **When clicking ‘Test workflow’**.
  2. **When clicking ‘Test workflow’** `manualTrigger` — configured for its default action.
3. **Sticky Note** `stickyNote` — width: "480", height: "300", content: "[redacted]"
4. **Sticky Note1** `stickyNote` — color: "5", width: "480", height: "120"
5. **Set Params** `set` — options: "[object Object]", assignments: "[object Object]"
6. **Perplexity Request** `httpRequest` — method: **POST**, url: `https://api.perplexity.ai/chat/completions`
7. **Clean Output** `set` — options: "[object Object]", assignments: "[object Object]"
  
  ## 💡 AI-Powered Ideas for Improvement
  **Explain:** This n8n workflow is designed to query the Perplexity AI API to compare two platforms, n8n and Make, and retrieve the differences between them. It starts with a manual trigger, sets the necessary parameters for the API request, sends a POST request to the Perplexity AI API, and then processes the response to clean and format the output for further use.

**Demonstrate:** A consultant might use this workflow to automatically generate comparative insights between two software tools for a client presentation, saving time on manual research and ensuring they have up-to-date information.

**Imitate:** 
1. Import the workflow into n8n.
2. Set up your Perplexity API credentials as instructed in the Sticky Note.
3. Customize the `user_prompt` in the "Set Params" node to fit your query.
4. Test the workflow to ensure it retrieves and formats the response correctly.

**Practice:** Create a similar workflow to compare two different topics or tools by adjusting the `user_prompt` in the "Set Params" node, and observe how the workflow processes and outputs the information.

**WIIFM:** Mastering this workflow can help you provide automated, up-to-date comparisons and insights for clients, enhancing your consulting services. This capability can increase your service offerings and potentially lead to higher income through more comprehensive automation solutions.
  
  ## 🔧 Setup Instructions
  1. **Connect Credentials:** httpBasicAuth, httpHeaderAuth.
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
  