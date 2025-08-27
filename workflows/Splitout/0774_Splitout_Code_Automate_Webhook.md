# Splitout Code Automate Webhook
## 🚀 What It Does
Automates a flow using httpRequest×8, stickyNote×7, set×5.

## 💼 Business Use Case
Use as a **glue/API broker**: receive data, enrich/validate via APIs, and pass to downstream systems.

## ⚙️ How It Works
1. **Trigger:** Runs on a **schedule** (e.g., `[object Object]`).
2. **Sticky Note** `stickyNote` — height: "400", content: "[redacted]"
3. **Sticky Note1** `stickyNote` — color: "5", width: "960", height: "380"
4. **Sticky Note2** `stickyNote` — width: "260", height: "380", content: "[redacted]"
5. **Sticky Note3** `stickyNote` — color: "5", width: "460", height: "380"
6. **Sticky Note4** `stickyNote` — color: "5", width: "600", height: "680"
7. **Sticky Note5** `stickyNote` — color: "5", width: "980", height: "680"
8. **Sticky Note6** `stickyNote` — color: "4", width: "460", height: "380"
9. **Every 5 minutes start** `scheduleTrigger` — rule: "[object Object]"
10. **Assign Credentials** `set` — options: "[object Object]", assignments: "[object Object]"
11. **List Available Email Template Braze** `httpRequest` — url: `=https://{{ $('Assign Credentials').item.json.instance_url }}/templates/email/list `
12. **Token Request** `httpRequest` — method: **POST**, url: `[redacted]`
13. **Split Out** `splitOut` — options: "[object Object]", fieldToSplitOut: "templates"
14. **Dartagnan Project list** `httpRequest` — url: `https://app.dartagnan.io/api/public/projects`
15. **Filtering Braze Email Template** `set` — options: "[object Object]", assignments: "[object Object]"
16. **Filtered Project Campaign** `httpRequest` — url: `=https://app.dartagnan.io/api/public/projects/{{ $json.id }}`
17. **Filtering Dartagnan Campaigns** `set` — options: "[object Object]", assignments: "[object Object]"
18. **Existing In Braze** `merge` — mode: "combine", options: "[object Object]", advanced: "true"
19. **Not existing In Braze** `merge` — mode: "combine", options: "[object Object]", advanced: "true"
20. **If campaign is modified recently** `if` — options: "[object Object]", conditions: "[object Object]"
21. **Filter Braze vs Dartagnan** `if` — options: "[object Object]", conditions: "[object Object]"
22. **Dartagnan HTML & MEDIA To Update** `httpRequest` — url: `=https://app.dartagnan.io/api/public/campaigns/{{ $json.id }}`
23. **Dartagnan HTML & MEDIA Campagne to Create** `httpRequest` — url: `=https://app.dartagnan.io/api/public/campaigns/{{ $json.id }}`
24. **Embed image in HTML** `code` — jsCode: "// n8n Code Node: HTML Image URL Replacer
// This script replaces all image references in HTML with their direct URLs
// It's designed to work with the data structure you provided
…[truncated]"
25. **Embed image in HTML 1** `code` — jsCode: "// n8n Code Node: HTML Image URL Replacer
// This script replaces all image references in HTML with their direct URLs
// It's designed to work with the data structure you provided
…[truncated]"
26. **Encode Content To Update** `set` — options: "[object Object]", assignments: "[object Object]"
27. **Encode Content to Create** `set` — options: "[object Object]", assignments: "[object Object]"
28. **Update existing email template in Braze** `httpRequest` — method: **POST**, url: `=https://{{ $('Assign Credentials').item.json.instance_url }}/templates/email/update `
29. **Create email template** `httpRequest` — method: **POST**, url: `=https://{{ $item("0").$node["Assign Credentials"].json["instance_url"] }}/templates/email/create`

## 💡 AI-Powered Ideas for Improvement
- **Explain:** This workflow synchronizes email templates between Dartagnan and Braze every five minutes. It retrieves project details and email templates, compares them, and updates or creates templates in Braze as necessary. It also processes HTML content to replace image references with direct URLs, ensuring templates are ready for use in Braze.

- **Demonstrate:** A business owner can use this workflow to keep marketing email templates in sync across platforms, ensuring that updates in Dartagnan are reflected in Braze automatically, saving time and reducing errors.

- **Imitate:** Import the workflow into n8n. Set up credentials for Dartagnan and Braze. Customize the schedule if needed. Ensure the HTML processing matches your template structure. Test the workflow with a small set of templates to verify synchronization.

- **Practice:** Create a test project in Dartagnan and a corresponding email template. Run the workflow and check if the template is correctly updated or created in Braze. Modify the template in Dartagnan and rerun the workflow to observe updates.

- **WIIFM:** Mastering this workflow can help you offer email template synchronization services to clients. It ensures consistent branding and communication across platforms, enhancing marketing campaigns and potentially increasing client satisfaction and retention.

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
