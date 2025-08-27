# Intercom Code Create Webhook
  ## 🚀 What It Does
  Automates a flow using stickyNote×4, noOp×2, httpRequest×2.
  
  ## 💼 Business Use Case
  Use as a **glue/API broker**: receive data, enrich/validate via APIs, and pass to downstream systems.
  
  ## ⚙️ How It Works
  1. **Trigger:** This workflow starts with **Sticky Note**.
  2. **On Webhook event from Intercom** `webhook` — method: **POST**, path: `/11e21ebc-27ef-49b5-8c77-648faf3e86e0`
3. **Intercom** `intercom` — operation: **update**
4. **Sticky Note** `stickyNote` — width: "377.10487444608555", height: "609.3353028064989", content: "## On User created event in Intercom

1. Setup webhook url in intercom
2. Make sure `contact.user.created` is enabled"
5. **Sticky Note1** `stickyNote` — color: "3", width: "275.71639586410623", height: "609.3353028064989"
6. **Sticky Note2** `stickyNote` — width: "562.599704579025", height: "763.7223042836036", content: "## Update user in Intercom

1. Set Http node and generic header API Key using this guide https://developers.intercom.com/docs/build-an-integration/learn-more/authentication/
2. Upd…[truncated]"
7. **Sticky Note3** `stickyNote` — color: "4", width: "623.6113141433334", height: "390.44782241577565"
8. **On user created** `switch` — rules: "[object Object]", options: "[object Object]"
9. **set key fields** `set` — options: "[object Object]", assignments: "[object Object]"
10. **Other event** `noOp` — configured for its default action.
11. **Enrich user from ExactBuyer** `httpRequest` — url: `https://api.exactbuyer.com/v1/enrich`
12. **massage data** `code` — mode: "runOnceForEachItem", jsCode: "// Add social profiles
$input.item.json.social_profiles = $input.item.json.result.social_profiles.map((profile) => {
  return {
    type: 'social_profile',
    name : profile.netwo…[truncated]"
13. **Could not find user** `noOp` — configured for its default action.
14. **Update data in Intercom** `httpRequest` — method: **PUT**, url: `=https://api.intercom.io/contacts/{{ $('set key fields').item.json.user_id }}`
  
  ## 💡 AI-Powered Ideas for Improvement
  **Explain:**  
This n8n workflow automates the enrichment of new user data in Intercom by integrating with ExactBuyer. When a new user is created in Intercom, the workflow is triggered via a webhook. It checks if the user creation event is valid, retrieves user details, and sends a request to ExactBuyer to enrich the user's data with additional information like social profiles and location. The enriched data is then updated back in Intercom, ensuring that user profiles are comprehensive and up-to-date.

**Demonstrate:**  
A SaaS company can use this workflow to enhance its CRM data, ensuring sales and support teams have complete user profiles for better engagement and customer service.

**Imitate:**  
1. Set up a webhook in Intercom for user creation events.
2. Configure n8n to trigger the workflow on these events.
3. Connect ExactBuyer API for data enrichment.
4. Map the enriched data fields to update in Intercom.
5. Test the workflow with a sample user to verify updates.

**Practice:**  
Create a test Intercom account and simulate a new user creation. Run the workflow to see how user data is enriched with additional details from ExactBuyer and updated in Intercom.

**WIIFM:**  
Mastering this workflow can significantly enhance your ability to offer data enrichment services, making you valuable to businesses seeking to improve customer insights and engagement. This can lead to increased client retention and potential revenue growth for your automation services.
  
  ## 🔧 Setup Instructions
  1. **Connect Credentials:** httpHeaderAuth, intercomApi.
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
  