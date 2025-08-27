# Splitout Schedule Create Scheduled
## 🚀 What It Does
Automates a flow using stickyNote×8, jira×5, scheduleTrigger×2.

## 💼 Business Use Case
Great for **content, summarization, triage, or decisioning** where AI adds speed and consistency.

## ⚙️ How It Works
1. **Trigger:** Runs on a **schedule** (e.g., `[object Object]`).
2. **Schedule Trigger** `scheduleTrigger` — rule: "[object Object]"
3. **Embeddings OpenAI** `embeddingsOpenAi` — options: "[object Object]"
4. **Default Data Loader** `documentDefaultDataLoader` — options: "[object Object]", jsonData: "=# {{ $json.title }}
- created {{ $json.created_date }}
- resolved {{ $json.resolution_date }}

## description
{{ $json.description }}", jsonMode: "expressionData"
5. **Recursive Character Text Splitter** `textSplitterRecursiveCharacterTextSplitter` — options: "[object Object]"
6. **Supabase Vector Store** `vectorStoreSupabase` — mode: "retrieve-as-tool", topK: "20", options: "[object Object]"
7. **Embeddings OpenAI1** `embeddingsOpenAi` — options: "[object Object]"
8. **OpenAI Chat Model** `lmChatOpenAi` — model: `[object Object]`
9. **Schedule Trigger1** `scheduleTrigger` — rule: "[object Object]"
10. **Sticky Note** `stickyNote` — color: "7", width: "580", height: "460"
11. **Sticky Note1** `stickyNote` — color: "7", width: "660", height: "660"
12. **Sticky Note2** `stickyNote` — color: "7", width: "500", height: "460"
13. **Sticky Note3** `stickyNote` — color: "7", width: "1380", height: "700"
14. **Sticky Note4** `stickyNote` — color: "7", width: "800", height: "720"
15. **Sticky Note5** `stickyNote` — color: "7", width: "560", height: "480"
16. **OpenAI Chat Model1** `lmChatOpenAi` — model: `[object Object]`
17. **Sticky Note6** `stickyNote` — color: "5", width: "360", height: "120"
18. **Sticky Note7** `stickyNote` — width: "480", height: "1080", content: "## Try it out
### This n8n template builds a simple automation to ensure no JIRA issues go unassigned for more than a week to prevent them falling through the cracks. It uses AI to…[truncated]"
19. **Last 50 Resolved** `jira` — operation: **getAll**
20. **Get Unassigned Tickets more than 5 days** `jira` — operation: **getAll**
21. **Remove Duplicates** `removeDuplicates` — operation: **removeItemsSeenInPreviousExecutions**
22. **Collect Fields** `set` — options: "[object Object]", assignments: "[object Object]"
23. **Issues Similarity Database** `vectorStoreSupabase` — mode: "insert", options: "[object Object]", tableName: "[object Object]"

## 💡 AI-Powered Ideas for Improvement
### Explain
This n8n workflow automates the process of managing unassigned JIRA issues. It regularly checks for issues that have been unassigned for more than five days. Using AI, it identifies team members who have resolved similar issues in the past and assigns them the unassigned issues. This ensures that no task falls through the cracks, leveraging AI to make informed decisions about who should handle each task.

### Demonstrate
A project manager could use this workflow to ensure that all JIRA issues are addressed promptly. By automatically assigning unassigned tasks to the most appropriate team members, it reduces the risk of project delays and ensures efficient task management.

### Imitate
1. Import the workflow into n8n.
2. Connect your JIRA and OpenAI accounts.
3. Customize the JQL queries to match your project settings.
4. Schedule the workflow to run at desired intervals.
5. Test with a few unassigned issues to ensure correct assignment.

### Practice
Create a JIRA project with some unassigned issues. Run the workflow and observe how it assigns the issues to team members based on historical data. Adjust the workflow parameters to see how it affects the assignment logic.

### WIIFM
Mastering this workflow allows you to offer an automated task management service to businesses, enhancing project efficiency and reducing delays. It can be a valuable addition to an AI automation business, attracting clients who need streamlined project management solutions.

## 🔧 Setup Instructions
1. **Connect Credentials:** openAiApi, supabaseApi, jiraSoftwareCloudApi.
2. **Cron/Schedule:** Confirm timezone and cadence; start with a test window (e.g., every 5 minutes) then scale.

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
