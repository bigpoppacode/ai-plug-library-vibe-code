# Splitout Schedule Monitor Scheduled
## 🚀 What It Does
Monitors events, processes them, and **notifies** people/apps (Slack/Email) with structured updates.

## 💼 Business Use Case
Ideal for **lead intake**, **enrichment**, and **CRM updates** with alerts to the right channel.

## ⚙️ How It Works
1. **Trigger:** This workflow starts with **Airtable Trigger**.
2. **OpenAI Chat Model** `lmChatOpenAi` — options: "[object Object]"
3. **Airtable Trigger** `airtableTrigger` — table: `[object Object]`
4. **Schedule Trigger** `scheduleTrigger` — rule: "[object Object]"
5. **Sticky Note** `stickyNote` — color: "7", width: "660", height: "440"
6. **Sticky Note1** `stickyNote` — color: "7", width: "640", height: "560"
7. **Sticky Note2** `stickyNote` — color: "7", width: "840", height: "560"
8. **Sticky Note3** `stickyNote` — color: "7", width: "920", height: "560"
9. **Sticky Note4** `stickyNote` — width: "480", height: "840", content: "## Try It Out!
### This n8n template performs continous monitoring on Linear Issue conversations performing sentiment analysis and alerting when the sentiment becomes negative.
Thi…[truncated]"
10. **Sentiment Transition** `switch` — rules: "[object Object]", options: "[object Object]"
11. **Fetch Active Linear Issues** `graphql` — query: "=query (
 $filter: IssueFilter
) {
 issues(
 filter: $filter
 ) {
 nodes {
 id
 identifier
 title
 description
 url
 createdAt
 updatedAt
 assignee {
 name
 }
 comments {
 nodes {
…[truncated]", endpoint: "https://api.linear.app/graphql", variables: "={{
{
 "filter": {
 updatedAt: { gte: $now.minus(30, 'minutes').toISO() }
 }
}
}}"
12. **Deduplicate Notifications** `removeDuplicates` — operation: **removeItemsSeenInPreviousExecutions**
13. **Issues to List** `splitOut` — options: "[object Object]", fieldToSplitOut: "data.issues.nodes"
14. **Report Issue Negative Transition** `slack` — text: "={{ $('Deduplicate Notifications').all().length }} Issues have transitions to Negative Sentiment", select: "channel", blocksUi: "={{
{
 "blocks": [
 {
 "type": "section",
 "text": {
 "type": "mrkdwn",
 "text": ":rotating_light: The following Issues transitioned to Negative Sentiment"
 }
 },
 {
 "type": "divi…[truncated]"
15. **Sentiment over Issue Comments** `informationExtractor` — text: "={{
$json.comments.nodes.map(node => [
 `${node.user.displayName} commented on ${node.createdAt}:`,
 node.body
].join('\n')).join('---\n')
}}", options: "[object Object]", attributes: "[object Object]"
16. **Combine Sentiment Analysis** `set` — mode: "raw", options: "[object Object]", jsonOutput: "={{
{
 ...$('Issues to List').item.json,
 ...$json.output
}
}}"

## 💡 AI-Powered Ideas for Improvement
**Explain:**  
This n8n workflow continuously monitors conversations in Linear for any changes. It uses a schedule trigger to fetch active issues from Linear every 30 minutes. The workflow performs sentiment analysis on issue comments using OpenAI and updates an Airtable database with the current sentiment. If an issue’s sentiment transitions from non-negative to negative, a Slack notification is sent to alert the team, enabling them to prioritize and address potentially problematic issues quickly.

**Demonstrate:**  
A business owner could use this workflow to monitor customer support tickets. By identifying issues with negative sentiment early, they can intervene promptly, improving customer satisfaction and preventing escalation.

**Imitate:**  
1. Import the workflow into n8n.
2. Connect your Linear, Airtable, OpenAI, and Slack accounts.
3. Adjust the GraphQL query to suit your issue filters.
4. Set up a Slack channel for notifications.
5. Test the workflow with sample data to ensure it triggers alerts correctly.

**Practice:**  
Create a test Linear issue and simulate conversation updates. Run the workflow to see how it processes the sentiment and updates Airtable. Modify a comment to trigger a negative sentiment and observe the Slack alert.

**WIIFM:**  
Understanding this workflow enhances your ability to automate customer support monitoring, a valuable service for businesses. Offering such solutions can increase your service portfolio, attract more clients, and boost income by providing timely insights and improving response times.

## 🔧 Setup Instructions
1. **Connect Credentials:** openAiApi, airtableTokenApi, httpHeaderAuth, slackApi.
2. **Data Mapping:** Verify base/sheet IDs and column names match exactly to prevent silent failures.
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
