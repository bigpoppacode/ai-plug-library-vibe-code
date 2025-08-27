# Stickynote Send Triggered
## 🚀 What It Does
Calls external APIs and uses **AI** to transform or decide, then routes the result downstream.

## 💼 Business Use Case
Use as a **glue/API broker**: receive data, enrich/validate via APIs, and pass to downstream systems.

## ⚙️ How It Works
1. **Trigger:** This workflow starts with **When chat message received**.
2. **Sticky Note4** `stickyNote` — width: "300", height: "225", content: "### The conversation history (last 20 messages) is stored in a buffer memory"
3. **Sticky Note3** `stickyNote` — width: "340", height: "225", content: "### Tools which agent can use to accomplish the task"
4. **Sticky Note6** `stickyNote` — width: "422", height: "211", content: "### Conversational agent will utilise available tools to answer the prompt. "
5. **When chat message received** `chatTrigger` — options: "[object Object]"
6. **OpenAI Chat Model** `lmChatOpenAi` — model: `[object Object]`
7. **Simple Memory** `memoryBufferWindow` — contextWindowLength: "20"
8. **SerpAPI** `toolSerpApi` — options: "[object Object]"
9. **Wikipedia** `toolWikipedia` — configured for its default action.
10. **AI Agent** `agent` — options: "[object Object]"

## 💡 AI-Powered Ideas for Improvement
**Explain:** This n8n workflow is designed to handle chat messages using an AI agent. When a chat message is received, it triggers the AI agent, which utilizes a memory buffer to store the last 20 messages for context. The agent can access tools like OpenAI's chat model, SerpAPI, and Wikipedia to process the message and provide a relevant response.

**Demonstrate:** A business owner might use this workflow to automate customer support on their website, allowing the AI to answer frequently asked questions using real-time data and historical context.

**Imitate:** 
1. Import the workflow into n8n.
2. Connect your OpenAI, SerpAPI, and Wikipedia accounts.
3. Set up a chat interface to trigger the workflow.
4. Customize the memory buffer and tools as needed.
5. Test with sample messages to ensure correct responses.

**Practice:** Create a chat interface that sends messages to this workflow. Ask questions requiring different tools (e.g., factual questions for Wikipedia, calculations for OpenAI) and observe how the AI utilizes each tool.

**WIIFM:** Mastering this workflow enables you to offer sophisticated AI-driven chat solutions, enhancing customer interaction and reducing support costs. This capability can attract new clients and increase your automation business's revenue.

## 🔧 Setup Instructions
1. **Connect Credentials:** openAiApi, serpApi.
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
