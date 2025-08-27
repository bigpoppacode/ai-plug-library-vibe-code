# Manual Stickynote Automate Triggered
  ## 🚀 What It Does
  Automates a flow using stickyNote×3, set, graphql.
  
  ## 💼 Business Use Case
  Use to eliminate manual copy-paste and standardize a recurring business process.
  
  ## ⚙️ How It Works
  1. **Trigger:** This workflow starts with **When clicking ‘Test workflow’**.
  2. **When clicking ‘Test workflow’** `manualTrigger` — configured for its default action.
3. **Sticky Note** `stickyNote` — content: "The document node serves as sample source for `twitch` username to check
"
4. **Sticky Note1** `stickyNote` — content: "the value of `client-id` parameter is a fixed known value used by twitch for anonymous call used in their website
"
5. **Sticky Note2** `stickyNote` — content: "we need only to check the value of `stream` if `null` to know if the user offline. Any value will denote the user is online"
6. **Document** `set` — options: "[object Object]", assignments: "[object Object]"
7. **Twitch GraphQL** `graphql` — query: "={
  user(login: "{{ $('Document').item.json.twitch }}") {
    stream {
      id
      viewersCount
      title
      type
      game {
        id
      }
    }
  }
}", endpoint: "https://gql.twitch.tv/gql", variables: "="
8. **Is Online** `if` — options: "[object Object]", conditions: "[object Object]"
  
  ## 💡 AI-Powered Ideas for Improvement
  ### Explain
This n8n workflow is designed to check if a Twitch user is currently streaming. It starts with a manual trigger, retrieves the Twitch username from a document node, and uses the Twitch GraphQL API to check the user's stream status. If the stream data is not null, the user is online; otherwise, they are offline.

### Demonstrate
A content creator or digital marketer could use this workflow to automate notifications when a Twitch streamer goes live, allowing them to engage with audiences in real-time or trigger marketing activities.

### Imitate
1. Import the workflow into n8n.
2. Replace `YOUR-TWITCH-USERNAME` with the actual Twitch username you want to monitor.
3. Test the workflow by clicking the manual trigger.
4. Observe the output to see if the user is online or offline.

### Practice
Create a test workflow using a different API, like YouTube, to check if a channel is live streaming. Use the same logic of retrieving data and checking a condition to determine the live status.

### WIIFM
Mastering this workflow allows you to offer real-time monitoring services for Twitch streamers. You can create automation solutions that notify users when their favorite streamers go live, enhancing engagement and potentially increasing your service offerings and income.
  
  ## 🔧 Setup Instructions
  1. **Test & Activate:** Run a manual execution with sample data, then set the workflow Active.
  
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
  