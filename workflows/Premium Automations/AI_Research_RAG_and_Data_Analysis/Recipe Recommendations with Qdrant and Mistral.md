# Recipe Recommendations With Qdrant And Mistral
## 🚀 What It Does
Calls external APIs and uses **AI** to transform or decide, then routes the result downstream.

## 💼 Business Use Case
Use as a **glue/API broker**: receive data, enrich/validate via APIs, and pass to downstream systems.

## ⚙️ How It Works
1. **Trigger:** This workflow starts with **When clicking "Test workflow"**.
2. **When clicking "Test workflow"** `manualTrigger` — configured for its default action.
3. **Embeddings Mistral Cloud** `embeddingsMistralCloud` — options: "[object Object]"
4. **Default Data Loader** `documentDefaultDataLoader` — options: "[object Object]", jsonData: "={{ $json.data }}", jsonMode: "expressionData"
5. **Recursive Character Text Splitter** `textSplitterRecursiveCharacterTextSplitter` — options: "[object Object]"
6. **Chat Trigger** `chatTrigger` — configured for its default action.
7. **Qdrant Recommend API** `toolWorkflow` — name: "get_recipe_recommendation", fields: "[object Object]", schemaType: "manual"
8. **Execute Workflow Trigger** `executeWorkflowTrigger` — configured for its default action.
9. **Mistral Cloud Chat Model** `lmChatMistralCloud` — model: `mistral-large-2402`
10. **Sticky Note** `stickyNote` — color: "7", width: "484.12381677448207", height: "674.1153489831718"
11. **Sticky Note1** `stickyNote` — color: "7", width: "409.1756468632768", height: "398.81415970574335"
12. **Sticky Note2** `stickyNote` — color: "7", width: "486.02284096214964", height: "690.7816167755491"
13. **Sticky Note3** `stickyNote` — color: "7", width: "547.0098868353456", height: "347.6002738958705"
14. **Sticky Note4** `stickyNote` — color: "7", width: "673.6008766895472", height: "552.9202706743265"
15. **Sticky Note5** `stickyNote` — color: "7", width: "987.4785537889618", height: "531.9173034334732"
16. **Sticky Note6** `stickyNote` — width: "432.916474478624", height: "542.9295980774649", content: "## Try it out!
### This workflow does the following:
* Fetches and stores this week's HelloFresh's menu
* Builds the foundation of a recommendation engine by storing the recipes in…[truncated]"
17. **Sticky Note7** `stickyNote` — width: "382.47301504497716", height: "195.8987124522777", content: "### 🚨Ensure Qdrant collection exists!
You'll need to run the following command in Qdrant:
```
PUT collections/hello_fresh
{
 "vectors": {
 "distance": "Cosine",
 "size": 1024
 }
}…[truncated]"
18. **Sticky Note8** `stickyNote` — width: "213.30551928619226", height: "332.38559808882246", content: "















### 🚨Configure Your Qdrant Connection
* Be sure to enter your endpoint address"
19. **Get This Week's Menu** `httpRequest` — url: `=https://www.hellofresh.co.uk/menus/{{ $now.year }}-W{{ $now.weekNumber }}`
20. **AI Agent** `agent` — options: "[object Object]"
21. **Wait for Rate Limits** `wait` — amount: "1.1"
22. **Extract Server Data** `html` — operation: **extractHtmlContent**
23. **Get Mistral Embeddings** `httpRequest` — method: **POST**, url: `https://api.mistral.ai/v1/embeddings`
24. **Extract Available Courses** `code` — jsCode: "const pageData = JSON.parse($input.first().json.data)
return pageData.props.pageProps.ssrPayload.courses.slice(0, 10);"
25. **Use Qdrant Recommend API** `httpRequest` — method: **POST**, url: `=http://qdrant:6333/collections/hello_fresh/points/recommend/groups`
26. **Get Course Metadata** `set` — options: "[object Object]", assignments: "[object Object]"
27. **Get Recipe** `httpRequest` — url: `={{ $json.recipe.websiteUrl }}`
28. **Get Recipes From DB** `code` — language: "python", pythonCode: "import sqlite3
con = sqlite3.connect("hello_fresh_1.db")

recipe_ids = list(set([group.id for group in _input.all()[0].json.result.groups if group.hits[0].score > 0.5]))
placeholde…[truncated]"
29. **Extract Recipe Details** `html` — operation: **extractHtmlContent**
30. **Get Tool Response** `set` — options: "[object Object]", assignments: "[object Object]"
31. **Merge Course & Recipe** `merge` — mode: "combine", options: "[object Object]", combinationMode: "mergeByPosition"
32. **Prepare Documents** `set` — options: "[object Object]", assignments: "[object Object]"
33. **Qdrant Vector Store** `vectorStoreQdrant` — mode: "insert", options: "[object Object]", qdrantCollection: "[object Object]"
34. **Save Recipes to DB** `code` — language: "python", pythonCode: "import sqlite3
con = sqlite3.connect("hello_fresh_1.db")

cur = con.cursor()
cur.execute("CREATE TABLE IF NOT EXISTS recipes (id TEXT PRIMARY KEY, name TEXT, data TEXT, cuisine TEX…[truncated]"

## 💡 AI-Powered Ideas for Improvement
**Explain:** This n8n workflow automates the process of fetching, storing, and recommending recipes from HelloFresh's weekly menu. It scrapes the menu, processes the data, and stores it in a Qdrant Vectorstore and SQLite database. An AI Agent, using the Mistral Cloud Chat Model, interacts with users via a chat interface to recommend recipes based on user preferences. The workflow utilizes embeddings and vector search to enhance recommendation accuracy.

**Demonstrate:** A restaurant chain could use this workflow to recommend weekly menu items to customers based on their dietary preferences, increasing customer satisfaction and engagement.

**Imitate:** 1. Import the workflow into your n8n instance. 2. Connect your Qdrant and Mistral Cloud accounts. 3. Configure the schedule to fetch HelloFresh's menu weekly. 4. Set up the chat interface for user interaction. 5. Run the workflow and test recipe recommendations.

**Practice:** Create a test environment by setting up a sample Qdrant collection and SQLite database. Use mock data to simulate menu recommendations and validate the workflow's accuracy.

**WIIFM:** Mastering this workflow enables you to offer personalized AI-driven recommendation systems to businesses, enhancing customer interaction and potentially increasing sales. This skill can be a valuable addition to your automation services portfolio, attracting more clients and generating income.

## 🔧 Setup Instructions
1. **Connect Credentials:** mistralCloudApi, qdrantApi.
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
