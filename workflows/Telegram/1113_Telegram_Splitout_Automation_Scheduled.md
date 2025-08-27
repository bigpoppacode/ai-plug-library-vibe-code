# Telegram Splitout Automation Scheduled
## 🚀 What It Does
Monitors events, processes them, and **notifies** people/apps (Slack/Email) with structured updates.

## 💼 Business Use Case
Use as a **glue/API broker**: receive data, enrich/validate via APIs, and pass to downstream systems.

## ⚙️ How It Works
1. **Trigger:** This workflow starts with **When Executed by Another Workflow**.
2. **gpt-4o-mini** `lmChatOpenAi` — model: `[object Object]`
3. **When Executed by Another Workflow** `executeWorkflowTrigger` — inputSource: "jsonExample", jsonExample: "{
  "query": 
    {
      "username": 
      "joe"
    }
}"
4. **Workflow Tool** `toolWorkflow` — name: "n8n_creator_stats", workflowId: "={{ $workflow.id }}", description: "Call this tool to get n8n Creator Stats."
5. **Sticky Note** `stickyNote` — color: "5", width: "780", height: "740"
6. **Sticky Note1** `stickyNote` — width: "280", height: "300", content: "## Tool Call for n8n Creators Stats
https://docs.n8n.io/integrations/builtin/cluster-nodes/sub-nodes/n8n-nodes-langchain.toolworkflow/"
7. **Sticky Note2** `stickyNote` — color: "7", width: "300", height: "300"
8. **Sticky Note3** `stickyNote` — width: "540", height: "320", content: "## Save n8n Creators & Workflows Report Locally
(optional for local install)"
9. **Sticky Note5** `stickyNote` — width: "300", height: "320", content: "## Global Workflow Variables

"
10. **Sticky Note6** `stickyNote` — color: "3", width: "780", height: "640"
11. **Sticky Note7** `stickyNote` — color: "6", width: "1120", height: "300"
12. **Sticky Note8** `stickyNote` — color: "4", width: "1120", height: "300"
13. **Sticky Note10** `stickyNote` — color: "7", width: "2510", height: "1000"
14. **Sticky Note11** `stickyNote` — color: "7", width: "280", height: "560"
15. **Schedule Trigger** `scheduleTrigger` — rule: "[object Object]"
16. **Sticky Note4** `stickyNote` — width: "220", height: "720", content: "## Settings
Change these settings to suit your needs"
17. **Sticky Note9** `stickyNote` — color: "6", width: "540", height: "340"
18. **Sticky Note12** `stickyNote` — color: "4", width: "540", height: "300"
19. **Sticky Note13** `stickyNote` — width: "320", height: "340", content: "## Telegram 
(Optional)
https://docs.n8n.io/integrations/builtin/app-nodes/n8n-nodes-base.telegram/"
20. **Google Gemini Chat Model** `lmChatGoogleGemini` — options: "[object Object]", modelName: "models/gemini-2.0-flash-exp"
21. **Sticky Note14** `stickyNote` — color: "5", width: "540", height: "700"
22. **Sticky Note15** `stickyNote` — color: "7", width: "300", height: "280"
23. **Sticky Note16** `stickyNote` — color: "4", width: "520", height: "300"
24. **Sticky Note17** `stickyNote` — width: "540", height: "900", content: "# n8n Top Creators Leaderboard Reporting Workflow

## Why This Workflow is Important
This workflow is a powerful tool for reporting on the n8n community's creators and workflows. I…[truncated]"
25. **Global Variables** `set` — options: "[object Object]", assignments: "[object Object]"
26. **n8n Creators Stats Agent** `agent` — text: "=Prepare a report about the n8n creators", options: "[object Object]", promptType: "define"
27. **stats_aggregate_creators** `httpRequest` — url: `={{ $json.path }}{{ $json['creators-filename'] }}.json`
28. **stats_aggregate_workflows** `httpRequest` — url: `={{ $json.path }}{{ $json['workflows-filename'] }}.json`
29. **creator-summary** `convertToFile` — operation: **toText**
30. **Google Drive** `googleDrive` — operation: **createFromText**
31. **Convert Markdown to HTML** `markdown` — mode: "markdownToHtml", options: "[object Object]", markdown: "={{ $json.output }}"
32. **Create Top 10 Workflows List** `chainLlm` — text: "=Create a list with hyperlinks of the top 10 workflows by weekly instertions from this report: {{ $json.output }}

Do not include any preamble or further explanation.  ", promptType: "define"
33. **Parse Creators Data** `set` — options: "[object Object]", assignments: "[object Object]"
34. **Parse Workflow Data** `set` — options: "[object Object]", assignments: "[object Object]"
35. **Save creator-summary.md** `readWriteFile` — operation: **write**
36. **Gmail Creators & Workflows Report** `gmail` — sendTo: "joe@example.com", message: "={{ $json.data }}", options: "[object Object]"
37. **Convert Top 10 Markdown to HTML** `markdown` — mode: "markdownToHtml", options: "[object Object]", markdown: "={{ $json.text }}"
38. **Telegram Top 10  Workflows List** `telegram` — text: "=n8n Creators Report - Top 10 Workflows
{{ $now }}
----------------------------------------------------
{{ $json.text }}", chatId: "={{ $env.TELEGRAM_CHAT_ID }}", additionalFields: "[object Object]"
39. **Split Out Creators** `splitOut` — options: "[object Object]", fieldToSplitOut: "data"
40. **Split Out Workflows** `splitOut` — options: "[object Object]", fieldToSplitOut: "data"
41. **Gmail Top 10 Workflows List** `gmail` — sendTo: "joe@example.com", message: "={{ $json.data }}", options: "[object Object]"
42. **Sort By Top Weekly Creator Inserts** `sort` — options: "[object Object]", sortFieldsUi: "[object Object]"
43. **Sort By Top Weekly Workflow Inserts** `sort` — options: "[object Object]", sortFieldsUi: "[object Object]"
44. **Take Top 10 Creators** `limit` — maxItems: "10"
45. **Take Top 50 Workflows** `limit` — maxItems: "50"
46. **Creators Data** `set` — options: "[object Object]", assignments: "[object Object]"
47. **Workflows Data** `set` — options: "[object Object]", assignments: "[object Object]"
48. **Merge Creators & Workflows** `merge` — mode: "combine", options: "[object Object]", joinMode: "enrichInput1"
49. **Aggregate** `aggregate` — options: "[object Object]", aggregate: "aggregateAllItemData"
50. **Workflow Response** `set` — options: "[object Object]", assignments: "[object Object]"

## 💡 AI-Powered Ideas for Improvement
### Explain
This n8n workflow is designed to generate a report on the top creators and workflows in the n8n community. It collects data from GitHub, processes it to identify top contributors and workflows based on unique weekly and monthly insertions, and then compiles this information into reports. These reports can be saved locally, sent via email, or shared on platforms like Google Drive and Telegram.

### Demonstrate
A digital marketing consultant could use this workflow to identify top-performing workflows and creators in the n8n community. By analyzing these insights, they can improve their own automation strategies or offer targeted consulting services to clients, leveraging popular workflows.

### Imitate
1. Import the workflow to your n8n instance.
2. Connect your GitHub, Gmail, Google Drive, and Telegram accounts.
3. Configure the workflow triggers and credentials.
4. Run the workflow to generate and distribute reports.
5. Customize the report format and distribution channels as needed.

### Practice
Create a test environment with sample data to simulate the workflow execution. Adjust the workflow settings to send reports to your email and Google Drive. Verify the accuracy of the reports and experiment with different data aggregation methods.

### WIIFM
Mastering this workflow enables you to offer valuable insights into workflow performance and creator impact within the n8n community. This expertise can attract clients seeking to optimize their automation processes, thus enhancing your service offerings and generating additional income in the AI automation business.

## 🔧 Setup Instructions
1. **Connect Credentials:** openAiApi, googleDriveOAuth2Api, googlePalmApi, gmailOAuth2, telegramApi.
2. **Notification Targets:** Confirm channel/email IDs and that the bot/app is authorized to post.
3. **API Contracts:** Validate required headers and 2xx/4xx handling; add retries for 429/5xx.

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
