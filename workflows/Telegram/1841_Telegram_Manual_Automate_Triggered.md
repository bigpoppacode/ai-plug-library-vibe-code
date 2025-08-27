# Telegram Manual Automate Triggered
## 🚀 What It Does
Monitors events, processes them, and **notifies** people/apps (Slack/Email) with structured updates.

## 💼 Business Use Case
Great for **content, summarization, triage, or decisioning** where AI adds speed and consistency.

## ⚙️ How It Works
1. **Trigger:** This workflow starts with **When clicking ‘Test workflow’**.
2. **When clicking ‘Test workflow’** `manualTrigger` — configured for its default action.
3. **Google Gemini Chat Model** `lmChatGoogleGemini` — options: "[object Object]", modelName: "models/gemini-1.5-flash"
4. **Unwanted Email Output Parser** `outputParserStructured` — schemaType: "manual", inputSchema: "{
  "type": "object",
  "required": [
    "emailId",
    "isUnwantedConfidence",
    "isMarketingConfidence",
    "isSpamConfidence",
    "briefReason",
    "emailFrom"
  ],
  "pro…[truncated]"

## 💡 AI-Powered Ideas for Improvement
- **Explain:** This workflow automates the process of managing unwanted emails in Gmail. It retrieves emails, uses AI to classify them as wanted or unwanted, and deletes those identified as unwanted. Notifications are sent via Telegram to inform about the actions taken, ensuring efficient email management.

- **Demonstrate:** A business owner could use this workflow to automatically manage their inbox, reducing clutter by deleting spam or marketing emails, thus improving productivity and focus on important emails.

- **Imitate:** Import the workflow into n8n. Connect your Gmail and Telegram accounts. Set the workflow to trigger manually or on a schedule. Customize the AI criteria and Telegram messages as needed. Test the workflow to ensure it deletes unwanted emails and sends notifications correctly.

- **Practice:** Create a test Gmail account and populate it with various emails. Run the workflow to see how it classifies and manages the emails. Adjust the AI parameters to optimize email management.

- **WIIFM:** Mastering this workflow can streamline email management for clients, enhancing productivity and offering a valuable service that can be monetized. It positions you as an expert in automating tedious tasks, attracting more clients to your AI automation business.

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
