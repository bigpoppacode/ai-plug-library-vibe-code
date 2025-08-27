# Manual Splitinbatches Automate Triggered
  ## 🚀 What It Does
  Automates a flow using manualTrigger, function, splitInBatches.
  
  ## 💼 Business Use Case
  Use to eliminate manual copy-paste and standardize a recurring business process.
  
  ## ⚙️ How It Works
  1. **Trigger:** This workflow starts with **Set**.
  2. **Set** `set` — values: "[object Object]", options: "[object Object]", keepOnlySet: "true"
  
  ## 💡 AI-Powered Ideas for Improvement
  ### Explain
This n8n workflow generates a series of numbers from 0 to 9 and processes them one at a time. It starts with a manual trigger, creates a list of numbers using a function node, and splits the list into batches of one. For each number, it checks if there are any items left. If there are no more numbers to process, it sets a message indicating "No Items Left."

### Demonstrate
A developer could use this workflow to process a list of tasks one by one, such as sending emails to a list of recipients, ensuring each task is handled individually and efficiently.

### Imitate
1. Import the workflow into n8n.
2. Connect the nodes as described: Manual Trigger -> Function -> SplitInBatches -> IF -> Set.
3. Adjust the batch size or add custom logic in the function node as needed.
4. Execute the workflow to see it process each item one at a time.

### Practice
Create a similar workflow that processes a list of email addresses, sending a mock email to each one. Use the SplitInBatches node to handle one email at a time and log when there are no emails left to send.

### WIIFM
Mastering this workflow equips you with the skill to handle batch processing and conditional checks, crucial for automating repetitive tasks in businesses, helping you offer efficient solutions and increase your service offerings, thus generating more income.
  
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
  