# HTTP Keap Create Webhook
  ## 🚀 What It Does
  Automates a flow using stickyNote×4, keap×2, set.
  
  ## 💼 Business Use Case
  Use as a **glue/API broker**: receive data, enrich/validate via APIs, and pass to downstream systems.
  
  ## ⚙️ How It Works
  1. **Trigger:** This workflow starts with **Sticky Note2**.
  2. **Sticky Note** `stickyNote` — width: "747", height: "428", content: "## Purpose 
To verify the mailing address for new contacts in Keap. 

Whenever I add a new contact to Keap, I run this automation to ensure I have a valid mailing address. It also …[truncated]"
3. **Sticky Note1** `stickyNote` — color: "5", width: "515", height: "763"
4. **Sticky Note2** `stickyNote` — color: "4", height: "339", content: "Receive a webhook from your CRM with the contact address fields"
5. **Sticky Note3** `stickyNote` — color: "3", width: "430", height: "216"
6. **CRM Webhook Trigger** `webhook` — method: **POST**, path: `/727deb6f-9d10-4492-92e6-38f3292510b0`
7. **Set Address Fields** `set` — options: "[object Object]", assignments: "[object Object]", includeOtherFields: "true"
8. **Address Verification** `httpRequest` — method: **POST**, url: `https://api.lob.com/v1/us_verifications`
9. **Switch** `switch` — rules: "[object Object]", value1: "={{ $json.deliverability }}", dataType: "string"
10. **Update Keap - Deliverable** `keap` — resource: **contactTag**
11. **Update Keap - NOT Deliverable** `keap` — resource: **contactTag**
  
  ## 💡 AI-Powered Ideas for Improvement
  - **Explain**: This n8n workflow helps ensure the accuracy of mailing addresses for new contacts in Keap. It starts by receiving contact address data via a CRM webhook, then sets the address fields for verification. Using the Lob API, it checks if the address is deliverable. Based on the deliverability, it updates Keap by tagging the contact as having a deliverable or non-deliverable address, prompting further action if needed.

- **Demonstrate**: A business owner can use this workflow to automatically verify mailing addresses of new leads in Keap, reducing manual errors and ensuring that marketing materials reach the intended recipients, enhancing campaign efficiency.

- **Imitate**: 1. Set up a webhook in your CRM to capture new contact details. 2. Connect the workflow to your Keap and Lob accounts. 3. Use the Set and HTTP Request nodes to format and verify addresses. 4. Configure the Switch node to tag contacts based on address deliverability.

- **Practice**: Create a test contact in your CRM with a known incorrect address and run the workflow. Observe how the workflow tags the contact in Keap as non-deliverable, prompting you to manually verify the address.

- **WIIFM**: Mastering this workflow allows you to offer address verification services to businesses, ensuring accurate customer data and enhancing the effectiveness of their campaigns, which can lead to increased client satisfaction and revenue for your automation business.
  
  ## 🔧 Setup Instructions
  1. **Connect Credentials:** keapOAuth2Api.
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
  