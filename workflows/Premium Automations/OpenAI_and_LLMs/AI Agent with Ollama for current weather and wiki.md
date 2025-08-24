# AI Agent With Ollama For Current Weather And Wiki

## 🚀 What It Does
This workflow automates a process involving stickyNote, manualChatTrigger, toolWikipedia.

## 💼 Business Use Case
Use it to automate research, content creation, or data analysis. It saves hours of manual work.

## ⚙️ How It Works
1.  **Trigger:** This workflow starts with a **On new manual Chat Message** node.
2. **Step 1: Sticky Note4 (stickyNote)** - This step performs a key action in the workflow.
3. **Step 2: On new manual Chat Message (manualChatTrigger)** - This step performs a key action in the workflow.
4. **Step 3: Wikipedia (toolWikipedia)** - This step performs a key action in the workflow.
5. **Step 4: Sticky Note3 (stickyNote)** - This step performs a key action in the workflow.
6. **Step 5: Sticky Note6 (stickyNote)** - This step performs a key action in the workflow.
7. **Step 6: Window Buffer Memory (memoryBufferWindow)** - This step performs a key action in the workflow.
8. **Step 7: AI Agent (agent)** - This step performs a key action in the workflow.
9. **Step 8: Weather HTTP Request (toolHttpRequest)** - This step performs a key action in the workflow.
10. **Step 9: Ollama Chat Model (lmChatOllama)** - This step performs a key action in the workflow.
11. **Step 10: Sticky Note (stickyNote)** - This step performs a key action in the workflow.

## 💡 AI-Powered Ideas for Improvement
### Explain
This n8n workflow automates a conversation system where a user can send messages, and the AI agent utilizes tools like Wikipedia and a weather API to provide relevant responses based on stored conversation history.

### Demonstrate
A business owner could use this workflow to enhance customer support by allowing clients to ask questions via chat. The AI can pull information from Wikipedia and provide real-time weather updates, improving response time and engagement.

### Imitate
1. Create a new workflow in n8n.
2. Add a **Manual Chat Trigger** node.
3. Integrate an **AI Agent** node with a system message for context.
4. Connect it to a **Weather HTTP Request** node for real-time data.
5. Set up a **Wikipedia** tool node for information retrieval.
6. Configure a **Memory Buffer** to store conversation history for context.

### Practice
Try modifying the workflow by adding a new tool, like a news API, to provide current events in response to user queries. Test it by sending chat messages and observing the AI's responses.

### WIIFM
Mastering this workflow enables you to create intelligent chat solutions for clients, enhancing their customer service capabilities. This expertise can help you attract clients looking for automation, potentially increasing your income through service offerings.

## 🔧 Setup Instructions
1. **Connect Credentials:** OpenAI, Google Sheets, Slack, and other nodes must be authenticated.
2. **Customize Core Logic:** Review "Sticky Note4" and "Sticky Note" for IDs, table names, and URLs.
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
