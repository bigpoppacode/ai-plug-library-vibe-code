# Manual Openai Automation Triggered
  ## 🚀 What It Does
  Moves data between apps and a **database/spreadsheet**, with logic and optional AI steps.
  
  ## 💼 Business Use Case
  Ideal for **lead intake**, **enrichment**, and **CRM updates** with alerts to the right channel.
  
  ## ⚙️ How It Works
  1. **Trigger:** This workflow starts with **When clicking "Execute Workflow"**.
  2. **When clicking "Execute Workflow"** `manualTrigger` — configured for its default action.
3. **Sticky Note** `stickyNote` — width: "600", height: "126", content: "## This is a helper workflow to create 3 CSV files
### Feel free to adapt as needed
### Some mock data from GPT is pinned for convenience"
4. **Sticky Note1** `stickyNote` — width: "394", height: "254", content: "### These 2 nodes fix an issue with BOM bytes in the beginning of the file.
Without them reading the CSV file back becomes tricky"
5. **OpenAI** `openAi` — resource: **chat**, prompt: "[object Object]", model: `gpt-4`
  
  ## 💡 AI-Powered Ideas for Improvement
  ### Explain
This n8n workflow automates the creation of CSV files using AI-generated data. It starts with a manual trigger, then uses OpenAI's GPT-4 to generate fictional user data. The data is processed in batches, converted to a CSV format, and saved to disk. It includes steps to handle encoding issues, ensuring CSV files are easy to read and use.

### Demonstrate
A business owner might use this workflow to quickly generate mock data for testing a new CRM system, ensuring the system can handle CSV imports without using real customer data.

### Imitate
1. Import the workflow into n8n.
2. Connect your OpenAI account.
3. Run the workflow and check the saved CSV files.
4. Modify the OpenAI prompt to generate different types of data if needed.
5. Customize file names or formats as required.

### Practice
Create a similar workflow that generates mock order data, including product names and prices. Test the workflow to ensure it outputs valid CSV files, then try importing them into a spreadsheet application to verify correctness.

### WIIFM
Mastering this workflow enables you to efficiently create mock datasets for testing and development, reducing the need for real data. This skill can enhance your service offerings, leading to potential income through consulting or automation services.
  
  ## 🔧 Setup Instructions
  1. **Connect Credentials:** openAiApi.
2. **Data Mapping:** Verify base/sheet IDs and column names match exactly to prevent silent failures.
  
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
  