# Splitout Filter Process Webhook
## 🚀 What It Does
Moves data between apps and a **database/spreadsheet**, with logic and optional AI steps.

## 💼 Business Use Case
Use as a **glue/API broker**: receive data, enrich/validate via APIs, and pass to downstream systems.

## ⚙️ How It Works
1. **Trigger:** This workflow starts with **When clicking ‘Test workflow’**.
2. **When clicking ‘Test workflow’** `manualTrigger` — configured for its default action.
3. **Structured Output Parser** `outputParserStructured` — jsonSchemaExample: "{
	"website_url": "https://example.com"
}"
4. **Perplexity** `lmChatOpenRouter` — model: `perplexity/llama-3.1-sonar-small-128k-online`
5. **Claude 3.5 Sonnet** `lmChatAnthropic` — model: `claude-3-5-sonnet-20241022`
6. **Claude 3.5 Haiku** `lmChatAnthropic` — model: `claude-3-5-haiku-20241022`
7. **Sticky Note1** `stickyNote` — color: "4", width: "300", content: "## Company Research
Using Perplexity Deep Research  we can find more information about the company."
8. **Sticky Note3** `stickyNote` — color: "6", content: "## TechCrunch & VentureBeat
HTTP GET requests to fetch the latest articles from tech news sitemap feeds."
9. **Sticky Note4** `stickyNote` — content: "## Parse XML
Converts XML data to structured JSON for easier processing of article metadata."
10. **Sticky Note5** `stickyNote` — width: "280", content: "## Split Articles & Filter:
Separates individual articles and filters to keep only the most relevant ones based on keywords (raised)"
11. **Sticky Note6** `stickyNote` — content: "## Get Article
Fetches the full article content for each relevant article in the feed."
12. **Sticky Note7** `stickyNote` — content: "## HTML Parser
Extracts clean text content from the HTML articles for analysis."
13. **Sticky Note8** `stickyNote` — width: "260", content: "## Merge Extracted Data
Combines articles from multiple sources into a unified dataset for comprehensive analysis."
14. **Sticky Note9** `stickyNote` — width: "300", content: "## Extract Structured Data
Identifies and structures key information from article text such as company names, funding details, and tech trends."
15. **Sticky Note10** `stickyNote` — width: "360", content: "## Research company website
Uses perplexity to find the company website with search"
16. **Sticky Note11** `stickyNote` — width: "360", content: "## Extract URL
Since perplexity uses Llama which is not great at structured output - 2 step approach for a more reliable run"
17. **Sticky Note12** `stickyNote` — width: "420", content: "## Collect data & write to airtable
Collecting all data to pass on to detailed company research and store information in airtable"
18. **Sticky Note2** `stickyNote` — color: "4", width: "440", content: "## Extract structured data from report
Deep Research produces long text output. We use a parser here to make the information available in structured format. As the json structure i…[truncated]"
19. **Auto-fixing Output Parser** `outputParserAutofixing` — options: "[object Object]"
20. **Extract Structured JSON ** `outputParserStructured` — schemaType: "manual", inputSchema: "{
  "type": "object",
  "properties": {
    "company_name": {
      "type": "string",
      "description": "Official name of the company receiving funding"
    },
    "funding_roun…[truncated]"
21. **Sticky Note13** `stickyNote` — color: "4", content: "## Exectuted as a subworkflow
"
22. **Sticky Note** `stickyNote` — color: "4", width: "420", height: "140"
23. **When Executed by Another Workflow** `executeWorkflowTrigger` — workflowInputs: "[object Object]"
24. **JINA Deep Search** `httpRequest` — method: **POST**, url: `https://deepsearch.jina.ai/v1/chat/completions`
25. **Sticky Note14** `stickyNote` — color: "6", width: "420", content: "## Identify companies that just raised funds

Includes deep research of the Company Background, Market Position and Business Analysis "
26. **Sticky Note15** `stickyNote` — color: "6", width: "400", height: "120"
27. **Claude  3.5 Sonnet** `lmChatAnthropic` — model: `claude-3-5-sonnet-20241022`
28. **Techcrunch (TC)** `httpRequest` — url: `https://techcrunch.com/news-sitemap.xml`
29. **Venturebeat (VB)** `httpRequest` — url: `https://venturebeat.com/news-sitemap.xml`
30. **Prompts** `set` — options: "[object Object]", assignments: "[object Object]"
31. **Pick data (jina)** `set` — options: "[object Object]", assignments: "[object Object]"
32. **Parse TC XML** `xml` — options: "[object Object]"
33. **Parse VB XML** `xml` — options: "[object Object]"
34. **Deep Research** `httpRequest` — method: **POST**, url: `https://api.perplexity.ai/chat/completions`
35. **Split TC Articles** `splitOut` — include: "=", options: "[object Object]", fieldToSplitOut: "urlset.url"
36. **Split VB Articles** `splitOut` — options: "[object Object]", fieldToSplitOut: "urlset.url"
37. **Pick data (Perplexity)** `set` — options: "[object Object]", assignments: "[object Object]"
38. **Filter** `filter` — options: "[object Object]", conditions: "[object Object]"
39. **Filter1** `filter` — options: "[object Object]", conditions: "[object Object]"
40. **Extract Structured Data** `chainLlm` — text: "=
Sources Urls: 
{{ $json.links.map((item, idx) => `${idx + 1}: ${item}`).join('\n') }}

Report: {{ $json.report.replace(/<think>[\s\S]*?<\/think>/g, ''); }}", messages: "[object Object]", promptType: "define"
41. **Get Funding Article HTML for scraping (TC)** `httpRequest` — url: `={{ $json['urlset.url'].loc }}`
42. **Get Funding Article HTML for scraping (VB)** `httpRequest` — url: `={{ $json.loc }}`
43. **Write Results to Airtable** `airtable` — operation: **create**, table: `[object Object]`
44. **TC HTML Parser** `html` — operation: **extractHtmlContent**
45. **VB HTML Parser** `html` — operation: **extractHtmlContent**
46. **Merge Extracted Data** `merge` — configured for its default action.
47. **Extract Structured Data ** `informationExtractor` — text: "=Article Title: {{ $json.title }}
Article Text:{{ $json.text }}", options: "[object Object]", attributes: "[object Object]"
48. **Research URL** `chainLlm` — text: "=Find the website for this company: {{ $json.output.company_name }}", promptType: "define"
49. **Extract URL** `chainLlm` — text: "={{ $json.text }}", promptType: "define", hasOutputParser: "true"
50. **Collect Data** `set` — options: "[object Object]", assignments: "[object Object]"
51. **Route to Deep Research** `executeWorkflow` — options: "[object Object]", workflowId: "[object Object]", workflowInputs: "[object Object]"
52. **Airtable** `airtable` — operation: **create**, table: `[object Object]`

## 💡 AI-Powered Ideas for Improvement
### Explain
This n8n workflow automates the process of gathering and analyzing company funding information from news sources like TechCrunch and VentureBeat. It fetches recent articles, filters them for relevant funding news, extracts structured data such as company names, funding amounts, and investors, and stores this information in Airtable for further research and analysis. It uses AI models like Perplexity and Claude to enhance data extraction and processing.

### Demonstrate
A startup investor could use this workflow to stay updated on recent funding rounds, gaining insights into market trends and potential investment opportunities. It saves time by automating the collection and processing of funding news.

### Imitate
1. Import the workflow into n8n.
2. Set up connections for TechCrunch, VentureBeat, and Airtable.
3. Configure the AI nodes with your API keys.
4. Customize the filters to match your specific interests or keywords.
5. Test the workflow to ensure it collects and processes data correctly.

### Practice
Create a test Airtable base with columns for company name, funding round, and amount. Run the workflow to populate this base with real data. Adjust filters and observe how changes affect the output.

### WIIFM
Mastering this workflow allows you to offer automated data collection and analysis services to clients, enhancing their market research capabilities. This can attract new customers and increase revenue streams in your AI automation business.

## 🔧 Setup Instructions
1. **Connect Credentials:** openRouterApi, anthropicApi, airtableTokenApi, httpHeaderAuth.
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
