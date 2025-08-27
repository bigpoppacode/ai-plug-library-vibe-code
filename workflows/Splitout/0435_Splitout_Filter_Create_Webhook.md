# Splitout Filter Create Webhook
## 🚀 What It Does
Monitors events, processes them, and **notifies** people/apps (Slack/Email) with structured updates.

## 💼 Business Use Case
Use as a **glue/API broker**: receive data, enrich/validate via APIs, and pass to downstream systems.

## ⚙️ How It Works
1. **Trigger:** Runs on a **schedule** (e.g., `[object Object]`).
2. **Sticky Note** `stickyNote` — color: "5", width: "410.6749642132356", height: "428.2515771212859"
3. **Sticky Note5** `stickyNote` — color: "7", width: "223.7628185364029", height: "276.3308728978709"
4. **Trigger every 5 minutes** `scheduleTrigger` — rule: "[object Object]"
5. **Get all organization keys** `httpRequest` — url: `https://api.pipedrive.com/v1/organizationFields`
6. **Sticky Note6** `stickyNote` — width: "187.68142318756514", height: "276.3308728978709", content: "Run me to find the Id of your custom domain field"
7. **Sticky Note7** `stickyNote` — width: "187.68142318756514", height: "276.3308728978709", content: "Run me to find the Id of your enriched at domain field"
8. **Get all lead keys** `httpRequest` — url: `https://api.pipedrive.com/v1/leadFields`
9. **Setup** `set` — options: "[object Object]", assignments: "[object Object]"
10. **Split out organization field** `splitOut` — options: "[object Object]", fieldToSplitOut: "data"
11. **Split out lead field data** `splitOut` — options: "[object Object]", fieldToSplitOut: "data"
12. **Get all leads** `pipedrive` — resource: **lead**, operation: **getAll**
13. **Show only custom organization fields** `filter` — options: "[object Object]", conditions: "[object Object]"
14. **Show only custom lead fields** `filter` — options: "[object Object]", conditions: "[object Object]"
15. **Get organization details** `pipedrive` — resource: **organization**, operation: **get**
16. **Enrich company** `clearbit` — domain: "={{ $json[$('Setup').first().json.domainCustomFieldId2]}}", additionalFields: "[object Object]"
17. **Add Organization ID to data** `set` — options: "[object Object]", assignments: "[object Object]", includeOtherFields: "true"
18. **Merge data** `merge` — mode: "combine", options: "[object Object]", joinMode: "enrichInput2"
19. **Mark lead as enriched in Pipedrive** `httpRequest` — method: **PATCH**, url: `=https://api.pipedrive.com/v1/leads/{{ $json.id }}`
20. **Keep leads that match the criteria** `filter` — options: "[object Object]", conditions: "[object Object]"
21. **Send alert to Slack** `slack` — text: "=New high-quality lead 🤑
*Company Name*: {{ $json.name }} 
*Website*: {{ "https://" + $json.domain }}
*Revenue*: {{ $json.metrics.estimatedAnnualRevenue}}
*Number of employees*: {…[truncated]", select: "channel", channelId: "[object Object]"

## 💡 AI-Powered Ideas for Improvement
**Explain**  
This n8n workflow automates the process of managing leads in Pipedrive. It triggers every 5 minutes to fetch leads and organization details, enriches company data using Clearbit, and updates the lead status in Pipedrive. Leads meeting specific criteria are identified and a Slack notification is sent for high-quality leads, helping maintain an up-to-date and efficient sales pipeline.

**Demonstrate**  
A sales manager could use this workflow to automatically enrich lead data and alert the team about high-quality leads in Slack, ensuring timely follow-ups and maximizing sales opportunities.

**Imitate**  
1. Import the workflow into n8n.  
2. Set up Pipedrive, Clearbit, and Slack credentials.  
3. Define custom fields in Pipedrive for domain and enrichment date.  
4. Configure Slack channel in the setup node.  
5. Test the workflow to ensure alerts are sent correctly.

**Practice**  
Create a test lead in Pipedrive with a custom domain. Run the workflow and check if the lead is enriched and a Slack notification is sent. Adjust criteria in the workflow to see different outcomes.

**WIIFM**  
Mastering this workflow allows you to offer lead enrichment and alert services, enhancing sales operations for clients. This can boost your service portfolio and open up opportunities for recurring income in your automation business.

## 🔧 Setup Instructions
1. **Connect Credentials:** clearbitApi, pipedriveApi, slackApi.
2. **Cron/Schedule:** Confirm timezone and cadence; start with a test window (e.g., every 5 minutes) then scale.
3. **Notification Targets:** Confirm channel/email IDs and that the bot/app is authorized to post.
4. **API Contracts:** Validate required headers and 2xx/4xx handling; add retries for 429/5xx.

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
