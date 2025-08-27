# Splitout Code Create Webhook
## 🚀 What It Does
Monitors events, processes them, and **notifies** people/apps (Slack/Email) with structured updates.

## 💼 Business Use Case
Use as a **glue/API broker**: receive data, enrich/validate via APIs, and pass to downstream systems.

## ⚙️ How It Works
1. **Trigger:** This workflow starts with **When clicking ‘Test workflow’**.
2. **When clicking ‘Test workflow’** `manualTrigger` — configured for its default action.
3. **Sticky Note1** `stickyNote` — color: "4", width: "420", height: "460"
4. **When Executed by Another Workflow** `executeWorkflowTrigger` — workflowInputs: "[object Object]"
5. **Sticky Note** `stickyNote` — color: "4", width: "230", height: "460"
6. **Sticky Note2** `stickyNote` — color: "4", width: "230", height: "460"
7. **Sticky Note3** `stickyNote` — color: "4", width: "190", height: "460"
8. **Sticky Note4** `stickyNote` — color: "4", width: "430", height: "460"
9. **Sticky Note5** `stickyNote` — color: "4", width: "1090", height: "660"
10. **Sticky Note6** `stickyNote` — color: "4", width: "1090", height: "660"
11. **Sticky Note7** `stickyNote` — color: "4", width: "670", height: "660"
12. **Sticky Note10** `stickyNote` — color: "5", width: "1570", height: "460"
13. **Sticky Note8** `stickyNote` — width: "640", height: "200", content: "## Contact me
- If you need any modification to this workflow
- if you need some help with this workflow
- Or if you need any workflow in n8n, Make, or Langchain / Langgraph

Write…[truncated]"
14. **Set data here** `set` — options: "[object Object]", assignments: "[object Object]"
15. **Edit** `set` — options: "[object Object]", assignments: "[object Object]"
16. **Get list of owners** `httpRequest` — url: `https://api.hubapi.com/crm/v3/owners`
17. **Split Out owners** `splitOut` — options: "[object Object]", fieldToSplitOut: "results"
18. **Get current owner** `filter` — options: "[object Object]", conditions: "[object Object]"
19. **Get list of clients** `executeWorkflow` — mode: "each", options: "[object Object]", workflowId: "[object Object]"
20. **Change this for testing** `filter` — options: "[object Object]", conditions: "[object Object]"
21. **Create entry with email** `googleSheets` — operation: **appendOrUpdate**
22. **Get rows from document** `googleSheets` — options: "[object Object]", filtersUI: "[object Object]", sheetName: "[object Object]"
23. **If linkedin url is empty** `if` — options: "[object Object]", conditions: "[object Object]"
24. **Search for user profile by names** `httpRequest` — url: `https://linkedin-api8.p.rapidapi.com/search-people`
25. **Set the profile URL1** `set` — options: "[object Object]", assignments: "[object Object]"
26. **Profile URL not found?** `if` — options: "[object Object]", conditions: "[object Object]"
27. **Do nothing** `noOp` — configured for its default action.
28. **Set the profile URL** `set` — options: "[object Object]", assignments: "[object Object]"
29. **Merge profileURL** `code` — mode: "runOnceForEachItem", jsCode: "// Add a new field called 'myNewField' to the JSON of the item
$input.item.json.profileURL = $json.profileURL;

return $input.item;"
30. **Search for user by link** `httpRequest` — url: `https://linkedin-api8.p.rapidapi.com/get-profile-data-by-url`
31. **Get last post** `executeWorkflow` — mode: "each", options: "[object Object]", workflowId: "[object Object]"
32. **Set last_position** `set` — options: "[object Object]", assignments: "[object Object]"
33. **Set last_post** `set` — options: "[object Object]", assignments: "[object Object]"
34. **if new position** `if` — options: "[object Object]", conditions: "[object Object]"
35. **if new post** `if` — options: "[object Object]", conditions: "[object Object]"
36. **Updates last position** `googleSheets` — operation: **appendOrUpdate**
37. **Update last post** `googleSheets` — operation: **appendOrUpdate**
38. **Set position_updated** `set` — options: "[object Object]", assignments: "[object Object]"
39. **Set post_updated** `set` — options: "[object Object]", assignments: "[object Object]"
40. **Merge on email** `merge` — mode: "combine", options: "[object Object]", joinMode: "keepEverything"
41. **Generate the email text** `code` — jsCode: "// Loop over input items and add a new field called 'myNewField' to the JSON of each one
let client_post = []
let client_position = []
for (const item of $input.all()) {
  if(item.…[truncated]"
42. **Gmail** `gmail` — sendTo: "={{ $('Set data here').first().json.email }}", message: "={{ $json.text }}", options: "[object Object]"

## 💡 AI-Powered Ideas for Improvement
**Explain**: This n8n workflow automates the process of checking and updating client data from HubSpot. It retrieves a list of clients, checks for updates on LinkedIn profiles, and stores the latest data in Google Sheets. If changes are detected, it sends an email notification with the updates.

**Demonstrate**: A sales consultant could use this workflow to keep client information up-to-date. By automatically checking for LinkedIn profile changes, the consultant can maintain accurate and current client records, improving the quality of client interactions and ensuring the sales team has the latest information.

**Imitate**: 
1. Set up your HubSpot and Google Sheets credentials in n8n.
2. Import the workflow into n8n.
3. Customize the Google Sheets and email settings to match your data and notification preferences.
4. Test the workflow to ensure it correctly updates and sends notifications.

**Practice**: Create a test Google Sheet and manually add a few client details. Run the workflow and see how it checks for LinkedIn updates and logs changes. Try altering some LinkedIn URLs and re-run the workflow to observe the updates.

**WIIFM**: Mastering this workflow can help you offer data maintenance services, ensuring your clients have accurate records. This can lead to better client relationships and open opportunities for upselling other automation services, increasing your business's profitability.

## 🔧 Setup Instructions
1. **Connect Credentials:** hubspotOAuth2Api, gmailOAuth2, httpHeaderAuth, googleSheetsOAuth2Api.
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
