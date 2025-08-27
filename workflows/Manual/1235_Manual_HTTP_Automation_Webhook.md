# Manual HTTP Automation Webhook
  ## 🚀 What It Does
  Monitors events, processes them, and **notifies** people/apps (Slack/Email) with structured updates.
  
  ## 💼 Business Use Case
  Use as a **glue/API broker**: receive data, enrich/validate via APIs, and pass to downstream systems.
  
  ## ⚙️ How It Works
  1. **Trigger:** This workflow starts with **When clicking ‘Test workflow’**.
  2. **When clicking ‘Test workflow’** `manualTrigger` — configured for its default action.
3. **Sticky Note** `stickyNote` — width: "400", height: "300", content: "## Note

This workflow deals with the structured data extraction by utilizing Bright Data Web Unlocker Product.

The Basic LLM Chain, Information Extraction, Summarization Chain ar…[truncated]"
4. **Sticky Note1** `stickyNote` — width: "480", height: "300", content: "## LLM Usages

Google Gemini Flash Exp model is being used.

Basic LLM Chain Data Extractor.

Information Extraction is being used for the handling the structured data extraction.
…[truncated]"
5. **Google Gemini Chat Model for Data Extract** `lmChatGoogleGemini` — options: "[object Object]", modelName: "models/gemini-2.0-flash-exp"
6. **Google Gemini Chat Model for Summarization** `lmChatGoogleGemini` — options: "[object Object]", modelName: "models/gemini-2.0-flash-exp"
7. **Google Gemini Chat Model for Structured Data Extract** `lmChatGoogleGemini` — options: "[object Object]", modelName: "models/gemini-2.0-flash-exp"
8. **Set URL and Bright Data Zone** `set` — options: "[object Object]", assignments: "[object Object]"
9. **Perform Bright Data Web Request** `httpRequest` — method: **POST**, url: `https://api.brightdata.com/request`
10. **Markdown to Textual Data Extractor** `chainLlm` — text: "=You need to analyze the below markdown and convert to textual data. Please do not output with your own thoughts. Make sure to output with textual data only with no links, scripts,…[truncated]", messages: "[object Object]", promptType: "define"
11. **Initiate a Webhook Notification for Markdown to Textual Data Extraction** `httpRequest` — url: `https://webhook.site/3c36d7d1-de1b-4171-9fd3-643ea2e4dd76`
12. **Structured Data Extractor** `informationExtractor` — text: "=Extract the Google Trend Data in JSON.

Here's the content:

 {{ $json.text }}", options: "[object Object]", schemaType: "manual"
13. **Create a binary data** `function` — functionCode: "items[0].binary = {
  data: {
    data: new Buffer(JSON.stringify(items[0].json, null, 2)).toString('base64')
  }
};
return items;"
14. **Summarize Google Trends** `chainSummarization` — options: "[object Object]", chunkingMode: "advanced"
15. **Write the file to disk** `readWriteFile` — operation: **write**
16. **Initiate a Webhook Notification for Summarization** `httpRequest` — url: `https://webhook.site/3c36d7d1-de1b-4171-9fd3-643ea2e4dd76`
17. **Send Summary to Gmail** `gmail` — sendTo: "ranjancse@gmail.com", message: "={{ $json.response.text }}", options: "[object Object]"
  
  ## 💡 AI-Powered Ideas for Improvement
  ### Explain
This n8n workflow extracts Google Trend data using Bright Data's Web Unlocker and Google Gemini models. It fetches data from a set URL, converts it into textual data, extracts structured data, summarizes it, and sends the summary via email. The workflow involves multiple steps, including web requests, data extraction, and email notifications, automating the process of data collection and analysis.

### Demonstrate
A digital marketing consultant could use this workflow to monitor trending topics on YouTube via Google Trends. This helps in creating timely content strategies based on real-time data insights, enhancing engagement and relevance.

### Imitate
1. Import the workflow into n8n.
2. Set up Bright Data and Google Gemini credentials.
3. Modify the URL in the "Set URL and Bright Data Zone" node to your desired Google Trends page.
4. Test the workflow to ensure data is extracted, summarized, and emailed correctly.

### Practice
Create a sample workflow using a different data source, like Twitter trends. Set up a webhook to notify you of new trending topics and summarize the data using an AI model. Test and refine the workflow to ensure accurate results.

### WIIFM
Mastering this workflow enables you to offer data-driven insights to clients, enhancing decision-making processes. This skill can attract businesses looking to leverage real-time data for strategic planning, thus expanding your services and increasing your income potential in the AI automation space.
  
  ## 🔧 Setup Instructions
  1. **Connect Credentials:** googlePalmApi, httpHeaderAuth, gmailOAuth2.
2. **Notification Targets:** Confirm channel/email IDs and that the bot/app is authorized to post.
3. **API Contracts:** Validate required headers and 2xx/4xx handling; add retries for 429/5xx.
  
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
  