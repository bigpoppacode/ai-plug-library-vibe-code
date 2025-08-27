# Splitout Manual Automation Webhook
## 🚀 What It Does
Moves data between apps and a **database/spreadsheet**, with logic and optional AI steps.

## 💼 Business Use Case
Use as a **glue/API broker**: receive data, enrich/validate via APIs, and pass to downstream systems.

## ⚙️ How It Works
1. **Trigger:** This workflow starts with **When clicking ‘Test workflow’**.
2. **When clicking ‘Test workflow’** `manualTrigger` — configured for its default action.
3. **Structured Output Parser** `outputParserStructured` — jsonSchemaExample: "[{
  "product_title":"The title of the product",
  "product_price":"The price of the product",
  "product_brand": "The brand of the product",
  "promo":"true or false",
  "promo_pe…[truncated]"
4. **Google Gemini Chat Model** `lmChatGoogleGemini` — options: "[object Object]", modelName: "models/gemini-1.5-pro-latest"
5. **Sticky Note** `stickyNote` — color: "7", width: "364.53488372093034", height: "652.6453488372096"
6. **Sticky Note1** `stickyNote` — color: "7", width: "364.53488372093034", height: "664.2441860465121"
7. **Sticky Note2** `stickyNote` — color: "7", width: "364.53488372093034", height: "667.2965116279074"
8. **Sticky Note3** `stickyNote` — color: "7", width: "364.53488372093034", height: "671.8750000000002"
9. **Sticky Note4** `stickyNote` — color: "7", width: "1000.334302325581", height: "679.5058139534889"
10. **HTML-based Scraping Tool** `toolWorkflow` — name: "HTMLScrapingTool", workflowId: "[object Object]", description: "=Call this tool ONLY when you need to retrieve the HTML content of a webpage."
11. **Sticky Note5** `stickyNote` — color: "6", width: "305.625", height: "337.03488372093034"
12. **Sticky Note6** `stickyNote` — color: "6", width: "305.625", height: "337.03488372093034"
13. **Sticky Note7** `stickyNote` — color: "6", width: "305.625", height: "337.03488372093034"
14. **Sticky Note8** `stickyNote` — color: "7", width: "364.53488372093034", height: "671.8750000000002"
15. **Sticky Note9** `stickyNote` — color: "7", width: "364.53488372093034", height: "671.8750000000002"
16. **Sticky Note10** `stickyNote` — color: "7", width: "364.53488372093034", height: "357.10392441860495"
17. **HTML-Scraping Tool** `executeWorkflowTrigger` — configured for its default action.
18. **Sticky Note11** `stickyNote` — color: "7", width: "364.53488372093034", height: "357.10392441860495"
19. **Sticky Note12** `stickyNote` — color: "7", width: "364.53488372093034", height: "357.10392441860495"
20. **Sticky Note13** `stickyNote` — color: "7", width: "364.53488372093034", height: "357.10392441860495"
21. **Sticky Note14** `stickyNote` — width: "829.9937466197946", height: "646.0101744186061", content: "[redacted]"
22. **Google Sheets - Get list of URLs** `googleSheets` — options: "[object Object]", sheetName: "[object Object]", documentId: "[object Object]"
23. **Set fields - from AI agent query** `set` — options: "[object Object]", assignments: "[object Object]"
24. **Set fields** `set` — options: "[object Object]", assignments: "[object Object]"
25. **ScrapingBee- Get page HTML** `httpRequest` — url: `https://app.scrapingbee.com/api/v1`
26. **ScrapingBee - Get page screenshot** `httpRequest` — url: `https://app.scrapingbee.com/api/v1`
27. **HTML to Markdown** `markdown` — html: "={{ $json.data }}", options: "[object Object]"
28. **Vision-based Scraping Agent** `agent` — text: "=Here is the screenshot you need to use to extract data about the page:

{{ $json.url }}", options: "[object Object]", promptType: "define"
29. **Split Out** `splitOut` — options: "[object Object]", fieldToSplitOut: "output"
30. **Google Sheets - Create Rows** `googleSheets` — operation: **append**

## 💡 AI-Powered Ideas for Improvement
- **Explain:** This n8n workflow automates the extraction of product data from web pages using a combination of Google Sheets, ScrapingBee, and AI capabilities from the Google Gemini Chat Model. It retrieves URLs from Google Sheets, captures screenshots or HTML content of those pages, uses AI to extract structured data like product titles, prices, and promotional information, and finally saves the extracted data back into Google Sheets.

- **Demonstrate:** A retail business could use this workflow to monitor competitor pricing by automatically scraping and analyzing product data from competitor websites, ensuring they remain competitive in the market.

- **Imitate:** 1. Import the workflow into n8n. 2. Connect your Google Sheets and ScrapingBee accounts. 3. Set up a Google Sheet with URLs to scrape. 4. Configure API keys for ScrapingBee and Google Gemini. 5. Test the workflow to verify data extraction and storage.

- **Practice:** Create a Google Sheet with sample URLs of e-commerce product pages. Run the workflow to see how it extracts and logs product data into Google Sheets. Adjust the schema in the Structured Output Parser to match the data you want to extract.

- **WIIFM:** Mastering this workflow can enable you to offer data extraction and analysis services to businesses, helping them optimize pricing strategies or market research, potentially generating recurring revenue as part of an automation service offering.

## 🔧 Setup Instructions
1. **Connect Credentials:** googlePalmApi, googleApi.
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
