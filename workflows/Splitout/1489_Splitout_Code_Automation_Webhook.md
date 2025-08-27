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
 "title": {
 "type": [
 "string",
 null
 ],
 "d…[truncated]"
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
 // Check if item exists and has the expected structu…[truncated]"
19. **Limit for testing (optional)** `limit` — maxItems: "5"
20. **Trun into structured data** `chainLlm` — text: "={{ $json.cleaned_text }}", messages: "[object Object]", promptType: "define"
21. **Write results to airtable** `airtable` — operation: **create**, table: `[object Object]`

## 💡 AI-Powered Ideas for Improvement
- **Explain**: This n8n workflow automates the process of scraping job posts from Hacker News, specifically the "Who is Hiring" threads. It searches for relevant posts, retrieves detailed job data, cleans and formats the information using OpenAI's language model, and then stores the structured data into an Airtable database for easy access and analysis.

- **Demonstrate**: A recruitment agency can use this workflow to automatically gather and structure job listings from Hacker News, enabling them to quickly identify and reach out to potential clients or candidates without manual searching and data entry.

- **Imitate**: 
  1. Import the workflow into your n8n instance.
  2. Set up the HTTP Request Node with your Algolia and Hacker News API details.
  3. Connect your OpenAI and Airtable accounts.
  4. Customize the data structure in the OpenAI node to match your needs.
  5. Test the workflow to ensure it collects and processes data correctly.

- **Practice**: Create a test Airtable base and run the workflow to scrape a few job listings. Modify the data structure or add filters to see how the workflow adapts. Experiment with different job post queries to expand your results.

- **WIIFM**: Mastering this workflow allows you to offer data extraction and structuring services to clients, enhancing their recruitment processes or market research capabilities. This can lead to increased client satisfaction and open up new revenue streams in your AI automation business.

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
