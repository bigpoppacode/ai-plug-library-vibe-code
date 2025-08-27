# Lemlist Slack Automate Webhook
  ## 🚀 What It Does
  Monitors events, processes them, and **notifies** people/apps (Slack/Email) with structured updates.
  
  ## 💼 Business Use Case
  Use as a **glue/API broker**: receive data, enrich/validate via APIs, and pass to downstream systems.
  
  ## ⚙️ How It Works
  1. **Trigger:** This workflow starts with **Lemlist Trigger - On new reply**.
  2. **Lemlist Trigger - On new reply** `lemlistTrigger` — event: "emailsReplied", options: "[object Object]"
3. **Sticky Note** `stickyNote` — width: "304.92548549441915", height: "504.9663351162785", content: "### Get your lemlist API key

1. Go to your lemlist account or create one [HERE](https://app.lemlist.com/create-account)

2. Go to Settings -> Integrations

3. Generate your API Ke…[truncated]"
4. **Sticky Note1** `stickyNote` — width: "319.6621253622332", height: "507.1074887209538", content: "# Read me

This workflow send email replies of your lemlist campaigns to the Slack channel of your choice.

The OpenAI node will classify the reply status. 

The Slack alert is str…[truncated]"
5. **OpenAI Chat Model** `lmChatOpenAi` — model: `gpt-4o`
6. **Structured Output Parser** `outputParserStructured` — schemaType: "manual", inputSchema: "{
	"type": "object",
	"properties": {
		"category": {
			"type": "string"
 }
	}
}"
7. **Sticky Note2** `stickyNote` — width: "480.38008828116847", height: "341.5885389153657", content: "### Create a Slack notification for each new replies

1. Connect your Slack account by clicking to add Credentials

2. Write the name of the channel where you want to send the Slac…[truncated]"
8. **Sticky Note3** `stickyNote` — width: "480.38008828116847", height: "256.5682017131378", content: "### Save time by automatically unsubscribing leads that don't want to receive emails from you"
9. **Sticky Note4** `stickyNote` — width: "480.38008828116847", height: "256.5682017131378", content: "### Mark interested leads as interested in lemlist"
10. **Sticky Note5** `stickyNote` — width: "480.38008828116847", height: "608.2279357257166", content: "### Categorize the reply with OpenAI"
11. **Sticky Note6** `stickyNote` — width: "336.62085535637357", height: "311.3046602455328", content: "### This node will clean the text and make sure it looks pretty on Slack"
12. **Sticky Note7** `stickyNote` — width: "336.62085535637357", height: "311.3046602455328", content: "### Trigger a different scenario according to the category of the reply"
13. **Format text with Markdown** `markdown` — html: "={{ $json.text }}", options: "[object Object]", destinationKey: "textClean"
14. **Categorize lemlist reply** `chainLlm` — text: "=Classify the [email_content] in one only of the following categories: 

Categories=["Interested", "Out of office", "Unsubscribe", "Not interested", "Other"] 

- Interested is when…[truncated]", promptType: "define", hasOutputParser: "true"
15. **Merge data** `merge` — mode: "combine", options: "[object Object]", combinationMode: "mergeByPosition"
16. **Route reply to the right branch** `switch` — rules: "[object Object]", options: "[object Object]"
17. **Send alert to Slack** `slack` — text: "=", select: "channel", blocksUi: "={
	"blocks": [
		{
			"type": "section",
			"text": {
				"type": "mrkdwn",
				"text": ":raised_hands: New reply in lemlist!\n"
			}
		},
		{
			"type": "section",
			"fields": […[truncated]"
18. **Lemlist - Unsubscribe** `lemlist` — resource: **lead**, operation: **unsubscribe**
19. **lemlist - Mark as interested** `httpRequest` — url: `=https://api.lemlist.com/api/campaigns/{{$json["campaignId"]}}/leads/{{$json["leadEmail"]}}/interested`
  
  ## 💡 AI-Powered Ideas for Improvement
  ### Explain
This n8n workflow automates the processing of email replies from Lemlist campaigns. When a new reply is detected, it cleans the text, categorizes it using OpenAI, and sends a notification to a Slack channel. Depending on the reply's category, it can unsubscribe leads or mark them as interested in Lemlist.

### Demonstrate
A business owner could use this workflow to streamline their email marketing campaigns. By automatically categorizing replies and managing leads, they save time and ensure that interested leads are promptly followed up on, enhancing customer engagement.

### Imitate
1. Set up a Lemlist account and generate an API key.
2. Import the workflow into n8n and connect Lemlist and Slack.
3. Customize the Slack channel and categorize rules as needed.
4. Test the workflow with a few sample replies to ensure it categorizes and routes them correctly.

### Practice
Create a test campaign in Lemlist and send emails to yourself. Reply to these emails with various responses (e.g., interested, not interested) and observe how the workflow categorizes and processes them, updating Slack and Lemlist accordingly.

### WIIFM
Mastering this workflow can help you offer automated email management services, improving your clients' marketing efficiency. It can lead to better engagement rates and customer satisfaction, potentially increasing your income through enhanced service offerings.
  
  ## 🔧 Setup Instructions
  1. **Notification Targets:** Confirm channel/email IDs and that the bot/app is authorized to post.
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
  