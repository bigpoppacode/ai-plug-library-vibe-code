# Manual Stickynote Automation Webhook
  ## 🚀 What It Does
  Calls external APIs and uses **AI** to transform or decide, then routes the result downstream.
  
  ## 💼 Business Use Case
  Use as a **glue/API broker**: receive data, enrich/validate via APIs, and pass to downstream systems.
  
  ## ⚙️ How It Works
  1. **Trigger:** This workflow starts with **When clicking ‘Test workflow’**.
  2. **When clicking ‘Test workflow’** `manualTrigger` — configured for its default action.
3. **Sticky Note** `stickyNote` — width: "400", height: "300", content: "## Note

This workflow deals with the brand content extraction by utilizing the Bright Data Web Unlocker Product.

The Basic LLM Chain, Information Extraction, Summarization Chain …[truncated]"
4. **Sticky Note1** `stickyNote` — width: "480", height: "300", content: "## LLM Usages

Google Gemini Flash Exp model is being used.

Basic LLM Chain Data Extractor.

Information Extraction is being used for the handling the custom sentiment analysis wi…[truncated]"
5. **Google Gemini Chat Model for Summary** `lmChatGoogleGemini` — options: "[object Object]", modelName: "models/gemini-2.0-flash-exp"
6. **Google Gemini Chat Model for Data Extract** `lmChatGoogleGemini` — options: "[object Object]", modelName: "models/gemini-2.0-flash-exp"
7. **Google Gemini Chat Model for Sentiment Analyzer** `lmChatGoogleGemini` — options: "[object Object]", modelName: "models/gemini-2.0-flash-exp"
8. **Sticky Note2** `stickyNote` — color: "4", width: "1100", height: "460"
9. **Sticky Note3** `stickyNote` — color: "6", width: "1000", height: "480"
10. **Sticky Note4** `stickyNote` — color: "3", width: "1100", height: "480"
11. **Set URL and Bright Data Zone** `set` — options: "[object Object]", assignments: "[object Object]"
12. **Perform Bright Data Web Request** `httpRequest` — method: **POST**, url: `https://api.brightdata.com/request`
13. **Markdown to Textual Data Extractor** `chainLlm` — text: "=You need to analyze the below markdown and convert to textual data. Please do not output with your own thoughts. Make sure to output with textual data only with no links, scripts,…[truncated]", messages: "[object Object]", promptType: "define"
14. **Summarize Content** `chainSummarization` — options: "[object Object]", chunkingMode: "advanced"
15. **AI Sentiment Analyzer with the structured response** `informationExtractor` — text: "=Perform the sentiment analysis on the below content and output with the structured information.

Here's the content:

{{ $('Perform Bright Data Web Request').item.json.data }}", options: "[object Object]", schemaType: "manual"
16. **Initiate a Webhook Notification for Markdown to Textual Data Extraction** `httpRequest` — url: `https://webhook.site/3c36d7d1-de1b-4171-9fd3-643ea2e4dd76`
17. **Create a binary data for textual data** `function` — functionCode: "items[0].binary = {
  data: {
    data: new Buffer(JSON.stringify(items[0].json, null, 2)).toString('base64')
  }
};
return items;"
18. **Initiate a Webhook Notification for Summarization** `httpRequest` — url: `https://webhook.site/3c36d7d1-de1b-4171-9fd3-643ea2e4dd76`
19. **Create a binary data for summary** `function` — functionCode: "items[0].binary = {
  data: {
    data: new Buffer(JSON.stringify(items[0].json, null, 2)).toString('base64')
  }
};
return items;"
20. **Initiate a Webhook Notification for AI Sentiment Analyzer** `httpRequest` — url: `https://webhook.site/3c36d7d1-de1b-4171-9fd3-643ea2e4dd76`
21. **Create a binary data for sentiment analysis** `function` — functionCode: "items[0].binary = {
  data: {
    data: new Buffer(JSON.stringify(items[0].json, null, 2)).toString('base64')
  }
};
return items;"
22. **Write the textual file to disk** `readWriteFile` — operation: **write**
23. **Write the summary file to disk** `readWriteFile` — operation: **write**
24. **Write the AI Sentiment analysis file to disk** `readWriteFile` — operation: **write**
  
  ## 💡 AI-Powered Ideas for Improvement
  **Explain:**  
This n8n workflow automates the extraction, summarization, and sentiment analysis of brand content from the web. It fetches web data using Bright Data, converts it into text, summarizes the content with Google Gemini, and analyzes its sentiment. The results are then saved to the disk and sent via webhook notifications.

**Demonstrate:**  
A business might use this workflow to monitor brand mentions online, allowing marketing teams to quickly assess public sentiment and respond accordingly, enhancing brand management and customer engagement.

**Imitate:**  
1. Import the workflow to n8n.
2. Connect your Bright Data and Google Gemini accounts.
3. Set your target URL in the "Set URL and Bright Data Zone" node.
4. Test the workflow and adjust the webhook URLs to your endpoints.
5. Run the workflow to see it extract, summarize, and analyze content.

**Practice:**  
Create a simple test by using a webpage URL with known content. Modify the workflow to extract and analyze this data, practicing how to interpret the sentiment analysis results.

**WIIFM:**  
Understanding this workflow can enhance your ability to offer AI-driven content analysis services. This can help you attract clients looking for automated brand monitoring solutions, increasing your market value and potential income in the AI automation business.
  
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
  