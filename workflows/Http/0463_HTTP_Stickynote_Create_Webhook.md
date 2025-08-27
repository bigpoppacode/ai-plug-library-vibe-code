# HTTP Stickynote Create Webhook
  ## 🚀 What It Does
  Automates a flow using stickyNote×4, highLevel×2, set.
  
  ## 💼 Business Use Case
  Use as a **glue/API broker**: receive data, enrich/validate via APIs, and pass to downstream systems.
  
  ## ⚙️ How It Works
  1. **Trigger:** This workflow starts with **Sticky Note2**.
  2. **Sticky Note** `stickyNote` — width: "747", height: "428", content: "## Purpose 
To verify the mailing address for new contacts in HighLevel. 

Whenever I add a new contact to HighLevel, I run this automation to ensure I have a valid mailing address…[truncated]"
3. **Sticky Note1** `stickyNote` — color: "5", width: "515", height: "763"
4. **Sticky Note2** `stickyNote` — color: "4", height: "339", content: "Receive a webhook from your CRM with the contact address fields"
5. **Sticky Note3** `stickyNote` — color: "3", width: "430", height: "216"
6. **CRM Webhook Trigger** `webhook` — method: **POST**, path: `/727deb6f-9d10-4492-92e6-38f3292510b0`
7. **Set Address Fields** `set` — options: "[object Object]", assignments: "[object Object]", includeOtherFields: "true"
8. **Address Verification** `httpRequest` — method: **POST**, url: `https://api.lob.com/v1/us_verifications`
9. **Switch** `switch` — rules: "[object Object]", value1: "={{ $json.deliverability }}", dataType: "string"
10. **Update HighLevel - Deliverable** `highLevel` — email: "={{ $('CRM Webhook Trigger').item.json.email }}", phone: "={{ $('CRM Webhook Trigger').item.json.phone }}", additionalFields: "[object Object]"
11. **Update HighLevel - NOT Deliverable** `highLevel` — email: "={{ $('CRM Webhook Trigger').item.json.email }}", phone: "={{ $('CRM Webhook Trigger').item.json.phone }}", additionalFields: "[object Object]"
  
  ## 💡 AI-Powered Ideas for Improvement
  **Explain:**  
This n8n workflow automates the verification of mailing addresses for new contacts in HighLevel CRM. It starts by receiving contact details via a webhook, then sets the address fields, and uses an API to verify the deliverability of the address. Depending on the result, it updates the contact in HighLevel, tagging them as either "Deliverable" or "NOT Deliverable."

**Demonstrate:**  
A business owner could use this workflow to ensure all new customer addresses are valid, reducing returned mail and improving communication efficiency.

**Imitate:**  
1. Import the workflow into n8n.
2. Connect your HighLevel and Lob accounts.
3. Set up a webhook in your CRM to trigger this workflow.
4. Customize the address fields and tags as needed.
5. Test with sample data to ensure proper tagging in HighLevel.

**Practice:**  
Create a few test contacts with valid and invalid addresses in your CRM. Run the workflow and observe how it updates the tags in HighLevel based on address deliverability.

**WIIFM:**  
Mastering this workflow can enhance your service offerings by providing address validation as a service, increasing client satisfaction, and reducing mailing costs, thereby creating a new revenue stream in your automation business.
  
  ## 🔧 Setup Instructions
  1. **Connect Credentials:** highLevelApi.
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
  