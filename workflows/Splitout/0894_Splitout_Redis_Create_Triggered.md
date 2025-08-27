# Splitout Redis Create Triggered
## 🚀 What It Does
Automates a flow using set×10, stickyNote×8, toolWorkflow×5.

## 💼 Business Use Case
Great for **content, summarization, triage, or decisioning** where AI adds speed and consistency.

## ⚙️ How It Works
1. **Trigger:** This workflow starts with **When Executed by Another Workflow**.
2. **When Executed by Another Workflow** `executeWorkflowTrigger` — workflowInputs: "[object Object]"
3. **When chat message received** `chatTrigger` — options: "[object Object]"
4. **MCP Client** `mcpClientTool` — sseEndpoint: "=<Production URL of MCP Server>"
5. **Simple Memory** `memoryBufferWindow` — contextWindowLength: "30"
6. **N8N Workflows MCP Server** `mcpTrigger` — path: `/4625bcf4-0dd9-4562-a70f-6fee41f6f12d`
7. **Add Workflow** `toolWorkflow` — name: "addWorkflow", workflowId: "[object Object]", description: "Adds one or more workflows by ID to the available pool of workflows for the agent. You can get a list of workflows by calling the listTool tool."
8. **RemoveWorkflow** `toolWorkflow` — name: "removeWorkflow", workflowId: "[object Object]", description: "Removes one or more workflows by ID from the available pool of workflows for the agent."
9. **List Workflows** `toolWorkflow` — name: "listTool", workflowId: "[object Object]", description: "Lists the available pool of workflows for the agent."
10. **SearchWorkflows** `toolWorkflow` — name: "searchTool", workflowId: "[object Object]", description: "Returns all workflows which can be added to the pool of available workflows for the agent."
11. **ExecuteWorkflow** `toolWorkflow` — name: "executeTool", workflowId: "[object Object]", description: "Executes a workflow which has been added to the pool of available workflows for the agent."
12. **Sticky Note** `stickyNote` — color: "7", width: "720", height: "740"
13. **Sticky Note1** `stickyNote` — color: "7", width: "740", height: "300"
14. **Sticky Note2** `stickyNote` — color: "7", width: "1160", height: "600"
15. **OpenAI Chat Model** `lmChatOpenAi` — model: `[object Object]`
16. **Sticky Note3** `stickyNote` — color: "7", width: "740", height: "560"
17. **Sticky Note4** `stickyNote` — color: "5", width: "320", height: "400"
18. **Sticky Note5** `stickyNote` — width: "600", height: "1440", content: "## Try it out!
### This n8n template shows you how to create an MCP server out of your existing n8n workflows. With this, any MCP client connected can get more done with powerful e…[truncated]"
19. **Sticky Note6** `stickyNote` — color: "5", width: "380", height: "120"
20. **Sticky Note7** `stickyNote` — height: "440", content: "














### 🚨 Ensure this node does not set the input schema!
For passthrough parameters to work, this node should not make available input schema fields. ie. the input fie…[truncated]"
21. **Get Memory** `redis` — operation: **get**
22. **AI Agent** `agent` — options: "[object Object]"
23. **Operations** `switch` — rules: "[object Object]", options: "[object Object]"
24. **Get MCP-tagged Workflows** `n8n` — filters: "[object Object]", requestOptions: "[object Object]"
25. **Convert to JSON** `set` — options: "[object Object]", assignments: "[object Object]"
26. **listTools Success** `set` — options: "[object Object]", assignments: "[object Object]"
27. **Get MCP-tagged Workflows1** `n8n` — filters: "[object Object]", requestOptions: "[object Object]"
28. **Convert to JSON1** `set` — options: "[object Object]", assignments: "[object Object]"
29. **Filter Matching Ids** `filter` — options: "[object Object]", conditions: "[object Object]"
30. **Split Out** `splitOut` — options: "[object Object]", fieldToSplitOut: "data"
31. **Simplify Workflows1** `set` — options: "[object Object]", assignments: "[object Object]"
32. **Has Workflow Available?** `if` — options: "[object Object]", conditions: "[object Object]"
33. **Workflow Exists?** `if` — options: "[object Object]", conditions: "[object Object]"
34. **Filter Matching IDs** `filter` — options: "[object Object]", conditions: "[object Object]"
35. **listTools Success1** `aggregate` — options: "[object Object]", aggregate: "aggregateAllItemData", destinationFieldName: "response"
36. **Get Parameters** `set` — mode: "raw", options: "[object Object]", jsonOutput: "={{ $('When Executed by Another Workflow').first().json.parameters }}"
37. **ExecuteTool Error** `set` — options: "[object Object]", assignments: "[object Object]"
38. **Simplify Workflows** `set` — options: "[object Object]", assignments: "[object Object]"
39. **AddTool Error** `set` — options: "[object Object]", assignments: "[object Object]"
40. **Is Empty Array?** `if` — options: "[object Object]", conditions: "[object Object]"
41. **Execute Workflow with PassThrough Variables** `executeWorkflow` — options: "[object Object]", workflowId: "[object Object]", workflowInputs: "[object Object]"
42. **Store In Memory** `redis` — operation: **set**
43. **Delete Key** `redis` — operation: **delete**
44. **Store In Memory1** `redis` — operation: **set**
45. **executeTool Result** `aggregate` — options: "[object Object]", aggregate: "aggregateAllItemData", destinationFieldName: "response"
46. **AddTool Success** `set` — options: "[object Object]", assignments: "[object Object]"
47. **Remove Tool Success** `set` — options: "[object Object]", assignments: "[object Object]"

## 💡 AI-Powered Ideas for Improvement
- **Explain:** This n8n workflow acts as a dynamic server for managing and executing workflows. It allows users to add, remove, list, search, and execute workflows based on specific conditions. It uses Redis for memory management and incorporates AI for enhanced functionality.

- **Demonstrate:** A consultant could use this workflow to manage multiple client workflows efficiently, automating the process of switching between different automation tasks based on real-time needs or client requests.

- **Imitate:** Import the workflow into n8n. Set up your Redis database and configure the MCP server URL. Use the `Add Workflow` and `Remove Workflow` nodes to manage available workflows. Test by sending commands to add, list, or execute workflows.

- **Practice:** Create a simple test workflow with a few nodes and tag it for MCP use. Use this main workflow to add your test workflow, list available workflows, and then execute the test workflow to see the process in action.

- **WIIFM:** Mastering this workflow can position you as an automation expert, offering dynamic workflow management solutions to clients. It enhances your service offerings, enabling you to handle complex automation needs efficiently, thus increasing your potential income and client satisfaction.

## 🔧 Setup Instructions
1. **Connect Credentials:** n8nApi, redis, openAiApi.

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
