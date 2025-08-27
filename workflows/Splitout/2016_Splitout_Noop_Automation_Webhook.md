# Splitout Noop Automation Webhook
## 🚀 What It Does
Moves data between apps and a **database/spreadsheet**, with logic and optional AI steps.

## 💼 Business Use Case
Use as a **glue/API broker**: receive data, enrich/validate via APIs, and pass to downstream systems.

## ⚙️ How It Works
1. **Trigger:** This workflow starts with **When clicking ‘Test workflow’**.
2. **OpenAI Chat Model** `lmChatOpenAi` — model: `[object Object]`
3. **When clicking ‘Test workflow’** `manualTrigger` — configured for its default action.
4. **Sticky Note1** `stickyNote` — color: "5", width: "2620", height: "480"
5. **Sticky Note2** `stickyNote` — width: "640", height: "820", content: "### **How to Use This Workflow:**
📝 **YouTube Comment Sentiment Analyzer**

1. 🔘 **Trigger:** Click "Execute Workflow" to run it manually.

2. 📄 Your Google Sheet should have **…[truncated]"
6. **Get Video Urls from Google Sheet** `googleSheets` — options: "[object Object]", sheetName: "[object Object]", documentId: "[object Object]"
7. **check next fetch time is available or not** `if` — options: "[object Object]", conditions: "[object Object]"
8. **check next fetch time is before the current time** `if` — options: "[object Object]", conditions: "[object Object]"
9. **Get Comments for video urls** `httpRequest` — url: `https://www.googleapis.com/youtube/v3/commentThreads`
10. **No Operation, do nothing** `noOp` — configured for its default action.
11. **Check Success Response** `if` — options: "[object Object]", conditions: "[object Object]"
12. **Split Out** `splitOut` — options: "[object Object]", fieldToSplitOut: "body.items"
13. **No Operation, do nothing1** `noOp` — configured for its default action.
14. **Analyze sentiment of every comment** `sentimentAnalysis` — options: "[object Object]", inputText: "={{ $json.snippet.topLevelComment.snippet.textOriginal }}"
15. **Format fields as required to save in google sheet** `set` — options: "[object Object]", assignments: "[object Object]"
16. **Insert and update comment in google sheet** `googleSheets` — operation: **appendOrUpdate**
17. **Update last fetched time and next_fetch_time** `googleSheets` — operation: **appendOrUpdate**

## 💡 AI-Powered Ideas for Improvement
**Explain**  
This n8n workflow automates the process of analyzing YouTube comments for sentiment. It retrieves video URLs from a Google Sheet, fetches the comments using YouTube's API, and analyzes each comment's sentiment using OpenAI. The results, including sentiment, are saved back to the Google Sheet, ensuring up-to-date insights into audience feedback.

**Demonstrate**  
A digital marketing agency could use this workflow to monitor and analyze audience feedback on their client's YouTube videos, allowing them to quickly respond to negative comments and engage with positive ones, enhancing brand reputation and customer engagement.

**Imitate**  
1. Set up a Google Sheet with video URLs.
2. Import the workflow into n8n.
3. Connect your Google Sheets and OpenAI accounts.
4. Test the workflow to ensure it fetches and analyzes comments correctly.
5. Customize the workflow to match your data structure if necessary.

**Practice**  
Create a new test Google Sheet with a few YouTube video URLs. Run the workflow and check how the sentiment analysis results are stored. Adjust the workflow to handle different data formats or additional sentiment categories.

**WIIFM**  
Mastering this workflow allows you to provide sentiment analysis services, offering clients valuable insights into their audience's opinions. This can lead to increased client satisfaction, retention, and potential upsells in your automation consultancy business.

## 🔧 Setup Instructions
1. **Connect Credentials:** openAiApi, googleApi, httpQueryAuth.
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
