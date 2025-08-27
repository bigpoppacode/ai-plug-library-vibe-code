# Manual Stickynote Automate Triggered
  ## 🚀 What It Does
  Automates a flow using stickyNote×2, set×2, lmChatOpenAi×2.
  
  ## 💼 Business Use Case
  Great for **content, summarization, triage, or decisioning** where AI adds speed and consistency.
  
  ## ⚙️ How It Works
  1. **Trigger:** This workflow starts with **When clicking "Execute Workflow"**.
  2. **Sticky Note** `stickyNote` — width: "432", height: "397", content: "## Self-coded LLM Chain Node"
3. **When clicking "Execute Workflow"** `manualTrigger` — configured for its default action.
4. **Sticky Note1** `stickyNote` — width: "320.2172923777021", height: "231", content: "## Self-coded Tool Node"
5. **OpenAI Chat Model** `lmChatOpenAi` — model: `[object Object]`
6. **OpenAI Chat Model1** `lmChatOpenAi` — model: `[object Object]`
7. **Custom - Wikipedia1** `toolCode` — name: "wikipedia_tool", jsCode: "console.log('Custom Wikipedia Node runs');
const { WikipediaQueryRun } = require("@n8n/n8n-nodes-langchain/node_modules/@langchain/community/tools/wikipedia_query_run.cjs");

const…[truncated]", description: "Call this tool to research a topic on wikipedia."
8. **Set3** `set` — options: "[object Object]", assignments: "[object Object]"
9. **Set2** `set` — options: "[object Object]", assignments: "[object Object]"
10. **AI Agent** `agent` — options: "[object Object]"
11. **Custom - LLM Chain Node1** `code` — code: "[object Object]", inputs: "[object Object]", outputs: "[object Object]"
  
  ## 💡 AI-Powered Ideas for Improvement
  ### Explain
This n8n workflow executes different tasks based on two input strings. One branch generates a joke using an AI model, while the other retrieves information about Einstein's birth year using an AI agent. The workflow demonstrates the integration of custom nodes, AI models, and tools like Wikipedia to process and return information.

### Demonstrate
A business owner could use this workflow to create a chatbot that provides entertainment in the form of jokes and factual information, enhancing customer engagement on their website.

### Imitate
1. Import the workflow into n8n.
2. Connect your OpenAI and Wikipedia accounts.
3. Set up the manual trigger to start the workflow.
4. Customize the input strings for different queries.
5. Test the workflow to ensure it returns the desired results.

### Practice
Create a new workflow with different queries, such as fun facts about various topics. Use the AI models to generate creative content and verify factual information using Wikipedia.

### WIIFM
Mastering this workflow allows you to create engaging, automated content for clients, expanding your service offerings. This can lead to increased customer satisfaction and open up new revenue streams in your automation business.
  
  ## 🔧 Setup Instructions
  1. **Connect Credentials:** openAiApi.
  
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
  