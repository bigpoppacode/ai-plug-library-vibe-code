# Mongodbtool Stickynote Automation Triggered
  ## 🚀 What It Does
  Moves data between apps and a **database/spreadsheet**, with logic and optional AI steps.
  
  ## 💼 Business Use Case
  Great for **content, summarization, triage, or decisioning** where AI adds speed and consistency.
  
  ## ⚙️ How It Works
  1. **Trigger:** This workflow starts with **When chat message received**.
  2. **OpenAI Chat Model** `lmChatOpenAi` — options: "[object Object]"
3. **MongoDBAggregate** `mongoDbTool` — operation: **aggregate**, collection: `movies`
4. **Window Buffer Memory** `memoryBufferWindow` — contextWindowLength: "10"
5. **When chat message received** `chatTrigger` — mode: "webhook", public: "true", options: "[object Object]"
6. **insertFavorite** `toolWorkflow` — name: "insertFavorites", workflowId: "[object Object]", description: "=Use this tool only to add favorites with the structure of {"title" : "recieved title" }"
7. **Sticky Note** `stickyNote` — width: "216.0875923062025", height: "499.89779507612025", content: "## AI Agent powered by OpenAI and MongoDB 

This flow is designed to work as an AI autonomous agent that can get chat messages, query data from MongoDB using the aggregation framew…[truncated]"
8. **Sticky Note1** `stickyNote` — content: "## Process

The message is being processed by the "Chat Model" and the correct tool is used according to the message. "
9. **AI Agent - Movie Recommendation** `agent` — text: "=Assistant for best movies context, you have tools to search using "MongoDBAggregate" and you need to provide a MongoDB aggregation pipeline code array as a "query" input param. Us…[truncated]", options: "[object Object]", promptType: "define"
  
  ## 💡 AI-Powered Ideas for Improvement
  **Explain:**  
This n8n workflow is an AI-powered movie recommendation system. It listens for chat messages via a webhook, processes them using an OpenAI chat model, and queries a MongoDB database to find top-rated movies. It can also store favorite movies back into the database when a user confirms a favorite.

**Demonstrate:**  
A movie streaming service could use this to provide users with personalized movie recommendations, improving user engagement by suggesting films based on top ratings and storing their favorites for future reference.

**Imitate:**  
1. Import the workflow into n8n.
2. Connect your MongoDB and OpenAI accounts.
3. Set up a webhook to receive chat messages.
4. Customize the MongoDB collection to match your movie data.
5. Test by sending chat messages to receive movie recommendations.

**Practice:**  
Create a small MongoDB collection with movie data, then run the workflow. Send chat messages to see how it responds with recommendations and stores confirmed favorites.

**WIIFM:**  
Mastering this workflow can help you offer AI-driven recommendation systems to clients, enhancing their user experience and engagement. This can lead to new business opportunities and increased revenue streams in your automation services.
  
  ## 🔧 Setup Instructions
  1. **Connect Credentials:** openAiApi, mongoDb.
  
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
  