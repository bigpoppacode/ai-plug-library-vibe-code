# HTTP Schedule Create Webhook
  ## 🚀 What It Does
  Automates a flow using stickyNote×5, keyValueStorage×4, httpRequest×3.
  
  ## 💼 Business Use Case
  Use as a **glue/API broker**: receive data, enrich/validate via APIs, and pass to downstream systems.
  
  ## ⚙️ How It Works
  1. **Trigger:** Runs on a **schedule** (e.g., `[object Object]`).
  2. **Schedule Trigger** `scheduleTrigger` — rule: "[object Object]"
3. **Sticky Note** `stickyNote` — width: "460.2964713549969", height: "288.34663983291097", content: "[redacted]"
4. **Sticky Note1** `stickyNote` — width: "483.2839292355176", height: "384.1277143350834", content: "## 2. Check if any new requests to webhook that came later than the last checked request"
5. **Sticky Note2** `stickyNote` — width: "395.16534069351894", height: "380.2964713549969", content: "## 3. Relay the request to the local n8n workflow set in *Local Webhook Address*"
6. **Sticky Note3** `stickyNote` — color: "4", width: "566.9804381508956", height: "859.1365566530386"
7. **Sticky Note4** `stickyNote` — color: "3", width: "304.23688498154337", height: "264.4911255434983"
8. **Local Webhook Address** `set` — options: "[object Object]", assignments: "[object Object]"
9. **Retrieve Last Processed** `keyValueStorage` — operation: **read**
10. **Retrieve Auth Token** `keyValueStorage` — operation: **read**
11. **If Auth Token Exists** `if` — options: "[object Object]", conditions: "[object Object]"
12. **Get Auth Token** `httpRequest` — method: **POST**, url: `[redacted]`
13. **Store Auth Token** `keyValueStorage` — key: "[redacted]", value: "={{ $json.uuid }}", fileName: "savefile"
14. **Get Latest Requests** `httpRequest` — url: `[redacted]`
15. **Merge** `merge` — mode: "combine", options: "[object Object]", combineBy: "combineByPosition"
16. **Unprocessed Requests** `code` — jsCode: "let filter_method = "POST"
let last_processed = $json.value ? $json.value : 0
let data = $json.data

function dateToTime(datetime){
  return new Date(datetime.replace(" ", "T") + "…[truncated]"
17. **Latest Update Time** `code` — jsCode: "var datetimes = $('Unprocessed Requests').all().map(x=>x.json.created_at)
return {last_time: Math.max(...datetimes)}"
18. **Store Last Processed** `keyValueStorage` — key: "last_processed", value: "={{ $json.last_time }}", fileName: "savefile"
19. **POST to n8n** `httpRequest` — method: **POST**, url: `={{ $('Local Webhook Address').first().json.webhook }}`
  
  ## 💡 AI-Powered Ideas for Improvement
  **Explain:** This n8n workflow acts as a relay system that receives public webhook requests and forwards them to a local n8n workflow. It regularly checks for new requests using a schedule trigger, retrieves and processes these requests, and ensures that only unprocessed requests are forwarded. It uses a key-value storage system to track the last processed request and manage authentication tokens.

**Demonstrate:** A developer could use this workflow to test webhooks from third-party services on their local development environment, allowing them to simulate production conditions without exposing their local machine to the internet.

**Imitate:** 1. Import the workflow into n8n. 2. Set up a schedule trigger to run every 10 seconds. 3. Configure local webhook URL in the workflow. 4. Test by sending POST requests to the public webhook. 5. Verify that requests are forwarded to the local environment.

**Practice:** Set up a test n8n workflow locally. Use this relay workflow to forward POST requests from webhook.site to your local workflow. Experiment by sending different data payloads and observe how they are processed.

**WIIFM:** Mastering this workflow allows you to test and develop webhooks locally, reducing development time and increasing efficiency. This skill can be monetized by offering webhook integration services to clients, enhancing your service offerings and potentially increasing revenue.
  
  ## 🔧 Setup Instructions
  1. **Cron/Schedule:** Confirm timezone and cadence; start with a test window (e.g., every 5 minutes) then scale.
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
  