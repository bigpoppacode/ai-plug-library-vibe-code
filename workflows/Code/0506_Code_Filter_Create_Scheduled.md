# Code Filter Create Scheduled
  ## 🚀 What It Does
  Monitors events, processes them, and **notifies** people/apps (Slack/Email) with structured updates.
  
  ## 💼 Business Use Case
  Use to eliminate manual copy-paste and standardize a recurring business process.
  
  ## ⚙️ How It Works
  1. **Trigger:** Runs on a **schedule** (e.g., `[object Object]`).
  2. **Sticky Note** `stickyNote` — width: "830.4857444594224", height: "495.4835100729081", content: "## Workflow installation
* Add a "slug" text property to each blog post (this parameter will be synced with Webflow and will be used to determine if a post is new or already presen…[truncated]"
3. **Sticky Note17** `stickyNote` — width: "777.880012347261", height: "287.94399632670337", content: "### ⚙️ Turn blocks into rich text
This is where the magic happens — Notion blocks are mapped and turned into their respective html version. Works with all the major rich text eleme…[truncated]"
4. **Sticky Note18** `stickyNote` — width: "218.00983675699544", height: "394.8629861599825", content: "### ✅ Create a new post or update an existing one?
This node compares (by slug) your Notion post with all your Webflow posts and chooses whether to create a new one (in "A only" br…[truncated]"
5. **Sticky Note19** `stickyNote` — width: "233.87813121439967", height: "389.3234455133497", content: "### 🎉 Success
Send a success message where you want.

You can remove this node.

Note: If you're on it, you may need to refresh the Webflow page."
6. **Sticky Note1** `stickyNote` — width: "366.7438380520149", height: "282.04364735085795", content: "### No wastes
These nodes extract the cover image url of the Notion page to make it easy for you to use it in the collection fields."
7. **Schedule Trigger** `scheduleTrigger` — rule: "[object Object]"
8. **Get all blog posts1** `notion` — resource: **databasePage**, operation: **getAll**
9. **Is sync checked?1** `filter` — options: "[object Object]", conditions: "[object Object]"
10. **Slug uniqueness checker and differentiator1** `code` — jsCode: "const data = $input.all().map(item => item.json)
const slugCount = {};

return data.map(item => {
  let slug = item.property_slug;
  
  if (slugCount[slug]) {
    slugCount[slug] +…[truncated]"
  
  ## 💡 AI-Powered Ideas for Improvement
  Could not generate AI recommendations at this time.
  
  ## 🔧 Setup Instructions
  1. **Connect Credentials:** notionApi, webflowOAuth2Api, slackOAuth2Api.
2. **Cron/Schedule:** Confirm timezone and cadence; start with a test window (e.g., every 5 minutes) then scale.
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
  