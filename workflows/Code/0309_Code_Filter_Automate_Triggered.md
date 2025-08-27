# Code Filter Automate Triggered
  ## 🚀 What It Does
  Monitors events, processes them, and **notifies** people/apps (Slack/Email) with structured updates.
  
  ## 💼 Business Use Case
  Use to eliminate manual copy-paste and standardize a recurring business process.
  
  ## ⚙️ How It Works
  1. **Trigger:** This workflow starts with **Linear Trigger**.
  2. **Sticky Note** `stickyNote` — width: "377.1993316649719", height: "590.2004455566864", content: "## 👋 How to use this template
This template shows how you can take any event from any service, transform its data and send an alert to your desired app. Here's how to use it:

1. …[truncated]"
3. **Sticky Note1** `stickyNote` — width: "398.2006312053042", height: "600.6569416091058", content: "### 1. Trigger step listens for new events































We added a `Linear trigger` that starts the workflow every time we have an `Issue` event int the `Product …[truncated]"
4. **Sticky Note2** `stickyNote` — width: "317.52886836027733", height: "408.7361996915138", content: "### 3. Notify the right channel
















Last but not least we're sending a message to the `#important-bugs` channel in Slack.

**You can replace this node with any service …[truncated]"
5. **Sticky Note5** `stickyNote` — width: "462", height: "407", content: "### 2. Filter and transform your data















We only want to notify the team, if the event is fired on creating an urgent bug.

To edit the nodes, simply drag and drop inpu…[truncated]"
6. **Linear Trigger** `linearTrigger` — teamId: "583b87b7-a8f8-436b-872c-61373503d61d", resources: "issue"
7. **When clicking "Execute Workflow"** `manualTrigger` — configured for its default action.
8. **Code** `code` — jsCode: "return [
  {
    "action": "create",
    "createdAt": "2023-06-27T13:15:14.118Z",
    "data": {
      "id": "204224f8-3084-49b0-981f-3ad7f9060316",
      "createdAt": "2023-06-27T1…[truncated]"
9. **Filter** `filter` — conditions: "[object Object]"
10. **Set** `set` — values: "[object Object]", options: "[object Object]", keepOnlySet: "true"
11. **Slack** `slack` — text: "=<!channel> New urgent bug *<{{ $json.url }}|{{ $json.title }}>*", select: "channel", channelId: "[object Object]"
  
  ## 💡 AI-Powered Ideas for Improvement
  **Explain:**  
This n8n workflow monitors a project management tool (Linear) for new issues marked as urgent bugs. When such an issue is detected, it transforms the data by formatting the issue's title and URL, and then sends an alert to a specified Slack channel. This ensures that the team is immediately notified about critical issues that need attention.

**Demonstrate:**  
A software development team could use this workflow to ensure they are instantly alerted to critical bugs in their project management tool, allowing them to respond quickly and maintain product quality.

**Imitate:**  
1. Import the workflow to n8n.
2. Connect your Linear and Slack accounts.
3. Set the Linear trigger for new issues.
4. Customize the Slack node to target your desired channel.
5. Test the workflow by creating an urgent bug in Linear.

**Practice:**  
Create a test issue in Linear marked as a critical bug and execute the workflow manually. Check your Slack channel to confirm that the alert was received. Modify the issue's priority and observe how the workflow handles different priorities.

**WIIFM:**  
Mastering this workflow allows you to offer real-time alerting solutions to clients, enhancing their operational efficiency. This capability can help you attract potential clients in need of responsive bug-tracking systems and expand your automation service offerings.
  
  ## 🔧 Setup Instructions
  1. **Connect Credentials:** linearApi, slackApi.
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
  