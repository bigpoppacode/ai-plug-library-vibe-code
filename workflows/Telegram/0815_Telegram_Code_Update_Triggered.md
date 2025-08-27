# Telegram Code Update Triggered
## 🚀 What It Does
Automates a flow using stickyNote×9, telegram×7, redis×4.

## 💼 Business Use Case
Great for **content, summarization, triage, or decisioning** where AI adds speed and consistency.

## ⚙️ How It Works
1. **Trigger:** This workflow starts with **Handoff Subworkflow**.
2. **Model** `lmChatOpenAi` — model: `[object Object]`
3. **Memory** `memoryRedisChat` — sessionKey: "=handoff_{{ $('Telegram Trigger').first().json.message.chat.id }}_chat", sessionIdType: "customKey"
4. **Handoff Subworkflow** `executeWorkflowTrigger` — workflowInputs: "[object Object]"
5. **Telegram Trigger** `telegramTrigger` — updates: "message", additionalFields: "[object Object]"
6. **OpenAI Chat Model** `lmChatOpenAi` — model: `[object Object]`
7. **Memory1** `memoryRedisChat` — sessionKey: "=handoff_{{ $('Telegram Trigger').first().json.message.chat.id }}_chat2", sessionIdType: "customKey", contextWindowLength: "30"
8. **Model1** `lmChatOpenAi` — model: `[object Object]`
9. **Handoff Tool** `toolWorkflow` — name: "handoff_to_human", workflowId: "[object Object]", description: "Call this tool to handoff or defer to a human agent at the request of the customer. Ensure a summary of the reason for the handoff is obtained first."
10. **Sticky Note** `stickyNote` — color: "7", width: "660", height: "460"
11. **Sticky Note1** `stickyNote` — color: "7", width: "560", height: "520"
12. **Sticky Note2** `stickyNote` — color: "7", width: "880", height: "520"
13. **Sticky Note3** `stickyNote` — color: "7", width: "800", height: "640"
14. **Sticky Note4** `stickyNote` — color: "7", width: "520", height: "440"
15. **Sticky Note5** `stickyNote` — color: "7", width: "720", height: "520"
16. **Sticky Note6** `stickyNote` — color: "7", width: "1580", height: "560"
17. **Sticky Note7** `stickyNote` — width: "440", height: "1320", content: "## Try it out
### This n8n template demonstrates an approach to perform bot-to-human handoff using Human-in-the-loop functionality as a switch.

In this experiment, we play with th…[truncated]"
18. **Memory2** `memoryRedisChat` — sessionKey: "=handoff_{{ $('Handoff Subworkflow').first().json.chatId }}_chat2", sessionIdType: "customKey", contextWindowLength: "30"
19. **Sticky Note8** `stickyNote` — width: "220", height: "320", content: "
















### Add Human Chat ID
This is needed to notify the human agent."
20. **Memory3** `memoryRedisChat` — sessionKey: "=handoff_{{ $('Telegram Trigger').first().json.message.chat.id }}_chat2", sessionIdType: "customKey", contextWindowLength: "30"
21. **Notify user** `telegram` — text: "=You have now been transferred to a human. Unfortunately, I will not be able to respond until the human agent transfers you back to me.", chatId: "={{ $('Telegram Trigger').first().json.message.chat.id }}", additionalFields: "[object Object]"
22. **Get Interaction State** `redis` — operation: **get**
23. **Set Interaction to Human** `redis` — operation: **set**
24. **Switch Interaction** `switch` — rules: "[object Object]", options: "[object Object]"
25. **Human Handoff using Send and Wait** `telegram` — operation: **sendAndWait**
26. **Get Canned Response** `telegram` — text: "=This conversation has been handed-off to a human agent who will be in contact soon if not done so already. I cannot respond to your query until the human agent transfers you back …[truncated]", chatId: "={{ $('Telegram Trigger').first().json.message.chat.id }}", additionalFields: "[object Object]"
27. **After Sales Agent** `agent` — text: "={{ $('Telegram Trigger').item.json.message.text }}", options: "[object Object]", promptType: "define"
28. **Onboarding Agent** `agent` — text: "={{ $('Telegram Trigger').first().json.message.text }}", options: "[object Object]", promptType: "define"
29. **Set Interaction to Bot** `redis` — operation: **set**
30. **Send Response3** `telegram` — text: "={{ $json.output }}", chatId: "={{ $('Telegram Trigger').first().json.message.chat.id }}", additionalFields: "[object Object]"
31. **Get Onboarding Chat History** `redis` — operation: **get**
32. **Update Agent Memory** `memoryManager` — mode: "insert", messages: "[object Object]"
33. **Information Extractor** `informationExtractor` — text: "={{
$json.data
  .reverse()
  .slice(0, 5)
  .map(item => item.parseJson())
  .map(item => `${item.type}: ${item.data.content}`)
  .join('\n')
}}", options: "[object Object]", attributes: "[object Object]"
34. **Send Response2** `telegram` — text: "=Hello again! I'm now ready to answer any remaining questions you may have.", chatId: "={{ $('Handoff Subworkflow').first().json.chatId }}", additionalFields: "[object Object]"
35. **With Defaults** `code` — mode: "runOnceForEachItem", jsCode: "return {
  "firstname": "",
  "lastname": "",
  "address_and_postcode": "",
  "reason_for_call": "",
  ...$input.item.json.output,
}"
36. **Has All Criteria?** `if` — options: "[object Object]", conditions: "[object Object]"
37. **Handoff Subworkflow1** `executeWorkflow` — mode: "each", options: "[object Object]", workflowId: "[object Object]"
38. **Continue Conversation** `telegram` — text: "={{ $('Onboarding Agent').first().json.output }}", chatId: "={{ $('Telegram Trigger').first().json.message.chat.id }}", additionalFields: "[object Object]"
39. **Send Response** `telegram` — text: "=Thank you. I've now transferred you to a human agent who will reach out to you. Once complete, you can come back to this chat to finish the process.", chatId: "={{ $('Telegram Trigger').first().json.message.chat.id }}", additionalFields: "[object Object]"
40. **Update Agent Memory1** `memoryManager` — mode: "insert", messages: "[object Object]"

## 💡 AI-Powered Ideas for Improvement
**Explain:**  
This n8n workflow facilitates a bot-to-human handoff in a chat system using Telegram. It begins with a Telegram message trigger, processes the conversation with AI models, and uses Redis to manage session states. If criteria are met, the conversation is handed off to a human agent. The human agent can then send the conversation back to the bot, allowing for seamless communication between AI and human agents.

**Demonstrate:**  
A customer service team could implement this workflow to manage complex queries. When an AI chatbot can't resolve an issue, it hands off the conversation to a human agent. This ensures that customers receive the best possible support without delay.

**Imitate:**  
1. Import the workflow into n8n.
2. Connect your Telegram and Redis accounts.
3. Customize the AI models and session management logic to fit your needs.
4. Test the workflow with sample conversations to ensure smooth handoff between bot and human agents.

**Practice:**  
Set up a test Telegram bot and use this workflow to simulate a customer inquiry that requires human intervention. Observe how the workflow manages the handoff and how it switches back to the bot after the human agent's response.

**WIIFM:**  
Mastering this workflow can enhance your service offerings by providing robust customer support solutions. It can lead to increased client satisfaction and retention, as well as new opportunities to offer AI-enhanced customer service systems, driving revenue growth in your AI automation business.

## 🔧 Setup Instructions
1. **Connect Credentials:** telegramApi, redis, openAiApi.

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
