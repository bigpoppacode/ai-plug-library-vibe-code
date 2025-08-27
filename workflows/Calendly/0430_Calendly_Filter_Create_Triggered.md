# Calendly Filter Create Triggered
  ## 🚀 What It Does
  Automates a flow using hubspot×5, stickyNote×4, if×2.
  
  ## 💼 Business Use Case
  Ideal for **lead intake**, **enrichment**, and **CRM updates** with alerts to the right channel.
  
  ## ⚙️ How It Works
  1. **Trigger:** This workflow starts with **Calendly Trigger**.
  2. **Sticky Note** `stickyNote` — width: "257.64008049230523", height: "255.97404402400312", content: "## Setup
1. Add `Clearbit`, `Hubspot`, and `Calendly` credentials
2. Click on `Test workflow`
3. Book meeting on Calendly so the event starts the workflow"
3. **Sticky Note1** `stickyNote` — color: "4", width: "225.41119920533646", height: "260.45841271216835"
4. **Sticky Note2** `stickyNote` — color: "4", width: "219.1588560076235", height: "260.45841271216835"
5. **Sticky Note3** `stickyNote` — color: "4", width: "233.74765680228705", height: "260.45841271216835"
6. **Calendly Trigger** `calendlyTrigger` — events: "invitee.created"
7. **Filter out personal emails** `filter` — options: "[object Object]", conditions: "[object Object]"
8. **Enrich email** `clearbit` — resource: **person**
9. **If person has a company** `if` — options: "[object Object]", conditions: "[object Object]"
10. **Contact not found, do nothing** `noOp` — configured for its default action.
11. **Enrich company** `clearbit` — domain: "={{ $json.employment.domain }}", additionalFields: "[object Object]"
12. **Upsert lead** `hubspot` — email: "={{ $('Enrich email').item.json.email }}", options: "[object Object]", authentication: "oAuth2"
13. **Search company** `hubspot` — resource: **company**, operation: **searchByDomain**
14. **if company does not exist on CRM** `if` — options: "[object Object]", conditions: "[object Object]"
15. **Create company** `hubspot` — resource: **company**
16. **Update company** `hubspot` — resource: **company**, operation: **update**
17. **Upsert contact** `hubspot` — email: "={{ $('Enrich email').item.json.email }}", options: "[object Object]", authentication: "oAuth2"
  
  ## 💡 AI-Powered Ideas for Improvement
  **Explain:** This n8n workflow automates lead management by integrating Calendly, Clearbit, and HubSpot. When a meeting is booked on Calendly, it triggers the workflow to check if the invitee's email is personal or business. If it's a business email, Clearbit enriches the email to gather company information. The workflow then checks if the company exists in HubSpot CRM. If not, it creates a new company record. Finally, the contact and company information are updated or inserted into HubSpot.

**Demonstrate:** A sales consultant could use this workflow to automatically enrich leads from meetings, ensuring their CRM is always up-to-date with the latest information, saving time and improving accuracy.

**Imitate:** 1. Import the workflow into n8n. 2. Connect Clearbit, HubSpot, and Calendly accounts. 3. Set up a Calendly event to trigger the workflow. 4. Test the workflow by booking a meeting and verifying the data in HubSpot.

**Practice:** Create a test Calendly event and use a mix of personal and business email addresses. Run the workflow and check how it processes and updates the information in HubSpot.

**WIIFM:** Mastering this workflow allows you to offer automated lead enrichment services, improving CRM data accuracy for businesses. This can enhance client satisfaction, increase sales efficiency, and open up opportunities for recurring automation service contracts.
  
  ## 🔧 Setup Instructions
  1. **Connect Credentials:** clearbitApi, hubspotOAuth2Api, calendlyApi.
  
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
  