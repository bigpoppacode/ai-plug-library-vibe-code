# Manual Stickynote Automation Webhook
  ## 🚀 What It Does
  Automates a flow using stickyNote×5, mcpClientTool×4, mcpClient×2.
  
  ## 💼 Business Use Case
  Use as a **glue/API broker**: receive data, enrich/validate via APIs, and pass to downstream systems.
  
  ## ⚙️ How It Works
  1. **Trigger:** This workflow starts with **When chat message received**.
  2. **When chat message received** `chatTrigger` — options: "[object Object]"
3. **Google Gemini Chat Model** `lmChatGoogleGemini` — options: "[object Object]", modelName: "models/gemini-2.0-flash-exp"
4. **Simple Memory** `memoryBufferWindow` — configured for its default action.
5. **When clicking ‘Test workflow’** `manualTrigger` — configured for its default action.
6. **Google Search Engine for Bright Data** `mcpClientTool` — operation: **executeTool**
7. **Bing Search Engine for Bright Data** `mcpClientTool` — operation: **executeTool**
8. **Sticky Note** `stickyNote` — color: "4", width: "640", height: "240"
9. **Sticky Note1** `stickyNote` — color: "3", width: "460", height: "260"
10. **MCP Client List all tools** `mcpClientTool` — configured for its default action.
11. **HTTP Request for Webhook Notification** `toolHttpRequest` — method: **POST**, url: `https://webhook.site/daf9d591-a130-4010-b1d3-0c66f8fcf467`
12. **Sticky Note2** `stickyNote` — width: "440", height: "120", content: "## Disclaimer
This template is only available on n8n self-hosted as it's making use of the community node for MCP Client."
13. **Yandex Search Engine for Bright Data** `mcpClientTool` — operation: **executeTool**
14. **Sticky Note3** `stickyNote` — color: "5", width: "400", height: "220"
15. **Sticky Note4** `stickyNote` — width: "300", height: "180", content: "## LLM Usage
Google Gemini is employed by the AI agent to understand and interpret user queries. Based on this interpretation, the agent initiates a call to the appropriate MCP cli…[truncated]"
16. **AI Agent** `agent` — options: "[object Object]"
17. **MCP Client list all tools for Bright Data** `mcpClient` — configured for its default action.
18. **Set search query** `set` — options: "[object Object]", assignments: "[object Object]"
19. **MCP Client Bright Data Search Tool** `mcpClient` — operation: **executeTool**
  
  ## 💡 AI-Powered Ideas for Improvement
  ### Explain
This n8n workflow enhances chat responses by integrating real-time search data from Google, Bing, and Yandex using Bright Data. When a chat message is received, the AI agent uses the Google Gemini model to interpret the message and initiate a search using MCP Client tools. The search results are then sent back as a chat response and a webhook notification is triggered to relay the response.

### Demonstrate
A business owner can use this workflow to provide customers with up-to-date information directly in chat, such as the latest product reviews or industry news, enhancing customer engagement and service efficiency.

### Imitate
1. Import the workflow into your n8n instance.
2. Connect your Google Gemini and MCP Client accounts.
3. Configure the chat trigger to match your chat service.
4. Customize the search query settings to align with your business needs.
5. Test the workflow to ensure it captures and responds to chat messages accurately.

### Practice
Set up a test chat environment and send queries related to your business. Observe how the workflow retrieves and sends back search results. Adjust search parameters and test different query types to optimize response accuracy.

### WIIFM
Mastering this workflow allows you to deliver real-time, data-driven chat responses, elevating customer support capabilities. This can differentiate your service offerings, attract new clients, and increase revenue in your automation business by offering advanced AI-driven solutions.
  
  ## 🔧 Setup Instructions
  1. **Connect Credentials:** googlePalmApi, mcpClientApi.
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
  