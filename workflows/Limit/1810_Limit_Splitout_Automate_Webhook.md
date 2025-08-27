# Limit Splitout Automate Webhook
  ## 🚀 What It Does
  Calls external APIs and uses **AI** to transform or decide, then routes the result downstream.
  
  ## 💼 Business Use Case
  Use as a **glue/API broker**: receive data, enrich/validate via APIs, and pass to downstream systems.
  
  ## ⚙️ How It Works
  1. **Trigger:** This workflow starts with **When Executed by Another Workflow**.
  2. **gpt-4o-mini** `lmChatOpenAi` — model: `[object Object]`
3. **When Executed by Another Workflow** `executeWorkflowTrigger` — inputSource: "jsonExample", jsonExample: "{
  "query": 
    {
      "username": 
      "joe"
    }
}"
4. **When chat message received** `chatTrigger` — options: "[object Object]"
5. **Workflow Tool** `toolWorkflow` — name: "n8n_creator_stats", workflowId: "={{ $workflow.id }}", description: "Call this tool to get n8n Creator Stats."
6. **Sticky Note** `stickyNote` — color: "6", width: "620", height: "320"
7. **Sticky Note1** `stickyNote` — width: "260", height: "280", content: "## Tool Call for n8n Creators Stats"
8. **Sticky Note2** `stickyNote` — color: "5", width: "300", height: "460"
9. **Ollama Chat Model** `lmChatOllama` — options: "[object Object]"
10. **Sticky Note3** `stickyNote` — color: "7", width: "540", height: "320"
11. **Sticky Note4** `stickyNote` — color: "4", width: "320", height: "340"
12. **Sticky Note5** `stickyNote` — width: "300", height: "320", content: "## Global Workflow Variables

"
13. **Sticky Note6** `stickyNote` — color: "3", width: "780", height: "640"
14. **Sticky Note7** `stickyNote` — color: "6", width: "1120", height: "300"
15. **Sticky Note8** `stickyNote` — color: "4", width: "1120", height: "300"
16. **Sticky Note9** `stickyNote` — width: "480", height: "320", content: "## Filter by n8n Creator Username"
17. **Sticky Note10** `stickyNote` — color: "7", width: "2510", height: "1120"
18. **Sticky Note11** `stickyNote` — color: "7", width: "280", height: "560"
19. **Sticky Note12** `stickyNote` — color: "2", width: "1000", height: "1000"
20. **Window Buffer Memory** `memoryBufferWindow` — configured for its default action.
21. **Sticky Note13** `stickyNote` — color: "3", width: "280", height: "280"
22. **Sticky Note14** `stickyNote` — width: "480", height: "980", content: "# Quick Start Guide for the n8n Creators Leaderboard Workflow

## Prerequisites
- Ensure your n8n instance is running.
- Verify that the GitHub base URL and file variables (for cre…[truncated]"
23. **Sticky Note15** `stickyNote` — width: "480", height: "940", content: "# Why Use the n8n Creators Leaderboard Workflow?

## Benefits
This workflow provides valuable insights into the n8n community by analyzing and presenting detailed statistics about …[truncated]"
24. **Global Variables** `set` — options: "[object Object]", assignments: "[object Object]"
25. **n8n Creator Stats Agent** `agent` — text: "={{ $json.chatInput }}", options: "[object Object]", promptType: "define"
26. **stats_aggregate_creators** `httpRequest` — url: `={{ $json.path }}{{ $json['creators-filename'] }}.json`
27. **stats_aggregate_workflows** `httpRequest` — url: `={{ $json.path }}{{ $json['workflows-filename'] }}.json`
28. **Summary Report** `set` — options: "[object Object]", assignments: "[object Object]"
29. **creator-summary** `convertToFile` — operation: **toText**
30. **Parse Creators Data** `set` — options: "[object Object]", assignments: "[object Object]"
31. **Parse Workflow Data** `set` — options: "[object Object]", assignments: "[object Object]"
32. **Save creator-summary.md** `readWriteFile` — operation: **write**
33. **Split Out Creators** `splitOut` — options: "[object Object]", fieldToSplitOut: "data"
34. **Split Out Workflows** `splitOut` — options: "[object Object]", fieldToSplitOut: "data"
35. **Sort By Top Weekly Creator Inserts** `sort` — options: "[object Object]", sortFieldsUi: "[object Object]"
36. **Sort By Top Weekly Workflow Inserts** `sort` — options: "[object Object]", sortFieldsUi: "[object Object]"
37. **Take Top 25 Creators** `limit` — maxItems: "25"
38. **Take Top 300 Workflows** `limit` — maxItems: "300"
39. **Creators Data** `set` — options: "[object Object]", assignments: "[object Object]"
40. **Workflows Data** `set` — options: "[object Object]", assignments: "[object Object]"
41. **Merge Creators & Workflows** `merge` — mode: "combine", options: "[object Object]", joinMode: "enrichInput1"
42. **Filter By Creator Username** `filter` — options: "[object Object]", conditions: "[object Object]"
43. **Aggregate** `aggregate` — options: "[object Object]", aggregate: "aggregateAllItemData"
44. **Workflow Response** `set` — options: "[object Object]", assignments: "[object Object]"
  
  ## 💡 AI-Powered Ideas for Improvement
  **Explain:**  
This n8n workflow retrieves data from JSON files on GitHub about n8n creators and their workflows. It processes this data to generate a detailed report, focusing on a specific creator based on username input. It merges creator and workflow data, sorts and filters it, and uses an AI agent to create a comprehensive Markdown report with insights and statistics about the creator’s contributions and workflow popularity.

**Demonstrate:**  
A developer could use this workflow to regularly analyze which workflows are most popular in the n8n community, helping them understand trends and improve their own workflow designs.

**Imitate:**  
1. Import the workflow into n8n.
2. Set up GitHub and OpenAI credentials.
3. Trigger the workflow via a chat message or another workflow.
4. Modify the username filter to focus on specific creators of interest.
5. Test and review the generated report.

**Practice:**  
Create a test by using the workflow to analyze data for a specific creator. Compare the generated report with manual data insights to validate accuracy and completeness.

**WIIFM:**  
Mastering this workflow enables you to offer valuable insights into community trends and creator contributions, positioning you as an expert in n8n analytics. This can help attract clients interested in data-driven insights and automation solutions, potentially increasing your service offerings and income.
  
  ## 🔧 Setup Instructions
  1. **Connect Credentials:** openAiApi, ollamaApi.
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
  