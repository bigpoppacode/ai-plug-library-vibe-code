# Stopanderror Webhook Create Webhook
## 🚀 What It Does
Automates a flow using stickyNote×9, nextCloud×6, if×4.

## 💼 Business Use Case
Use to eliminate manual copy-paste and standardize a recurring business process.

## ⚙️ How It Works
1. **Trigger:** This workflow starts with **When clicking "Execute Workflow"**.
2. **When clicking "Execute Workflow"** `manualTrigger` — configured for its default action.
3. **Sticky Note** `stickyNote` — width: "1861.9238476953906", height: "665.3466933867735", content: "## Get all files of subfolders
In this segment of the workflow, all files located within subfolders are collected. This includes the exploration of subfolders within subfolders, en…[truncated]"
4. **Sticky Note1** `stickyNote` — width: "695.2464929859717", height: "660.1721006751914", content: "## Enrich the files
In this phase of the workflow, all identified files are processed and enriched with the correct path within the destination structure."
5. **Sticky Note2** `stickyNote` — width: "695.2464929859717", height: "658.7966837968969", content: "## Move files 
In this stage of the workflow, the files are moved into the destination structure.

If the batch size remains at 1 in the Loop Over node, each file will be moved seq…[truncated]"
6. **Sticky Note3** `stickyNote` — width: "695.2464929859717", height: "658.7966837968969", content: "## (Optional) Delete *from*-folder
"
7. **Sticky Note4** `stickyNote` — width: "871.7450543093198", height: "665.3466933867735", content: "## Get the files and subfolders to move
In this segment of the workflow, all files and subfolders to be relocated are gathered. Additionally, the destination folder is created if i…[truncated]"
8. **Sticky Note5** `stickyNote` — width: "723.2756594453772", height: "463.596247600301", content: "## Manual Start
To manually initiate the workflow, the Set Paths node requires the specification of the folder path to be moved and the destination folder path. Subfolders can be i…[truncated]"
9. **Webhook** `webhook` — method: **POST**, path: `/285b2cba-587b-4131-82a8-cdd35a8d49e1`
10. **Sticky Note6** `stickyNote` — width: "723.2756594453772", height: "500.9028666051119", content: "## Webhook trigger
You can also automate the workflow by configuring a webhook to trigger it. It is crucial that each request contains a JSON body with at least the two attributes …[truncated]"
11. **Sticky Note7** `stickyNote` — width: "723.2756594453772", height: "498.6039613328509", content: "## Trigger by other workflow
It is also possible to initiate this workflow from within another workflow. It is important to ensure that at least the 'from-path' and 'to-path' are p…[truncated]"
12. **Execute Workflow Trigger** `executeWorkflowTrigger` — configured for its default action.
13. **Sticky Note8** `stickyNote` — width: "770.5015081009478", height: "1247.9320267653952", content: "# Template Description


## Description:
This template facilitates the transfer of a folder, along with all its files and subfolders, within a Nextcloud instance. The Nextcloud use…[truncated]"
14. **Set paths** `set` — fields: "[object Object]", options: "[object Object]"
15. **Whether the request is valid** `if` — conditions: "[object Object]"
16. **Whether the request is valid1** `if` — conditions: "[object Object]"
17. **Stop and Error: request not valid** `stopAndError` — errorMessage: "The Request is not valid!"
18. **Set folder-paths for from and to** `set` — fields: "[object Object]", options: "[object Object]"
19. **Stop and Error: request not valid1** `stopAndError` — errorMessage: "The Request is not valid!"
20. **Create to folder if necessary** `nextCloud` — resource: **folder**, path: `/={{ $json.to }}`
21. **Get all folders/files in from-folder** `nextCloud` — resource: **folder**, operation: **list**, path: `/={{ $('Set folder-paths for from and to').item.json.from }}`

## 💡 AI-Powered Ideas for Improvement
Could not generate AI recommendations at this time.

## 🔧 Setup Instructions
1. **Connect Credentials:** nextCloudApi.

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
