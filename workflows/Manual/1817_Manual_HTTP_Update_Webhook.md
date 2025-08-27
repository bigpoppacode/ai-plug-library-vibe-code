# Manual HTTP Update Webhook
  ## 🚀 What It Does
  Automates a flow using set×3, if×2, httpRequest×2.
  
  ## 💼 Business Use Case
  Use as a **glue/API broker**: receive data, enrich/validate via APIs, and pass to downstream systems.
  
  ## ⚙️ How It Works
  1. **Trigger:** This workflow starts with **When clicking ‘Test workflow’**.
  2. **When clicking ‘Test workflow’** `manualTrigger` — configured for its default action.
3. **Basic Variables** `set` — options: "[object Object]", assignments: "[object Object]"
4. **Get all Roles** `httpRequest` — url: `={{ $json.zammad_base_url }}/api/v1/roles`
5. **Get all Users** `zammad` — operation: **getAll**
6. **Zammad Univeral Role Object** `set` — values: "[object Object]", options: "[object Object]", keepOnlySet: "true"
7. **Zammad Univeral User Object** `set` — values: "[object Object]", options: "[object Object]", keepOnlySet: "true"
8. **Filter Roles if needed** `if` — options: "[object Object]", conditions: "[object Object]"
9. **If** `if` — options: "[object Object]", conditions: "[object Object]"
10. **Convert to Excel Roles** `convertToFile` — operation: **xlsx**
11. **Update Users to default Role(s)** `httpRequest` — method: **PUT**, url: `={{ $('Basic Variables').item.json.zammad_base_url }}/api/v1/users/{{ $json.user_id }}`
  
  ## 💡 AI-Powered Ideas for Improvement
  ### Explain
This n8n workflow automates the process of managing user roles in the Zammad system. It retrieves all roles and users from Zammad, filters them if needed, updates users to default roles, and can export roles to an Excel file. This helps maintain consistent role assignments across the platform.

### Demonstrate
A business owner using Zammad for customer support could use this workflow to ensure all users have the correct roles. This automation saves time and reduces errors compared to manual role management, ensuring efficient team operations.

### Imitate
1. Import the workflow into n8n.
2. Set up your Zammad API credentials in the workflow.
3. Define your default roles and any users to exclude.
4. Run the workflow to update user roles automatically.
5. Test the workflow with a few users to ensure it updates roles correctly.

### Practice
Create a test Zammad instance with sample users and roles. Run the workflow and observe how it updates roles based on your default settings. Modify roles or exclude certain users to see how the workflow adapts.

### WIIFM
Mastering this workflow equips you to offer automation services to businesses using Zammad. Automating role management can improve team efficiency and accuracy, enhancing your service offerings and helping you attract and retain clients in your automation business.
  
  ## 🔧 Setup Instructions
  1. **Connect Credentials:** zammadTokenAuthApi.
2. **API Contracts:** Validate required headers and 2xx/4xx handling; add retries for 429/5xx.
  
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
  