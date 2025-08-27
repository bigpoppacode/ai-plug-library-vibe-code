# Code Manual Automation Webhook
  ## 🚀 What It Does
  Automates a flow using mcpClient×4, stickyNote×2, set×2.
  
  ## 💼 Business Use Case
  Use as a **glue/API broker**: receive data, enrich/validate via APIs, and pass to downstream systems.
  
  ## ⚙️ How It Works
  1. **Trigger:** This workflow starts with **When clicking ‘Test workflow’**.
  2. **When clicking ‘Test workflow’** `manualTrigger` — configured for its default action.
3. **Sticky Note1** `stickyNote` — color: "3", width: "440", height: "320"
4. **Sticky Note** `stickyNote` — color: "4", width: "440", height: "320"
5. **Google Gemini Chat Model** `lmChatGoogleGemini` — options: "[object Object]", modelName: "models/gemini-2.0-flash-exp"
6. **List all available tools for Bright Data** `mcpClient` — configured for its default action.
7. **List all tools for Bright Data** `mcpClient` — configured for its default action.
8. **Set the URLs** `set` — options: "[object Object]", assignments: "[object Object]"
9. **Set the LinkedIn Company URL** `set` — options: "[object Object]", assignments: "[object Object]"
10. **Bright Data MCP Client For LinkedIn Person** `mcpClient` — operation: **executeTool**
11. **Bright Data MCP Client For LinkedIn Company** `mcpClient` — operation: **executeTool**
12. **Webhook for LinkedIn Person Web Scraper** `httpRequest` — url: `={{ $('Set the URLs').item.json.webhook_url }}`
13. **Create a binary data for LinkedIn person info extract** `function` — functionCode: "items[0].binary = {
  data: {
    data: new Buffer(JSON.stringify(items[0].json, null, 2)).toString('base64')
  }
};
return items;"
14. **Code** `code` — jsCode: "jsonContent = JSON.parse($input.first().json.result.content[0].text) 
return jsonContent
"
15. **LinkedIn Data Extractor** `informationExtractor` — text: "=Write a complete story of the provided company information in JSON. Use the following Company info to produce a story or a blog post. Make sure to incorporate all the provided com…[truncated]", options: "[object Object]", attributes: "[object Object]"
16. **Write the LinkedIn person info to disk** `readWriteFile` — operation: **write**
17. **Merge** `merge` — configured for its default action.
18. **Aggregate** `aggregate` — options: "[object Object]", fieldsToAggregate: "[object Object]"
19. **Webhook for LinkedIn Company Web Scraper** `httpRequest` — url: `={{ $('Set the LinkedIn Company URL').item.json.webhook_url }}`
20. **Create a binary data for LinkedIn company info extract** `function` — functionCode: "items[0].binary = {
  data: {
    data: new Buffer(JSON.stringify(items[0].json, null, 2)).toString('base64')
  }
};
return items;"
21. **Write the LinkedIn company info to disk** `readWriteFile` — operation: **write**
  
  ## 💡 AI-Powered Ideas for Improvement
  **Explain:**  
This n8n workflow automates the process of scraping LinkedIn profiles for both individuals and companies using Bright Data MCP Client. It retrieves LinkedIn data, processes it using Google Gemini Chat Model for enhancement, and saves the information to disk. The workflow ensures that the data is extracted, formatted, and stored efficiently, making it useful for data-driven tasks like market research or lead generation.

**Demonstrate:**  
A business owner could use this workflow to gather detailed information on potential clients from LinkedIn, enhancing their CRM data and aiding in targeted marketing campaigns.

**Imitate:**  
1. Import the workflow into n8n.
2. Connect your Bright Data and Google Gemini accounts.
3. Define LinkedIn URLs for the profiles you want to scrape.
4. Set up the webhook to trigger the workflow.
5. Run the workflow to scrape and store LinkedIn data.

**Practice:**  
Create a test LinkedIn account and use it in the workflow. Observe how data is extracted and stored. Modify the workflow to include additional data fields or change the storage format.

**WIIFM:**  
Mastering this workflow allows you to offer valuable LinkedIn data extraction services, helping businesses enhance their marketing strategies. It enables you to expand your automation business by providing insights-driven solutions, attracting more clients and generating income.
  
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
  