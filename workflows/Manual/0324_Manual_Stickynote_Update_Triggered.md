# Manual Stickynote Update Triggered
  ## 🚀 What It Does
  Automates a flow using stickyNote×2, manualTrigger, set.
  
  ## 💼 Business Use Case
  Great for **content, summarization, triage, or decisioning** where AI adds speed and consistency.
  
  ## ⚙️ How It Works
  1. **Trigger:** This workflow starts with **When clicking "Execute Workflow"**.
  2. **When clicking "Execute Workflow"** `manualTrigger` — configured for its default action.
3. **Sticky Note** `stickyNote` — width: "363", height: "211.90203341144422", content: "### Q&A on data returned from a workflow"
4. **Sticky Note1** `stickyNote` — width: "262.67019427016413", height: "255.8330939602389", content: "














Replace "Workflow ID" with the ID the Subworkflow got saved as"
5. **OpenAI Chat Model1** `lmChatOpenAi` — model: `[object Object]`
6. **Workflow Retriever** `retrieverWorkflow` — workflowId: "[object Object]"
7. **Edit Fields** `set` — options: "[object Object]", assignments: "[object Object]"
8. **Question and Answer Chain** `chainRetrievalQa` — options: "[object Object]"
  
  ## 💡 AI-Powered Ideas for Improvement
  **Explain:**  
This n8n workflow is designed to retrieve and analyze data using OpenAI's language model. It starts with a manual trigger, followed by an edit fields node that sets a specific query about a character named Jay Gatsby. The workflow retrieves the necessary workflow data and uses OpenAI's model to generate a question and answer chain, providing insights based on the input query.

**Demonstrate:**  
A consultant could use this workflow to automate the retrieval of insights from a database for a client presentation, saving time and ensuring that the information presented is accurate and comprehensive.

**Imitate:**  
1. Import the workflow into your n8n instance.
2. Set up the OpenAI API credentials.
3. Customize the query in the "Edit Fields" node.
4. Trigger the workflow to retrieve and analyze the data.
5. Review and refine the output for your specific needs.

**Practice:**  
Create a test query about a fictional character or topic you are interested in. Run the workflow and analyze the output to see how the data retrieval and analysis process works, adjusting parameters as needed to refine the results.

**WIIFM:**  
Mastering this workflow can enhance your ability to offer data-driven insights to clients, improving decision-making and increasing the value of your services. This can lead to new business opportunities and increased revenue in automation consulting.
  
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
  