# Splitout Comparedatasets Sync Webhook
## 🚀 What It Does
Automates a flow using zammad×4, if×3, httpRequest×2.

## 💼 Business Use Case
Use as a **glue/API broker**: receive data, enrich/validate via APIs, and pass to downstream systems.

## ⚙️ How It Works
1. **Trigger:** This workflow starts with **When clicking ‘Test workflow’**.
2. **When clicking ‘Test workflow’** `manualTrigger` — configured for its default action.
3. **Note1** `stickyNote` — width: "1635.910561370123", height: "329.7269624573379", content: "## Select Entra Users in a named Entra Group that should be synced to Zammad



"
4. **Get Zammad Users** `zammad` — operation: **getAll**
5. **Get Groups from Entra** `httpRequest` — url: `https://graph.microsoft.com/v1.0/groups`
6. **Select only active Users and entra_obect_type="user"** `if` — options: "[object Object]", conditions: "[object Object]"
7. **Remove outer Array** `splitOut` — options: "[object Object]", fieldToSplitOut: "value"
8. **Select Entra Zammad default Group** `if` — options: "[object Object]", conditions: "[object Object]"
9. **Get Members of the default group** `httpRequest` — url: `=https://graph.microsoft.com/v1.0/groups/{{ $json.id }}/members `
10. **Remove outer Array from Entra User** `splitOut` — options: "[object Object]", fieldToSplitOut: "value"
11. **If** `if` — options: "[object Object]", conditions: "[object Object]"
12. **Zammad Univeral User Object** `set` — values: "[object Object]", options: "[object Object]", keepOnlySet: "true"
13. **Merge** `merge` — mode: "combine", options: "[object Object]", fieldsToMatchString: "email"
14. **Find new Zammad Users** `compareDatasets` — options: "[object Object]", mergeByFields: "[object Object]"
15. **Find removed Users** `compareDatasets` — options: "[object Object]", resolve: "preferInput1", mergeByFields: "[object Object]"
16. **Update Zammad User** `zammad` — operation: **update**
17. **Create Zammad User** `zammad` — lastname: "={{ $json.lastname }}", firstname: "={{ $json.firstname }}", additionalFields: "[object Object]"
18. **Deactivate Zammad User** `zammad` — operation: **update**

## 💡 AI-Powered Ideas for Improvement
**Explain:**  
This n8n workflow synchronizes user data between Microsoft's Entra platform and the Zammad support system. It retrieves user lists from Entra, filters for active users in a specified group, and compares them with existing Zammad users. It then updates, creates, or deactivates users in Zammad to ensure both systems are aligned.

**Demonstrate:**  
A business owner could use this workflow to keep their customer support system updated with the latest user information from their company's internal directory, ensuring that only active users can access support resources.

**Imitate:**  
1. Import the workflow into n8n.  
2. Connect your Microsoft Entra and Zammad accounts.  
3. Set up a trigger to run the workflow periodically.  
4. Customize the group name and conditions to fit your user management needs.  
5. Test the workflow to verify it correctly syncs users between systems.

**Practice:**  
Create a test group in Microsoft Entra and add a few users. Run the workflow and check Zammad to see if these users are updated, created, or deactivated as expected. Modify user statuses and rerun the workflow to observe changes.

**WIIFM:**  
Mastering this workflow allows you to offer user management synchronization services to businesses, enhancing their operational efficiency and data accuracy. This can lead to increased client satisfaction and potential upsells in your automation business.

## 🔧 Setup Instructions
1. **Connect Credentials:** microsoftOAuth2Api, microsoftGraphSecurityOAuth2Api, zammadTokenAuthApi.
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
