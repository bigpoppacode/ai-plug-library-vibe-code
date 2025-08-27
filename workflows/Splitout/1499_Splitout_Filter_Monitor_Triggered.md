# Splitout Filter Monitor Triggered
## 🚀 What It Does
Moves data between apps and a **database/spreadsheet**, with logic and optional AI steps.

## 💼 Business Use Case
Ideal for **lead intake**, **enrichment**, and **CRM updates** with alerts to the right channel.

## ⚙️ How It Works
1. **Trigger:** This workflow starts with **When clicking ‘Test workflow’**.
2. **When clicking ‘Test workflow’** `manualTrigger` — configured for its default action.
3. **Sticky Note** `stickyNote` — width: "260", height: "320", content: "## Change to your n8n domain here

"
4. **Sticky Note1** `stickyNote` — color: "3", width: "420", height: "320"
5. **Sticky Note4** `stickyNote` — color: "7", width: "340", height: "240"
6. **n8n-get all workflow** `n8n` — filters: "[object Object]", requestOptions: "[object Object]"
7. **Filter-get workflow contain modelid** `filter` — options: "[object Object]", conditions: "[object Object]"
8. **Google Sheets-Clear Sheet Data** `googleSheets` — operation: **clear**

## 💡 AI-Powered Ideas for Improvement
**Explain:**  
This n8n workflow audits your current workflows to identify which AI models are being used. It retrieves all workflows, filters for those containing a specific model ID, and logs this information to a Google Sheet. This helps in managing and understanding AI model usage across workflows.

**Demonstrate:**  
A consultant could use this workflow to audit a client's n8n setup, ensuring compliance with AI usage policies by identifying which workflows are utilizing specific AI models.

**Imitate:**  
1. Import workflow into n8n.  
2. Connect your Google Sheets API.  
3. Set your n8n domain in the workflow.  
4. Run the workflow to fetch and filter workflows.  
5. Check the Google Sheet for results.

**Practice:**  
Create a test Google Sheet and a few sample workflows with different AI models. Run the workflow to see how it logs model usage. Modify a workflow to test different AI model detections.

**WIIFM:**  
Mastering this workflow can help you offer auditing services to clients, ensuring they are compliant with AI usage standards. This can enhance your service offerings and increase your value as an automation consultant.

## 🔧 Setup Instructions
1. **Connect Credentials:** googleSheetsOAuth2Api, n8nApi.
2. **Data Mapping:** Verify base/sheet IDs and column names match exactly to prevent silent failures.

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
