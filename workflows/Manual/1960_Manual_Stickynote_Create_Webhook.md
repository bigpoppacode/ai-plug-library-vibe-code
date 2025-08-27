# Manual Stickynote Create Webhook
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
7. **Sticky Note** `stickyNote` — width: "400", height: "280", content: "## Note

Deals with the LinkedIn data extraction using the Bright Data Web Scrapper API.

The information extraction and summarization are being used to demonstrate the usage of th…[truncated]"
8. **Sticky Note1** `stickyNote` — width: "420", height: "280", content: "## LLM Usages

Google Gemini Flash Exp model is being used.

Information extraction is being used for formatting the LinkedIn response to produce a story.

Summarization Chain is b…[truncated]"
9. **Set LinkedIn URL** `set` — options: "[object Object]", assignments: "[object Object]"
10. **Perform LinkedIn Web Request** `httpRequest` — method: **POST**, url: `https://api.brightdata.com/datasets/v3/trigger`
11. **Set Snapshot Id** `set` — options: "[object Object]", assignments: "[object Object]"
  
  ## 💡 AI-Powered Ideas for Improvement
  ### Explain
This n8n workflow automates the process of extracting and summarizing company information from LinkedIn using the Bright Data Web Scraper API and Google Gemini AI models. It begins by setting a LinkedIn URL, requests data via Bright Data, waits for the data to be ready, downloads it, and uses Google Gemini to extract and summarize the information into a company story. This story is then sent to a specified webhook URL.

### Demonstrate
A business owner could use this workflow to regularly extract and summarize competitor information from LinkedIn, helping them stay informed on market trends and competitor strategies for strategic planning.

### Imitate
1. Import the workflow into n8n.
2. Connect your Bright Data and Google Gemini API accounts.
3. Set the LinkedIn URL to the target company profile.
4. Test the workflow to ensure it extracts and summarizes the data correctly.
5. Customize the webhook URL to receive the summarized data.

### Practice
Create a test LinkedIn profile and run the workflow to extract and summarize the information. Adjust the LinkedIn URL and webhook settings to see how different configurations affect the output.

### WIIFM
Mastering this workflow enables you to offer competitive intelligence services, helping businesses gain insights into competitors. This can lead to new consulting opportunities, increased client retention, and additional revenue streams in your automation business.
  
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
  