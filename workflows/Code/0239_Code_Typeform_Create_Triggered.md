# Code Typeform Create Triggered
  ## 🚀 What It Does
  Automates a flow using pipedrive×4, set, stickyNote.
  
  ## 💼 Business Use Case
  Ideal for **lead intake**, **enrichment**, and **CRM updates** with alerts to the right channel.
  
  ## ⚙️ How It Works
  1. **Trigger:** This workflow starts with **On form completion**.
  2. **Note** `stickyNote` — width: "760", height: "440", content: "## Format Typeform inputs to Pipedrive
In this example, we ask for the number of employees at a company. 

To map this to Pipedrive, we need the unique item number coming from Pipe…[truncated]"
3. **On form completion** `typeformTrigger` — formId: "[UPDATE ME]"
4. **Set** `set` — values: "[object Object]", options: "[object Object]", keepOnlySet: "true"
5. **Map company size** `code` — mode: "runOnceForEachItem", jsCode: "switch ($input.item.json.employees) {
  case '< 20':
  // small
    $input.item.json.pipedriveemployees='59' 
    break;
  case '20 - 100':
    // medium
    $input.item.json.piped…[truncated]"
6. **Create Organization** `pipedrive` — resource: **organization**
7. **Create Person** `pipedrive` — resource: **person**
8. **Create Lead** `pipedrive` — resource: **lead**
9. **Create Note** `pipedrive` — resource: **note**
  
  ## 💡 AI-Powered Ideas for Improvement
  ### Explain
This n8n workflow automates the process of transferring data from Typeform submissions to Pipedrive CRM. When a form is completed, it collects information such as the company name, contact details, and the number of employees. It then categorizes the company size, creates an organization, assigns a contact person, generates a lead, and logs a note in Pipedrive, streamlining the process of managing new leads and ensuring the data is consistently organized.

### Demonstrate
A business consultant could use this workflow to automate the lead generation process from Typeform to Pipedrive. This helps in efficiently managing potential clients and ensuring that all leads are systematically categorized and followed up.

### Imitate
1. Import the workflow into n8n.
2. Connect your Typeform and Pipedrive accounts.
3. Update the form ID and webhook URL in the Typeform Trigger node.
4. Customize the mapping logic for company size if needed.
5. Test the workflow with a sample form submission to ensure correct data transfer and categorization.

### Practice
Create a test Typeform with fields for company name, contact details, and employee size. Run the workflow to see how it automatically categorizes the company size and creates corresponding entries in Pipedrive. Adjust the mapping logic for different company size categories to see its effect.

### WIIFM
Mastering this workflow can significantly enhance your ability to offer automated CRM integration services. This can lead to improved lead management for clients, potentially increasing their sales efficiency and allowing you to charge premium rates for your automation services.
  
  ## 🔧 Setup Instructions
  1. **Connect Credentials:** pipedriveApi, typeformApi.
  
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
  