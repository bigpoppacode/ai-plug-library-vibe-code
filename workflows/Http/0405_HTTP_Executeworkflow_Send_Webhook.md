# HTTP ExecuteWorkflow Send Webhook
  ## 🚀 What It Does
  Calls external APIs and uses **AI** to transform or decide, then routes the result downstream.
  
  ## 💼 Business Use Case
  Use as a **glue/API broker**: receive data, enrich/validate via APIs, and pass to downstream systems.
  
  ## ⚙️ How It Works
  1. **Trigger:** This workflow starts with **When chat message received**.
  2. **Sticky Note1** `stickyNote` — color: "7", width: "1260", height: "635"
3. **Sticky Note2** `stickyNote` — color: "7", width: "927.5", height: "486.5625"
4. **Sticky Note** `stickyNote` — color: "5", width: "177", height: "199"
5. **Sticky Note5** `stickyNote` — color: "2", width: "170", height: "191"
6. **Sticky Note4** `stickyNote` — color: "2", width: "170", height: "190"
7. **Sticky Note3** `stickyNote` — color: "4", width: "185.9375", height: "214.8397420554627"
8. **Sticky Note6** `stickyNote` — width: "280", height: "145", content: "## Next steps

Learn more about [Advanced AI in n8n](https://docs.n8n.io/advanced-ai/)"
9. **When chat message received** `chatTrigger` — options: "[object Object]"
10. **OpenAI Chat Model** `lmChatOpenAi` — model: `[object Object]`
11. **Simple Memory** `memoryBufferWindow` — configured for its default action.
12. **When Executed by Another Workflow** `executeWorkflowTrigger` — workflowInputs: "[object Object]"
13. **OpenAI Chat Model1** `lmChatOpenAi` — model: `[object Object]`
14. **Activity Tool** `toolWorkflow` — name: "activity_tool", workflowId: "[object Object]", description: "Suggest an activity for a person to do. Use this tool if someone is bored, or asking for ideas of things to do."
15. **AI Agent** `agent` — options: "[object Object]"
16. **Work out activity type and number of people1** `informationExtractor` — text: "={{ $('When Executed by Another Workflow').item.json.chatInput }}", options: "[object Object]", schemaType: "manual"
17. **Call the API** `httpRequest` — url: `https://bored-api.appbrewery.com/filter`
18. **Combine** `aggregate` — include: "specifiedFields", options: "[object Object]", aggregate: "aggregateAllItemData"
19. **Set 'response' value** `set` — options: "[object Object]", assignments: "[object Object]"
  
  ## 💡 AI-Powered Ideas for Improvement
  ### Explain
This n8n workflow is designed to provide activity suggestions based on chat inputs. When a chat message is received, the AI agent processes the input to determine the type of activity and number of participants. It uses the Bored API to fetch activity suggestions and returns a suitable activity to the user. This workflow automates the process of providing personalized activity recommendations, making it useful for entertainment or engagement applications.

### Demonstrate
A business owner could use this workflow to enhance a customer support chatbot, providing users with fun activity suggestions when they are seeking ideas for things to do during downtime or when they're feeling bored.

### Imitate
1. Import the workflow into your n8n environment.
2. Connect the necessary credentials for OpenAI.
3. Set up a chat interface to trigger the workflow.
4. Customize the activity types and participant details to fit your use case.
5. Test the workflow by sending a chat message and observing the activity suggestion returned.

### Practice
Create a test scenario where you send different chat messages with varying details about the type of activity and participant numbers. Observe how the workflow processes the inputs and test the accuracy of the activity suggestions it provides.

### WIIFM
Mastering this workflow can enhance your automation portfolio by adding interactive and personalized features to chatbots or customer service applications. It can boost user engagement and satisfaction, helping you attract more clients and increase revenue in your automation business.
  
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
  