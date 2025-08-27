# Form Stickynote Automation Triggered
  ## 🚀 What It Does
  Automates a flow using airtop×5, executeWorkflowTrigger, stickyNote.
  
  ## 💼 Business Use Case
  Great for **content, summarization, triage, or decisioning** where AI adds speed and consistency.
  
  ## ⚙️ How It Works
  1. **Trigger:** This workflow starts with **When Executed by Another Workflow**.
  2. **When Executed by Another Workflow** `executeWorkflowTrigger` — workflowInputs: "[object Object]"
3. **Sticky Note** `stickyNote` — color: "5", width: "220", height: "320"
4. **On form submission** `formTrigger` — options: "[object Object]", formTitle: "Post on X", formFields: "[object Object]"
5. **Parameters** `set` — options: "[object Object]", assignments: "[object Object]"
6. **Create session** `airtop` — profileName: "={{ $json.airtop_profile }}", timeoutMinutes: "5", saveProfileOnTermination: "true"
7. **Create window** `airtop` — resource: **window**, url: `https://x.com/`
8. **Type text** `airtop` — resource: **interaction**, operation: **type**
9. **Click on Post** `airtop` — resource: **interaction**
10. **End session** `airtop` — operation: **terminate**
  
  ## 💡 AI-Powered Ideas for Improvement
  ### Explain
This n8n workflow automates posting content to the social media platform X. It starts by capturing user input from a form, which includes an Airtop profile name and the text to post. The workflow then creates a session using the Airtop API, opens a browser window to X, types the text into the post box, clicks the post button, and ends the session. This process allows seamless, automated posting to X without manual intervention.

### Demonstrate
A business owner could use this workflow to automate posting regular updates or promotional content to their X account, ensuring consistent engagement with their audience without manual posting.

### Imitate
1. Import the workflow into n8n.
2. Set up your Airtop and X accounts.
3. Customize the form fields to match your posting needs.
4. Test the workflow with a sample post to ensure it functions correctly.
5. Schedule the workflow to run at desired intervals or trigger it manually.

### Practice
Create a test form in n8n with fields for a profile name and post text. Run the workflow with test data, and verify that it posts to a test account on X. Adjust any parameters as needed to fit your use case.

### WIIFM
Mastering this workflow enables you to automate content posting, saving time and ensuring consistent online presence. This skill can be monetized by offering automated social media management services to clients, enhancing your portfolio and income potential.
  
  ## 🔧 Setup Instructions
  1. **Connect Credentials:** airtopApi.
  
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
  