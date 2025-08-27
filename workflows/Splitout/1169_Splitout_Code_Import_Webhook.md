# Splitout Code Import Webhook
## 🚀 What It Does
Automates a flow using stickyNote×21, code×8, form×7.

## 💼 Business Use Case
Use as a **glue/API broker**: receive data, enrich/validate via APIs, and pass to downstream systems.

## ⚙️ How It Works
1. **Trigger:** This workflow starts with **On form submission**.
2. **Sticky Note6** `stickyNote` — width: "216.47293010628914", height: "255.86856541619233", content: "[redacted]"
3. **Sticky Note2** `stickyNote` — color: "5", width: "535.6419634856759", height: "223.19907940161124"
4. **Sticky Note7** `stickyNote` — color: "7", width: "216.47293010628914", height: "255.86856541619233"
5. **Sticky Note8** `stickyNote` — color: "7", width: "216.47293010628914", height: "255.86856541619233"
6. **Sticky Note9** `stickyNote` — color: "7", width: "216.47293010628914", height: "294.9905826938254"
7. **On form submission** `formTrigger` — options: "[object Object]", formTitle: "Workflow Import", formFields: "[object Object]"
8. **Sticky Note10** `stickyNote` — color: "7", width: "216.47293010628914", height: "255.86856541619233"
9. **Sticky Note11** `stickyNote` — color: "7", width: "216.47293010628914", height: "416.4415465717213"
10. **Sticky Note** `stickyNote` — color: "7", width: "435.59135570107514", height: "255.86856541619233"
11. **Sticky Note12** `stickyNote` — color: "7", width: "656.1389569291234", height: "255.86856541619233"
12. **Sticky Note13** `stickyNote` — color: "7", width: "216.47293010628914", height: "255.86856541619233"
13. **Sticky Note14** `stickyNote` — color: "7", width: "875.9451799951569", height: "216.1478580797073"
14. **Sticky Note15** `stickyNote` — color: "7", width: "216.47293010628914", height: "416.4415465717213"
15. **Sticky Note16** `stickyNote` — color: "7", width: "216.47293010628914", height: "255.86856541619233"
16. **Sticky Note17** `stickyNote` — color: "7", width: "875.6296366281999", height: "257.0479807900252"
17. **Sticky Note18** `stickyNote` — color: "7", width: "216.47293010628914", height: "255.86856541619233"
18. **Sticky Note19** `stickyNote` — color: "7", width: "216.47293010628914", height: "255.86856541619233"
19. **Sticky Note20** `stickyNote` — color: "7", width: "216.47293010628914", height: "456.12289999575364"
20. **Sticky Note21** `stickyNote` — color: "7", width: "435.95830414662703", height: "276.068565416192"
21. **Sticky Note22** `stickyNote` — color: "7", width: "435.95830414662703", height: "276.068565416192"
22. **Sticky Note23** `stickyNote` — color: "7", width: "216.47293010628914", height: "275.841854198618"
23. **Sticky Note24** `stickyNote` — color: "7", width: "216.47293010628914", height: "456.12289999575364"
24. **Determine Workflow Source** `if` — options: "[object Object]", conditions: "[object Object]"
25. **Upload File** `form` — options: "[object Object]", formFields: "[object Object]"
26. **Settings** `set` — options: "[object Object]", assignments: "[object Object]"
27. **Extract from File** `extractFromFile` — operation: **fromJson**
28. **Generate Instance Options** `code` — jsCode: "dropDownValues = [];

for (const instance of $input.first().json.remoteInstances) {
  dropDownValues.push({"option": instance.name});
}

return { "options": JSON.stringify(dropDown…[truncated]"
29. **Choose Instance** `form` — options: "[object Object]", defineForm: "json", jsonOutput: "=[
   {
      "fieldLabel": "Source",
      "fieldType": "dropdown",
      "requiredField": true,
      "fieldOptions": {
        "values": {{ $json.options }}
      }
   }
]"
30. **Prepare Request Data** `code` — jsCode: "output = {};

for (const instance of $('Settings').first().json.remoteInstances) {
  if (instance.name == $('Choose Instance').first().json.Source) {
    output.instance = instance…[truncated]"
31. **Get Workflows** `httpRequest` — url: `={{ $json.instance.baseUrl }}/workflows`
32. **Split Out Workflows** `splitOut` — options: "[object Object]", fieldToSplitOut: "data"
33. **Error** `form` — operation: **completion**
34. **Sort by updatedAt DESC** `sort` — options: "[object Object]", sortFieldsUi: "[object Object]"
35. **Get Workflow Names** `code` — jsCode: "dropDownValues = [];

for (const workflow of $input.all()) {
  dropDownValues.push({"option": workflow.json.name});
}

return { "options": JSON.stringify(dropDownValues) };"
36. **Choose Workflow** `form` — options: "[object Object]", defineForm: "json", jsonOutput: "=[
   {
      "fieldLabel": "Workflow",
      "fieldType": "dropdown",
      "requiredField": true,
      "fieldOptions": {
        "values": {{ $json.options }}
      }
   }
]"
37. **Get Selected Workflow** `code` — jsCode: "for (const workflow of $('Get Workflows').first().json.data) {
  if (workflow.name == $input.first().json.Workflow) {
    
    return { "workflowData": workflow };
  }
}

return fa…[truncated]"
38. **Export Credentials** `executeCommand` — command: "n8n export:credentials --all --pretty --decrypted --output=/tmp/cred"
39. **No Operation** `noOp` — configured for its default action.
40. **Get Credentials Data** `readWriteFile` — options: "[object Object]", fileSelector: "/tmp/cred"
41. **Binary to JSON** `extractFromFile` — operation: **fromJson**
42. **Rename Keys** `renameKeys` — keys: "[object Object]", additionalOptions: "[object Object]"
43. **Merge** `merge` — mode: "combine", options: "[object Object]", combineBy: "combineByPosition"
44. **No Operation1** `noOp` — configured for its default action.
45. **Split Out Nodes** `splitOut` — options: "[object Object]", fieldToSplitOut: "workflowData.nodes"
46. **Filter Out Nodes Having Credentials** `filter` — options: "[object Object]", conditions: "[object Object]"
47. **Extract Credentials** `set` — options: "[object Object]", assignments: "[object Object]"
48. **Remove Duplicate Credentials by Name** `removeDuplicates` — compare: "selectedFields", options: "[object Object]", fieldsToCompare: "name"
49. **Generate Credential Options** `code` — jsCode: "function capitalizeFirstLetter(val) {
    return String(val).charAt(0).toUpperCase() + String(val).slice(1);
}

formOptions = [];
for (const item of $input.all()) {
  dropDownValue…[truncated]"
50. **Map Credentials** `form` — options: "[object Object]", defineForm: "json", jsonOutput: "={{ $json.options }}"
51. **Get Missing Credentials** `code` — jsCode: "[redacted]"
52. **Get Selected Credentials** `code` — jsCode: "function capitalizeFirstLetter(val) {
    return String(val).charAt(0).toUpperCase() + String(val).slice(1);
}

let missingCredentials = [];
for (const credential of $('Remove Dupl…[truncated]"
53. **Create Empty Credentials** `n8n` — resource: **credential**
54. **Add Old Names** `set` — options: "[object Object]", assignments: "[object Object]", includeOtherFields: "true"
55. **Collect Credentials to Replace** `merge` — configured for its default action.
56. **Replace Credentials in Workflow** `code` — jsCode: "// Loop over input items and add a new field called 'myNewField' to the JSON of each one
let workflowData = $('Merge').first().json.workflowData;
for (const credential of $input.al…[truncated]"
57. **Create Workflow** `n8n` — operation: **create**
58. **Success** `form` — operation: **completion**
59. **Error1** `form` — operation: **completion**

## 💡 AI-Powered Ideas for Improvement
### Explain
This n8n workflow is designed to import workflows from a file or a remote n8n instance. It starts by determining the source of the workflow, either a file upload or a remote instance. If it's a file, it extracts the workflow data. If it's a remote instance, it retrieves available workflows from the specified n8n instance. The user then selects a workflow to import. The workflow includes steps to manage credentials, ensuring any required credentials are imported or created. It finally creates the imported workflow in the current n8n instance, providing feedback on the process's success or failure.

### Demonstrate
A developer managing multiple n8n instances can use this workflow to streamline the process of importing workflows from a test environment to production, ensuring consistency and reducing manual errors during deployment.

### Imitate
1. Import the workflow into your n8n instance.
2. Set up your instances in the "Settings" node with names, API keys, and base URLs.
3. Trigger the workflow and select the source (file or remote).
4. Follow the prompts to select and import a workflow.
5. Verify the imported workflow and credentials in your n8n instance.

### Practice
Set up a test n8n instance with a few sample workflows. Use this workflow to import one of these workflows into your main n8n instance. Modify a workflow in the test instance and re-import it to see how changes are handled.

### WIIFM
Mastering this workflow allows you to efficiently manage and migrate workflows across multiple n8n instances, enhancing your automation offerings. This capability is vital for businesses needing reliable deployment processes, making you a valuable asset in automation consulting or service delivery.

## 🔧 Setup Instructions
1. **Connect Credentials:** n8nApi.
2. **API Contracts:** Validate required headers and 2xx/4xx handling; add retries for 429/5xx.

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
