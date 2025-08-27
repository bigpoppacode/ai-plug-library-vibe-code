# Manual Stickynote Automate Triggered
  ## 🚀 What It Does
  Automates a flow using stickyNote×7, code×6, merge×3.
  
  ## 💼 Business Use Case
  Use to eliminate manual copy-paste and standardize a recurring business process.
  
  ## ⚙️ How It Works
  1. **Trigger:** This workflow starts with **On clicking 'execute'**.
  2. **On clicking 'execute'** `manualTrigger` — configured for its default action.
3. **Note** `stickyNote` — width: "1020", height: "360", content: "# 3. Add items from B below items from A
"
4. **Note1** `stickyNote` — width: "1020", height: "380", content: "# 1. Keep items from A if there's a match in B
"
5. **Note2** `stickyNote` — width: "1020", height: "380", content: "# 2. Enrich items from A with matching data from B"
6. **Note4** `stickyNote` — width: "740", height: "460", content: "# Aggregating data with the Merge node

## The merge node is one of the most useful nodes in n8n. In this workflow we show how to merge data from two different sources (similar to …[truncated]"
7. **Note6** `stickyNote` — width: "480", content: "## Adds the quantity needed to each ingredient in the recipe

## Similar to SQL Left join

"
8. **Note8** `stickyNote` — width: "480", content: "## This will keep only the ingredients needed that are also in stock

## Similar to SQL Inner join"
9. **Note9** `stickyNote` — width: "480", height: "200", content: "## This will create a super band by merging Queen and Led Zeppelin

## Similar to SQL Union All 
(more flexible as not requires all fields to be the same)"
10. **A. Ingredients Needed** `code` — jsCode: " return [
  {
    "Name": "Flour",
  },
  {
    "Name": "Eggs",
  },
  {
    "Name": "Milk",
  },
  {
    "Name": "Lemon",
  },
  {
    "Name": "Sugar",
  },
];
"
11. **B. Ingredients in stock** `code` — jsCode: " return [
  {
    "Name": "Eggs",
  },
  {
    "Name": "Lemon",
  },
  {
    "Name": "Sugar",
  },
];
"
12. **A. Ingredients** `code` — jsCode: " return [
  {
    "Name": "Flour",
  },
  {
    "Name": "Eggs",
  },
  {
    "Name": "Milk",
  },
  {
    "Name": "Lemon",
  },
  {
    "Name": "Sugar",
  },
];
"
13. **B. Recipe quantities** `code` — jsCode: " return [
  {
    "Name": "Flour",
    "Quantity": "100g",
  },
  {
    "Name": "Eggs",
    "Quantity": 2,
  },
  {
    "Name": "Salt",
    "Quantity": "50g"
  },
  {
    "Name": "…[truncated]"
14. **A. Queen** `code` — jsCode: " return [
{
"FirstName": "John",
"LastName": "Deacon",
"Instrument": "Drums",
},
{
"FirstName": "Freddy",
"LastName": "Mercury",
"Instrument": "Vocals and Piano",
"Superpower": "Cr…[truncated]"
15. **B. Led Zeppelin** `code` — jsCode: " return [
{
"FirstName": "Jimmy",
"LastName": "Page",
"Instrument": "Guitar"
},
{
"FirstName": "Robert",
"LastName": "Plant",
"Instrument": "Vocals",
},
{
"FirstName": "John",
"Las…[truncated]"
16. **Ingredients in stock from recipe** `merge` — mode: "combine", options: "[object Object]", mergeByFields: "[object Object]"
17. **Merge recipe** `merge` — mode: "combine", options: "[object Object]", joinMode: "enrichInput1"
18. **Super Band** `merge` — configured for its default action.
  
  ## 💡 AI-Powered Ideas for Improvement
  ### Explain
This n8n workflow demonstrates how to combine data from different sources using the Merge node. It includes three examples: merging ingredients needed with those in stock (similar to SQL Inner Join), enriching ingredients with recipe quantities (similar to SQL Left Join), and creating a "super band" by merging members of Queen and Led Zeppelin (similar to SQL Union All). This workflow helps automate data aggregation and transformation tasks.

### Demonstrate
A business owner could use this workflow to manage inventory and recipes efficiently, ensuring they only purchase what's needed and in stock, or to merge team data for collaboration projects.

### Imitate
1. Import the workflow into n8n.
2. Add your own data sources or use the existing examples.
3. Connect nodes based on the type of merge you need (e.g., Inner Join, Left Join, or Union All).
4. Execute and verify the merged data output.

### Practice
Create a small dataset of ingredients and stock in Airtable. Use this workflow to merge them and identify which ingredients need to be ordered. Experiment with changing stock levels to see how the workflow dynamically adjusts.

### WIIFM
Mastering this workflow enables you to offer data integration and automation solutions to businesses, enhancing their efficiency and decision-making. This skill can attract clients and boost your income in AI automation services.
  
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
  