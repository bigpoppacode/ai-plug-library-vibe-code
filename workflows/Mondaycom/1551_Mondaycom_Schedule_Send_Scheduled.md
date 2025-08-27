# Mondaycom Schedule Send Scheduled
  ## 🚀 What It Does
  Moves data between apps and a **database/spreadsheet**, with logic and optional AI steps.
  
  ## 💼 Business Use Case
  Ideal for **lead intake**, **enrichment**, and **CRM updates** with alerts to the right channel.
  
  ## ⚙️ How It Works
  1. **Trigger:** This workflow starts with **When clicking ‘Test workflow’**.
  2. **When clicking ‘Test workflow’** `manualTrigger` — configured for its default action.
3. **Sticky Note8** `stickyNote` — color: "5", width: "675", height: "107"
4. **Sticky Note10** `stickyNote` — width: "612", height: "401", content: "## Outlook Business with filters
Filters:
```
flag/flagStatus eq 'notFlagged' and not categories/any()
```

These filters ensure we do not process flagged emails or email that alre…[truncated]"
5. **Sticky Note11** `stickyNote` — color: "6", width: "459", height: "401"
6. **Sticky Note12** `stickyNote` — color: "4", width: "736", height: "558"
7. **OpenAI Chat Model** `lmChatOpenAi` — model: `gpt-4o`
8. **Structured Output Parser** `outputParserStructured` — schemaType: "manual", inputSchema: "{
 "type": "object",
 "properties": {
 "id": {
 "type": "string",
 "description": "The email id"
 },
 "subject": {
 "type": "string",
 "description": "The email subject line"
 },
 …[truncated]"
9. **Sticky Note** `stickyNote` — color: "6", width: "760", height: "400"
10. **Sticky Note1** `stickyNote` — width: "700", height: "580", content: "## Categorise & Prioritise Emails Agent 
"
11. **Sticky Note2** `stickyNote` — color: "4", width: "740", height: "280"
12. **Check Mail Schedule Trigger** `scheduleTrigger` — rule: "[object Object]"
13. **Update Contacts Schedule Trigger** `scheduleTrigger` — rule: "[object Object]"
14. **Sticky Note3** `stickyNote` — color: "4", height: "400", content: "## Match Contact
Check if the sender is an existing contact. Note in this workflow the contacts are dynamically loaded from Monday.com"
15. **Rules** `airtable` — operation: **search**, table: `[object Object]`
16. **Categories** `airtable` — operation: **search**, table: `[object Object]`
17. **Delete Rules** `airtable` — operation: **search**, table: `[object Object]`
18. **Microsoft Outlook23** `microsoftOutlook` — operation: **getAll**
19. **Monday.com - Get Contacts** `mondayCom` — resource: **boardItem**, operation: **getAll**
20. **Convert to Markdown** `markdown` — html: "={{ $json.body.content }}", options: "[object Object]"
21. **Airtable - Contacts** `airtable` — operation: **upsert**, table: `[object Object]`
22. **Email Messages** `set` — options: "[object Object]", assignments: "[object Object]"
  
  ## 💡 AI-Powered Ideas for Improvement
  ### Explain
This workflow automates email management by connecting Microsoft Outlook, Airtable, and Monday.com with AI. It retrieves unflagged emails without categories from Outlook, sanitizes them, and checks if senders are existing contacts. Using OpenAI, it analyzes emails to categorize them, updates categories in Outlook, and marks important emails. Contacts are dynamically loaded from Monday.com and stored in Airtable for reference.

### Demonstrate
A business owner can use this workflow to prioritize and categorize emails, ensuring important messages are highlighted and reducing time spent sorting through emails manually.

### Imitate
1. Import the workflow into n8n.
2. Connect Microsoft Outlook, Airtable, and Monday.com accounts.
3. Set up the OpenAI API for email analysis.
4. Customize categories and rules in Airtable.
5. Run the workflow to test and adjust as needed.

### Practice
Create a test email account and send various emails to it. Run the workflow to see how emails are categorized and prioritized. Adjust the Airtable categories and rules to see the impact on email sorting.

### WIIFM
Mastering this workflow enables you to offer email management solutions, saving businesses time and enhancing productivity. This can lead to increased client satisfaction and new opportunities in AI automation services.
  
  ## 🔧 Setup Instructions
  1. **Connect Credentials:** microsoftOutlookOAuth2Api, openAiApi, mondayComApi, airtableTokenApi.
2. **Data Mapping:** Verify base/sheet IDs and column names match exactly to prevent silent failures.
  
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
  