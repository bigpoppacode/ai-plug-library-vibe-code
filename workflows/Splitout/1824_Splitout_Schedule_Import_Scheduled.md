# Splitout Schedule Import Scheduled
## 🚀 What It Does
Moves data between apps and a **database/spreadsheet**, with logic and optional AI steps.

## 💼 Business Use Case
Use as a **glue/API broker**: receive data, enrich/validate via APIs, and pass to downstream systems.

## ⚙️ How It Works
1. **Trigger:** This workflow starts with **On clicking 'execute'**.
2. **On clicking 'execute'** `manualTrigger` — configured for its default action.
3. **Sticky Note3** `stickyNote` — color: "4", width: "150", height: "80"
4. **Schedule Trigger** `scheduleTrigger` — rule: "[object Object]"
5. **Sticky Note** `stickyNote` — width: "320", height: "660", content: "## Get all Squarespace Orders
Retrieves all Squarespace Orders and saves them into a Google Sheets spreadsheet using the Squarespace Commerce API

### Setup
Open `Globals` node and…[truncated]"
6. **Globals** `set` — options: "[object Object]", assignments: "[object Object]"
7. **Query Orders** `httpRequest` — url: `=https://api.squarespace.com/{{ $json["api-version"] }}/commerce/orders`
8. **Split Out Order ** `splitOut` — options: "[object Object]", fieldToSplitOut: "result"
9. **Squarespace Orders Spreadsheet** `googleSheets` — operation: **appendOrUpdate**

## 💡 AI-Powered Ideas for Improvement
**Explain:**  
This n8n workflow automates the process of retrieving all orders from a Squarespace store and saving them into a Google Sheets spreadsheet. It uses the Squarespace Commerce API to fetch order data, processes it, and then updates the spreadsheet with details like customer email, order total, and shipping information.

**Demonstrate:**  
A small online retailer can use this workflow to automatically log all their Squarespace orders into a Google Sheet. This helps them keep track of sales, manage inventory, and analyze customer data without manual data entry.

**Imitate:**  
1. Import the workflow into n8n.  
2. Connect your Squarespace and Google Sheets accounts.  
3. Set up the `Globals` node with your API version and other parameters.  
4. Use the `Schedule Trigger` to automate data retrieval at regular intervals.  
5. Test the workflow to ensure it logs orders correctly in Google Sheets.

**Practice:**  
Create a test Google Sheet and run the workflow with a few sample orders in Squarespace. Observe how it populates the spreadsheet and adjust parameters in the `Globals` node to filter specific orders.

**WIIFM:**  
Mastering this workflow can help streamline order management, saving time and reducing errors. By offering this as a service, you could attract clients needing order automation, leading to new business opportunities and increased income in the automation space.

## 🔧 Setup Instructions
1. **Connect Credentials:** httpHeaderAuth, googleSheetsOAuth2Api.
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
