# Code Schedule Automate Scheduled
  ## 🚀 What It Does
  Moves data between apps and a **database/spreadsheet**, with logic and optional AI steps.
  
  ## 💼 Business Use Case
  Use as a **glue/API broker**: receive data, enrich/validate via APIs, and pass to downstream systems.
  
  ## ⚙️ How It Works
  1. **Trigger:** This workflow starts with **When clicking ‘Test workflow’**.
  2. **When clicking ‘Test workflow’** `manualTrigger` — configured for its default action.
3. **Start every hour past 11 minutes** `scheduleTrigger` — rule: "[object Object]"
4. **Sticky Note** `stickyNote` — color: "5", height: "1300", content: "## Cron trigger
Google Trends update the RSS feed every 10 minutes. This will start wordflow 1 minute after. "
5. **Sticky Note1** `stickyNote` — color: "3", height: "480", content: "## CONFIGURATION
min_traffic is a numeric value. Google Trend RSS has an approx traffic value 100, 200, 500, 1000 etc.

max_result is a numeric value used to limit max rss to scrap…[truncated]"
6. **Sticky Note2** `stickyNote` — height: "480", content: "## Google Sheet Database
This is main sheet where all your Editorial plan will be saved.

The column status value could be a trigger for other automations"
7. **Sticky Note3** `stickyNote` — height: "480", content: "## Google Trends request

We get last kwyword in trend. Every item has a main keyword and 3 URL. We will use those url to scrape content and generate a combined summary"
8. **Sticky Note4** `stickyNote` — height: "480", content: "## Simple conversion

Converts XML RSS into a more readable json object"
9. **Sticky Note5** `stickyNote` — height: "480", content: "## Building dataset

Here we limits results, filter by mmin traffic and we flat the RSS structure to adapt to Google Sheet, fields are renamed as per description.

Then RSS result …[truncated]"
10. **Sticky Note6** `stickyNote` — height: "460", content: "## Data mapping

Here you have all fields needed in Google Sheet.

While done, the content of 3 website linked in Google Trends RSS will be merged in a single Summary field"
11. **Sticky Note7** `stickyNote` — color: "3", height: "460", content: "## Data check

Sometimes scraping HTML content fails (for some reasons), that's normal but this should avoid to save a zero content if all 3 scraping nodes will fail"
12. **Sticky Note8** `stickyNote` — height: "460", content: "## Data mapping

Here you have all fields needed in Google Sheet.

While done, the content of 3 website linked in Google Trends RSS will be merged in a single Summary field"
13. **Sticky Note9** `stickyNote` — color: "7", width: "1280", height: "300"
14. **Sticky Note10** `stickyNote` — color: "4", width: "500", height: "460"
15. **CONFIG** `set` — options: "[object Object]", assignments: "[object Object]"
16. **Get saved keywords** `googleSheets` — options: "[object Object]", sheetName: "[object Object]", documentId: "[object Object]"
17. **GoogleTrends** `httpRequest` — url: `https://trends.google.it/trending/rss?geo=IT`
18. **XML** `xml` — options: "[object Object]"
19. **New keywords** `code` — jsCode: "const max_results = $('CONFIG').first().json.max_results;
const min_traffic = $('CONFIG').first().json.min_traffic;

const gsheet = $("Get saved keywords").all();
const gsheetKeys …[truncated]"
  
  ## 💡 AI-Powered Ideas for Improvement
  ### Explain
This workflow automatically fetches trending keywords from Google Trends every hour, filters them based on traffic criteria, and scrapes related web content. It then compiles this data into summaries and stores it in a Google Sheet. If scraping fails, it avoids saving incomplete data.

### Demonstrate
A digital marketing agency could use this workflow to monitor trending topics, gather content from related articles, and compile insights for content strategy, saving hours of manual research and ensuring timely, data-driven decisions.

### Imitate
1. Import the workflow to n8n.
2. Connect Google Sheets and configure your document ID.
3. Set the `min_traffic` and `max_results` in the CONFIG node.
4. Test the workflow manually to ensure it fetches and saves data as expected.
5. Schedule the workflow to run every hour for continuous updates.

### Practice
Create a Google Sheet and test the workflow with a small set of data. Adjust the `min_traffic` filter to see how it affects the results. Check how the workflow handles failed scrapes by simulating errors in content URLs.

### WIIFM
Mastering this workflow allows you to offer automated trend monitoring and content curation services, creating value by providing clients with timely insights, enhancing their content strategies, and potentially increasing your income through premium service offerings.
  
  ## 🔧 Setup Instructions
  1. **Connect Credentials:** googleSheetsOAuth2Api.
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
  