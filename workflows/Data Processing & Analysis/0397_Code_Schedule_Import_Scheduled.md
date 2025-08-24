# Code Schedule Import Scheduled

## 🚀 What It Does
This workflow automates a process involving itemLists, httpRequest, googleSheets.

## 💼 Business Use Case
Use it to automate research, content creation, or data analysis. It saves hours of manual work.

## ⚙️ How It Works
1.  **Trigger:** This workflow is designed to run on a schedule. Configure the interval in the Schedule node.
2. **Step 1: Split results (itemLists)** - This step performs a key action in the workflow.
3. **Step 2: Piloterr - Get Recent Fundraise - Serie A (httpRequest)** - This step performs a key action in the workflow.
4. **Step 3: Piloterr - Get Recent Fundraise - Serie B (httpRequest)** - This step performs a key action in the workflow.
5. **Step 4: Google Sheets (googleSheets)** - This step performs a key action in the workflow.
6. **Step 5: Piloterr - Get Recent Fundraise - Seed (httpRequest)** - This step performs a key action in the workflow.
7. **Step 6: Prepare data (set)** - This step performs a key action in the workflow.
8. **Step 7: Piloterr - Enrich company (httpRequest)** - This step performs a key action in the workflow.
9. **Step 8: Merge (merge)** - This step performs a key action in the workflow.
10. **Step 9: Sticky Note (stickyNote)** - This step performs a key action in the workflow.
11. **Step 10: Schedule Trigger - Run Workflow Every Day (scheduleTrigger)** - This step performs a key action in the workflow.
12. **Step 11: Prepare data before importing to Gsheets (set)** - This step performs a key action in the workflow.
13. **Step 12: Get Linkedin URL from object (code)** - This step performs a key action in the workflow.
14. **Step 13: Sticky Note1 (stickyNote)** - This step performs a key action in the workflow.

## 💡 AI-Powered Ideas for Improvement
### Explain
This n8n workflow automates the process of gathering recent fundraising information from different stages (Seed, Series A, Series B) using the Piloterr API, enriching the data, and storing it in Google Sheets. It runs daily to keep the data updated.

### Demonstrate
A startup owner could use this workflow to automatically track recent funding rounds, enabling them to identify potential investors and competitors without manually searching, thus saving time and ensuring they never miss important fundraising news.

### Imitate
1. Import the workflow into n8n.
2. Set up the Piloterr API credentials.
3. Customize the Google Sheets node to match your desired data structure.
4. Test the workflow by executing it manually.
5. Schedule it to run daily for continuous updates.

### Practice
Try modifying the workflow to only pull data for Series A funding rounds. Change the query parameters in the Piloterr nodes to filter results and observe how it affects the output in Google Sheets.

### WIIFM
Mastering this workflow allows you to automate data collection processes, providing value to clients by saving them time and enhancing their decision-making capabilities. This skill can help you attract customers and generate income through automation services.

## 🔧 Setup Instructions
1. **Connect Credentials:** OpenAI, Google Sheets, Slack, and other nodes must be authenticated.
2. **Customize Core Logic:** Review "Split results" and "Sticky Note1" for IDs, table names, and URLs.
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
