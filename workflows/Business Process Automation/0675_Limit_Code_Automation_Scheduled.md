# Limit Code Automation Scheduled

## 🚀 What It Does
This workflow automates a process involving scheduleTrigger, strava, code.

## 💼 Business Use Case
Use it to automate research, content creation, or data analysis. It saves hours of manual work.

## ⚙️ How It Works
1.  **Trigger:** This workflow is designed to run on a schedule. Configure the interval in the Schedule node.
2. **Step 1: Schedule Trigger (scheduleTrigger)** - This step performs a key action in the workflow.
3. **Step 2: Strava (strava)** - This step performs a key action in the workflow.
4. **Step 3: Code (code)** - This step performs a key action in the workflow.
5. **Step 4: Google Sheets (googleSheets)** - This step performs a key action in the workflow.
6. **Step 5: strava_last (set)** - This step performs a key action in the workflow.
7. **Step 6: Remove Duplicates (removeDuplicates)** - This step performs a key action in the workflow.
8. **Step 7: activities (googleSheets)** - This step performs a key action in the workflow.
9. **Step 8: sort_saved (sort)** - This step performs a key action in the workflow.
10. **Step 9: last_saved (limit)** - This step performs a key action in the workflow.
11. **Step 10: saved_last (set)** - This step performs a key action in the workflow.
12. **Step 11: sort_strava (sort)** - This step performs a key action in the workflow.
13. **Step 12: last_strava (limit)** - This step performs a key action in the workflow.
14. **Step 13: sort_results (sort)** - This step performs a key action in the workflow.

## 💡 AI-Powered Ideas for Improvement
### Explain
This n8n workflow automates the process of gathering activities from Strava every two hours, filtering out duplicates, and saving the relevant data into Google Sheets for easy tracking and analysis.

### Demonstrate
A fitness consultant could use this workflow to automatically log client activities from Strava into a Google Sheet. This saves time on manual entry and allows for easy tracking of client progress over time.

### Imitate
1. Set up a Schedule Trigger to run every 2 hours.
2. Use the Strava node to fetch recent activities.
3. Add a Code node to filter out duplicates based on activity IDs.
4. Append the filtered data to a specified Google Sheets document.
5. Test the workflow to ensure data is logged correctly.

### Practice
Create a similar workflow that logs social media posts from a platform like Twitter into a Google Sheet. Use a Schedule Trigger and filter posts by specific keywords or hashtags.

### WIIFM
Mastering this workflow can help you offer valuable automation services to clients, saving them time and increasing efficiency. This positions you as an expert in n8n automation, potentially leading to more clients and higher income.

## 🔧 Setup Instructions
1. **Connect Credentials:** OpenAI, Google Sheets, Slack, and other nodes must be authenticated.
2. **Customize Core Logic:** Review "Schedule Trigger" and "sort_results" for IDs, table names, and URLs.
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
