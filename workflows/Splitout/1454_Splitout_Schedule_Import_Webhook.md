# Splitout Schedule Import Webhook
## 🚀 What It Does
Moves data between apps and a **database/spreadsheet**, with logic and optional AI steps.

## 💼 Business Use Case
Use as a **glue/API broker**: receive data, enrich/validate via APIs, and pass to downstream systems.

## ⚙️ How It Works
1. **Trigger:** Runs on a **schedule** (e.g., `[object Object]`).
2. **Schedule Trigger** `scheduleTrigger` — rule: "[object Object]"
3. **When clicking ‘Test workflow’** `manualTrigger` — configured for its default action.
4. **Sticky Note** `stickyNote` — content: "## Change this node
Edit the HTTP Request URL to your Squarespace blog URL

eg: https://beyondspace.studio/blog
"
5. **Sticky Note1** `stickyNote` — content: "## Spreadsheet template
Clone this spreadsheet as reference
https://docs.google.com/spreadsheets/d/1HGc7o4mqMY1t9fXT6LBhmZixjJYr0eapSUosXMA9v8E/edit?gid=0#gid=0"
6. **Fetch Squarespace blog** `httpRequest` — url: `https://beyondspace.studio/blog`
7. **Iterate the collection items** `splitOut` — options: "[object Object]", fieldToSplitOut: "items"
8. **Squarespace collection Spreadsheet** `googleSheets` — operation: **appendOrUpdate**

## 💡 AI-Powered Ideas for Improvement
**Explain**  
This n8n workflow automates the process of fetching blog posts from a Squarespace website and storing them into a Google Sheets document. First, it triggers based on a set schedule or manually, then it retrieves the blog data via an HTTP request. The data is iterated over, and each item is appended or updated in a Google Sheets spreadsheet. This ensures that the latest blog information is always available in an organized format.

**Demonstrate**  
A small business owner with a Squarespace blog could use this workflow to automatically update their Google Sheets with new blog posts, making it easier to track content and analyze performance over time.

**Imitate**  
1. Import the workflow into n8n.  
2. Set your Squarespace blog URL in the HTTP Request node.  
3. Connect your Google Sheets account.  
4. Adjust the schedule or test manually.  
5. Run the workflow to ensure it updates the spreadsheet correctly.

**Practice**  
Create a test Google Sheets document. Run the workflow with a test Squarespace URL and observe how the data populates. Modify blog data on Squarespace and re-run the workflow to see updates in action.

**WIIFM**  
Mastering this workflow allows you to automate content tracking, offering clients a seamless way to manage their blog data. This skill can enhance your service offerings, attract more clients, and increase your income as an automation consultant.

## 🔧 Setup Instructions
1. **Connect Credentials:** googleSheetsOAuth2Api.
2. **Cron/Schedule:** Confirm timezone and cadence; start with a test window (e.g., every 5 minutes) then scale.
3. **Data Mapping:** Verify base/sheet IDs and column names match exactly to prevent silent failures.
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
