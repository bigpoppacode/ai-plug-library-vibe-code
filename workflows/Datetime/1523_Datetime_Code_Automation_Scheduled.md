# Datetime Code Automation Scheduled
  ## 🚀 What It Does
  Monitors events, processes them, and **notifies** people/apps (Slack/Email) with structured updates.
  
  ## 💼 Business Use Case
  Great for **content, summarization, triage, or decisioning** where AI adds speed and consistency.
  
  ## ⚙️ How It Works
  1. **Trigger:** This workflow starts with **When clicking ‘Test workflow’**.
  2. **When clicking ‘Test workflow’** `manualTrigger` — configured for its default action.
3. **Sticky Note1** `stickyNote` — width: "394", height: "264", content: "## How it works
- check list of timezones
- check if any timezone switches from/to Daylight Saving Time
- notify on Slack

## Remember to set up
- Add timezones to "Timezones List"…[truncated]"
4. **Schedule Trigger** `scheduleTrigger` — rule: "[object Object]"
5. **Timezones List** `code` — jsCode: "return [
	{
      timezone : "America/New_York"
	},
	{
      timezone : "Europe/Warsaw"
	},
];"
6. **Calculate Zone Date and Time** `set` — options: "[object Object]", assignments: "[object Object]", includeOtherFields: "true"
7. **Calculate Tomorrow's Date** `dateTime` — operation: **addToDate**
8. **Check If Daylight Saving Time** `set` — options: "[object Object]", assignments: "[object Object]", includeOtherFields: "true"
9. **Check If Change Tomorrow** `if` — options: "[object Object]", conditions: "[object Object]", looseTypeValidation: "true"
10. **Send Notification On Upcoming Change** `slack` — text: "=Tomorrow is Daylight Saving Time change in zone {{ $json.timezone }} - remember to adjust meeting times!", select: "channel", channelId: "[object Object]"
11. **Send Email On Upcoming Change** `emailSend` — text: "=Tomorrow is Daylight Saving Time change in zone {{ $json.timezone }} - remember to adjust meeting times!", options: "[object Object]", subject: "DST change tomorrow in {{ $json.timezone }}"
  
  ## 💡 AI-Powered Ideas for Improvement
  Certainly! Here's a structured breakdown of the n8n workflow using the EDIP method:

**Explain**  
This workflow checks a list of specified timezones to see if any will switch to or from Daylight Saving Time the next day. If a change is detected, it sends notifications via Slack and email to remind users to adjust meeting times accordingly.

**Demonstrate**  
A global company uses this workflow to ensure their teams in different locations are aware of timezone changes due to Daylight Saving Time, preventing scheduling conflicts and missed meetings.

**Imitate**  
1. Import the workflow into n8n.
2. Connect your Slack and email accounts for notifications.
3. Add your desired timezones to the "Timezones List" node.
4. Set the schedule to check daily.
5. Test the workflow to ensure it sends notifications correctly.

**Practice**  
Create a test Slack channel and email account. Add various timezones to the list and simulate a Daylight Saving Time change to observe how notifications are sent. Adjust timezones and test again.

**WIIFM (What's In It For Me)**  
Mastering this workflow helps you offer timezone-related automation services to multinational clients, enhancing their scheduling efficiency. This can expand your service offerings and increase your value in the automation business, leading to more opportunities and income.
  
  ## 🔧 Setup Instructions
  1. **Connect Credentials:** slackOAuth2Api, smtp.
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
  