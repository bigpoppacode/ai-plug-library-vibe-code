# Splitout Comparedatasets Create Triggered

## 🚀 What It Does
This workflow automates a process involving manualTrigger, gong, stickyNote.

## 💼 Business Use Case
Use it to automate research, content creation, or data analysis. It saves hours of manual work.

## ⚙️ How It Works
1.  **Trigger:** This workflow starts with a **When clicking ‘Test workflow’** node.
2. **Step 1: When clicking ‘Test workflow’ (manualTrigger)** - This step performs a key action in the workflow.
3. **Step 2: Gong (gong)** - This step performs a key action in the workflow.
4. **Step 3: Sticky Note (stickyNote)** - This step performs a key action in the workflow.
5. **Step 4: Sticky Note1 (stickyNote)** - This step performs a key action in the workflow.
6. **Step 5: Transcript Processor (executeWorkflow)** - This step performs a key action in the workflow.
7. **Step 6: Sticky Note2 (stickyNote)** - This step performs a key action in the workflow.
8. **Step 7: Sticky Note3 (stickyNote)** - This step performs a key action in the workflow.
9. **Step 8: Sticky Note4 (stickyNote)** - This step performs a key action in the workflow.
10. **Step 9: Sticky Note5 (stickyNote)** - This step performs a key action in the workflow.
11. **Step 10: Execute Workflow Trigger (executeWorkflowTrigger)** - This step performs a key action in the workflow.
12. **Step 11: Call Aggregator (aggregate)** - This step performs a key action in the workflow.
13. **Step 12: Integration Aggregator (aggregate)** - This step performs a key action in the workflow.
14. **Step 13: Get Integrations (googleSheets)** - This step performs a key action in the workflow.
15. **Step 14: Comma Separate Integrations (set)** - This step performs a key action in the workflow.
16. **Step 15: Comma separate competitors (set)** - This step performs a key action in the workflow.
17. **Step 16: Get list of Competitors (notion)** - This step performs a key action in the workflow.
18. **Step 17: Merge 3 objects into one (merge)** - This step performs a key action in the workflow.
19. **Step 18: Aggregate Call Data (aggregate)** - This step performs a key action in the workflow.
20. **Step 19: Split Out Call Data and Competitors (splitOut)** - This step performs a key action in the workflow.
21. **Step 20: Reduce down to 1 object (aggregate)** - This step performs a key action in the workflow.
22. **Step 21: Get Previous Phone Calls (notion)** - This step performs a key action in the workflow.
23. **Step 22: Isolate Only Call IDs (set)** - This step performs a key action in the workflow.
24. **Step 23: Only Process New Calls (compareDatasets)** - This step performs a key action in the workflow.
25. **Step 24: Loop Over Calls (splitInBatches)** - This step performs a key action in the workflow.
26. **Step 25: Process All Call Transcripts (executeWorkflow)** - This step performs a key action in the workflow.
27. **Step 26: Receive all Transcripts (noOp)** - This step performs a key action in the workflow.

## 💡 AI-Powered Ideas for Improvement
### Explain
This n8n workflow automates the process of analyzing sales calls by extracting data from Gong, filtering duplicates, and processing call transcripts to generate insights. It integrates various tools, ensuring efficient data handling and analysis.

### Demonstrate
A business owner could use this workflow to streamline sales call analysis, automatically extracting key metrics and competitor data to enhance training sessions or sales strategies, saving hours of manual work each week.

### Imitate
1. Open n8n and create a new workflow.
2. Add a Manual Trigger node to start the workflow.
3. Integrate Gong to pull call data.
4. Use Notion to check for duplicates.
5. Process transcripts using the Execute Workflow node.
6. Aggregate and split data for insights.
7. Test the workflow and adjust parameters as needed.

### Practice
Try modifying the workflow to add a new data source, like pulling customer feedback from Google Sheets, and analyze how it affects the existing data processing. This will help you understand integration better.

### WIIFM
Mastering this workflow allows you to offer valuable automation services, reduce operational costs for clients, and position yourself as an expert in AI-driven efficiency, ultimately leading to higher income opportunities.

## 🔧 Setup Instructions
1. **Connect Credentials:** OpenAI, Google Sheets, Slack, and other nodes must be authenticated.
2. **Customize Core Logic:** Review "When clicking ‘Test workflow’" and "Receive all Transcripts" for IDs, table names, and URLs.
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
