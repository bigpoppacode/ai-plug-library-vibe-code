# Schedule HTTP Create Scheduled
## 🚀 What It Does
Automates a flow using html, httpRequest, scheduleTrigger.

## 💼 Business Use Case
Use as a **glue/API broker**: receive data, enrich/validate via APIs, and pass to downstream systems.

## ⚙️ How It Works
1. **Trigger:** Runs on a **schedule** (e.g., `[object Object]`).
2. **Schedule Trigger** `scheduleTrigger` — rule: "[object Object]"
3. **Google Gemini Chat Model** `lmChatGoogleGemini` — options: "[object Object]"
4. **Sticky Note** `stickyNote` — width: "683.6774193548385", height: "581.4193548387093", content: "# Financial News Recap Workflow

This workflow automates the daily email delivery of curated financial news to a designated recipient at 7:00 AM. It extracts relevant financial new…[truncated]"
5. **Get financial news online** `httpRequest` — url: `https://www.ft.com/`
6. **Extract specific content** `html` — operation: **extractHtmlContent**
7. **Gather the elements** `set` — options: "[object Object]", assignments: "[object Object]"
8. **AI Agent** `agent` — text: "=Here are the news to summarise :

{{ $json['News together'] }}", options: "[object Object]", promptType: "define"
9. **Send the summary by e-mail** `microsoftOutlook` — subject: "Financial news from today", bodyContent: "=News of the day : 

{{ $json.output }}", toRecipients: ""

## 💡 AI-Powered Ideas for Improvement
**Explain**  
This n8n workflow automates the daily delivery of curated financial news via email at 7:00 AM. It fetches financial news from FT.com, extracts key headlines and sections using CSS selectors, combines them into a structured dataset, and uses AI to summarize the content. Finally, it sends the summarized financial news via Microsoft Outlook.

**Demonstrate**  
A stockbroker could use this workflow to receive a daily summary of financial news, helping them make informed investment decisions without manually sifting through news websites.

**Imitate**  
1. Set up an n8n account and import the workflow.
2. Connect your Microsoft Outlook and Google Gemini API credentials.
3. Adjust the CSS selectors to match the news sections you want.
4. Schedule the trigger to run daily at 7:00 AM.
5. Test the workflow to ensure it sends the email correctly.

**Practice**  
Create a mock version of this workflow using a different news source URL. Test how changing CSS selectors affects the extracted content. Experiment with different AI summary prompts to see how summaries vary.

**WIIFM**  
Mastering this workflow enables you to offer daily news summarization services, adding value to financial professionals and businesses. This skill can attract clients seeking efficient information processing, potentially increasing your service offerings and revenue in the AI automation sector.

## 🔧 Setup Instructions
1. **Connect Credentials:** googlePalmApi, microsoftOutlookOAuth2Api.
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
