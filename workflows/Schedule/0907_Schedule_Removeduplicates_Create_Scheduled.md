# Schedule Removeduplicates Create Scheduled
## 🚀 What It Does
Automates a flow using jira×5, stickyNote×5, set×4.

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
5. **OpenAI Chat Model1** `lmChatOpenAi` — model: `[object Object]`
6. **OpenAI Chat Model2** `lmChatOpenAi` — model: `[object Object]`
7. **Sticky Note** `stickyNote` — color: "7", width: "680", height: "460"
8. **Sticky Note1** `stickyNote` — color: "7", width: "860", height: "540"
9. **Sticky Note2** `stickyNote` — color: "7", width: "760", height: "600"
10. **Sticky Note3** `stickyNote` — color: "7", width: "860", height: "520"
11. **Sticky Note4** `stickyNote` — width: "440", height: "1100", content: "## Try It Out!
### This n8n template automates triaging of newly opened support tickets and issue resolution via JIRA.

If your organisation deals with a large number of support re…[truncated]"
12. **Get Open Tickets** `jira` — operation: **getAll**
13. **Mark as Seen** `removeDuplicates` — operation: **removeItemsSeenInPreviousExecutions**
14. **Simplify Ticket** `set` — options: "[object Object]", assignments: "[object Object]"
15. **Label, Prioritize & Rewrite** `chainLlm` — text: "=Reported by {{ $json.reportedBy }} <{{ $json.reportedByEmailAddress }}>
Reported at: {{ $json.createdAt }}
Issue Key: {{ $json.issueKey }}
Summary: {{ $json.summary }}
Description…[truncated]", messages: "[object Object]", promptType: "define"
16. **Update Labels, Priority and Description** `jira` — operation: **update**
17. **Get Recent Similar Issues Resolved** `jira` — operation: **getAll**

## 💡 AI-Powered Ideas for Improvement
**Explain:** This n8n workflow automates the process of triaging and resolving newly opened support tickets in JIRA. It regularly checks for new tickets, labels and prioritizes them using AI, and attempts to resolve them by referencing similar past issues. This ensures efficient ticket management and faster resolutions.

**Demonstrate:** A software company could use this workflow to manage their customer support tickets more efficiently by automating the initial triage and resolution processes, reducing the workload on their support team and improving response times.

**Imitate:** 1. Import the workflow into your n8n instance. 2. Connect your JIRA and OpenAI accounts. 3. Set up a schedule to trigger the workflow. 4. Customize the labels and priorities based on your criteria. 5. Test the workflow with sample tickets to ensure it functions as expected.

**Practice:** Create a sample JIRA project and add a few tickets. Run the workflow to see how it labels, prioritizes, and attempts to resolve the tickets. Modify some ticket details to observe how the workflow adapts its responses.

**WIIFM:** Mastering this workflow enables you to offer automated support solutions, improving efficiency and customer satisfaction. This can attract more clients and increase revenue in your AI automation business by providing value-added services.

## 🔧 Setup Instructions
1. **Connect Credentials:** jiraSoftwareCloudApi, openAiApi.
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
