# Stickynote Automation Webhook
## 🚀 What It Does
Automates a flow using stickyNote×4, manualChatTrigger, toolWikipedia.

## 💼 Business Use Case
Use as a **glue/API broker**: receive data, enrich/validate via APIs, and pass to downstream systems.

## ⚙️ How It Works
1. **Trigger:** This workflow starts with **On new manual Chat Message**.
2. **Sticky Note4** `stickyNote` — width: "300", height: "205", content: "### The conversation history(last 20 messages) is stored in a buffer memory"
3. **On new manual Chat Message** `manualChatTrigger` — configured for its default action.
4. **Wikipedia** `toolWikipedia` — configured for its default action.
5. **Sticky Note3** `stickyNote` — width: "300", height: "205", content: "### Tools which agent can use to accomplish the task"
6. **Sticky Note6** `stickyNote` — width: "422", height: "211", content: "### Conversational agent will utilise available tools to answer the prompt. "
7. **Window Buffer Memory** `memoryBufferWindow` — contextWindowLength: "20"
8. **Weather HTTP Request** `toolHttpRequest` — url: `https://api.open-meteo.com/v1/forecast`
9. **Ollama Chat Model** `lmChatOllama` — model: `llama3.2:latest`
10. **Sticky Note** `stickyNote` — color: "4", height: "240", content: "### In System Message, add the following.

"You are a helpful assistant, with weather tool and wiki tool. find out the latitude and longitude information of a location then use the…[truncated]"
11. **AI Agent** `agent` — text: "={{ $json.input }}", options: "[object Object]", promptType: "define"

## 💡 AI-Powered Ideas for Improvement
**Explain:**  
This n8n workflow acts as a conversational agent that can answer user queries using tools like Wikipedia for general information and a weather API for current weather and forecasts. It stores the last 20 messages in memory to maintain context, allowing for a more coherent conversation.

**Demonstrate:**  
A business owner might use this workflow to enhance customer service by providing real-time weather updates and factual information directly within a chat interface, improving user engagement and experience.

**Imitate:**  
1. Import the workflow into n8n.
2. Connect your Wikipedia and weather API accounts.
3. Set the manual chat message as the trigger.
4. Customize the AI agent's system message to suit your needs.
5. Test the workflow by sending chat messages and observing the responses.

**Practice:**  
Create a test chat interface and interact with it using various questions about the weather and general topics. Adjust the workflow to improve the response accuracy and evaluate how well it maintains conversation context.

**WIIFM:**  
Mastering this workflow allows you to offer intelligent chat solutions to clients, increasing the value of your services. By providing AI-driven customer interactions, you can attract more clients and generate additional revenue streams in the AI automation sector.

## 🔧 Setup Instructions
1. **Connect Credentials:** ollamaApi.
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
