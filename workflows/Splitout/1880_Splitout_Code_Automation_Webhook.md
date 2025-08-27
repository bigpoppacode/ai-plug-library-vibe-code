# Splitout Code Automation Webhook
## 🚀 What It Does
Moves data between apps and a **database/spreadsheet**, with logic and optional AI steps.

## 💼 Business Use Case
Use as a **glue/API broker**: receive data, enrich/validate via APIs, and pass to downstream systems.

## ⚙️ How It Works
1. **Trigger:** This workflow starts with **When clicking ‘Test workflow’**.
2. **When clicking ‘Test workflow’** `manualTrigger` — configured for its default action.
3. **Sticky Note** `stickyNote` — width: "460", height: "340", content: "## Go to https://hn.algolia.com
- filter by "Ask HN: Who is hiring?" (important with quotes for full match)
- sort by date
- Chrome Network Tab > find API call > click "Copy as cUR…[truncated]"
4. **Sticky Note1** `stickyNote` — width: "500", height: "340", content: "## Go to HN API 
https://github.com/HackerNews/API

We'll need following endpoints: 
- For example, a story: https://hacker-news.firebaseio.com/v0/item/8863.json?print=pretty
- com…[truncated]"
5. **OpenAI Chat Model** `lmChatOpenAi` — model: `[object Object]`
6. **Structured Output Parser** `outputParserStructured` — schemaType: "manual", inputSchema: "{
  "type": "object",
  "properties": {
    "company": {
      "type": [
        "string",
        null
      ],
      "description": "Name of the hiring company"
    },
    "title…[truncated]"
7. **Sticky Note2** `stickyNote` — width: "840", height: "340", content: "## Data Structure

We use Openai GPT-4o-mini to transform the raw data in a unified data structure. Feel free to change this.

```json
{
  "company": "Name of the hiring company",
…[truncated]"
8. **Sticky Note3** `stickyNote` — width: "540", height: "340", content: "## Clean the result 

```json
{
"title": "Ask HN: Who is hiring? (February 2025)",
"createdAt": "2025-02-03T16:00:43Z",
"updatedAt": "2025-02-17T08:35:44Z",
"storyId": "42919502"
}…[truncated]"
9. **Sticky Note4** `stickyNote` — width: "380", height: "500", content: "## Hacker News - Who is Hiring Scrape

In this template we setup a scraper for the monthly HN Who is Hiring post. This way we can scrape the data and transform it to a common data …[truncated]"
10. **Search for Who is hiring posts** `httpRequest` — method: **POST**, url: `https://uj5wyc0l7x-dsn.algolia.net/1/indexes/Item_dev_sort_date/query`
11. **Split Out** `splitOut` — options: "[object Object]", fieldToSplitOut: "hits"
12. **Get relevant data** `set` — options: "[object Object]", assignments: "[object Object]"
13. **Get latest post** `filter` — options: "[object Object]", conditions: "[object Object]"
14. **HN API: Get Main Post** `httpRequest` — url: `=https://hacker-news.firebaseio.com/v0/item/{{ $json.storyId }}.json?print=pretty`
15. **Split out children (jobs)** `splitOut` — options: "[object Object]", fieldToSplitOut: "kids"
16. **HI API: Get the individual job post** `httpRequest` — url: `=https://hacker-news.firebaseio.com/v0/item/{{ $json.kids }}.json?print=pretty`
17. **Extract text** `set` — options: "[object Object]", assignments: "[object Object]"
18. **Clean text** `code` — jsCode: "// In a Function node in n8n
const inputData = $input.all();

function cleanAllPosts(data) {
    return data.map(item => {
        try {
            // Check if item exists and has…[truncated]"
19. **Limit for testing (optional)** `limit` — maxItems: "5"
20. **Trun into structured data** `chainLlm` — text: "={{ $json.cleaned_text }}", messages: "[object Object]", promptType: "define"
21. **Write results to airtable** `airtable` — operation: **create**, table: `[object Object]`

## 💡 AI-Powered Ideas for Improvement
- **Explain:** This n8n workflow automates the process of scraping "Who is Hiring" posts from Hacker News, using Algolia to search for relevant posts, and the Hacker News API to retrieve details. The workflow then uses OpenAI to parse the data into a structured format and stores the results in Airtable for easy access and management.

- **Demonstrate:** A business owner could use this workflow to monitor job postings on Hacker News efficiently, aiding in recruitment efforts by keeping track of companies hiring in their industry.

- **Imitate:** Import the workflow into n8n. Set up authentication for Algolia, Hacker News API, OpenAI, and Airtable. Modify the Airtable schema to align with your data needs. Test the workflow to ensure it captures and processes data correctly.

- **Practice:** Create a test Airtable base and run the workflow to see how data is collected and structured. Experiment by adding filters to the Algolia search step to refine the job postings you gather.

- **WIIFM:** By mastering this workflow, you can offer recruitment data services, helping clients efficiently track industry job trends. This can expand your service offerings and increase revenue through specialized data analytics services in your AI automation business.

## 🔧 Setup Instructions
1. **Connect Credentials:** openAiApi, httpHeaderAuth, airtableTokenApi.
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
