# Schedule Manual Automation Scheduled
## 🚀 What It Does
Moves data between apps and a **database/spreadsheet**, with logic and optional AI steps.

## 💼 Business Use Case
Use as a **glue/API broker**: receive data, enrich/validate via APIs, and pass to downstream systems.

## ⚙️ How It Works
1. **Trigger:** This workflow starts with **When clicking "Test workflow"**.
2. **When clicking "Test workflow"** `manualTrigger` — configured for its default action.
3. **OpenAI Chat Model** `lmChatOpenAi` — model: `gpt-4o`
4. **Get website content** `toolWorkflow` — name: "get_website_content", source: "parameter", description: "This tool will return the text from the given URL. "
5. **SerpAPI - Search Google** `toolSerpApi` — options: "[object Object]"
6. **Structured Output Parser** `outputParserStructured` — schemaType: "manual", inputSchema: "{
	"type": "object",
	"properties": {
		"case_study_link": {
			"type":["string", "null"]
		},
 		"domain": {
			"type": ["string", "null"]
		},
 "linkedinUrl": {
			"type": ["stri…[truncated]"
7. **Sticky Note** `stickyNote` — width: "409.0131656322444", height: "658.0614601225933", content: "## Read Me

This workflow allows you to do account research with the web using AI.

The advanced AI module has 2 capabilities: 
- Research Google using SerpAPI
- Visit and get webs…[truncated]"
8. **Sticky Note1** `stickyNote` — width: "300.49399096535876", height: "333.8263184006576", content: "### Process rows 1 by 1
This module will allow us to process rows 1 by 1"
9. **Sticky Note2** `stickyNote` — width: "300.49399096535876", height: "236.01118609685022", content: "Precise here the format in which you need the data to be "
10. **Sticky Note3** `stickyNote` — width: "300.49399096535876", height: "279.8787004666023", content: "### Ask AI what are the information you are looking for about the company"
11. **Sticky Note4** `stickyNote` — height: "248.91749449109562", content: "Get your free API key here https://serpapi.com/"
12. **Schedule Trigger** `scheduleTrigger` — rule: "[object Object]"
13. **Sticky Note5** `stickyNote` — width: "266.12865147126786", height: "627.5654650079845", content: "Run the workflow manually or activate it to run it every 2 hours"
14. **Search Google with ScrapingBee** `toolWorkflow` — name: "search_google", source: "parameter", description: "Call this tool to get results from a google search."
15. **Sticky Note6** `stickyNote` — height: "340.14969579315925", content: "Instead of SERP API module, you can also use this custom module for ScrapingBee. It is more cost-efficient.

Get your free API key here https://www.scrapingbee.com/"
16. **Sticky Note7** `stickyNote` — width: "194.6864335083109", height: "525.6560478822986", content: "In this workflow, I use Google Sheets to store the results. 

You can use my template to get started faster:

1. [Click on this link to get the template](https://docs.google.com/sp…[truncated]"
17. **Get rows to enrich** `googleSheets` — options: "[object Object]", filtersUI: "[object Object]", sheetName: "[object Object]"
18. **Input** `set` — options: "[object Object]", assignments: "[object Object]"

## 💡 AI-Powered Ideas for Improvement
Could not generate AI recommendations at this time.

## 🔧 Setup Instructions
1. **Connect Credentials:** openAiApi, serpApi, googleSheetsOAuth2Api.
2. **Data Mapping:** Verify base/sheet IDs and column names match exactly to prevent silent failures.
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
