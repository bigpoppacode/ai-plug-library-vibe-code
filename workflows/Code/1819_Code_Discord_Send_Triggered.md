# Code Discord Send Triggered
  ## 🚀 What It Does
  Monitors events, processes them, and **notifies** people/apps (Slack/Email) with structured updates.
  
  ## 💼 Business Use Case
  Use to eliminate manual copy-paste and standardize a recurring business process.
  
  ## ⚙️ How It Works
  1. **Trigger:** This workflow starts with **Webflow Form Submission Trigger**.
  2. **Webflow Form Submission Trigger** `webflowTrigger` — site: "60e6f0f07c46af62aa2b1c98"
3. **Sticky Note** `stickyNote` — color: "6", width: "624.279069767441", height: "535.976744186046"
4. **Sticky Note1** `stickyNote` — width: "224.58139534883728", height: "296.44286341127054", content: "### Format the message 
Discord accepts Markdown"
5. **Sticky Note2** `stickyNote` — width: "323.0232558139535", height: "304.69767441860455", content: "### False branch 
We create a new Discord channel using the form name in Webflow. Channel names must be converted to lowercase and words separated with dash.

When the new channel …[truncated]"
6. **Sticky Note3** `stickyNote` — width: "224.58139534883728", height: "393.9954240581709", content: "### Combining data to move forward 
This code will check if a channel with the form name exists in Discord. 

We also create an object to pass forward to the next node."
7. **List Discord Channels** `discord` — operation: **getAll**
8. **Filter existing Discord channel** `code` — jsCode: "
const transformedFormName = (inputString)=> {
    // Convert to lowercase
  const lowercaseString = inputString.toLowerCase();

  // Split by space
  const wordsArray = lowercaseS…[truncated]"
9. **Does the channel exist?** `if` — options: "[object Object]", conditions: "[object Object]"
10. **Create Discord channel with form name** `discord` — name: "={{ $json.formName }}", guildId: "[object Object]", options: "[object Object]"
11. **Transform data to send message** `set` — fields: "[object Object]", include: "none", options: "[object Object]"
12. **Notify #general channel of newly created channel1** `discord` — resource: **message**
13. **Compose Slack message** `code` — jsCode: "const webflowFormData = $input.all()[0].json.formData;

const objectToMarkdown = (obj) => {
  return Object.entries(obj)
    .map(([key, value]) => `**${key}**: ${value}`)
    .joi…[truncated]"
14. **Send form submission to Discord channel** `discord` — resource: **message**
  
  ## 💡 AI-Powered Ideas for Improvement
  **Explain:**  
This n8n workflow automates the process of creating a Discord channel for each Webflow form submission. It checks if a Discord channel with the form's name exists. If not, it creates a new channel using the form name, sends a message to a general channel to notify about the new channel, and posts the form submission details in the newly created channel. This ensures that all form submissions are organized and communicated efficiently within Discord.

**Demonstrate:**  
A business owner could use this workflow to automatically organize customer inquiries from their website into separate Discord channels, improving team collaboration and response times.

**Imitate:**  
1. Import the workflow into n8n.
2. Connect your Webflow and Discord accounts.
3. Set up the Webflow form and ensure it triggers the workflow.
4. Customize the Discord setup to match your server and channel needs.
5. Test the workflow by submitting a form to see it create a new channel and post a message.

**Practice:**  
Create a test Webflow form and submit an entry. Observe how the workflow creates a new Discord channel and posts the form details. Modify the form and submit again to see how changes are reflected.

**WIIFM:**  
Mastering this workflow allows you to offer automated communication solutions, enhancing team collaboration. It can help you attract clients seeking efficient ways to manage and respond to online inquiries, thereby expanding your service offerings and revenue potential.
  
  ## 🔧 Setup Instructions
  1. **Connect Credentials:** webflowApi, discordBotApi.
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
  