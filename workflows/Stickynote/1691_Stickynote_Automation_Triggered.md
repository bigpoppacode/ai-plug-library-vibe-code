# Stickynote Automation Triggered
## 🚀 What It Does
Automates a flow using stickyNote×8, set×3, chatTrigger.

## 💼 Business Use Case
Great for **content, summarization, triage, or decisioning** where AI adds speed and consistency.

## ⚙️ How It Works
1. **Trigger:** This workflow starts with **When chat message received**.
2. **When chat message received** `chatTrigger` — options: "[object Object]"
3. **Ollama Model** `lmOllama` — model: `llama3.2:latest`
4. **Sticky Note** `stickyNote` — color: "4", width: "520", height: "860"
5. **Sticky Note1** `stickyNote` — width: "560", height: "200", content: "## Model Node
- Name: Ollama Model
- Type: LangChain Ollama Integration
- Model: llama3.2:latest
- Purpose: Provides the language model capabilities"
6. **Sticky Note2** `stickyNote` — color: "6", width: "280", height: "400"
7. **Sticky Note3** `stickyNote` — color: "3", width: "500", height: "620"
8. **Sticky Note4** `stickyNote` — color: "7", width: "420", height: "200"
9. **Sticky Note5** `stickyNote` — color: "5", width: "420", height: "520"
10. **Sticky Note6** `stickyNote` — color: "6", width: "460", height: "420"
11. **Sticky Note7** `stickyNote` — color: "2", width: "540", height: "560"
12. **Basic LLM Chain** `chainLlm` — text: "=Provide the users prompt and response as a JSON object with two fields:
- Prompt
- Response

Avoid any preample or further explanation.

This is the question: {{ $json.chatInput }…[truncated]", promptType: "define"
13. **JSON to Object** `set` — options: "[object Object]", assignments: "[object Object]"
14. **Error Response** `set` — options: "[object Object]", assignments: "[object Object]"
15. **Structured Response** `set` — options: "[object Object]", assignments: "[object Object]"

## 💡 AI-Powered Ideas for Improvement
**Explain:**  
This n8n workflow is designed to handle chat messages by integrating with the Ollama language model (Llama 3.2). When a chat message is received, it triggers the workflow, which processes the message through a language model chain to generate a response. The response is then structured as a JSON object and returned to the user. If an error occurs during processing, an error message is provided instead.

**Demonstrate:**  
A business owner could use this workflow to automate customer support chat on their website, providing instant responses to common inquiries, thus enhancing customer experience and reducing the need for human intervention.

**Imitate:**  
1. Import the workflow into n8n.
2. Set up and connect your Ollama API credentials.
3. Configure the chat trigger with your chat platform.
4. Customize the JSON response fields to fit your application needs.
5. Test the workflow by sending a chat message and observing the response.

**Practice:**  
Create a simple chat interface and connect it to this workflow. Send different types of questions to see how the workflow processes them and returns structured responses. Try modifying the prompt to change the response style.

**WIIFM:**  
Mastering this workflow enables you to offer automated chat solutions to businesses, reducing their customer service costs and improving response times. This can position you as a valuable service provider in the AI automation space, opening up opportunities for client acquisition and revenue generation.

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
