# Stickynote Automation Triggered
## 🚀 What It Does
Automates a flow using stickyNote×3, set, chatTrigger.

## 💼 Business Use Case
Great for **content, summarization, triage, or decisioning** where AI adds speed and consistency.

## ⚙️ How It Works
1. **Trigger:** This workflow starts with **When chat message received**.
2. **Sticky Note** `stickyNote` — width: "180", height: "400", content: "## Settings
Specify the model"
3. **Sticky Note1** `stickyNote` — color: "3", width: "380", height: "400"
4. **When chat message received** `chatTrigger` — options: "[object Object]"
5. **Chat Memory** `memoryBufferWindow` — sessionKey: "={{ $json.sessionId }}", sessionIdType: "customKey"
6. **LLM Model** `lmChatOpenAi` — model: `={{ $json.model }}`
7. **Sticky Note2** `stickyNote` — width: "600", height: "240", content: "## Model examples

* openai/o3-mini
* google/gemini-2.0-flash-001
* deepseek/deepseek-r1-distill-llama-8b
* mistralai/mistral-small-24b-instruct-2501:free
* qwen/qwen-turbo

For mo…[truncated]"
8. **Settings** `set` — options: "[object Object]", assignments: "[object Object]"
9. **AI Agent** `agent` — text: "={{ $json.prompt }}", options: "[object Object]", promptType: "define"

## 💡 AI-Powered Ideas for Improvement
**Explain:**  
This n8n workflow listens for incoming chat messages, stores the conversation context, and uses a specified language model to generate responses. It allows users to choose from various language models via OpenRouter, providing flexibility in chatbot configurations. The response is generated using AI and is tailored based on the chat input and selected model.

**Demonstrate:**  
A developer could use this workflow to create a customer service chatbot that adapts its responses based on different AI models, improving the user experience by providing more accurate and context-aware answers.

**Imitate:**  
1. Import the workflow into n8n.
2. Connect your chat service to the workflow's chat trigger.
3. Configure the "Settings" node to select your preferred language model.
4. Test the workflow to ensure it generates appropriate responses.

**Practice:**  
Set up a test chat environment and send various messages to see how different models respond. Adjust the model settings and observe changes in the AI's answers to understand each model's strengths.

**WIIFM:**  
Mastering this workflow enables you to offer customizable AI chat solutions, enhancing customer interaction for clients. This can differentiate your services, attract more customers, and increase revenue in the AI automation business.

## 🔧 Setup Instructions
1. **Connect Credentials:** openAiApi.

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
