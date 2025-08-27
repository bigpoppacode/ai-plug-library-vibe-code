# Splitout Comparedatasets Sync Webhook
## 🚀 What It Does
Automates a flow using zammad×4, compareDatasets×2, if×2.

## 💼 Business Use Case
Use as a **glue/API broker**: receive data, enrich/validate via APIs, and pass to downstream systems.

## ⚙️ How It Works
1. **Trigger:** This workflow starts with **When clicking ‘Test workflow’**.
2. **When clicking ‘Test workflow’** `manualTrigger` — configured for its default action.
3. **Note1** `stickyNote` — width: "1635.910561370123", height: "329.7269624573379", content: "## Select Entra Contacts that should be synced to Zammad



"
4. **Get Zammad Users** `zammad` — operation: **getAll**
5. **Get Contacts from Entra** `httpRequest` — url: `https://graph.microsoft.com/v1.0/contacts`
6. **Filter if needed** `if` — options: "[object Object]", conditions: "[object Object]"
7. **Entra Contacts** `splitOut` — options: "[object Object]", fieldToSplitOut: "value"
8. **Filter contacts if needed** `if` — options: "[object Object]", conditions: "[object Object]"
9. **Zammad Univeral User Object** `set` — values: "[object Object]", options: "[object Object]", keepOnlySet: "true"
10. **Merge** `merge` — mode: "combine", options: "[object Object]", fieldsToMatchString: "email"
11. **Find new Zammad Users** `compareDatasets` — options: "[object Object]", mergeByFields: "[object Object]"
12. **Find removed Users** `compareDatasets` — options: "[object Object]", resolve: "preferInput1", mergeByFields: "[object Object]"
13. **Update Zammad User** `zammad` — operation: **update**
14. **Create Zammad User** `zammad` — lastname: "={{ $json.lastname }}", firstname: "={{ $json.firstname }}", additionalFields: "[object Object]"
15. **Deactivate Zammad User** `zammad` — operation: **update**

## 💡 AI-Powered Ideas for Improvement
### Explain
This workflow syncs contacts from Microsoft Entra to Zammad, a customer support system. It retrieves contacts from Entra, compares them with existing Zammad users, and updates Zammad accordingly. New contacts are created, existing ones updated, and removed contacts are deactivated in Zammad, ensuring both systems have consistent user data.

### Demonstrate
A business might use this workflow to ensure their customer support team in Zammad has up-to-date contact information from their organization's directory in Microsoft Entra, reducing manual data entry and errors.

### Imitate
1. Import the workflow into n8n.
2. Connect your Microsoft Entra and Zammad accounts.
3. Set the workflow to run manually or on a schedule.
4. Customize conditions in the "Filter if needed" nodes to fit your criteria.
5. Test the workflow with a subset of contacts to ensure accuracy.

### Practice
Create a test environment with mock contacts in Microsoft Entra and Zammad. Run the workflow and observe how it updates the Zammad contacts. Modify some contacts in Entra to see how changes are reflected in Zammad.

### WIIFM
Mastering this workflow can streamline data synchronization between systems, saving time and reducing errors. Offering this as a service can enhance your automation business, providing value to clients by maintaining accurate customer data across platforms.

## 🔧 Setup Instructions
1. **Connect Credentials:** zammadTokenAuthApi, microsoftOAuth2Api, microsoftGraphSecurityOAuth2Api.
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
