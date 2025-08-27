# Webhook HTTP Automation Webhook
## 🚀 What It Does
Moves data between apps and a **database/spreadsheet**, with logic and optional AI steps.

## 💼 Business Use Case
Use as a **glue/API broker**: receive data, enrich/validate via APIs, and pass to downstream systems.

## ⚙️ How It Works
1. **Trigger:** This workflow starts with **Tool called from Agent**.
2. **Structured Output Parser** `outputParserStructured` — schemaType: "manual", inputSchema: "{
  "Business Area": {
    "type": "string",
    "description": "Summary of the company's core activities or industry focus."
  },
  "Offers or Product": {
    "type": "string",
  …[truncated]"
3. **OpenAI Chat Model** `lmChatOpenAi` — model: `gpt-4o-mini`
4. **Call n8n workflow  : Scrape companies homepage content** `toolWorkflow` — name: "scraper", fields: "[object Object]", workflowId: "[object Object]"
5. **Tool called from Agent** `executeWorkflowTrigger` — configured for its default action.
6. **Sticky Note** `stickyNote` — width: "1084.896634444991", height: "1812.538665002239", content: "[redacted]"
7. **Webhook** `webhook` — path: `/53166f88-c88a-4429-b6b5-498f458686b0`
8. **Set company url** `set` — options: "[object Object]", assignments: "[object Object]"
9. **Get rows from Google Sheet** `googleSheets` — options: "[object Object]", sheetName: "[object Object]", documentId: "[object Object]"
10. **ScrapingBee : Scrape company's homepage data ** `httpRequest` — url: `https://app.scrapingbee.com/api/v1`
11. **HTML to Markdown** `markdown` — html: "={{ $json.data }}", options: "[object Object]", destinationKey: "response"

## 💡 AI-Powered Ideas for Improvement
- **Explain:** This workflow enhances company data from a Google Sheet by scraping their homepage and analyzing the content using OpenAI. It extracts key business insights like core activities, main products, value proposition, business model, and ideal customer profile, then updates the Google Sheet with this information.

- **Demonstrate:** A business consultant could use this workflow to quickly gather and update detailed business profiles for potential clients, saving time on manual research and enabling more informed business decisions.

- **Imitate:** Import the workflow into n8n. Connect your Google Sheets and OpenAI accounts. Set up a trigger to run the workflow, such as a webhook. Ensure your Google Sheet has columns for the company name and website. Test the workflow to verify it updates the sheet with enriched data.

- **Practice:** Create a Google Sheet with a few company names and websites. Run the workflow to see how it populates the sheet with detailed business information. Modify the company URLs to test different scraping results.

- **WIIFM:** Mastering this workflow allows you to offer enriched data services to clients, improving their market insights and decision-making. It can be a valuable addition to your AI automation services, potentially increasing your service offerings and client base.

## 🔧 Setup Instructions
1. **Connect Credentials:** openAiApi, googleApi.
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
