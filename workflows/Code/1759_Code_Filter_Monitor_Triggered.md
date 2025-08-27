# Code Filter Monitor Triggered
  ## 🚀 What It Does
  Monitors events, processes them, and **notifies** people/apps (Slack/Email) with structured updates.
  
  ## 💼 Business Use Case
  Ideal for **lead intake**, **enrichment**, and **CRM updates** with alerts to the right channel.
  
  ## ⚙️ How It Works
  1. **Trigger:** This workflow starts with **When clicking ‘Test workflow’**.
  2. **When clicking ‘Test workflow’** `manualTrigger` — configured for its default action.
3. **Get Pricing URLs** `googleSheets` — options: "[object Object]", sheetName: "[object Object]", documentId: "[object Object]"
4. **Check pricing** `airtop` — resource: **extraction**, operation: **query**, url: `={{ $json["Pricing URL"] }}`, prompt: "=This is a pricing page. Please summarize it concisely by including every plan. For each plan, list the price and the top 3 features it includes. Compare the current plan to the pr…[truncated]"
5. **Merge** `merge` — mode: "combine", options: "[object Object]", combineBy: "combineByPosition"
6. **Parse response** `code` — mode: "runOnceForEachItem", jsCode: "const response = JSON.parse($json.data.modelResponse)

return { json: {
  ...response,
  row_number: $json['row_number'],
  "Pricing URL": $json["Pricing URL"]
}}"
7. **Filter out similar** `filter` — options: "[object Object]", conditions: "[object Object]"
8. **Update pricing** `googleSheets` — operation: **update**
9. **Notify pricing change** `slack` — text: "={{ $json["Pricing URL"] + " - " + $json.differences_summary }}", select: "channel", channelId: "[object Object]"
  
  ## 💡 AI-Powered Ideas for Improvement
  ### Explain
This workflow monitors competitor pricing by pulling URLs from a Google Sheet, extracting pricing details from each URL, and summarizing the differences compared to previous data. If significant changes are detected, it updates the Google Sheet and notifies a Slack channel. This ensures you have up-to-date insights into competitor pricing strategies.

### Demonstrate
A business owner could use this to keep tabs on competitors' pricing strategies, allowing for timely adjustments to their own pricing plans to stay competitive.

### Imitate
1. Import the workflow into n8n.
2. Connect Google Sheets and Slack accounts.
3. Configure the Google Sheet with competitor pricing URLs.
4. Set up the Slack channel for notifications.
5. Run and test the workflow to ensure it updates and notifies correctly.

### Practice
Create a Google Sheet with a few pricing URLs, then run the workflow. Check if the Google Sheet updates with new pricing summaries and if Slack notifications are sent when changes are detected.

### WIIFM
Mastering this workflow can help you offer competitive analysis services, adding value to your clients by enabling strategic pricing decisions. This can increase your service offerings and potentially boost income in your AI automation business.
  
  ## 🔧 Setup Instructions
  1. **Connect Credentials:** googleSheetsOAuth2Api, airtopApi, slackApi.
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
  