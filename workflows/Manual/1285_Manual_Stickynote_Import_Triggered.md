# Manual Stickynote Import Triggered
  ## 🚀 What It Does
  Automates a flow using stickyNote×2, manualTrigger, retrieverWorkflow.
  
  ## 💼 Business Use Case
  Great for **content, summarization, triage, or decisioning** where AI adds speed and consistency.
  
  ## ⚙️ How It Works
  1. **Trigger:** This workflow starts with **When clicking "Execute Workflow"**.
  2. **When clicking "Execute Workflow"** `manualTrigger` — configured for its default action.
3. **Workflow Retriever** `retrieverWorkflow` — workflowId: "QacfBRBnf1xOyckC"
4. **OpenAI Chat Model** `lmChatOpenAi` — options: "[object Object]"
5. **Sticky Note** `stickyNote` — width: "363", height: "211.90203341144422", content: "### Q&A on data returned from a workflow"
6. **Sticky Note1** `stickyNote` — width: "262.67019427016413", height: "255.8330939602389", content: "














Replace "Workflow ID" with the ID the Subworkflow got saved as"
7. **Example Prompt** `set` — fields: "[object Object]", options: "[object Object]"
8. **Retrieval QA Chain2** `chainRetrievalQa` — configured for its default action.
  
  ## 💡 AI-Powered Ideas for Improvement
  ### Explain
This n8n workflow retrieves data from a specific workflow using a Workflow Retriever node. It uses the OpenAI Chat Model to process or analyze the data, and then a Retrieval QA Chain node to handle question-and-answer tasks based on the data retrieved. The workflow is initiated manually and includes sticky notes for annotations or instructions.

### Demonstrate
A consultant might use this workflow to automate the retrieval of client-specific data from a previous workflow, process it using AI for insights, and prepare a Q&A report. This saves time and ensures consistent data handling for client presentations.

### Imitate
1. Import the workflow into your n8n environment.
2. Connect your OpenAI account for AI processing.
3. Replace the "Workflow ID" in the Workflow Retriever node with your target workflow's ID.
4. Customize the Example Prompt node to fit your data query needs.
5. Run the workflow manually to test its operation.

### Practice
Create a simple workflow that retrieves data from another workflow, processes it using an AI model, and outputs a simple report or summary. Test with different prompts to see how the AI responds to various data inputs.

### WIIFM
Mastering this workflow enables you to offer advanced data retrieval and analysis services, leveraging AI for insights. This can enhance your service offerings, attract new clients, and increase revenue by providing high-value automation solutions in your AI automation business.
  
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
  