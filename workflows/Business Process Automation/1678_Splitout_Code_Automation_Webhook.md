# Splitout Code Automation Webhook

## 🚀 What It Does
This workflow automates a process involving embeddingsOpenAi, documentDefaultDataLoader, set.

## 💼 Business Use Case
Use it to automate research, content creation, or data analysis. It saves hours of manual work.

## ⚙️ How It Works
1.  **Trigger:** This workflow starts with a **Execute Workflow Trigger** node.
2. **Step 1: Embeddings OpenAI (embeddingsOpenAi)** - This step performs a key action in the workflow.
3. **Step 2: Default Data Loader (documentDefaultDataLoader)** - This step performs a key action in the workflow.
4. **Step 3: Convert to Question Answer Pairs (set)** - This step performs a key action in the workflow.
5. **Step 4: Recursive Character Text Splitter (textSplitterRecursiveCharacterTextSplitter)** - This step performs a key action in the workflow.
6. **Step 5: Get Survey Results (googleSheets)** - This step performs a key action in the workflow.
7. **Step 6: Get Survey Headers (googleSheets)** - This step performs a key action in the workflow.
8. **Step 7: Extract Questions (set)** - This step performs a key action in the workflow.
9. **Step 8: Questions to List (splitOut)** - This step performs a key action in the workflow.
10. **Step 9: Find All Answers (httpRequest)** - This step performs a key action in the workflow.
11. **Step 10: Get Payload of Points (httpRequest)** - This step performs a key action in the workflow.
12. **Step 11: Clusters To List (splitOut)** - This step performs a key action in the workflow.
13. **Step 12: Set Variables (set)** - This step performs a key action in the workflow.
14. **Step 13: OpenAI Chat Model (lmChatOpenAi)** - This step performs a key action in the workflow.
15. **Step 14: Prep Output For Export (set)** - This step performs a key action in the workflow.
16. **Step 15: Export To Sheets (googleSheets)** - This step performs a key action in the workflow.
17. **Step 16: Export To Sheets1 (googleSheets)** - This step performs a key action in the workflow.
18. **Step 17: For Each Question... (splitInBatches)** - This step performs a key action in the workflow.
19. **Step 18: Trigger Insights (executeWorkflow)** - This step performs a key action in the workflow.
20. **Step 19: Prep Values For Trigger (set)** - This step performs a key action in the workflow.
21. **Step 20: Execute Workflow Trigger (executeWorkflowTrigger)** - This step performs a key action in the workflow.
22. **Step 21: Create Insights Sheet (googleSheets)** - This step performs a key action in the workflow.
23. **Step 22: Prep Values For Export (set)** - This step performs a key action in the workflow.
24. **Step 23: Sticky Note (stickyNote)** - This step performs a key action in the workflow.
25. **Step 24: QA Pairs to List (splitOut)** - This step performs a key action in the workflow.
26. **Step 25: Sticky Note1 (stickyNote)** - This step performs a key action in the workflow.
27. **Step 26: Sticky Note2 (stickyNote)** - This step performs a key action in the workflow.
28. **Step 27: Sticky Note3 (stickyNote)** - This step performs a key action in the workflow.
29. **Step 28: Sticky Note4 (stickyNote)** - This step performs a key action in the workflow.
30. **Step 29: Sticky Note5 (stickyNote)** - This step performs a key action in the workflow.
31. **Step 30: Sticky Note6 (stickyNote)** - This step performs a key action in the workflow.
32. **Step 31: Sticky Note7 (stickyNote)** - This step performs a key action in the workflow.
33. **Step 32: Sticky Note8 (stickyNote)** - This step performs a key action in the workflow.
34. **Step 33: Sticky Note9 (stickyNote)** - This step performs a key action in the workflow.
35. **Step 34: Has Clusters? (if)** - This step performs a key action in the workflow.
36. **Step 35: Sticky Note10 (stickyNote)** - This step performs a key action in the workflow.
37. **Step 36: Sticky Note11 (stickyNote)** - This step performs a key action in the workflow.
38. **Step 37: When clicking ‘Test workflow’ (manualTrigger)** - This step performs a key action in the workflow.
39. **Step 38: Get Sheet Details (httpRequest)** - This step performs a key action in the workflow.
40. **Step 39: Only Clusters With 3+ points (filter)** - This step performs a key action in the workflow.
41. **Step 40: Apply K-means Clustering Algorithm (code)** - This step performs a key action in the workflow.
42. **Step 41: Qdrant Vector Store (vectorStoreQdrant)** - This step performs a key action in the workflow.
43. **Step 42: Survey Insights Agent (informationExtractor)** - This step performs a key action in the workflow.

## 💡 AI-Powered Ideas for Improvement
### Explain
This n8n workflow automates the processing of survey responses. It retrieves data from Google Sheets, converts responses into question-answer pairs, analyzes them with AI, and exports insights back to Sheets, enabling efficient feedback analysis.

### Demonstrate
A business owner can use this workflow to analyze customer surveys. By automating the extraction and analysis of feedback, they save time and gain valuable insights, improving product development and customer satisfaction.

### Imitate
1. Import the workflow into n8n.
2. Set up Google Sheets credentials and link your survey data.
3. Modify the AI model parameters if needed.
4. Execute the workflow and check the results in the designated Sheets.

### Practice
Try running the workflow with a sample Google Sheet containing mock survey data. Observe how responses are processed and insights generated. Experiment with changing questions to see how the AI's analysis varies.

### WIIFM
Mastering this workflow allows you to automate complex data analysis, making you more attractive to clients seeking efficiency. It can help you offer valuable insights as a service, enhancing your business's income potential.

## 🔧 Setup Instructions
1. **Connect Credentials:** OpenAI, Google Sheets, Slack, and other nodes must be authenticated.
2. **Customize Core Logic:** Review "Embeddings OpenAI" and "Survey Insights Agent" for IDs, table names, and URLs.
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
