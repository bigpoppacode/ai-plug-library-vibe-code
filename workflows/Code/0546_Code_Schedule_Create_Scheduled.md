# Code Schedule Create Scheduled
  ## 🚀 What It Does
  Monitors events, processes them, and **notifies** people/apps (Slack/Email) with structured updates.
  
  ## 💼 Business Use Case
  Use as a **glue/API broker**: receive data, enrich/validate via APIs, and pass to downstream systems.
  
  ## ⚙️ How It Works
  1. **Trigger:** Runs on a **schedule** (e.g., `[object Object]`).
  2. **Daily Trigger** `scheduleTrigger` — rule: "[object Object]"
3. **Sticky Note** `stickyNote` — width: "269", height: "278", content: "### Setup repos here to check releases for.

Add a new json object to the array setting the org and repo, these will be used by the following nodes"
4. **Sticky Note1** `stickyNote` — height: "254", content: "### Setup Slack notification

Update this node to customise your Slack notification"
5. **RepoConfig** `code` — jsCode: "return [
  {
    "github-org": "n8n-io",
    "github-repo": "n8n"
  },
  {
    "github-org": "home-assistant",
    "github-repo": "core"
  }
];"
6. **Fetch Github Repo Releases** `httpRequest` — url: `=https://api.github.com/repos/{{ $json["github-org"] }}/{{ $json["github-repo"] }}/releases/latest`
7. **Wether Release is new** `if` — options: "[object Object]", conditions: "[object Object]"
8. **Send Message** `slack` — text: "=:tada: New release for *{{ $('RepoConfig').item.json["github-repo"] }}* - {{ $('Fetch Github Repo Releases').item.json["name"] }}

{{ $json.body.slice(0, 500) }}

{{ $('Fetch Gith…[truncated]", select: "channel", channelId: "[object Object]"
  
  ## 💡 AI-Powered Ideas for Improvement
  ### Explain
This n8n workflow automatically checks for new releases in specified GitHub repositories and sends a notification to a Slack channel if a new release is found. It runs daily, retrieving the latest release information from GitHub, checking if the release is new, and then sending a formatted message to Slack with the release details.

### Demonstrate
A software development team could use this workflow to stay updated on new releases of libraries or tools they rely on, ensuring they are always informed about updates without manually checking GitHub.

### Imitate
1. Import the workflow into n8n.
2. Add your GitHub repositories in the `RepoConfig` node.
3. Connect your Slack account to the `Send Message` node.
4. Set the schedule in the `Daily Trigger` node.
5. Test the workflow to ensure the Slack notifications are sent correctly.

### Practice
Create a test repository on GitHub and make a release. Run the workflow to see if it detects the new release and sends a notification to your Slack channel. Modify the repositories in the `RepoConfig` to experiment with different setups.

### WIIFM
By mastering this workflow, you can offer continuous integration and deployment services, keeping teams updated with the latest software changes. This skill can attract clients looking for efficient communication and update systems, potentially increasing your revenue through automation services.
  
  ## 🔧 Setup Instructions
  1. **Cron/Schedule:** Confirm timezone and cadence; start with a test window (e.g., every 5 minutes) then scale.
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
  