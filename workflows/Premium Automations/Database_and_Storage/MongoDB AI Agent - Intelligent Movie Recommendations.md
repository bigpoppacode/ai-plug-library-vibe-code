# MongoDB AI Agent   Intelligent Movie Recommendations

## 🚀 What It Does
This workflow automates a process involving lmChatOpenAi, mongoDbTool, memoryBufferWindow.

## 💼 Business Use Case
Use it to automate research, content creation, or data analysis. It saves hours of manual work.

## ⚙️ How It Works
1.  **Trigger:** This workflow starts with a **When chat message received** node.
2. **Step 1: OpenAI Chat Model (lmChatOpenAi)** - This step performs a key action in the workflow.
3. **Step 2: MongoDBAggregate (mongoDbTool)** - This step performs a key action in the workflow.
4. **Step 3: Window Buffer Memory (memoryBufferWindow)** - This step performs a key action in the workflow.
5. **Step 4: When chat message received (chatTrigger)** - This step performs a key action in the workflow.
6. **Step 5: insertFavorite (toolWorkflow)** - This step performs a key action in the workflow.
7. **Step 6: AI Agent - Movie Recommendation (agent)** - This step performs a key action in the workflow.
8. **Step 7: Sticky Note (stickyNote)** - This step performs a key action in the workflow.
9. **Step 8: Sticky Note1 (stickyNote)** - This step performs a key action in the workflow.

## 💡 AI-Powered Ideas for Improvement
### Explain
This n8n workflow automates movie recommendations by integrating OpenAI for chat interactions, querying a MongoDB for movie data, and allowing users to save their favorite movies. It triggers when a chat message is received and processes user input to provide tailored movie suggestions.

### Demonstrate
A business owner could use this workflow to enhance customer engagement on a movie streaming platform. When users send messages asking for movie recommendations, the system automatically responds with suggestions based on their preferences, improving user experience and retention.

### Imitate
1. Set up an n8n account and create a new workflow.
2. Add a **Webhook Trigger** to receive chat messages.
3. Connect an **OpenAI Chat Model** to process user queries.
4. Use **MongoDBAggregate** to fetch movie details based on user input.
5. Implement **insertFavorite** to allow users to save their favorite movies.
6. Add **Sticky Notes** for documentation and process clarity.

### Practice
Try modifying the workflow by changing the MongoDB query to filter movies by genre or release year. Test it by sending different chat messages and observing how the recommendations change based on your inputs.

### WIIFM
Mastering this workflow enables you to create personalized customer interactions, enhancing user satisfaction and loyalty. This skill can help you attract clients looking for automation solutions in e-commerce or entertainment, potentially increasing your income through service offerings.

## 🔧 Setup Instructions
1. **Connect Credentials:** OpenAI, Google Sheets, Slack, and other nodes must be authenticated.
2. **Customize Core Logic:** Review "OpenAI Chat Model" and "Sticky Note1" for IDs, table names, and URLs.
3. **Activate the Workflow:** Set the workflow to "Active" after testing.

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
