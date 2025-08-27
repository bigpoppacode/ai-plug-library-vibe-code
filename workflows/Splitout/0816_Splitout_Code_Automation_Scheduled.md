# Splitout Code Automation Scheduled
## 🚀 What It Does
Monitors events, processes them, and **notifies** people/apps (Slack/Email) with structured updates.

## 💼 Business Use Case
Great for **content, summarization, triage, or decisioning** where AI adds speed and consistency.

## ⚙️ How It Works
1. **Trigger:** This workflow starts with **When Executed by Another Workflow**.
2. **Model** `lmChatOpenAi` — model: `[object Object]`
3. **Sticky Note** `stickyNote` — color: "7", width: "620", height: "520"
4. **Sticky Note1** `stickyNote` — color: "7", width: "640", height: "520"
5. **Sticky Note2** `stickyNote` — color: "7", width: "960", height: "620"
6. **Sticky Note3** `stickyNote` — color: "7", width: "740", height: "620"
7. **Sticky Note4** `stickyNote` — color: "7", width: "660", height: "680"
8. **Sticky Note5** `stickyNote` — color: "7", width: "660", height: "620"
9. **When Executed by Another Workflow** `executeWorkflowTrigger` — inputSource: "passthrough"
10. **Sticky Note6** `stickyNote` — width: "380", height: "940", content: "## Try it out
### This n8n template demonstrates how you can automate community moderation using human-in-the-loop functionality for Discord.

The use-case is for detecting and dea…[truncated]"
11. **Schedule Trigger** `scheduleTrigger` — rule: "[object Object]"
12. **Notify Moderators with Send & Wait** `discord` — resource: **message**, operation: **sendAndWait**
13. **Get Recent Messages** `discord` — resource: **message**, operation: **getAll**
14. **Receive Instructions** `switch` — rules: "[object Object]", options: "[object Object]"
15. **Only Once** `removeDuplicates` — operation: **removeItemsSeenInPreviousExecutions**
16. **Get Message IDs** `code` — jsCode: "return $('When Executed by Another Workflow').all().map(item => ({ json: {
  id: item.json.id,
  channel_id: item.json.channel_id
}}))"
17. **Warn User Only** `discord` — resource: **message**
18. **No Action Taken** `noOp` — configured for its default action.
19. **Group By User** `code` — jsCode: "const groupByUser = {};

for (const item of $input.all()) {
  if (!groupByUser[item.json.author.id]) {
    groupByUser[item.json.author.id] = [];
  }
  groupByUser[item.json.author…[truncated]"
20. **Delete Messages** `discord` — resource: **message**, operation: **deleteMessage**
21. **Split Out** `splitOut` — options: "[object Object]", fieldToSplitOut: "groupByUser"
22. **Warn User** `discord` — resource: **message**

## 💡 AI-Powered Ideas for Improvement
### Explain
This n8n workflow automates community moderation on Discord. It retrieves recent messages, uses AI to detect spam, and notifies moderators for action. Moderators can choose to delete messages, warn users, or take no action, ensuring effective community management.

### Demonstrate
A Discord server owner could use this workflow to manage spam in their community, maintaining a clean and engaging environment for members, which enhances user experience and community growth.

### Imitate
1. Import the workflow into n8n.
2. Connect your Discord and OpenAI accounts.
3. Set the schedule for the workflow to check messages.
4. Customize spam detection criteria and moderation actions.
5. Test the workflow to ensure it correctly identifies and handles spam.

### Practice
Create a test Discord server, send various messages (including spam), and run the workflow. Observe how the workflow identifies spam and sends notifications. Adjust the AI model and moderation actions to improve accuracy.

### WIIFM
Mastering this workflow helps you offer moderation services to communities, ensuring a safe environment and boosting engagement. It positions you as a valuable resource for Discord server management, potentially increasing your client base and revenue.

## 🔧 Setup Instructions
1. **Connect Credentials:** discordBotApi, openAiApi.
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
