# Stickynote Automation Triggered
## 🚀 What It Does
Automates a flow using stickyNote×2, chatTrigger, lmChatOllama.

## 💼 Business Use Case
Great for **content, summarization, triage, or decisioning** where AI adds speed and consistency.

## ⚙️ How It Works
1. **Trigger:** This workflow starts with **When chat message received**.
2. **When chat message received** `chatTrigger` — options: "[object Object]"
3. **Ollama Chat Model** `lmChatOllama` — options: "[object Object]"
4. **Sticky Note** `stickyNote` — width: "485", height: "473", content: "## Chat with local LLMs using n8n and Ollama
This n8n workflow allows you to seamlessly interact with your self-hosted Large Language Models (LLMs) through a user-friendly chat int…[truncated]"
5. **Sticky Note1** `stickyNote` — color: "6", width: "368", height: "258"
6. **Chat LLM Chain** `chainLlm` — configured for its default action.

## 💡 AI-Powered Ideas for Improvement
### Explain
This n8n workflow enables you to chat with your self-hosted Large Language Models (LLMs) using Ollama. When a chat message is received, it sends the message to the Ollama server, which processes it with the LLM and returns an AI-generated response. This setup allows for seamless and interactive communication with your local AI models directly within the n8n platform.

### Demonstrate
A developer could use this workflow to test AI model responses in real-time during development, ensuring that the model's outputs meet the necessary criteria before deployment in a production environment.

### Imitate
1. Install and run Ollama on your local machine.
2. Import the workflow into n8n.
3. Connect the workflow to your local Ollama instance.
4. Trigger the workflow by sending a chat message.
5. Observe the AI-generated response returned by the LLM.

### Practice
Create a simple chat interface in n8n and send different messages to test the LLM's responses. Try modifying the LLM's parameters in Ollama to see how the responses change.

### WIIFM
Mastering this workflow allows you to offer personalized AI chat solutions to clients, enabling them to leverage AI for customer support or internal communications. This can enhance your service offerings and increase revenue opportunities in the rapidly growing AI automation market.

## 🔧 Setup Instructions
1. **Connect Credentials:** ollamaApi.

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
