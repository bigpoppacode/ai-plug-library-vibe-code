# Hunter Form Create Triggered
  ## 🚀 What It Does
  Automates a flow using stickyNote×4, clearbit×2, formTrigger.
  
  ## 💼 Business Use Case
  Ideal for **lead intake**, **enrichment**, and **CRM updates** with alerts to the right channel.
  
  ## ⚙️ How It Works
  1. **Trigger:** This workflow starts with **n8n Form Trigger**.
  2. **n8n Form Trigger** `formTrigger` — path: `/0bf8840f-1cc4-46a9-86af-a3fa8da80608`
3. **Sticky Note** `stickyNote` — color: "5", width: "547", height: "132"
4. **Sticky Note1** `stickyNote` — color: "7", width: "162", height: "139"
5. **Sticky Note2** `stickyNote` — color: "7", width: "162", height: "84"
6. **Sticky Note3** `stickyNote` — color: "7", width: "162", height: "136.49297423887586"
7. **Hunter** `hunter` — operation: **emailVerifier**
8. **Check if the email is valid** `if` — options: "[object Object]", conditions: "[object Object]"
9. **Enrich person** `clearbit` — resource: **person**
10. **Email is not valid, do nothing** `noOp` — configured for its default action.
11. **Enrich company** `clearbit` — domain: "={{ $json.employment.domain }}", additionalFields: "[object Object]"
12. **Add lead to Hubspot** `hubspot` — email: "={{ $('Check if the email is valid').item.json.email }}", options: "[object Object]", authentication: "oAuth2"
  
  ## 💡 AI-Powered Ideas for Improvement
  **Explain**: This n8n workflow automates the process of collecting and verifying email addresses submitted through a form. After a user submits their business email, the workflow uses Hunter to verify its validity. If the email is valid, it enriches the data with Clearbit to gather additional information about the person and company, and then adds this lead to HubSpot. If the email is invalid, the workflow stops without further action.

**Demonstrate**: A business owner could use this workflow to ensure that only verified and enriched leads are added to their CRM, enhancing lead quality and saving time in the sales process by filtering out invalid contacts.

**Imitate**: To apply this workflow, import it into your n8n instance, connect your Hunter, Clearbit, and HubSpot accounts, and test it with your email. Customize the HubSpot fields as needed, and activate the workflow to start collecting verified leads.

**Practice**: Create a test form and submit different emails to see how the workflow processes valid versus invalid emails. Experiment with Clearbit fields to see what additional data you can gather.

**WIIFM**: Mastering this workflow can help you provide high-quality lead generation services, attracting clients who need reliable contact data for marketing and sales. It can lead to new business opportunities and increased revenue streams in your AI automation business.
  
  ## 🔧 Setup Instructions
  1. **Connect Credentials:** hunterApi, clearbitApi, hubspotOAuth2Api.
  
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
  