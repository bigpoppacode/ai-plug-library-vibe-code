# Code Schedule Create Scheduled
  ## 🚀 What It Does
  Moves data between apps and a **database/spreadsheet**, with logic and optional AI steps.
  
  ## 💼 Business Use Case
  Use as a **glue/API broker**: receive data, enrich/validate via APIs, and pass to downstream systems.
  
  ## ⚙️ How It Works
  1. **Trigger:** Runs on a **schedule** (e.g., `[object Object]`).
  2. **Run This First to Get Long Live Access Token** `httpRequest` — url: `[redacted]`
3. **Sticky Note** `stickyNote` — height: "240", content: "[redacted]"
4. **Get Posts Schedule** `scheduleTrigger` — rule: "[object Object]"
5. **Sticky Note1** `stickyNote` — height: "180", content: "[redacted]"
6. **Sticky Note2** `stickyNote` — height: "600", content: "## Set your Theads ID & Post Time

Chage the your with your Threads ID to get your posts / 請先透過上方教學獲取 Threads ID

Set the time of the Post you wanna get / 設置抓取的貼文時間

[Check Faceboo…[truncated]"
7. **Sticky Note3** `stickyNote` — height: "140", content: "## Set Notion Acc

Set your notion account and database you wanna save the post"
8. **Sticky Note4** `stickyNote` — height: "140", content: "## Create Page

Before create page, please the properties of your post by your demands"
9. **Sticky Note5** `stickyNote` — height: "200", content: "[redacted]"
10. **Sticky Note6** `stickyNote` — width: "600", height: "180", content: "## Get your Threads Post automatically

Creator: [Geekaz](https://www.threads.net/@geekaz?hl=zh-tw)

If your have any problems or question, please send message to my instagram!
有任何…[truncated]"
11. **Sticky Note7** `stickyNote` — height: "140", content: "## Comment's Filter

Set your Threads Username"
12. **Refresh Token** `httpRequest` — url: `[redacted]`
13. **Get Post** `httpRequest` — url: `https://graph.threads.net/v1.0/<Your Threads ID>/threads?fields=id,media_product_type,media_type,media_url,permalink,owner,username,text,timestamp,shortcode,thumbnail_url,children,…[truncated]`
14. **Get Post ID** `function` — functionCode: "// 獲取 API 返回的完整資料 (假設只有一個 "data" 陣列)
const allData = items[0].json.data;

// 過濾符合條件的貼文：
// 條件 1: media_type = "TEXT_POST" 或 "VIDEO"
// 條件 2: is_quote_post = false
const filteredPos…[truncated]"
  
  ## 💡 AI-Powered Ideas for Improvement
  ### Explain
This n8n workflow automates the process of collecting and managing Threads posts. It retrieves posts using the Threads API, filters them based on certain criteria (e.g., media type and quote status), and stores them in a Notion database. The workflow is triggered by a schedule, ensuring regular updates. It also handles access token refreshing to maintain API connectivity.

### Demonstrate
A social media manager could use this workflow to automatically gather and organize posts from a Threads account into a Notion database. This allows for easy tracking and analysis of content, helping to streamline content management and reporting processes.

### Imitate
1. Import the workflow into n8n.
2. Set up your Threads API credentials and Notion account.
3. Configure the schedule for post retrieval.
4. Adjust filtering criteria as needed.
5. Test the workflow to ensure posts are correctly retrieved and stored in Notion.

### Practice
Create a test Notion database and run the workflow with sample Threads data. Observe how the posts are filtered and stored. Modify the filtering criteria and run the workflow again to see how it impacts the data captured.

### WIIFM
Mastering this workflow can enable you to offer automated social media management solutions to clients, reducing manual data entry and improving content strategy. This could enhance your service portfolio, leading to potential client retention and increased income from automation services.
  
  ## 🔧 Setup Instructions
  1. **Connect Credentials:** notionApi.
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
  