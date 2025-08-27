# Manual Stickynote Automation Triggered
  ## 🚀 What It Does
  Automates a flow using stickyNote×2, set×2, code×2.
  
  ## 💼 Business Use Case
  Great for **content, summarization, triage, or decisioning** where AI adds speed and consistency.
  
  ## ⚙️ How It Works
  1. **Trigger:** This workflow starts with **When clicking "Execute Workflow"**.
  2. **OpenAI** `lmOpenAi` — options: "[object Object]"
3. **Sticky Note** `stickyNote` — width: "432", height: "237", content: "## Self-coded LLM Chain Node"
4. **When clicking "Execute Workflow"** `manualTrigger` — configured for its default action.
5. **Chat OpenAI** `lmChatOpenAi` — options: "[object Object]"
6. **Sticky Note1** `stickyNote` — width: "320.2172923777021", height: "231", content: "## Self-coded Tool Node"
7. **Custom - Wikipedia** `code` — code: "[object Object]", outputs: "[object Object]"
8. **Set** `set` — values: "[object Object]", options: "[object Object]"
9. **Set1** `set` — values: "[object Object]", options: "[object Object]"
10. **Custom - LLM Chain Node** `code` — code: "[object Object]", inputs: "[object Object]", outputs: "[object Object]"
11. **Agent** `agent` — options: "[object Object]"
  
  ## 💡 AI-Powered Ideas for Improvement
  ### Explain
This n8n workflow integrates OpenAI's language model to process and generate responses based on user inputs. It involves setting up prompts, querying OpenAI, and using custom code nodes to handle specific queries like Wikipedia searches. The workflow is triggered manually and can handle multiple types of queries, such as telling a joke or answering factual questions.

### Demonstrate
A business could use this workflow to automate customer service inquiries, providing quick and accurate responses to common questions, reducing the workload on human agents, and improving response times.

### Imitate
1. Import the workflow into n8n.
2. Connect your OpenAI API credentials.
3. Set up manual triggers to test different queries.
4. Use the Set nodes to define inputs like "Tell me a joke."
5. Test the workflow to ensure it generates the expected responses.

### Practice
Create a new input in the Set node such as "What's the capital of France?" and run the workflow. Verify that the workflow uses the OpenAI and Wikipedia nodes to generate and return the correct answer.

### WIIFM
Mastering this workflow enables you to offer AI-driven solutions, enhancing customer support and engagement. This skill can help you attract clients looking for innovative automation, increasing your service offerings and potential income in AI automation business.
  
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
  