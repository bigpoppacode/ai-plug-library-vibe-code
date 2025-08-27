# Code Webhook Create Webhook
  ## 🚀 What It Does
  Monitors events, processes them, and **notifies** people/apps (Slack/Email) with structured updates.
  
  ## 💼 Business Use Case
  Ideal for **lead intake**, **enrichment**, and **CRM updates** with alerts to the right channel.
  
  ## ⚙️ How It Works
  1. **Trigger:** Triggered by **incoming email** (new message).
  2. **On email received** `gmailTrigger` — simple: "false", filters: "[object Object]", options: "[object Object]"
3. **Note5** `stickyNote` — width: "330.0279884670691", height: "929.4540475960038", content: "[redacted]"
4. **Note1** `stickyNote` — width: "778.177339901478", height: "289.16256157635416", content: "### Create spreadsheet and populate with headers and deal information
A spreadsheet is created if the spreadsheet does not exist. The spreadsheet ID is stored in the `$getWorkflowS…[truncated]"
5. **Note2** `stickyNote` — width: "301.18226600985224", height: "114.67980295566498", content: "### Tip: Deleting old spreadsheets
If you ever want to start over, delete the old spreadsheet, __making sure that it is also deleted from Google Drive's trash__."
6. **Note3** `stickyNote` — width: "260.3940886699507", height: "333.34975369458095", content: "### `Get spreadsheet ID`













The spreadsheet ID is stored in this workflow's static data. If you want to refresh the static data you will need to copy this entire workflow…[truncated]"
7. **On feedback given** `webhook` — path: `/e2aa55fb-618a-4478-805d-d6da46b908d1`
8. **Note** `stickyNote` — width: "260.3940886699507", height: "333.34975369458095", content: "### `Get spreadsheet ID`













The spreadsheet ID is stored in this workflow's static data. If you want to refresh the static data you will need to copy this entire workflow…[truncated]"
9. **Sticky Note** `stickyNote` — width: "225.59802712700315", height: "314.2786683107279", content: "[redacted]"
10. **Sticky Note1** `stickyNote` — width: "516.6954377311955", height: "680.5491163173024", content: "## Send a ChatGPT email reply when email received and save responses to Google Sheets
This workflow sends a OpenAI GPT reply when an email is received from specific email recipient…[truncated]"
11. **Sticky Note2** `stickyNote` — width: "225.59802712700315", height: "289.61775585696694", content: "













This workflow should never reach this node. It is only here for extending the functionality of this workflow if needed."
12. **Sticky Note3** `stickyNote` — width: "225.59802712700315", height: "288.2949081608216", content: "[redacted]"
13. **Identify trigger #1** `set` — values: "[object Object]", options: "[object Object]"
14. **Identify trigger #2** `set` — values: "[object Object]", options: "[object Object]"
15. **Configure** `set` — values: "[object Object]", options: "[object Object]"
16. **Determine which trigger ran** `switch` — rules: "[object Object]", value1: "={{ $json.triggeredFrom }}", dataType: "string"
17. **Only continue for specific emails** `if` — conditions: "[object Object]", combineOperation: "any"
18. **Record feedback** `noOp` — configured for its default action.
19. **Fallback route** `noOp` — configured for its default action.
20. **Generate UUID** `crypto` — action: "generate", dataPropertyName: "uuid"
21. **Do not send email to this recipient** `noOp` — configured for its default action.
22. **Thanks for your response!** `html` — html: "<!DOCTYPE html>

<html>
<head>
  <meta charset="UTF-8" />
  <title>Thanks for your response!</title>
</head>
<body>
  <div class="container">
    <h1>Thanks for your response!</h1>…[truncated]"
23. **Extract message content (advanced)** `code` — jsCode: "// source: https://gist.github.com/ikbelkirasan/2462073f6c7c760faa6fad7c6a0c4dc3
var EmailParser=function(t){var r={};function n(e){if(r[e])return r[e].exports;var o=r[e]={i:e,l:!1…[truncated]"
24. **Show HTML page** `respondToWebhook` — options: "[object Object]", respondWith: "text", responseBody: "={{ $json.html }}"
25. **Is text within token limit?** `if` — conditions: "[object Object]"
26. **If no spreadsheet in configuration #2** `if` — conditions: "[object Object]"
27. **Generate reply** `openAi` — prompt: "=From: {{ $json.from.value }}
To: {{ $json.to.value }}
Subject: {{ $json.subject }}
Body: {{ $json.reply }}


Reply: "
28. **Do nothing** `noOp` — configured for its default action.
29. **Get sheet IDs #2** `code` — jsCode: "const staticData = $getWorkflowStaticData('global');

return {
  "spreadsheetId": staticData.googleSheetsSpreadsheetId,
  "worksheetId": staticData.googleSheetsWorksheetId
}"
30. **Store specific sheet IDs #2** `code` — jsCode: "const staticData = $getWorkflowStaticData('global');

staticData.googleSheetsSpreadsheetId = $('Configure').all()[0].json.spreadsheetId
staticData.googleSheetsWorksheetId = $('Conf…[truncated]"
31. **Send reply to database** `noOp` — configured for its default action.
32. **If reply is complete** `if` — conditions: "[object Object]"
33. **Send feedback for fine-tuned data** `googleSheets` — operation: **update**
34. **Format data** `set` — values: "[object Object]", options: "[object Object]", keepOnlySet: "true"
35. **Send email reply** `noOp` — configured for its default action.
36. **Do not send unfinished email reply** `noOp` — configured for its default action.
37. **If no spreadsheet in configuration #1** `if` — conditions: "[object Object]"
38. **Email template** `html` — html: "<html>
  <head>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
    <title>Template for ChatGPT email</title>
    <style>
      /* cspell:disable-file */
…[truncated]"
39. **Get sheet IDs #1** `code` — jsCode: "const staticData = $getWorkflowStaticData('global');

return {
  "spreadsheetId": staticData.googleSheetsSpreadsheetId,
  "worksheetId": staticData.googleSheetsWorksheetId
}"
40. **Store specific sheet IDs #1** `code` — jsCode: "const staticData = $getWorkflowStaticData('global');

staticData.googleSheetsSpreadsheetId = $('Configure').all()[0].json.spreadsheetId
staticData.googleSheetsWorksheetId = $('Conf…[truncated]"
41. **Send reply to recipient** `gmail` — operation: **reply**
42. **If no sheet IDs** `if` — conditions: "[object Object]", combineOperation: "any"
43. **Get data from `Format data`** `code` — jsCode: "return $('Format data').all()"
44. **Create or update rows** `googleSheets` — operation: **appendOrUpdate**
45. **If spreadsheet doesn't exist** `if` — conditions: "[object Object]"
46. **Create spreadsheet** `googleSheets` — resource: **spreadsheet**
47. **Successfully created or updated row** `noOp` — configured for its default action.
48. **Store spreadsheet ID** `code` — jsCode: "const staticData = $getWorkflowStaticData('global');

staticData.googleSheetsSpreadsheetId = $('Create spreadsheet').first().json.spreadsheetId
staticData.googleSheetsWorksheetId =…[truncated]"
49. **Get data from `Format data` node** `code` — jsCode: "return $('Format data').all()"
50. **Paste data** `googleSheets` — operation: **append**
  
  ## 💡 AI-Powered Ideas for Improvement
  Could not generate AI recommendations at this time.
  
  ## 🔧 Setup Instructions
  1. **Connect Credentials:** openAiApi, gmailOAuth2, googleSheetsOAuth2Api.
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
  