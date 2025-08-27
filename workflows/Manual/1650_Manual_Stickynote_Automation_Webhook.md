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
7. **Sticky Note** `stickyNote` — width: "400", height: "240", content: "## Note

Deals with the Perplexity Search using the Bright Data Web Scrapper API.

The information extraction and summarization are done to demonstrate the usage of the N8N AI capa…[truncated]"
8. **Sticky Note1** `stickyNote` — width: "420", height: "240", content: "## LLM Usages

Google Gemini Flash Exp model is being used.

Information extraction is being used for formatting the html to text

Summarization Chain is being used for summarizati…[truncated]"
9. **Perplexity Search Request** `httpRequest` — method: **POST**, url: `https://api.brightdata.com/datasets/v3/trigger`
10. **Set Snapshot Id** `set` — options: "[object Object]", assignments: "[object Object]"
  
  ## 💡 AI-Powered Ideas for Improvement
  ### Explain
This n8n workflow automates the process of searching and summarizing web data. It begins with a manual trigger, then uses the Bright Data Web Scraper API to perform a search. Google Gemini AI models are used to analyze and summarize the data. The results are then formatted and sent to a specified webhook URL, providing an automated way to extract and summarize information from the web.

### Demonstrate
A business owner might use this workflow to gather and summarize web data for market research. By automating this process, they save time and ensure they get consistent, accurate summaries of relevant information.

### Imitate
1. Import the workflow into n8n.
2. Set up your Bright Data and Google Gemini API credentials.
3. Modify the search parameters in the Perplexity Search Request node.
4. Test the workflow to ensure it retrieves and processes data as expected.
5. Customize the webhook URL to receive the summarized data.

### Practice
Create a test search using the Bright Data API. Use keywords relevant to your business or interest. Run the workflow and review the summarized data. Experiment with different keywords to see how the summaries change.

### WIIFM
Mastering this workflow enables you to offer automated data extraction and summarization services, enhancing your value proposition. This capability can attract clients looking for efficient market research solutions, potentially increasing your income and expanding your service offerings in AI automation.
  
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
  