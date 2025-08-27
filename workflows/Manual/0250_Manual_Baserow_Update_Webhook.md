# Manual Baserow Update Webhook
  ## 🚀 What It Does
  Automates a flow using set×2, manualTrigger, cron.
  
  ## 💼 Business Use Case
  Use as a **glue/API broker**: receive data, enrich/validate via APIs, and pass to downstream systems.
  
  ## ⚙️ How It Works
  1. **Trigger:** This workflow starts with **On clicking 'execute'**.
  2. **On clicking 'execute'** `manualTrigger` — configured for its default action.
3. **Cron** `cron` — triggerTimes: "[object Object]"
4. **Baserow** `baserow` — table: `680`
5. **Fetch tradegate stock page** `httpRequest` — url: `https://www.tradegate.de/orderbuch.php`
6. **Parse tradegate stock page** `htmlExtract` — options: "[object Object]", extractionValues: "[object Object]"
7. **Format result** `set` — values: "[object Object]", options: "[object Object]", keepOnlySet: "true"
8. **Calculate change** `set` — values: "[object Object]", options: "[object Object]"
9. **Build HTML** `function` — functionCode: "const columns = Object.keys(items[0].json);

// Define the basic table structure
let table_header = `<table style="border: 1px solid black; border-collapse: collapse;"><tr>${column…[truncated]"
10. **SendGrid** `sendGrid` — resource: **mail**
  
  ## 💡 AI-Powered Ideas for Improvement
  ### Explain
This n8n workflow automates the process of tracking stock investments. It retrieves stock data from a Baserow database, fetches current stock prices from Tradegate, calculates the change in stock value, formats the results into an HTML report, and sends this report via email using SendGrid. The workflow runs automatically every day at a specified time, ensuring users receive daily updates on their investment performance.

### Demonstrate
A financial advisor could use this workflow to provide clients with daily investment performance reports, enhancing customer service and keeping clients informed without manual effort. This can help advisors maintain strong client relationships and streamline reporting tasks.

### Imitate
1. Set up a Baserow table with your stock data.
2. Configure a Tradegate API request to fetch current stock prices.
3. Use n8n's Set nodes to calculate changes in stock value.
4. Format the results into an HTML table using a Function node.
5. Send the report via email using SendGrid credentials.

### Practice
Create a test Baserow table with mock stock data and run the workflow. Observe how it fetches, calculates, and sends a report. Adjust stock data to see different results and test email delivery to ensure the workflow functions correctly.

### WIIFM
Mastering this workflow empowers you to offer automated investment tracking services, providing clients with valuable, timely insights. This can differentiate your service offerings, attract new clients, and generate additional revenue streams in your automation business.
  
  ## 🔧 Setup Instructions
  1. **Connect Credentials:** baserowApi, sendGridApi.
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
  