# Manual Stickynote Automate Webhook
  ## 🚀 What It Does
  Automates a flow using stickyNote×4, mcpClientTool×3, mcpClient×2.
  
  ## 💼 Business Use Case
  Use as a **glue/API broker**: receive data, enrich/validate via APIs, and pass to downstream systems.
  
  ## ⚙️ How It Works
  1. **Trigger:** This workflow starts with **When clicking ‘Test workflow’**.
  2. **When clicking ‘Test workflow’** `manualTrigger` — configured for its default action.
3. **Sticky Note1** `stickyNote` — color: "3", width: "440", height: "320"
4. **MCP Client List all tools** `mcpClientTool` — configured for its default action.
5. **MCP Client to Scrape as Markdown** `mcpClientTool` — operation: **executeTool**
6. **MCP Client to Scrape as HTML** `mcpClientTool` — operation: **executeTool**
7. **Google Gemini Chat Model for AI Agent** `lmChatGoogleGemini` — options: "[object Object]", modelName: "models/gemini-2.0-flash-exp"
8. **Sticky Note** `stickyNote` — color: "4", width: "480", height: "260"
9. **Simple Memory** `memoryBufferWindow` — sessionKey: "=Perform the web scraping for the below URL

{{ $json.url }}", sessionIdType: "customKey", contextWindowLength: "10"
10. **Sticky Note2** `stickyNote` — width: "440", height: "120", content: "## Disclaimer
This template is only available on n8n self-hosted as it's making use of the community node for MCP Client."
11. **Sticky Note3** `stickyNote` — color: "5", width: "480", height: "380"
12. **MCP Client list all tools for Bright Data** `mcpClient` — configured for its default action.
13. **Set the URL with the Webhook URL and data format** `set` — options: "[object Object]", assignments: "[object Object]"
14. **Set the URLs** `set` — options: "[object Object]", assignments: "[object Object]"
15. **AI Agent** `agent` — text: "=Scrape the web data as per the provided URL:  {{ $json.url }} using the format as {{ $json.format }}", options: "[object Object]", promptType: "define"
16. **MCP Client Bright Data Web Scraper** `mcpClient` — operation: **executeTool**
17. **Webhook for Web Scraper AI Agent** `httpRequest` — url: `={{ $('Set the URL with the Webhook URL and data format').item.json.webhook_url }}`
18. **Create a binary data** `function` — functionCode: "items[0].binary = {
  data: {
    data: new Buffer(JSON.stringify(items[0].json, null, 2)).toString('base64')
  }
};
return items;"
19. **Webhook for web scraper** `httpRequest` — url: `=https://webhook.site/daf9d591-a130-4010-b1d3-0c66f8fcf467`
20. **Write the scraped content to disk** `readWriteFile` — operation: **write**
  
  ## 💡 AI-Powered Ideas for Improvement
  **Explain:** This workflow automates web scraping using Bright Data and Google Gemini AI. It starts by triggering a scrape request for a specified URL, using community nodes to extract data in Markdown or HTML format. The extracted data is processed by an AI agent, which uses Google Gemini for understanding and interpreting the scraping task. The results are then sent via a webhook and saved to disk for future use.

**Demonstrate:** A business owner could use this workflow to automate the collection of competitor pricing data from their websites. This helps in making informed pricing strategies without manual data collection.

**Imitate:** 1. Import the workflow into n8n. 2. Configure the URL and webhook settings. 3. Connect your Bright Data and Google Gemini accounts. 4. Test the workflow using the manual trigger to ensure data is scraped and saved correctly.

**Practice:** Create a simple workflow to scrape data from a sample website and save the output to a local file. Test different URLs to see how the workflow handles various web structures.

**WIIFM:** Mastering this workflow allows you to offer automated data extraction services, helping businesses gain insights and make data-driven decisions. This can be a lucrative service in competitive industries, enhancing your automation business offerings.
  
  ## 🔧 Setup Instructions
  1. **Connect Credentials:** mcpClientApi, googlePalmApi.
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
  