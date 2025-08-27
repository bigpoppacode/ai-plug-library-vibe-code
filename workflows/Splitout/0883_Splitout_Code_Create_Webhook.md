# Splitout Code Create Webhook
## 🚀 What It Does
Monitors events, processes them, and **notifies** people/apps (Slack/Email) with structured updates.

## 💼 Business Use Case
Use as a **glue/API broker**: receive data, enrich/validate via APIs, and pass to downstream systems.

## ⚙️ How It Works
1. **Trigger:** Runs on a **schedule** (e.g., `[object Object]`).
2. **OpenAI Chat Model3** `lmChatOpenAi` — model: `[object Object]`
3. **Trigger at 08:30 am** `scheduleTrigger` — rule: "[object Object]"
4. **Structured Output Parser** `outputParserStructured` — jsonSchemaExample: "{
  "answer": "boolean | null"
}
"
5. **Sticky Note1** `stickyNote` — color: "7", width: "220", height: "680"
6. **Sticky Note** `stickyNote` — color: "7", width: "620", height: "380"
7. **Sticky Note2** `stickyNote` — color: "7", width: "840", height: "700"
8. **Sticky Note3** `stickyNote` — color: "7", width: "1440", height: "700"
9. **Sticky Note4** `stickyNote` — width: "580", height: "380", content: "### [Check the Tutorial](https://www.youtube.com/watch?v=q8VCAUbuat8)
![Thumbnail](https://www.samirsaci.com/content/images/2025/04/temp-10.png)"
10. **Query EU News Website** `httpRequest` — url: `https://commission.europa.eu/news-and-media/news_en`
11. **Get Sustainability News** `googleSheets` — options: "[object Object]", filtersUI: "[object Object]", sheetName: "[object Object]"
12. **Extract Articles Blocks** `html` — operation: **extractHtmlContent**
13. **Generate Email HTML** `code` — jsCode: "const summary = `Welcome to the EU Sustainability News Digest provided by <a href="https://logi-green.com" style="color: #0077cc; text-decoration: none;">LogiGreen Consulting</a>.`…[truncated]"
14. **Split Out by Article Block** `splitOut` — options: "[object Object]", fieldToSplitOut: "articles"
15. **Send to your mailing list** `gmail` — sendTo: "email@gmail.com", message: "={{ $json.email_body }}", options: "[object Object]"
16. **Parse Article Blocks** `html` — operation: **extractHtmlContent**
17. **If** `if` — options: "[object Object]", conditions: "[object Object]"

## 💡 AI-Powered Ideas for Improvement
**Explain:**  
This n8n workflow automatically gathers news articles from the EU News Website every morning at 8:30 AM. It extracts article details, classifies them for sustainability relevance using an AI model, and records the results in a Google Sheet. The workflow then compiles the relevant sustainability news into an HTML email and sends it to a mailing list.

**Demonstrate:**  
A consultancy firm could use this workflow to send clients a daily digest of sustainability news, enhancing their service offerings and providing valuable insights without manual effort.

**Imitate:**  
1. Import the workflow into n8n.  
2. Set up the schedule to trigger at 8:30 AM.  
3. Configure your Google Sheets and Gmail nodes with the necessary credentials.  
4. Customize the HTML email format as needed.  
5. Test the workflow with sample data to ensure accuracy.

**Practice:**  
Create a test workflow using a different news source. Extract article titles and send a summary email to yourself. Modify the email format to include article links and descriptions.

**WIIFM:**  
Mastering this workflow allows you to automate content delivery, providing clients with timely, relevant information. This capability can enhance your service offerings, attract new clients, and generate additional income by automating valuable insights delivery.

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
