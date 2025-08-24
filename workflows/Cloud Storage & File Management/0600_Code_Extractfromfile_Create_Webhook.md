# Code Extractfromfile Create Webhook

## 🚀 What It Does
This workflow automates a process involving manualTrigger, sort, httpRequest.

## 💼 Business Use Case
Use it to automate research, content creation, or data analysis. It saves hours of manual work.

## ⚙️ How It Works
1.  **Trigger:** This workflow starts with a **When clicking ‘Test workflow’** node.
2. **Step 1: When clicking ‘Test workflow’ (manualTrigger)** - This step performs a key action in the workflow.
3. **Step 2: Sort Pages (sort)** - This step performs a key action in the workflow.
4. **Step 3: Split PDF into Images (httpRequest)** - This step performs a key action in the workflow.
5. **Step 4: Extract Zip File (compression)** - This step performs a key action in the workflow.
6. **Step 5: Images To List (code)** - This step performs a key action in the workflow.
7. **Step 6: Sticky Note2 (stickyNote)** - This step performs a key action in the workflow.
8. **Step 7: Sticky Note5 (stickyNote)** - This step performs a key action in the workflow.
9. **Step 8: Resize Images For AI (editImage)** - This step performs a key action in the workflow.
10. **Step 9: Sticky Note3 (stickyNote)** - This step performs a key action in the workflow.
11. **Step 10: Sticky Note4 (stickyNote)** - This step performs a key action in the workflow.
12. **Step 11: Combine All Pages (aggregate)** - This step performs a key action in the workflow.
13. **Step 12: Default Data Loader (documentDefaultDataLoader)** - This step performs a key action in the workflow.
14. **Step 13: Recursive Character Text Splitter (textSplitterRecursiveCharacterTextSplitter)** - This step performs a key action in the workflow.
15. **Step 14: OpenAI Chat Model (lmChatOpenAi)** - This step performs a key action in the workflow.
16. **Step 15: OpenAI Chat Model2 (lmChatOpenAi)** - This step performs a key action in the workflow.
17. **Step 16: Embeddings OpenAI (embeddingsOpenAi)** - This step performs a key action in the workflow.
18. **Step 17: Delete Existing Vectors (httpRequest)** - This step performs a key action in the workflow.
19. **Step 18: Continue With Pages Only (merge)** - This step performs a key action in the workflow.
20. **Step 19: Update Pitchdecks Table (airtable)** - This step performs a key action in the workflow.
21. **Step 20: Search Pending Rows (airtable)** - This step performs a key action in the workflow.
22. **Step 21: Get Row (set)** - This step performs a key action in the workflow.
23. **Step 22: Prequisites Met (if)** - This step performs a key action in the workflow.
24. **Step 23: Execute Workflow (executeWorkflow)** - This step performs a key action in the workflow.
25. **Step 24: No Operation, do nothing (noOp)** - This step performs a key action in the workflow.
26. **Step 25: Execute Workflow Trigger (executeWorkflowTrigger)** - This step performs a key action in the workflow.
27. **Step 26: Extract from File (extractFromFile)** - This step performs a key action in the workflow.
28. **Step 27: Convert to File (convertToFile)** - This step performs a key action in the workflow.
29. **Step 28: Sticky Note (stickyNote)** - This step performs a key action in the workflow.
30. **Step 29: OpenAI Chat Model1 (lmChatOpenAi)** - This step performs a key action in the workflow.
31. **Step 30: Vector Store Tool (toolVectorStore)** - This step performs a key action in the workflow.
32. **Step 31: OpenAI Chat Model3 (lmChatOpenAi)** - This step performs a key action in the workflow.
33. **Step 32: Embeddings OpenAI1 (embeddingsOpenAi)** - This step performs a key action in the workflow.
34. **Step 33: OpenAI Chat Model4 (lmChatOpenAi)** - This step performs a key action in the workflow.
35. **Step 34: Generate Report (informationExtractor)** - This step performs a key action in the workflow.
36. **Step 35: Sticky Note1 (stickyNote)** - This step performs a key action in the workflow.
37. **Step 36: Sticky Note6 (stickyNote)** - This step performs a key action in the workflow.
38. **Step 37: Download Deck From Airtable (httpRequest)** - This step performs a key action in the workflow.
39. **Step 38: Sticky Note7 (stickyNote)** - This step performs a key action in the workflow.
40. **Step 39: Airtable Trigger For Pending Rows (airtableTrigger)** - This step performs a key action in the workflow.
41. **Step 40: Transcribe to Markdown (chainLlm)** - This step performs a key action in the workflow.
42. **Step 41: Identify Companies In Question (informationExtractor)** - This step performs a key action in the workflow.
43. **Step 42: Qdrant Vector Store (vectorStoreQdrant)** - This step performs a key action in the workflow.
44. **Step 43: Ask Questions About Pitchdecks (agent)** - This step performs a key action in the workflow.
45. **Step 44: Window Buffer Memory (memoryBufferWindow)** - This step performs a key action in the workflow.
46. **Step 45: Sticky Note8 (stickyNote)** - This step performs a key action in the workflow.
47. **Step 46: Check Pitch Deck Exists (airtableTool)** - This step performs a key action in the workflow.
48. **Step 47: When chat message received (chatTrigger)** - This step performs a key action in the workflow.
49. **Step 48: Sticky Note9 (stickyNote)** - This step performs a key action in the workflow.
50. **Step 49: Pitchdecks Vector Store (vectorStoreQdrant)** - This step performs a key action in the workflow.
51. **Step 50: Sticky Note10 (stickyNote)** - This step performs a key action in the workflow.

## 💡 AI-Powered Ideas for Improvement
### Explain
This n8n workflow automates the process of handling pitch decks. It triggers when a new pitch deck is uploaded, processes it into images, extracts key information using AI, and updates a database with the findings.

### Demonstrate
A startup owner can use this workflow to automate pitch deck analysis. By inputting new pitch decks, the workflow can quickly generate insights and reports, saving hours of manual review and improving decision-making.

### Imitate
1. Create a new n8n workflow.
2. Add a Manual Trigger node.
3. Set up an HTTP Request node to download the pitch deck.
4. Use a compression node to extract images.
5. Implement OpenAI nodes to analyze content and summarize findings.
6. Save results to a database like Airtable.

### Practice
Try creating a simplified version of this workflow that only extracts text from a PDF. Use a manual trigger to upload a PDF, then add a node to extract text and output it to a Google Sheet.

### WIIFM
Mastering this workflow enables you to offer valuable automation services, helping clients streamline their operations and make data-driven decisions, ultimately increasing your income potential through automation consulting.

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
