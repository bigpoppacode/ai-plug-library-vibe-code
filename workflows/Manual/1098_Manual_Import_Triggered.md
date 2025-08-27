# Manual Import Triggered
  ## 🚀 What It Does
  Automates a flow using manualTrigger, function.
  
  ## 💼 Business Use Case
  Use to eliminate manual copy-paste and standardize a recurring business process.
  
  ## ⚙️ How It Works
  1. **Trigger:** This workflow starts with **Get Local Datetime**.
  2. **Get Local Datetime** `function` — functionCode: "const moment = require('moment');

let date = moment().tz($env['GENERIC_TIMEZONE']);

let year = date.year();
let month = date.month(); // zero-indexed!
let day = date.date();
let …[truncated]"
  
  ## 💡 AI-Powered Ideas for Improvement
  ### Explain
This n8n workflow retrieves the current local date and time based on a specified timezone. It uses a function node to leverage the Moment.js library, returning details like year, month, day, hour, minute, second, and a formatted timestamp. This can help in workflows where local time is needed for logging or time-sensitive operations.

### Demonstrate
A business could use this workflow to timestamp actions in a CRM system, ensuring that all entries reflect the correct local time, which is crucial for multinational companies coordinating across time zones.

### Imitate
1. Import the workflow into your n8n instance.
2. Set the environment variable `GENERIC_TIMEZONE` to your local timezone.
3. Trigger the workflow manually to test it.
4. Use the output in subsequent nodes to timestamp other actions.

### Practice
Create a simple workflow where the datetime output is logged to a file or sent via email. Adjust the timezone and observe how the output changes, reinforcing your understanding of timezone handling in automations.

### WIIFM
Mastering this workflow allows you to manage time-sensitive operations accurately across different time zones, enhancing the reliability of your automations. This skill is valuable for offering services to global clients, potentially increasing your revenue and client satisfaction.
  
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
  