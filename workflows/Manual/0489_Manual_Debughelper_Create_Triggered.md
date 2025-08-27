# Manual Debughelper Create Triggered
  ## 🚀 What It Does
  Automates a flow using stickyNote×2, manualTrigger, set.
  
  ## 💼 Business Use Case
  Use to eliminate manual copy-paste and standardize a recurring business process.
  
  ## ⚙️ How It Works
  1. **Trigger:** This workflow starts with **When clicking "Test workflow"**.
  2. **When clicking "Test workflow"** `manualTrigger` — configured for its default action.
3. **Sticky Note** `stickyNote` — color: "4", width: "818", height: "446"
4. **Sticky Note1** `stickyNote` — height: "253", content: "
Make sure you replace the Generate random data with your actual data"
5. **Generate random data** `debugHelper` — category: "randomData", randomDataType: "email"
6. **Set these fields to extract domain** `set` — options: "[object Object]", assignments: "[object Object]"
  
  ## 💡 AI-Powered Ideas for Improvement
  ### Explain
This n8n workflow validates email addresses from a data source and extracts their domain names. It starts with a manual trigger to generate random email data, which is then processed to check if the email is valid and extract the domain using n8n's native functionalities.

### Demonstrate
A business might use this workflow to clean up their email list by verifying email addresses and extracting domains, ensuring they have accurate data for marketing campaigns. This reduces bounce rates and improves email deliverability.

### Imitate
1. Import the workflow into n8n.
2. Replace the "Generate random data" node with your actual email data source.
3. Connect the new data source to the "Set these fields to extract domain" node.
4. Run the workflow to test email validation and domain extraction.

### Practice
Create a small dataset of email addresses and test the workflow. Observe how it validates each email and extracts the domain. Modify some emails to see how invalid ones are handled.

### WIIFM
Mastering this workflow allows you to offer email validation services, improving data quality for marketing. This can attract clients looking to enhance their email campaigns, boosting your business's reputation and profitability in automation services.
  
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
  