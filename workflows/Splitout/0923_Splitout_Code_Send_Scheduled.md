# Splitout Code Send Scheduled
## 🚀 What It Does
Monitors events, processes them, and **notifies** people/apps (Slack/Email) with structured updates.

## 💼 Business Use Case
Great for **content, summarization, triage, or decisioning** where AI adds speed and consistency.

## ⚙️ How It Works
1. **Trigger:** Runs on a **schedule** (e.g., `[object Object]`).
2. **Schedule Trigger** `scheduleTrigger` — rule: "[object Object]"
3. **OpenAI Chat Model** `lmChatOpenAi` — model: `[object Object]`
4. **OpenAI Chat Model1** `lmChatOpenAi` — model: `[object Object]`
5. **Sticky Note** `stickyNote` — color: "7", width: "700", height: "540"
6. **Sticky Note1** `stickyNote` — color: "7", width: "860", height: "540"
7. **Sticky Note3** `stickyNote` — color: "7", width: "680", height: "540"
8. **Sticky Note4** `stickyNote` — color: "7", width: "680", height: "540"
9. **Sticky Note6** `stickyNote` — width: "420", height: "1400", content: "## Try It Out!
### This n8n template lets you summarize individual team member activity on MS Teams for the past week and generates a report.

For remote teams, chat is a crucial c…[truncated]"
10. **Fetch Latest Channel Messages** `microsoftTeams` — resource: **channelMessage**, operation: **getAll**
11. **Group Messages By UserId** `code` — jsCode: "const messages = $input.all().map(item => item.json);

const groupByUserId = messages.reduce((acc,msg) => {
  return {
    ...acc,
    [msg.from.user.id]: acc[msg.from.user.id]
   …[truncated]"
12. **Groups to Items** `splitOut` — options: "[object Object]", fieldToSplitOut: "output"
13. **Team Member Weekly Report Agent** `chainLlm` — text: "=## User
DisplayName: {{ $json.user.displayName }}

## Messages
{{
Array.from($json.messages)
.map(msg => {
  return [
    `Type: Message`,
    `Posted: ${msg.createdDateTime}`,
  …[truncated]", messages: "[object Object]", promptType: "define"
14. **Merge Report With User Data** `set` — mode: "raw", options: "[object Object]", jsonOutput: "={{
{
  ...$('Groups to Items').item.json,
  report: $json.text
}
}}"
15. **Reports to Single List** `aggregate` — options: "[object Object]", aggregate: "aggregateAllItemData"
16. **Team Weekly Report Agent** `chainLlm` — text: "={{
$input.first().json.data
  .map(item =>
`user: ${item.user.displayName} <${item.user.id}>
message count: ${item.messages.length}
report: ${item.report.replaceAll('\n', ' ')}`
 …[truncated]", messages: "[object Object]", promptType: "define"
17. **Markdown to HTML** `markdown` — mode: "markdownToHtml", options: "[object Object]", markdown: "={{ $json.text }}"
18. **Send Report to Channel** `microsoftTeams` — resource: **channelMessage**

## 💡 AI-Powered Ideas for Improvement
**Explain**  
This n8n workflow automates the weekly summarization of team member activities on Microsoft Teams. Every Monday, it retrieves messages from the past week, groups them by user, and uses OpenAI to generate individual and team-wide reports. These reports highlight key activities, wins, and challenges, and are posted back to the team channel in a summarized format.

**Demonstrate**  
A remote team manager might use this workflow to keep track of team communications and activities without manually combing through messages, ensuring everyone stays informed and aligned with team goals.

**Imitate**  
1. Import the workflow into n8n.  
2. Connect Microsoft Teams and OpenAI accounts.  
3. Set the schedule to run every Monday.  
4. Map your team’s channel and user IDs.  
5. Customize the report prompts to match desired insights and tone.

**Practice**  
Create a test channel on Microsoft Teams and simulate team communications. Run the workflow to see how it summarizes and generates reports. Adjust the parameters and prompts to refine the output.

**WIIFM**  
Mastering this workflow enhances your ability to offer efficient, AI-powered reporting solutions to businesses, increasing productivity and communication transparency. This skill can be leveraged to attract clients seeking automation in team management and reporting, potentially increasing your income in the automation business.

## 🔧 Setup Instructions
1. **Connect Credentials:** microsoftTeamsOAuth2Api, openAiApi.
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
