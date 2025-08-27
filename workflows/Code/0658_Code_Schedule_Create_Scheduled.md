# Code Schedule Create Scheduled
  ## 🚀 What It Does
  Monitors events, processes them, and **notifies** people/apps (Slack/Email) with structured updates.
  
  ## 💼 Business Use Case
  Ideal for **lead intake**, **enrichment**, and **CRM updates** with alerts to the right channel.
  
  ## ⚙️ How It Works
  1. **Trigger:** Runs on a **schedule** (e.g., `[object Object]`).
  2. **Schedule Trigger** `scheduleTrigger` — rule: "[object Object]"
3. **Execute Workflow Trigger** `executeWorkflowTrigger` — configured for its default action.
4. **Unsubscribe Form** `formTrigger` — options: "[object Object]", formTitle: "Unsubscribe from Learn Something Every Day", formFields: "[object Object]"
5. **Sticky Note** `stickyNote` — color: "7", width: "335", height: "173"
6. **Sticky Note1** `stickyNote` — color: "7", width: "380", height: "80"
7. **Sticky Note2** `stickyNote` — color: "7", width: "355", height: "115"
8. **Sticky Note3** `stickyNote` — color: "7", width: "347", height: "114"
9. **Subscribe Form** `formTrigger` — options: "[object Object]", formTitle: "Learn something every day!", formFields: "[object Object]"
10. **Window Buffer Memory** `memoryBufferWindow` — sessionKey: "=scheduled_send_{{ $json.email }}", sessionIdType: "customKey"
11. **Wikipedia** `toolWikipedia` — configured for its default action.
12. **Groq Chat Model** `lmChatGroq` — model: `llama-3.3-70b-versatile`
13. **Sticky Note4** `stickyNote` — color: "7", width: "335", height: "113"
14. **Sticky Note5** `stickyNote` — color: "7", width: "340", height: "140"
15. **Sticky Note6** `stickyNote` — color: "7", width: "460", height: "400"
16. **Sticky Note7** `stickyNote` — width: "480", height: "900", content: "## Try It Out!

### This n8n templates demonstrates how to build a simple subscriber service entirely in n8n using n8n forms as a frontend, n8n generally as the backend and Airtabl…[truncated]"
17. **Search surprise** `airtable` — operation: **search**, table: `[object Object]`
18. **Search daily** `airtable` — operation: **search**, table: `[object Object]`
19. **Search weekly** `airtable` — operation: **search**, table: `[object Object]`
20. **Execution Data** `executionData` — dataToSave: "[object Object]"
21. **Update Subscriber** `airtable` — operation: **update**, table: `[object Object]`
22. **Create Subscriber** `airtable` — operation: **upsert**, table: `[object Object]`
23. **Should Send?** `code` — mode: "runOnceForEachItem", jsCode: "const luckyPick = Math.floor(Math.random() * 10) + 1;
$input.item.json.should_send = luckyPick == 8;
return $input.item;"
24. **Content Generation Agent** `agent` — text: "=Generate an new factoid on the following topic: "{{ $json.topic.replace('"','') }}"
Ensure it is unique and not one generated previously.", options: "[object Object]", promptType: "define"
25. **confirmation email1** `gmail` — sendTo: "={{ $('Subscribe Form').item.json.email }}", message: "=This is to confirm your request to subscribe to "Learn something every day!" - a free service to send you facts about your favourite topics.

Topic: {{ $('Subscribe Form').item.js…[truncated]", options: "[object Object]"
26. **Should Send = True** `filter` — options: "[object Object]", conditions: "[object Object]"
27. **Generate Image** `openAi` — resource: **image**, prompt: "=Generate a child-friendly illustration which compliments the following paragraph:
{{ $json.output }}"
28. **Create Event** `set` — options: "[object Object]", assignments: "[object Object]"
29. **Resize Image** `editImage` — operation: **resize**
30. **Execute Workflow** `executeWorkflow` — mode: "each", options: "[object Object]", workflowId: "[object Object]"
31. **Set Email Vars** `set` — options: "[object Object]", assignments: "[object Object]", includeOtherFields: "true"
32. **Send Message** `gmail` — sendTo: "={{ $json.to }}", message: "=<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>{{ $json.subject }}</title…[truncated]", options: "[object Object]"
33. **Log Last Sent** `airtable` — operation: **update**, table: `[object Object]`
  
  ## 💡 AI-Powered Ideas for Improvement
  - **Explain:** This n8n workflow automates a subscription service that sends daily, weekly, or surprise fact emails to subscribers. Users can subscribe or unsubscribe via forms. The workflow retrieves subscriber information from Airtable, generates content using AI, and sends personalized emails with illustrations. It also logs sent emails and manages subscriptions.
  
- **Demonstrate:** A business owner could use this workflow to engage customers with regular content updates, keeping them informed and interested in the brand, and thereby increasing customer retention.

- **Imitate:** To adapt this workflow:
  1. Import it into n8n.
  2. Set up Airtable with subscriber details.
  3. Connect your email and AI services.
  4. Customize forms for subscribing/unsubscribing.
  5. Test the workflow to ensure emails are sent correctly.

- **Practice:** Create a test Airtable base with sample subscribers. Run the workflow to see how it sends emails and updates records. Adjust email content or schedule to see the effects.

- **WIIFM:** Mastering this workflow can enhance your service offerings by automating customer engagement, reducing manual tasks, and providing a scalable solution for content delivery, thus attracting more clients and increasing revenue in your automation business.
  
  ## 🔧 Setup Instructions
  1. **Connect Credentials:** airtableTokenApi, gmailOAuth2, groqApi, openAiApi.
2. **Cron/Schedule:** Confirm timezone and cadence; start with a test window (e.g., every 5 minutes) then scale.
3. **Data Mapping:** Verify base/sheet IDs and column names match exactly to prevent silent failures.
4. **Notification Targets:** Confirm channel/email IDs and that the bot/app is authorized to post.
  
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
  