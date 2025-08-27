# Wait Splitout Create Webhook
## 🚀 What It Does
Moves data between apps and a **database/spreadsheet**, with logic and optional AI steps.

## 💼 Business Use Case
Use as a **glue/API broker**: receive data, enrich/validate via APIs, and pass to downstream systems.

## ⚙️ How It Works
1. **Trigger:** This workflow starts with **Execute Workflow Trigger**.
2. **Execute Workflow Trigger** `executeWorkflowTrigger` — configured for its default action.
3. **Sticky Note** `stickyNote` — color: "7", width: "1480", height: "620"
4. **Sticky Note1** `stickyNote` — color: "7", width: "1480", height: "620"
5. **Sticky Note6** `stickyNote` — color: "7", width: "560", height: "620"
6. **Sticky Note7** `stickyNote` — width: "340", height: "820", content: "![Callforge](https://uploads.n8n.io/templates/callforgeshadow.png)
## CallForge - The AI Gong Sales Call Processor
CallForge allows you to extract important information for differe…[truncated]"
7. **Sticky Note3** `stickyNote` — color: "7", width: "2140", height: "480"
8. **Sticky Note8** `stickyNote` — color: "7", width: "1480", height: "620"
9. **Sticky Note4** `stickyNote` — color: "7", width: "420", height: "360"
10. **Check if Integration Data Found** `if` — options: "[object Object]", conditions: "[object Object]"
11. **Check if Competitor Data Found** `if` — options: "[object Object]", conditions: "[object Object]", looseTypeValidation: "true"
12. **Check if objection found** `if` — options: "[object Object]", conditions: "[object Object]"
13. **Update Notion Call object with AI data** `notion` — resource: **databasePage**, operation: **update**
14. **Check for use cases** `if` — options: "[object Object]", conditions: "[object Object]"
15. **Wait for rate limiting - Integration** `wait` — amount: "3"
16. **Wait for rate limiting - Competitors** `wait` — amount: "3"
17. **Wait for rate limiting - Objection** `wait` — amount: "3"
18. **Wait for rate limiting - Use Cases** `wait` — amount: "3"
19. **Split Out Integration data** `splitOut` — include: "selectedOtherFields", options: "[object Object]", fieldToSplitOut: "AIoutput.Integrations"
20. **Get AI Response - Competitors** `set` — options: "[object Object]", assignments: "[object Object]"
21. **Split Out all objections** `splitOut` — include: "selectedOtherFields", options: "[object Object]", fieldToSplitOut: "AIoutput.Objection.ObjectionTags"
22. **Split Out Use Cases** `splitOut` — options: "[object Object]", fieldToSplitOut: "AIoutput.UseCases"
23. **Create Integrations** `notion` — resource: **databasePage**
24. **Split Out Competitor Data** `splitOut` — include: "selectedOtherFields", options: "[object Object]", fieldToSplitOut: "aiResponse.Competitors"
25. **Format Tag Data for notion** `set` — options: "[object Object]", assignments: "[object Object]"
26. **Create Use Cases** `notion` — resource: **databasePage**
27. **Bundle Integration Data to 1 object** `aggregate` — options: "[object Object]", aggregate: "aggregateAllItemData", destinationFieldName: "tagdata"
28. **Create Competitors in DB** `notion` — resource: **databasePage**
29. **Bundle all Tags** `aggregate` — options: "[object Object]", fieldsToAggregate: "[object Object]"
30. **Bundle Use Case Data to 1 object** `aggregate` — options: "[object Object]", aggregate: "aggregateAllItemData", destinationFieldName: "tagdata"
31. **Merge Integration Thread** `set` — options: "[object Object]", assignments: "[object Object]"
32. **Bundle Competitor Data to 1 object** `aggregate` — options: "[object Object]", aggregate: "aggregateAllItemData", destinationFieldName: "tagdata"
33. **Add Objection Tag to Notion** `httpRequest` — method: **PATCH**, url: `=https://api.notion.com/v1/pages/{{ $('Execute Workflow Trigger').item.json.notionData[0].id }}`
34. **Merge Use Case Thread** `set` — options: "[object Object]", assignments: "[object Object]"
35. **Merge Competitor Thread** `set` — options: "[object Object]", assignments: "[object Object]"
36. **Wait for rate limiting again** `wait` — amount: "4"
37. **Update Call with Objection Summary** `notion` — resource: **databasePage**, operation: **update**
38. **Merge Objection Threads** `set` — options: "[object Object]", assignments: "[object Object]"

## 💡 AI-Powered Ideas for Improvement
### Explain
This n8n workflow processes AI-generated sales call data to update a Notion database. It checks for specific data categories—integrations, competitor details, objections, and use cases. If present, it splits and processes this data, updates Notion pages, and handles rate limiting to ensure smooth operations.

### Demonstrate
A sales team could use this workflow to automatically analyze and update their CRM with insights from recorded sales calls. This ensures efficient data handling, better customer insights, and informed decision-making without manual data entry.

### Imitate
1. Import the workflow into n8n.
2. Connect your Notion account.
3. Set up a trigger to start the workflow when new AI data is available.
4. Map your Notion database fields to match the workflow's outputs.
5. Test the workflow to ensure data updates correctly.

### Practice
Create a test scenario where you simulate receiving AI data from a sales call. Run the workflow to see how it updates your Notion database. Adjust the conditions and mappings to see how changes affect the final output.

### WIIFM
Mastering this workflow enables you to offer automated CRM updates as a service. This can save clients time, improve their data accuracy, and enhance their sales strategies, leading to potential business growth and increased revenue opportunities for your automation business.

## 🔧 Setup Instructions
1. **Connect Credentials:** notionApi.
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
