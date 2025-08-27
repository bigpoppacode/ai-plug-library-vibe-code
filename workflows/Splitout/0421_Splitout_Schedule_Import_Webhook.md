# Splitout Schedule Import Webhook
## 🚀 What It Does
Automates a flow using hubspot×7, stickyNote×6, httpRequest×3.

## 💼 Business Use Case
Use as a **glue/API broker**: receive data, enrich/validate via APIs, and pass to downstream systems.

## ⚙️ How It Works
1. **Trigger:** Runs on a **schedule** (e.g., `[object Object]`).
2. **Schedule Trigger** `scheduleTrigger` — rule: "[object Object]"
3. **Sticky Note** `stickyNote` — color: "5", width: "343.16392083375575", height: "209.46215382440343"
4. **Sticky Note1** `stickyNote` — color: "7", width: "150", height: "80"
5. **Sticky Note2** `stickyNote` — color: "5", width: "150", height: "80"
6. **Sticky Note3** `stickyNote` — color: "5", width: "423.7165713477844", height: "558.5236393851941"
7. **Sticky Note4** `stickyNote` — color: "5", width: "423.7165713477844", height: "558.5236393851941"
8. **Sticky Note5** `stickyNote` — color: "7", width: "175.43767910969322", height: "105.43767910969324"
9. **Get Deals** `httpRequest` — url: `https://api.hubapi.com/crm/v3/objects/deals?properties=dealname,amount,hubspot_owner_id&associations=contacts`
10. **Split out deals** `splitOut` — options: "[object Object]", fieldToSplitOut: "results"
11. **Unassigned Deals** `filter` — options: "[object Object]", conditions: "[object Object]"
12. **Get contact for deals** `httpRequest` — url: `=https://api.hubapi.com/crm/v3/objects/contacts/{{ $json.associations.contacts.results[0].id }}?associations=company`
13. **Get company of contact(s)** `httpRequest` — url: `=https://api.hubapi.com/crm/v3/objects/companies/{{ $json.associations.companies.results[0].id }}?properties=name,domain,city,country,numberofemployees`
14. **Assign by Region** `switch` — rules: "[object Object]", options: "[object Object]"
15. **Assign US deals by company size** `switch` — rules: "[object Object]", options: "[object Object]"
16. **Assign DE deals by company size** `switch` — rules: "[object Object]", options: "[object Object]"
17. **Assign to Peter** `hubspot` — resource: **deal**, operation: **update**
18. **Assign deal to John** `hubspot` — resource: **deal**, operation: **update**
19. **Assign to Max** `hubspot` — resource: **deal**, operation: **update**
20. **Assign to Eeden** `hubspot` — resource: **deal**, operation: **update**
21. **Assign deal to Edward** `hubspot` — resource: **deal**, operation: **update**
22. **Assign to Michael** `hubspot` — resource: **deal**, operation: **update**
23. **Assign to Suka** `hubspot` — resource: **deal**, operation: **update**

## 💡 AI-Powered Ideas for Improvement
**Explain**  
This workflow automates the process of assigning unassigned deals from HubSpot to sales representatives based on the region and company size. It triggers every two days, retrieves deals from HubSpot, and filters out those without an owner. It then finds the associated contact and company, determines the region and company size, and assigns deals to specific sales reps accordingly.

**Demonstrate**  
A sales manager can use this workflow to ensure that every potential deal gets assigned to the right salesperson based on geographic region and company size, improving follow-up efficiency and increasing the likelihood of closing deals.

**Imitate**  
1. Set up HubSpot credentials in n8n.
2. Adjust the schedule trigger as needed.
3. Define regions and company size rules in the "Assign by Region" and subsequent switch nodes.
4. Map sales reps to the correct conditions in the HubSpot nodes.
5. Activate the workflow to start assigning deals automatically.

**Practice**  
Create a test environment in HubSpot with dummy deals and contacts. Run the workflow to see how it assigns deals based on your set criteria. Adjust the rules and observe changes in assignments to understand the impact of different criteria.

**WIIFM**  
Mastering this workflow enables you to offer automated CRM management services, ensuring efficient lead distribution for clients. This can increase client satisfaction and retention, and provide a steady income stream through setup fees and ongoing support services.

## 🔧 Setup Instructions
1. **Connect Credentials:** hubspotOAuth2Api.
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
