# Code Schedule Create Webhook
  ## 🚀 What It Does
  Monitors events, processes them, and **notifies** people/apps (Slack/Email) with structured updates.
  
  ## 💼 Business Use Case
  Use as a **glue/API broker**: receive data, enrich/validate via APIs, and pass to downstream systems.
  
  ## ⚙️ How It Works
  1. **Trigger:** Runs on a **schedule** (e.g., `[object Object]`).
  2. **Sticky Note** `stickyNote` — color: "7", width: "235.65210573476693", height: "396.04301075268825"
3. **Sticky Note1** `stickyNote` — width: "465", height: "342.8125", content: "# Read me
This workflow monitor G2 reviews URLS. 

When a new review is published, it will: 
- trigger a Slack notification 
- record the review in Google Sheets


To install it, y…[truncated]"
4. **Execute workflow every day** `scheduleTrigger` — rule: "[object Object]"
5. **Get all past reviews** `googleSheets` — options: "[object Object]", sheetName: "[object Object]", documentId: "[object Object]"
6. **Add your competitors here** `code` — jsCode: "return [
  {"competitor":"zendesk"},
  {"competitor":"intercom"},
  {"competitor":"dixa"}
]"
7. **Get G2 data with ScrapingBee** `httpRequest` — url: `https://app.scrapingbee.com/api/v1`
8. **Get review section HTML** `html` — operation: **extractHtmlContent**
9. **Iterate on reviews** `itemLists` — options: "[object Object]", fieldToSplitOut: "divs"
10. **Extract structured data** `html` — operation: **extractHtmlContent**
11. **Convert Review HTML to Markdown** `markdown` — html: "={{ $json.reviewHtml }}", options: "[object Object]", destinationKey: "review"
12. **Continue only if review is new** `merge` — mode: "combine", options: "[object Object]", joinMode: "keepNonMatches"
13. **Add new review to Google Sheets** `googleSheets` — operation: **append**
14. **Send new review to Slack** `slack` — text: "=🚨 New review in G2

Rating: {{ $json["rating"] }}
<{{ $json["user_profile"]}}|See user in G2>
<{{$json["reviewUrl"]}}|See review in G2>

Review Content:
{{ $json.review }}", select: "channel", channelId: "[object Object]"
  
  ## 💡 AI-Powered Ideas for Improvement
  **Explain:**  
This n8n workflow automates the monitoring of G2 reviews for specified competitors. It checks for new reviews daily using ScrapingBee to scrape review data, processes the reviews, and then performs two main actions: sends a notification to a Slack channel and records the review in a Google Sheets document. This ensures that your team is always updated with the latest reviews without manual checking.

**Demonstrate:**  
A software company can use this workflow to keep track of reviews for its products and competitors, allowing them to respond promptly to feedback and adjust strategies based on customer sentiment.

**Imitate:**  
1. Import the workflow into n8n.
2. Set up and authenticate your Google Sheets, Slack, and ScrapingBee accounts.
3. Add competitors you want to monitor in the code node.
4. Schedule the workflow to run daily.
5. Test the workflow with a known review to ensure it triggers the Slack notification and logs to Google Sheets.

**Practice:**  
Create a Google Sheet and add some test review URLs. Run the workflow to see how it logs reviews and sends Slack notifications. Modify the competitor list and observe changes in the workflow's behavior.

**WIIFM:**  
Mastering this workflow empowers you to offer value-added services like real-time competitor and product monitoring, enhancing your business intelligence offerings. This can attract more clients and increase your income by providing insights that drive strategic decisions.
  
  ## 🔧 Setup Instructions
  1. **Cron/Schedule:** Confirm timezone and cadence; start with a test window (e.g., every 5 minutes) then scale.
2. **Data Mapping:** Verify base/sheet IDs and column names match exactly to prevent silent failures.
3. **Notification Targets:** Confirm channel/email IDs and that the bot/app is authorized to post.
4. **API Contracts:** Validate required headers and 2xx/4xx handling; add retries for 429/5xx.
  
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
  