# Schedule Slack Create Scheduled
## 🚀 What It Does
Monitors events, processes them, and **notifies** people/apps (Slack/Email) with structured updates.

## 💼 Business Use Case
Great for **content, summarization, triage, or decisioning** where AI adds speed and consistency.

## ⚙️ How It Works
1. **Trigger:** Runs on a **schedule** (e.g., `[object Object]`).
2. **OpenAI Chat Model** `lmChatOpenAi` — options: "[object Object]"
3. **Structured Output Parser** `outputParserStructured` — jsonSchema: "{
  "type": "object",
  "properties": {
    "title": { "type": "string" },
    "summary": { "type": "string" },
    "ideas": {
      "type": "array",
      "items": { "type": "stri…[truncated]"
4. **Schedule Trigger** `scheduleTrigger` — rule: "[object Object]"
5. **Sticky Note** `stickyNote` — color: "7", width: "432.4578914269739", height: "427.09547550768553"
6. **Sticky Note1** `stickyNote` — color: "7", width: "711.6907825442045", height: "632.7258798316449"
7. **Sticky Note2** `stickyNote` — color: "7", width: "530.6864600881105", height: "578.3950618708791"
8. **Sticky Note6** `stickyNote` — width: "359.6648027457353", height: "400.4748439127683", content: "## Try It Out!
### This workflow does the following:
* Monitors a Slack channel for new user messages asking for assistance
* Only user messages which are tagged with the ticket(🎫…[truncated]"
9. **Sticky Note3** `stickyNote` — color: "7", width: "374.7406065828194", height: "352.3865785298774"
10. **Sticky Note4** `stickyNote` — width: "204.96868508214473", height: "296.735132421306", content: "















🚨**Required**
* Set the Slack channel to monitor here."
11. **Sticky Note5** `stickyNote` — width: "183.49787916474958", height: "296.735132421306", content: "















🚨**Required**
* Set the Linear Team Name or ID here."
12. **Slack** `slack` — operation: **search**
13. **Get Values** `set` — mode: "raw", options: "[object Object]", jsonOutput: "={
  "id": "#{{ $json.permalink.split('/').last() }}",
  "type": "{{ $json.type }}",
  "title": "__NOT_SET__",
  "channel": "{{ $json.channel.name }}",
  "user": "{{ $json.username…[truncated]"
14. **Get Existing Issues** `linear` — operation: **getAll**
15. **Collect Descriptions** `aggregate` — options: "[object Object]", fieldsToAggregate: "[object Object]"
16. **Get Hashes Only** `set` — options: "[object Object]", assignments: "[object Object]"
17. **Merge** `merge` — mode: "combine", options: "[object Object]", combinationMode: "multiplex"
18. **Create New Ticket?** `if` — options: "[object Object]", conditions: "[object Object]"
19. **Generate Ticket Using ChatGPT** `chainLlm` — text: "=The "user issue" is enclosed by 3 backticks:
```
{{ $('Get Values').item.json.message }}
```
You will complete the following 4 tasks:
1. Generate a title intended for a support ti…[truncated]", promptType: "define", hasOutputParser: "true"
20. **Create Ticket** `linear` — title: "={{ $json.output.title }}", teamId: "1c721608-321d-4132-ac32-6e92d04bb487", additionalFields: "[object Object]"

## 💡 AI-Powered Ideas for Improvement
**Explain:** This n8n workflow automates the process of monitoring a Slack channel for new user messages that require support. It uses a combination of Slack and Linear to create support tickets from messages tagged with a specific emoji. The workflow checks if a ticket already exists for a message, generates a support ticket using AI to determine the title, summary, and priority, and then creates the ticket in Linear.

**Demonstrate:** A business owner might use this workflow to streamline customer support by automatically generating tickets from Slack messages, ensuring prompt and efficient handling of customer queries.

**Imitate:** To apply this workflow:
1. Import the workflow into n8n.
2. Set up your Slack channel and Linear team details.
3. Configure the schedule trigger to run at desired intervals.
4. Test the workflow by tagging a message in Slack and observing the ticket creation in Linear.

**Practice:** Create a test Slack channel and use the workflow to tag messages with the ticket emoji. Observe how tickets are generated in Linear and adjust parameters as needed to improve accuracy and relevance.

**WIIFM:** Mastering this workflow can enhance your ability to automate customer support processes, providing faster responses and increasing customer satisfaction. This expertise can attract more clients and generate income by offering automation solutions in an AI-driven business environment.

## 🔧 Setup Instructions
1. **Connect Credentials:** slackApi, openAiApi, linearApi.
2. **Cron/Schedule:** Confirm timezone and cadence; start with a test window (e.g., every 5 minutes) then scale.
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
