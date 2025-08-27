# Manual Stickynote Automation Webhook
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
  **Explain:** This n8n workflow is designed to query the Perplexity AI service to generate a response comparing the differences between n8n and Make. It starts with a manual trigger, sets parameters such as system and user prompts, sends a POST request to the Perplexity API, and then cleans the output to extract the relevant content and citations.

**Demonstrate:** A developer could use this workflow to automate the process of comparing software tools by querying an AI, saving time and ensuring consistent outputs for presentations or reports.

**Imitate:** 1. Import the workflow into n8n. 2. Set up your Perplexity API credentials. 3. Customize the prompts in the "Set Params" node. 4. Run the workflow using the manual trigger to test and refine the outputs.

**Practice:** Create a similar workflow to compare two other tools or services you are interested in. Modify the "Set Params" node with your chosen prompts and observe how the AI responds.

**WIIFM:** Mastering this workflow enables you to offer AI-driven comparison services, enhancing your consultancy or automation business. It can attract clients seeking efficient ways to analyze and compare tools, generating additional income opportunities.
  
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
  