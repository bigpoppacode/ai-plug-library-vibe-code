# Schedule Removeduplicates Create Scheduled
## 🚀 What It Does
Monitors events, processes them, and **notifies** people/apps (Slack/Email) with structured updates.

## 💼 Business Use Case
Great for **content, summarization, triage, or decisioning** where AI adds speed and consistency.

## ⚙️ How It Works
1. **Trigger:** Runs on a **schedule** (e.g., `[object Object]`).
2. **Schedule Trigger** `scheduleTrigger` — rule: "[object Object]"
3. **OpenAI Chat Model** `lmChatOpenAi` — model: `[object Object]`
4. **Structured Output Parser** `outputParserStructured` — schemaType: "manual", inputSchema: "{
  "type": "object",
  "properties": {
    "labels": {
      "type": "array",
      "items": { "type": "string" }
    },
    "priority": { "type": "number" },
    "summary": { "ty…[truncated]"
5. **Sticky Note1** `stickyNote` — color: "7", width: "700", height: "540"
6. **Sticky Note** `stickyNote` — color: "7", width: "720", height: "540"
7. **Sticky Note2** `stickyNote` — color: "7", width: "460", height: "440"
8. **Sticky Note3** `stickyNote` — width: "380", height: "940", content: "## Try It Out!
### This n8n template watches a Gmail inbox for support messages and creates an equivalent issue item in Linear.

### How it works
* A scheduled trigger fetches rece…[truncated]"
9. **Sticky Note4** `stickyNote` — color: "5", height: "120", content: "### Gmail Filters
Here we're using the filter `to:support@example.com` to capture support requests."
10. **Get Recent Messages** `gmail` — operation: **getAll**
11. **Mark as Seen** `removeDuplicates` — operation: **removeItemsSeenInPreviousExecutions**
12. **Markdown** `markdown` — html: "={{ $json.html }}", options: "[object Object]"
13. **Generate Issue From Support Request** `chainLlm` — text: "=Reported by {{ $json.from.value[0].name }} <{{ $json.from.value[0].address }}>
Reported at: {{ $now.toISO() }}
Summary: {{ $json.subject }}
Description:
{{ $json.data.replaceAll('…[truncated]", messages: "[object Object]", promptType: "define"
14. **Create Issue in Linear.App** `linear` — title: "={{ $json.output.summary }}", teamId: "1c721608-321d-4132-ac32-6e92d04bb487", additionalFields: "[object Object]"

## 💡 AI-Powered Ideas for Improvement
### Explain
This n8n workflow automates the process of managing support requests. It starts with a scheduled trigger to fetch new emails from a Gmail inbox. These emails are then filtered to ensure they're processed only once. The email content is converted to markdown, and an AI model analyzes and categorizes the requests, assigning labels, priorities, and generating summaries. Finally, this information is used to create an issue in Linear, a project management tool, ensuring support tasks are organized and actionable.

### Demonstrate
A business could use this workflow to streamline customer support. By automatically converting support emails into actionable tasks in Linear, the workflow ensures timely and organized handling of customer issues, enhancing customer satisfaction and team efficiency.

### Imitate
1. Import the workflow into n8n.
2. Connect your Gmail and Linear accounts.
3. Set up a schedule for the trigger.
4. Customize email filters and Linear project settings.
5. Test the workflow to ensure issues are correctly created in Linear.

### Practice
Create a test Gmail account and send a few support emails. Run the workflow and verify that each email is processed only once and results in a properly organized issue in Linear. Adjust the AI's categorization criteria to better fit your business needs.

### WIIFM
Mastering this workflow lets you offer automated support ticket management services, increasing efficiency and reducing response times for your clients. This can help you attract more clients, improve service offerings, and generate additional income as an automation consultant.

## 🔧 Setup Instructions
1. **Connect Credentials:** openAiApi, gmailOAuth2, linearApi.
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
