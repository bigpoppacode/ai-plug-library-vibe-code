# Splitout Code Export Webhook
## 🚀 What It Does
Moves data between apps and a **database/spreadsheet**, with logic and optional AI steps.

## 💼 Business Use Case
Use as a **glue/API broker**: receive data, enrich/validate via APIs, and pass to downstream systems.

## ⚙️ How It Works
1. **Trigger:** This workflow starts with **When clicking ‘Test workflow’**.
2. **When clicking ‘Test workflow’** `manualTrigger` — configured for its default action.
3. **Default Data Loader** `documentDefaultDataLoader` — options: "[object Object]", jsonData: "={{ $json.review_title }}
{{ $json.review_text }}", jsonMode: "expressionData"
4. **Recursive Character Text Splitter** `textSplitterRecursiveCharacterTextSplitter` — options: "[object Object]", chunkSize: "4000"
5. **Embeddings OpenAI** `embeddingsOpenAi` — model: `text-embedding-3-small`
6. **OpenAI Chat Model** `lmChatOpenAi` — model: `gpt-4o-mini`
7. **Execute Workflow Trigger** `executeWorkflowTrigger` — configured for its default action.
8. **Sticky Note** `stickyNote` — color: "7", width: "787.3314861380661", height: "465.52420584035275"
9. **Sticky Note1** `stickyNote` — color: "7", width: "638.5221986278162", height: "580.2538779032135"
10. **Sticky Note2** `stickyNote` — color: "7", width: "638.5221986278162", height: "689.8000993522735"
11. **Sticky Note3** `stickyNote` — color: "7", width: "543.4265511994403", height: "453.31956386852846"
12. **Sticky Note4** `stickyNote` — color: "7", width: "557.7420442679241", height: "526.2781960611934"
13. **Sticky Note5** `stickyNote` — color: "7", width: "598.5585287222906", height: "605.9905193915599"
14. **Sticky Note7** `stickyNote` — color: "7", width: "587.6069484146701", height: "552.9535170892194"
15. **Sticky Note8** `stickyNote` — color: "7", width: "572.5638733479158", height: "464.4019616956416"
16. **Sticky Note6** `stickyNote` — color: "7", width: "519.6419932444072", height: "429.11782776909047"
17. **Sticky Note9** `stickyNote` — width: "226.36363118160727", height: "327.0249036433755", content: "















### 🚨 Set company here!
Trustpilot must recognise it as part of the url."
18. **Sticky Note10** `stickyNote` — width: "400.381109509268", height: "612.855812336249", content: "## Try It Out!

### This workflow generates highly-detailed customer insights from Trustpilot reviews. Works best when dealing with a large number of reviews.

* Import Trustpilot …[truncated]"
19. **Sticky Note12** `stickyNote` — color: "5", width: "323.2987132716669", height: "80"
20. **Sticky Note11** `stickyNote` — color: "5", width: "323.2987132716669", height: "110.05160146874424"
21. **Set Variables** `set` — options: "[object Object]", assignments: "[object Object]"
22. **Set Variables1** `set` — options: "[object Object]", assignments: "[object Object]"
23. **Clear Existing Reviews** `httpRequest` — method: **POST**, url: `http://qdrant:6333/collections/trustpilot_reviews/points/delete`
24. **Find Reviews** `httpRequest` — method: **POST**, url: `=http://qdrant:6333/collections/trustpilot_reviews/points/scroll`
25. **Get TrustPilot Page** `httpRequest` — url: `=https://uk.trustpilot.com/review/{{ $('Set Variables').item.json.companyId }}?sort=recency`
26. **Apply K-means Clustering Algorithm** `code` — language: "python", pythonCode: "import numpy as np
from sklearn.cluster import KMeans

# get vectors for all answers
point_ids = [item.id for item in _input.first().json.result.points]
vectors = [item.vector.to_p…[truncated]"
27. **Extract Reviews** `html` — operation: **extractHtmlContent**
28. **Clusters To List** `splitOut` — options: "[object Object]", fieldToSplitOut: "output"
29. **Zip Entries** `set` — options: "[object Object]", assignments: "[object Object]"
30. **Only Clusters With 3+ points** `filter` — options: "[object Object]", conditions: "[object Object]"
31. **Reviews to List** `splitOut` — options: "[object Object]", fieldToSplitOut: "data"
32. **Get Payload of Points** `httpRequest` — method: **POST**, url: `=http://qdrant:6333/collections/trustpilot_reviews/points`
33. **Qdrant Vector Store** `vectorStoreQdrant` — mode: "insert", options: "[object Object]", qdrantCollection: "[object Object]"
34. **Customer Insights Agent** `informationExtractor` — text: "=The {{ $json.result.length }} reviews were:
{{
$json.result.map(item =>
`* ${item.payload.metadata.review_author} gave ${item.payload.metadata.review_rating} stars: "${item.payloa…[truncated]", options: "[object Object]", schemaType: "fromJson"
35. **Prep Values For Trigger** `set` — options: "[object Object]", assignments: "[object Object]"
36. **Prep Output For Export** `set` — mode: "raw", options: "[object Object]", jsonOutput: "={{ {
  ...$json.output,
  "CompanyID": $('Set Variables1').item.json.companyId,
  "From": $('Set Variables1').item.json.review_date_from,
  "To": $('Set Variables1').item.json.rev…[truncated]"
37. **Trigger Insights** `executeWorkflow` — options: "[object Object]", workflowId: "={{ $workflow.id }}"
38. **Export To Sheets** `googleSheets` — operation: **append**

## 💡 AI-Powered Ideas for Improvement
**Explain:**  
This n8n workflow extracts and processes customer reviews from Trustpilot to generate detailed insights. It scrapes reviews, clusters them using K-means clustering, and applies AI to summarize insights and sentiments. The results are then exported to Google Sheets for easy analysis and action.

**Demonstrate:**  
A business owner could use this workflow to analyze customer feedback from Trustpilot, identifying key trends and sentiments. This helps in understanding customer needs and improving products or services, ultimately enhancing customer satisfaction and loyalty.

**Imitate:**  
1. Import the workflow into n8n.
2. Set up your Trustpilot company URL in the workflow.
3. Connect to your Google Sheets account.
4. Run the workflow to fetch and analyze reviews.
5. Check the Google Sheet for insights and sentiments.

**Practice:**  
Create a test Trustpilot page and run the workflow. Experiment with different clustering parameters or AI models to see how insights vary. Adjust the workflow to include more data points or different analysis metrics.

**WIIFM:**  
Mastering this workflow allows you to offer valuable insights services to businesses. It helps in transforming raw customer feedback into actionable intelligence, which can be a significant value-add for companies looking to improve customer experience and drive growth.

## 🔧 Setup Instructions
1. **Connect Credentials:** openAiApi, qdrantApi, googleSheetsOAuth2Api.
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
