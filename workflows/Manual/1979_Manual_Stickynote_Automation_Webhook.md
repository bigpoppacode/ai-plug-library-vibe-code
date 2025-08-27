# Manual Stickynote Automation Webhook
  ## 🚀 What It Does
  Calls external APIs and uses **AI** to transform or decide, then routes the result downstream.
  
  ## 💼 Business Use Case
  Use as a **glue/API broker**: receive data, enrich/validate via APIs, and pass to downstream systems.
  
  ## ⚙️ How It Works
  1. **Trigger:** This workflow starts with **When clicking ‘Test workflow’**.
  2. **When clicking ‘Test workflow’** `manualTrigger` — configured for its default action.
3. **Google Gemini Chat Model For Summarization** `lmChatGoogleGemini` — options: "[object Object]", modelName: "models/gemini-2.0-flash-exp"
4. **Google Gemini Chat Model2** `lmChatGoogleGemini` — options: "[object Object]", modelName: "models/gemini-2.0-pro-exp"
5. **Sticky Note** `stickyNote` — width: "400", height: "300", content: "## Note

This template deals with the Wikipedia data extraction and summarization of content with the Bright Data. 

The LLM Data Extractor is responsible for producing a human rea…[truncated]"
6. **Sticky Note1** `stickyNote` — width: "500", height: "300", content: "## LLM Usages

Google Gemini Flash Exp model is being used to demonstrate the data extraction and summarization aspects.

Basic LLM Chain is being used for extracting the html to t…[truncated]"
7. **Sticky Note2** `stickyNote` — color: "4", width: "380", height: "420"
8. **Sticky Note3** `stickyNote` — color: "5", width: "340", height: "420"
9. **Set Wikipedia URL with Bright Data Zone** `set` — options: "[object Object]", assignments: "[object Object]"
10. **Wikipedia Web Request** `httpRequest` — method: **POST**, url: `https://api.brightdata.com/request`
11. **LLM Data Extractor** `chainLlm` — text: "={{ $json.data }}", messages: "[object Object]", promptType: "define"
12. **Concise Summary Generator** `chainSummarization` — options: "[object Object]", chunkingMode: "advanced"
13. **Summary Webhook Notifier** `httpRequest` — url: `https://webhook.site/ce41e056-c097-48c8-a096-9b876d3abbf7`
  
  ## 💡 AI-Powered Ideas for Improvement
  - **Explain:**  
  This workflow automates the extraction and summarization of Wikipedia data using Bright Data and Google Gemini models. It fetches the content from a specified Wikipedia URL, processes it to extract readable data, and generates a concise summary. The summary is then sent to a specified webhook URL for further use.

- **Demonstrate:**  
  A business owner could use this workflow to quickly gather and summarize information from Wikipedia on a specific topic for market research, saving time and ensuring consistency in data collection.

- **Imitate:**  
  1. Import this workflow into n8n.
  2. Set up your Bright Data and Google Gemini accounts.
  3. Update the Wikipedia URL and Bright Data Zone in the workflow.
  4. Configure the webhook URL for summary notifications.
  5. Test the workflow to ensure it performs the extraction and summarization correctly.

- **Practice:**  
  Create a test Wikipedia page and URL, then run the workflow to see how it processes the data and generates a summary. Experiment with different pages to understand how the workflow handles various content types.

- **WIIFM:**  
  Mastering this workflow enables you to offer content extraction and summarization services, helping businesses make informed decisions quickly. This expertise can attract clients looking for efficient research solutions, increasing your service offerings and revenue potential in automation.
  
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
  