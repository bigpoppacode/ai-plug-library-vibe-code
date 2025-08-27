# Filter Slack Update Webhook
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
  Could not generate AI recommendations at this time.
  
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
  