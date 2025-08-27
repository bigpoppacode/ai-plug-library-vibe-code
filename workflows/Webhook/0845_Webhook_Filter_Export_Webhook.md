# Webhook Filter Export Webhook
## 🚀 What It Does
Moves data between apps and a **database/spreadsheet**, with logic and optional AI steps.

## 💼 Business Use Case
Ideal for **lead intake**, **enrichment**, and **CRM updates** with alerts to the right channel.

## ⚙️ How It Works
1. **Trigger:** This workflow starts with **Sticky Note1**.
2. **Webhook** `webhook` — method: **POST**, path: `/poc-retell-analysis`
3. **Sticky Note1** `stickyNote` — color: "7", width: "601", height: "1585"
4. **Sticky Note** `stickyNote` — color: "5", width: "220", height: "300"
5. **Sticky Note2** `stickyNote` — color: "5", width: "220", height: "300"
6. **Sticky Note3** `stickyNote` — color: "5", width: "220", height: "300"
7. **Sticky Note4** `stickyNote` — color: "5", width: "220", height: "220"
8. **Sticky Note5** `stickyNote` — color: "5", width: "220", height: "220"
9. **Sticky Note6** `stickyNote` — color: "5", width: "220", height: "220"
10. **Sticky Note7** `stickyNote` — color: "3", width: "220", height: "120"
11. **Filter - only call ended** `filter` — options: "[object Object]", conditions: "[object Object]"
12. **Set fields to export** `set` — options: "[object Object]", assignments: "[object Object]"
13. **Save to Excel** `googleSheets` — operation: **append**
14. **Save to Airtable** `airtable` — operation: **create**, table: `[object Object]`
15. **Save to Notion** `notion` — resource: **databasePage**

## 💡 AI-Powered Ideas for Improvement
**Explain:**  
This n8n workflow automates the process of capturing and storing call analysis data from Retell. It listens for completed call analyses via a webhook, extracts relevant data such as call ID, transcript, sentiment, and costs, and saves this information into Airtable, Google Sheets, and Notion. This ensures that call data is systematically archived and easily accessible for further analysis or record-keeping.

**Demonstrate:**  
A sales team could use this workflow to automatically log customer call data, including transcripts and sentiment analysis, into their CRM systems, helping them track customer interactions and improve service quality.

**Imitate:**  
1. Set up a Retell account and create an agent.
2. Configure the webhook URL in Retell to point to your n8n instance.
3. Connect Airtable, Google Sheets, and Notion to n8n.
4. Customize the Airtable, Google Sheet, or Notion to match the fields being recorded.
5. Activate the workflow to automatically log call data post-analysis.

**Practice:**  
Create a test call in Retell and observe how the workflow captures and logs the call details in Airtable, Google Sheets, and Notion. Experiment with adding or removing fields to see how the workflow adapts.

**WIIFM:**  
Mastering this workflow allows you to offer automated call logging and analysis services to businesses, leading to enhanced customer service and operational efficiency. This can help attract new clients and generate recurring revenue in an AI automation business.

## 🔧 Setup Instructions
1. **Connect Credentials:** airtableTokenApi, googleSheetsOAuth2Api, notionApi.
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
