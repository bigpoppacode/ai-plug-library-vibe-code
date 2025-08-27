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
6. **insertFavorite** `toolWorkflow` — name: "insertFavorites", workflowId: "[object Object]", description: "=Use this tool only to add favorites with the structure of {"title"  : "recieved title"  }"
7. **Sticky Note** `stickyNote` — width: "216.0875923062025", height: "499.89779507612025", content: "## AI Agent powered by OpenAI and MongoDB 

This flow is designed to work as an AI autonomous agent that can get chat messages, query data from MongoDB using the aggregation framew…[truncated]"
8. **Sticky Note1** `stickyNote` — content: "## Process

The message is being processed by the "Chat Model" and the correct tool is used according to the message. "
9. **AI Agent - Movie Recommendation** `agent` — text: "=Assistant for best movies context, you have tools to search using "MongoDBAggregate" and you need to provide a MongoDB aggregation pipeline code array as a "query" input param. Us…[truncated]", options: "[object Object]", promptType: "define"
  
  ## 💡 AI-Powered Ideas for Improvement
  ### Explain
This n8n workflow functions as an AI-powered movie recommendation agent. When a chat message is received, it utilizes OpenAI to process the input and decide on the appropriate action. It queries a MongoDB collection to find top-rated movies using an aggregation pipeline and can store a user's favorite movies back into the database. Essentially, it provides movie suggestions and can save user preferences automatically.

### Demonstrate
A movie streaming service could use this workflow to offer personalized movie recommendations to their users, enhancing user engagement and satisfaction by suggesting top-rated movies and storing user favorites for tailored future recommendations.

### Imitate
1. Import this workflow into n8n.
2. Connect your OpenAI and MongoDB accounts.
3. Set up the webhook to trigger on chat messages.
4. Customize the MongoDB query to match your movie database structure.
5. Test the workflow by sending a chat message and confirming favorite movies.

### Practice
Create a mock database with movie entries in MongoDB. Trigger the workflow by sending a chat message asking for top-rated movies. Confirm a favorite movie to see it stored in the database. Experiment with different queries to see how recommendations change.

### WIIFM
Mastering this workflow allows you to offer personalized AI-based services, like movie recommendations, to clients. This can enhance customer engagement for entertainment platforms, providing a competitive edge and potential revenue growth by offering tailored user experiences.
  
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
  