# Filter Schedule Create Scheduled

## 🚀 What It Does
This workflow automates a process involving scheduleTrigger, googleSheets, filter.

## 💼 Business Use Case
Use it to automate research, content creation, or data analysis. It saves hours of manual work.

## ⚙️ How It Works
1.  **Trigger:** This workflow is designed to run on a schedule. Configure the interval in the Schedule node.
2. **Step 1: Scheduled Start: Daily Churn Check (scheduleTrigger)** - This step performs a key action in the workflow.
3. **Step 2: Fetch Customer Data from Sheet (googleSheets)** - This step performs a key action in the workflow.
4. **Step 3: Filter High Churn Risk & No Campaign Customers (filter)** - This step performs a key action in the workflow.
5. **Step 4: Check if Eligible Customers Found (if)** - This step performs a key action in the workflow.
6. **Step 5: Process Each Eligible Customer (splitInBatches)** - This step performs a key action in the workflow.
7. **Step 6: Generate Win-Back Offer (chainLlm)** - This step performs a key action in the workflow.
8. **Step 7: (LLM Model for Offer Generation) (lmChatGoogleGemini)** - This step performs a key action in the workflow.
9. **Step 8: (Parse Offer JSON) (outputParserStructured)** - This step performs a key action in the workflow.
10. **Step 9: Log Sent Offer in System Log (googleSheets)** - This step performs a key action in the workflow.
11. **Step 10: Send Win-Back Offer via Email (gmail)** - This step performs a key action in the workflow.
12. **Step 11: Set 'Not Found' Status (set)** - This step performs a key action in the workflow.
13. **Step 12: Log 'Not Found' in System Log (googleSheets)** - This step performs a key action in the workflow.
14. **Step 13: Sticky Note (stickyNote)** - This step performs a key action in the workflow.
15. **Step 14: Sticky Note1 (stickyNote)** - This step performs a key action in the workflow.
16. **Step 15: Sticky Note2 (stickyNote)** - This step performs a key action in the workflow.
17. **Step 16: Sticky Note3 (stickyNote)** - This step performs a key action in the workflow.
18. **Step 17: Sticky Note4 (stickyNote)** - This step performs a key action in the workflow.

## 💡 AI-Powered Ideas for Improvement
### Explain
This n8n workflow checks daily for customers at high risk of churning, fetches their data, filters eligible customers, generates personalized win-back offers, and sends these offers via email, logging the process for tracking.

### Demonstrate
A business owner could use this workflow to automatically identify and re-engage customers who may stop using their service, thus reducing churn rates and enhancing customer retention without manual intervention.

### Imitate
1. Set up a **Scheduled Trigger** to run daily.
2. Add a **Google Sheets node** to fetch customer data.
3. Use a **Filter node** to identify high churn risk customers.
4. Implement an **If node** to check for eligible customers.
5. Use **Split In Batches** to process each customer.
6. Generate offers with **AI nodes** and send via **Gmail**.
7. Log actions in Google Sheets for tracking.

### Practice
Create a simple version of this workflow that only fetches customer data and logs it to a Google Sheet. Experiment with different filters to see how data changes based on churn risk scores.

### WIIFM
Mastering this workflow empowers you to create automated customer retention strategies, adding value to your services. This expertise can attract clients looking for ways to reduce churn and improve customer loyalty, leading to increased income opportunities.

## 🔧 Setup Instructions
1. **Connect Credentials:** OpenAI, Google Sheets, Slack, and other nodes must be authenticated.
2. **Customize Core Logic:** Review "Scheduled Start: Daily Churn Check" and "Sticky Note4" for IDs, table names, and URLs.
3. **Activate the Workflow:** Set the workflow to "Active" after testing.

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
