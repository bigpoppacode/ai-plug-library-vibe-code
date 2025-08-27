# Manual Noop Create Triggered
  ## 🚀 What It Does
  Monitors events, processes them, and **notifies** people/apps (Slack/Email) with structured updates.
  
  ## 💼 Business Use Case
  Ideal for **lead intake**, **enrichment**, and **CRM updates** with alerts to the right channel.
  
  ## ⚙️ How It Works
  1. **Trigger:** This workflow starts with **When clicking ‘Test workflow’**.
  2. **When clicking ‘Test workflow’** `manualTrigger` — configured for its default action.
3. **Google Gemini Chat Model** `lmChatGoogleGemini` — options: "[object Object]", modelName: "models/gemini-2.0-flash"
4. **Google Gemini Chat Model1** `lmChatGoogleGemini` — options: "[object Object]", modelName: "models/gemini-2.0-flash"
5. **Sticky Note** `stickyNote` — color: "7", width: "520", height: "420"
6. **Sticky Note1** `stickyNote` — color: "7", width: "540", height: "540"
7. **Sticky Note2** `stickyNote` — color: "7", width: "560", height: "540"
8. **Sticky Note3** `stickyNote` — color: "7", width: "480", height: "440"
9. **Sticky Note4** `stickyNote` — width: "480", height: "1080", content: "## Try it out
### This n8n template uses existing emails from customers as context to customise and "finetune" outreach emails to them using AI.

By now, it should be common knowle…[truncated]"
10. **Sticky Note5** `stickyNote` — color: "7", width: "640", height: "420"
11. **Get Contacts** `hubspot` — operation: **search**
  
  ## 💡 AI-Powered Ideas for Improvement
  **Explain**  
This workflow is designed to enhance email marketing by using AI to personalize outreach emails. It starts by retrieving customer details from HubSpot, then gathers all correspondence with each customer from Gmail. The AI analyzes these emails to build a customer persona, which is then used to generate a personalized sales email. Finally, a draft email is created for review before sending.

**Demonstrate**  
A business owner could use this workflow to improve email marketing campaigns by personalizing messages based on customer interactions, leading to better engagement and conversion rates.

**Imitate**  
1. Import the workflow into n8n.  
2. Connect your HubSpot and Gmail accounts.  
3. Customize the email content in the "Variables" node.  
4. Set up a trigger to run the workflow (e.g., manually or on a schedule).  
5. Test the workflow to ensure it personalizes emails correctly.

**Practice**  
Create a test campaign using a sample dataset in HubSpot. Run the workflow and review the generated email drafts. Adjust the persona criteria and email content to see how it affects personalization.

**WIIFM**  
Mastering this workflow allows you to offer personalized email marketing services, increasing client satisfaction and retention. This expertise can differentiate you in the automation business, attract new clients, and generate additional income through premium services.
  
  ## 🔧 Setup Instructions
  1. **Connect Credentials:** googlePalmApi, gmailOAuth2, hubspotAppToken.
2. **Notification Targets:** Confirm channel/email IDs and that the bot/app is authorized to post.
  
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
  