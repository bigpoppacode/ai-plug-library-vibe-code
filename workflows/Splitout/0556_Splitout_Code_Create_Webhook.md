# Splitout Code Create Webhook
## 🚀 What It Does
Moves data between apps and a **database/spreadsheet**, with logic and optional AI steps.

## 💼 Business Use Case
Use as a **glue/API broker**: receive data, enrich/validate via APIs, and pass to downstream systems.

## ⚙️ How It Works
1. **Trigger:** This workflow starts with **When clicking ‘Test workflow’**.
2. **When clicking ‘Test workflow’** `manualTrigger` — configured for its default action.
3. **Embeddings OpenAI** `embeddingsOpenAi` — model: `text-embedding-3-small`
4. **Default Data Loader** `documentDefaultDataLoader` — options: "[object Object]", jsonData: "={{ $json.text }}", jsonMode: "expressionData"
5. **Recursive Character Text Splitter** `textSplitterRecursiveCharacterTextSplitter` — options: "[object Object]", chunkSize: "4000"
6. **OpenAI Chat Model** `lmChatOpenAi` — model: `gpt-4o-mini`
7. **Execute Workflow Trigger** `executeWorkflowTrigger` — configured for its default action.
8. **Sticky Note6** `stickyNote` — color: "7", width: "595.5213902293318", height: "429.11782776909047"
9. **Sticky Note2** `stickyNote` — color: "7", width: "638.5221986278162", height: "741.0186923170972"
10. **Sticky Note1** `stickyNote` — color: "7", width: "656.0317138444963", height: "441.0753369736108"
11. **Sticky Note** `stickyNote` — color: "7", width: "787.3314861380661", height: "465.52420584035275"
12. **Sticky Note3** `stickyNote` — color: "7", width: "551.2710561574413", height: "407.9295477646979"
13. **Sticky Note4** `stickyNote` — color: "7", width: "600.1809497875241", height: "482.99934349707576"
14. **Sticky Note5** `stickyNote` — color: "7", width: "598.5585287222906", height: "605.9905193915599"
15. **Sticky Note7** `stickyNote` — color: "7", width: "587.6069484146701", height: "583.305275883189"
16. **Sticky Note8** `stickyNote` — color: "7", width: "572.5638733479158", height: "464.4019616956416"
17. **Sticky Note9** `stickyNote` — width: "226.36363118160727", height: "296.5755172289686", content: "















### 🚨 Set Story ID here!
Must be a valid HN story ID"
18. **Sticky Note10** `stickyNote` — width: "400.381109509268", height: "612.855812336249", content: "## Try It Out!

### This workflow generates highly-detailed community insights from HN Story comments. Works best when dealing with a large number of comments.

* Import HN Story c…[truncated]"
19. **Sticky Note12** `stickyNote` — color: "5", width: "323.2987132716669", height: "80"
20. **Sticky Note11** `stickyNote` — color: "5", width: "323.2987132716669", height: "110.05160146874424"
21. **Set Variables** `set` — options: "[object Object]", assignments: "[object Object]"
22. **Set Variables1** `set` — options: "[object Object]", assignments: "[object Object]"
23. **Clear Existing Comments** `httpRequest` — method: **POST**, url: `http://qdrant:6333/collections/hn_comments/points/delete`
24. **Find Comments** `httpRequest` — method: **POST**, url: `=http://qdrant:6333/collections/hn_comments/points/scroll`
25. **Hacker News** `hackerNews` — articleId: "={{ $('Set Variables').item.json.story_id }}", additionalFields: "[object Object]"
26. **Apply K-means Clustering Algorithm** `code` — language: "python", pythonCode: "import numpy as np
from sklearn.cluster import KMeans

# get vectors for all answers
point_ids = [item.id for item in _input.first().json.result.points]
vectors = [item.vector.to_p…[truncated]"
27. **Get Comments** `set` — options: "[object Object]", assignments: "[object Object]"
28. **Clusters To List** `splitOut` — options: "[object Object]", fieldToSplitOut: "output"
29. **Split Out** `splitOut` — options: "[object Object]", fieldToSplitOut: "data"
30. **Only Clusters With 3+ points** `filter` — options: "[object Object]", conditions: "[object Object]"
31. **Qdrant Vector Store** `vectorStoreQdrant` — mode: "insert", options: "[object Object]", qdrantCollection: "[object Object]"
32. **Get Payload of Points** `httpRequest` — method: **POST**, url: `=http://qdrant:6333/collections/hn_comments/points`
33. **Prep Values For Trigger** `set` — options: "[object Object]", assignments: "[object Object]"
34. **Information Extractor** `informationExtractor` — text: "=The {{ $json.result.length }} comments were:
{{
$json.result.map(item =>
`* Commenter "${item.payload.metadata.item_author}" says the following: "${item.payload.content.replaceAll…[truncated]", options: "[object Object]", schemaType: "fromJson"
35. **Trigger Insights** `executeWorkflow` — options: "[object Object]", workflowId: "={{ $workflow.id }}"
36. **Prep Output For Export** `set` — mode: "raw", options: "[object Object]", jsonOutput: "={{ {
  ...$json.output,
  "Story ID": $('Set Variables1').item.json.story_id,
  "Story Title": $('Get Payload of Points').item.json.result[0].payload.metadata.story_title,
  "Numb…[truncated]"
37. **Export To Sheets** `googleSheets` — operation: **append**

## 💡 AI-Powered Ideas for Improvement
**Explain**
This workflow analyzes comments on a Hacker News story to extract insights. It fetches comments for a specified story, processes them into embeddings using OpenAI, stores these in a Qdrant vector database, and applies K-means clustering to group similar comments. The insights are extracted using an AI model and exported to Google Sheets for further analysis.

**Demonstrate**
A content strategist could use this workflow to analyze community sentiment and key discussion points about a new product release on Hacker News, helping to tailor marketing messages and product features based on user feedback.

**Imitate**
1. Set up n8n and the necessary accounts (OpenAI, Qdrant, Google Sheets).
2. Import the workflow into your n8n instance.
3. Configure the nodes with your credentials and the target Hacker News story ID.
4. Test the workflow with a specific story to ensure it processes and exports insights correctly.

**Practice**
Try running the workflow on a different Hacker News story. Observe the changes in clustering and insights. Experiment with different story IDs to see how community feedback varies across topics.

**WIIFM**
Mastering this workflow allows you to offer valuable insights to businesses by analyzing online discussions. This skill can enhance your consultancy services, enabling you to provide data-driven strategies and potentially increase your income through high-value analytics services.

## 🔧 Setup Instructions
1. **Connect Credentials:** qdrantApi, openAiApi, googleSheetsOAuth2Api.
2. **Data Mapping:** Verify base/sheet IDs and column names match exactly to prevent silent failures.
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
