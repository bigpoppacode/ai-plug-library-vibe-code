# Code Slack Send Webhook
  ## 🚀 What It Does
  Monitors events, processes them, and **notifies** people/apps (Slack/Email) with structured updates.
  
  ## 💼 Business Use Case
  Use as a **glue/API broker**: receive data, enrich/validate via APIs, and pass to downstream systems.
  
  ## ⚙️ How It Works
  1. **Trigger:** This workflow starts with **When clicking "Execute Workflow"**.
  2. **Email Trigger (IMAP)** `emailReadImap` — format: "resolved", options: "[object Object]"
3. **When clicking "Execute Workflow"** `manualTrigger` — configured for its default action.
4. **Sticky Note1** `stickyNote` — width: "618.0312276650722", height: "963.8594737915395", content: "![imap](https://i.imgur.com/lVqCPYb.png)
# Workflow Overview
Leverage n8n's IMAP node to `seamlessly ingest emails as .eml attachments`, streamlining your security protocols and re…[truncated]"
5. **Sticky Note2** `stickyNote` — width: "503.7209302325584", height: "710.138909846923", content: "![Sublime Security](https://i.imgur.com/DfXJLIw.png)
## Analyze Attachment and format output
If an attachment is detected, n8n facilitates its secure transfer to Sublime Security f…[truncated]"
6. **Sticky Note3** `stickyNote` — width: "476.0465116279074", height: "777.0757733319455", content: "![Slack](https://i.imgur.com/iKyMV0N.png)
## Prep output for Slack Report
n8n completes the cycle of threat analysis and communication by preparing and delivering comprehensive rep…[truncated]"
7. **Sticky Note4** `stickyNote` — width: "541.1627906976748", height: "715.8304363872012", content: "![n8n](https://i.imgur.com/lKnBNnH.png)
## Check for attachments and send to sublime if any found 
Upon receiving an email via the IMAP node, n8n executes a meticulous inspection t…[truncated]"
8. **IF email has attachment** `if` — conditions: "[object Object]"
9. **Move Binary Data** `moveBinaryData` — options: "[object Object]", sourceKey: "attachment_0", setAllData: "false"
10. **Notify about missing attachment** `slack` — text: "No attachment found in an email
", select: "channel", channelId: "[object Object]"
11. **Analyze email with Sublime Security** `httpRequest` — method: **POST**, url: `https://api.platform.sublimesecurity.com/v0/messages/analyze`
12. **Split to matched and unmatched** `code` — jsCode: "// Loop over input items and add a new field
// called 'myNewField' to the JSON of each one
matched = []
unmatched = []  

for (const item of $input.first().json.rule_results) {
  …[truncated]"
13. **Format the message** `set` — values: "[object Object]", options: "[object Object]", keepOnlySet: "true"
14. **Slack** `slack` — text: "={{ $json.message }}", select: "channel", channelId: "[object Object]"
  
  ## 💡 AI-Powered Ideas for Improvement
  - **Explain:** This n8n workflow starts by checking an email inbox for new messages with attachments. If an email has an attachment, it is sent to Sublime Security for analysis. The results are then processed to determine which security rules were matched. The analysis results are formatted into a message and sent to a Slack channel for team visibility. If no attachment is found, a notification is sent to Slack indicating the absence of an attachment.

- **Demonstrate:** A cybersecurity team might use this workflow to automatically analyze incoming phishing emails flagged by users. By sending analysis results to Slack, the team can quickly assess threats and coordinate a response, improving their security protocols.

- **Imitate:** To apply this workflow, first set up an IMAP email trigger in n8n, configure it to check a specific inbox. Connect Sublime Security and Slack accounts. Customize the workflow to fit your email analysis and reporting needs. Test it to ensure emails are correctly analyzed and notifications are sent.

- **Practice:** Create a test email with an attachment and send it to your designated inbox. Run the workflow and observe the Slack notifications. Adjust the workflow by changing the rules in Sublime Security or the Slack message format to see how it affects the output.

- **WIIFM:** Mastering this workflow enables you to offer automated email threat analysis and notification services. This can enhance your cybersecurity offerings, helping clients improve their response times to threats, and potentially increasing your income as a consultant or service provider.
  
  ## 🔧 Setup Instructions
  1. **Connect Credentials:** imap, slackApi, httpHeaderAuth.
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
  