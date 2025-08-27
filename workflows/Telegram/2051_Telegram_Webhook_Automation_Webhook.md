# Telegram Webhook Automation Webhook
## 🚀 What It Does
Calls external APIs and uses **AI** to transform or decide, then routes the result downstream.

## 💼 Business Use Case
Use as a **glue/API broker**: receive data, enrich/validate via APIs, and pass to downstream systems.

## ⚙️ How It Works
1. **Trigger:** This workflow starts with **Sticky Note**.
2. **Sticky Note** `stickyNote` — width: "929", height: "652", content: "# Receive Telegram Message with Webhook"
3. **Listen for Telegram Events** `webhook` — method: **POST**, path: `/your-endpoint`
4. **Sticky Note2** `stickyNote` — color: "3", width: "1638", height: "532"
5. **Sticky Note5** `stickyNote` — color: "4", width: "1113", height: "429"
6. **Sticky Note3** `stickyNote` — color: "6", width: "1289", height: "432"
7. **Sticky Note1** `stickyNote` — color: "7", width: "800", height: "860"
8. **gpt-4o-mini** `lmChatOpenAi` — options: "[object Object]"
9. **Sticky Note6** `stickyNote` — color: "5", width: "1113", height: "429"
10. **gpt-4o-mini1** `lmChatOpenAi` — options: "[object Object]"
11. **Telegram Token & Webhooks** `set` — options: "[object Object]", assignments: "[object Object]"
12. **Sticky Note4** `stickyNote` — color: "7", width: "420", height: "260"
13. **Sticky Note7** `stickyNote` — color: "7", width: "460", height: "240"
14. **Sticky Note8** `stickyNote` — color: "7", width: "460", height: "240"
15. **Sticky Note9** `stickyNote` — color: "7", width: "480", height: "240"
16. **Validation** `set` — options: "[object Object]", assignments: "[object Object]"
17. **Set Webhook Production URL** `httpRequest` — url: `[redacted]`
18. **Set Webhook Test URL** `httpRequest` — url: `[redacted]`
19. **Get Telegram Webhook Info** `httpRequest` — url: `[redacted]`
20. **Check User & Chat ID** `if` — options: "[object Object]", conditions: "[object Object]", looseTypeValidation: "="
21. **Production Webhook Status** `telegram` — text: "={{ $json.description }} for Production", chatId: "=1234567891", additionalFields: "[object Object]"
22. **Test Webhook Status** `telegram` — text: "={{ $json.description }} for Testing", chatId: "=1234567891", additionalFields: "[object Object]"
23. **Get Webhook Status** `telegram` — text: "={{ JSON.stringify($json.result, null, 2) }}", chatId: "=1234567891", additionalFields: "[object Object]"
24. **Message Router** `switch` — rules: "[object Object]", options: "[object Object]"
25. **Get Audio File** `telegram` — resource: **file**
26. **Edit Fields** `set` — options: "[object Object]", assignments: "[object Object]"
27. **Image Schema** `set` — options: "[object Object]", assignments: "[object Object]"
28. **Error message** `telegram` — text: "=Unable to process your message.", chatId: "={{ $json.body.message.chat.id }}", additionalFields: "[object Object]"
29. **Transcribe Recording** `openAi` — resource: **audio**, operation: **transcribe**
30. **Text Classifier** `textClassifier` — options: "[object Object]", inputText: "={{ $json.text }}", categories: "[object Object]"
31. **Get Image** `telegram` — resource: **file**
32. **Text Classifier Audio** `textClassifier` — options: "[object Object]", inputText: "={{ $json.text }}", categories: "[object Object]"
33. **Text Task Message** `telegram` — text: "=Task message: <i>{{ $json.text }}</i>", chatId: "={{ $('Listen for Telegram Events').item.json.body.message.chat.id }}", additionalFields: "[object Object]"
34. **Text Other Message** `telegram` — text: "=Other message: <i>{{ $json.text }}</i>", chatId: "={{ $('Listen for Telegram Events').item.json.body.message.chat.id }}", additionalFields: "[object Object]"
35. **Extract from File to Base64** `extractFromFile` — operation: **binaryToPropery**
36. **Audio Task Message** `telegram` — text: "=Task message: <i>{{ $json.text }}</i>", chatId: "={{ $('Listen for Telegram Events').item.json.body.message.chat.id }}", additionalFields: "[object Object]"
37. **Audio Other Message** `telegram` — text: "=Other message: <i>{{ $json.text }}</i>", chatId: "={{ $('Listen for Telegram Events').item.json.body.message.chat.id }}", additionalFields: "[object Object]"
38. **Convert to Image File** `convertToFile` — operation: **toBinary**
39. **Analyze Image** `openAi` — resource: **image**, operation: **analyze**
40. **Image Message** `telegram` — text: "={{ $json.content }}", chatId: "={{ $('Listen for Telegram Events').item.json.body.message.chat.id }}", additionalFields: "[object Object]"

## 💡 AI-Powered Ideas for Improvement
**Explain:**  
This n8n workflow is designed to handle messages from a Telegram bot. It listens for incoming messages and processes them based on their type: text, audio, or image. Text messages are classified to determine if they are task-related, audio messages are transcribed, and image messages are analyzed. The workflow uses OpenAI for transcription and analysis, and then it sends the processed information back to the Telegram user.

**Demonstrate:**  
A developer could use this workflow to automate customer interactions on Telegram, classifying and responding to various types of messages, such as FAQs or support requests, using AI to enhance response accuracy and speed.

**Imitate:**  
1. Import the workflow into n8n.
2. Set up your Telegram bot and webhook.
3. Connect OpenAI for transcription and analysis.
4. Customize message classifications and responses.
5. Test the workflow by sending different message types to the bot.

**Practice:**  
Create a Telegram bot and send it a text, audio, and image message. Observe how each message type is processed and responded to. Try modifying the classification criteria or response messages to see how it affects the outcome.

**WIIFM:**  
Mastering this workflow allows you to offer automated, AI-enhanced customer service solutions to businesses, improving efficiency and customer satisfaction. This expertise can increase your service offerings and income potential in the growing field of AI automation.

## 🔧 Setup Instructions
1. **Connect Credentials:** telegramApi, openAiApi.
2. **API Contracts:** Validate required headers and 2xx/4xx handling; add retries for 429/5xx.

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
