# Limit Splitout Automation Webhook

## 🚀 What It Does
This workflow automates a process involving lmChatGoogleGemini, agent, splitOut.

## 💼 Business Use Case
Use it to automate research, content creation, or data analysis. It saves hours of manual work.

## ⚙️ How It Works
1.  **Trigger:** This workflow starts with a **Chat** node.
2. **Step 1: Google Gemini Chat Model1 (lmChatGoogleGemini)** - This step performs a key action in the workflow.
3. **Step 2: Handle Queries (agent)** - This step performs a key action in the workflow.
4. **Step 3: Split Out (splitOut)** - This step performs a key action in the workflow.
5. **Step 4: Summarize & Analyze Transcript (chainLlm)** - This step performs a key action in the workflow.
6. **Step 5: Concatenate (summarize)** - This step performs a key action in the workflow.
7. **Step 6: Split Out1 (splitOut)** - This step performs a key action in the workflow.
8. **Step 7: Limit (limit)** - This step performs a key action in the workflow.
9. **Step 8: Qdrant Vector Store (vectorStoreQdrant)** - This step performs a key action in the workflow.
10. **Step 9: Recursive Character Text Splitter (textSplitterRecursiveCharacterTextSplitter)** - This step performs a key action in the workflow.
11. **Step 10: Embeddings Google Gemini (embeddingsGoogleGemini)** - This step performs a key action in the workflow.
12. **Step 11: Google Gemini Chat Model2 (lmChatGoogleGemini)** - This step performs a key action in the workflow.
13. **Step 12: Embeddings Google Gemini1 (embeddingsGoogleGemini)** - This step performs a key action in the workflow.
14. **Step 13: Chat (chatTrigger)** - This step performs a key action in the workflow.
15. **Step 14: Video Titles (splitOut)** - This step performs a key action in the workflow.
16. **Step 15: Merge (merge)** - This step performs a key action in the workflow.
17. **Step 16: Edit Fields (set)** - This step performs a key action in the workflow.
18. **Step 17: AI Agent (agent)** - This step performs a key action in the workflow.
19. **Step 18: Google Gemini Chat Model4 (lmChatGoogleGemini)** - This step performs a key action in the workflow.
20. **Step 19: Delete Collection (httpRequest)** - This step performs a key action in the workflow.
21. **Step 20: Default Data Loader (documentDefaultDataLoader)** - This step performs a key action in the workflow.
22. **Step 21: Chat Buffer Memory (memoryBufferWindow)** - This step performs a key action in the workflow.
23. **Step 22: Full Summary (summarize)** - This step performs a key action in the workflow.
24. **Step 23: Sticky Note2 (stickyNote)** - This step performs a key action in the workflow.
25. **Step 24: Sticky Note3 (stickyNote)** - This step performs a key action in the workflow.
26. **Step 25: Chat Buffer Memory1 (memoryBufferWindow)** - This step performs a key action in the workflow.
27. **Step 26: YouTube Transcript (youtubeTranscripter)** - This step performs a key action in the workflow.
28. **Step 27: Sticky Note4 (stickyNote)** - This step performs a key action in the workflow.
29. **Step 28: Sticky Note5 (stickyNote)** - This step performs a key action in the workflow.
30. **Step 29: Sticky Note6 (stickyNote)** - This step performs a key action in the workflow.
31. **Step 30: Message Intent (agent)** - This step performs a key action in the workflow.
32. **Step 31: Structured Output Parser1 (outputParserStructured)** - This step performs a key action in the workflow.
33. **Step 32: Update Context Intent (redis)** - This step performs a key action in the workflow.
34. **Step 33: Get Previous Context Intent (redis)** - This step performs a key action in the workflow.
35. **Step 34: Route Message Intent (switch)** - This step performs a key action in the workflow.
36. **Step 35: Process Status (code)** - This step performs a key action in the workflow.
37. **Step 36: Simple Memory (memoryBufferWindow)** - This step performs a key action in the workflow.
38. **Step 37: Simple Memory3 (memoryBufferWindow)** - This step performs a key action in the workflow.
39. **Step 38: Sticky Note7 (stickyNote)** - This step performs a key action in the workflow.
40. **Step 39: Google Gemini Chat Model6 (lmChatGoogleGemini)** - This step performs a key action in the workflow.
41. **Step 40: Sticky Note9 (stickyNote)** - This step performs a key action in the workflow.
42. **Step 41: Sticky Note10 (stickyNote)** - This step performs a key action in the workflow.
43. **Step 42: Numb of Videos (agent)** - This step performs a key action in the workflow.
44. **Step 43: Default Intent (code)** - This step performs a key action in the workflow.
45. **Step 44: Playlist Limit (if)** - This step performs a key action in the workflow.
46. **Step 45: Playlist or Video (switch)** - This step performs a key action in the workflow.
47. **Step 46: Get Fields for Summary (code)** - This step performs a key action in the workflow.
48. **Step 47: Update Context Process Done1 (redis)** - This step performs a key action in the workflow.
49. **Step 48: Google Gemini Chat Model8 (lmChatGoogleGemini)** - This step performs a key action in the workflow.
50. **Step 49: Playlist HTTP Request (httpRequest)** - This step performs a key action in the workflow.
51. **Step 50: YouTube Transcript1 (youtubeTranscripter)** - This step performs a key action in the workflow.
52. **Step 51: Video HTTP Request (httpRequest)** - This step performs a key action in the workflow.
53. **Step 52: Get Title and Desc (code)** - This step performs a key action in the workflow.
54. **Step 53: Split Out2 (splitOut)** - This step performs a key action in the workflow.
55. **Step 54: Concatenate1 (summarize)** - This step performs a key action in the workflow.
56. **Step 55: Sticky Note12 (stickyNote)** - This step performs a key action in the workflow.
57. **Step 56: Get Videos (code)** - This step performs a key action in the workflow.
58. **Step 57: Get Playlist Videos Data (code)** - This step performs a key action in the workflow.
59. **Step 58: Embeddings Google Gemini2 (embeddingsGoogleGemini)** - This step performs a key action in the workflow.
60. **Step 59: Qdrant Vector Store3 (vectorStoreQdrant)** - This step performs a key action in the workflow.
61. **Step 60: Answer questions with a vector store (toolVectorStore)** - This step performs a key action in the workflow.
62. **Step 61: Qdrant Vector Store4 (vectorStoreQdrant)** - This step performs a key action in the workflow.
63. **Step 62: Answer questions with a vector store1 (toolVectorStore)** - This step performs a key action in the workflow.
64. **Step 63: Google Gemini Chat Model (lmChatGoogleGemini)** - This step performs a key action in the workflow.
65. **Step 64: Google Gemini Chat Model3 (lmChatGoogleGemini)** - This step performs a key action in the workflow.
66. **Step 65: Qdrant Vector Store2 (vectorStoreQdrant)** - This step performs a key action in the workflow.
67. **Step 66: Embeddings Google Gemini4 (embeddingsGoogleGemini)** - This step performs a key action in the workflow.
68. **Step 67: If (if)** - This step performs a key action in the workflow.
69. **Step 68: Count Content (summarize)** - This step performs a key action in the workflow.
70. **Step 69: Sticky Note (stickyNote)** - This step performs a key action in the workflow.
71. **Step 70: Sticky Note1 (stickyNote)** - This step performs a key action in the workflow.
72. **Step 71: Update Context Intent1 (redis)** - This step performs a key action in the workflow.
73. **Step 72: Sticky Note8 (stickyNote)** - This step performs a key action in the workflow.

## 💡 AI-Powered Ideas for Improvement
### Explain
This n8n workflow automates the process of analyzing YouTube playlists and videos. It takes user input (a video or playlist URL), retrieves transcripts, summarizes content, and generates structured responses. This allows users to interact with video content without watching it directly.

### Demonstrate
A digital marketing consultant could use this workflow to provide clients with summarized analyses of educational YouTube videos. Instead of watching lengthy content, the client receives concise insights, saving time and enhancing decision-making based on video content.

### Imitate
1. Set up an n8n account and create a new workflow.
2. Add a **Chat Trigger** to receive user input (YouTube URL).
3. Connect to a **YouTube Transcriber** node to fetch the video transcript.
4. Use a **Summarize Node** to condense the transcript.
5. Add an **AI Agent** node to respond with structured summaries.
6. Test the workflow by providing a sample YouTube URL.

### Practice
Try modifying the workflow to include additional features, such as generating a list of key takeaways or questions based on the video content. Experiment with different YouTube URLs to see how the workflow handles various types of content.

### WIIFM
Mastering this workflow allows you to offer valuable services that save clients time and enhance their understanding of video content. As a consultant or developer, you can differentiate yourself by providing insightful, automated summaries, leading to increased client satisfaction and potential revenue growth.

## 🔧 Setup Instructions
1. **Connect Credentials:** OpenAI, Google Sheets, Slack, and other nodes must be authenticated.
2. **Customize Core Logic:** Review "Google Gemini Chat Model1" and "Sticky Note8" for IDs, table names, and URLs.
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
