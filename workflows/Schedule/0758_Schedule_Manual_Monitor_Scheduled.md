# Schedule Manual Monitor Scheduled
## 🚀 What It Does
Automates a flow using if×2, stickyNote×2, manualTrigger.

## 💼 Business Use Case
Ideal for **lead intake**, **enrichment**, and **CRM updates** with alerts to the right channel.

## ⚙️ How It Works
1. **Trigger:** This workflow starts with **When clicking ‘Test workflow’**.
2. **When clicking ‘Test workflow’** `manualTrigger` — configured for its default action.
3. **Sticky Note5** `stickyNote` — width: "340", height: "820", content: "![Callforge](https://uploads.n8n.io/templates/callforgeshadow.png)
## CallForge
CallForge allows you to extract important information for different departments from your Sales Gong…[truncated]"
4. **Sticky Note4** `stickyNote` — color: "7", width: "1940", height: "820"
5. **Run Hourly** `scheduleTrigger` — rule: "[object Object]"
6. **Get all custom Salesforce Gong Objects** `salesforce` — resource: **customObject**, operation: **getAll**
7. **Sort by date** `sort` — options: "[object Object]", sortFieldsUi: "[object Object]"
8. **Check if Opportunity Stage is Meeting Booked or Discovery** `if` — options: "[object Object]", conditions: "[object Object]"
9. **Check if Primary Opportunity Contains Value** `if` — options: "[object Object]", conditions: "[object Object]"
10. **Get Gong Call** `gong` — operation: **get**
11. **Format call into correct JSON Object** `set` — options: "[object Object]", assignments: "[object Object]"
12. **Pass to Gong Call Preprocessor** `executeWorkflow` — options: "[object Object]", workflowId: "[object Object]"

## 💡 AI-Powered Ideas for Improvement
### Explain
This n8n workflow automates the process of extracting and processing call data from Salesforce and Gong. It triggers every hour to fetch new Gong call objects from Salesforce, sorts them by date, and checks if the call's opportunity stage is either 'Meeting Booked' or 'Discovery'. If the primary opportunity contains a value, it retrieves the Gong call details, formats them into a JSON object, and passes them to another workflow for preprocessing.

### Demonstrate
A sales manager could use this workflow to ensure that only relevant calls are processed for further analysis, helping to prioritize follow-up actions based on call importance and stage.

### Imitate
1. Import the workflow into n8n.
2. Connect your Salesforce and Gong accounts.
3. Set up the schedule trigger to run hourly.
4. Customize the conditions in the 'If' nodes to match your criteria.
5. Test the workflow to ensure correct data processing and transfer.

### Practice
Create a test Salesforce environment with Gong call objects. Run the workflow and observe how it processes calls based on your set criteria. Adjust the conditions and test how the workflow behaves with different data inputs.

### WIIFM
Mastering this workflow enables you to streamline call data management, enhancing sales efficiency by focusing on high-priority opportunities. This expertise can attract clients looking for sales process optimization and can be a valuable service in your automation business.

## 🔧 Setup Instructions
1. **Connect Credentials:** gongApi, salesforceOAuth2Api.

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
