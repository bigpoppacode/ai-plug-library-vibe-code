# Manual Stickynote Automation Webhook
  ## 🚀 What It Does
  Calls external APIs and uses **AI** to transform or decide, then routes the result downstream.
  
  ## 💼 Business Use Case
  Use as a **glue/API broker**: receive data, enrich/validate via APIs, and pass to downstream systems.
  
  ## ⚙️ How It Works
  1. **Trigger:** This workflow starts with **When clicking ‘Test workflow’**.
  2. **When clicking ‘Test workflow’** `manualTrigger` — configured for its default action.
3. **Sticky Note1** `stickyNote` — width: "420", height: "220", content: "## LLM Usages

Google Gemini Flash Exp model is being used.

Basic LLM Chain with the Output parser for building the structured data.

Summarization Chain to summarize the structur…[truncated]"
4. **Sticky Note** `stickyNote` — width: "400", height: "220", content: "## Note

Deals with the Yelp Business Review data extraction using the Bright Data and LLM for structured data extraction and summarization.

**Please make sure to update the "Set …[truncated]"
5. **Google Gemini Chat Model** `lmChatGoogleGemini` — options: "[object Object]", modelName: "models/gemini-2.0-flash-exp"
6. **Structured Output Parser** `outputParserStructured` — jsonSchemaExample: "[
   {
     "restaurant_name": "string",
     "location": "string",
     "average_rating": "float",
     "review_count": "int",
     "reviews": [
      {
        "reviewer": "strin…[truncated]"
7. **Google Gemini Chat Model for Summarization** `lmChatGoogleGemini` — options: "[object Object]", modelName: "models/gemini-2.0-flash-exp"
8. **Set Yelp URL with the Bright Data Zone** `set` — options: "[object Object]", assignments: "[object Object]"
9. **HTTP Request to fetch the Yelp Business Reviews** `httpRequest` — method: **POST**, url: `https://api.brightdata.com/request`
10. **Structured Data Extractor** `chainLlm` — text: "=Summarize and analyze Yelp reviews {{ $json.data }}", promptType: "define", hasOutputParser: "true"
11. **Summarization Chain** `chainSummarization` — options: "[object Object]"
12. **Merge** `merge` — configured for its default action.
13. **Webhook Notifier for the merged response** `httpRequest` — url: `https://webhook.site/daf9d591-a130-4010-b1d3-0c66f8fcf467`
  
  ## 💡 AI-Powered Ideas for Improvement
  ### Explain
This n8n workflow automates the extraction and summarization of Yelp Business Reviews. It starts by manually triggering the workflow, setting a Yelp URL, and fetching reviews using Bright Data. The reviews are processed through Google Gemini's LLM for structured data extraction and summarization. Results are combined and sent via a webhook for further use.

### Demonstrate
A business owner could use this workflow to automatically gather and summarize Yelp reviews for their restaurant, enabling them to quickly understand customer feedback and improve their services without manually sifting through each review.

### Imitate
1. Import the workflow into n8n.
2. Connect your Bright Data and Google Gemini accounts.
3. Set the Yelp URL in the "Set Yelp URL with the Bright Data Zone" node.
4. Test the workflow to ensure it fetches and processes reviews correctly.
5. Customize the webhook to send the summarized data where needed.

### Practice
Create a Yelp account and list a few businesses. Use the workflow to extract and summarize reviews for these businesses. Compare the structured summaries with the original reviews to understand how the workflow processes data.

### WIIFM
Mastering this workflow enables you to offer automated review analysis services to businesses, helping them improve customer satisfaction and retention. This can expand your service offerings and generate additional revenue in your AI automation business.
  
  ## 🔧 Setup Instructions
  1. **Connect Credentials:** httpHeaderAuth, googlePalmApi.
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
  