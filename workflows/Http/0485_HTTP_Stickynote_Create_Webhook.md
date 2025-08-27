# HTTP Stickynote Create Webhook
  ## 🚀 What It Does
  Automates a flow using stickyNote×4, httpRequest×3, set.
  
  ## 💼 Business Use Case
  Use as a **glue/API broker**: receive data, enrich/validate via APIs, and pass to downstream systems.
  
  ## ⚙️ How It Works
  1. **Trigger:** This workflow starts with **Sticky Note2**.
  2. **Sticky Note** `stickyNote` — width: "747", height: "428", content: "## Purpose 
To verify the mailing address for new contacts in Groundhogg CRM. 

Whenever I add a new contact to Groundhogg CRM, I run this automation to ensure I have a valid maili…[truncated]"
3. **Sticky Note1** `stickyNote` — color: "5", width: "561.9462602626872", height: "763"
4. **Sticky Note2** `stickyNote` — color: "4", height: "339", content: "Receive a webhook from your CRM with the contact address fields"
5. **Sticky Note3** `stickyNote` — color: "3", width: "430", height: "216"
6. **CRM Webhook Trigger** `webhook` — method: **POST**, path: `/727deb6f-9d10-4492-92e6-38f3292510b0`
7. **Set Address Fields** `set` — options: "[object Object]", assignments: "[object Object]", includeOtherFields: "true"
8. **Address Verification** `httpRequest` — method: **POST**, url: `https://api.lob.com/v1/us_verifications`
9. **Switch** `switch` — rules: "[object Object]", value1: "={{ $json.deliverability }}", dataType: "string"
10. **Update Groundhogg - Deliverable** `httpRequest` — method: **POST**, url: `=webhook listener from Groundhogg funnel`
11. **Update Groundhogg - NOT Deliverable** `httpRequest` — method: **POST**, url: `=webhook listener from Groundhogg funnel`
  
  ## 💡 AI-Powered Ideas for Improvement
  **Explain:**  
This n8n workflow verifies mailing addresses for new contacts added to Groundhogg CRM. It starts by receiving contact data via a webhook, sets address fields for verification, and sends them to Lob's API to check deliverability. Based on the result, it updates the Groundhogg CRM to indicate whether the address is deliverable or not, tagging it appropriately.

**Demonstrate:**  
A business owner can use this workflow to ensure customer addresses are valid before sending out marketing materials, reducing waste and ensuring better delivery rates.

**Imitate:**  
1. Set up a webhook in n8n to receive contact data from Groundhogg CRM.
2. Configure the Lob API for address verification.
3. Use a Switch node to handle deliverable and non-deliverable outcomes.
4. Update the CRM with the results.

**Practice:**  
Create a test contact in Groundhogg CRM with an address. Run the workflow to see how it verifies the address and updates the CRM. Modify the address to see different outcomes.

**WIIFM:**  
Mastering this workflow enables you to offer address verification services, enhancing data accuracy for clients. This can improve delivery rates for marketing campaigns, increasing client satisfaction and potentially generating additional income streams.
  
  ## 🔧 Setup Instructions
  1. **API Contracts:** Validate required headers and 2xx/4xx handling; add retries for 429/5xx.
  
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
  