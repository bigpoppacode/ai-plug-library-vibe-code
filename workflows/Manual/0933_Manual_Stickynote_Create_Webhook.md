# Manual Stickynote Create Webhook
  ## 🚀 What It Does
  Calls external APIs and uses **AI** to transform or decide, then routes the result downstream.
  
  ## 💼 Business Use Case
  Use as a **glue/API broker**: receive data, enrich/validate via APIs, and pass to downstream systems.
  
  ## ⚙️ How It Works
  1. **Trigger:** This workflow starts with **When clicking ‘Test workflow’**.
  2. **When clicking ‘Test workflow’** `manualTrigger` — configured for its default action.
3. **Embeddings Google Gemini** `embeddingsGoogleGemini` — modelName: "models/text-embedding-004"
4. **Default Data Loader** `documentDefaultDataLoader` — options: "[object Object]", jsonData: "={{ $('Information Extractor with Data Formatter').item.json.output.search_result }}", jsonMode: "expressionData"
5. **Recursive Character Text Splitter** `textSplitterRecursiveCharacterTextSplitter` — options: "[object Object]"
6. **Google Gemini Chat Model1** `lmChatGoogleGemini` — options: "[object Object]", modelName: "models/gemini-2.0-flash-exp"
7. **Google Gemini Chat Model2** `lmChatGoogleGemini` — options: "[object Object]", modelName: "models/gemini-2.0-flash-exp"
8. **Google Gemini Chat Model** `lmChatGoogleGemini` — options: "[object Object]", modelName: "models/gemini-2.0-flash-exp"
9. **Structured Output Parser** `outputParserStructured` — jsonSchemaExample: "[{
	"id": "<string>",
	"title": "<string>",
    "summary": "<string>",
    "keywords": [""],
    "topics": [""]
}]"
10. **Sticky Note** `stickyNote` — width: "480", height: "220", content: "## Note
Please make sure to set the URL for web crawling. 

Web-Unlocker Product is being utilized for performing the web scrapping. 

This workflow is utilizing the Basic LLM Chai…[truncated]"
11. **Sticky Note1** `stickyNote` — width: "360", height: "420", content: "## AI Data Formatter
"
12. **Sticky Note2** `stickyNote` — color: "4", width: "520", height: "720"
13. **Sticky Note3** `stickyNote` — color: "3", width: "680", height: "440"
14. **Sticky Note4** `stickyNote` — color: "5", width: "720", height: "720"
15. **Set Fields - URL and Webhook URL** `set` — options: "[object Object]", assignments: "[object Object]"
16. **Make a web request** `httpRequest` — method: **POST**, url: `https://api.brightdata.com/request`
17. **Structured JSON Data Formatter** `chainLlm` — text: "=Format the below response and produce a textual data. Output the response as per the below JSON schema.

Here's the input: {{ $json.data }}
Here's the JSON schema: 

[{
    "rank"…[truncated]", messages: "[object Object]", promptType: "define"
18. **Information Extractor with Data Formatter** `informationExtractor` — text: "={{ $json.data }}", options: "[object Object]", attributes: "[object Object]"
19. **Webhook for structured data** `httpRequest` — url: `={{ $json.webhook_url }}`
20. **AI Agent** `agent` — text: "=Format the below search result

{{ $json.output.search_result }}", options: "[object Object]", promptType: "define"
21. **Pinecone Vector Store** `vectorStorePinecone` — mode: "insert", options: "[object Object]", pineconeIndex: "[object Object]"
22. **Webhook for structured AI agent response** `httpRequest` — url: `={{ $json.webhook_url }}`
  
  ## 💡 AI-Powered Ideas for Improvement
  ### Explain
This n8n workflow automates the creation of AI-ready datasets by scraping web data, processing it with Google Gemini models, and storing the results in a Pinecone vector database. It starts by manually triggering the process, scrapes web data, formats it using AI, and saves the structured data for easy retrieval and use in AI applications.

### Demonstrate
A business owner could use this workflow to continuously update their AI models with the latest web data, improving the accuracy and relevance of AI-driven insights for competitive analysis or customer sentiment tracking.

### Imitate
1. Import the workflow into n8n.
2. Set up the URL for web crawling and connect your Bright Data, Google Gemini, and Pinecone accounts.
3. Customize nodes for specific data extraction and AI processing needs.
4. Test the workflow to ensure data is extracted, formatted, and stored as expected.

### Practice
Create a test workflow using a sample URL to scrape data, and observe how the data is processed and stored in Pinecone. Modify AI parameters to see how changes affect output quality and relevance.

### WIIFM
Mastering this workflow can enhance your ability to offer AI-driven insights and services, allowing you to create value for businesses needing up-to-date data analytics. This skill can help attract customers and generate income through advanced data solutions.
  
  ## 🔧 Setup Instructions
  1. **Connect Credentials:** pineconeApi, googlePalmApi, httpHeaderAuth.
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
  