# Limit Code Create Webhook
  ## 🚀 What It Does
  Automates a flow using stickyNote×10, set×2, httpRequest×2.
  
  ## 💼 Business Use Case
  Use as a **glue/API broker**: receive data, enrich/validate via APIs, and pass to downstream systems.
  
  ## ⚙️ How It Works
  1. **Trigger:** This workflow starts with **When clicking ‘Test workflow’**.
  2. **When clicking ‘Test workflow’** `manualTrigger` — configured for its default action.
3. **Sticky Note1** `stickyNote` — width: "220", height: "400", content: "## Get Google News

Change the language parameters on ISO639-1 standard 

1. hl=it
2. gl=IT
3. ceid=IT:it"
4. **Sticky Note2** `stickyNote` — width: "220", height: "400", content: "## Limit result

I suggest limiting the results to a maximum of 3 because the entire workflow makes a lot of HTTP requests"
5. **Sticky Note3** `stickyNote` — color: "5", width: "220", height: "820"
6. **Sticky Note4** `stickyNote` — color: "3", width: "220", height: "400"
7. **Sticky Note5** `stickyNote` — width: "220", height: "400", content: "## Decoding Keys

The HTML content extracted contains the necessary variables for decoding:

+ signature
+ timestamp
+ base64string (already in the URL)"
8. **Sticky Note6** `stickyNote` — width: "220", height: "400", content: "## Clean output

Mapping variables for easy utilization"
9. **Sticky Note7** `stickyNote` — color: "3", width: "220", height: "400"
10. **Sticky Note8** `stickyNote` — color: "3", width: "220", height: "400"
11. **Sticky Note9** `stickyNote` — width: "220", height: "400", content: "## Cleaning URL

Google adds some unwanted and random characters at the beginning of the URL"
12. **Sticky Note10** `stickyNote` — color: "4", width: "220", height: "820"
13. **Reading Google News RSS** `rssFeedRead` — url: `https://news.google.com/rss?hl=it&gl=IT&ceid=IT:it`
14. **Limit** `limit` — maxItems: "5"
15. **Get encoded news URL** `httpRequest` — url: `={{ $('Limit').item.json.link }}`
16. **Extract decoding keys** `html` — operation: **extractHtmlContent**
17. **Map needed keys** `set` — options: "[object Object]", assignments: "[object Object]"
18. **Prepare decoding variables** `code` — jsCode: "return $input.all().map(item => {
    const gn_art_id = item.json.base64Str;
    const timestamp = item.json.timestamp;
    const signature = item.json.signature;

    const articl…[truncated]"
19. **Call decoding URL** `httpRequest` — method: **POST**, url: `https://news.google.com/_/DotsSplashUi/data/batchexecute`
20. **Decoded url** `set` — options: "[object Object]", assignments: "[object Object]"
21. **Aggregate results in a single object** `aggregate` — options: "[object Object]", aggregate: "aggregateAllItemData"
  
  ## 💡 AI-Powered Ideas for Improvement
  **Explain:** This n8n workflow automates the extraction and decoding of Google News RSS URLs to obtain clean article links. It starts by reading the Italian Google News RSS feed, limits the number of articles, retrieves encoded article URLs, extracts necessary decoding keys, prepares the decoding variables, and finally decodes the URLs to provide clean links to the articles.

**Demonstrate:** A media company could use this workflow to automatically fetch and decode article links from Google News to stay updated with the latest news in specific regions, enabling them to quickly distribute relevant news content to their audience.

**Imitate:** 1. Import the workflow into n8n. 2. Set the RSS feed URL to your desired language and region. 3. Adjust the 'Limit' node to control the number of articles. 4. Ensure all nodes are connected correctly. 5. Test the workflow to ensure it decodes URLs accurately.

**Practice:** Create a test RSS feed with a few entries. Run the workflow to decode the URLs and verify the output. Modify the feed or decoding parameters to see how changes affect the results.

**WIIFM:** Mastering this workflow allows you to offer automated news aggregation services, helping clients stay informed and responsive. This can increase your service offerings, attract new clients, and generate additional income in your AI automation business.
  
  ## 🔧 Setup Instructions
  1. **API Contracts:** Validate required headers and 2xx/4xx handling; add retries for 429/5xx.
  
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
  