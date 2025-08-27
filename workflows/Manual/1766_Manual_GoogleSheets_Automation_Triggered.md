# Manual GoogleSheets Automation Triggered
  ## 🚀 What It Does
  Monitors events, processes them, and **notifies** people/apps (Slack/Email) with structured updates.
  
  ## 💼 Business Use Case
  Ideal for **lead intake**, **enrichment**, and **CRM updates** with alerts to the right channel.
  
  ## ⚙️ How It Works
  1. **Trigger:** This workflow starts with **When clicking ‘Test workflow’**.
  2. **When clicking ‘Test workflow’** `manualTrigger` — configured for its default action.
3. **OpenAI Chat Model** `lmChatOpenAi` — model: `[object Object]`
4. **OpenAI Chat Model1** `lmChatOpenAi` — model: `[object Object]`
5. **OpenAI Chat Model2** `lmChatOpenAi` — model: `[object Object]`
6. **Sticky Note** `stickyNote` — width: "880", height: "440", content: "# Data Collection
## Retrieves recent popular posts from specified Reddit communities
## Filters content by engagement metrics and keywords"
7. **Sticky Note1** `stickyNote` — width: "1020", height: "660", content: "# Post Sentiment Analysis
## "
8. **Sticky Note2** `stickyNote` — color: "4", width: "820", height: "680"
9. **Sticky Note3** `stickyNote` — color: "6", width: "1220", height: "640"
10. **Get Posts** `reddit` — operation: **search**
11. **Filter Posts By Features** `if` — options: "[object Object]", conditions: "[object Object]"
12. **Select Key Fields** `set` — options: "[object Object]", assignments: "[object Object]"
13. **Analysis Content  By AI** `agent` — text: "Decide whether this reddit post is describing a business-related problem or a need for a solution. The post  should mention a specific challenge 
 or requirement that a business is…[truncated]", agent: "conversationalAgent", options: "[object Object]"
14. **Merge Input** `merge` — mode: "combine", options: "[object Object]", combineBy: "combineByPosition"
15. **Filter Posts By Content** `if` — options: "[object Object]", conditions: "[object Object]"
16. **Post Summarization** `chainSummarization` — options: "[object Object]"
17. **Find Proper Solutions** `openAi` — modelId: "[object Object]", options: "[object Object]", messages: "[object Object]"
18. **Post Sentiment Analysis** `sentimentAnalysis` — options: "[object Object]", inputText: "={{ $json.postcontent }}"
19. **Merge 3 Inputs** `merge` — mode: "combine", options: "[object Object]", combineBy: "combineByPosition"
20. **Positive Posts Draft** `gmail` — resource: **draft**
21. **Neutral  Posts Draft** `gmail` — resource: **draft**
22. **Negative  Posts Draft** `gmail` — resource: **draft**
23. **Output The Results** `googleSheets` — operation: **append**
  
  ## 💡 AI-Powered Ideas for Improvement
  **Explain**  
This n8n workflow automates the analysis of Reddit posts to identify business opportunities. It retrieves popular posts from specified subreddits, filters them based on engagement metrics and keywords, and uses AI to determine if the posts describe business-related problems or needs. It then conducts sentiment analysis and generates potential solutions using AI. The results, including sentiment and proposed solutions, are logged in Google Sheets and drafts are created in Gmail for posts with positive, neutral, and negative sentiments.

**Demonstrate**  
A consultant might use this workflow to monitor Reddit for potential business leads by identifying posts that describe unmet needs or challenges, enabling proactive outreach to offer solutions.

**Imitate**  
1. Import the workflow into n8n.  
2. Connect your Reddit, OpenAI, Gmail, and Google Sheets accounts.  
3. Customize the subreddit and keywords to target your niche.  
4. Set the workflow to run on a schedule or trigger it manually.  
5. Review the Google Sheets output for insights.

**Practice**  
Create a test Reddit post about a business problem. Run the workflow to see how it analyzes the post, generates a solution, and logs the results. Adjust the AI prompts to refine the analysis.

**WIIFM**  
Mastering this workflow empowers you to offer AI-driven market analysis services, helping businesses identify opportunities and generate leads. This can enhance your service portfolio, attract clients, and boost your income in the AI automation space.
  
  ## 🔧 Setup Instructions
  1. **Connect Credentials:** openAiApi, gmailOAuth2, googleSheetsOAuth2Api, redditOAuth2Api.
2. **Data Mapping:** Verify base/sheet IDs and column names match exactly to prevent silent failures.
3. **Notification Targets:** Confirm channel/email IDs and that the bot/app is authorized to post.
  
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
  