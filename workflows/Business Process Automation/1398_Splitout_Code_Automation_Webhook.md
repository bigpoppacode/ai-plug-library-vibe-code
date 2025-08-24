# Splitout Code Automation Webhook

## 🚀 What It Does
This workflow automates a process involving manualTrigger, set, html.

## 💼 Business Use Case
Use it to automate research, content creation, or data analysis. It saves hours of manual work.

## ⚙️ How It Works
1.  **Trigger:** This workflow starts with a **When clicking ‘Test workflow’** node.
2. **Step 1: When clicking ‘Test workflow’ (manualTrigger)** - This step performs a key action in the workflow.
3. **Step 2: Zip Entries (set)** - This step performs a key action in the workflow.
4. **Step 3: Extract Reviews (html)** - This step performs a key action in the workflow.
5. **Step 4: Reviews to List (splitOut)** - This step performs a key action in the workflow.
6. **Step 5: Default Data Loader (documentDefaultDataLoader)** - This step performs a key action in the workflow.
7. **Step 6: Recursive Character Text Splitter (textSplitterRecursiveCharacterTextSplitter)** - This step performs a key action in the workflow.
8. **Step 7: Embeddings OpenAI (embeddingsOpenAi)** - This step performs a key action in the workflow.
9. **Step 8: Set Variables (set)** - This step performs a key action in the workflow.
10. **Step 9: Get Payload of Points (httpRequest)** - This step performs a key action in the workflow.
11. **Step 10: Clusters To List (splitOut)** - This step performs a key action in the workflow.
12. **Step 11: OpenAI Chat Model (lmChatOpenAi)** - This step performs a key action in the workflow.
13. **Step 12: Only Clusters With 3+ points (filter)** - This step performs a key action in the workflow.
14. **Step 13: Set Variables1 (set)** - This step performs a key action in the workflow.
15. **Step 14: Find Reviews (httpRequest)** - This step performs a key action in the workflow.
16. **Step 15: Prep Output For Export (set)** - This step performs a key action in the workflow.
17. **Step 16: Export To Sheets (googleSheets)** - This step performs a key action in the workflow.
18. **Step 17: Clear Existing Reviews (httpRequest)** - This step performs a key action in the workflow.
19. **Step 18: Trigger Insights (executeWorkflow)** - This step performs a key action in the workflow.
20. **Step 19: Prep Values For Trigger (set)** - This step performs a key action in the workflow.
21. **Step 20: Execute Workflow Trigger (executeWorkflowTrigger)** - This step performs a key action in the workflow.
22. **Step 21: Sticky Note (stickyNote)** - This step performs a key action in the workflow.
23. **Step 22: Sticky Note1 (stickyNote)** - This step performs a key action in the workflow.
24. **Step 23: Get TrustPilot Page (httpRequest)** - This step performs a key action in the workflow.
25. **Step 24: Sticky Note2 (stickyNote)** - This step performs a key action in the workflow.
26. **Step 25: Qdrant Vector Store (vectorStoreQdrant)** - This step performs a key action in the workflow.
27. **Step 26: Sticky Note3 (stickyNote)** - This step performs a key action in the workflow.
28. **Step 27: Sticky Note4 (stickyNote)** - This step performs a key action in the workflow.
29. **Step 28: Sticky Note5 (stickyNote)** - This step performs a key action in the workflow.
30. **Step 29: Sticky Note7 (stickyNote)** - This step performs a key action in the workflow.
31. **Step 30: Sticky Note8 (stickyNote)** - This step performs a key action in the workflow.
32. **Step 31: Sticky Note6 (stickyNote)** - This step performs a key action in the workflow.
33. **Step 32: Sticky Note9 (stickyNote)** - This step performs a key action in the workflow.
34. **Step 33: Apply K-means Clustering Algorithm (code)** - This step performs a key action in the workflow.
35. **Step 34: Sticky Note10 (stickyNote)** - This step performs a key action in the workflow.
36. **Step 35: Customer Insights Agent (informationExtractor)** - This step performs a key action in the workflow.
37. **Step 36: Sticky Note12 (stickyNote)** - This step performs a key action in the workflow.
38. **Step 37: Sticky Note11 (stickyNote)** - This step performs a key action in the workflow.

## 💡 AI-Powered Ideas for Improvement
### Explain
This n8n workflow automates the process of gathering and analyzing customer reviews from TrustPilot. It extracts review data, processes it through various nodes (like clustering and AI analysis), and stores insights in Google Sheets, allowing businesses to quickly understand customer sentiment.

### Demonstrate
A business owner could use this workflow to automate the review analysis process, saving time on manual review reading. For example, a restaurant could gather and analyze customer feedback to identify areas for improvement, ensuring they enhance customer satisfaction efficiently.

### Imitate
1. Open n8n and create a new workflow.
2. Add a Manual Trigger node to start the workflow.
3. Use the HTTP Request node to scrape TrustPilot for reviews.
4. Configure data extraction using the HTML node.
5. Process the data through clustering and AI analysis nodes.
6. Set up a Google Sheets node to export insights.
7. Test and adjust the workflow as needed.

### Practice
Try running the workflow with a demo TrustPilot page. Modify the scraping parameters to see how different review data affects the insights generated. This hands-on experience will solidify your understanding of data extraction and processing.

### WIIFM
Mastering this workflow enables you to provide valuable insights to businesses, enhancing their customer service and marketing strategies. By automating review analysis, you can position yourself as a solution provider, creating scalable services that generate recurring income.

## 🔧 Setup Instructions
1. **Connect Credentials:** OpenAI, Google Sheets, Slack, and other nodes must be authenticated.
2. **Customize Core Logic:** Review "When clicking ‘Test workflow’" and "Sticky Note11" for IDs, table names, and URLs.
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
