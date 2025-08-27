# Code MicrosoftOutlook Send Webhook
  ## 🚀 What It Does
  Monitors events, processes them, and **notifies** people/apps (Slack/Email) with structured updates.
  
  ## 💼 Business Use Case
  Use as a **glue/API broker**: receive data, enrich/validate via APIs, and pass to downstream systems.
  
  ## ⚙️ How It Works
  1. **Trigger:** Triggered by **incoming email** (new message).
  2. **Gmail Trigger** `gmailTrigger` — simple: "false", filters: "[object Object]", options: "[object Object]"
3. **Microsoft Outlook Trigger** `microsoftOutlookTrigger` — fields: "body,toRecipients,subject,bodyPreview", output: "fields", filters: "[object Object]"
4. **Sticky Note** `stickyNote` — color: "7", width: "792.3026315789474", height: "426.314163659402"
5. **Sticky Note1** `stickyNote` — color: "7", width: "792.3026315789474", height: "532.3344389880435"
6. **Sticky Note2** `stickyNote` — color: "7", width: "580.4605263157906", height: "615.460526315789"
7. **Sticky Note3** `stickyNote` — color: "7", width: "507.82894736842223", height: "537.9199760920052"
8. **Sticky Note4** `stickyNote` — color: "7", width: "692.434210526317", height: "529.5475902005091"
9. **Set Gmail Variables** `set` — options: "[object Object]", assignments: "[object Object]"
10. **Retrieve Headers of Email** `httpRequest` — url: `=https://graph.microsoft.com/v1.0/me/messages/{{ $json.id }}?$select=internetMessageHeaders,body`
11. **Format Headers** `code` — jsCode: "const input = $('Retrieve Headers of Email').item.json.internetMessageHeaders;

const result = input.reduce((acc, { name, value }) => {
 if (!acc[name]) acc[name] = [];
 acc[name].…[truncated]"
12. **Set Outlook Variables** `set` — options: "[object Object]", assignments: "[object Object]"
13. **Set Email Variables** `set` — options: "[object Object]", includeOtherFields: "true"
14. **Screenshot HTML** `httpRequest` — method: **POST**, url: `https://hcti.io/v1/image`
15. **Retrieve Screenshot** `httpRequest` — url: `={{ $json.url }}`
16. **ChatGPT Analysis** `openAi` — resource: **image**, operation: **analyze**
17. **Create Jira Ticket** `jira` — project: "[object Object]", summary: "=Phishing Email Reported: "{{ $('Set Email Variables').item.json.subject }}"", issueType: "[object Object]"
18. **Rename Screenshot** `code` — mode: "runOnceForEachItem", jsCode: "$('Retrieve Screenshot').item.binary.data.fileName = 'emailScreenshot.png'

return $('Retrieve Screenshot').item;"
19. **Upload Screenshot of Email to Jira** `jira` — resource: **issueAttachment**
  
  ## 💡 AI-Powered Ideas for Improvement
  ### Explain
This n8n workflow is designed to detect and analyze potential phishing emails. It connects to Gmail and Microsoft Outlook accounts to monitor incoming emails. When an email is detected, it extracts key details like subject, recipient, and headers. The email's HTML is converted into an image for visual analysis by ChatGPT, which assesses the likelihood of phishing. If deemed suspicious, a Jira ticket is automatically created, complete with the analysis and a screenshot, for further investigation by security teams.

### Demonstrate
A cybersecurity firm can use this workflow to automate the detection of phishing emails, reducing the risk of security breaches and saving time for IT security teams by streamlining the reporting and analysis process.

### Imitate
1. Import the workflow into n8n.
2. Connect your Gmail and Outlook accounts.
3. Set up API keys for ChatGPT and Jira.
4. Customize the email triggers and variables as needed.
5. Test the workflow with a sample email to ensure it creates a Jira ticket accurately.

### Practice
Create a test email in your Gmail or Outlook account. Run the workflow and observe how it processes the email, generates a screenshot, and creates a Jira ticket. Try modifying the email content to see how the workflow handles different scenarios.

### WIIFM
By mastering this workflow, you can offer automated phishing detection and reporting services to businesses, enhancing their cybersecurity measures. This not only adds a valuable service to your portfolio but also provides a recurring revenue stream as companies continuously seek to safeguard their email communications.
  
  ## 🔧 Setup Instructions
  1. **Connect Credentials:** gmailOAuth2, microsoftOutlookOAuth2Api, httpBasicAuth, openAiApi, jiraSoftwareCloudApi.
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
  