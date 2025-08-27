# Stickynote Send Triggered
## 🚀 What It Does
Automates a flow using stickyNote, chatTrigger, chainLlm.

## 💼 Business Use Case
Great for **content, summarization, triage, or decisioning** where AI adds speed and consistency.

## ⚙️ How It Works
1. **Trigger:** This workflow starts with **When chat message received**.
2. **Sticky Note** `stickyNote` — width: "1083", height: "357", content: "## This is an example of basic LLM Chain connected to an open-source model
### The Chain is connected to the Mistral-7B-Instruct-v0.1 model, but you can change this

Please note th…[truncated]"
3. **When chat message received** `chatTrigger` — options: "[object Object]"
4. **Hugging Face Inference Model** `lmOpenHuggingFaceInference` — model: `mistralai/Mistral-7B-Instruct-v0.1`
5. **Basic LLM Chain** `chainLlm` — messages: "[object Object]"

## 💡 AI-Powered Ideas for Improvement
**Explain:**  
This n8n workflow listens for incoming chat messages and processes them using an AI model from Hugging Face. When a message is received, it triggers the workflow, sending the message to the Mistral-7B-Instruct-v0.1 model. The AI processes the message and generates a polite response with emojis, which is then sent back to the user.

**Demonstrate:**  
A business owner can use this workflow to automate customer support on their website, providing instant, friendly responses to customer inquiries, saving time and improving customer satisfaction.

**Imitate:**  
1. Import the workflow into n8n.
2. Connect your Hugging Face API account.
3. Set up the chat trigger to receive messages.
4. Customize the AI model or response style if needed.
5. Test by sending a message to see the AI-generated response.

**Practice:**  
Set up a test chat environment and send various questions to the workflow. Observe how the AI responds, and experiment with modifying the initial prompt to change the response style.

**WIIFM:**  
Mastering this workflow allows you to offer automated customer service solutions, reducing manual workload and improving user experience. This can enhance your service offerings and attract more clients, boosting your income and reputation in the AI automation market.

## 🔧 Setup Instructions
1. **Connect Credentials:** huggingFaceApi.

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
