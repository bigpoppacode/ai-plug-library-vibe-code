# Splitout Redis Create Triggered

## 🚀 What It Does
This workflow automates a process involving set, executeWorkflowTrigger, switch.

## 💼 Business Use Case
Use it to automate research, content creation, or data analysis. It saves hours of manual work.

## ⚙️ How It Works
1.  **Trigger:** This workflow starts with a **When Executed by Another Workflow** node.
2. **Step 1: Simplify Workflows (set)** - This step performs a key action in the workflow.
3. **Step 2: When Executed by Another Workflow (executeWorkflowTrigger)** - This step performs a key action in the workflow.
4. **Step 3: Operations (switch)** - This step performs a key action in the workflow.
5. **Step 4: Get MCP-tagged Workflows (n8n)** - This step performs a key action in the workflow.
6. **Step 5: Filter Matching Ids (filter)** - This step performs a key action in the workflow.
7. **Step 6: Store In Memory (redis)** - This step performs a key action in the workflow.
8. **Step 7: AddTool Success (set)** - This step performs a key action in the workflow.
9. **Step 8: AddTool Error (set)** - This step performs a key action in the workflow.
10. **Step 9: Get Memory (redis)** - This step performs a key action in the workflow.
11. **Step 10: Split Out (splitOut)** - This step performs a key action in the workflow.
12. **Step 11: Filter Matching IDs (filter)** - This step performs a key action in the workflow.
13. **Step 12: Store In Memory1 (redis)** - This step performs a key action in the workflow.
14. **Step 13: Remove Tool Success (set)** - This step performs a key action in the workflow.
15. **Step 14: Convert to JSON (set)** - This step performs a key action in the workflow.
16. **Step 15: listTools Success (set)** - This step performs a key action in the workflow.
17. **Step 16: Get MCP-tagged Workflows1 (n8n)** - This step performs a key action in the workflow.
18. **Step 17: Simplify Workflows1 (set)** - This step performs a key action in the workflow.
19. **Step 18: listTools Success1 (aggregate)** - This step performs a key action in the workflow.
20. **Step 19: Get Parameters (set)** - This step performs a key action in the workflow.
21. **Step 20: executeTool Result (aggregate)** - This step performs a key action in the workflow.
22. **Step 21: AI Agent (agent)** - This step performs a key action in the workflow.
23. **Step 22: When chat message received (chatTrigger)** - This step performs a key action in the workflow.
24. **Step 23: MCP Client (mcpClientTool)** - This step performs a key action in the workflow.
25. **Step 24: Simple Memory (memoryBufferWindow)** - This step performs a key action in the workflow.
26. **Step 25: Convert to JSON1 (set)** - This step performs a key action in the workflow.
27. **Step 26: Has Workflow Available? (if)** - This step performs a key action in the workflow.
28. **Step 27: ExecuteTool Error (set)** - This step performs a key action in the workflow.
29. **Step 28: Workflow Exists? (if)** - This step performs a key action in the workflow.
30. **Step 29: N8N Workflows MCP Server (mcpTrigger)** - This step performs a key action in the workflow.
31. **Step 30: Add Workflow (toolWorkflow)** - This step performs a key action in the workflow.
32. **Step 31: RemoveWorkflow (toolWorkflow)** - This step performs a key action in the workflow.
33. **Step 32: List Workflows (toolWorkflow)** - This step performs a key action in the workflow.
34. **Step 33: SearchWorkflows (toolWorkflow)** - This step performs a key action in the workflow.
35. **Step 34: ExecuteWorkflow (toolWorkflow)** - This step performs a key action in the workflow.
36. **Step 35: Sticky Note (stickyNote)** - This step performs a key action in the workflow.
37. **Step 36: Execute Workflow with PassThrough Variables (executeWorkflow)** - This step performs a key action in the workflow.
38. **Step 37: Sticky Note1 (stickyNote)** - This step performs a key action in the workflow.
39. **Step 38: Sticky Note2 (stickyNote)** - This step performs a key action in the workflow.
40. **Step 39: OpenAI Chat Model (lmChatOpenAi)** - This step performs a key action in the workflow.
41. **Step 40: Is Empty Array? (if)** - This step performs a key action in the workflow.
42. **Step 41: Delete Key (redis)** - This step performs a key action in the workflow.
43. **Step 42: Sticky Note3 (stickyNote)** - This step performs a key action in the workflow.
44. **Step 43: Sticky Note4 (stickyNote)** - This step performs a key action in the workflow.
45. **Step 44: Sticky Note5 (stickyNote)** - This step performs a key action in the workflow.
46. **Step 45: Sticky Note6 (stickyNote)** - This step performs a key action in the workflow.
47. **Step 46: Sticky Note7 (stickyNote)** - This step performs a key action in the workflow.

## 💡 AI-Powered Ideas for Improvement
### Explain
This n8n workflow automates the management of workflows by allowing users to execute, add, list, or remove workflows based on specific operations. It uses triggers, filters, and memory storage to efficiently handle workflow data.

### Demonstrate
A consultant might use this workflow to manage multiple client projects efficiently. When a new project starts, they can automatically add relevant workflows to their system, allowing for quick execution and tracking without manual input.

### Imitate
1. Create a new n8n workflow.
2. Add a "When Executed by Another Workflow" trigger.
3. Use a "Switch" node to define operations (add, remove, list).
4. Integrate Redis to store and retrieve workflow IDs.
5. Set up actions (add, remove, list) based on the operation chosen.

### Practice
Experiment by modifying the workflow to include an additional operation, like "updateWorkflow." Observe how this impacts the existing workflow logic and test its functionality.

### WIIFM
Mastering this workflow can help you provide valuable automation services to clients, streamline operations, and create scalable systems, ultimately leading to increased revenue and efficiency for your business.

## 🔧 Setup Instructions
1. **Connect Credentials:** OpenAI, Google Sheets, Slack, and other nodes must be authenticated.
2. **Customize Core Logic:** Review "Simplify Workflows" and "Sticky Note7" for IDs, table names, and URLs.
3. **Activate the Workflow:** Set the workflow to "Active" after testing.

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
