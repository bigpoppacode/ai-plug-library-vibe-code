# Manual N8ntrainingcustomerdatastore Automation Triggered
  ## 🚀 What It Does
  Automates a flow using stickyNote×4, manualTrigger, n8nTrainingCustomerDatastore.
  
  ## 💼 Business Use Case
  Great for **content, summarization, triage, or decisioning** where AI adds speed and consistency.
  
  ## ⚙️ How It Works
  1. **Trigger:** This workflow starts with **When clicking "Execute Workflow"**.
  2. **When clicking "Execute Workflow"** `manualTrigger` — configured for its default action.
3. **Sticky Note** `stickyNote` — height: "304", content: "## Generate example data"
4. **Sticky Note1** `stickyNote` — height: "303", content: "## Reduce the data

Remove all data except the names"
5. **Sticky Note2** `stickyNote` — height: "304", content: "## Restore

Restore the email address data"
6. **Sticky Note3** `stickyNote` — width: "352", height: "264", content: "## About this workflow

This workflow provides a simple example of how to use `itemMatching(itemIndex: Number)` in the Code node to retrieve linked items from earlier in the workfl…[truncated]"
7. **Customer Datastore (n8n training)** `n8nTrainingCustomerDatastore` — operation: **getAllPeople**
8. **Edit Fields** `set` — fields: "[object Object]", include: "none", options: "[object Object]"
9. **Code** `code` — language: "python", pythonCode: "for i,item in enumerate(_input.all()):
  _input.all()[i].json.restoreEmail = _('Customer Datastore (n8n training)').itemMatching(i).json.email

return _input.all();"
  
  ## 💡 AI-Powered Ideas for Improvement
  ### Explain
This n8n workflow demonstrates how to manipulate and restore data using Python code. It retrieves a list of customers from a datastore, reduces the data to only include names, and then restores the email addresses using the `itemMatching` function. This showcases how to link data from different parts of a workflow, ensuring data integrity and consistency.

### Demonstrate
A business consultant might use this workflow to ensure customer data is accurate across different systems. By validating and restoring missing information, they enhance data quality, which is crucial for effective marketing and customer engagement.

### Imitate
1. Import the workflow into n8n.
2. Connect your customer data source to the `n8nTrainingCustomerDatastore` node.
3. Ensure the `Edit Fields` node is configured to filter data as needed.
4. Run the workflow to see how it reduces and restores data.
5. Modify the Python code to adapt to your specific data restoration needs.

### Practice
Create a test dataset with customer names and emails. Run the workflow to hide the emails and then restore them. Experiment with changing the data structure and observe how the workflow adapts, ensuring you understand the data flow.

### WIIFM
Mastering this workflow allows you to offer data validation and restoration services to clients, improving their data quality and decision-making processes. This skill can enhance your consulting services, leading to increased client trust and potential revenue growth in your automation business.
  
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
  