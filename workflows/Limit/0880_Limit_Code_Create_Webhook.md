# Limit Code Create Webhook
  ## 🚀 What It Does
  Moves data between apps and a **database/spreadsheet**, with logic and optional AI steps.
  
  ## 💼 Business Use Case
  Use as a **glue/API broker**: receive data, enrich/validate via APIs, and pass to downstream systems.
  
  ## ⚙️ How It Works
  1. **Trigger:** This workflow starts with **When clicking ‘Test workflow’**.
  2. **Sticky Note4** `stickyNote` — width: "460", height: "340", content: "![Tutorial](https://www.samirsaci.com/content/images/2025/04/temp-8.png)
[🎥 Check My Tutorial](https://www.youtube.com/watch?v=LwTIro6Rapk)"
3. **When clicking ‘Test workflow’** `manualTrigger` — configured for its default action.
4. **Sticky Note1** `stickyNote` — color: "7", width: "1040", height: "460"
5. **Sticky Note** `stickyNote` — color: "7", width: "1920", height: "520"
6. **Page Link** `set` — options: "[object Object]", assignments: "[object Object]"
7. **Download Results** `googleSheets` — options: "[object Object]", sheetName: "[object Object]", documentId: "[object Object]"
8. **Download HTML** `httpRequest` — url: `={{ $json.url }}`
9. **altLength < 50** `if` — options: "[object Object]", conditions: "[object Object]"
10. **Get Images urls with altText** `code` — jsCode: "const html = $input.first().json.data;
const baseUrl = $('Page Link').first().json.baseUrl;

const imgTagRegex = /<img\b[^>]*>/gi;
const altAttrRegex = /alt\s*=\s*["']([^"']*)["']/…[truncated]"
11. **Limit records** `limit` — maxItems: "5"
12. **Store Results** `googleSheets` — operation: **append**
  
  ## 💡 AI-Powered Ideas for Improvement
  - **Explain:** This n8n workflow extracts images and their alternative text from a webpage, using an HTTP request to gather HTML data. It processes the data to list all images and their alt texts, saving the results in a Google Sheet. If any image's alt text is shorter than 50 characters, the workflow generates a new alt text using an AI model and updates the Google Sheet with this information.
  
- **Demonstrate:** A web developer could use this workflow to audit and improve alt text for images on a website, enhancing accessibility and SEO by ensuring all images have descriptive alt texts.

- **Imitate:** 1. Import the workflow into n8n. 2. Connect your Google Sheets account. 3. Set the URL of the webpage to audit in the first node. 4. Run the workflow to extract and process image alt texts. 5. Review and customize the Google Sheet to match your needs.

- **Practice:** Create a sample webpage with a few images and minimal alt text. Use the workflow to extract and generate improved alt texts. Check the Google Sheet to see the results and how the workflow updates the alt text.

- **WIIFM:** Mastering this workflow enables you to offer website accessibility audits, improving SEO and user experience for clients. This skill can enhance your service offerings and increase your income potential in the web development and digital marketing fields.
  
  ## 🔧 Setup Instructions
  1. **Data Mapping:** Verify base/sheet IDs and column names match exactly to prevent silent failures.
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
  