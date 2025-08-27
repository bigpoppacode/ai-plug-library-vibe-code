# Wait Splitout Send Webhook
## 🚀 What It Does
Calls external APIs and uses **AI** to transform or decide, then routes the result downstream.

## 💼 Business Use Case
Use as a **glue/API broker**: receive data, enrich/validate via APIs, and pass to downstream systems.

## ⚙️ How It Works
1. **Trigger:** This workflow starts with **WhatsApp Trigger**.
2. **WhatsApp Trigger** `whatsAppTrigger` — updates: "messages"
3. **Window Buffer Memory** `memoryBufferWindow` — sessionKey: "=whatsapp-tutorial-{{ $json.from }}", sessionIdType: "customKey"
4. **Wikipedia** `toolWikipedia` — configured for its default action.
5. **Sticky Note** `stickyNote` — color: "7", width: "335.8011507479863", height: "245.72612197928734"
6. **Sticky Note1** `stickyNote` — color: "7", width: "356.65822784810103", height: "97.23360184119679"
7. **Sticky Note2** `stickyNote` — color: "7", width: "492.5258918296896", height: "127.13555811277331"
8. **Sticky Note3** `stickyNote` — color: "7", width: "356.65822784810103", height: "97.23360184119679"
9. **Sticky Note4** `stickyNote` — color: "7", width: "428.24395857307246", height: "97.23360184119679"
10. **Sticky Note5** `stickyNote` — color: "7", width: "500.7797468354428", height: "273.14522439585744"
11. **Sticky Note6** `stickyNote` — color: "7", width: "384.12151898734186", height: "211.45776754890682"
12. **Sticky Note7** `stickyNote` — width: "470.66513233601853", height: "562.8608514850005", content: "## Try It Out!

### This n8n template demonstrates the beginnings of building your own n8n-powered WhatsApp chatbot! Under the hood, utilise n8n's powerful AI features to handle di…[truncated]"
13. **Sticky Note8** `stickyNote` — color: "5", width: "473.28063885246377", height: "96.0144533433243"
14. **Sticky Note9** `stickyNote` — width: "260", height: "305.35604142692785", content: "













### 🚨 Google Gemini Required!
Not using Gemini? Feel free to swap this out for any Multimodal Model that supports Video."
15. **Google Gemini Chat Model** `lmChatGoogleGemini` — options: "[object Object]", modelName: "models/gemini-1.5-pro-002"
16. **Sticky Note10** `stickyNote` — width: "260", height: "294.22048331415436", content: "













### 🚨 Google Gemini Required!
Not using Gemini? Feel free to swap this out for any Multimodal Model that supports Audio."
17. **Google Gemini Chat Model1** `lmChatGoogleGemini` — options: "[object Object]", modelName: "models/gemini-1.5-pro-002"
18. **Google Gemini Chat Model2** `lmChatGoogleGemini` — options: "[object Object]", modelName: "models/gemini-1.5-pro-002"
19. **Split Out Message Parts** `splitOut` — options: "[object Object]", fieldToSplitOut: "messages"
20. **Redirect Message Types** `switch` — rules: "[object Object]", options: "[object Object]"
21. **Get Audio URL** `whatsApp` — resource: **media**, operation: **mediaUrlGet**
22. **Get Video URL** `whatsApp` — resource: **media**, operation: **mediaUrlGet**
23. **Get Image URL** `whatsApp` — resource: **media**, operation: **mediaUrlGet**
24. **Get Text** `wait` — amount: "0"
25. **Download Audio** `httpRequest` — url: `={{ $json.url }}`
26. **Download Video** `httpRequest` — url: `={{ $json.url }}`
27. **Download Image** `httpRequest` — url: `={{ $json.url }}`
28. **Text Summarizer** `chainLlm` — text: "={{ $json.text.body || $json.text }}", messages: "[object Object]", promptType: "define"
29. **Google Gemini Audio** `httpRequest` — method: **POST**, url: `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-pro-002:generateContent`
30. **Google Gemini Video** `httpRequest` — method: **POST**, url: `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-pro-002:generateContent`
31. **Image Explainer** `chainLlm` — text: "Here is an image sent by the user. Describe the image and transcribe any text visible in the image.", messages: "[object Object]", promptType: "define"
32. **Format Response1** `set` — options: "[object Object]", assignments: "[object Object]"
33. **Format Response** `set` — options: "[object Object]", assignments: "[object Object]"
34. **Get User's Message** `set` — options: "[object Object]", assignments: "[object Object]"
35. **AI Agent** `agent` — text: "=The user sent the following message
message type: {{ $json.message_type }}
message text or description:
```{{ $json.message_text }}```
{{ $json.message_caption ? `message caption:…[truncated]", options: "[object Object]", promptType: "define"
36. **Respond to User** `whatsApp` — operation: **send**

## 💡 AI-Powered Ideas for Improvement
**Explain:**  
This n8n workflow is designed to operate a WhatsApp chatbot that handles different types of messages—text, audio, video, and images. When a message is received via WhatsApp, it is processed based on its type. Text messages are summarized, audio messages are transcribed, video messages are described, and images are analyzed. The AI Agent then uses this processed information to generate a response, which is sent back to the user on WhatsApp.

**Demonstrate:**  
A business owner could use this workflow to automate customer support via WhatsApp. By providing instant responses to common queries, resolving issues, and even handling multimedia messages, the owner can improve customer satisfaction and reduce workload.

**Imitate:**  
1. Import the workflow into n8n.  
2. Set up WhatsApp credentials and connect Google Gemini if needed.  
3. Customize message handling logic if necessary.  
4. Test the workflow with different message types to ensure proper processing and response.

**Practice:**  
Create a test WhatsApp account and send different types of messages—text, audio, video, and images. Observe how each message is processed and what kind of response is generated. Adjust the AI prompts to better suit your specific use case.

**WIIFM:**  
Mastering this workflow allows you to offer sophisticated WhatsApp-based automation services to businesses. By improving customer interaction and response times, you can attract more clients and potentially increase your income through premium automation solutions.

## 🔧 Setup Instructions
1. **Connect Credentials:** whatsAppTriggerApi, whatsAppApi, googlePalmApi.
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
