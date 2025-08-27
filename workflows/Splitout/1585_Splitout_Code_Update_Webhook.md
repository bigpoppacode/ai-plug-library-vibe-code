# Splitout Code Update Webhook
## 🚀 What It Does
Moves data between apps and a **database/spreadsheet**, with logic and optional AI steps.

## 💼 Business Use Case
Use as a **glue/API broker**: receive data, enrich/validate via APIs, and pass to downstream systems.

## ⚙️ How It Works
1. **Trigger:** This workflow starts with **When clicking ‘Test workflow’**.
2. **When clicking ‘Test workflow’** `manualTrigger` — configured for its default action.
3. **Calculator** `toolCalculator` — configured for its default action.
4. **Wikipedia** `toolWikipedia` — configured for its default action.
5. **Sticky Note9** `stickyNote` — color: "6", width: "250", height: "1066.0405523297766"
6. **Sticky Note10** `stickyNote` — color: "4", width: "1020.0792140594992", height: "1064.4036342575048"
7. **Google Sheets Trigger** `googleSheetsTrigger` — event: "rowUpdate", options: "[object Object]", pollTimes: "[object Object]"
8. **Sticky Note1** `stickyNote` — color: "5", width: "454.85441546185024", height: "1064.2140159143948"
9. **Sticky Note2** `stickyNote` — color: "4", width: "1429.3228597821253", height: "692.9832938116144"
10. **Sticky Note11** `stickyNote` — color: "5", width: "410", height: "1067.57654641223"
11. **Sticky Note** `stickyNote` — color: "4", width: "1429.3228597821253", height: "342.36777743061157"
12. **Brand Guidelines + Custom Instructions** `set` — options: "[object Object]", assignments: "[object Object]"
13. **If** `if` — options: "[object Object]", conditions: "[object Object]"
14. **Printify - Get Shops** `httpRequest` — url: `https://api.printify.com/v1/shops.json`
15. **Printify - Get Shops1** `httpRequest` — url: `https://api.printify.com/v1/shops.json`
16. **Printify - Get Products** `httpRequest` — url: `=https://api.printify.com/v1/shops/{{ $json.id }}/products.json`
17. **Printify - Update Product** `httpRequest` — method: **PUT**, url: `=https://api.printify.com/v1/shops/{{ $json.id }}/products/{{ $('Google Sheets Trigger').item.json.product_id }}.json`
18. **Split Out** `splitOut` — options: "[object Object]", fieldToSplitOut: "data"

## 💡 AI-Powered Ideas for Improvement
### Explain
This n8n workflow automates the process of updating product titles and descriptions on Printify based on changes made in a Google Sheet. It monitors updates in a Google Sheet, retrieves product details from Printify, generates new titles and descriptions using OpenAI, and updates the product information on Printify. This ensures that product listings are always up-to-date and optimized according to brand guidelines.

### Demonstrate
A business owner with an online store on Printify can use this workflow to automatically refresh product descriptions for seasonal promotions, ensuring that their listings are always relevant and engaging for customers.

### Imitate
1. Import the workflow into n8n.
2. Connect your Printify and Google Sheets accounts.
3. Set up your Google Sheet with product IDs, titles, and descriptions.
4. Configure OpenAI for generating new content.
5. Test the workflow by updating a row in the Google Sheet and observing the changes on Printify.

### Practice
Create a Google Sheet with test product data. Run the workflow by updating a product's title or description in the sheet. Check if the product details are updated on Printify as expected.

### WIIFM
Mastering this workflow can help you offer automated product management services, saving clients time and ensuring their listings are always optimized. This can increase your value proposition as a consultant, leading to more business opportunities and income in the AI automation space.

## 🔧 Setup Instructions
1. **Connect Credentials:** httpHeaderAuth, googleSheetsTriggerOAuth2Api, googleSheetsOAuth2Api, openAiApi.
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
