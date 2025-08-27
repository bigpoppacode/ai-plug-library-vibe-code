# Splitout Code Create Webhook
## 🚀 What It Does
Moves data between apps and a **database/spreadsheet**, with logic and optional AI steps.

## 💼 Business Use Case
Use as a **glue/API broker**: receive data, enrich/validate via APIs, and pass to downstream systems.

## ⚙️ How It Works
1. **Trigger:** This workflow starts with **When clicking ‘Test workflow’**.
2. **OpenRouter Chat Model** `lmChatOpenRouter` — model: `openai/gpt-4.1`
3. **Structured Output Parser** `outputParserStructured` — schemaType: "manual", inputSchema: "{
  "type": "array",
  "items": {
    "type": "object",
    "properties": {
      "name": { "type": "string" },
      "description": { "type": "string" },
      "rating": { "type":…[truncated]"
4. **Sticky Note1** `stickyNote` — content: "## Web Scraper API

[Inscription - Free Trial](https://get.brightdata.com/website-scraper)"
5. **When clicking ‘Test workflow’** `manualTrigger` — configured for its default action.
6. **get urls to scrape** `googleSheets` — options: "[object Object]", sheetName: "{{TRACK_SHEET_GID}}", documentId: "{{WEB_SHEET_ID}}"

## 💡 AI-Powered Ideas for Improvement
**Explain**  
This n8n workflow automates web data extraction. It retrieves URLs from a Google Sheet, scrapes web pages using BrightData's API, cleans the HTML content, and extracts structured product information such as name, description, rating, reviews, and price using AI models. The extracted data is then appended to another Google Sheet for easy access and analysis.

**Demonstrate**  
A business owner could use this workflow to regularly extract and analyze competitor product data from e-commerce websites, helping them make informed pricing and inventory decisions.

**Imitate**  
1. Import the workflow into your n8n instance.  
2. Connect your Google Sheets and BrightData accounts.  
3. Configure the Google Sheets node with your spreadsheet ID and sheet name.  
4. Set up the BrightData API credentials.  
5. Test the workflow to ensure data is correctly extracted and appended.

**Practice**  
Create a small Google Sheet with URLs of product pages. Run the workflow to scrape and extract product data, then verify the results in the target Google Sheet. Modify some URLs to check the workflow's adaptability.

**WIIFM (What's In It For Me)**  
Mastering this workflow enables you to offer web scraping and data analysis services, which are valuable for businesses looking to gain competitive insights. This skill can enhance your service portfolio, attract clients, and increase your income potential in the AI automation industry.

## 🔧 Setup Instructions
1. **Connect Credentials:** googleSheetsOAuth2Api.
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
