# Code Webhook Automation Webhook
  ## 🚀 What It Does
  Automates a flow using httpRequest×2, respondToWebhook, stickyNote.
  
  ## 💼 Business Use Case
  Use as a **glue/API broker**: receive data, enrich/validate via APIs, and pass to downstream systems.
  
  ## ⚙️ How It Works
  1. **Trigger:** This workflow starts with **Sticky Note**.
  2. **Sticky Note** `stickyNote` — color: "4", width: "620", height: "880"
3. **Get Url** `webhook` — method: **POST**, path: `/2944c8f6-03cd-4ab8-8b8e-cb033edf877a`
4. **Get URL Page Contents** `httpRequest` — url: `={{ $json.body.url }}`
5. **Respond with detected entities** `code` — jsCode: "// Clean and prepare HTML for API request
const html = $input.item.json.data;
// Trim if too large (optional)
const trimmedHtml = html.length > 100000 ? html.substring(0, 100000) :…[truncated]"
6. **Google Entities** `httpRequest` — method: **POST**, url: `https://language.googleapis.com/v1/documents:analyzeEntities`
7. **Respond to Webhook** `respondToWebhook` — options: "[object Object]"
  
  ## 💡 AI-Powered Ideas for Improvement
  **Explain**  
This n8n workflow extracts named entities (like people, organizations, and locations) from web pages using Google's Natural Language API. It starts by receiving a URL via a webhook, fetches the page content, processes it through Google's entity recognition service, and returns structured data about the detected entities.

**Demonstrate**  
A business owner might use this workflow to analyze competitor websites to extract key entities mentioned, helping in market research and competitive analysis.

**Imitate**  
1. Import the workflow into n8n.  
2. Replace "YOUR-GOOGLE-API-KEY" with your actual API key.  
3. Activate the workflow.  
4. Use the webhook URL as an endpoint and send a POST request with the URL to analyze.  
5. Review the returned entity data.

**Practice**  
Create a test using a website URL of your choice. Run the workflow and observe the returned entity data. Try modifying the URL and see how the detected entities change.

**WIIFM**  
Mastering this workflow can help you offer valuable web analysis services to clients, enabling them to gain insights from web content effectively. This skill can expand your service offerings and increase your potential for income in the automation business.
  
  ## 🔧 Setup Instructions
  1. **API Contracts:** Validate required headers and 2xx/4xx handling; add retries for 429/5xx.
  
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
  