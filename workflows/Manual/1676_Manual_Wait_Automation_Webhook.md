# Manual Wait Automation Webhook
  ## 🚀 What It Does
  Calls external APIs and uses **AI** to transform or decide, then routes the result downstream.
  
  ## 💼 Business Use Case
  Use as a **glue/API broker**: receive data, enrich/validate via APIs, and pass to downstream systems.
  
  ## ⚙️ How It Works
  1. **Trigger:** This workflow starts with **When clicking ‘Test workflow’**.
  2. **When clicking ‘Test workflow’** `manualTrigger` — configured for its default action.
3. **Google Gemini Chat Model** `lmChatGoogleGemini` — options: "[object Object]", modelName: "models/gemini-2.0-flash-thinking-exp-01-21"
4. **Default Data Loader** `documentDefaultDataLoader` — options: "[object Object]"
5. **Recursive Character Text Splitter** `textSplitterRecursiveCharacterTextSplitter` — options: "[object Object]", chunkOverlap: "100"
6. **Sticky Note** `stickyNote` — width: "400", height: "200", content: "## Note

Deals with the Glassdoor data extraction by using the Bright Data Web Scrapper API.

The summarization chain is being used to demonstrate the usage of the N8N AI capabilit…[truncated]"
7. **Sticky Note1** `stickyNote` — width: "420", height: "200", content: "## LLM Usages

Google Gemini Flash Exp model is being used.

Summarization Chain is being used for summarization of the content"
8. **HTTP Request to Glassdoor** `httpRequest` — method: **POST**, url: `https://api.brightdata.com/datasets/v3/trigger`
9. **Set Snapshot Id** `set` — options: "[object Object]", assignments: "[object Object]"
  
  ## 💡 AI-Powered Ideas for Improvement
  **Explain:** This n8n workflow automates the process of extracting and summarizing company information from Glassdoor using the Bright Data Web Scraper API and Google Gemini for AI-powered summarization. It retrieves data from Glassdoor, waits for the extraction process to complete, downloads the data, and summarizes it using AI before sending the summary to a specified webhook for further use.

**Demonstrate:** A business owner could use this workflow to quickly gather and summarize company reviews and ratings from Glassdoor, helping them make informed decisions about potential partners or competitors.

**Imitate:** To adapt this workflow, import it into n8n, set up the required API credentials, modify the Glassdoor URL to target specific companies, and configure the webhook URL where the summaries should be sent. Test the workflow using the manual trigger to ensure it operates as expected.

**Practice:** Create a trial run by setting up a test Glassdoor URL in the workflow and observe how the data is extracted and summarized. Adjust the workflow to summarize additional data points or change the summarization model as needed.

**WIIFM:** Mastering this workflow enables you to provide valuable insights into company data, enhancing your service offerings. This can attract clients seeking competitive analysis or market research, potentially increasing your revenue stream in the AI automation business.
  
  ## 🔧 Setup Instructions
  1. **Connect Credentials:** googlePalmApi, httpHeaderAuth.
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
  