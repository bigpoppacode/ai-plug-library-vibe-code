# Manual Markdown Automation Webhook
  ## 🚀 What It Does
  Calls external APIs and uses **AI** to transform or decide, then routes the result downstream.
  
  ## 💼 Business Use Case
  Use as a **glue/API broker**: receive data, enrich/validate via APIs, and pass to downstream systems.
  
  ## ⚙️ How It Works
  1. **Trigger:** This workflow starts with **When clicking ‘Test workflow’**.
  2. **When clicking ‘Test workflow’** `manualTrigger` — configured for its default action.
3. **Google Gemini Chat Model For Summarization** `lmChatGoogleGemini` — options: "[object Object]", modelName: "models/gemini-2.0-flash-exp"
4. **Sticky Note** `stickyNote` — width: "400", height: "300", content: "## Note

Deals with the Indeed Company web scraping by utilizing Bright Data Web Unlocker Product.

The Basic LLM Chain, Summarization and AI Agent are being used to demonstrate th…[truncated]"
5. **Sticky Note1** `stickyNote` — width: "480", height: "300", content: "## LLM Usages

Google Gemini Flash Exp model is being used.

Basic LLM Chain Data Extractor.

Summarization Chain is being used for the summarization of search results.

The AI Age…[truncated]"
6. **Google Gemini Chat Model** `lmChatGoogleGemini` — options: "[object Object]", modelName: "models/gemini-2.0-flash-exp"
7. **Google Gemini Chat Model for AI Agent** `lmChatGoogleGemini` — options: "[object Object]", modelName: "models/gemini-2.0-flash-exp"
8. **Initiate a Webhook Request** `toolHttpRequest` — method: **POST**, url: `https://webhook.site/daf9d591-a130-4010-b1d3-0c66f8fcf467`
9. **Set Indeed Search Query** `set` — options: "[object Object]", assignments: "[object Object]"
10. **Perform Indeed Web Request** `httpRequest` — method: **POST**, url: `https://api.brightdata.com/request`
11. **Markdown to Textual Data Extractor** `chainLlm` — text: "=You need to analyze the below markdown and convert to textual data.

{{ $json.data }}", messages: "[object Object]", promptType: "define"
12. **Convert Markdown to HTML** `markdown` — mode: "markdownToHtml", options: "[object Object]", markdown: "={{ $json.data }}"
13. **Indeed Summarization** `chainSummarization` — options: "[object Object]"
14. **Initiate a Webhook Notification for Markdown to HTML Response** `httpRequest` — url: `https://webhook.site/daf9d591-a130-4010-b1d3-0c66f8fcf467`
15. **Indeed Expert AI Agent** `agent` — text: "=You are an Indeed Expert. You need to format the search result  and push it to the Webhook via HTTP Request. Here is the search result - {{ $('Markdown to Textual Data Extractor')…[truncated]", options: "[object Object]", promptType: "define"
16. **Initiate a Webhook Notification for Summarization** `httpRequest` — url: `https://webhook.site/daf9d591-a130-4010-b1d3-0c66f8fcf467`
  
  ## 💡 AI-Powered Ideas for Improvement
  - **Explain:** This workflow scrapes company information from Indeed using the Bright Data Web Unlocker, processes the data with Google Gemini AI models for extraction and summarization, and sends the results via a webhook. It automates the collection and summarization of company data for analysis or reporting.

- **Demonstrate:** A consultant could use this workflow to gather and summarize company data from Indeed for market research, helping businesses understand competitors or potential partners more efficiently.

- **Imitate:** 1. Import the workflow into n8n. 2. Set your Indeed search query in the "Set Indeed Search Query" node. 3. Connect your Bright Data and Google Gemini accounts. 4. Test the workflow to ensure data is correctly scraped and summarized. 5. Adjust the webhook URL to receive the output.

- **Practice:** Create a test workflow that scrapes data from a different website using Bright Data, processes it with a different AI model, and sends the output to a webhook. This will help you understand the flexibility of the workflow.

- **WIIFM:** Mastering this workflow allows you to offer automated data extraction and summarization services to clients, saving them time and providing valuable insights. This can enhance your service offerings and increase your income as an automation consultant.
  
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
  