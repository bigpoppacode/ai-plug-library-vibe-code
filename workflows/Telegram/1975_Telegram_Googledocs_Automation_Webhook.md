# Telegram Googledocs Automation Webhook
## 🚀 What It Does
Automates a flow using stickyNote×8, telegram×3, lmChatOpenAi×2.

## 💼 Business Use Case
Great for **content, summarization, triage, or decisioning** where AI adds speed and consistency.

## ⚙️ How It Works
1. **Trigger:** This workflow starts with **When chat message received**.
2. **Sticky Note** `stickyNote` — color: "6", width: "949", height: "652"
3. **Listen for Telegram Events** `webhook` — method: **POST**, path: `/wbot`
4. **Sticky Note1** `stickyNote` — color: "7", width: "800", height: "860"
5. **Sticky Note4** `stickyNote` — color: "7", width: "420", height: "260"
6. **Window Buffer Memory** `memoryBufferWindow` — sessionKey: "={{ $json.id }}", sessionIdType: "customKey", contextWindowLength: "50"
7. **When chat message received** `chatTrigger` — options: "[object Object]"
8. **Sticky Note10** `stickyNote` — color: "5", width: "1033", height: "1029"
9. **Save Long Term Memories** `googleDocsTool` — operation: **update**
10. **Sticky Note3** `stickyNote` — color: "4", width: "300", height: "340"
11. **Sticky Note5** `stickyNote` — width: "280", height: "320", content: "## Save To Current Chat Memory (Optional)"
12. **Sticky Note6** `stickyNote` — color: "4", width: "280", height: "320"
13. **Sticky Note12** `stickyNote` — color: "7", width: "820", height: "600"
14. **DeepSeek-R1 Reasoning** `lmChatOpenAi` — model: `=deepseek-reasoner`
15. **DeepSeek-V3   Chat** `lmChatOpenAi` — model: `=deepseek-chat`
16. **Validation** `set` — options: "[object Object]", assignments: "[object Object]", includeOtherFields: "true"
17. **Check User & Chat ID** `if` — options: "[object Object]", conditions: "[object Object]", looseTypeValidation: "="
18. **Message Router** `switch` — rules: "[object Object]", options: "[object Object]"
19. **Retrieve Long Term Memories** `googleDocs` — operation: **get**
20. **Error message** `telegram` — text: "=Unable to process your message.", chatId: "={{ $json.body.message.chat.id }}", additionalFields: "[object Object]"
21. **Merge** `merge` — mode: "combine", options: "[object Object]", combineBy: "combineAll"
22. **AI Agent** `agent` — text: "={{ $('Message Router').item.json.body.message.text }}", options: "[object Object]", promptType: "define"
23. **Telegram Response** `telegram` — text: "={{ $json.output }}", chatId: "={{ $('Listen for Telegram Events').item.json.body.message.chat.id }}", additionalFields: "[object Object]"
24. **Response Error message** `telegram` — text: "=Unable to process your message.", chatId: "={{ $('Listen for Telegram Events').item.json.body.message.chat.id }}", additionalFields: "[object Object]"

## 💡 AI-Powered Ideas for Improvement
**Explain:**  
This workflow is designed to manage interactions between a Telegram bot and users, using AI to enhance communication. It listens for messages on Telegram, verifies user identity, processes the message using AI, and retrieves or saves relevant information as needed. The AI provides tailored responses based on long-term memory stored in Google Docs, ensuring personalized and meaningful interactions.

**Demonstrate:**  
A customer service team could use this workflow to manage inquiries received via Telegram. The AI can provide instant, personalized responses based on past interactions, improving user experience and reducing response times.

**Imitate:**  
1. Set up a Telegram bot with webhook integration.
2. Connect n8n to your Google Docs and Telegram accounts.
3. Import the workflow into n8n.
4. Customize the AI prompts and memory storage settings.
5. Test the workflow by sending messages to the Telegram bot and observing the responses.

**Practice:**  
Create a test Telegram bot and use this workflow to handle simple queries. Experiment by sending various messages and observing how the AI's responses change based on the stored memory. Adjust the AI prompts to see different outcomes.

**WIIFM:**  
Mastering this workflow can enhance your automation business by offering AI-driven chat solutions. It provides a scalable way to handle customer interactions, improving service quality and efficiency. This can lead to increased client satisfaction and retention, as well as new business opportunities.

## 🔧 Setup Instructions
1. **Connect Credentials:** telegramApi, googleDocsOAuth2Api, openAiApi.

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
