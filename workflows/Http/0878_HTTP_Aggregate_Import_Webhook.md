# HTTP Aggregate Import Webhook
  ## 🚀 What It Does
  Automates a flow using stickyNote×5, httpRequest×4, toolWorkflow×3.
  
  ## 💼 Business Use Case
  Use as a **glue/API broker**: receive data, enrich/validate via APIs, and pass to downstream systems.
  
  ## ⚙️ How It Works
  1. **Trigger:** This workflow starts with **When Executed by Another Workflow**.
  2. **When Executed by Another Workflow** `executeWorkflowTrigger` — workflowInputs: "[object Object]"
3. **Sticky Note** `stickyNote` — color: "7", width: "680", height: "660"
4. **Sticky Note1** `stickyNote` — color: "7", width: "1240", height: "820"
5. **Sticky Note3** `stickyNote` — color: "5", width: "380", height: "100"
6. **Youtube Transcripts** `toolWorkflow` — name: "youtube_transcripts", workflowId: "[object Object]", description: "Fetch the transcript from a youtube video using the youtube video url."
7. **Youtube Search** `toolWorkflow` — name: "websearch_contents", workflowId: "[object Object]", description: "Performs a youtube search and retrieves relevant videos with metadata only."
8. **Usage Report** `toolWorkflow` — name: "Apfiy_Usage_Metrics", workflowId: "[object Object]", description: "Returns current month's usage metrics."
9. **Apify Youtube MCP Server** `mcpTrigger` — path: `/b975bb25-be7c-49fb-8cd2-8e135d91ed4e`
10. **Sticky Note2** `stickyNote` — width: "480", height: "1020", content: "## Try It Out!
### This n8n demonstrates how to build a simple Youtube Search MCP server to look up videos on Youtube and download their transcripts for research purposes.

### How…[truncated]"
11. **Sticky Note4** `stickyNote` — width: "280", height: "240", content: "[![](https://d2gdx5nv84sdx2.cloudfront.net/uploads/35gj8m4w/marketing_asset/banner/13734/Large_rectangle_336x280_Light__1_.png)](https://www.apify.com?fpr=414q6)"
12. **Operation** `switch` — rules: "[object Object]", options: "[object Object]"
13. **Apify Youtube Search** `httpRequest` — url: `https://api.apify.com/v2/acts/streamers~youtube-scraper/run-sync-get-dataset-items`
14. **Apify Youtube Transcripts** `httpRequest` — url: `https://api.apify.com/v2/acts/streamers~youtube-scraper/run-sync-get-dataset-items`
15. **Get Usage Metrics** `httpRequest` — url: `https://api.apify.com/v2/users/me/usage/monthly`
16. **Simplify Search Results** `set` — options: "[object Object]", assignments: "[object Object]"
17. **Simplify Transcript Results** `set` — options: "[object Object]", assignments: "[object Object]"
18. **Get Usage Limits** `httpRequest` — url: `https://api.apify.com/v2/users/me/limits`
19. **Aggregate Search Results** `aggregate` — options: "[object Object]", aggregate: "aggregateAllItemData", destinationFieldName: "response"
20. **Aggregate Transcript Results** `aggregate` — options: "[object Object]", aggregate: "aggregateAllItemData", destinationFieldName: "response"
21. **Simplify Usage Metrics** `set` — options: "[object Object]", assignments: "[object Object]"
  
  ## 💡 AI-Powered Ideas for Improvement
  **Explain**  
This n8n workflow automates the process of searching for YouTube videos and retrieving their transcripts using Apify. It can perform three main tasks: search for YouTube videos based on a query, fetch transcripts from specific video URLs, and gather usage metrics from Apify. It uses different nodes to switch between these operations, simplifying the results for further use.

**Demonstrate**  
A business consultant might use this workflow to gather video content and transcripts for market research on a particular industry trend, making it easier to analyze video content without manually watching each video.

**Imitate**  
1. Import the workflow into n8n.
2. Connect your Apify account to n8n.
3. Set up the input parameters for video search, transcript retrieval, or usage metrics.
4. Test the workflow using sample queries or video URLs to ensure it retrieves and processes the data correctly.

**Practice**  
Create a test query to search for YouTube videos on a topic of interest. Observe how the workflow retrieves video metadata and transcripts. Modify the query and test how results vary, ensuring you understand how to adjust parameters for different outputs.

**WIIFM**  
Mastering this workflow can enhance your ability to automate video content analysis, offering clients valuable insights without manual effort. This capability can expand your service offerings, attract more clients, and boost your income by providing high-demand automation solutions in the digital content space.
  
  ## 🔧 Setup Instructions
  1. **Connect Credentials:** httpHeaderAuth.
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
  