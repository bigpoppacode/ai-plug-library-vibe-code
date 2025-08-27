# Stickynote Automate Triggered
## 🚀 What It Does
Calls external APIs and uses **AI** to transform or decide, then routes the result downstream.

## 💼 Business Use Case
Use as a **glue/API broker**: receive data, enrich/validate via APIs, and pass to downstream systems.

## ⚙️ How It Works
1. **Trigger:** This workflow starts with **On new manual Chat Message**.
2. **Sticky Note4** `stickyNote` — width: "300", height: "185", content: "### The conversation history(last 20 messages) is stored in a buffer memory"
3. **On new manual Chat Message** `manualChatTrigger` — configured for its default action.
4. **Chat OpenAI** `lmChatOpenAi` — model: `gpt-4o-mini`
5. **Wikipedia** `toolWikipedia` — configured for its default action.
6. **Sticky Note3** `stickyNote` — width: "300", height: "185", content: "### Tools which agent can use to accomplish the task"
7. **Sticky Note6** `stickyNote` — width: "422", height: "211", content: "### Conversational agent will utilise available tools to answer the prompt. "
8. **Window Buffer Memory** `memoryBufferWindow` — contextWindowLength: "20"
9. **SerpAPI** `toolSerpApi` — options: "[object Object]"
10. **AI Agent** `agent` — text: "={{ $json.input }}", options: "[object Object]", promptType: "define"

## 💡 AI-Powered Ideas for Improvement
**Explain**  
This n8n workflow sets up a conversational AI agent using OpenAI's GPT-4 model. It listens for manual chat messages, processes them using OpenAI, and utilizes Wikipedia and SerpAPI for additional information. The AI Agent uses a memory buffer to store the last 20 messages, ensuring context is maintained in the conversation.

**Demonstrate**  
A developer could use this workflow to create a customer service chatbot that can answer FAQs using real-time data from Wikipedia and search results, enhancing user experiences by providing accurate and up-to-date information.

**Imitate**  
1. Import the workflow into n8n.
2. Connect OpenAI, SerpAPI, and Wikipedia.
3. Set up a trigger to listen for chat messages.
4. Map the input text to the AI Agent.
5. Test the setup by sending manual chat messages to see how the agent responds.

**Practice**  
Create a simple FAQ bot using this workflow. Use sample questions from your business, and test the bot's ability to pull accurate information from Wikipedia and search results, ensuring it can handle context changes over multiple messages.

**WIIFM**  
Mastering this workflow allows you to offer AI-driven customer service solutions, providing clients with smarter, more efficient support systems. This can lead to new business opportunities, increased client satisfaction, and potential upsells in your AI automation services.

## 🔧 Setup Instructions
1. **Connect Credentials:** openAiApi.
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
