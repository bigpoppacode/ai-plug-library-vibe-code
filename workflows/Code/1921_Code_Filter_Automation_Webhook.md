# Code Filter Automation Webhook
  ## 🚀 What It Does
  Monitors events, processes them, and **notifies** people/apps (Slack/Email) with structured updates.
  
  ## 💼 Business Use Case
  Use as a **glue/API broker**: receive data, enrich/validate via APIs, and pass to downstream systems.
  
  ## ⚙️ How It Works
  1. **Trigger:** Triggered by **incoming email** (new message).
  2. **OpenAI Chat Model** `lmChatOpenAi` — model: `gpt-4o`
3. **Calculator** `toolCalculator` — configured for its default action.
4. **Structured Output Parser** `outputParserStructured` — jsonSchemaExample: "{
 "summary": "Text",
 "meta": {
 "sender": "Text",
 "subject": "Text",
 "date": "Text"
 }
}"
5. **Gmail Trigger** `gmailTrigger` — simple: "false", filters: "[object Object]", options: "[object Object]"
6. **When clicking ‘Test workflow’** `manualTrigger` — configured for its default action.
7. **Sticky Note** `stickyNote` — color: "5", width: "742.4418604651174", height: "361.9189248985609"
8. **Sticky Note1** `stickyNote` — width: "215.20930232558143", height: "323.99999999999943", content: "## Set Globals
Use the setup instructions below to retrieve the values for both `errorLabelID` and `processedLabelID`"
9. **Sticky Note2** `stickyNote` — width: "215.49263552738452", height: "324.4244486294891", content: "## Select Base
Select the database and the table where the "Routes" are defined"
10. **Sticky Note3** `stickyNote` — color: "7", width: "216.47293010628914", height: "245.005504426549"
11. **Sticky Note4** `stickyNote` — color: "7", width: "216.47293010628914", height: "245.005504426549"
12. **Sticky Note5** `stickyNote` — color: "7", width: "216.47293010628914", height: "245.005504426549"
13. **Sticky Note6** `stickyNote` — color: "7", width: "216.47293010628914", height: "305.2192252594149"
14. **Sticky Note7** `stickyNote` — color: "7", width: "216.47293010628914", height: "304.5973623748489"
15. **Sticky Note8** `stickyNote` — color: "7", width: "755.8332895195936", height: "529.1698390841688"
16. **Sticky Note9** `stickyNote` — color: "7", width: "216.47293010628914", height: "249.09934448053562"
17. **Sticky Note10** `stickyNote` — color: "7", width: "216.47293010628914", height: "503.00412949500975"
18. **Sticky Note11** `stickyNote` — color: "7", width: "216.47293010628914", height: "446.3164817463921"
19. **Sticky Note12** `stickyNote` — color: "7", width: "216.47293010628914", height: "261.3816681594028"
20. **Structured Output Parser1** `outputParserStructured` — jsonSchemaExample: "{
 "title": "Title",
 "description": "Text",
 "bulletpoints": [
 "Text",
 "Text"
 ]
}"
21. **Calculator1** `toolCalculator` — configured for its default action.
22. **OpenAI Chat Model1** `lmChatOpenAi` — model: `gpt-4o`
23. **Globals** `set` — options: "[object Object]", assignments: "[object Object]"
24. **Get all labels** `gmail` — resource: **label**
25. **Filter for unprocessed mails** `filter` — options: "[object Object]", conditions: "[object Object]"
26. **Required labels** `filter` — options: "[object Object]", conditions: "[object Object]"
27. **Extract Route ID** `set` — options: "[object Object]", assignments: "[object Object]"
28. **Get Route by ID** `airtable` — operation: **get**, table: `[object Object]`
29. **Active Routes Only** `filter` — options: "[object Object]", conditions: "[object Object]"
30. **No Operation, do nothing** `noOp` — configured for its default action.
31. **Generate Actionable Task** `agent` — text: "={{ $('Gmail Trigger').item.json.text }}", options: "[object Object]", promptType: "define"
32. **Send notification about missing route** `gmail` — sendTo: "={{ $('Gmail Trigger').item.json.from.value[0].address }}", message: "=There seems to be no active route anymore which connects this Alias to a Notion Database.

Please try again later or double check your configuration.", options: "[object Object]"
33. **Get Summary & Meta Data** `agent` — text: "={{ $('Gmail Trigger').item.json.text }}", options: "[object Object]", promptType: "define"
34. **Format Notion Page Blocks** `code` — mode: "runOnceForEachItem", jsCode: "function paragraph(content, annotations={}) {
 return {
 "object": "block",
 "type": "paragraph",
 "paragraph": {
 "rich_text": [
 {
 "type": "text",
 "text": {
 "content": content…[truncated]"
35. **Create Notion Page** `httpRequest` — method: **POST**, url: `https://api.notion.com/v1/pages`
36. **Add Label "Processed"** `gmail` — operation: **addLabels**
37. **Deactivate Route** `airtable` — operation: **update**, table: `[object Object]`
38. **Send notification about deactivated route** `gmail` — sendTo: "={{ $('Gmail Trigger').item.json.from.value[0].address }}", message: "=An error happened while trying to create a Notion Page. It can have various reasons, including a temporary outage of the Notion API, missing permissions to the Notion Database or …[truncated]", options: "[object Object]"
39. **Add Label "Error"** `gmail` — operation: **addLabels**
  
  ## 💡 AI-Powered Ideas for Improvement
  - **Explain:** This workflow automates the process of managing emails by integrating Gmail, Airtable, and Notion. It begins by checking Gmail for new emails, extracts relevant data, and identifies the route ID from the email address. It then fetches the associated route from Airtable and checks if it's active. If active, it generates an actionable task and summary using OpenAI, formats the data, and creates a page in Notion. If the route is inactive or an error occurs, it sends a notification and updates the email's label to prevent reprocessing.

- **Demonstrate:** A business owner could use this workflow to automatically process customer inquiries received via email, log them in Airtable, and create tasks in Notion. This streamlines task management and ensures timely responses.

- **Imitate:** Import the workflow into n8n, connect Gmail, Airtable, and Notion accounts. Set up the Gmail trigger and Airtable IDs. Test the workflow with sample emails to ensure it processes and updates correctly.

- **Practice:** Create a test Gmail account and send a few emails with different subjects. Observe how the workflow extracts route IDs, checks Airtable, and creates Notion pages. Adjust the workflow to handle different email structures.

- **WIIFM:** Mastering this workflow provides the ability to automate email processing and task management, saving time and reducing errors. This skill can enhance service offerings, attract new clients, and increase revenue in an AI automation business.
  
  ## 🔧 Setup Instructions
  1. **Connect Credentials:** openAiApi, gmailOAuth2, airtableTokenApi.
2. **Data Mapping:** Verify base/sheet IDs and column names match exactly to prevent silent failures.
3. **Notification Targets:** Confirm channel/email IDs and that the bot/app is authorized to post.
4. **API Contracts:** Validate required headers and 2xx/4xx handling; add retries for 429/5xx.
  
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
  