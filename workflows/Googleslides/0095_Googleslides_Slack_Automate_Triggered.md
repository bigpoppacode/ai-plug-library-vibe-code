# GoogleSlides Slack Automate Triggered
  ## 🚀 What It Does
  Monitors events, processes them, and **notifies** people/apps (Slack/Email) with structured updates.
  
  ## 💼 Business Use Case
  Ideal for **lead intake**, **enrichment**, and **CRM updates** with alerts to the right channel.
  
  ## ⚙️ How It Works
  1. **Trigger:** This workflow starts with **Hubspot**.
  2. **Hubspot** `hubspot` — operation: **get**
  
  ## 💡 AI-Powered Ideas for Improvement
  ### Explain
This n8n workflow automates the process of handling new deals in HubSpot. It triggers when a new deal is created, retrieves the deal details, and then processes it based on the deal stage and value. Deals are classified into high or low priority tickets in HubSpot, depending on their type and value. Additionally, if a deal is marked as "closed won," a notification is sent to a Slack channel. If a deal is "closed lost," it is logged into Airtable, and for "presentation scheduled," a Google Slides presentation is prepared.

### Demonstrate
A sales manager could use this workflow to streamline deal management. It automatically updates the sales team about successful deals via Slack, logs lost deals for analysis, and prepares presentations for upcoming pitches, saving time and ensuring consistent follow-up.

### Imitate
1. Import the workflow into n8n.
2. Connect your HubSpot, Slack, Airtable, and Google Slides accounts.
3. Configure the trigger to respond to deal creation events in HubSpot.
4. Customize deal classification criteria and messaging as needed.
5. Test the workflow with sample deal data.

### Practice
Create a mock deal in HubSpot and observe how the workflow processes it. Verify if the Slack notification is sent, if the deal is logged in Airtable, and if a Google Slides presentation is created. Adjust parameters and test different scenarios.

### WIIFM
Mastering this workflow allows you to enhance sales processes for clients, improving efficiency and communication within teams. Offering such automation services can increase your value proposition, leading to more business opportunities and higher income in the automation industry.
  
  ## 🔧 Setup Instructions
  1. **Connect Credentials:** hubspotApi, slackApi, airtableApi, googleSlidesOAuth2Api.
2. **Data Mapping:** Verify base/sheet IDs and column names match exactly to prevent silent failures.
3. **Notification Targets:** Confirm channel/email IDs and that the bot/app is authorized to post.
  
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
  