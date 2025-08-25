# Voice Workflows
## 🚀 What It Does
Automates a flow using stickyNote×3, telegram×2, elevenLabs×2.

## 💼 Business Use Case
Use to eliminate manual copy-paste and standardize a recurring business process.

## ⚙️ How It Works
1. **Trigger:** This workflow starts with **Telegram Trigger**.
2. **Telegram Trigger** `telegramTrigger` — updates: "message", additionalFields: "[object Object]"
3. **OpenRouter Chat Model** `lmChatOpenRouter` — options: "[object Object]"
4. **Webhook** `webhook` — method: **POST**, path: `/667ca354-cc10-40fe-896b-08153fad7857`
5. **OpenRouter Chat Model1** `lmChatOpenRouter` — options: "[object Object]"
6. **Sticky Note** `stickyNote` — content: "# Telegram Voice Output ", height: "400", width: "1216"
7. **Sticky Note1** `stickyNote` — content: "# ElevenLabs Conversational Agent
", height: "400", width: "1232"
8. **Sticky Note2** `stickyNote` — content: "# 🛠️ Setup Guide  
**Author:** [Nate Herk](https://www.youtube.com/@nateherk)

### Follow these steps to get the Telegram Voice Output and ElevenLabs Conversational Agents working…[truncated]", height: "832", width: "624"
9. **Get a file** `telegram` — resource: **file**
10. **Message a model** `perplexity` — model: `sonar`
11. **Transcribe audio or video** `elevenLabs` — resource: **speech**, operation: **speechToText**
12. **AI Agent1** `agent` — promptType: "define", text: "={{ $json.message }}", options: "[object Object]"
13. **AI Agent** `agent` — promptType: "define", text: "={{ $json.text }}", options: "[object Object]"
14. **Respond to Webhook** `respondToWebhook` — options: "[object Object]"
15. **Convert text to speech** `elevenLabs` — resource: **speech**
16. **Send an audio file** `telegram` — operation: **sendAudio**

## 💡 AI-Powered Ideas for Improvement
### Explain
This n8n workflow automates the process of responding to voice messages received via Telegram. It starts by triggering when a message is received, retrieves the audio file, and then transcribes it into text using ElevenLabs. The text is processed by an AI agent to generate a humorous response. The response is then converted back into speech and sent as an audio file back to the user on Telegram. Additionally, it includes a webhook setup to handle external requests and process data using various AI models.

### Demonstrate
A business owner could use this workflow to automate customer support via Telegram, providing instant voice responses to customer queries, thereby improving engagement and efficiency in communication.

### Imitate
1. Set up a Telegram bot and connect it to n8n.
2. Import the workflow into n8n.
3. Configure ElevenLabs for speech-to-text and text-to-speech.
4. Set up AI agent with desired response behavior.
5. Test the workflow by sending a voice message to your Telegram bot and observing the response.

### Practice
Create a Telegram bot and send test voice messages to see how the workflow transcribes and responds. Adjust the AI agent's response style and observe changes, ensuring the workflow operates smoothly.

### WIIFM
Mastering this workflow allows you to offer automated voice response services, enhancing client communication and interaction. This can elevate your service offerings, attract more customers, and increase revenue in your AI automation business.

## 🔧 Setup Instructions
1. **Connect Credentials:** telegramApi, elevenLabsApi, openRouterApi, perplexityApi.

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
