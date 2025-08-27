# Code Slack Send Triggered
  ## 🚀 What It Does
  Monitors events, processes them, and **notifies** people/apps (Slack/Email) with structured updates.
  
  ## 💼 Business Use Case
  Use to eliminate manual copy-paste and standardize a recurring business process.
  
  ## ⚙️ How It Works
  1. **Trigger:** This workflow starts with **Webflow Form Submission Trigger**.
  2. **Webflow Form Submission Trigger** `webflowTrigger` — site: "60e6f0f07c46af62aa2b1c98"
3. **Sticky Note** `stickyNote` — color: "6", width: "624.279069767441", height: "535.976744186046"
4. **Sticky Note1** `stickyNote` — width: "224.58139534883728", height: "379.4186046511628", content: "### Format the message 
This node uses the [Block Kit Builder](https://app.slack.com/block-kit-builder/T0227K0J1FS#%7B%22blocks%22:%5B%7B%22type%22:%22section%22,%22text%22:%7B%22t…[truncated]"
5. **Sticky Note2** `stickyNote` — width: "323.0232558139535", height: "304.69767441860455", content: "### False branch 
We create a new Slack channel using the form name in Webflow. Channel names must be converted to lowercase and words separated with dash.

When the new channel is…[truncated]"
6. **Sticky Note3** `stickyNote` — width: "498.5581395348835", height: "190.8372093023257", content: "### Logic to find matching Slack channel based on form name

Webflow form submissions will trigger for any form on your website. We can't use Slack to persist form IDs from Webflow…[truncated]"
7. **List Slack Channels** `slack` — resource: **channel**, operation: **getAll**
8. **Check if Webflow form has an existing channel** `code` — jsCode: "
const transformedFormName = (inputString)=> {
    // Convert to lowercase
  const lowercaseString = inputString.toLowerCase();

  // Split by space
  const wordsArray = lowercaseS…[truncated]"
9. **Does the channel exist?** `if` — options: "[object Object]", conditions: "[object Object]"
10. **Create Slack channel with form name** `slack` — resource: **channel**
11. **Transform data to send message** `set` — fields: "[object Object]", include: "none", options: "[object Object]"
12. **Notify #general channel of newly created channel** `slack` — text: "=A new channel was automatically created ", select: "channel", blocksUi: "={
	"blocks": [
		{
			"type": "section",
			"text": {
				"type": "mrkdwn",
				"text": "👋 a new channel was created automatically #{{ $json["name"] }}"
			}
		},
		{
			"type": …[truncated]"
13. **Compose Slack message** `code` — jsCode: "const webflowFormData = $input.all()[0].json.formData;

const objectToMarkdown = (obj) => {
  return Object.entries(obj)
    .map(([key, value]) => `*${key}*: ${value}`)
    .join(…[truncated]"
14. **Send slack message to channel** `slack` — text: "=test", select: "channel", blocksUi: "={{ JSON.stringify($json.slackMessageBlock) }}"
  
  ## 💡 AI-Powered Ideas for Improvement
  **Explain:** This n8n workflow automates the process of creating Slack channels based on Webflow form submissions. When a form is submitted, it checks if a Slack channel with the form name exists. If not, it creates one and sends a message to the #general channel in Slack, notifying about the new channel. The form submission details are then sent as a message to the newly created Slack channel.

**Demonstrate:** A business owner could use this workflow to ensure that each new project form submission on their website creates a dedicated communication channel in Slack, facilitating organized and direct communication for each project.

**Imitate:** 
1. Import the workflow into n8n.
2. Connect your Webflow and Slack accounts.
3. Ensure the Webflow form names match the desired Slack channel names.
4. Activate the workflow and test it by submitting a form on your Webflow site.

**Practice:** Set up a test Webflow form and submit it to see if a corresponding Slack channel is created. Modify the form name to test channel creation and message sending functionalities.

**WIIFM:** Mastering this workflow allows you to offer automated communication solutions to clients, enhancing their project management efficiency. This can lead to increased client satisfaction, retention, and potential upselling opportunities in your automation consulting business.
  
  ## 🔧 Setup Instructions
  1. **Connect Credentials:** slackApi, webflowApi.
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
  