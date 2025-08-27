# Manual Stickynote Automation Webhook
  ## 🚀 What It Does
  Calls external APIs and uses **AI** to transform or decide, then routes the result downstream.
  
  ## 💼 Business Use Case
  Use as a **glue/API broker**: receive data, enrich/validate via APIs, and pass to downstream systems.
  
  ## ⚙️ How It Works
  1. **Trigger:** This workflow starts with **When clicking ‘Test workflow’**.
  2. **When clicking ‘Test workflow’** `manualTrigger` — configured for its default action.
3. **Sticky Note** `stickyNote` — width: "400", height: "300", content: "## Note

This workflow deals with the structured data extraction by utilizing Bright Data Web Unlocker Product.

The Basic LLM Chain, Information Extraction, are being used to demo…[truncated]"
4. **Sticky Note1** `stickyNote` — width: "480", height: "300", content: "## LLM Usages

Google Gemini Flash Exp model is being used.

Basic LLM Chain Data Extractor.

Information Extraction is being used for the handling the custom sentiment analysis wi…[truncated]"
5. **Google Gemini Chat Model for Data Extract** `lmChatGoogleGemini` — options: "[object Object]", modelName: "models/gemini-2.0-flash-exp"
6. **Google Gemini Chat Model for Sentiment Analyzer** `lmChatGoogleGemini` — options: "[object Object]", modelName: "models/gemini-2.0-flash-exp"
7. **Google Gemini Chat Model** `lmChatGoogleGemini` — options: "[object Object]", modelName: "models/gemini-2.0-flash-exp"
8. **Set URL and Bright Data Zone** `set` — options: "[object Object]", assignments: "[object Object]"
9. **Perform Bright Data Web Request** `httpRequest` — method: **POST**, url: `https://api.brightdata.com/request`
10. **Markdown to Textual Data Extractor** `chainLlm` — text: "=You need to analyze the below markdown and convert to textual data. Please do not output with your own thoughts. Make sure to output with textual data only with no links, scripts,…[truncated]", messages: "[object Object]", promptType: "define"
11. **Topic Extractor with the structured response** `informationExtractor` — text: "=Perform the topic analysis on the below content and output with the structured information.

Here's the content:

{{ $('Perform Bright Data Web Request').item.json.data }}", options: "[object Object]", schemaType: "manual"
12. **Initiate a Webhook Notification for Markdown to Textual Data Extraction** `httpRequest` — url: `https://webhook.site/3c36d7d1-de1b-4171-9fd3-643ea2e4dd76`
13. **Trends by location and category with the structured response** `informationExtractor` — text: "=Perform the data analysis on the below content and output with the structured information by clustering the emerging trends by location and category

Here's the content:

{{ $('Pe…[truncated]", options: "[object Object]", schemaType: "manual"
14. **Initiate a Webhook Notification for AI Sentiment Analyzer** `httpRequest` — url: `https://webhook.site/3c36d7d1-de1b-4171-9fd3-643ea2e4dd76`
15. **Create a binary file for topics** `function` — functionCode: "items[0].binary = {
  data: {
    data: new Buffer(JSON.stringify(items[0].json, null, 2)).toString('base64')
  }
};
return items;"
16. **Initiate a Webhook Notification for trends by location and category** `httpRequest` — url: `https://webhook.site/3c36d7d1-de1b-4171-9fd3-643ea2e4dd76`
17. **Create a binary data for tends** `function` — functionCode: "items[0].binary = {
  data: {
    data: new Buffer(JSON.stringify(items[0].json, null, 2)).toString('base64')
  }
};
return items;"
18. **Write the topics file to disk** `readWriteFile` — operation: **write**
19. **Write the trends file to disk** `readWriteFile` — operation: **write**
  
  ## 💡 AI-Powered Ideas for Improvement
  **Explain:** This workflow automates the process of extracting structured data from web pages using Bright Data Web Unlocker. It retrieves data from a specified URL, processes it with Google Gemini AI models to extract information and perform sentiment analysis, and then saves the results. Notifications are sent via webhooks, and the data is stored in binary files on disk.

**Demonstrate:** A business owner could use this workflow to monitor online news articles for emerging trends and sentiment, helping to inform marketing strategies or product development by understanding public perception and trending topics.

**Imitate:** 
1. Import the workflow into n8n.
2. Set the desired URL in "Set URL and Bright Data Zone."
3. Connect your Bright Data and Google Gemini accounts.
4. Configure webhooks to receive notifications.
5. Test the workflow with the "Test workflow" button.

**Practice:** Set up a test using a public news website URL. Run the workflow and analyze the trends and sentiment extracted. Modify the URL or parameters to see how different data affects the output.

**WIIFM:** Mastering this workflow enables you to offer data extraction and analysis services, providing clients with valuable insights from online content. This can enhance decision-making and increase the value of your AI automation business, attracting more clients and generating income.
  
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
  