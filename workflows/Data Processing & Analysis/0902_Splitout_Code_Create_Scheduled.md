# Splitout Code Create Scheduled

## 🚀 What It Does
This workflow automates a process involving googleSheetsTrigger, httpRequest, code.

## 💼 Business Use Case
Use it to automate research, content creation, or data analysis. It saves hours of manual work.

## ⚙️ How It Works
1.  **Trigger:** This workflow starts with a **Google Sheets Trigger** node.
2. **Step 1: Google Sheets Trigger (googleSheetsTrigger)** - This step performs a key action in the workflow.
3. **Step 2: Apollo Organization Enrichment (httpRequest)** - This step performs a key action in the workflow.
4. **Step 3: Create Apollo People Search URL (code)** - This step performs a key action in the workflow.
5. **Step 4: Loop Over Items (1000 per Batch) (splitInBatches)** - This step performs a key action in the workflow.
6. **Step 5: Apollo Find Decision Makers (httpRequest)** - This step performs a key action in the workflow.
7. **Step 6: Add Contacts (googleSheets)** - This step performs a key action in the workflow.
8. **Step 7: Apollo Enrich Decision Makers (httpRequest)** - This step performs a key action in the workflow.
9. **Step 8: Create Apollo People Enrichment Payload (code)** - This step performs a key action in the workflow.
10. **Step 9: Enrich Contacts (googleSheets)** - This step performs a key action in the workflow.
11. **Step 10: Loop Over Items For Bulk Enrichment (10 per batch) (splitInBatches)** - This step performs a key action in the workflow.
12. **Step 11: Determine Contact's Department (openAi)** - This step performs a key action in the workflow.
13. **Step 12: Apollo Organization Search (httpRequest)** - This step performs a key action in the workflow.
14. **Step 13: Add Company Website (googleSheets)** - This step performs a key action in the workflow.
15. **Step 14: Approve Company Website (slack)** - This step performs a key action in the workflow.
16. **Step 15: Add Company Details (googleSheets)** - This step performs a key action in the workflow.
17. **Step 16: Select Unprocessed Companies (filter)** - This step performs a key action in the workflow.
18. **Step 17: Is Domain Already Provided? (if)** - This step performs a key action in the workflow.
19. **Step 18: Summarize Core Business (openAi)** - This step performs a key action in the workflow.
20. **Step 19: Sticky Note (stickyNote)** - This step performs a key action in the workflow.
21. **Step 20: Sticky Note1 (stickyNote)** - This step performs a key action in the workflow.
22. **Step 21: Split Out Batched Decision Maker Response (splitOut)** - This step performs a key action in the workflow.
23. **Step 22: Split Out Batched Enrichment Response (splitOut)** - This step performs a key action in the workflow.
24. **Step 23: Sticky Note2 (stickyNote)** - This step performs a key action in the workflow.
25. **Step 24: Sticky Note3 (stickyNote)** - This step performs a key action in the workflow.
26. **Step 25: Sticky Note4 (stickyNote)** - This step performs a key action in the workflow.
27. **Step 26: Sticky Note5 (stickyNote)** - This step performs a key action in the workflow.
28. **Step 27: Sticky Note6 (stickyNote)** - This step performs a key action in the workflow.
29. **Step 28: Sticky Note7 (stickyNote)** - This step performs a key action in the workflow.
30. **Step 29: Send Weekly Report (slack)** - This step performs a key action in the workflow.
31. **Step 30: Retrieve Verified Leads (googleSheets)** - This step performs a key action in the workflow.
32. **Step 31: Derive Past Week's Lead Gen. Metrics (code)** - This step performs a key action in the workflow.
33. **Step 32: Weekly Report Trigger (scheduleTrigger)** - This step performs a key action in the workflow.
34. **Step 33: Sticky Note8 (stickyNote)** - This step performs a key action in the workflow.
35. **Step 34: Sticky Note9 (stickyNote)** - This step performs a key action in the workflow.
36. **Step 35: Merge Rows Which Now All Contain Domains (merge)** - This step performs a key action in the workflow.

## 💡 AI-Powered Ideas for Improvement
### Explain
This n8n workflow automates the process of enriching company data and finding decision-makers from a Google Sheet. It triggers on updates, enriches company details using the Apollo API, and collects decision-maker information, all while logging results in Google Sheets.

### Demonstrate
A business owner could use this workflow to streamline lead generation. When a new company is added to their Google Sheet, the workflow automatically enriches data and identifies key contacts, saving significant time and improving sales outreach accuracy.

### Imitate
1. Create a Google Sheet with company names.
2. Set up a Google Sheets Trigger in n8n.
3. Add an HTTP Request node to call Apollo's API for organization enrichment.
4. Use a Code node to format requests for decision-maker searches.
5. Append results back to Google Sheets for tracking.

### Practice
Try modifying the workflow to include additional data fields, such as company size or industry, and see how it changes the output. Test with different batch sizes to understand how it impacts performance and results.

### WIIFM
Mastering this workflow allows you to offer valuable automation services to clients, helping them save time and improve lead quality. By implementing such systems, you can position yourself as a sought-after consultant in the growing field of automation and AI.

## 🔧 Setup Instructions
1. **Connect Credentials:** OpenAI, Google Sheets, Slack, and other nodes must be authenticated.
2. **Customize Core Logic:** Review "Google Sheets Trigger" and "Merge Rows Which Now All Contain Domains" for IDs, table names, and URLs.
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
