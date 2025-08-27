# Redis Code Create Scheduled
  ## 🚀 What It Does
  Monitors events, processes them, and **notifies** people/apps (Slack/Email) with structured updates.
  
  ## 💼 Business Use Case
  Use as a **glue/API broker**: receive data, enrich/validate via APIs, and pass to downstream systems.
  
  ## ⚙️ How It Works
  1. **Trigger:** This workflow starts with **When clicking "Execute Workflow"**.
  2. **When clicking "Execute Workflow"** `manualTrigger` — configured for its default action.
3. **Schedule Trigger** `scheduleTrigger` — rule: "[object Object]"
4. **Sticky Note** `stickyNote` — width: "791.5865288559442", height: "462.84878343542437", content: "## Pulling in Info 
This section pulls in all the data we will need to see any possible errors and generate our alert
"
5. **Sticky Note1** `stickyNote` — width: "688.5000872281419", height: "411.1258278145692", content: "## Changing data
This section pulls together the data we got from the first section and sets everything up to be notified "
6. **Sticky Note2** `stickyNote` — width: "1015.6997792494475", height: "614.8167770419421", content: "## Notify
This last section is for the push of the alert as well as storing the alert as to not re-notify every time the workflow runs"
7. **Sticky Note3** `stickyNote` — width: "673.6064168725538", height: "394.26386951839356", content: "[redacted]"
8. **Sticky Note4** `stickyNote` — width: "645.9603701592033", height: "389.89870424786454", content: "## Explanation
the Merge node will combine the Networks with their respective stats by matching on NetworkID and networkid and enriching the input 

again we add a set node to bett…[truncated]"
9. **Sticky Note5** `stickyNote` — width: "913.6905067516504", height: "523.763772544089", content: "## Explanation 
we will send the problematic sites to both the Redis node and the Merge node. 

The Redis node does a get request to see if a key exists matching the Network name i…[truncated]"
10. **Sticky Note6** `stickyNote` — width: "670.6963066922013", height: "366.61782280504275", content: "## other usecases 
 If you feel confident enough the Teams nodes can be replaced with a node that can generate a ticket for your PSA such as ConnectWise Mange. That way these are g…[truncated]"
11. **Get Meraki Organizations** `httpRequest` — url: `https://api.meraki.com/api/v1/organizations`
12. **Get Org Name & ID** `set` — fields: "[object Object]", include: "selected", options: "[object Object]"
13. **Get Uplink Loss and Latency** `httpRequest` — url: `=https://api.meraki.com/api/v1/organizations/{{ $json.id }}/devices/uplinksLossAndLatency?timespan=300`
14. **Get Network IDs** `httpRequest` — url: `=https://api.meraki.com/api/v1/organizations/{{ $json.OrgID }}/networks  `
15. **Sets Network Variables** `set` — fields: "[object Object]", include: "selected", options: "[object Object]"
16. **Combine latency to its respective Network** `merge` — mode: "combine", options: "[object Object]", joinMode: "enrichInput1"
17. **Makes Latency and Loss Filterable** `set` — fields: "[object Object]", include: "selected", options: "[object Object]"
18. **Average Latency & Loss over 5m** `code` — jsCode: "// Assuming $input.all() is an array of items and each item has a json property
function calculateAverages(inputItems) {
  return inputItems.map(item => {
    // Calculate total an…[truncated]"
19. **Filters Problematic sites** `code` — jsCode: "// Function to filter items based on averageLatency and averageLoss
function filterItems(items) {
  return items.filter(item =>
    item.AverageLatency >300 || item.AverageLoss > 2…[truncated]"
20. **Check if Alert Exists** `redis` — operation: **get**
21. **Create Response** `code` — jsCode: "return items.map(item => {
  // Check if the 'NetworkName' property is not null, indicating an alert exists.
  // If 'NetworkName' is null, no alert exists for this network.
  cons…[truncated]"
22. **Merge** `merge` — mode: "combine", options: "[object Object]", joinMode: "keepNonMatches"
23. **Message Techs** `microsoftTeams` — resource: **chatMessage**
24. **Log the Alert** `redis` — operation: **set**
  
  ## 💡 AI-Powered Ideas for Improvement
  **Explain:**  
This n8n workflow monitors network latency and packet loss for Meraki networks. It retrieves data from Meraki's API, calculates average latency and packet loss over a 5-minute window, and identifies problematic sites. If a site exceeds predefined thresholds, it checks if an alert already exists in Redis. If not, it sends a notification via Microsoft Teams and logs the alert in Redis to avoid duplicate notifications within a 3-hour period.

**Demonstrate:**  
A network administrator could use this workflow to proactively monitor network health, quickly identifying and addressing issues of high latency or packet loss, ensuring optimal network performance for users.

**Imitate:**  
1. Import the workflow into n8n.  
2. Configure Meraki API credentials.  
3. Set up Redis for alert tracking.  
4. Customize the latency and loss thresholds as needed.  
5. Test the workflow to ensure alerts are sent appropriately.

**Practice:**  
Create a test Meraki organization with simulated latency and packet loss data. Run the workflow to see how it processes data, sends alerts, and logs them in Redis, adjusting thresholds to see different outcomes.

**WIIFM:**  
Mastering this workflow enables you to offer network monitoring services, helping businesses maintain optimal network performance. This can expand your service offerings and increase revenue in your automation business.
  
  ## 🔧 Setup Instructions
  1. **Connect Credentials:** httpHeaderAuth.
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
  