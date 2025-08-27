# Redis Code Create Webhook
## 🚀 What It Does
Monitors events, processes them, and **notifies** people/apps (Slack/Email) with structured updates.

## 💼 Business Use Case
Use as a **glue/API broker**: receive data, enrich/validate via APIs, and pass to downstream systems.

## ⚙️ How It Works
1. **Trigger:** Runs on a **schedule** (e.g., `[object Object]`).
2. **Schedule Trigger** `scheduleTrigger` — rule: "[object Object]"
3. **Get New Tickets** `httpRequest` — url: `https://na.myconnectwise.net/v4_6_release/apis/3.0/service/tickets?conditions=(status/name="New" or status/name="New (email)" or status/name="New (portal)") and (board/id=25 or boa…[truncated]`
4. **Query Database** `redis` — operation: **get**
5. **Add Filterable Parameter** `code` — jsCode: "for (const item of $input.all()) {
  // Assuming 'id' is the field with the Connectwise Ticket ID
  // Convert 'id' to a string to ensure it has quotes in the JSON output
  item.js…[truncated]"
6. **Filter Out Tickets that have already been sent** `merge` — mode: "combine", options: "[object Object]", joinMode: "keepNonMatches"
7. **Combine like Companies** `code` — jsCode: "// would need to be adapted to your specific data structure.
return Object.values(items.reduce((accumulator, current) => {
  const siteName = current.json.siteName; // assuming 'si…[truncated]"
8. **Log in Redis** `redis` — operation: **set**
9. **Teams to Dispatch** `microsoftTeams` — resource: **chatMessage**

## 💡 AI-Powered Ideas for Improvement
- **Explain**: This n8n workflow automates the process of notifying a team about new tickets from ConnectWise. It starts by regularly checking for new tickets, filters out tickets that have already been sent, groups them by company, and then sends a notification to Microsoft Teams with details about the new tickets. The workflow ensures that only new tickets are communicated, preventing duplicate notifications.

- **Demonstrate**: A tech support team could use this workflow to ensure they are promptly informed about new support tickets, enabling faster response times and improving customer satisfaction.

- **Imitate**: Import the workflow into your n8n instance. Connect your ConnectWise and Microsoft Teams accounts. Set up the schedule trigger to match your business hours. Customize the filtering and grouping logic to fit your company's data structure. Test the workflow with sample data to ensure notifications are sent correctly.

- **Practice**: Create a test environment with a few mock tickets in ConnectWise, then run the workflow to see how it filters and groups tickets. Adjust the JavaScript and Redis operations to handle specific data fields from your ConnectWise setup.

- **WIIFM**: Mastering this workflow allows you to offer real-time ticket notification services to IT support teams, enhancing their operational efficiency. This can lead to new consulting opportunities, improving customer service, and increasing your revenue stream in automation services.

## 🔧 Setup Instructions
1. **Connect Credentials:** redis, httpHeaderAuth, microsoftTeamsOAuth2Api.
2. **Cron/Schedule:** Confirm timezone and cadence; start with a test window (e.g., every 5 minutes) then scale.
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
