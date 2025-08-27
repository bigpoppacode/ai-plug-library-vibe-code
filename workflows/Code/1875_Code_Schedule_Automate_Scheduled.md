# Code Schedule Automate Scheduled
  ## 🚀 What It Does
  Calls external APIs and uses **AI** to transform or decide, then routes the result downstream.
  
  ## 💼 Business Use Case
  Use as a **glue/API broker**: receive data, enrich/validate via APIs, and pass to downstream systems.
  
  ## ⚙️ How It Works
  1. **Trigger:** Runs on a **schedule** (e.g., `[object Object]`).
  2. **Schedule Trigger** `scheduleTrigger` — rule: "[object Object]"
3. **Anthropic Chat Model** `lmChatAnthropic` — model: `=claude-3-7-sonnet-20250219`
4. **Anthropic Chat Model1** `lmChatAnthropic` — model: `=claude-3-7-sonnet-20250219`
5. **Anthropic Chat Model2** `lmChatAnthropic` — model: `=claude-3-7-sonnet-20250219`
6. **Sticky Note** `stickyNote` — width: "1020", height: "340", content: "## Automatic Weekly Digital PR Stories Suggestions
A weekly automated system that identifies trending news on Reddit, evaluates public sentiment through comment analysis, extracts …[truncated]"
7. **Set Data** `set` — options: "[object Object]", assignments: "[object Object]"
8. **Split Topics into Items** `code` — jsCode: "// Input data (from $json.Topics)
const topicsString = $json.Topics;

// Split the string by newlines and trim whitespace
const topicsArray = topicsString.split('\n').map(topic => …[truncated]"
9. **Search Posts** `reddit` — operation: **search**
10. **Upvotes Requirement Filtering** `if` — options: "[object Object]", conditions: "[object Object]"
11. **Set Reddit Posts** `set` — options: "[object Object]", assignments: "[object Object]"
12. **Remove Duplicates** `code` — jsCode: "// Get all input items
const inputItems = $input.all();

// Create a Map to store the most upvoted item for each URL
const uniqueItemsMap = new Map();

for (const item of inputItem…[truncated]"
  
  ## 💡 AI-Powered Ideas for Improvement
  **Explain:** This n8n workflow is designed to automate the process of generating digital PR stories based on trending Reddit posts. Every week, it identifies trending news, evaluates public sentiment through comment analysis, extracts key information from source articles, and creates strategic angles for potential PR campaigns. The workflow compiles a comprehensive report that is stored on Google Drive and shared with a team via Mattermost for collaboration.

**Demonstrate:** A PR agency could use this workflow to streamline their content creation process, ensuring they stay ahead of trends by automatically generating story ideas and sentiment analysis based on current social media discussions. This allows them to focus on crafting strategic campaigns rather than manually sifting through data.

**Imitate:** To implement this workflow:
1. Set up the required accounts and credentials for Reddit, Anthropic, Google Drive, and Mattermost.
2. Input your topics of interest and Jina API key in the "Set Data" node.
3. Schedule the trigger to run weekly.
4. Test the workflow to ensure it generates and shares the reports correctly.

**Practice:** Create a simple test workflow that uses the Reddit API to fetch posts based on a keyword, analyzes the sentiment using a basic model, and logs the findings to a Google Sheet. This will help you understand the core components before scaling up.

**WIIFM:** By mastering this workflow, you can offer a high-value service to clients that automates the discovery and analysis of trending topics, enabling them to create timely and relevant PR campaigns. This can differentiate you in the market, attract new clients, and increase your revenue through automation services.
  
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
  