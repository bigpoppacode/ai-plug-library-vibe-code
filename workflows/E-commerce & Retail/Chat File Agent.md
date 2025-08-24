# Chat File Agent

## 🚀 What It Does
This workflow automates a process involving httpRequest, documentDefaultDataLoader, textSplitterRecursiveCharacterTextSplitter.

## 💼 Business Use Case
Use it to automate research, content creation, or data analysis. It saves hours of manual work.

## ⚙️ How It Works
1.  **Trigger:** This workflow starts with a **When clicking ‘Test workflow’** node.
2. **Step 1: Get All files (httpRequest)** - This step performs a key action in the workflow.
3. **Step 2: Default Data Loader (documentDefaultDataLoader)** - This step performs a key action in the workflow.
4. **Step 3: Recursive Character Text Splitter (textSplitterRecursiveCharacterTextSplitter)** - This step performs a key action in the workflow.
5. **Step 4: Embeddings OpenAI (embeddingsOpenAi)** - This step performs a key action in the workflow.
6. **Step 5: Create File record2 (supabase)** - This step performs a key action in the workflow.
7. **Step 6: If (if)** - This step performs a key action in the workflow.
8. **Step 7: Get All Files (supabase)** - This step performs a key action in the workflow.
9. **Step 8: Download (httpRequest)** - This step performs a key action in the workflow.
10. **Step 9: Loop Over Items (splitInBatches)** - This step performs a key action in the workflow.
11. **Step 10: When clicking ‘Test workflow’ (manualTrigger)** - This step performs a key action in the workflow.
12. **Step 11: Aggregate (aggregate)** - This step performs a key action in the workflow.
13. **Step 12: When chat message received (chatTrigger)** - This step performs a key action in the workflow.
14. **Step 13: Insert into Supabase Vectorstore (vectorStoreSupabase)** - This step performs a key action in the workflow.
15. **Step 14: Sticky Note (stickyNote)** - This step performs a key action in the workflow.
16. **Step 15: Sticky Note1 (stickyNote)** - This step performs a key action in the workflow.
17. **Step 16: Sticky Note2 (stickyNote)** - This step performs a key action in the workflow.
18. **Step 17: Sticky Note3 (stickyNote)** - This step performs a key action in the workflow.
19. **Step 18: Sticky Note4 (stickyNote)** - This step performs a key action in the workflow.
20. **Step 19: Sticky Note5 (stickyNote)** - This step performs a key action in the workflow.
21. **Step 20: Sticky Note7 (stickyNote)** - This step performs a key action in the workflow.
22. **Step 21: Sticky Note8 (stickyNote)** - This step performs a key action in the workflow.
23. **Step 22: Sticky Note10 (stickyNote)** - This step performs a key action in the workflow.
24. **Step 23: AI Agent1 (agent)** - This step performs a key action in the workflow.
25. **Step 24: OpenAI Chat Model (lmChatOpenAi)** - This step performs a key action in the workflow.
26. **Step 25: Simple Memory (memoryBufferWindow)** - This step performs a key action in the workflow.
27. **Step 26: Embeddings OpenAI1 (embeddingsOpenAi)** - This step performs a key action in the workflow.
28. **Step 27: Supabase Vector Store (vectorStoreSupabase)** - This step performs a key action in the workflow.
29. **Step 28: File Created (googleDriveTrigger)** - This step performs a key action in the workflow.
30. **Step 29: Download File (googleDrive)** - This step performs a key action in the workflow.
31. **Step 30: File Updated (googleDriveTrigger)** - This step performs a key action in the workflow.
32. **Step 31: Delete Old Doc Rows (supabase)** - This step performs a key action in the workflow.
33. **Step 32: Set File ID (set)** - This step performs a key action in the workflow.
34. **Step 33: Create File record1 (supabase)** - This step performs a key action in the workflow.
35. **Step 34: Default Data Loader1 (documentDefaultDataLoader)** - This step performs a key action in the workflow.
36. **Step 35: Embeddings OpenAI3 (embeddingsOpenAi)** - This step performs a key action in the workflow.
37. **Step 36: Recursive Character Text Splitter1 (textSplitterRecursiveCharacterTextSplitter)** - This step performs a key action in the workflow.
38. **Step 37: Insert into Supabase Vectorstore1 (vectorStoreSupabase)** - This step performs a key action in the workflow.
39. **Step 38: Sticky Note11 (stickyNote)** - This step performs a key action in the workflow.
40. **Step 39: Edit Fields (set)** - This step performs a key action in the workflow.
41. **Step 40: Edit Fields1 (set)** - This step performs a key action in the workflow.
42. **Step 41: Upload File (httpRequest)** - This step performs a key action in the workflow.
43. **Step 42: Get Processing Status (httpRequest)** - This step performs a key action in the workflow.
44. **Step 43: Wait to stay within service limits (wait)** - This step performs a key action in the workflow.
45. **Step 44: Is Job Ready? (switch)** - This step performs a key action in the workflow.
46. **Step 45: Stop and Error (stopAndError)** - This step performs a key action in the workflow.
47. **Step 46: Get Parsed Data (httpRequest)** - This step performs a key action in the workflow.
48. **Step 47: Sticky Note12 (stickyNote)** - This step performs a key action in the workflow.
49. **Step 48: Merge (merge)** - This step performs a key action in the workflow.
50. **Step 49: If1 (if)** - This step performs a key action in the workflow.
51. **Step 50: Set Text (set)** - This step performs a key action in the workflow.
52. **Step 51: Set Text1 (set)** - This step performs a key action in the workflow.
53. **Step 52: Merge Text (merge)** - This step performs a key action in the workflow.
54. **Step 53: Upload File1 (httpRequest)** - This step performs a key action in the workflow.
55. **Step 54: Get Processing Status1 (httpRequest)** - This step performs a key action in the workflow.
56. **Step 55: Wait to stay within service limits1 (wait)** - This step performs a key action in the workflow.
57. **Step 56: Is Job Ready?1 (switch)** - This step performs a key action in the workflow.
58. **Step 57: Stop and Error1 (stopAndError)** - This step performs a key action in the workflow.
59. **Step 58: Get Parsed Data1 (httpRequest)** - This step performs a key action in the workflow.
60. **Step 59: Sticky Note13 (stickyNote)** - This step performs a key action in the workflow.
61. **Step 60: Set Text3 (set)** - This step performs a key action in the workflow.
62. **Step 61: Webhook (webhook)** - This step performs a key action in the workflow.
63. **Step 62: Sticky Note14 (stickyNote)** - This step performs a key action in the workflow.

## 💡 AI-Powered Ideas for Improvement
### Explain
This n8n workflow automates the process of fetching files from Supabase, processing them with AI to extract meaningful data, and storing the results. It enables users to interact with documents through a chatbot, making information retrieval efficient.

### Demonstrate
A business owner can use this workflow to automate document analysis. For example, a law firm could upload case files, and the workflow would allow lawyers to ask questions about the documents and receive instant AI-generated responses, saving time and improving client service.

### Imitate
1. Import the workflow into n8n.
2. Configure the Supabase node with your project credentials.
3. Set up the OpenAI API key for AI processing.
4. Adjust file handling steps based on the type of documents you’ll use.
5. Test the workflow with sample files to ensure data is processed correctly.

### Practice
Try modifying the workflow to add a new data source, such as Google Drive. Set it to trigger when a new file is uploaded, and see how the workflow handles the new input. Experiment with different document types to understand how the AI processes them.

### WIIFM
Mastering this workflow allows you to offer valuable automation services, enhancing client interactions with AI-driven insights. This can lead to increased business opportunities, higher client satisfaction, and the potential for recurring revenue through ongoing automation support.

## 🔧 Setup Instructions
1. **Connect Credentials:** OpenAI, Google Sheets, Slack, and other nodes must be authenticated.
2. **Customize Core Logic:** Review "Get All files" and "Sticky Note14" for IDs, table names, and URLs.
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
