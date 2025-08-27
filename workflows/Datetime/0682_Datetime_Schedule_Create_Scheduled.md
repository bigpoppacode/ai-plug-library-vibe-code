# Datetime Schedule Create Scheduled
  ## 🚀 What It Does
  Monitors events, processes them, and **notifies** people/apps (Slack/Email) with structured updates.
  
  ## 💼 Business Use Case
  Use to eliminate manual copy-paste and standardize a recurring business process.
  
  ## ⚙️ How It Works
  1. **Trigger:** This workflow starts with **When clicking ‘Test workflow’**.
  2. **When clicking ‘Test workflow’** `manualTrigger` — configured for its default action.
3. **Run Every 5 Minutes** `scheduleTrigger` — rule: "[object Object]"
4. **Sticky Note11** `stickyNote` — color: "7", width: "543.0448479049971", height: "635.2493225262418"
5. **Sticky Note** `stickyNote` — color: "7", width: "792.7994376824845", height: "651.0105345024904"
6. **Sticky Note12** `stickyNote` — color: "7", width: "540.6200460624971", height: "560.0562505318285"
7. **Sticky Note5** `stickyNote` — color: "7", width: "382.98284329874696", height: "746.70974187249"
8. **Sticky Note6** `stickyNote` — color: "7", width: "540.5949630612389", height: "442.9500589573929"
9. **Get 5 Minute Ago Timestamp** `dateTime` — operation: **subtractFromDate**
10. **Get Incidents from ServiceNow** `serviceNow` — resource: **incident**, operation: **getAll**
11. **Check if New Incidents** `if` — options: "[object Object]", conditions: "[object Object]"
12. **Post Error Message if Error with ServiceNow** `slack` — text: "🚨 Issue connecting to ServiceNow. Please investigate error in n8n. 🚨", select: "channel", channelId: "[object Object]"
13. **Sort Incidents in Ascending Order** `sort` — options: "[object Object]", sortFieldsUi: "[object Object]"
14. **No Incidents, Do Nothing** `noOp` — configured for its default action.
15. **Post Incident Details to Slack Channel** `slack` — select: "channel", blocksUi: "={
	"blocks": [
		{
			"type": "header",
			"text": {
				"type": "plain_text",
				"text": "ServiceNow Incident Notification",
				"emoji": true
			}
		},
		{
			"type": "section"…[truncated]", channelId: "[object Object]"
  
  ## 💡 AI-Powered Ideas for Improvement
  ### Explain
This n8n workflow monitors ServiceNow for new incidents every 5 minutes. It retrieves incidents created in the last 5 minutes, checks if there are any new ones, and posts details of these incidents to a Slack channel. If there are connection issues with ServiceNow, an error message is sent to Slack.

### Demonstrate
A company might use this workflow to ensure their IT support team is immediately notified of new incidents. This allows for quick response times, improving service quality and minimizing downtime.

### Imitate
1. Import the workflow into n8n.
2. Connect your ServiceNow and Slack accounts.
3. Adjust the schedule to your preferred interval.
4. Map the Slack channel where you want to receive notifications.
5. Test the workflow by creating a new incident in ServiceNow.

### Practice
Create a test incident in ServiceNow and observe if the workflow posts the details to your specified Slack channel. Modify the incident details and rerun to see updates in Slack.

### WIIFM
Mastering this workflow enhances your ability to monitor critical systems and improve incident response times. Offering such automation solutions can attract clients looking for efficient IT management, boosting your business in the automation field.
  
  ## 🔧 Setup Instructions
  1. **Connect Credentials:** serviceNowBasicApi, slackApi.
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
  