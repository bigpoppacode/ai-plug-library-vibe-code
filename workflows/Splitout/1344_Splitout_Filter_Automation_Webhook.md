# Splitout Filter Automation Webhook
## 🚀 What It Does
Calls external APIs and uses **AI** to transform or decide, then routes the result downstream.

## 💼 Business Use Case
Use as a **glue/API broker**: receive data, enrich/validate via APIs, and pass to downstream systems.

## ⚙️ How It Works
1. **Trigger:** This workflow starts with **Execute workflow**.
2. **Text** `toolWorkflow` — name: "text_retrieval_tool", source: "parameter", description: "Call this tool to return all text from the given website. Query should be full website URL."
3. **URLs** `toolWorkflow` — name: "url_retrieval_tool", source: "parameter", description: "Call this tool to return all URLs from the given website. Query should be full website URL."
4. **OpenAI Chat Model** `lmChatOpenAi` — model: `gpt-4o`
5. **JSON Parser** `outputParserStructured` — schemaType: "manual", inputSchema: "{
 "type": "object",
 "properties": {
 "social_media": {
 "type": "array",
 "items": {
 "type": "object",
 "properties": {
 "platform": {
 "type": "string",
 "description": "The na…[truncated]", requestOptions: "[object Object]"
6. **Execute workflow** `manualTrigger` — configured for its default action.
7. **Sticky Note** `stickyNote` — color: "5", width: "157.8125", height: "166.55000000000004"
8. **Sticky Note1** `stickyNote` — color: "4", width: "157.8125", height: "166.55000000000004"
9. **Sticky Note2** `stickyNote` — color: "5", width: "1117.5005339977713", height: "329.45390772033636"
10. **Set domain (text)** `set` — options: "[object Object]", assignments: "[object Object]"
11. **Set domain (URL)** `set` — options: "[object Object]", assignments: "[object Object]"
12. **Sticky Note3** `stickyNote` — color: "4", width: "2467.2678721043376", height: "328.79842054012374"
13. **Sticky Note4** `stickyNote` — width: "221.7729148148145", height: "400.16865185185225", content: "### Get companies from database
Retrieve names and websites of companies from Supabase table to process crawling.

💡 **You can replace Supabase with other database of your choice.…[truncated]"
14. **Sticky Note5** `stickyNote` — width: "221.7729148148145", height: "370.14757037037066", content: "### Set parameters for execution
Pass only `name` and `website` values from database. 

⚠️ **If you use other field namings, update this node.**"
15. **Sticky Note6** `stickyNote` — width: "339.7128777777775", height: "328.4957622370491", content: "### Crawling agent (retrieve social media profile links)
Crawl website to extract social media profile links and return them in unified JSON format.

💡 **You can change type of re…[truncated]"
16. **Sticky Note7** `stickyNote` — width: "221.7729148148145", height: "364.786662962963", content: "### Insert data to database
Add new rows in database table with extracted data.

💡 **You can replace Supabase with other database of your choice.**"
17. **Sticky Note8** `stickyNote` — color: "3", width: "369.60264559047334", height: "256.26672065702303"
18. **Sticky Note9** `stickyNote` — color: "7", width: "369.93062670813185", height: "212.09880341753203"
19. **Get companies** `supabase` — operation: **getAll**, table: `companies_input`
20. **Add protocool to domain (text)** `set` — options: "[object Object]", assignments: "[object Object]"
21. **Add protocool to domain (URL)** `set` — options: "[object Object]", assignments: "[object Object]"
22. **Select company name and website** `set` — include: "selected", options: "[object Object]", assignments: "[object Object]"
23. **Get website (text)** `httpRequest` — url: `={{ $json.domain }}`
24. **Get website (URL)** `httpRequest` — url: `={{ $json.domain }}`
25. **Crawl website** `agent` — text: "=Retrieve social media profile URLs from this website: {{ $json.website }}", options: "[object Object]", promptType: "define"
26. **Map company name and website** `set` — options: "[object Object]", assignments: "[object Object]"
27. **Convert HTML to Markdown** `markdown` — html: "={{ $json.data }}", options: "[object Object]"
28. **Retrieve URLs** `html` — operation: **extractHtmlContent**
29. **Set social media array** `set` — options: "[object Object]", assignments: "[object Object]"
30. **Set response (text)** `set` — options: "[object Object]", assignments: "[object Object]"
31. **Split out URLs** `splitOut` — options: "[object Object]", fieldToSplitOut: "output"
32. **Merge all data** `merge` — mode: "combine", options: "[object Object]", combinationMode: "mergeByPosition"
33. **Filter out empty hrefs** `filter` — options: "[object Object]", conditions: "[object Object]"
34. **Insert new row** `supabase` — table: `companies_output`
35. **Remove duplicated** `removeDuplicates` — compare: "selectedFields", options: "[object Object]", fieldsToCompare: "href"
36. **Set domain to path** `set` — include: "selected", options: "[object Object]", assignments: "[object Object]"
37. **Filter out invalid URLs** `filter` — options: "[object Object]", conditions: "[object Object]"
38. **Aggregate URLs** `aggregate` — include: "specifiedFields", options: "[object Object]", aggregate: "aggregateAllItemData"
39. **Set response (URL)** `set` — options: "[object Object]", assignments: "[object Object]"

## 💡 AI-Powered Ideas for Improvement
- **Explain:** This n8n workflow automates the process of retrieving and analyzing social media profile links from company websites. It fetches company details from a database, crawls their websites for social media links, and stores the results back into the database. This ensures businesses have up-to-date social media information for marketing or analysis.

- **Demonstrate:** A digital marketing agency uses this workflow to keep their client database updated with the latest social media profiles, enabling targeted marketing campaigns and improving client engagement.

- **Imitate:** Import the workflow into your n8n setup. Connect to your Supabase database to fetch company data. Use the URL retrieval tool to extract URLs from websites. Configure the OpenAI node for data parsing and ensure the final data is stored in your output database.

- **Practice:** Create a test database with sample companies and websites. Run the workflow to see how it extracts and stores social media links. Modify the workflow to add additional data points like contact information.

- **WIIFM:** Mastering this workflow empowers you to offer automated data enrichment services, increasing your service offerings. This can lead to improved client acquisition and retention, boosting your revenue and reputation in the automation industry.

## 🔧 Setup Instructions
1. **Connect Credentials:** openAiApi, supabaseApi.
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
