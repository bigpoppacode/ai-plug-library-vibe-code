# Stickynote Create Webhook
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
**Explain**  
This n8n workflow sets up a conversational AI agent that can answer user queries using a combination of Wikipedia for general information and a weather API for current weather conditions and forecasts. The workflow stores the conversation history and uses a language model to process user inputs, retrieving latitude and longitude information to fetch weather data.

**Demonstrate**  
A travel agency could use this workflow to provide clients with instant weather updates and general information about destinations, enhancing customer service and providing timely data to travelers.

**Imitate**  
1. Import the workflow into n8n.
2. Connect your Wikipedia and weather API accounts.
3. Set up the manual chat trigger to start the workflow.
4. Test the AI agent by asking it questions about a location's weather and general information.
5. Adjust the workflow for additional tools or data sources as needed.

**Practice**  
Create a test scenario where you ask the AI agent about the weather in different cities and check how it uses both the Wikipedia and weather API tools to provide comprehensive answers.

**WIIFM**  
Mastering this workflow can help you offer advanced AI-driven customer support services, providing real-time information to clients. This can lead to increased client satisfaction, retention, and the ability to upsell other automation services, boosting your income in an AI automation business.

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
