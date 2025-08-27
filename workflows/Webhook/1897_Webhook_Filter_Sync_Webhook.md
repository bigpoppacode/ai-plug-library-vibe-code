# Webhook Filter Sync Webhook
## 🚀 What It Does
Monitors events, processes them, and **notifies** people/apps (Slack/Email) with structured updates.

## 💼 Business Use Case
Use as a **glue/API broker**: receive data, enrich/validate via APIs, and pass to downstream systems.

## ⚙️ How It Works
1. **Trigger:** This workflow starts with **Notion-Todoist Sync Setup Helper**.
2. **OAuth redirect** `webhook` — method: **GET**, path: `/7aee8b09-29e3-4e12-9b66-c6e8ab080bf7`
3. **Notion-Todoist Sync Setup Helper** `formTrigger` — options: "[object Object]", formTitle: "Notion-Todoist Sync Setup Helper", formFields: "[object Object]"
4. **Todoist Webhook Setup Helper** `formTrigger` — options: "[object Object]", formTitle: "Todoist Webhook Setup Helper", formFields: "[object Object]"
5. **Schedule Trigger** `scheduleTrigger` — rule: "[object Object]"
6. **Sticky Note8** `stickyNote` — color: "7", width: "220", height: "300"
7. **Sticky Note9** `stickyNote` — color: "7", width: "220", height: "300"
8. **Sticky Note10** `stickyNote` — width: "220", height: "300", content: "## Set Globals
Use Sync Setup Helper Workflow to generate the JSON and paste it in every Globals Nodes"
9. **Sticky Note14** `stickyNote` — color: "7", width: "1100", height: "380"
10. **Sticky Note15** `stickyNote` — color: "5", width: "4760", height: "2420"
11. **Sticky Note16** `stickyNote` — color: "7", width: "220", height: "440"
12. **Sticky Note17** `stickyNote` — color: "7", width: "1100", height: "220"
13. **Execute Workflow Trigger** `executeWorkflowTrigger` — configured for its default action.
14. **Sticky Note12** `stickyNote` — width: "220", height: "300", content: "## Set Globals
Use Sync Setup Helper Workflow to generate the JSON and paste it in every Globals Nodes"
15. **Sticky Note23** `stickyNote` — color: "7", width: "220", height: "280"
16. **Sticky Note26** `stickyNote` — color: "7", width: "220", height: "240"
17. **Sticky Note27** `stickyNote` — color: "7", width: "1800", height: "760"
18. **Sticky Note28** `stickyNote` — color: "7", width: "1340", height: "900"
19. **Sticky Note29** `stickyNote` — color: "7", width: "440", height: "280"
20. **Sticky Note31** `stickyNote` — color: "7", width: "220", height: "280"
21. **Sticky Note32** `stickyNote` — color: "7", width: "220", height: "280"
22. **Sticky Note33** `stickyNote` — color: "7", width: "220", height: "280"
23. **Sticky Note35** `stickyNote` — color: "5", width: "5880", height: "2160"
24. **Sticky Note36** `stickyNote` — color: "7", width: "220", height: "280"
25. **Sticky Note37** `stickyNote` — color: "7", width: "660", height: "240"
26. **Notion Webhook** `webhook` — method: **POST**, path: `/7e1a4d8a-9cdc-4991-817c-1429ccfbece2`
27. **Sticky Note22** `stickyNote` — color: "7", width: "440", height: "220"
28. **Sticky Note24** `stickyNote` — color: "7", width: "900", height: "300"
29. **Sticky Note25** `stickyNote` — color: "7", width: "900", height: "880"
30. **Sticky Note38** `stickyNote` — color: "7", width: "220", height: "280"
31. **Sticky Note39** `stickyNote` — width: "220", height: "300", content: "## Set Globals
Use Sync Setup Helper Workflow to generate the JSON and paste it in every Globals Nodes"
32. **Sticky Note41** `stickyNote` — color: "7", width: "220", height: "240"
33. **Sticky Note42** `stickyNote` — color: "7", width: "220", height: "280"
34. **Sticky Note43** `stickyNote` — color: "7", width: "220", height: "280"
35. **Sticky Note44** `stickyNote` — color: "7", width: "220", height: "280"
36. **Sticky Note45** `stickyNote` — color: "7", width: "220", height: "280"
37. **Sticky Note46** `stickyNote` — color: "7", width: "660", height: "260"
38. **Sticky Note47** `stickyNote` — color: "7", width: "220", height: "280"
39. **Sticky Note48** `stickyNote` — color: "7", width: "440", height: "280"
40. **Sticky Note5** `stickyNote` — color: "5", width: "5880", height: "1960"
41. **Sticky Note20** `stickyNote` — width: "220", height: "400", content: "## Configure Webhook
Grab the webhook URL and use it in the Notion automation. If using the NotionWebhookEmulator instead, replace this node with the nodes shown below."
42. **Sticky Note7** `stickyNote` — color: "7", width: "220", height: "280"
43. **Sticky Note19** `stickyNote` — color: "7", width: "220", height: "280"
44. **Sticky Note11** `stickyNote` — color: "7", width: "220", height: "280"
45. **Sticky Note13** `stickyNote` — color: "7", width: "1340", height: "580"
46. **Sticky Note6** `stickyNote` — color: "7", width: "220", height: "240"
47. **Sticky Note49** `stickyNote` — color: "7", width: "1020", height: "700"
48. **Sticky Note51** `stickyNote` — color: "7", width: "220", height: "280"
49. **Sticky Note52** `stickyNote` — color: "7", width: "220", height: "280"
50. **Sticky Note53** `stickyNote` — color: "7", width: "220", height: "280"
51. **Sticky Note54** `stickyNote` — color: "7", width: "220", height: "240"
52. **Sticky Note55** `stickyNote` — color: "7", width: "440", height: "240"
53. **Sticky Note56** `stickyNote` — color: "7", width: "220", height: "240"
54. **Sticky Note57** `stickyNote` — color: "7", width: "220", height: "280"
55. **Sticky Note58** `stickyNote` — color: "7", width: "1340", height: "320"
56. **Sticky Note59** `stickyNote` — color: "7", width: "220", height: "260"
57. **Todoist Webhook** `webhook` — method: **POST**, path: `/47b150f3-12a3-4fe9-97cc-5d139daa3b00`
58. **Sticky Note60** `stickyNote` — color: "7", width: "1980", height: "860"
59. **Sticky Note61** `stickyNote` — color: "7", width: "1760", height: "640"
60. **Sticky Note62** `stickyNote` — color: "7", width: "1760", height: "720"
61. **Sticky Note63** `stickyNote` — width: "220", height: "280", content: "## Set Schedule
Set the preferred period. Usually once a day, likely outside working hours should be a solid option."
62. **Sticky Note64** `stickyNote` — color: "7", width: "220", height: "200"
63. **Sticky Note65** `stickyNote` — width: "220", height: "320", content: "## Set mail address
Provide the email address where the report should be sent to. This node can also be replaced by an SMTP or similar node."
64. **Sticky Note66** `stickyNote` — color: "7", width: "660", height: "340"
65. **Sticky Note21** `stickyNote` — width: "220", height: "400", content: "## Register Webhook in Todoist App
Grab the URL from here and add it to the Todosit developer app as described in the setup instructions"
66. **Sticky Note67** `stickyNote` — width: "220", height: "400", content: "## Set project ID and name
The ID can be copied from JSON in Globals Node.
If syncing multiple Todoist projects, use the router described below."
67. **Webhook** `webhook` — path: `/1d758ef5-a9b9-4313-b81e-1c7dfe230a33`
68. **Sticky Note50** `stickyNote` — width: "220", height: "280", content: "### Replace trigger
Use this trigger in the sub-workflows instead"
69. **Sticky Note68** `stickyNote` — width: "220", height: "300", content: "### Register Webhook
Configure this webhook in the Todoist App as mentioned above"
70. **Sticky Note69** `stickyNote` — width: "220", height: "340", content: "### Set project IDs and names
Copy each project ID from the JSON of the different Globals Nodes and name the branches by the projects."
71. **Sticky Note70** `stickyNote` — width: "220", height: "500", content: "### Select sub-workflows
Choose the sub-workflows based on the branch of the Switch Node"
72. **Sticky Note72** `stickyNote` — width: "980", height: "560", content: "# 0. Start here
### Notion
- A database must already exist (get a basic template [here](https://steadfast-banjo-d1f.notion.site/17682b476c848086b002de766879aa71)) with the followin…[truncated]"
73. **Sticky Note2** `stickyNote` — width: "2780", height: "460", content: "# 1. Generate config JSON for Globals Nodes
The sync workflows have a Node named "Globals", which contain mapping information for both Notion and Todoist. This flow helps to genera…[truncated]"
74. **Sticky Note** `stickyNote` — width: "800", height: "680", content: "[redacted]"
75. **Sticky Note3** `stickyNote` — width: "800", height: "680", content: "# 4. Setup Notion Webhook
You can choose from two options and also choose different options for different workspaces, e.g. optionA for a business related workspace and option B for…[truncated]"
76. **Sticky Note1** `stickyNote` — width: "1140", height: "680", content: "# 3. Activate Todoist Webhook
Webhooks are a bit different in Todoist then usual. A Developer App needs to be created and once be connected to via OAuth, to activate the webhook fu…[truncated]"
77. **Sticky Note18** `stickyNote` — color: "7", width: "1320", height: "480"
78. **Sticky Note4** `stickyNote` — color: "7", width: "1320", height: "600"
79. **Sticky Note30** `stickyNote` — color: "7", width: "220", height: "240"
80. **Sticky Note34** `stickyNote` — color: "7", width: "660", height: "240"
81. **Sticky Note40** `stickyNote` — width: "800", height: "380", content: "# 5. Finishing Touches

### Cleanup
Now technically everything is ready, but it is missing better usability and maintainability. So start by moving (cut & paste) the 3 big flows (o…[truncated]"
82. **Get variables** `code` — mode: "runOnceForEachItem", jsCode: "[redacted]"
83. **Get Notion Databases** `notion` — resource: **database**, operation: **getAll**
84. **Generate security token** `crypto` — action: "generate", dataPropertyName: "state"
85. **Notion** `notion` — resource: **databasePage**, operation: **getAll**
86. **Todoist** `todoist` — operation: **getAll**
87. **Globals** `set` — mode: "raw", options: "[object Object]", jsonOutput: "{
  "database_id": "165beaa8f4448063be17d105a9898961",
  "project_id": "2327925123",
  "sections": [
    {"id": "177308158", "name": "Backlog"},
    {"id": "175778849", "name": "In…[truncated]"
88. **Body is array?** `if` — options: "[object Object]", conditions: "[object Object]"
89. **Switch by project** `switch` — rules: "[object Object]", options: "[object Object]", looseTypeValidation: "true"
90. **Switch** `switch` — rules: "[object Object]", options: "[object Object]"
91. **Verify security token** `if` — options: "[object Object]", conditions: "[object Object]"
92. **Prep Dropdown** `code` — jsCode: "let dropDownValues = [];

for (const item of $input.all()) {
  if (item.json.name == "Inbox") continue;
  dropDownValues.push({"option": item.json.name});
}

return { "options": JS…[truncated]"
93. **Store variables** `code` — mode: "runOnceForEachItem", jsCode: "[redacted]"
94. **Map Notion to Todoist** `code` — mode: "runOnceForEachItem", jsCode: "const globals = $('Globals').first().json;
const properties = $json.properties;

let output = {};

output.id = properties['Todoist ID'].rich_text.length > 0 ? 
  properties['Todois…[truncated]"
95. **Pick Todoist Fields** `set` — options: "[object Object]", assignments: "[object Object]"
96. **Split out Notion changes** `splitOut` — options: "[object Object]", fieldToSplitOut: "body"
97. **Todoist trigger reference** `noOp` — configured for its default action.
98. **Execute Workflow** `executeWorkflow` — options: "[object Object]", workflowId: "[object Object]"
99. **Execute Workflow1** `executeWorkflow` — options: "[object Object]", workflowId: "[object Object]"
100. **Exchange Tokens** `httpRequest` — method: **POST**, url: `[redacted]`
101. **Choose Notion Database** `form` — options: "[object Object]", defineForm: "json", jsonOutput: "=[
   {
      "fieldLabel": "Select Notion Database",
      "fieldType": "dropdown",
      "requiredField": true,
      "fieldOptions": {
        "values": {{ $json.options }}
    …[truncated]"
102. **Redirect to Auth Page** `form` — operation: **completion**
103. **Compare Datasets** `compareDatasets` — options: "[object Object]", resolve: "mix", mergeByFields: "[object Object]"
104. **Extract IDs** `set` — options: "[object Object]", assignments: "[object Object]"
105. **Execution Data** `executionData` — dataToSave: "[object Object]"
106. **Globals1** `set` — mode: "raw", options: "[object Object]", jsonOutput: "{
  "database_id": "165beaa8-f444-8063-be17-d105a9898961",
  "project_id": "2327925123",
  "sections": [
    {"id": "177308158", "name": "Backlog"},
    {"id": "175778849", "name":…[truncated]"
107. **Respond with success** `respondToWebhook` — options: "[object Object]", respondWith: "text", responseBody: "=Developer App activated successfully. The window can be closed now."
108. **Respond with error** `respondToWebhook` — options: "[object Object]", respondWith: "text", responseBody: "Something went wrong."
109. **Get Notion Database ID** `code` — jsCode: "let database_id = null;

for (const item of $('Get Notion Databases').all()) {
  if (item.json.name == $('Choose Notion Database').first().json['Select Notion Database']) {
    dat…[truncated]"
110. **Handle empty dates2** `code` — mode: "runOnceForEachItem", jsCode: "// API requires due_string instead of due_datetime when date/time is removed
if ($json.due_datetime === null) {
  delete $json.due_datetime;
  $input.item.json.due_string = "no dat…[truncated]"
111. **Handle empty dates** `code` — mode: "runOnceForEachItem", jsCode: "// API requires due_string instead of due_datetime when date/time is removed
if ($json.due_datetime === null) {
  delete $json.due_datetime;
  $input.item.json.due_string = "no dat…[truncated]"
112. **Notion trigger reference** `noOp` — configured for its default action.
113. **Check if Todoist ID is locked** `redis` — operation: **get**
114. **Get projects** `httpRequest` — url: `https://api.todoist.com/rest/v2/projects`
115. **Add project ID** `set` — options: "[object Object]", assignments: "[object Object]", includeOtherFields: "true"
116. **Update Task in Todoist** `httpRequest` — method: **POST**, url: `=https://api.todoist.com/rest/v2/tasks/{{ $json.id }}`
117. **Globals2** `set` — mode: "raw", options: "[object Object]", jsonOutput: "{
  "database_id": "165beaa8-f444-8063-be17-d105a9898961",
  "project_id": "2327925123",
  "sections": [
    {"id": "177308158", "name": "Backlog"},
    {"id": "175778849", "name":…[truncated]"
118. **Execution Data5** `executionData` — dataToSave: "[object Object]"
119. **Only continue if not locked** `filter` — options: "[object Object]", conditions: "[object Object]"
120. **Prep Dropdown1** `code` — jsCode: "let dropDownValues = [];

for (const item of $input.all()) {
  if (item.json.name == "Inbox") continue;
  dropDownValues.push({"option": item.json.name});
}

return { "options": JS…[truncated]"
121. **If Todoist ID exists** `if` — options: "[object Object]", conditions: "[object Object]"
122. **Status changed** `filter` — options: "[object Object]", conditions: "[object Object]", looseTypeValidation: "true"
123. **Lock Todoist ID2** `redis` — operation: **set**
124. **Prepare summary data** `set` — options: "[object Object]", assignments: "[object Object]"
125. **Check if Notion ID is locked** `redis` — operation: **get**
126. **If event is not :deleted** `if` — options: "[object Object]", conditions: "[object Object]"
127. **Choose Todoist Project** `form` — options: "[object Object]", defineForm: "json", jsonOutput: "=[
   {
      "fieldLabel": "Select Todoist Project",
      "fieldType": "dropdown",
      "requiredField": true,
      "fieldOptions": {
        "values": {{ $json.options }}
    …[truncated]"
128. **Get mapped item1** `set` — options: "[object Object]", assignments: "[object Object]"
129. **Only continue if not locked1** `filter` — options: "[object Object]", conditions: "[object Object]"
130. **Get Notion Task2** `notion` — resource: **databasePage**, operation: **getAll**
131. **Get Todoist Project ID** `code` — jsCode: "let project_id = null;

for (const item of $('Get projects').all()) {
  if (item.json.name == $('Choose Todoist Project').first().json['Select Todoist Project']) {
    project_id =…[truncated]"
132. **Get Notion task** `notion` — resource: **databasePage**, operation: **get**
133. **Notion Task found1** `filter` — options: "[object Object]", conditions: "[object Object]"
134. **Get sections** `httpRequest` — url: `https://api.todoist.com/rest/v2/sections`
135. **Map Notion to Todoist2** `code` — mode: "runOnceForEachItem", jsCode: "const globals = $('Globals2').first().json;
const properties = $('Get Notion task').item.json.properties;

let output = {};

output.project_id = globals.project_id;

output.id = pr…[truncated]"
136. **Execution Data4** `executionData` — dataToSave: "[object Object]"
137. **Generate config** `code` — jsCode: "let sections = [];
for (const item of $('Get sections').all()) {
  sections.push({ id: item.json.id, name: item.json.name }); 
}

return { json: 
{
  "database_id": $('Get Notion D…[truncated]"
138. **Execution Data6** `executionData` — dataToSave: "[object Object]"
139. **Mark as Obsolete in Notion** `notion` — resource: **databasePage**, operation: **update**
140. **Return config JSON** `form` — operation: **completion**
141. **Status is Obsolete?** `if` — options: "[object Object]", conditions: "[object Object]"
142. **Neither focussed nor planned** `if` — options: "[object Object]", conditions: "[object Object]"
143. **Todoist ID exists** `filter` — options: "[object Object]", conditions: "[object Object]", looseTypeValidation: "true"
144. **Todoist ID exists?** `if` — options: "[object Object]", conditions: "[object Object]"
145. **Delete Task in Todoist2** `todoist` — operation: **delete**
146. **Get todoist ID1** `set` — options: "[object Object]", assignments: "[object Object]"

## 💡 AI-Powered Ideas for Improvement
Could not generate AI recommendations at this time.

## 🔧 Setup Instructions
1. **Connect Credentials:** todoistApi, notionApi, redis, gmailOAuth2.
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
