# Detect Toxic Language In Telegram Messages
## 🚀 What It Does
Automates a flow using telegramTrigger, googlePerspective, if.

## 💼 Business Use Case
Use to eliminate manual copy-paste and standardize a recurring business process.

## ⚙️ How It Works
1. **Trigger:** This workflow starts with **NoOp**.
2. **NoOp** `noOp` — configured for its default action.

## 💡 AI-Powered Ideas for Improvement
### Explain
This n8n workflow automatically monitors messages in a Telegram group. It uses Google Perspective to analyze each message for toxic language, such as profanity. If the message's profanity score exceeds a certain threshold, the workflow sends a warning message back to the chat, discouraging toxic language. If not, the workflow does nothing further.

### Demonstrate
A community manager could use this workflow to maintain a positive environment in a Telegram group by automatically moderating language and discouraging toxic behavior without constant human oversight.

### Imitate
1. Import the workflow into your n8n instance.
2. Connect your Telegram and Google Perspective accounts.
3. Set the workflow to trigger on new messages in your desired Telegram group.
4. Customize the warning message if needed.
5. Activate the workflow to start monitoring.

### Practice
Create a test Telegram group and add your bot. Send various messages, including some with profanity, to see how the workflow reacts. Adjust the profanity threshold to fine-tune the sensitivity of the moderation.

### WIIFM
Mastering this workflow can help you offer automated moderation services, enhancing community management capabilities for businesses or individuals. This can lead to increased customer satisfaction and potentially more business opportunities in managing online communities.

## 🔧 Setup Instructions
1. **Connect Credentials:** telegramApi, googlePerspectiveOAuth2Api.

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
