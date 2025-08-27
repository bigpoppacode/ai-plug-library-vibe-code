# Splitout Schedule Update Scheduled
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
      updatedA…[truncated]", endpoint: "https://api.linear.app/graphql", variables: "={{
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
          "text": ":rotating_light: The following Issues transitioned to Negative Sen…[truncated]"
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
This workflow continuously monitors issues in Linear for sentiment changes. It uses a schedule to fetch recent issues, analyzes comments' sentiment using AI, and logs results in Airtable. If any issue's sentiment changes to negative, it alerts a Slack channel, ensuring prompt attention to potential problems.

**Demonstrate:**  
A tech support team could use this workflow to monitor customer feedback. By quickly identifying negative sentiment shifts, they can address issues proactively, improving customer satisfaction and retention.

**Imitate:**  
1. Import the workflow into n8n.
2. Connect Linear, Airtable, and Slack accounts.
3. Customize the GraphQL query and Slack channel settings.
4. Schedule the workflow to run every 30 minutes.
5. Test with sample issues and comments to ensure correct sentiment analysis and alerting.

**Practice:**  
Create a sample Linear project and generate issues with varying sentiments. Run the workflow to see how it identifies and alerts on negative sentiment transitions. Adjust the workflow to refine its accuracy and alerting mechanisms.

**WIIFM:**  
Mastering this workflow enhances your ability to offer sentiment monitoring services, a valuable tool for businesses to maintain customer satisfaction. It can increase your service portfolio, attract new clients, and boost revenue in your AI automation business.

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
