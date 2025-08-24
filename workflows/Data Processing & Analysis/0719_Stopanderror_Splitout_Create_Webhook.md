# Stopanderror Splitout Create Webhook

## 🚀 What It Does
This workflow automates a process involving outputParserStructured, set, lmChatOpenAi.

## 💼 Business Use Case
Use it to automate research, content creation, or data analysis. It saves hours of manual work.

## ⚙️ How It Works
1.  **Trigger:** This workflow starts with a **On form submission** node.
2. **Step 1: Structured Output Parser (outputParserStructured)** - This step performs a key action in the workflow.
3. **Step 2: Set Variables (set)** - This step performs a key action in the workflow.
4. **Step 3: OpenAI Chat Model (lmChatOpenAi)** - This step performs a key action in the workflow.
5. **Step 4: OpenAI Chat Model1 (lmChatOpenAi)** - This step performs a key action in the workflow.
6. **Step 5: OpenAI Chat Model2 (lmChatOpenAi)** - This step performs a key action in the workflow.
7. **Step 6: Structured Output Parser1 (outputParserStructured)** - This step performs a key action in the workflow.
8. **Step 7: On form submission (formTrigger)** - This step performs a key action in the workflow.
9. **Step 8: Generate SERP Queries (chainLlm)** - This step performs a key action in the workflow.
10. **Step 9: Structured Output Parser2 (outputParserStructured)** - This step performs a key action in the workflow.
11. **Step 10: OpenAI Chat Model3 (lmChatOpenAi)** - This step performs a key action in the workflow.
12. **Step 11: Set Initial Query (set)** - This step performs a key action in the workflow.
13. **Step 12: SERP to Items (splitOut)** - This step performs a key action in the workflow.
14. **Step 13: Item Ref (noOp)** - This step performs a key action in the workflow.
15. **Step 14: Research Goal + Learnings (set)** - This step performs a key action in the workflow.
16. **Step 15: Accumulate Results (set)** - This step performs a key action in the workflow.
17. **Step 16: DeepResearch Results (set)** - This step performs a key action in the workflow.
18. **Step 17: Results to Items (splitOut)** - This step performs a key action in the workflow.
19. **Step 18: Set Next Queries (set)** - This step performs a key action in the workflow.
20. **Step 19: For Each Query... (splitInBatches)** - This step performs a key action in the workflow.
21. **Step 20: Feedback to Items (splitOut)** - This step performs a key action in the workflow.
22. **Step 21: Ask Clarity Questions (form)** - This step performs a key action in the workflow.
23. **Step 22: For Each Question... (splitInBatches)** - This step performs a key action in the workflow.
24. **Step 23: DeepResearch Subworkflow (executeWorkflowTrigger)** - This step performs a key action in the workflow.
25. **Step 24: Sticky Note (stickyNote)** - This step performs a key action in the workflow.
26. **Step 25: Clarifying Questions (chainLlm)** - This step performs a key action in the workflow.
27. **Step 26: Sticky Note1 (stickyNote)** - This step performs a key action in the workflow.
28. **Step 27: End Form (form)** - This step performs a key action in the workflow.
29. **Step 28: Initiate DeepResearch (executeWorkflow)** - This step performs a key action in the workflow.
30. **Step 29: Execution Data (executionData)** - This step performs a key action in the workflow.
31. **Step 30: JobType Router (switch)** - This step performs a key action in the workflow.
32. **Step 31: OpenAI Chat Model4 (lmChatOpenAi)** - This step performs a key action in the workflow.
33. **Step 32: Get Initial Query (set)** - This step performs a key action in the workflow.
34. **Step 33: Structured Output Parser4 (outputParserStructured)** - This step performs a key action in the workflow.
35. **Step 34: Create Row (notion)** - This step performs a key action in the workflow.
36. **Step 35: Report Page Generator (chainLlm)** - This step performs a key action in the workflow.
37. **Step 36: Sticky Note2 (stickyNote)** - This step performs a key action in the workflow.
38. **Step 37: Sticky Note3 (stickyNote)** - This step performs a key action in the workflow.
39. **Step 38: Sticky Note4 (stickyNote)** - This step performs a key action in the workflow.
40. **Step 39: Is Depth Reached? (if)** - This step performs a key action in the workflow.
41. **Step 40: Get Research Results (set)** - This step performs a key action in the workflow.
42. **Step 41: Get Existing Row (notion)** - This step performs a key action in the workflow.
43. **Step 42: Set In-Progress (notion)** - This step performs a key action in the workflow.
44. **Step 43: Set Done (notion)** - This step performs a key action in the workflow.
45. **Step 44: Tags to Items (splitOut)** - This step performs a key action in the workflow.
46. **Step 45: Convert to HTML (markdown)** - This step performs a key action in the workflow.
47. **Step 46: HTML to Array (set)** - This step performs a key action in the workflow.
48. **Step 47: Notion Block Generator (chainLlm)** - This step performs a key action in the workflow.
49. **Step 48: Google Gemini Chat Model (lmChatGoogleGemini)** - This step performs a key action in the workflow.
50. **Step 49: Parse JSON blocks (set)** - This step performs a key action in the workflow.
51. **Step 50: Upload to Notion Page (httpRequest)** - This step performs a key action in the workflow.
52. **Step 51: Sticky Note5 (stickyNote)** - This step performs a key action in the workflow.
53. **Step 52: Sticky Note6 (stickyNote)** - This step performs a key action in the workflow.
54. **Step 53: Sticky Note7 (stickyNote)** - This step performs a key action in the workflow.
55. **Step 54: Get Existing Row1 (notion)** - This step performs a key action in the workflow.
56. **Step 55: Sticky Note8 (stickyNote)** - This step performs a key action in the workflow.
57. **Step 56: Sticky Note9 (stickyNote)** - This step performs a key action in the workflow.
58. **Step 57: Sticky Note10 (stickyNote)** - This step performs a key action in the workflow.
59. **Step 58: Sticky Note11 (stickyNote)** - This step performs a key action in the workflow.
60. **Step 59: DeepResearch Report (chainLlm)** - This step performs a key action in the workflow.
61. **Step 60: DeepResearch Learnings (chainLlm)** - This step performs a key action in the workflow.
62. **Step 61: Generate Report (executeWorkflow)** - This step performs a key action in the workflow.
63. **Step 62: Generate Learnings (executeWorkflow)** - This step performs a key action in the workflow.
64. **Step 63: Confirmation (form)** - This step performs a key action in the workflow.
65. **Step 64: Research Request (form)** - This step performs a key action in the workflow.
66. **Step 65: Valid Blocks (filter)** - This step performs a key action in the workflow.
67. **Step 66: Sticky Note12 (stickyNote)** - This step performs a key action in the workflow.
68. **Step 67: Append Blocks (merge)** - This step performs a key action in the workflow.
69. **Step 68: URL Sources to Lists (code)** - This step performs a key action in the workflow.
70. **Step 69: Empty Response (set)** - This step performs a key action in the workflow.
71. **Step 70: Has Content? (if)** - This step performs a key action in the workflow.
72. **Step 71: Sticky Note13 (stickyNote)** - This step performs a key action in the workflow.
73. **Step 72: Sticky Note14 (stickyNote)** - This step performs a key action in the workflow.
74. **Step 73: Sticky Note15 (stickyNote)** - This step performs a key action in the workflow.
75. **Step 74: Combine & Send back to Loop (aggregate)** - This step performs a key action in the workflow.
76. **Step 75: For Each Block... (splitInBatches)** - This step performs a key action in the workflow.
77. **Step 76: Sticky Note16 (stickyNote)** - This step performs a key action in the workflow.
78. **Step 77: Sticky Note17 (stickyNote)** - This step performs a key action in the workflow.
79. **Step 78: Sticky Note18 (stickyNote)** - This step performs a key action in the workflow.
80. **Step 79: Sticky Note20 (stickyNote)** - This step performs a key action in the workflow.
81. **Step 80: Valid Results (filter)** - This step performs a key action in the workflow.
82. **Step 81: RAG Web Browser (httpRequest)** - This step performs a key action in the workflow.
83. **Step 82: Get Markdown + URL (set)** - This step performs a key action in the workflow.
84. **Step 83: Is Apify Auth Error? (if)** - This step performs a key action in the workflow.
85. **Step 84: Stop and Error (stopAndError)** - This step performs a key action in the workflow.
86. **Step 85: Sticky Note19 (stickyNote)** - This step performs a key action in the workflow.

## 💡 AI-Powered Ideas for Improvement
undefined

## 🔧 Setup Instructions
1. **Connect Credentials:** OpenAI, Google Sheets, Slack, and other nodes must be authenticated.
2. **Customize Core Logic:** Review "Structured Output Parser" and "Sticky Note19" for IDs, table names, and URLs.
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
