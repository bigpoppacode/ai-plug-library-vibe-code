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
 "promo_percent…[truncated]"
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
### Explain
This n8n workflow automates the process of scraping data from webpages. It starts by manually triggering a workflow to fetch URLs from a Google Sheet. The workflow uses ScrapingBee to capture webpage screenshots and HTML content. An AI agent analyzes the screenshots to extract structured data, such as product details and promotions, using the Google Gemini Chat Model. If the screenshot analysis is insufficient, the HTML content is used. The extracted data is then structured and saved back into Google Sheets.

### Demonstrate
A business owner can use this workflow to automate data extraction from e-commerce sites, enabling competitive analysis or price monitoring. This saves time and reduces manual errors, enhancing decision-making and operational efficiency.

### Imitate
1. Import the workflow into n8n.
2. Set up Google Sheets and ScrapingBee accounts.
3. Populate the Google Sheet with URLs to scrape.
4. Connect the Google Gemini Chat Model for data extraction.
5. Run the workflow and check Google Sheets for extracted data.

### Practice
Set up a test Google Sheet with URLs of e-commerce products. Run the workflow to see how data is extracted and structured. Modify URLs and re-run to observe different outputs, ensuring you understand the data flow and extraction results.

### WIIFM
Mastering this workflow enables you to offer web scraping services to clients, helping them gather valuable market insights. This can lead to increased service offerings and revenue streams in your automation business, positioning you as a valuable AI automation expert.

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
