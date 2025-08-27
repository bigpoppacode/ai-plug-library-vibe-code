# Wait Splitout Send Webhook
## 🚀 What It Does
Moves data between apps and a **database/spreadsheet**, with logic and optional AI steps.

## 💼 Business Use Case
Use as a **glue/API broker**: receive data, enrich/validate via APIs, and pass to downstream systems.

## ⚙️ How It Works
1. **Trigger:** This workflow starts with **Starts scraper workflow**.
2. **Starts scraper workflow** `executeWorkflowTrigger` — configured for its default action.
3. **Run workflow** `manualTrigger` — configured for its default action.
4. **Sticky Note** `stickyNote` — color: "5", width: "740", height: "180"
5. **Sticky Note2** `stickyNote` — color: "6", height: "100", content: "**Optional** 👇
Set wait time between each query workflow execution. Default is 2 seconds."
6. **Sticky Note3** `stickyNote` — width: "480", height: "100", content: "### Scraper 👇
This workflow will be executed in the background for each query. Click the **All executions** tab in the left sidebar to see the executions running."
7. **Sticky Note4** `stickyNote` — color: "4", height: "180", content: "👆 
1. Setup your **credentials**. Here's a [video tutorial](https://youtu.be/O5RnWDM27M8) on how to do that.

2. Choose which document and sheet to save the scraped emails to. "
8. **Sticky Note5** `stickyNote` — color: "3", content: " ## ⚠️ Note

A [video tutorial](https://youtu.be/HaiO-UeiKBA) for this workflow guide is available on my [Youtube channel](https://www.youtube.com/channel/UCn8xmUBunez1SsDVRfZDUGA)"
9. **Sticky Note6** `stickyNote` — color: "7", width: "480", height: "140"
10. **Sticky Note7** `stickyNote` — color: "6", width: "160", height: "100"
11. **Sticky Note8** `stickyNote` — color: "6", width: "200", height: "100"
12. **Search Google Maps with query** `httpRequest` — url: `=https://www.google.com/maps/search/{{ $json.query }}`
13. **Scrape URLs from results** `code` — jsCode: "const data = $input.first().json.data

const regex = /https?:\/\/[^\/]+/g

const urls = data.match(regex)

return urls.map(url => ({json: {url: url}}))"
14. **Filter irrelevant URLs** `filter` — options: "[object Object]", conditions: "[object Object]"
15. **Remove Duplicate URLs** `removeDuplicates` — configured for its default action.

## 💡 AI-Powered Ideas for Improvement
**Explain:**  
This n8n workflow automates the process of extracting email addresses from businesses listed on Google Maps. It searches Google Maps using specified queries, scrapes URLs from the search results, filters out irrelevant ones, and removes duplicates. The workflow then requests the webpage for each URL, scrapes email addresses, filters out irrelevant or duplicate emails, and saves the valid emails to a Google Sheet.

**Demonstrate:**  
A business owner could use this workflow to gather email addresses of local businesses for a marketing campaign, ensuring they have a clean and relevant contact list for outreach.

**Imitate:**  
1. Import the workflow into n8n.
2. Set up your Google Sheets and Google Maps API credentials.
3. Input your search queries into the workflow.
4. Run the workflow to start scraping and collecting email addresses.
5. Verify that the emails are correctly saved in your specified Google Sheet.

**Practice:**  
Create a test query for a specific type of business in your area. Run the workflow and observe how it collects and filters email addresses. Adjust the filtering criteria to see the impact on the results.

**WIIFM:**  
By mastering this workflow, you can offer email scraping services to businesses looking to expand their marketing efforts. This can help you attract clients and generate income by providing them with targeted leads, enhancing their marketing campaigns and your service portfolio.

## 🔧 Setup Instructions
1. **Data Mapping:** Verify base/sheet IDs and column names match exactly to prevent silent failures.
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
