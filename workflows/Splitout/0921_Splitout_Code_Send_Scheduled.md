# Splitout Code Send Scheduled
## 🚀 What It Does
Monitors events, processes them, and **notifies** people/apps (Slack/Email) with structured updates.

## 💼 Business Use Case
Great for **content, summarization, triage, or decisioning** where AI adds speed and consistency.

## ⚙️ How It Works
1. **Trigger:** This workflow starts with **When Executed by Another Workflow**.
2. **Google Gemini Chat Model** `lmChatGoogleGemini` — options: "[object Object]", modelName: "models/gemini-2.0-flash"
3. **Google Gemini Chat Model1** `lmChatGoogleGemini` — options: "[object Object]", modelName: "models/gemini-2.0-flash"
4. **When Executed by Another Workflow** `executeWorkflowTrigger` — workflowInputs: "[object Object]"
5. **Google Gemini Chat Model2** `lmChatGoogleGemini` — options: "[object Object]", modelName: "models/gemini-2.0-flash"
6. **Sticky Note** `stickyNote` — color: "7", width: "820", height: "520"
7. **Sticky Note1** `stickyNote` — color: "7", width: "760", height: "520"
8. **Sticky Note2** `stickyNote` — color: "7", width: "660", height: "620"
9. **Sticky Note3** `stickyNote` — color: "7", width: "680", height: "620"
10. **Sticky Note4** `stickyNote` — color: "7", width: "680", height: "620"
11. **Sticky Note5** `stickyNote` — color: "7", width: "560", height: "340"
12. **Monday @ 6am** `scheduleTrigger` — rule: "[object Object]"
13. **Sticky Note6** `stickyNote` — width: "420", height: "1460", content: "## Try It Out!
### This n8n template lets you summarize individual team member activity on slack for the past week and generates a report.

For remote teams, chat is a crucial comm…[truncated]"
14. **Switch** `switch` — rules: "[object Object]", options: "[object Object]"
15. **Get Last Week's Messages** `slack` — resource: **channel**, operation: **history**
16. **Get User** `slack` — resource: **user**
17. **Split Out1** `splitOut` — options: "[object Object]", fieldToSplitOut: "data.messages"
18. **Map Reply UserIds** `set` — options: "[object Object]", assignments: "[object Object]"
19. **Group By User** `code` — jsCode: "const keyByUser = $input.all()
  .map(item => item.json)
  .reduce((acc, message) => {
    return {
      ...acc,
      [message.user]: Array.isArray(acc[message.user])
        ?  …[truncated]"
20. **Messages to Items** `code` — jsCode: "return Object.values($('Switch').first().json.data)"
21. **Has ReplyUsers?** `if` — options: "[object Object]", conditions: "[object Object]"
22. **Split Out** `splitOut` — options: "[object Object]", fieldToSplitOut: "data"
23. **Simplify Message** `set` — options: "[object Object]", assignments: "[object Object]"
24. **Split Out2** `splitOut` — options: "[object Object]", fieldToSplitOut: "replyUsers"
25. **Map Users to Messages** `executeWorkflow` — mode: "each", options: "[object Object]", workflowId: "[object Object]"
26. **Aggregate** `aggregate` — options: "[object Object]", aggregate: "aggregateAllItemData", destinationFieldName: "messages"
27. **Get Reply Users** `slack` — resource: **user**
28. **Fetch Message Replies** `executeWorkflow` — mode: "each", options: "[object Object]", workflowId: "[object Object]"
29. **Get User Info** `set` — options: "[object Object]", assignments: "[object Object]", includeOtherFields: "true"
30. **Aggregate Reply Users** `aggregate` — options: "[object Object]", aggregate: "aggregateAllItemData"
31. **Summarize Message Threads** `executeWorkflow` — mode: "each", options: "[object Object]", workflowId: "[object Object]"
32. **Reply Users** `set` — options: "[object Object]", assignments: "[object Object]"
33. **Aggregate Results** `set` — mode: "raw", options: "[object Object]", jsonOutput: "={{
{
  ...$('Map Users to Messages').item.json,
  messages: $('Fetch Message Replies').item.json.data
  .map((message,idx) => ({
    ...message,
    summary: $json.data[idx].text,…[truncated]"
34. **Messages to Items1** `code` — jsCode: "return $('Switch').first().json.data.messages"
35. **Team Member Weekly Report Agent** `chainLlm` — text: "={{
$json.messages
  .map((message,idx) =>
    `${message.userName} (<@${message.userId}>) posted on ${new Date(parseFloat(message.ts) * 1000).format('d MMM')}:\n> \"${message.text…[truncated]", messages: "[object Object]", promptType: "define"
36. **Summarise Threads** `chainLlm` — text: "=## Message
{{ $json.userName }} (<@{{ $json.userId }}>) says at {{ new DateTime(parseFloat($json.ts)*1000).format('d MMM HH:mma') }}:
> {{ $json.text }}

## {{ ($json.replies ?? […[truncated]", messages: "[object Object]", promptType: "define"
37. **Merge with Results** `set` — mode: "raw", options: "[object Object]", jsonOutput: "={{
{
  ...$('Aggregate Results').item.json,
  report: $json.text,
}
}}"
38. **Aggregate2** `aggregate` — options: "[object Object]", aggregate: "aggregateAllItemData"
39. **Team Weekly Report Agent** `chainLlm` — text: "={{
$input.all()
  .map(item => item.json)
  .map(item =>
`user: ${item.user.name} <@${item.user.id}>
message count: ${item.messages.length}
report: ${item.report.replaceAll('\n', …[truncated]", messages: "[object Object]", promptType: "define"
40. **Post Report in Team Channel** `slack` — text: "={{ $json.text }}", select: "channel", channelId: "[object Object]"

## 💡 AI-Powered Ideas for Improvement
**Explain:**  
This workflow is designed to automate the process of summarizing Slack activity for each team member over the past week and generating a report. Every Monday at 6 am, it fetches messages from a Slack channel, groups them by user, and uses AI models to summarize the conversations. The workflow then generates individual and team-wide reports, which are posted back to the Slack channel.

**Demonstrate:**  
A business owner could use this workflow to keep track of team productivity and engagement in remote teams without manually reviewing Slack conversations, ensuring no important discussions or decisions are missed.

**Imitate:**  
1. Set up the workflow in n8n.
2. Connect your Slack and Google Gemini accounts.
3. Schedule the workflow to run every Monday at 6 am.
4. Customize the Slack channel ID and summary criteria if needed.
5. Test the workflow to ensure it generates and posts reports correctly.

**Practice:**  
Create a Slack channel with sample conversations. Run the workflow and observe how it summarizes the messages and generates reports. Adjust the AI model prompts and Slack settings to see different reporting outcomes.

**WIIFM:**  
Mastering this workflow allows you to offer automated team activity reporting as a service, enhancing team productivity insights for clients. This can increase your value proposition and open up new revenue streams in the automation business.

## 🔧 Setup Instructions
1. **Connect Credentials:** slackApi, googlePalmApi.
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
