# Code Schedule Automate Scheduled

## 🚀 What It Does
This workflow automates a process involving manualTrigger, xml, httpRequest.

## 💼 Business Use Case
Use it to automate research, content creation, or data analysis. It saves hours of manual work.

## ⚙️ How It Works
1.  **Trigger:** This workflow starts with a **When clicking ‘Test workflow’** node.
2. **Step 1: When clicking ‘Test workflow’ (manualTrigger)** - This step performs a key action in the workflow.
3. **Step 2: XML (xml)** - This step performs a key action in the workflow.
4. **Step 3: GoogleTrends (httpRequest)** - This step performs a key action in the workflow.
5. **Step 4: CONFIG (set)** - This step performs a key action in the workflow.
6. **Step 5: Get saved keywords (googleSheets)** - This step performs a key action in the workflow.
7. **Step 6: Loop Over Items (splitInBatches)** - This step performs a key action in the workflow.
8. **Step 7: Mapping (set)** - This step performs a key action in the workflow.
9. **Step 8: Google Sheets (googleSheets)** - This step performs a key action in the workflow.
10. **Step 9: New keywords (code)** - This step performs a key action in the workflow.
11. **Step 10: content1 (httpRequest)** - This step performs a key action in the workflow.
12. **Step 11: content2 (httpRequest)** - This step performs a key action in the workflow.
13. **Step 12: content3 (httpRequest)** - This step performs a key action in the workflow.
14. **Step 13: Start every hour past 11 minutes (scheduleTrigger)** - This step performs a key action in the workflow.
15. **Step 14: Sticky Note (stickyNote)** - This step performs a key action in the workflow.
16. **Step 15: Sticky Note1 (stickyNote)** - This step performs a key action in the workflow.
17. **Step 16: Sticky Note2 (stickyNote)** - This step performs a key action in the workflow.
18. **Step 17: Sticky Note3 (stickyNote)** - This step performs a key action in the workflow.
19. **Step 18: Sticky Note4 (stickyNote)** - This step performs a key action in the workflow.
20. **Step 19: Sticky Note5 (stickyNote)** - This step performs a key action in the workflow.
21. **Step 20: Sticky Note6 (stickyNote)** - This step performs a key action in the workflow.
22. **Step 21: Sticky Note7 (stickyNote)** - This step performs a key action in the workflow.
23. **Step 22: Sticky Note8 (stickyNote)** - This step performs a key action in the workflow.
24. **Step 23: If we have scraped min 1 url -> Save (if)** - This step performs a key action in the workflow.
25. **Step 24: All scraping node failed. Don't save record without summary (noOp)** - This step performs a key action in the workflow.
26. **Step 25: Sticky Note9 (stickyNote)** - This step performs a key action in the workflow.
27. **Step 26: Sticky Note10 (stickyNote)** - This step performs a key action in the workflow.

## 💡 AI-Powered Ideas for Improvement
### Explain
This n8n workflow automates the process of gathering trending keywords from Google Trends, extracting relevant content from associated URLs, and saving the results to Google Sheets. It runs periodically and can be triggered manually for testing.

### Demonstrate
A business owner might use this workflow to stay updated on trending topics relevant to their industry. For example, a marketing consultant could automate content creation based on trending keywords to produce timely blog posts or social media updates.

### Imitate
1. Import the workflow into n8n.
2. Configure the Google Sheets and API credentials.
3. Set the "CONFIG" node values (e.g., min_traffic, max_results).
4. Adjust the HTTP requests for content extraction as needed.
5. Test the workflow by clicking "Test workflow."

### Practice
Try modifying the workflow to change the frequency of updates or adjust the filtering criteria for keywords. Observe how these changes affect the data saved in Google Sheets.

### WIIFM
Mastering this workflow helps you create value by automating content generation, allowing you to focus on strategy. This skill can attract clients looking for efficient marketing solutions, potentially increasing your income through automation services.

## 🔧 Setup Instructions
1. **Connect Credentials:** OpenAI, Google Sheets, Slack, and other nodes must be authenticated.
2. **Customize Core Logic:** Review "When clicking ‘Test workflow’" and "Sticky Note10" for IDs, table names, and URLs.
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
