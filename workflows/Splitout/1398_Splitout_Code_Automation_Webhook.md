# Splitout Code Automation Webhook
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
 "To": $('Set Variables1').item.json.review_…[truncated]"
37. **Trigger Insights** `executeWorkflow` — options: "[object Object]", workflowId: "={{ $workflow.id }}"
38. **Export To Sheets** `googleSheets` — operation: **append**

## 💡 AI-Powered Ideas for Improvement
### Explain
This n8n workflow automates the process of collecting and analyzing customer reviews from Trustpilot. It scrapes review data, processes it using AI models to generate insights, and exports these insights into a Google Sheet. The workflow clusters reviews based on similarities, extracts key insights using OpenAI, and provides a structured output for further analysis.

### Demonstrate
A business owner could use this workflow to gain insights from customer reviews to improve products or services. By understanding common themes or issues in reviews, the business can make data-driven improvements, enhance customer satisfaction, and potentially increase sales.

### Imitate
1. Import the workflow into your n8n instance.
2. Connect Trustpilot, OpenAI, and Google Sheets accounts.
3. Set the company ID in the 'Set Variables' node.
4. Run the workflow to test and ensure data flows correctly.
5. Customize nodes for specific insights or data handling.

### Practice
Create a practice Trustpilot account and add sample reviews. Run the workflow to see how it processes these reviews and generates insights. Experiment with different clustering settings to see how it affects the output.

### WIIFM
Mastering this workflow can provide valuable skills in automating customer feedback analysis, a critical component for businesses looking to improve customer experience. Offering such automated insights as a service can attract clients, generate income, and enhance your AI automation business.

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
