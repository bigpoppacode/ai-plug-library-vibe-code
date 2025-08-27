# Manual Stickynote Automation Webhook
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
6. **Google Gemini Chat Model1** `lmChatGoogleGemini` — options: "[object Object]", modelName: "models/gemini-2.0-flash-exp"
7. **Structured Output Parser** `outputParserStructured` — jsonSchemaExample: "[{
  "city": "string",
  "hotels": [
    {
      "name": "string",
      "address": "string",
      "description": "string",
      "website": "string",
      "area": "string (optio…[truncated]"
8. **Sticky Note** `stickyNote` — width: "400", height: "220", content: "## Note

Deals with the Bing Copilot Search using the Bright Data Web Scraper API.

The Basic LLM Chain and summarization is done to demonstrate the usage of the N8N AI capabilitie…[truncated]"
9. **Sticky Note1** `stickyNote` — width: "420", height: "220", content: "## LLM Usages

Google Gemini Flash Exp model is being used.

Basic LLM Chain makes use of the Output formatter for formatting the response

Summarization Chain is being used for su…[truncated]"
10. **Perform a Bing Copilot Request** `httpRequest` — method: **POST**, url: `https://api.brightdata.com/datasets/v3/trigger`
11. **Set Snapshot Id** `set` — options: "[object Object]", assignments: "[object Object]"
  
  ## 💡 AI-Powered Ideas for Improvement
  ### Explain
This n8n workflow automates the process of extracting and summarizing Bing Copilot search results using Google Gemini AI and Bright Data. It starts with a manual trigger, performs a Bing search request, and processes the search results through AI models for summarization and structured data extraction. The workflow outputs a summary and structured data, which are then sent via webhook notifications.

### Demonstrate
A travel agency could use this workflow to automatically generate summaries of top hotels in a city. This helps them quickly provide clients with concise and structured information, improving customer service and decision-making.

### Imitate
1. Import the workflow into n8n.
2. Connect your Bright Data and Google Gemini accounts.
3. Set up the Bing search request parameters.
4. Customize the structured data extraction for your needs.
5. Test the workflow to ensure it generates and sends summaries correctly.

### Practice
Create a test search query for "top restaurants in Paris" and run the workflow. Observe how it processes the data and delivers structured summaries. Adjust the extraction settings to refine the output.

### WIIFM
Mastering this workflow enables you to offer advanced data extraction and summarization services, adding value to your clients by transforming raw search data into actionable insights, potentially leading to new business opportunities and increased revenue.
  
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
  