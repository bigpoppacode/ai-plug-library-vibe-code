# Splitout Code Automation Webhook
## 🚀 What It Does
Moves data between apps and a **database/spreadsheet**, with logic and optional AI steps.

## 💼 Business Use Case
Use as a **glue/API broker**: receive data, enrich/validate via APIs, and pass to downstream systems.

## ⚙️ How It Works
1. **Trigger:** This workflow starts with **Sticky Note1**.
2. **Receive Keyword** `webhook` — path: `/e1df17af-e8b8-4261-ba45-aba7106c65bd`
3. **Sticky Note** `stickyNote` — width: "589.0376569037658", height: "163.2468619246862", content: "## How to build your own Amazon keywords tool with n8n (For free and no coding)

This workflow gives you Amazon keywords for your Amazon FBA business.

[💡 You can read more about …[truncated]"
4. **Sticky Note1** `stickyNote` — color: "4", width: "239.99999999999977", height: "389.08073541167073"
5. **Sticky Note2** `stickyNote` — color: "6", width: "218.65707434052769", height: "386.2350119904079"
6. **Sticky Note3** `stickyNote` — color: "4", width: "181.6626698641084", height: "389.08073541167073"
7. **Get airtable data** `airtable` — table: `[object Object]`
8. **Get Amazon keywords** `httpRequest` — url: `=https://completion.amazon.com/api/2017/suggestions?mid=ATVPDKIKX0DER&alias=aps&prefix={{ $json.Keyword }}`
9. **Format output** `splitOut` — options: "[object Object]", fieldToSplitOut: "suggestions"
10. **Clean Keywords** `set` — options: "[object Object]", assignments: "[object Object]"
11. **Aggregate keywords** `aggregate` — options: "[object Object]", fieldsToAggregate: "[object Object]"
12. **Combine into string** `code` — jsCode: "return [{
  json: {
    keywords: items[0].json.Keywords.join(", ")
  }
}];"
13. **Save keywords** `airtable` — operation: **update**, table: `[object Object]`

## 💡 AI-Powered Ideas for Improvement
**Explain**
This n8n workflow automates the process of generating Amazon keywords for an Amazon FBA business. It starts by receiving a keyword through a webhook, then retrieves existing data from Airtable. Using the Amazon completion API, it fetches keyword suggestions related to the input keyword. The workflow formats, cleans, aggregates, and combines these keywords into a string. Finally, it updates the Airtable record with the generated keywords.

**Demonstrate**
A business owner could use this workflow to automatically generate relevant keywords for their Amazon product listings, improving search visibility and sales potential without manual keyword research.

**Imitate**
1. Import the workflow into n8n.
2. Set up a webhook to receive keywords.
3. Connect Airtable to store keyword data.
4. Configure the HTTP Request node with Amazon's API for keyword suggestions.
5. Test the workflow with sample keywords and verify updates in Airtable.

**Practice**
Create a test Airtable base with sample keywords. Run the workflow to fetch and update keyword suggestions. Modify the keyword and rerun to see different results, ensuring you understand how the workflow processes data.

**WIIFM**
Mastering this workflow enables you to offer automated keyword generation services to Amazon sellers, enhancing their product visibility and sales. This can attract clients and increase your revenue in the AI automation business.

## 🔧 Setup Instructions
1. **Connect Credentials:** airtableTokenApi.
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
