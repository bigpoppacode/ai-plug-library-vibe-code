# Manual HTTP Export Webhook
  ## 🚀 What It Does
  Automates a flow using set×5, convertToFile×4, if×4.
  
  ## 💼 Business Use Case
  Use as a **glue/API broker**: receive data, enrich/validate via APIs, and pass to downstream systems.
  
  ## ⚙️ How It Works
  1. **Trigger:** This workflow starts with **When clicking ‘Test workflow’**.
  2. **When clicking ‘Test workflow’** `manualTrigger` — configured for its default action.
3. **Get all Users** `zammad` — operation: **getAll**
4. **Basic Variables** `set` — options: "[object Object]", assignments: "[object Object]"
5. **Get all Organizations** `zammad` — resource: **organization**, operation: **getAll**
6. **Zammad Univeral User Object** `set` — values: "[object Object]", options: "[object Object]", keepOnlySet: "true"
7. **Get all Roles** `httpRequest` — url: `={{ $json.zammad_base_url }}/api/v1/roles`
8. **Get all Groups** `httpRequest` — url: `={{ $json.zammad_base_url }}/api/v1/groups`
9. **Zammad Univeral Organization Object** `set` — values: "[object Object]", options: "[object Object]", keepOnlySet: "true"
10. **If** `if` — options: "[object Object]", conditions: "[object Object]"
11. **Zammad Univeral Role Object** `set` — values: "[object Object]", options: "[object Object]", keepOnlySet: "true"
12. **Zammad Univeral Group Object** `set` — values: "[object Object]", options: "[object Object]", keepOnlySet: "true"
13. **Filter Organizations if needed** `if` — options: "[object Object]", conditions: "[object Object]"
14. **Convert to Excel Users** `convertToFile` — operation: **xlsx**
15. **Filter Roles if needed** `if` — options: "[object Object]", conditions: "[object Object]"
16. **Filter Groups if needed** `if` — options: "[object Object]", conditions: "[object Object]"
17. **Convert to Excel Organizations** `convertToFile` — operation: **xlsx**
18. **Convert to Excel Roles** `convertToFile` — operation: **xlsx**
19. **Convert to Excel Groups** `convertToFile` — operation: **xlsx**
  
  ## 💡 AI-Powered Ideas for Improvement
  ### Explain
This n8n workflow automates the export of data from Zammad, a customer support software, into Excel files. It retrieves users, organizations, roles, and groups from Zammad, processes the data to create structured records, and converts these records into Excel files. This ensures that all support-related data is organized and easily accessible in a spreadsheet format.

### Demonstrate
A business owner could use this workflow to regularly export and review user data, organizational details, roles, and group assignments from Zammad. This is useful for audits, reporting, and ensuring that the support team has up-to-date information.

### Imitate
1. Import the workflow into your n8n instance.
2. Connect your Zammad account using API credentials.
3. Set up the manual trigger for testing.
4. Customize the nodes to match the specific data you want to export.
5. Run the workflow to ensure data is exported correctly to Excel.

### Practice
Create a test environment with sample data in Zammad. Run the workflow to export this data to Excel. Modify user or organization details in Zammad and rerun the workflow to see how changes are reflected in the Excel files.

### WIIFM
Mastering this workflow allows you to streamline data management and reporting processes for customer support operations. By offering this as a service, you can help businesses maintain organized records, improve data accessibility, and enhance decision-making, potentially increasing your revenue as an automation consultant.
  
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
  