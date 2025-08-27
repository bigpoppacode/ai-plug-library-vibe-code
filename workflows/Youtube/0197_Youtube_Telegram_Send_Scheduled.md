# Youtube Telegram Send Scheduled
## 🚀 What It Does
Automates a flow using set, function, interval.

## 💼 Business Use Case
Use to eliminate manual copy-paste and standardize a recurring business process.

## ⚙️ How It Works
1. **Trigger:** This workflow starts with **SendVideo**.
2. **SendVideo** `telegram` — text: "=Nuovo video di almi su YouTube!
<b>{{$node["Function"].json["title"]}}</b>

{{$node["Function"].json["url"]}}", chatId: "-1001178002763", additionalFields: "[object Object]"

## 💡 AI-Powered Ideas for Improvement
### Explain
This n8n workflow automates the process of notifying a Telegram group when a new video is uploaded to a specified YouTube channel. It checks the channel every 30 minutes for new videos, retrieves the latest video details, and sends a message to a Telegram chat with the video title and link. This ensures that subscribers are promptly informed of new content.

### Demonstrate
A YouTuber or content manager could use this workflow to keep their audience engaged by automatically notifying them of new video uploads. This boosts viewership by ensuring followers never miss new content.

### Imitate
1. Import the workflow into n8n.
2. Set up your YouTube and Telegram credentials.
3. Adjust the YouTube channel ID and Telegram chat ID.
4. Activate the workflow to run at the desired interval.
5. Test to confirm notifications are sent correctly.

### Practice
Create a test YouTube channel and Telegram group. Use the workflow to send test notifications to your Telegram group whenever a new video is uploaded. Check if the video title and link are correctly formatted in the message.

### WIIFM
Mastering this workflow enables you to offer automated notification services to content creators, enhancing their audience engagement. This can broaden your service portfolio, attract more clients, and increase your income from automation solutions.

## 🔧 Setup Instructions
1. **Connect Credentials:** youTubeOAuth2Api, telegramApi.

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
