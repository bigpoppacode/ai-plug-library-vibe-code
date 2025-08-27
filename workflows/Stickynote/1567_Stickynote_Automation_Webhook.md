# Stickynote Automation Webhook
## 🚀 What It Does
Calls external APIs and uses **AI** to transform or decide, then routes the result downstream.

## 💼 Business Use Case
Use as a **glue/API broker**: receive data, enrich/validate via APIs, and pass to downstream systems.

## ⚙️ How It Works
1. **Trigger:** This workflow starts with **When chat message received**.
2. **When chat message received** `chatTrigger` — public: "true", options: "[object Object]", initialMessages: "Type like this: Weather Forecast for the Next 7 Days in São Paulo"
3. **OpenAI Chat Model** `lmChatOpenAi` — options: "[object Object]"
4. **Sticky Note** `stickyNote` — color: "5", width: "500", height: "720"
5. **Sticky Note1** `stickyNote` — width: "340", height: "220", content: "## Create an Hosted Web Chat

### And setup the trigger!

Example: https://website/webhook/4a4..../chat"
6. **Chat Memory Buffer** `memoryBufferWindow` — configured for its default action.
7. **Sticky Note2** `stickyNote` — width: "260", content: "-


## Setup OpenAI Key"
8. **Sticky Note5** `stickyNote` — color: "4", width: "280", height: "360"
9. **A tool to get the weather forecast based on geolocation** `toolHttpRequest` — url: `https://api.open-meteo.com/v1/forecast`
10. **Sticky Note6** `stickyNote` — color: "4", width: "280", height: "320"
11. **A tool for inputting the city and obtaining geolocation** `toolHttpRequest` — url: `=https://geocoding-api.open-meteo.com/v1/search`
12. **Sticky Note4** `stickyNote` — color: "3", width: "840", height: "80"
13. **Generic AI Tool Agent** `agent` — options: "[object Object]"

## 💡 AI-Powered Ideas for Improvement
### Explain
This n8n workflow automates weather forecasting by integrating OpenAI and Open-Meteo APIs. It starts when a chat message is received, prompting the workflow to use OpenAI to interpret the request. The workflow then retrieves the city's geolocation and fetches the 7-day weather forecast, providing a seamless user experience for obtaining weather data.

### Demonstrate
A travel agency could use this workflow to provide clients with up-to-date weather forecasts for their destinations, enhancing the customer experience and allowing for better travel planning.

### Imitate
1. Import the workflow into n8n.
2. Set up a chat trigger to receive weather requests.
3. Connect OpenAI and Open-Meteo APIs.
4. Customize the initial chat message and test the workflow.
5. Verify the output to ensure accurate weather forecasts.

### Practice
Create a simple chat interface using n8n that responds with weather forecasts for different cities. Test it by inputting various cities and compare the results with other weather services to ensure accuracy.

### WIIFM
Mastering this workflow enables you to offer personalized weather forecasting services, attracting clients in the travel and hospitality industries. This skill can diversify your service offerings and increase your business's marketability in AI-driven automation solutions.

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
