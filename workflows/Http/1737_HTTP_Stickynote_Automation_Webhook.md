# HTTP Stickynote Automation Webhook
  ## 🚀 What It Does
  Calls external APIs and uses **AI** to transform or decide, then routes the result downstream.
  
  ## 💼 Business Use Case
  Use as a **glue/API broker**: receive data, enrich/validate via APIs, and pass to downstream systems.
  
  ## ⚙️ How It Works
  1. **Trigger:** This workflow starts with **Execute "Generate a chart" tool**.
  2. **OpenAI Chat Model** `lmChatOpenAi` — model: `gpt-4o`
3. **Execute "Generate a chart" tool** `executeWorkflowTrigger` — configured for its default action.
4. **When chat message received** `chatTrigger` — public: "true", options: "[object Object]"
5. **Window Buffer Memory** `memoryBufferWindow` — sessionKey: "={{ $('When chat message received').item.json.sessionId }}", sessionIdType: "customKey"
6. **Sticky Note1** `stickyNote` — color: "7", width: "681", height: "945"
7. **Sticky Note** `stickyNote` — color: "7", width: "769", height: "523"
8. **Sticky Note2** `stickyNote` — color: "7", width: "888", height: "646"
9. **OpenAI Chat Model Classifier** `lmChatOpenAi` — options: "[object Object]"
10. **Sticky Note3** `stickyNote` — color: "7", width: "948", height: "646"
11. **Sticky Note4** `stickyNote` — color: "7", width: "680", height: "720"
12. **OpenAI - Generate Chart definition with Structured Output** `httpRequest` — method: **POST**, url: `https://api.openai.com/v1/chat/completions`
13. **Information Extractor - User question** `informationExtractor` — text: "={{ $json.chatInput }}", options: "[object Object]", attributes: "[object Object]"
14. **Set response** `set` — options: "[object Object]", assignments: "[object Object]"
15. **AI Agent** `agent` — text: "={{ $json.output.user_question }}", agent: "sqlAgent", options: "[object Object]"
16. **Text Classifier - Chart required?** `textClassifier` — options: "[object Object]", inputText: "=**User Request**: {{ $('When chat message received').item.json.chatInput }}
**Data to visualize**: {{ $json.output }}
", categories: "[object Object]"
17. **User question + Agent initial response** `set` — options: "[object Object]", assignments: "[object Object]"
18. **Set Text output** `set` — options: "[object Object]", assignments: "[object Object]"
19. **Execute Workflow** `executeWorkflow` — options: "[object Object]", workflowId: "[object Object]"
20. **Set Text + Chart output** `set` — options: "[object Object]", assignments: "[object Object]"
  
  ## 💡 AI-Powered Ideas for Improvement
  **Explain:**  
This n8n workflow enhances data interactions by automatically analyzing user queries and generating visual data charts. It starts with receiving a chat message, extracts user questions, and uses an AI agent to query a database. If the response benefits from visualization, it generates a chart using OpenAI's structured output and displays the data alongside the SQL query results.

**Demonstrate:**  
A business analyst could use this workflow to quickly generate charts from SQL database queries during meetings, enhancing data-driven discussions and decision-making by providing clear, visual insights.

**Imitate:**  
1. Import the workflow into n8n.
2. Connect your database and OpenAI credentials.
3. Set up a trigger for receiving chat messages.
4. Customize SQL queries and data fields to match your database.
5. Test the workflow to ensure it generates accurate charts.

**Practice:**  
Create a mock database with sample data. Use the workflow to query for sales data and generate bar charts. Modify chart parameters to see the impact on visualization.

**WIIFM:**  
Mastering this workflow allows you to offer advanced data visualization services, helping clients make informed decisions. This can enhance your service offerings, attract new clients, and increase revenue in your automation business.
  
  ## 🔧 Setup Instructions
  1. **Connect Credentials:** openAiApi, postgres.
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
  