# API Schema Extractor

## 🚀 What It Does
This workflow automates a process involving manualTrigger, httpRequest, splitOut.

## 💼 Business Use Case
Use it to automate research, content creation, or data analysis. It saves hours of manual work.

## ⚙️ How It Works
1.  **Trigger:** This workflow starts with a **When clicking ‘Test workflow’** node.
2. **Step 1: When clicking ‘Test workflow’ (manualTrigger)** - This step performs a key action in the workflow.
3. **Step 2: Web Search For API Schema (httpRequest)** - This step performs a key action in the workflow.
4. **Step 3: Scrape Webpage Contents (httpRequest)** - This step performs a key action in the workflow.
5. **Step 4: Results to List (splitOut)** - This step performs a key action in the workflow.
6. **Step 5: Recursive Character Text Splitter1 (textSplitterRecursiveCharacterTextSplitter)** - This step performs a key action in the workflow.
7. **Step 6: Content Chunking @ 50k Chars (set)** - This step performs a key action in the workflow.
8. **Step 7: Split Out Chunks (splitOut)** - This step performs a key action in the workflow.
9. **Step 8: Default Data Loader (documentDefaultDataLoader)** - This step performs a key action in the workflow.
10. **Step 9: Set Embedding Variables (set)** - This step performs a key action in the workflow.
11. **Step 10: Execute Workflow Trigger (executeWorkflowTrigger)** - This step performs a key action in the workflow.
12. **Step 11: Execution Data (executionData)** - This step performs a key action in the workflow.
13. **Step 12: EventRouter (switch)** - This step performs a key action in the workflow.
14. **Step 13: Google Gemini Chat Model (lmChatGoogleGemini)** - This step performs a key action in the workflow.
15. **Step 14: Successful Runs (filter)** - This step performs a key action in the workflow.
16. **Step 15: For Each Document... (splitInBatches)** - This step performs a key action in the workflow.
17. **Step 16: Embeddings Google Gemini (embeddingsGoogleGemini)** - This step performs a key action in the workflow.
18. **Step 17: Has API Documentation? (textClassifier)** - This step performs a key action in the workflow.
19. **Step 18: Store Document Embeddings (vectorStoreQdrant)** - This step performs a key action in the workflow.
20. **Step 19: Embeddings Google Gemini1 (embeddingsGoogleGemini)** - This step performs a key action in the workflow.
21. **Step 20: Google Gemini Chat Model1 (lmChatGoogleGemini)** - This step performs a key action in the workflow.
22. **Step 21: Extract API Operations (informationExtractor)** - This step performs a key action in the workflow.
23. **Step 22: Search in Relevant Docs (vectorStoreQdrant)** - This step performs a key action in the workflow.
24. **Step 23: Wait (wait)** - This step performs a key action in the workflow.
25. **Step 24: Remove Dupes (removeDuplicates)** - This step performs a key action in the workflow.
26. **Step 25: Filter Results (filter)** - This step performs a key action in the workflow.
27. **Step 26: Research (executeWorkflow)** - This step performs a key action in the workflow.
28. **Step 27: Has Results? (if)** - This step performs a key action in the workflow.
29. **Step 28: Response Empty (set)** - This step performs a key action in the workflow.
30. **Step 29: Response OK (set)** - This step performs a key action in the workflow.
31. **Step 30: Combine Docs (aggregate)** - This step performs a key action in the workflow.
32. **Step 31: Template to List (splitOut)** - This step performs a key action in the workflow.
33. **Step 32: Query Templates (set)** - This step performs a key action in the workflow.
34. **Step 33: Google Gemini Chat Model2 (lmChatGoogleGemini)** - This step performs a key action in the workflow.
35. **Step 34: For Each Template... (splitInBatches)** - This step performs a key action in the workflow.
36. **Step 35: Query & Docs (set)** - This step performs a key action in the workflow.
37. **Step 36: Identify Service Products (informationExtractor)** - This step performs a key action in the workflow.
38. **Step 37: Extract API Templates (set)** - This step performs a key action in the workflow.
39. **Step 38: Embeddings Google Gemini2 (embeddingsGoogleGemini)** - This step performs a key action in the workflow.
40. **Step 39: Search in Relevant Docs1 (vectorStoreQdrant)** - This step performs a key action in the workflow.
41. **Step 40: Combine Docs1 (aggregate)** - This step performs a key action in the workflow.
42. **Step 41: Query & Docs1 (set)** - This step performs a key action in the workflow.
43. **Step 42: For Each Template...1 (splitInBatches)** - This step performs a key action in the workflow.
44. **Step 43: Merge Lists (code)** - This step performs a key action in the workflow.
45. **Step 44: Remove Duplicates (removeDuplicates)** - This step performs a key action in the workflow.
46. **Step 45: Append Row (googleSheets)** - This step performs a key action in the workflow.
47. **Step 46: Response OK1 (set)** - This step performs a key action in the workflow.
48. **Step 47: Has Operations? (if)** - This step performs a key action in the workflow.
49. **Step 48: Response Empty1 (set)** - This step performs a key action in the workflow.
50. **Step 49: Research Pending (googleSheets)** - This step performs a key action in the workflow.
51. **Step 50: Research Result (googleSheets)** - This step performs a key action in the workflow.
52. **Step 51: Research Error (googleSheets)** - This step performs a key action in the workflow.
53. **Step 52: Extract Pending (googleSheets)** - This step performs a key action in the workflow.
54. **Step 53: Research Event (set)** - This step performs a key action in the workflow.
55. **Step 54: Extract Event (set)** - This step performs a key action in the workflow.
56. **Step 55: Extract (executeWorkflow)** - This step performs a key action in the workflow.
57. **Step 56: Extract Result (googleSheets)** - This step performs a key action in the workflow.
58. **Step 57: Extract Error (googleSheets)** - This step performs a key action in the workflow.
59. **Step 58: Get API Operations (googleSheets)** - This step performs a key action in the workflow.
60. **Step 59: Contruct JSON Schema (code)** - This step performs a key action in the workflow.
61. **Step 60: Upload to Drive (googleDrive)** - This step performs a key action in the workflow.
62. **Step 61: Set Upload Fields (set)** - This step performs a key action in the workflow.
63. **Step 62: Response OK2 (set)** - This step performs a key action in the workflow.
64. **Step 63: Generate Event (set)** - This step performs a key action in the workflow.
65. **Step 64: Generate Pending (googleSheets)** - This step performs a key action in the workflow.
66. **Step 65: Generate (executeWorkflow)** - This step performs a key action in the workflow.
67. **Step 66: Generate Error (googleSheets)** - This step performs a key action in the workflow.
68. **Step 67: Generate Result (googleSheets)** - This step performs a key action in the workflow.
69. **Step 68: Get All Extract (googleSheets)** - This step performs a key action in the workflow.
70. **Step 69: Get All Research (googleSheets)** - This step performs a key action in the workflow.
71. **Step 70: For Each Research... (splitInBatches)** - This step performs a key action in the workflow.
72. **Step 71: For Each Extract... (splitInBatches)** - This step performs a key action in the workflow.
73. **Step 72: Wait1 (wait)** - This step performs a key action in the workflow.
74. **Step 73: All Research Done? (if)** - This step performs a key action in the workflow.
75. **Step 74: All Extract Done? (if)** - This step performs a key action in the workflow.
76. **Step 75: Get All Generate (googleSheets)** - This step performs a key action in the workflow.
77. **Step 76: All Generate Done? (if)** - This step performs a key action in the workflow.
78. **Step 77: For Each Generate... (splitInBatches)** - This step performs a key action in the workflow.
79. **Step 78: Wait2 (wait)** - This step performs a key action in the workflow.
80. **Step 79: Has Results?1 (if)** - This step performs a key action in the workflow.
81. **Step 80: Response Scrape Error (set)** - This step performs a key action in the workflow.
82. **Step 81: Has Results?3 (if)** - This step performs a key action in the workflow.
83. **Step 82: Response No API Docs (set)** - This step performs a key action in the workflow.
84. **Step 83: Sticky Note (stickyNote)** - This step performs a key action in the workflow.
85. **Step 84: Sticky Note1 (stickyNote)** - This step performs a key action in the workflow.
86. **Step 85: Sticky Note2 (stickyNote)** - This step performs a key action in the workflow.
87. **Step 86: Sticky Note3 (stickyNote)** - This step performs a key action in the workflow.
88. **Step 87: Sticky Note4 (stickyNote)** - This step performs a key action in the workflow.
89. **Step 88: Sticky Note5 (stickyNote)** - This step performs a key action in the workflow.

## 💡 AI-Powered Ideas for Improvement
### Explain
This n8n workflow automates the process of gathering API documentation from the web. It starts with a manual trigger, performs web searches for API schemas, scrapes webpage content, processes the data into manageable chunks, and stores the results for further analysis or use.

### Demonstrate
A business owner could use this workflow to automatically compile API documentation for their services, saving time on manual research and ensuring they have up-to-date information for developers, which is crucial for improving product integration and user experience.

### Imitate
1. Open n8n and create a new workflow.
2. Add a Manual Trigger node to start the workflow.
3. Use an HTTP Request node to search for API schemas relevant to your service.
4. Add another HTTP Request node to scrape the content from the results.
5. Use transformation nodes (like Set and Split) to organize the data.
6. Store the processed results in a Google Sheet or database.

### Practice
Try modifying the workflow by changing the search criteria in the HTTP Request node. For example, search for API documentation for a different service or a specific programming language to see how the output changes.

### WIIFM
Mastering this workflow can help you offer valuable automated documentation services to clients, increasing your appeal as an automation consultant and allowing you to charge for high-demand services that streamline development processes.

## 🔧 Setup Instructions
1. **Connect Credentials:** OpenAI, Google Sheets, Slack, and other nodes must be authenticated.
2. **Customize Core Logic:** Review "When clicking ‘Test workflow’" and "Sticky Note5" for IDs, table names, and URLs.
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
