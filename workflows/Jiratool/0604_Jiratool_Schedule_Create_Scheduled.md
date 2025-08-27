# Jiratool Schedule Create Scheduled
  ## 🚀 What It Does
  Monitors events, processes them, and **notifies** people/apps (Slack/Email) with structured updates.
  
  ## 💼 Business Use Case
  Great for **content, summarization, triage, or decisioning** where AI adds speed and consistency.
  
  ## ⚙️ How It Works
  1. **Trigger:** Runs on a **schedule** (e.g., `[object Object]`).
  2. **OpenAI Chat Model** `lmChatOpenAi` — model: `gpt-4o-mini`
3. **OpenAI Chat Model1** `lmChatOpenAi` — model: `gpt-4o-mini`
4. **OpenAI Chat Model3** `lmChatOpenAi` — model: `gpt-4o-mini`
5. **OpenAI Chat Model4** `lmChatOpenAi` — model: `gpt-4o-mini`
6. **Schedule Trigger** `scheduleTrigger` — rule: "[object Object]"
7. **Structured Output Parser** `outputParserStructured` — schemaType: "manual", inputSchema: "{
	"type": "object",
	"properties": {
		"solution_found": {
			"type": "boolean"
		},
        "short_summary_of_issue": {
          "type": "string"
        },
		"response": {
			"…[truncated]"
8. **Sticky Note1** `stickyNote` — color: "7", width: "640.6500163735489", height: "484.114789072283"
9. **Execute Workflow Trigger** `executeWorkflowTrigger` — configured for its default action.
10. **Sticky Note2** `stickyNote` — color: "7", width: "956.5422324510927", height: "411.91054640922755"
11. **Sticky Note3** `stickyNote` — color: "7", width: "653.0761795166852", height: "583.0290516595711"
12. **Sticky Note4** `stickyNote` — color: "7", width: "896.1509781357872", height: "726.4699654775604"
13. **Sticky Note5** `stickyNote` — color: "7", width: "1120.504487917144", height: "675.5857025907994"
14. **Sticky Note6** `stickyNote` — color: "7", width: "801.0347525891818", height: "507.581094640126"
15. **Sticky Note** `stickyNote` — width: "454.99286536248565", height: "619.151728428442", content: "## Try It Out!

### This n8n template is designed to assist and improve customer support team member capacity by automating the resolution of long-lived and forgotten JIRA issues.
…[truncated]"
16. **Find Simlar Issues** `jiraTool` — operation: **getAll**
17. **Query KnowledgeBase** `notionTool` — operation: **search**
18. **Get List of Unresolved Long Lived Issues** `jira` — operation: **getAll**
19. **Get Issue Metadata** `set` — options: "[object Object]", assignments: "[object Object]"
20. **Execute Workflow** `executeWorkflow` — mode: "each", options: "[object Object]", workflowId: "[object Object]"
21. **Get Issue Comments** `jira` — resource: **issueComment**, operation: **getAll**
22. **Join Comments** `aggregate` — options: "[object Object]", aggregate: "aggregateAllItemData"
23. **Simplify Thread For AI** `set` — options: "[object Object]", assignments: "[object Object]"
24. **Classify Current Issue State** `textClassifier` — options: "[object Object]", inputText: "=issue:
{{ $('Simplify Thread For AI').item.json.topic }}

comments:
{{ $('Simplify Thread For AI').item.json.thread.join('\n') || 'There are no comments' }}", categories: "[object Object]"
25. **Customer Satisfaction Agent** `sentimentAnalysis` — options: "[object Object]", inputText: "=issue:
{{ $('Simplify Thread For AI').item.json.topic }}

comments:
{{ $('Simplify Thread For AI').item.json.thread.join('\n') }}"
26. **Last Message is Not Bot** `if` — options: "[object Object]", conditions: "[object Object]"
27. **KnowledgeBase Agent** `agent` — text: "=issue:
{{ $('Simplify Thread For AI').item.json.topic }}

comments:
{{ $('Simplify Thread For AI').item.json.thread.join('\n') }}", options: "[object Object]", promptType: "define"
28. **Ask For Feedback Message** `jira` — resource: **issueComment**
29. **Add Autoclose Message** `jira` — resource: **issueComment**
30. **Report Unhappy Resolution** `slack` — text: "=", select: "channel", blocksUi: "={{
{
	"blocks": [
		{
			"type": "section",
			"text": {
				"type": "mrkdwn",
				"text": "Hey there 👋\nI found a unclosed ticket which was resolved but thread overall has a neg…[truncated]"
31. **Issue Reminder Agent** `chainLlm` — text: "=issue:
{{ $('Simplify Thread For AI').item.json.topic }}

comments:
{{ $('Simplify Thread For AI').item.json.thread }}", messages: "[object Object]", promptType: "define"
32. **Solution Found?** `if` — options: "[object Object]", conditions: "[object Object]"
33. **Close Issue** `jira` — operation: **update**
34. **Send Reminder** `jira` — resource: **issueComment**
35. **Notify Slack Channel** `slack` — select: "channel", blocksUi: "={{
{
	"blocks": [
		{
			"type": "section",
			"text": {
				"type": "mrkdwn",
				"text": "Hey there 👋\nI found a zombie ticket that no one has taken a look at yet."
			}
		},
	…[truncated]", channelId: "[object Object]"
36. **Reply to Issue** `jira` — resource: **issueComment**
37. **Close Issue2** `jira` — operation: **update**
  
  ## 💡 AI-Powered Ideas for Improvement
  **Explain**: This n8n workflow automates the management of unresolved JIRA issues by using AI to classify issues, analyze sentiment, and attempt resolution. It detects long-standing issues, collects comments, and determines their status. If resolved, it performs sentiment analysis to gauge satisfaction and act accordingly. If unresolved, it uses AI to search for solutions or sends reminders for pending actions.

**Demonstrate**: A customer support team uses this workflow to automatically resolve or escalate JIRA issues, improving efficiency and customer satisfaction by ensuring no issue goes unnoticed.

**Imitate**: Import the workflow into n8n. Connect your JIRA and OpenAI accounts. Set the schedule trigger to check for unresolved issues. Customize nodes to match your JIRA setup. Test by running the workflow with sample issues.

**Practice**: Create a test JIRA project with a few unresolved issues. Run the workflow and observe how it classifies issues and handles resolution or escalation. Adjust parameters to see different outcomes.

**WIIFM**: Mastering this workflow can enhance your automation skills, offering clients efficient issue resolution systems. This capability can lead to higher customer satisfaction, reduced support costs, and potential income from selling automation solutions.
  
  ## 🔧 Setup Instructions
  1. **Connect Credentials:** openAiApi, jiraSoftwareCloudApi, slackApi, notionApi.
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
  