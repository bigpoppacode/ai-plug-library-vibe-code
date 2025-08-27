# Manual HTTP Automation Webhook
  ## 🚀 What It Does
  Moves data between apps and a **database/spreadsheet**, with logic and optional AI steps.
  
  ## 💼 Business Use Case
  Use as a **glue/API broker**: receive data, enrich/validate via APIs, and pass to downstream systems.
  
  ## ⚙️ How It Works
  1. **Trigger:** This workflow starts with **When clicking "Test workflow"**.
  2. **When clicking "Test workflow"** `manualTrigger` — configured for its default action.
3. **OpenAI Chat Model1** `lmChatOpenAi` — model: `gpt-4o`
4. **Execute Workflow Trigger** `executeWorkflowTrigger` — configured for its default action.
5. **Reverse Image Search Tool** `toolWorkflow` — name: "reverse_image_search", fields: "[object Object]", workflowId: "={{ $workflow.id }}"
6. **Firecrawl Web Scaper Tool** `toolWorkflow` — name: "webpage_url_scraper_tool", fields: "[object Object]", workflowId: "={{ $workflow.id }}"
7. **Structured Output Parser** `outputParserStructured` — jsonSchema: "{
 "type": "object",
 "properties": {
 "title": { "type": "string" },
 "description": { "type": "string" },
 "model": { "type": "string" },
 "material": { "type": "string" },
 "col…[truncated]"
8. **Sticky Note** `stickyNote` — color: "7", width: "402.5984702109446", height: "495.4071184783251"
9. **Sticky Note1** `stickyNote` — color: "7", width: "359.40869874940336", height: "428.4787925736586"
10. **Sticky Note2** `stickyNote` — color: "7", width: "593.0683948010671", height: "803.956942672397"
11. **Sticky Note3** `stickyNote` — color: "7", width: "373.3601237414979", height: "397.7168664109706"
12. **Sticky Note4** `stickyNote` — color: "7", width: "554.6092633638649", height: "490.7010880746526"
13. **Sticky Note6** `stickyNote` — width: "359.6648027457353", height: "381.0536322713287", content: "## Try It Out!
### This workflow does the following:
* Scans an Airtable spreadsheet for rows with product photo images.
* Uses an AI vision model to attempt to identify the produc…[truncated]"
14. **Sticky Note5** `stickyNote` — width: "181.2788838920522", height: "297.0159375852115", content: "















🚨**Required**
* Set Airtable Base and Table IDs here."
15. **Sticky Note7** `stickyNote` — width: "181.2788838920522", height: "297.0159375852115", content: "















🚨**Required**
* Set Airtable Base and Table IDs here."
16. **Sticky Note8** `stickyNote` — color: "7", width: "460.3301604548244", height: "298.81538450684064"
17. **Sticky Note9** `stickyNote` — color: "7", width: "575.3216480295998", height: "463.34699288922565"
18. **Get Applicable Rows** `airtable` — operation: **search**, table: `[object Object]`
19. **Edit Fields** `set` — options: "[object Object]", assignments: "[object Object]"
20. **Analyse Image** `openAi` — resource: **image**, operation: **analyze**
21. **Actions Router** `switch` — rules: "[object Object]", options: "[object Object]"
22. **Object Identifier Agent** `agent` — text: "=system: Your role is to help an building surveyor perform a object classification and data collection task whereby the surveyor will take photos of various objects and your job is…[truncated]", agent: "openAiFunctionsAgent", options: "[object Object]"
23. **SERP Google Reverse Image API** `httpRequest` — url: `https://serpapi.com/search.json`
24. **Firecrawl Scrape API** `httpRequest` — method: **POST**, url: `https://api.firecrawl.dev/v0/scrape`
25. **Fallback Response** `set` — mode: "raw", options: "[object Object]", jsonOutput: "{
 "response": {
 "ok": false,
 "error": "The requested tool was not found or the service may be unavailable. Do not retry."
 }
}
"
26. **Enrich Product Rows** `airtable` — operation: **update**, table: `[object Object]`
27. **Reverse Image Search Response** `set` — options: "[object Object]", assignments: "[object Object]"
28. **Scrape Success?** `if` — options: "[object Object]", conditions: "[object Object]"
29. **Firecrawl Scrape Success Response** `set` — options: "[object Object]", assignments: "[object Object]"
30. **Firecrawl scrape Error Response** `set` — options: "[object Object]", assignments: "[object Object]"
  
  ## 💡 AI-Powered Ideas for Improvement
  ### Explain
This n8n workflow automates the process of identifying and enriching product data from photos stored in an Airtable database. It begins by retrieving product photo entries from Airtable. The workflow then uses an AI vision model to analyze these images and extract detailed attributes like title, description, model, material, color, and condition. It further employs reverse image search and web scraping tools to gather additional information from the internet. Finally, the enriched data is updated back in the Airtable records, saving time and effort in manual data entry and research.

### Demonstrate
A furniture retailer can use this workflow to automate the cataloging of new products. By analyzing product images and fetching additional details online, the retailer ensures their inventory database is accurate and up-to-date, enhancing their online product listings and improving customer experience.

### Imitate
1. Import the workflow into your n8n environment.
2. Connect your Airtable account and set the Base and Table IDs.
3. Configure your OpenAI API credentials.
4. Set up SERP and Firecrawl API access for reverse image search and web scraping.
5. Test the workflow by manually triggering it and verifying data enrichment in Airtable.

### Practice
Create a small Airtable base with sample product images. Run the workflow to identify and enrich product attributes. Modify a few images or attributes and rerun the workflow to see how changes are handled.

### WIIFM
Mastering this workflow allows you to offer automated data enrichment services, making you valuable to businesses seeking efficient catalog management. This skill can increase your service offerings, attract more clients, and generate additional income in the AI automation field.
  
  ## 🔧 Setup Instructions
  1. **Connect Credentials:** openAiApi, airtableTokenApi, serpApi, httpHeaderAuth.
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
  