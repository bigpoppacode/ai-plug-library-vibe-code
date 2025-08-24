# Redis Code Create Scheduled

## 🚀 What It Does
This workflow automates a process involving manualTrigger, httpRequest, set.

## 💼 Business Use Case
Use it to automate research, content creation, or data analysis. It saves hours of manual work.

## ⚙️ How It Works
1.  **Trigger:** This workflow starts with a **When clicking "Execute Workflow"** node.
2. **Step 1: When clicking "Execute Workflow" (manualTrigger)** - This step performs a key action in the workflow.
3. **Step 2: Get Meraki Organizations (httpRequest)** - This step performs a key action in the workflow.
4. **Step 3: Get Network IDs (httpRequest)** - This step performs a key action in the workflow.
5. **Step 4: Get Org Name & ID (set)** - This step performs a key action in the workflow.
6. **Step 5: Combine latency to its respective Network (merge)** - This step performs a key action in the workflow.
7. **Step 6: Makes Latency and Loss Filterable (set)** - This step performs a key action in the workflow.
8. **Step 7: Filters Problematic sites (code)** - This step performs a key action in the workflow.
9. **Step 8: Average Latency & Loss over 5m (code)** - This step performs a key action in the workflow.
10. **Step 9: Get Uplink Loss and Latency (httpRequest)** - This step performs a key action in the workflow.
11. **Step 10: Schedule Trigger (scheduleTrigger)** - This step performs a key action in the workflow.
12. **Step 11: Sets Network Variables (set)** - This step performs a key action in the workflow.
13. **Step 12: Merge (merge)** - This step performs a key action in the workflow.
14. **Step 13: Check if Alert Exists (redis)** - This step performs a key action in the workflow.
15. **Step 14: Create Response (code)** - This step performs a key action in the workflow.
16. **Step 15: Message Techs (microsoftTeams)** - This step performs a key action in the workflow.
17. **Step 16: Log the Alert (redis)** - This step performs a key action in the workflow.
18. **Step 17: Sticky Note (stickyNote)** - This step performs a key action in the workflow.
19. **Step 18: Sticky Note1 (stickyNote)** - This step performs a key action in the workflow.
20. **Step 19: Sticky Note2 (stickyNote)** - This step performs a key action in the workflow.
21. **Step 20: Sticky Note3 (stickyNote)** - This step performs a key action in the workflow.
22. **Step 21: Sticky Note4 (stickyNote)** - This step performs a key action in the workflow.
23. **Step 22: Sticky Note5 (stickyNote)** - This step performs a key action in the workflow.
24. **Step 23: Sticky Note6 (stickyNote)** - This step performs a key action in the workflow.

## 💡 AI-Powered Ideas for Improvement
undefined

## 🔧 Setup Instructions
1. **Connect Credentials:** OpenAI, Google Sheets, Slack, and other nodes must be authenticated.
2. **Customize Core Logic:** Review "When clicking "Execute Workflow"" and "Sticky Note6" for IDs, table names, and URLs.
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
