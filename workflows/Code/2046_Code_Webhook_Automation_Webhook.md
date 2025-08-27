# Code Webhook Automation Webhook
  ## 🚀 What It Does
  Automates a flow using stickyNote×12, merge×7, set×6.
  
  ## 💼 Business Use Case
  Great for **content, summarization, triage, or decisioning** where AI adds speed and consistency.
  
  ## ⚙️ How It Works
  1. **Trigger:** This workflow starts with **Sticky Note**.
  2. **OpenAI Chat Model** `lmChatOpenAi` — model: `gpt-4-turbo`
3. **Structured Output Parser** `outputParserStructured` — jsonSchemaExample: "{
	"workflow_description": "## Workflow overview\n\n>some additiona info\n\nWorkflow desctiption",
	"nodes_settings": "## Nodes settings\n\n###Node name 1\n\n- Setting 1\n- Setting…[truncated]"
4. **Auto-fixing Output Parser** `outputParserAutofixing` — options: "[object Object]"
5. **single workflow** `webhook` — path: `//:file`
6. **Sticky Note** `stickyNote` — width: "296.5956923076922", height: "277.9529846153844", content: "## Main Docsify webhook
In response, n8n serves the main html page with the [Docsify JS library](https://docsify.js.org/)"
7. **Sticky Note1** `stickyNote` — width: "509.1040245093486", height: "287.9568584558579", content: "## Single page requests
* Docsify may request default pages (i.e. `readme.md` or a `summary.md`)
* GET request for the workflow documentation pages
* POST request for saving manual…[truncated]"
8. **Sticky Note2** `stickyNote` — color: "3", width: "489.50636350106504", height: "462.9720128227216"
9. **Sticky Note3** `stickyNote` — width: "446.67466982248516", height: "309.89805271694365", content: "## Construct main HTML page and send it back to the user
* `HTML_headers` and `HTML_docsify_include` are stored in the CONFIG node for the page simplicity"
10. **Sticky Note4** `stickyNote` — width: "820.1843305645202", height: "307.51990359708003", content: "## Serve main Markdown table with the workflow overview
*NOTE! Here we don't reply with HTML content. Only Markdown elements are sent back and processed by the JS library*
* Create…[truncated]"
11. **Sticky Note5** `stickyNote` — width: "817.6163848212657", height: "288.20835077550953", content: "## Serve left pane content
* Here all workflows are fetched again when `summary.md` file is requested.

It contains Markdown for the left navigation pane: a list of all tags"
12. **Sticky Note6** `stickyNote` — width: "367.8950651848079", height: "262.5093167050718", content: "## Handle missing pages
Serve the Markdown content with the requested file name for edge cases, i.e. any unexpected files"
13. **Sticky Note7** `stickyNote` — color: "6", width: "4161.578473434268", height: "1142.0268674813442"
14. **Sticky Note8** `stickyNote` — width: "652.3100890494833", height: "268.0620091282372", content: "## Custom markdown editor
This is another HTML page for the live Markdown editor
* `Mermaid.js` is supported
* Docsify preview on edit
* Save or Cancel buttons"
15. **Sticky Note9** `stickyNote` — width: "522.870786668288", height: "348.0868581511653", content: "## Save new file
Once the doc page is generated or edited manually, a Markdown files is saved in the directory"
16. **Sticky Note10** `stickyNote` — width: "639.8696984316115", height: "429.7891698152571", content: "## Load existing doc file
Check the existing file when the View or Edit button is pressed
"
17. **Sticky Note11** `stickyNote` — width: "1369.2986733206085", height: "466.42237140646773", content: "## If the file is not available, then:
* either auto-generate new doc
* prepare a basic template for editing"
18. **docsify** `webhook` — path: `/135bc21f-c7d0-4afe-be73-f984d444b43b`
19. **CONFIG** `set` — options: "[object Object]", assignments: "[object Object]", includeOtherFields: "true"
20. **Merge4** `merge` — mode: "combine", options: "[object Object]", combineBy: "combineByPosition"
21. **Merge5** `merge` — mode: "combine", options: "[object Object]", combineBy: "combineByPosition"
22. **Main Page** `html` — html: "<!DOCTYPE html>
<html>
 <head>
{{ $('CONFIG').first().json.HTML_headers }}
 <body>
 <div data-app id="main">Please wait...</div>
 <script>
 
 mermaid.initialize({
 startOnLoad: fal…[truncated]"
23. **file types** `switch` — rules: "[object Object]", options: "[object Object]"
24. **Respond with main page HTML** `respondToWebhook` — options: "[object Object]", respondWith: "text", responseBody: "={{ $json.html }}"
25. **md files** `switch` — rules: "[object Object]", options: "[object Object]"
26. **Get All Workflows** `n8n` — filters: "[object Object]", requestOptions: "[object Object]"
27. **doc action** `switch` — rules: "[object Object]", options: "[object Object]"
28. **Get Workflow tags** `n8n` — filters: "[object Object]", requestOptions: "[object Object]"
29. **No Operation, do nothing** `noOp` — configured for its default action.
30. **Sort-workflows** `sort` — options: "[object Object]", sortFieldsUi: "[object Object]"
31. **mkdir** `executeCommand` — command: "=mkdir -p {{$('CONFIG').first().json.project_path}}"
32. **Load Doc File** `readWriteFile` — options: "[object Object]", fileSelector: "={{ $('CONFIG').first().json.project_path }}/{{ $json.params.file }}"
33. **Passthrough** `noOp` — configured for its default action.
34. **Empty Set** `set` — options: "[object Object]"
35. **Edit Fields** `set` — options: "[object Object]", assignments: "[object Object]", includeOtherFields: "true"
36. **Workflow Tags** `html` — html: "- **Click to filter by tag:**
{{ [...new Set($jmespath($input.all(),'[].json.tags[].name'))].map(tag => `- [${tag}](tag-${encodeURIComponent(tag)})`).join('\n') }}"
37. **Fallback file name** `html` — html: "> File: {{ $json.params.file }}"
38. **Fill Workflow Table** `set` — options: "[object Object]", assignments: "[object Object]"
39. **Merge1** `merge` — mode: "chooseBranch"
40. **Instance overview** `html` — html: "# Your n8n instance workflows:

| Workflow | Status | Docs | Created | Updated | Nodes | Triggers |
|----------|:------:|------|---------|---------|-------|----------|
{{ $jmespath…[truncated]"
41. **HasFile?** `if` — options: "[object Object]", conditions: "[object Object]"
42. **Extract from File** `extractFromFile` — operation: **text**
43. **Fetch Single Workflow1** `n8n` — operation: **get**
44. **Merge3** `merge` — mode: "combine", options: "[object Object]", combineBy: "combineByPosition"
45. **Generate Mermaid Chart** `code` — jsCode: "const workflow = $input.first().json;

// Extract nodes from the workflow
const nodes = workflow.nodes || [];

// Node types to exclude
const excludedNodeTypes = ['n8n-nodes-base.s…[truncated]"
46. **Merge** `merge` — mode: "combine", options: "[object Object]", combineBy: "combineByPosition"
47. **Is Action Edit?1** `if` — options: "[object Object]", conditions: "[object Object]"
48. **Blank Doc File** `set` — options: "[object Object]", assignments: "[object Object]", includeOtherFields: "true"
49. **Basic LLM Chain** `chainLlm` — text: "=Here's the workflow data:
{{Object.assign(
 Object.fromEntries(Object.entries($json).filter(([key]) => !['staticData', 'pinData'].includes(key))),
 {nodes: $json.nodes.map(node =>…[truncated]", messages: "[object Object]", promptType: "define"
50. **Merge2** `merge` — mode: "combine", options: "[object Object]", combineBy: "combineByPosition"
51. **Generated Doc** `set` — options: "[object Object]", assignments: "[object Object]"
52. **Convert to File** `convertToFile` — operation: **toText**
53. **Is Action Edit?2** `if` — options: "[object Object]", conditions: "[object Object]"
54. **Save New Doc File** `readWriteFile` — operation: **write**
55. **Edit Page** `html` — html: "<!DOCTYPE html>
<html>
 <head>
{{ $('CONFIG').first().json.HTML_headers }}
{{ $('CONFIG').first().json.HTML_styles_editor }}
 </head>
 <body>
 <div class="container">
 <div class="…[truncated]"
56. **Workflow md content** `html` — html: "{{ $json.workflowdata }}"
57. **Merge6** `merge` — mode: "chooseBranch", useDataOfInput: "2"
58. **Respond with HTML** `respondToWebhook` — options: "[object Object]", respondWith: "text", responseBody: "={{ $json.html }}"
59. **Respond with markdown** `respondToWebhook` — options: "[object Object]", respondWith: "text", responseBody: "={{ $json.html }}"
60. **Is Action Save?** `if` — options: "[object Object]", conditions: "[object Object]"
61. **Respond OK on Save** `respondToWebhook` — options: "[object Object]", respondWith: "noData"
  
  ## 💡 AI-Powered Ideas for Improvement
  **Explain**  
This n8n workflow is designed to manage and generate documentation for other workflows using Docsify, a JavaScript library for creating documentation websites. It starts by serving the main HTML page for Docsify, processes requests for documentation pages (Markdown files), and allows editing or creating new documentation files. The workflow retrieves workflow data, generates documentation using OpenAI's GPT-4 model, and provides a live Markdown editor for manual edits. The system auto-generates documentation if it doesn't exist, ensuring all workflows are documented.

**Demonstrate**  
A software company could use this workflow to automate the documentation of new workflows created by developers, ensuring consistency and saving time. By generating initial documentation automatically, the company can reduce the burden on developers and maintain up-to-date records.

**Imitate**  
1. Import the workflow into n8n.  
2. Configure the `CONFIG` node with the correct project path and instance URL.  
3. Set up the Docsify webhook paths.  
4. Test by requesting a documentation page or editing an existing one.  
5. Customize the Markdown templates as needed for your documentation style.

**Practice**  
Create a simple n8n workflow, then use this Docsify workflow to generate its documentation. Edit the generated Markdown file using the live editor and save it. Check how the documentation updates in the Docsify interface.

**WIIFM**  
Mastering this workflow allows you to offer automated documentation services, enhancing workflow management for clients. It saves time, ensures consistency, and can be a valuable addition to your automation business, potentially increasing your service offerings and client satisfaction.
  
  ## 🔧 Setup Instructions
  1. **Connect Credentials:** n8nApi, openAiApi.
  
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
  