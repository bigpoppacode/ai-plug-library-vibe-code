# Code Schedule Create Scheduled
  ## 🚀 What It Does
  Moves data between apps and a **database/spreadsheet**, with logic and optional AI steps.
  
  ## 💼 Business Use Case
  Use as a **glue/API broker**: receive data, enrich/validate via APIs, and pass to downstream systems.
  
  ## ⚙️ How It Works
  1. **Trigger:** Runs on a **schedule** (e.g., `[object Object]`).
  2. **Sticky Note** `stickyNote` — width: "180.9747474601832", height: "276.31054308676767", content: "Select only the newest news: todays date going back xy days"
3. **Sticky Note1** `stickyNote` — width: "182.2748213508401", height: "304.2550759710132", content: "















Extracting the individual links of the press release page in order to retrieve the individual posts on their respective **url**"
4. **Sticky Note2** `stickyNote` — width: "178.75185894039254", height: "289.463147786618", content: "Extracting the dates of the posts of the press release page.
The right CSS selector has to be chosen.
[More info on datagrab.io](https://datagrab.io/blog/guide-to-css-selectors-for…[truncated]"
5. **Sticky Note3** `stickyNote` — width: "334.4404040637068", height: "1127.2017245821128", content: "# Scraping posts of a news site without RSS feed


The [News Site](https://www.colt.net/resources/type/news/) from Colt, a telecom company, does not offer an RSS feed, therefore we…[truncated]"
6. **Sticky Note4** `stickyNote` — width: "153.90180146729315", height: "237.91333335255808", content: "Weekly cron job"
7. **Sticky Note5** `stickyNote` — width: "185.41515152389002", height: "241.454848504947", content: "The html of the news site is being retrieved: https://www.colt.net/resources/type/news/"
8. **Sticky Note6** `stickyNote` — width: "187.3613302133812", height: "469.2923233086395", content: "As the extraction are returned as arrays, they transformed into individual JSON items to enable looping with other nodes"
9. **Sticky Note7** `stickyNote` — width: "150", height: "274.50898992724416", content: "The links of the individual posts and the dates of the posts "
10. **Sticky Note9** `stickyNote` — width: "155.0036363426638", height: "272.1479798256519", content: "Get the html of each individual **newest** post"
11. **Sticky Note10** `stickyNote` — width: "184.07417896879767", height: "269.2504410842093", content: "Extracting the title & content (text) of each individual news post with the right CSS selector"
12. **Sticky Note11** `stickyNote` — width: "191.87778190338406", height: "234.13422787857044", content: "Merge link to url, date with content (text) and title of each news psot"
13. **Sticky Note12** `stickyNote` — width: "150", height: "256.2444361932317", content: "Create a summary of each news post with ChatGPT. You need a ChatGPT API account for this"
14. **Sticky Note13** `stickyNote` — width: "152.85976723045226", height: "218.52702200939785", content: "













Get the 3 keywords of each news post"
15. **Sticky Note14** `stickyNote` — width: "182.7735784797001", height: "489.05192374172555", content: "Just a renaming of data fields and eliminating unnecessary ones"
16. **Sticky Note15** `stickyNote` — width: "169.7675735887227", height: "254.94383570413422", content: "Merge summary and keywords of each news post"
17. **Schedule Trigger each week** `scheduleTrigger` — rule: "[object Object]"
18. **Sticky Note16** `stickyNote` — width: "180.1723775015045", height: "260.5279202647822", content: "Add title, link and date to summary and keywords of each news post"
19. **Sticky Note17** `stickyNote` — width: "483.95825869942666", height: "268.5678114630957", content: "## News summaries and keywords &rarr; database

[NocoDB](https://nocodb.com/) is an SQL database, here we store the news summaries and keywords for further processing. Any other ou…[truncated]"
20. **Sticky Note18** `stickyNote` — width: "262.99083066277313", height: "268.56781146309544", content: ""
21. **Retrieve the web page for further processsing** `httpRequest` — url: `https://www.colt.net/resources/type/news/`
22. **Extract the HTML with the right css class** `html` — operation: **extractHtmlContent**
23. **Extract date** `html` — operation: **extractHtmlContent**
24. **Create single link items** `itemLists` — options: "[object Object]", fieldToSplitOut: "data"
25. **Create single date items** `itemLists` — options: "[object Object]", fieldToSplitOut: "data"
26. **Merge date & links** `merge` — mode: "combine", options: "[object Object]", combinationMode: "mergeByPosition"
27. **Select posts of last 7 days** `code` — jsCode: "const currentDate = new Date();
const sevenDaysAgo = new Date(currentDate.setDate(currentDate.getDate() - 70)); // Change the number of days going back to your liking (e.g. from -7…[truncated]"
28. **HTTP Request1** `httpRequest` — url: `={{ $json["Link"] }}`
29. **Extract individual posts** `html` — operation: **extractHtmlContent**
30. **Merge Content with Date & Link** `merge` — mode: "combine", options: "[object Object]", combinationMode: "mergeByPosition"
31. **Summary** `openAi` — resource: **chat**, prompt: "[object Object]", model: `gpt-4-1106-preview`
32. **Keywords** `openAi` — resource: **chat**, prompt: "[object Object]", model: `gpt-4-1106-preview`
33. **Rename Summary** `set` — fields: "[object Object]", include: "none", options: "[object Object]"
34. **Rename keywords** `set` — fields: "[object Object]", include: "none", options: "[object Object]"
35. **Merge** `merge` — mode: "combine", options: "[object Object]", combinationMode: "mergeByPosition"
36. **Merge ChatGPT output with Date & Link** `merge` — mode: "combine", options: "[object Object]", combinationMode: "mergeByPosition"
37. **NocoDB news database** `nocoDb` — operation: **create**, table: `mhbalmu9aaqcun6`
  
  ## 💡 AI-Powered Ideas for Improvement
  **Explain:**  
This n8n workflow automates the process of extracting the latest news posts from a website that lacks an RSS feed. It scrapes the Colt news page, retrieves individual news posts, extracts their titles, content, and publication dates, and then uses ChatGPT to generate summaries and keywords. These are stored in a NocoDB database for further processing.

**Demonstrate:**  
A telecom company lacking an RSS feed wants to keep track of their latest news articles. This workflow can be used to automate the extraction and summarization of new posts for internal newsletters or reports.

**Imitate:**  
1. Set up an n8n account and import the workflow.  
2. Configure the HTTP Request node with your target webpage.  
3. Set up CSS selectors for extracting links, dates, and content.  
4. Connect to ChatGPT API for summarization and keyword extraction.  
5. Configure storage in NocoDB or your preferred database.  

**Practice:**  
Create a test environment by setting up a similar workflow to scrape news from a different website. Use this to practice extracting data, summarizing it with AI, and storing it in a database. Modify CSS selectors and test data extraction.

**WIIFM:**  
Mastering this workflow can set you apart as a consultant offering unique solutions in data scraping and AI summarization. This skill is valuable for businesses needing automated content processing, helping you attract clients and generate income in the automation industry.
  
  ## 🔧 Setup Instructions
  1. **Connect Credentials:** openAiApi, nocoDbApiToken.
2. **Cron/Schedule:** Confirm timezone and cadence; start with a test window (e.g., every 5 minutes) then scale.
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
  