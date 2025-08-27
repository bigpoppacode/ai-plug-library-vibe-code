# Splitout Code Automation Webhook
## 🚀 What It Does
Automates a flow using httpRequest×5, stickyNote×3, code×3.

## 💼 Business Use Case
Use as a **glue/API broker**: receive data, enrich/validate via APIs, and pass to downstream systems.

## ⚙️ How It Works
1. **Trigger:** Runs on a **schedule** (e.g., `[object Object]`).
2. **Schedule Trigger** `scheduleTrigger` — rule: "[object Object]"
3. **Sticky Note** `stickyNote` — width: "1120", height: "220", content: "## Readeck"
4. **Sticky Note1** `stickyNote` — width: "480", height: "200", content: "## Telegram"
5. **Sticky Note2** `stickyNote` — width: "1120", height: "220", content: "## Hoarder"
6. **channel_items_tg** `httpRequest` — url: `[redacted]`
7. **channel_links_tg** `code` — jsCode: "// Define the chatId from the environment variable
const chatId = parseInt($env.TG_SHERLINK_ID, 10);
// Access the "result" field from the previous node's output
const updates = $n…[truncated]"
8. **get_links_rd** `httpRequest` — url: `={{$env.READECK_SERVER}}/api/bookmarks`
9. **get_links_hd** `httpRequest` — url: `={{$env.HOARDER_SERVER}}/api/v1/bookmarks`
10. **saved_links_rd** `set` — options: "[object Object]", assignments: "[object Object]"
11. **Split Out** `splitOut` — options: "[object Object]", fieldToSplitOut: "bookmarks"
12. **not_saved_links_rd** `code` — jsCode: "const linksCanalItems = $('channel_links_tg').all();
const saved_links_items = $('saved_links_rd').all();

// Extract urls
const saved_urls = new Set(
    saved_links_items.map(ite…[truncated]"
13. **saved_links_hd** `set` — options: "[object Object]", assignments: "[object Object]"
14. **save_link_rd** `httpRequest` — method: **POST**, url: `={{$env.READECK_SERVER}}/api/bookmarks`
15. **not_saved_links_hd** `code` — jsCode: "const linksCanalItems = $('channel_links_tg').all();
const saved_links_items = $('saved_links_hd').all();

// Extract links
const saved_links = new Set(
    saved_links_items.map(i…[truncated]"
16. **save_link_hd** `httpRequest` — method: **POST**, url: `={{$env.HOARDER_SERVER}}/api/v1/bookmarks`

## 💡 AI-Powered Ideas for Improvement
- **Explain:** This n8n workflow automatically fetches messages from a specified Telegram channel, extracts links from these messages, checks against existing links saved in Readeck and Hoarder databases, and saves any new links to these databases. It helps in organizing and storing relevant information from Telegram channels.

- **Demonstrate:** A content curator could use this workflow to automatically collect and save new articles or resources shared in a Telegram channel to their Readeck or Hoarder account, ensuring they never miss out on valuable content.

- **Imitate:** Import the workflow into n8n. Connect your Telegram, Readeck, and Hoarder accounts. Set the Telegram channel and API keys in the environment variables. Schedule the workflow to run at desired intervals. Test to ensure links are correctly logged.

- **Practice:** Create a test Telegram channel, post some messages with links, and run the workflow. Check that the links are identified and saved to Readeck and Hoarder. Adjust the workflow to handle different types of links or channels.

- **WIIFM:** Mastering this workflow can help you offer content aggregation and management services, attracting clients who need efficient ways to track and store information from social media channels, thereby expanding your automation business offerings.

## 🔧 Setup Instructions
1. **Cron/Schedule:** Confirm timezone and cadence; start with a test window (e.g., every 5 minutes) then scale.
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
