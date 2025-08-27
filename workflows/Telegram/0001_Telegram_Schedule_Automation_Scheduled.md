# Telegram Schedule Automation Scheduled
## 🚀 What It Does
Monitors events, processes them, and **notifies** people/apps (Slack/Email) with structured updates.

## 💼 Business Use Case
Great for **content, summarization, triage, or decisioning** where AI adds speed and consistency.

## ⚙️ How It Works
1. **Trigger:** This workflow starts with **When clicking ‘Test workflow’**.
2. **When clicking ‘Test workflow’** `manualTrigger` — configured for its default action.
3. **gemini-2.0-flash-lite-preview** `lmChatGoogleGemini` — options: "[object Object]", modelName: "=models/gemini-2.0-flash-lite-preview"
4. **gemini-2.0-flash-lite-preview1** `lmChatGoogleGemini` — options: "[object Object]", modelName: "models/gemini-2.0-flash-lite-preview"
5. **gemini-2.0-flash-lite-preview2** `lmChatGoogleGemini` — options: "[object Object]", modelName: "models/gemini-2.0-flash-lite-preview"
6. **Sticky Note** `stickyNote` — color: "6", width: "960", height: "420"
7. **Sticky Note1** `stickyNote` — color: "5", width: "520", height: "420"
8. **Sticky Note2** `stickyNote` — color: "4", width: "960", height: "420"
9. **Schedule Trigger** `scheduleTrigger` — rule: "[object Object]"
10. **Sticky Note3** `stickyNote` — color: "6", width: "340", height: "700"
11. **Sticky Note4** `stickyNote` — width: "320", height: "280", content: "## Telegram 
"
12. **Sticky Note5** `stickyNote` — width: "320", height: "280", content: "## Telegram 
"
13. **Sticky Note6** `stickyNote` — color: "4", width: "260", height: "460"
14. **Nostr Read #damus** `nostrobotsread` — from: "180", hashtag: "#damus", strategy: "hashtag"
15. **Aggregate #damus Content** `aggregate` — options: "[object Object]", fieldsToAggregate: "[object Object]"
16. **#damus Thread Themes** `chainLlm` — text: "=Tell me the theme and highlight some common threads associated with these Nostr threads that are all #damus.  Specifically mention the main reason #damus is hashtagged.  These are…[truncated]", promptType: "define"
17. **Get HTML** `markdown` — mode: "markdownToHtml", options: "[object Object]", markdown: "={{ $json.text }}"
18. **#damus Themes List** `chainLlm` — text: "=Extract a list of themes from this: {{ $json.text }}

Do not include any preamble or further explanation.", promptType: "define"
19. **Telegram Themes** `telegram` — text: "={{ $json.text.slice(0, 4000) }}", chatId: "={{ $env.TELEGRAM_CHAT_ID }}", additionalFields: "[object Object]"
20. **Gmail Themes** `gmail` — sendTo: "joe@example.com", message: "={{ $json.data }}", options: "[object Object]"
21. **Merge Themes and Content** `merge` — mode: "combine", options: "[object Object]", combineBy: "combineByPosition"
22. **#damus Themes & Threads Report** `chainLlm` — text: "=**Task:** Analyze the attached file containing Nostr threads using the hashtag #damus. Provide a detailed report with examples thread based on the following themes.  Got deep and …[truncated]", promptType: "define"
23. **Get HTML Report** `markdown` — mode: "markdownToHtml", options: "[object Object]", markdown: "={{ $json.text }}"
24. **Telegram Themes & Threads** `telegram` — text: "={{ $json.text.slice(0, 4000) }}", chatId: "={{ $env.TELEGRAM_CHAT_ID }}", additionalFields: "[object Object]"
25. **Gmail Report** `gmail` — sendTo: "joe@example.com", message: "={{ $json.data }}", options: "[object Object]"

## 💡 AI-Powered Ideas for Improvement
**Explain:**  
This n8n workflow automates the process of analyzing Nostr threads tagged with #damus. It collects threads, identifies themes and common threads, and generates reports using AI. The results are formatted into HTML and sent via Telegram and Gmail to specified recipients, ensuring timely insights and communication.

**Demonstrate:**  
A business could use this workflow to monitor social media discussions about their brand or a specific topic, providing timely insights into public sentiment and emerging trends.

**Imitate:**  
1. Import the workflow into n8n.  
2. Connect your Nostr, Telegram, and Gmail accounts.  
3. Configure the schedule for the workflow to run.  
4. Customize the email and Telegram message templates.  
5. Test the workflow to ensure it collects and processes data correctly.

**Practice:**  
Create a test Nostr account and post several threads using the #damus hashtag. Run the workflow to see how it aggregates content, identifies themes, and sends out reports via email and Telegram.

**WIIFM:**  
Mastering this workflow allows you to offer advanced social media monitoring and reporting services. This can help businesses understand public perception, adjust strategies in real-time, and enhance customer engagement, potentially increasing your value and revenue as a service provider.

## 🔧 Setup Instructions
1. **Connect Credentials:** gmailOAuth2, googlePalmApi, telegramApi.
2. **Notification Targets:** Confirm channel/email IDs and that the bot/app is authorized to post.

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
