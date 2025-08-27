# Code Schedule Automation Webhook
  ## 🚀 What It Does
  Automates a flow using stickyNote×6, httpRequest×5, code×3.
  
  ## 💼 Business Use Case
  Use as a **glue/API broker**: receive data, enrich/validate via APIs, and pass to downstream systems.
  
  ## ⚙️ How It Works
  1. **Trigger:** This workflow starts with **When clicking ‘Test workflow’**.
  2. **When clicking ‘Test workflow’** `manualTrigger` — configured for its default action.
3. **Schedule Trigger** `scheduleTrigger` — rule: "[object Object]"
4. **Sticky Note** `stickyNote` — width: "504.88636363636317", content: "## Send data from Umami to A.I. and then save to Baserow

You can find out more about the stats available in the [Umami API](https://umami.is/docs/api/website-stats-api)

Read the …[truncated]"
5. **Sticky Note1** `stickyNote` — color: "4", width: "393.16558441558414", height: "504.17207792207796"
6. **Sticky Note2** `stickyNote` — color: "5", width: "216.5746753246753", height: "502.37012987012963"
7. **Sticky Note3** `stickyNote` — color: "6", width: "746.3474025974022", height: "505.9740259740257"
8. **Sticky Note4** `stickyNote` — color: "5", width: "216.5746753246753", height: "502.37012987012963"
9. **Sticky Note5** `stickyNote` — color: "4", width: "393.16558441558414", height: "504.17207792207796"
10. **Get view stats from Umami** `httpRequest` — url: `=https://umami.mydomain.com/api/websites/86d4095c-a2a8-4fc8-9521-103e858e2b41/event-data/stats?startAt={{ DateTime.now().minus({ days: 7 }).toMillis() }}&endAt={{ DateTime.now().to…[truncated]`
11. **Parse Umami data** `code` — jsCode: "function transformToUrlString(items) {
 // In n8n, we need to check if items is an array and get the json property
 const data = items[0].json;
 
 if (!data) {
 console.log('No val…[truncated]"
12. **Send data to A.I.** `httpRequest` — method: **POST**, url: `https://openrouter.ai/api/v1/chat/completions`
13. **Get page data from Umami** `httpRequest` — url: `=https://umami.rumjahn.synology.me/api/websites/f375d28c-1949-4597-8871-f1b942e3aa24/metrics?startAt={{Date.now() - (7 * 24 * 60 * 60 * 1000)}}&endAt={{Date.now()}}&type=url&tz=Ame…[truncated]`
14. **Parse Umami data1** `code` — jsCode: "// Get input data
const data = $input.all();

// Create URL-encoded string from the data
const encodedData = encodeURIComponent(JSON.stringify(data));

// Return the encoded data
r…[truncated]"
15. **Get page view data from Umami** `httpRequest` — url: `=https://umami.rumjahn.synology.me/api/websites/f375d28c-1949-4597-8871-f1b942e3aa24/metrics?startAt={{Date.now() - (14 * 24 * 60 * 60 * 1000)}}&endAt={{Date.now() - (7 * 24 * 60 *…[truncated]`
16. **Parse Umami** `code` — jsCode: "// Get input data
const data = $input.all();

// Create URL-encoded string from the data
const encodedData = encodeURIComponent(JSON.stringify(data));

// Return the encoded data
r…[truncated]"
17. **Send data to A.I.1** `httpRequest` — method: **POST**, url: `https://openrouter.ai/api/v1/chat/completions`
18. **Save data to Baserow** `baserow` — operation: **create**, table: `607`
  
  ## 💡 AI-Powered Ideas for Improvement
  **Explain**  
This n8n workflow automates the process of gathering website analytics data from Umami, sending it to an AI for analysis, and then saving the results to a database in Baserow. The workflow retrieves view statistics from Umami, processes the data, and uses AI to generate insights, which are finally stored in Baserow for further analysis and record-keeping.

**Demonstrate**  
A digital marketing agency could use this workflow to automate weekly reports on website performance, leveraging AI insights to optimize content strategies, and store the results for historical analysis.

**Imitate**  
1. Import the workflow into n8n.
2. Connect your Umami, AI, and Baserow accounts.
3. Set up the schedule to trigger the workflow weekly.
4. Customize the URLs and credentials for your specific accounts.
5. Test the workflow to ensure data flows correctly from Umami to AI and then to Baserow.

**Practice**  
Create a test Umami account and add some sample data. Run the workflow to see how it processes and stores data in Baserow. Adjust parameters to see different outcomes and understand how each component interacts.

**WIIFM**  
Mastering this workflow enables you to offer automated analytics reporting services, providing clients with valuable insights without manual effort. This can broaden your service offerings, improve client retention, and increase revenue in your automation business.
  
  ## 🔧 Setup Instructions
  1. **Connect Credentials:** httpHeaderAuth, baserowApi.
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
  