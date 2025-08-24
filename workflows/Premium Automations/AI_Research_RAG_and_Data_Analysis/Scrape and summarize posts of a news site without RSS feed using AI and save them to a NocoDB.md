# Scrape And Summarize Posts Of A News Site Without RSS Feed Using AI And Save Them To A Nocodb

## 🚀 What It Does
This workflow automates a process involving html, openAi, set.

## 💼 Business Use Case
Use it to automate research, content creation, or data analysis. It saves hours of manual work.

## ⚙️ How It Works
1.  **Trigger:** This workflow is designed to run on a schedule. Configure the interval in the Schedule node.
2. **Step 1: Extract the HTML with the right css class (html)** - This step performs a key action in the workflow.
3. **Step 2: Summary (openAi)** - This step performs a key action in the workflow.
4. **Step 3: Keywords (openAi)** - This step performs a key action in the workflow.
5. **Step 4: Rename keywords (set)** - This step performs a key action in the workflow.
6. **Step 5: Rename Summary (set)** - This step performs a key action in the workflow.
7. **Step 6: Merge (merge)** - This step performs a key action in the workflow.
8. **Step 7: Extract date (html)** - This step performs a key action in the workflow.
9. **Step 8: Select posts of last 7 days (code)** - This step performs a key action in the workflow.
10. **Step 9: Merge date & links (merge)** - This step performs a key action in the workflow.
11. **Step 10: HTTP Request1 (httpRequest)** - This step performs a key action in the workflow.
12. **Step 11: Merge Content with Date & Link (merge)** - This step performs a key action in the workflow.
13. **Step 12: Extract individual posts (html)** - This step performs a key action in the workflow.
14. **Step 13: Sticky Note (stickyNote)** - This step performs a key action in the workflow.
15. **Step 14: Merge ChatGPT output with Date & Link (merge)** - This step performs a key action in the workflow.
16. **Step 15: Sticky Note1 (stickyNote)** - This step performs a key action in the workflow.
17. **Step 16: Sticky Note2 (stickyNote)** - This step performs a key action in the workflow.
18. **Step 17: Sticky Note3 (stickyNote)** - This step performs a key action in the workflow.
19. **Step 18: Sticky Note4 (stickyNote)** - This step performs a key action in the workflow.
20. **Step 19: Sticky Note5 (stickyNote)** - This step performs a key action in the workflow.
21. **Step 20: Sticky Note6 (stickyNote)** - This step performs a key action in the workflow.
22. **Step 21: Sticky Note7 (stickyNote)** - This step performs a key action in the workflow.
23. **Step 22: Retrieve the web page for further processsing (httpRequest)** - This step performs a key action in the workflow.
24. **Step 23: Sticky Note9 (stickyNote)** - This step performs a key action in the workflow.
25. **Step 24: Sticky Note10 (stickyNote)** - This step performs a key action in the workflow.
26. **Step 25: Sticky Note11 (stickyNote)** - This step performs a key action in the workflow.
27. **Step 26: Sticky Note12 (stickyNote)** - This step performs a key action in the workflow.
28. **Step 27: Sticky Note13 (stickyNote)** - This step performs a key action in the workflow.
29. **Step 28: Sticky Note14 (stickyNote)** - This step performs a key action in the workflow.
30. **Step 29: Sticky Note15 (stickyNote)** - This step performs a key action in the workflow.
31. **Step 30: Schedule Trigger each week (scheduleTrigger)** - This step performs a key action in the workflow.
32. **Step 31: Sticky Note16 (stickyNote)** - This step performs a key action in the workflow.
33. **Step 32: NocoDB news database (nocoDb)** - This step performs a key action in the workflow.
34. **Step 33: Sticky Note17 (stickyNote)** - This step performs a key action in the workflow.
35. **Step 34: Sticky Note18 (stickyNote)** - This step performs a key action in the workflow.
36. **Step 35: Create single link items (itemLists)** - This step performs a key action in the workflow.
37. **Step 36: Create single date items (itemLists)** - This step performs a key action in the workflow.

## 💡 AI-Powered Ideas for Improvement
### Explain
This n8n workflow automates the extraction and summarization of news articles from a website. It gathers HTML content, generates summaries and keywords using OpenAI, and stores the results in a database. This helps businesses keep track of important news efficiently.

### Demonstrate
A marketing agency could use this workflow to collect and summarize industry news weekly. It saves time by automatically pulling relevant articles, summarizing them, and storing the info for easy access, helping the agency stay informed without manual effort.

### Imitate
1. Import the workflow into n8n.
2. Set up a **Schedule Trigger** for weekly execution.
3. Configure nodes to extract HTML from your desired news source.
4. Connect OpenAI nodes for summarization and keyword extraction.
5. Set up a database node to store the results.

### Practice
Try modifying the workflow to extract news from a different website. Change the HTML extraction node's CSS selectors to match the new site's structure and test the entire workflow to ensure it works correctly.

### WIIFM
Mastering this workflow allows you to automate news tracking for clients, providing them with valuable insights without manual labor. This can attract new customers and generate income through automation services, positioning you as a valuable asset in the digital landscape.

## 🔧 Setup Instructions
1. **Connect Credentials:** OpenAI, Google Sheets, Slack, and other nodes must be authenticated.
2. **Customize Core Logic:** Review "Extract the HTML with the right css class" and "Create single date items" for IDs, table names, and URLs.
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
