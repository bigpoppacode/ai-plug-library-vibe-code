# Manual N8n Create Triggered
  ## 🚀 What It Does
  Automates a flow using set×3, manualTrigger, splitOut.
  
  ## 💼 Business Use Case
  Use to eliminate manual copy-paste and standardize a recurring business process.
  
  ## ⚙️ How It Works
  1. **Trigger:** This workflow starts with **When clicking ‘Test workflow’**.
  2. **When clicking ‘Test workflow’** `manualTrigger` — configured for its default action.
3. **Sticky Note** `stickyNote` — color: "6", width: "360", height: "520"
4. **Google JSON** `set` — mode: "raw", options: "[object Object]", jsonOutput: "[redacted]"
5. **Google Email** `set` — options: "[object Object]", assignments: "[object Object]"
6. **Services** `set` — options: "[object Object]", assignments: "[object Object]"
7. **Split Out** `splitOut` — options: "[object Object]", fieldToSplitOut: "services"
8. **n8n Create Credentials** `n8n` — resource: **credential**
  
  ## 💡 AI-Powered Ideas for Improvement
  ### Explain
This n8n workflow automates the creation of Google OAuth 2.0 credentials for multiple Google services (like Google Docs, Sheets, Drive, etc.). It initializes with a manual trigger and uses a JSON configuration to set up credentials for each service, associating them with a specified email address. The workflow splits the services list and creates credentials for each one, reducing the manual effort required to set them up individually.

### Demonstrate
A developer managing multiple Google integrations for clients could use this workflow to streamline credential setup, ensuring each service is correctly configured and reducing the chance of errors during manual entry.

### Imitate
1. Import the workflow into n8n.
2. Obtain your Google JSON file for OAuth 2.0.
3. Set your email address in the "Google Email" node.
4. Connect your n8n account for credential creation.
5. Run the workflow to generate credentials for each listed Google service automatically.

### Practice
Create a test Google Cloud project and generate a JSON file for OAuth 2.0. Run the workflow with this test data to understand how credentials are created. Modify the services list to see how the workflow adapts to different configurations.

### WIIFM
Mastering this workflow can save you time and reduce errors in setting up Google service integrations, an essential skill for consultants and developers. This efficiency can lead to more consistent service delivery, higher client satisfaction, and the ability to handle more projects simultaneously, increasing potential revenue.
  
  ## 🔧 Setup Instructions
  1. **Connect Credentials:** n8nApi.
  
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
  