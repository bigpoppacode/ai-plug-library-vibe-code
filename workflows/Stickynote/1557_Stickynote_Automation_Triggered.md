# Stickynote Automation Triggered
## 🚀 What It Does
Automates a flow using stickyNote×9, lmChatOllama×2, agent×2.

## 💼 Business Use Case
Use to eliminate manual copy-paste and standardize a recurring business process.

## ⚙️ How It Works
1. **Trigger:** This workflow starts with **When chat message received**.
2. **When chat message received** `chatTrigger` — options: "[object Object]"
3. **Sticky Note** `stickyNote` — color: "7", width: "2360", height: "860"
4. **Sticky Note1** `stickyNote` — color: "7", width: "360", height: "260"
5. **Sticky Note2** `stickyNote` — color: "4", width: "280", height: "300"
6. **Sticky Note3** `stickyNote` — color: "3", width: "540", height: "380"
7. **Ollama Dynamic LLM** `lmChatOllama` — model: `={{ $('LLM Router').item.json.output.parseJson().llm }}`
8. **Ollama phi4** `lmChatOllama` — model: `phi4:latest`
9. **Router Chat Memory** `memoryBufferWindow` — configured for its default action.
10. **Agent Chat Memory** `memoryBufferWindow` — sessionKey: "={{ $('When chat message received').item.json.sessionId }}", sessionIdType: "customKey"
11. **Sticky Note7** `stickyNote` — color: "5", width: "540", height: "380"
12. **Sticky Note4** `stickyNote` — color: "7", width: "360", height: "260"
13. **Sticky Note8** `stickyNote` — color: "7", width: "360", height: "260"
14. **Sticky Note9** `stickyNote` — color: "7", width: "360", height: "260"
15. **Sticky Note5** `stickyNote` — width: "640", height: "1020", content: "## Who is this for?
This workflow template is designed for **AI enthusiasts**, **developers**, and **privacy-conscious users** who want to leverage the power of local large languag…[truncated]"
16. **LLM Router** `agent` — text: "=Choose the most appropriate LLM model for the following user request. Analyze the task requirements carefully and select the model that will provide optimal performance.  Only cho…[truncated]", options: "[object Object]", promptType: "define"
17. **AI Agent with Dynamic LLM** `agent` — text: "={{ $('When chat message received').item.json.chatInput }}", options: "[object Object]", promptType: "define"

## 💡 AI-Powered Ideas for Improvement
### Explain
This n8n workflow is designed to intelligently route chat messages to the most appropriate local large language model (LLM) based on the user's request. It uses a router to analyze the content of incoming chat messages and decide which LLM is best suited for the task. The workflow ensures that interactions are processed locally, maintaining privacy and data security, while dynamically selecting the optimal model for various types of tasks like text analysis, coding, or image processing.

### Demonstrate
A developer could use this workflow to handle user queries in a self-hosted chatbot application, ensuring that each query is processed by the most suitable LLM, thus optimizing performance and maintaining user data privacy.

### Imitate
1. Install n8n and Ollama locally.
2. Set up the required LLM models using Ollama CLI.
3. Import the workflow into n8n.
4. Configure the API credentials.
5. Activate the workflow and test it by sending various chat requests.

### Practice
Create a test scenario where you send different types of chat messages (e.g., text analysis, coding tasks) and observe how the workflow routes each message to the appropriate LLM. Modify the decision logic to see how changes affect routing.

### WIIFM
Mastering this workflow allows you to offer customized AI solutions that prioritize user privacy and data security, making you a more attractive choice for businesses seeking AI services. This expertise can lead to new clients and increased revenue in the AI automation sector.

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
