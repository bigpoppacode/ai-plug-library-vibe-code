# Manual Filter Update Webhook
  ## 🚀 What It Does
  Automates a flow using stickyNote×5, set×4, httpRequest×2.
  
  ## 💼 Business Use Case
  Use as a **glue/API broker**: receive data, enrich/validate via APIs, and pass to downstream systems.
  
  ## ⚙️ How It Works
  1. **Trigger:** This workflow starts with **When clicking ‘Test workflow’**.
  2. **When clicking ‘Test workflow’** `manualTrigger` — configured for its default action.
3. **Sticky Note** `stickyNote` — width: "150", height: "209.09090909090907", content: "Get from Zotero Web > Settings > Security:

https://www.zotero.org/settings/security
"
4. **Sticky Note1** `stickyNote` — width: "150", height: "233", content: "[redacted]"
5. **Sticky Note2** `stickyNote` — width: "150", height: "189.99999999999994", content: "See the "Table" results, of previous nodes and replace the second value of "IS EQUAL TO" with your Collection KEY"
6. **Sticky Note3** `stickyNote` — width: "150", height: "80", content: "Optional Filter for Results"
7. **Sticky Note4** `stickyNote` — width: "150", height: "80", content: "Optional Edit Fields for Results"
8. **User ID** `set` — options: "[object Object]", assignments: "[object Object]"
9. **Collections** `httpRequest` — url: `=https://api.zotero.org/users/{{ $json.userid }}/collections?v=3`
10. **Select Collection** `filter` — options: "[object Object]", conditions: "[object Object]"
11. **Set Loop** `set` — options: "[object Object]", assignments: "[object Object]", includeOtherFields: "true"
  
  ## 💡 AI-Powered Ideas for Improvement
  ### Explain
This n8n workflow retrieves a user's collections from Zotero, a reference management software, using their API. It fetches articles from a specified collection and processes them in batches of 100 items. The workflow includes steps to filter, edit, and loop through the articles until all are processed, ensuring comprehensive data handling.

### Demonstrate
A research team might use this workflow to automatically collect and process academic articles from Zotero for analysis, saving time and ensuring all relevant data is gathered efficiently for further review or publication preparation.

### Imitate
1. Import and open the workflow in n8n.
2. Obtain your Zotero User ID and API Key.
3. Configure the `User ID` node with your Zotero user information.
4. Replace placeholders with actual collection keys.
5. Test the workflow to retrieve and process your Zotero collections.

### Practice
Create a Zotero account, add a few articles to a collection, and run the workflow. Verify how it retrieves and processes articles in batches, and experiment with editing fields to customize the output data.

### WIIFM
Mastering this workflow enables you to offer automated data collection services, helping researchers, academics, or businesses efficiently manage and analyze large datasets, thus enhancing your service portfolio and increasing revenue potential.
  
  ## 🔧 Setup Instructions
  1. **API Contracts:** Validate required headers and 2xx/4xx handling; add retries for 429/5xx.
  
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
  