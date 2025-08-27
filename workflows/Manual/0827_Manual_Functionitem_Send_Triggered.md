# Manual FunctionItem Send Triggered
  ## 🚀 What It Does
  Automates a flow using manualTrigger, functionItem, set.
  
  ## 💼 Business Use Case
  Use to eliminate manual copy-paste and standardize a recurring business process.
  
  ## ⚙️ How It Works
  1. **Trigger:** This workflow starts with **Set values**.
  2. **Set values** `set` — values: "[object Object]", options: "[object Object]"
  
  ## 💡 AI-Powered Ideas for Improvement
  ### Explain
This n8n workflow is designed to extract specific information from an email body by parsing it based on predefined labels. It begins with a manual trigger, sets specific values for the email body and labels, and then uses a function to parse this data. The function identifies and extracts the values associated with these labels (e.g., Name, Email, Subject, Message) from the email body text. This is useful for quickly obtaining structured data from unstructured email content, which can then be used for further processing or storage in a database.

### Demonstrate
A business owner might use this workflow to automatically extract customer details from inquiry emails, allowing for efficient data entry into a CRM system, improving response times and customer service management.

### Imitate
1. Import the workflow into n8n.
2. Set up a manual trigger to start the workflow.
3. Use the "Set values" node to input your email body and labels.
4. Customize the "Email Parser Snippet" function to match your email format.
5. Test the workflow with different email samples to ensure accurate data extraction.

### Practice
Create a sample email with different customer details. Run the workflow to extract these details and check the output. Adjust the labels and function if necessary to improve accuracy and handle various email formats.

### WIIFM
Mastering this workflow enables you to offer automated email data extraction services, saving clients time and reducing errors in data entry. This can enhance your service offerings, attract more clients, and boost your income in the automation business.
  
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
  