# Filter Slack Create Webhook
  ## 🚀 What It Does
  Monitors events, processes them, and **notifies** people/apps (Slack/Email) with structured updates.
  
  ## 💼 Business Use Case
  Use as a **glue/API broker**: receive data, enrich/validate via APIs, and pass to downstream systems.
  
  ## ⚙️ How It Works
  1. **Trigger:** This workflow starts with **Linear Trigger**.
  2. **Linear Trigger** `linearTrigger` — teamId: "7a330c36-4b39-4bf1-922e-b4ceeb91850a", resources: "issue", authentication: "oAuth2"
3. **Sticky Note** `stickyNote` — color: "7", height: "219.68489140716272", content: "### When does this fire?
In our setup we have a general team in Linear where we post new tickets to. Additionally, the bug needs to have a certain label and the description needs t…[truncated]"
4. **Sticky Note1** `stickyNote` — color: "5", width: "349.85308830334156", height: "439.62604295396085"
5. **Set me up** `set` — options: "[object Object]", assignments: "[object Object]"
6. **Only tickets that need to be classified** `filter` — options: "[object Object]", conditions: "[object Object]"
7. **OpenAI** `openAi` — modelId: "[object Object]", options: "[object Object]", messages: "[object Object]"
8. **Get all linear teams** `httpRequest` — method: **POST**, url: `https://api.linear.app/graphql`
9. **Merge data** `merge` — mode: "chooseBranch"
10. **Check if AI was able to find a team** `if` — options: "[object Object]", conditions: "[object Object]"
11. **Set team ID** `set` — options: "[object Object]", assignments: "[object Object]"
12. **Notify in Slack** `slack` — text: "The AI was not able to identify a fitting team for a bug", select: "channel", channelId: "[object Object]"
13. **Update team** `linear` — operation: **update**
  
  ## 💡 AI-Powered Ideas for Improvement
  - **Explain:** This n8n workflow automates the classification and assignment of bug tickets in Linear. It triggers when a new issue with a specific label and description is created. The workflow uses OpenAI to determine the appropriate team for the issue based on predefined responsibilities. If the AI identifies a team, it updates the issue with the team ID. If not, a Slack notification is sent to inform the team.

- **Demonstrate:** A software development company could use this workflow to streamline the bug triage process, ensuring that issues are automatically assigned to the correct team, reducing manual intervention and speeding up resolution times.

- **Imitate:** Import the workflow into n8n, connect your Linear and OpenAI accounts, and configure the Linear Trigger node with your team ID. Customize the Set me up node with your team details and Slack channel. Test the workflow with sample issues to ensure correct classification and notifications.

- **Practice:** Create a test Linear project and simulate bug ticket creation. Run the workflow to see how tickets are classified and assigned. Modify team responsibilities in the Set me up node and observe how it impacts classification.

- **WIIFM:** Mastering this workflow enables you to automate team assignments efficiently, enhancing productivity and customer satisfaction. Offering this service can attract clients needing seamless issue management, boosting your automation business revenue.
  
  ## 🔧 Setup Instructions
  1. **Connect Credentials:** linearOAuth2Api, linearApi, slackApi, openAiApi.
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
  