# Filter Schedule Create Scheduled
  ## 🚀 What It Does
  Monitors events, processes them, and **notifies** people/apps (Slack/Email) with structured updates.
  
  ## 💼 Business Use Case
  Ideal for **lead intake**, **enrichment**, and **CRM updates** with alerts to the right channel.
  
  ## ⚙️ How It Works
  1. **Trigger:** Runs on a **schedule** (e.g., `[object Object]`).
  2. **Scheduled Start: Daily Churn Check** `scheduleTrigger` — rule: "[object Object]"
3. **(LLM Model for Offer Generation)** `lmChatGoogleGemini` — options: "[object Object]", modelName: "models/gemini-2.0-pro-exp"
4. **(Parse Offer JSON)** `outputParserStructured` — jsonSchemaExample: "{
  "customer_id": "CUST_001",
  "action_taken": "SENT_WINBACK_OFFER",
  "offer_type": "BONUS_POINTS",
  "offer_value": 200,
  "offer_title": "Huge Offer!",
  "offer_details": "Get…[truncated]"
5. **Sticky Note** `stickyNote` — width: "380", height: "300", content: "# 00. Daily Start & Fetch Customer Data

**Purpose:** Automatically triggers the workflow **once daily** based on the schedule set in the first node. It then fetches all customer d…[truncated]"
6. **Sticky Note1** `stickyNote` — color: "3", width: "540", height: "300"
7. **Sticky Note2** `stickyNote` — color: "2", width: "460", height: "280"
8. **Sticky Note3** `stickyNote` — color: "4", width: "600", height: "360"
9. **Sticky Note4** `stickyNote` — width: "400", height: "380", content: "# Example Customer Data


{
    "customer_id": "CUST_001",
    "last_purchase_date": "2024-01-10T10:00:00Z",
    "purchase_frequency_days": 90,
    "user_mail":"example@mail.com",
…[truncated]"
10. **Fetch Customer Data from Sheet** `googleSheets` — options: "[object Object]", sheetName: "[object Object]", documentId: "[object Object]"
11. **Filter High Churn Risk & No Campaign Customers** `filter` — options: "[object Object]", conditions: "[object Object]"
12. **Check if Eligible Customers Found** `if` — options: "[object Object]", conditions: "[object Object]"
13. **Set 'Not Found' Status** `set` — options: "[object Object]", assignments: "[object Object]"
14. **Log 'Not Found' in System Log** `googleSheets` — operation: **appendOrUpdate**
  
  ## 💡 AI-Powered Ideas for Improvement
  ### Explain
This workflow automatically identifies customers at risk of leaving by analyzing their data from a Google Sheet daily. It uses AI to generate personalized win-back offers based on each customer's churn score and preferences. Offers are then sent via email, and actions are logged for tracking and analysis.

### Demonstrate
A retail business can use this workflow to reduce customer churn by proactively engaging with customers likely to leave. By sending targeted offers, the business can retain customers and increase their lifetime value, improving overall revenue.

### Imitate
1. Import the workflow into n8n.
2. Connect your Google Sheets, AI, and email accounts.
3. Set up the Google Sheet with customer data.
4. Customize the AI settings based on your offer strategy.
5. Test the workflow to ensure emails are sent correctly.

### Practice
Create a test Google Sheet with sample customer data. Run the workflow to see how it identifies high-risk customers and sends them personalized offers. Adjust the criteria and offers to see how changes affect the output.

### WIIFM
Mastering this workflow allows you to offer advanced customer retention solutions, helping businesses reduce churn and increase revenue. This expertise can set you apart in the automation field, attracting clients and increasing your income potential.
  
  ## 🔧 Setup Instructions
  1. **Connect Credentials:** googleSheetsOAuth2Api, googlePalmApi, gmailOAuth2.
2. **Cron/Schedule:** Confirm timezone and cadence; start with a test window (e.g., every 5 minutes) then scale.
3. **Data Mapping:** Verify base/sheet IDs and column names match exactly to prevent silent failures.
4. **Notification Targets:** Confirm channel/email IDs and that the bot/app is authorized to post.
  
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
  