# Schedule Removeduplicates Create Scheduled
## 🚀 What It Does
Automates a flow using stickyNote×4, scheduleTrigger, microsoftOutlook.

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
### This n8n template watches an outlook shared inbox for support messages and creates an equivalent issue item in JIRA.

### How it works
* A scheduled trigger fetc…[truncated]"
9. **Get Recent Messages** `microsoftOutlook` — operation: **getAll**
10. **Mark as Seen** `removeDuplicates` — operation: **removeItemsSeenInPreviousExecutions**
11. **Markdown** `markdown` — html: "={{ $json.body.content }}", options: "[object Object]"
12. **Generate Issue From Support Request** `chainLlm` — text: "=Reported by {{ $json.from.emailAddress.name }} <{{ $json.from.emailAddress.address }}>
Reported at: {{ $now.toISO() }}
Summary: {{ $json.subject }}
Description:
{{ $json.data.repl…[truncated]", messages: "[object Object]", promptType: "define"
13. **Create Issue** `jira` — project: "[object Object]", summary: "={{ $json.output.summary }}", issueType: "[object Object]"

## 💡 AI-Powered Ideas for Improvement
- **Explain**: This n8n workflow automates the process of managing support emails received in an Outlook shared inbox by creating corresponding issues in JIRA. It involves fetching recent emails, marking them as seen, and using AI to triage the content. The AI assesses the priority and labels, then creates a JIRA issue with the structured data.

- **Demonstrate**: A tech company can use this workflow to automatically convert support emails into JIRA issues, ensuring all customer queries are tracked and addressed promptly, improving response times and customer satisfaction.

- **Imitate**: 
  1. Import the workflow into n8n.
  2. Connect your Microsoft Outlook and JIRA accounts.
  3. Set the schedule for fetching emails.
  4. Customize the AI model settings if needed.
  5. Test the workflow with sample emails.

- **Practice**: Try setting up the workflow with your own email and JIRA accounts. Send a test email and observe how it is processed and transformed into a JIRA issue. Experiment with changing the AI's labels and priority settings.

- **WIIFM**: Mastering this workflow allows you to offer automated support ticket management services, streamlining customer service operations. This can increase efficiency for your clients, leading to higher satisfaction and retention, and open opportunities for additional automation projects.

## 🔧 Setup Instructions
1. **Connect Credentials:** microsoftOutlookOAuth2Api, openAiApi, jiraSoftwareCloudApi.
2. **Cron/Schedule:** Confirm timezone and cadence; start with a test window (e.g., every 5 minutes) then scale.

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
