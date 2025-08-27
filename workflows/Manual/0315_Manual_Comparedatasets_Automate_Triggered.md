# Manual Comparedatasets Automate Triggered
  ## 🚀 What It Does
  Automates a flow using code×2, stickyNote×2, manualTrigger.
  
  ## 💼 Business Use Case
  Use to eliminate manual copy-paste and standardize a recurring business process.
  
  ## ⚙️ How It Works
  1. **Trigger:** This workflow starts with **When clicking "Execute Workflow"**.
  2. **When clicking "Execute Workflow"** `manualTrigger` — configured for its default action.
3. **Sticky Note** `stickyNote` — width: "321", height: "250", content: "## Comparing data with the Compare Datasets node

The [Compare Datasets](https://docs.n8n.io/integrations/builtin/core-nodes/n8n-nodes-base.comparedatasets/) node compares data str…[truncated]"
4. **Sticky Note1** `stickyNote` — width: "302", height: "385", content: "## Explore outputs 

In the OUTPUT panel of this node, click on the different tabs to see which data goes to which output stream."
5. **Dataset 1** `code` — jsCode: " return [
{
"fruit": "apple",
"color": "green",
},
{
"fruit": "orange",
"color": "orange",
},
{
"fruit": "grape",
"color": "green",  
},
{
"fruit": "strawberry",
"color": "red",
},…[truncated]"
6. **Dataset 2** `code` — jsCode: " return [
{
"fruit": "apple",
"color": "green",
},
{
"fruit": "grape",
"color": "purple",
},
{
"fruit": "orange",
"color": "orange",
},
{
 "fruit": "kiwi",
 "color": "mostly green"…[truncated]"
7. **Compare Datasets** `compareDatasets` — options: "[object Object]", mergeByFields: "[object Object]"
  
  ## 💡 AI-Powered Ideas for Improvement
  ### Explain
This n8n workflow is designed to compare data from two datasets. It uses the "Compare Datasets" node to identify differences and similarities between two lists of fruits with their respective colors. The workflow helps in merging or distinguishing data items by their attributes, such as the fruit name.

### Demonstrate
Imagine a retail company with two inventory lists. This workflow can help identify which items are common to both lists, which are unique, and which have discrepancies in details like color or description.

### Imitate
1. Import the workflow into your n8n instance.
2. Set up the manual trigger to start the workflow.
3. Customize Dataset 1 and Dataset 2 with your data.
4. Configure the "Compare Datasets" node to match fields based on your criteria.
5. Execute the workflow and review the output to understand the data comparisons.

### Practice
Create two lists of products with details like name and category. Run the workflow to compare these lists and identify which products are common or unique. Modify the product details and observe how the workflow's output changes accordingly.

### WIIFM
Mastering this workflow allows you to offer data comparison services, helping businesses maintain accurate data across systems. This can lead to improved decision-making, reduced errors, and increased trust from clients, enhancing your value as an automation expert.
  
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
  