# Webhook Filter Create Webhook
## 🚀 What It Does
Monitors events, processes them, and **notifies** people/apps (Slack/Email) with structured updates.

## 💼 Business Use Case
Use to eliminate manual copy-paste and standardize a recurring business process.

## ⚙️ How It Works
1. **Trigger:** This workflow starts with **Sticky Note**.
2. **Sticky Note1** `stickyNote` — color: "7", width: "314.8866754976157", height: "119.43509109499996"
3. **Sticky Note2** `stickyNote` — color: "7", width: "194", height: "101"
4. **Sticky Note3** `stickyNote` — color: "6", width: "312.11707638995097", height: "309.60234316641487"
5. **On new Discourse user** `webhook` — method: **POST**, path: `/abde7a49-208b-4bce-bcb9-910c4e529b06`
6. **Sticky Note** `stickyNote` — color: "7", width: "330.80402248919853", height: "159.6208789325232"
7. **Sticky Note4** `stickyNote` — color: "7", width: "249.15806405688022", height: "124.16286220264169"
8. **Filter out common personal emails** `filter` — options: "[object Object]", conditions: "[object Object]"
9. **Enrich user with Clearbit** `clearbit` — resource: **person**
10. **Get company info** `clearbit` — domain: "={{ $json.employment.domain }}", additionalFields: "[object Object]"
11. **No clearbit enrichment available** `noOp` — configured for its default action.
12. **Filter for high value leads** `filter` — options: "[object Object]", conditions: "[object Object]"
13. **Post message in Channel** `slack` — text: "Test message!", select: "channel", blocksUi: "={
	"blocks": [
		{
			"type": "section",
			"text": {
				"type": "mrkdwn",
				"text": "A high value lead just signed up on our Discourse community 👇"
			}
		},
		{
			"type": "…[truncated]"

## 💡 AI-Powered Ideas for Improvement
**Explain**  
This n8n workflow automates the process of identifying high-value leads from new user sign-ups on a Discourse platform. It begins by capturing the user's email via a webhook. It filters out common personal email domains to avoid unnecessary data enrichment costs. The remaining emails are enriched using Clearbit to gather more information about the user and their company. If the user meets the "high-value" criteria, such as company size and website ranking, a notification is sent to a Slack channel to alert the team about the new potential lead.

**Demonstrate**  
A SaaS company could use this workflow to automatically identify and notify their sales team about new potential business leads joining their community, enabling prompt follow-up and engagement.

**Imitate**  
1. Set up a Discourse webhook to trigger on new user sign-up.
2. Use a filter to exclude personal email domains.
3. Enrich remaining emails with Clearbit for data.
4. Define high-value criteria and filter leads.
5. Configure Slack to notify the team of high-value leads.

**Practice**  
Create a test Discourse account and simulate a user sign-up to see how the workflow processes and identifies high-value leads, then check Slack for notifications.

**WIIFM**  
Mastering this workflow allows you to enhance lead generation processes, making your business more efficient in identifying potential clients. It can increase sales opportunities and provide a valuable service to clients looking to optimize their lead qualification process.

## 🔧 Setup Instructions
1. **Connect Credentials:** clearbitApi, slackApi.
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
