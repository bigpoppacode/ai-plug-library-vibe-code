# Splitout Datetime Create Webhook
## 🚀 What It Does
Automates a flow using httpRequest×12, stickyNote×7, set×3.

## 💼 Business Use Case
Use as a **glue/API broker**: receive data, enrich/validate via APIs, and pass to downstream systems.

## ⚙️ How It Works
1. **Trigger:** Runs on a **schedule** (e.g., `[object Object]`).
2. **Schedule Trigger** `scheduleTrigger` — rule: "[object Object]"
3. **When clicking ‘Test workflow’** `manualTrigger` — configured for its default action.
4. **Sticky Note** `stickyNote` — width: "427", height: "519", content: "[redacted]"
5. **Sticky Note1** `stickyNote` — width: "411.2199570815453", height: "521.9218381008977", content: "## get UUID

Generates the UUIDs that will be used in the 'x-request-id' and 'x-trace-id'

[uuidgenerator](https://www.uuidgenerator.net/api)"
6. **Sticky Note2** `stickyNote` — width: "384", height: "279", content: "## List your instances     "
7. **Sticky Note3** `stickyNote` — width: "733.0237288135586", height: "467.2593220338978", content: "## List existing Snapshots

- Generates a new UUID for the request

- Checks if the instance already has a Snapshot"
8. **Sticky Note4** `stickyNote` — width: "486.8901611698841", height: "467.87473554386463", content: "## Delete existing snapshot by id
"
9. **Sticky Note5** `stickyNote` — width: "576.6684015952959", height: "468.61270146235483", content: "## Create a new snapshot"
10. **Sticky Note6** `stickyNote` — width: "769.2098244001793", height: "415.52346358766624", content: "[redacted]"
11. **get Date & Time** `dateTime` — options: "[object Object]"
12. **Formatted Date** `dateTime` — operation: **formatDate**
13. **Credential** `set` — options: "[object Object]", assignments: "[object Object]"
14. **Authorization** `httpRequest` — method: **POST**, url: `[redacted]`
15. **UUID** `httpRequest` — url: `https://www.uuidgenerator.net/api/version4`
16. **TRACE ID** `httpRequest` — url: `https://www.uuidgenerator.net/api/version4`
17. **List instances** `httpRequest` — url: `https://api.contabo.com/v1/compute/instances`
18. **Split Out** `splitOut` — options: "[object Object]", fieldToSplitOut: "data"
19. **UUID1** `httpRequest` — url: `https://www.uuidgenerator.net/api/version4`
20. **List snapshots** `httpRequest` — url: `=https://api.contabo.com/v1/compute/instances/{{ $('Split Out').item.json['instanceId'] }}/snapshots`
21. **Merge** `merge` — mode: "combine", options: "[object Object]", combineBy: "combineByPosition"
22. **Whether snapshot there is no snapshot** `if` — options: "[object Object]", conditions: "[object Object]"
23. **set snapshot attributes** `set` — options: "[object Object]", assignments: "[object Object]"
24. **Set snapshot attributes** `set` — options: "[object Object]", assignments: "[object Object]"
25. **UUID2** `httpRequest` — url: `https://www.uuidgenerator.net/api/version4`
26. **UUID3** `httpRequest` — url: `https://www.uuidgenerator.net/api/version4`
27. **Create a new snapshot** `httpRequest` — method: **POST**, url: `=https://api.contabo.com/v1/compute/instances/{{ $('set snapshot attributes').item.json['instanceId'] }}/snapshots`
28. **Delete existing snapshot** `httpRequest` — method: **DELETE**, url: `=https://api.contabo.com/v1/compute/instances/{{ $('Set snapshot attributes').item.json['instanceId'] }}/snapshots/{{ $('Set snapshot attributes').item.json['data'][0].snapshotId }…[truncated]`
29. **UUID4** `httpRequest` — url: `https://www.uuidgenerator.net/api/version4`
30. **Create a new snapshot1** `httpRequest` — method: **POST**, url: `=https://api.contabo.com/v1/compute/instances/{{ $('Set snapshot attributes').item.json['instanceId'] }}/snapshots`

## 💡 AI-Powered Ideas for Improvement
**Explain**  
This n8n workflow automates the process of managing snapshots for VPS instances hosted on Contabo. It triggers on a schedule to list all instances, checks for existing snapshots, and creates or deletes snapshots as needed. UUIDs are generated for request tracking, and the workflow uses Contabo API to manage snapshots, ensuring up-to-date backups of virtual machines.

**Demonstrate**  
A developer managing multiple VPS instances on Contabo can use this workflow to automate backups, ensuring data safety without manual intervention, saving time, and reducing the risk of data loss.

**Imitate**  
1. Import the workflow to n8n.
2. Set up Contabo API credentials in the workflow.
3. Define a schedule trigger for regular execution.
4. Customize UUID and snapshot management steps as needed.
5. Test the workflow to ensure it creates and deletes snapshots correctly.

**Practice**  
Create a test instance in Contabo, then run the workflow to see how it manages snapshots. Simulate a scenario where existing snapshots need deletion and observe the workflow's response.

**WIIFM**  
Mastering this workflow allows you to offer automated VPS backup solutions to clients, enhancing data security and operational efficiency. This can lead to new service offerings, higher client satisfaction, and potential revenue growth in your automation business.

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
