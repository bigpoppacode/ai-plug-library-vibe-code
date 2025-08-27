# Telegram Gmail Create Triggered
## 🚀 What It Does
Monitors events, processes them, and **notifies** people/apps (Slack/Email) with structured updates.

## 💼 Business Use Case
Great for **content, summarization, triage, or decisioning** where AI adds speed and consistency.

## ⚙️ How It Works
1. **Trigger:** Triggered by **incoming email** (new message).
2. **Structured Output Parser** `outputParserStructured` — jsonSchemaExample: "{
	"response": "N"
}"
3. **OpenAI Chat Model** `lmChatOpenAi` — options: "[object Object]"
4. **New Email Received** `gmailTrigger` — simple: "false", filters: "[object Object]", options: "[object Object]"
5. **Telegram Bot Message Received** `telegramTrigger` — updates: "message", additionalFields: "[object Object]"
6. **Sticky Note4** `stickyNote` — color: "7", width: "560", height: "580"
7. **Sticky Note** `stickyNote` — color: "7", width: "740", height: "580"
8. **Sticky Note1** `stickyNote` — color: "7", width: "520", height: "580"
9. **Sticky Note5** `stickyNote` — color: "7", width: "680", height: "580"
10. **Sticky Note6** `stickyNote` — color: "7", width: "440", height: "580"
11. **OpenAI Chat Model1** `lmChatOpenAi` — options: "[object Object]"
12. **Sticky Note7** `stickyNote` — color: "7", width: "720", height: "580"
13. **Sticky Note2** `stickyNote` — width: "160", height: "120", content: "## Edit here
Add in your Chat ID here."
14. **In the Inbox?** `if` — options: "[object Object]", conditions: "[object Object]"
15. **Is Type Audio Message + Reply?** `if` — options: "[object Object]", conditions: "[object Object]"
16. **Does Email Need a Response?** `chainLlm` — text: "[redacted]", promptType: "define", hasOutputParser: "true"
17. **Get Audio File** `telegram` — resource: **file**
18. **It needs to be an audio message + a reply!** `telegram` — text: "=Sorry, I didn't catch that! 

To send your email for you, I need you to respond with a voice note in reply to one of my other messages.", chatId: "={{ $json.message.chat.id }}", additionalFields: "[object Object]"
19. **Needs a response?** `if` — options: "[object Object]", conditions: "[object Object]"
20. **OpenAI** `openAi` — resource: **audio**, operation: **transcribe**
21. **Set Chat ID** `set` — options: "[object Object]", assignments: "[object Object]"
22. **Write Polished Reply** `chainLlm` — text: "=Received Email:
{{ $('Telegram Bot Message Received').item.json.message.reply_to_message.text }}

Voice Note Response:
{{ $json.text }}", messages: "[object Object]", promptType: "define"
23. **Text Email** `telegram` — text: "=Email ID: {{ $('New Email Received').item.json.id }}
Thread ID: {{ $('New Email Received').item.json.threadId }}
From: {{ $('New Email Received').item.json.from.value[0].name }}
E…[truncated]", chatId: "={{ $json.chat_id }}", additionalFields: "[object Object]"
24. **Create Email Draft** `gmail` — resource: **draft**
25. **Direct to Draft** `telegram` — text: "=Draft Created:

{{ $('Write Polished Reply').item.json.output }}

[View here](https://mail.google.com/mail/#all/{{ $json.message.threadId }})", chatId: "={{ $('Telegram Bot Message Received').item.json.message.reply_to_message.chat.id }}", additionalFields: "[object Object]"

## 💡 AI-Powered Ideas for Improvement
**Explain:** This n8n workflow automates email management by integrating Gmail, Telegram, and OpenAI. It checks new emails, determines if they need a response using AI, and sends them to Telegram. Users reply via a Telegram voice note, which is transcribed by OpenAI, and a polished email draft is prepared in Gmail.

**Demonstrate:** A consultant could use this workflow to manage email inquiries efficiently, streamlining the response process by handling emails through voice replies, thus reducing the time spent on typing and ensuring a professional response.

**Imitate:** 1. Import the workflow into n8n. 2. Connect your Gmail and Telegram accounts. 3. Configure OpenAI for transcription. 4. Set up the triggers for new emails and Telegram messages. 5. Test with a sample email and voice reply.

**Practice:** Set up a test Gmail account and Telegram bot. Send a test email and respond with a voice note via Telegram. Observe the transcription and email draft creation process to understand the workflow better.

**WIIFM:** Mastering this workflow can enhance your service offerings by providing efficient email management solutions, saving clients time and increasing productivity. It opens opportunities for offering advanced automation services, leading to increased revenue.

## 🔧 Setup Instructions
1. **Connect Credentials:** openAiApi, telegramApi, gmailOAuth2.
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
