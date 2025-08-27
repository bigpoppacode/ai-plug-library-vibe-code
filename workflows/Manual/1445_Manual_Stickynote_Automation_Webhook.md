# Manual Stickynote Automation Webhook
  ## 🚀 What It Does
  Automates a flow using stickyNote×2, httpRequest×2, manualTrigger.
  
  ## 💼 Business Use Case
  Use as a **glue/API broker**: receive data, enrich/validate via APIs, and pass to downstream systems.
  
  ## ⚙️ How It Works
  1. **Trigger:** This workflow starts with **When clicking ‘Test workflow’**.
  2. **When clicking ‘Test workflow’** `manualTrigger` — configured for its default action.
3. **Sticky Note1** `stickyNote` — width: "420", height: "140", content: "## LLM Usages

Google Gemini Flash Exp model is being used.

Information Extraction for building the structured data"
4. **Google Gemini Chat Model** `lmChatGoogleGemini` — options: "[object Object]", modelName: "models/gemini-2.0-flash-exp"
5. **Sticky Note** `stickyNote` — width: "400", height: "220", content: "## Note

Deals with the Amazon Best Seller Electronic data extraction using the Bright Data and LLM for Information Extraction.

**Please make sure to update the "Set Amazon URL wi…[truncated]"
6. **Set Amazon URL with the Bright Data Zone** `set` — options: "[object Object]", assignments: "[object Object]"
7. **HTTP Request to fetch the Amazon Best Seller Products** `httpRequest` — method: **POST**, url: `https://api.brightdata.com/request`
8. **Structured Data Extractor** `informationExtractor` — text: "={{ $json.data }}", options: "[object Object]", schemaType: "manual"
9. **Webhook Notifier for structured data extractor** `httpRequest` — url: `https://webhook.site/bc804ce5-4a45-4177-a68a-99c80e5c86e6`
  
  ## 💡 AI-Powered Ideas for Improvement
  **Explain:**  
This n8n workflow automates the extraction of Amazon Best Seller data for electronics using Bright Data and Google Gemini's AI model. It fetches data from Amazon, uses AI to extract structured information, and sends the results to a webhook for further processing or storage.

**Demonstrate:**  
A retail analyst could use this workflow to regularly gather and analyze best seller trends, helping them to make data-driven decisions for inventory and marketing strategies.

**Imitate:**  
1. Import the workflow into n8n.  
2. Connect your Bright Data and Google Gemini accounts.  
3. Set the Amazon URL and Bright Data zone in the workflow.  
4. Run the workflow to test data extraction and webhook notification.  

**Practice:**  
Create a test Amazon URL and use the workflow to extract data. Modify the settings to see how different URLs affect the output. Check if the webhook receives the correct structured data.

**WIIFM:**  
Mastering this workflow enables you to offer automated data extraction services, providing valuable insights to businesses. This can enhance your service portfolio, attract more clients, and enable you to charge premium rates for data-driven solutions.
  
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
  