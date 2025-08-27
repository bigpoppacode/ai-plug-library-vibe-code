# Manual Code Automate Triggered
  ## 🚀 What It Does
  Automates a flow using code×2, manualTrigger, merge.
  
  ## 💼 Business Use Case
  Use to eliminate manual copy-paste and standardize a recurring business process.
  
  ## ⚙️ How It Works
  1. **Trigger:** This workflow starts with **When clicking ‘Test workflow’**.
  2. **When clicking ‘Test workflow’** `manualTrigger` — configured for its default action.
3. **Sample data (name + language)** `code` — jsCode: "return [
  {
    json: {
      name: 'Stefan',
      language: 'de',
    }
  },
  {
    json: {
      name: 'Jim',
      language: 'en',
    }
  },
  {
    json: {
      name: 'Han…[truncated]"
4. **Sample data (greeting + language)** `code` — jsCode: "return [
	  {
    json: {
      greeting: 'Hello',
      language: 'en',
    }
  },
  {
    json: {
      greeting: 'Hallo',
      language: 'de',
    }
  }
];"
5. **Merge (name + language + greeting)** `merge` — mode: "combine", options: "[object Object]", fieldsToMatchString: "language"
  
  ## 💡 AI-Powered Ideas for Improvement
  ### Explain
This n8n workflow combines two sets of data based on a common field, "language." It starts with a manual trigger, then generates sample data: one set with names and languages, and another with greetings and languages. The workflow merges these datasets so each person is matched with their greeting based on language, allowing personalized communication.

### Demonstrate
A business could use this workflow to personalize marketing messages. For example, a global company can ensure that each customer receives emails in their native language, enhancing engagement and customer experience.

### Imitate
1. Import the workflow into n8n.
2. Connect a manual trigger to start the workflow.
3. Create two Code nodes to generate sample data for names and greetings.
4. Use a Merge node to combine the datasets based on the language field.
5. Test to ensure the merging process works correctly.

### Practice
Create a new workflow with a different dataset, such as products and categories, and merge them based on a common attribute like product ID. Observe how the merge node combines the datasets.

### WIIFM
Mastering this workflow enables you to offer customized communication solutions, improving client satisfaction. By personalizing interactions, you can enhance marketing effectiveness, potentially leading to increased sales and client retention in your automation business.
  
  ## 🔧 Setup Instructions
  1. **Test & Activate:** Run a manual execution with sample data, then set the workflow Active.
  
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
  