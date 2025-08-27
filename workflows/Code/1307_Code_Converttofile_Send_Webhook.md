# Code Converttofile Send Webhook
  ## 🚀 What It Does
  Monitors events, processes them, and **notifies** people/apps (Slack/Email) with structured updates.
  
  ## 💼 Business Use Case
  Use as a **glue/API broker**: receive data, enrich/validate via APIs, and pass to downstream systems.
  
  ## ⚙️ How It Works
  1. **Trigger:** Triggered by **incoming email** (new message).
  2. **Gmail Trigger** `gmailTrigger` — simple: "false", filters: "[object Object]", options: "[object Object]"
3. **Microsoft Outlook Trigger** `microsoftOutlookTrigger` — fields: "body,toRecipients,subject,bodyPreview", output: "fields", filters: "[object Object]"
4. **Sticky Note2** `stickyNote` — color: "7", width: "376.8280004374956", height: "595.590013880477"
5. **Sticky Note** `stickyNote` — color: "7", width: "814.4556539379754", height: "444.5525554815556"
6. **Sticky Note1** `stickyNote` — color: "7", width: "809.7918597571277", height: "602.9002284617277"
7. **Sticky Note3** `stickyNote` — color: "7", width: "593.0990401534098", height: "573.1750519720028"
8. **Sticky Note4** `stickyNote` — color: "7", width: "1251.7025543502837", height: "891.579206098173"
9. **Sticky Note5** `stickyNote` — color: "7", width: "365.6458805720866", height: "559.8072303111675"
10. **Set Gmail Variables** `set` — options: "[object Object]", assignments: "[object Object]"
11. **Retrieve Headers of Email** `httpRequest` — url: `=https://graph.microsoft.com/v1.0/me/messages/{{ $json.id }}?$select=internetMessageHeaders,body`
12. **Format Headers** `code` — jsCode: "const input = $('Retrieve Headers of Email').item.json.internetMessageHeaders;

const result = input.reduce((acc, { name, value }) => {
 if (!acc[name]) acc[name] = [];
 acc[name].…[truncated]"
13. **Set Outlook Variables** `set` — options: "[object Object]", assignments: "[object Object]"
14. **Set Email Variables** `set` — options: "[object Object]", includeOtherFields: "true"
15. **Convert Email Body to File** `convertToFile` — operation: **toText**
16. **Screenshot HTML** `httpRequest` — method: **POST**, url: `https://hcti.io/v1/image`
17. **Retrieve Screenshot** `httpRequest` — url: `={{ $json.url }}`
18. **Analyze Email with ChatGPT** `openAi` — modelId: "[object Object]", options: "[object Object]", messages: "[object Object]"
19. **Check if Malicious** `if` — options: "[object Object]", conditions: "[object Object]"
20. **Create Potentially Malicious Ticket** `jira` — project: "[object Object]", summary: "=Potentially Malicious - Phishing Email Reported: "{{ $('Set Email Variables').item.json.subject }}"", issueType: "[object Object]"
21. **Create Potentially Benign Ticket** `jira` — project: "[object Object]", summary: "=Potentially Benign - Phishing Email Reported: "{{ $('Set Email Variables').item.json.subject }}"", issueType: "[object Object]"
22. **Set Jira ID** `set` — options: "[object Object]", includeOtherFields: "true"
23. **Rename Screenshot** `code` — mode: "runOnceForEachItem", jsCode: "$('Retrieve Screenshot').item.binary.data.fileName = 'emailScreenshot.png'

return $('Retrieve Screenshot').item;"
24. **Upload Screenshot of Email to Jira** `jira` — resource: **issueAttachment**
25. **Rename Email Body Screenshot** `code` — mode: "runOnceForEachItem", jsCode: "$('Convert Email Body to File').item.binary.data.fileName = 'emailBody.txt'

return $('Convert Email Body to File').item;"
26. **Upload Email Body to Jira** `jira` — resource: **issueAttachment**
  
  ## 💡 AI-Powered Ideas for Improvement
  **Explain**  
This workflow automates the process of analyzing incoming emails for potential phishing threats. It triggers on receiving a new email via Gmail or Microsoft Outlook, extracts the email's content and headers, and uses ChatGPT to assess if the email is malicious. If deemed malicious, a Jira ticket is created with the analysis and email attachments. If not, a benign ticket is created. This helps in automatically managing and tracking email threats.

**Demonstrate**  
A security team could use this workflow to automatically identify and log phishing attempts, reducing manual oversight and quickly addressing potential security threats.

**Imitate**  
1. Import the workflow into n8n.
2. Connect Gmail and Microsoft Outlook accounts.
3. Configure ChatGPT and Jira credentials.
4. Set up triggers for new emails.
5. Test with various emails to see how the workflow categorizes them.

**Practice**  
Create a test email with suspicious content and run the workflow. Observe how it categorizes the email and creates a Jira ticket. Adjust the email content to test different scenarios and see how the workflow responds.

**WIIFM**  
Mastering this workflow enables you to offer automated email threat detection services, adding value to your clients by enhancing their cybersecurity measures. This capability can attract new clients and create opportunities for upselling additional security automation solutions.
  
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
  