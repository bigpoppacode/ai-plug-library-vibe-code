# Filter ConvertKit Create Triggered
  ## 🚀 What It Does
  Automates a flow using hubspot×5, stickyNote×4, if×2.
  
  ## 💼 Business Use Case
  Ideal for **lead intake**, **enrichment**, and **CRM updates** with alerts to the right channel.
  
  ## ⚙️ How It Works
  1. **Trigger:** This workflow starts with **ConvertKit Trigger**.
  2. **Sticky Note** `stickyNote` — width: "257.64008049230523", height: "255.97404402400312", content: "## Setup
1. Add `Clearbit`, `Hubspot`, and `ConvertKit` credentials
2. Click on `Test workflow`
3. Subscribe user to form/list so the event starts the workflow"
3. **Sticky Note2** `stickyNote` — color: "4", width: "219.1588560076235", height: "260.45841271216835"
4. **Sticky Note3** `stickyNote` — color: "4", width: "233.74765680228705", height: "260.45841271216835"
5. **ConvertKit Trigger** `convertKitTrigger` — event: "formSubscribe", formId: "6242124"
6. **Sticky Note4** `stickyNote` — color: "4", width: "225.41119920533646", height: "260.45841271216835"
7. **Filter out personal emails1** `filter` — options: "[object Object]", conditions: "[object Object]"
8. **Enrich email** `clearbit` — resource: **person**
9. **If person has company** `if` — options: "[object Object]", conditions: "[object Object]"
10. **Contact not found, do nothing1** `noOp` — configured for its default action.
11. **Enrich company** `clearbit` — domain: "={{ $json.employment.domain }}", additionalFields: "[object Object]"
12. **Upsert lead** `hubspot` — email: "={{ $('Enrich email').item.json.email }}", options: "[object Object]", authentication: "oAuth2"
13. **Search company** `hubspot` — resource: **company**, operation: **searchByDomain**
14. **if company does not exist on CRM** `if` — options: "[object Object]", conditions: "[object Object]"
15. **Create company** `hubspot` — resource: **company**
16. **Update company** `hubspot` — resource: **company**, operation: **update**
17. **Upsert contact** `hubspot` — email: "={{ $('Enrich email').item.json.email }}", options: "[object Object]", authentication: "oAuth2"
  
  ## 💡 AI-Powered Ideas for Improvement
  Could not generate AI recommendations at this time.
  
  ## 🔧 Setup Instructions
  1. **Test & Activate:** Run a manual execution with sample data, then set the workflow Active.
  
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
  