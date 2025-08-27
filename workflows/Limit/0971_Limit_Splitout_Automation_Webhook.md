# Limit Splitout Automation Webhook
  ## 🚀 What It Does
  Calls external APIs and uses **AI** to transform or decide, then routes the result downstream.
  
  ## 💼 Business Use Case
  Use as a **glue/API broker**: receive data, enrich/validate via APIs, and pass to downstream systems.
  
  ## ⚙️ How It Works
  1. **Trigger:** This workflow starts with **Chat**.
  2. **Google Gemini Chat Model1** `lmChatGoogleGemini` — options: "[object Object]", modelName: "models/gemini-2.0-pro-exp"
3. **Recursive Character Text Splitter** `textSplitterRecursiveCharacterTextSplitter` — options: "[object Object]", chunkSize: "1200", chunkOverlap: "200"
4. **Embeddings Google Gemini** `embeddingsGoogleGemini` — modelName: "models/text-embedding-004"
5. **Google Gemini Chat Model2** `lmChatGoogleGemini` — options: "[object Object]", modelName: "models/gemini-2.0-flash"
6. **Embeddings Google Gemini1** `embeddingsGoogleGemini` — modelName: "models/text-embedding-004"
7. **Chat** `chatTrigger` — public: "true", options: "[object Object]", initialMessages: "Hi there! 👋
Please provide a URL of a Youtube playlist you would like me to analise."
8. **Google Gemini Chat Model4** `lmChatGoogleGemini` — options: "[object Object]", modelName: "models/gemini-2.0-flash"
9. **Default Data Loader** `documentDefaultDataLoader` — options: "[object Object]"
10. **Chat Buffer Memory** `memoryBufferWindow` — sessionKey: "={{ $('Chat').item.json.sessionId }}", sessionIdType: "customKey", contextWindowLength: "10"
11. **Sticky Note2** `stickyNote` — color: "7", width: "1080", height: "900"
12. **Sticky Note3** `stickyNote` — color: "7", width: "1380", height: "700"
13. **Chat Buffer Memory1** `memoryBufferWindow` — sessionKey: "={{ $('Chat').item.json.sessionId }}", sessionIdType: "customKey", contextWindowLength: "10"
14. **Sticky Note4** `stickyNote` — color: "7", width: "640", height: "700"
15. **Sticky Note5** `stickyNote` — color: "7", width: "980", height: "700"
16. **Sticky Note6** `stickyNote` — color: "7", width: "940", height: "880"
17. **Structured Output Parser1** `outputParserStructured` — jsonSchemaExample: "{
  "intent": "PLAYLIST|VIDEO|NONE",
  "url": "Youtube Playlist or Video URL or empty string,",
  "id": "Youtube Playlist or Video ID or empty string,",
  "limit": "number of playl…[truncated]"
18. **Simple Memory** `memoryBufferWindow` — sessionKey: "=intent_{{ $('Chat').item.json.sessionId }}", sessionIdType: "customKey"
19. **Simple Memory3** `memoryBufferWindow` — sessionKey: "=pl_n_{{ $('Chat').item.json.sessionId }}", sessionIdType: "customKey"
20. **Sticky Note7** `stickyNote` — color: "7", width: "1080", height: "580"
21. **Google Gemini Chat Model6** `lmChatGoogleGemini` — options: "[object Object]", modelName: "models/gemini-2.0-flash-lite"
22. **Sticky Note9** `stickyNote` — color: "7", width: "460", height: "580"
23. **Sticky Note10** `stickyNote` — color: "7", width: "480", height: "460"
24. **Google Gemini Chat Model8** `lmChatGoogleGemini` — options: "[object Object]", modelName: "models/gemini-2.0-flash-thinking-exp"
25. **Sticky Note12** `stickyNote` — color: "7", width: "1140", height: "560"
26. **Embeddings Google Gemini2** `embeddingsGoogleGemini` — modelName: "models/text-embedding-004"
27. **Qdrant Vector Store3** `vectorStoreQdrant` — options: "[object Object]", qdrantCollection: "[object Object]"
28. **Answer questions with a vector store** `toolVectorStore` — name: "chat_playlist_data", topK: "10", description: "=Retrive data about the Playlist or Video from the vector store.
playlistId or youtubeId: {{ $('Default Intent').item.json.output?.id }}

**User Message:**
{{ $('Chat').item.json.c…[truncated]"
29. **Qdrant Vector Store4** `vectorStoreQdrant` — options: "[object Object]", qdrantCollection: "[object Object]"
30. **Answer questions with a vector store1** `toolVectorStore` — name: "chat_playlist_data", topK: "6", description: "=User Message:
{{ $('Chat').item.json.chatInput }}"
31. **Google Gemini Chat Model** `lmChatGoogleGemini` — options: "[object Object]", modelName: "models/gemini-2.0-flash"
32. **Google Gemini Chat Model3** `lmChatGoogleGemini` — options: "[object Object]", modelName: "models/gemini-2.0-flash"
33. **Embeddings Google Gemini4** `embeddingsGoogleGemini` — modelName: "models/text-embedding-004"
34. **Sticky Note** `stickyNote` — color: "7", width: "500", height: "580"
35. **Sticky Note1** `stickyNote` — color: "7", width: "880", height: "580"
36. **Sticky Note8** `stickyNote` — width: "1080", height: "1320", content: "# AI-Powered YouTube Playlist & Video Summarization and Analysis Chat Bot

This N8N workflow transforms YouTube playlists or individual videos into interactive knowledge bases. Ins…[truncated]"
37. **Get Previous Context Intent** `redis` — operation: **get**
38. **Message Intent** `agent` — text: "= {{ $('Chat').item.json.chatInput }}", options: "[object Object]", promptType: "define"
39. **Default Intent** `code` — jsCode: "if(
  ($('Message Intent').first().json?.output?.intent == 'NONE' 
     || Object.keys($('Message Intent').first().json?.output || {}).length == 0)
  && Object.keys($('Get Previous…[truncated]"
40. **Route Message Intent** `switch` — rules: "[object Object]", options: "[object Object]"
41. **Process Status** `code` — jsCode: "// Loop over input items and add a new field called 'myNewField' to the JSON of each one
if ($input.last().json.output.intent == 'VIDEO') {
  $input.last().json.output.status = 'RE…[truncated]"
42. **Update Context Intent** `redis` — operation: **set**
43. **Qdrant Vector Store2** `vectorStoreQdrant` — prompt: "Are there any documents in the store?"
44. **Count Content** `summarize` — options: "[object Object]", fieldsToSummarize: "[object Object]"
45. **If** `if` — options: "[object Object]", conditions: "[object Object]"
46. **Update Context Intent1** `redis` — operation: **set**
47. **Playlist Limit** `if` — options: "[object Object]", conditions: "[object Object]"
48. **Handle Queries** `agent` — text: "={{ $('Chat').item.json.chatInput }}", options: "[object Object]", promptType: "define"
49. **Numb of Videos** `agent` — text: "={{ $('Chat').item.json.chatInput }}", options: "[object Object]", promptType: "define"
50. **Playlist or Video** `switch` — rules: "[object Object]", options: "[object Object]"
51. **Video HTTP Request** `httpRequest` — url: `={{ $('Update Context Intent').item.json.output.url }}`
52. **Playlist HTTP Request** `httpRequest` — url: `={{ $('Update Context Intent').item.json.output.url }}`
53. **YouTube Transcript1** `youtubeTranscripter` — videoId: "={{ $('Update Context Intent').item.json.output.id }}", continueOnFail: "true"
54. **Get Title and Desc** `code` — jsCode: "/**
 * This code node contains a modified version of play-dl,
 * which is licensed under the GNU General Public License Version 3 (GPLv3).
 *
 * Original Library Name: play-dl
 * O…[truncated]"
55. **Get Playlist Videos Data** `code` — jsCode: "/**
 * This code node contains a modified version of play-dl,
 * which is licensed under the GNU General Public License Version 3 (GPLv3).
 *
 * Original Library Name: play-dl
 * O…[truncated]"
56. **Split Out2** `splitOut` — include: "selectedOtherFields", options: "[object Object]", fieldToSplitOut: "transcript"
57. **Split Out1** `splitOut` — options: "[object Object]", fieldToSplitOut: "videos"
58. **Concatenate1** `summarize` — options: "[object Object]", fieldsToSplitBy: "youtubeId", fieldsToSummarize: "[object Object]"
59. **Limit** `limit` — maxItems: "={{ $('Update Context Intent').item.json.output.limit }}"
60. **YouTube Transcript** `youtubeTranscripter` — videoId: "={{ $json.id }}", continueOnFail: "true"
61. **Video Titles** `splitOut` — options: "[object Object]", fieldToSplitOut: "id,title"
62. **Split Out** `splitOut` — include: "selectedOtherFields", options: "[object Object]", fieldToSplitOut: "transcript"
63. **Concatenate** `summarize` — options: "[object Object]", fieldsToSplitBy: "youtubeId", fieldsToSummarize: "[object Object]"
64. **Merge** `merge` — mode: "combineBySql", query: "SELECT 
  ROW_NUMBER() AS video_number,
  input1.youtubeId, input2.title, input1.concatenated_transcript_text as transcript_text FROM input1 LEFT JOIN input2 ON input1.youtubeId = …[truncated]"
65. **Summarize & Analyze Transcript** `chainLlm` — text: "=Please analyze the given text and create a structured summary following these guidelines:

1. Break down the content into main topics using Level 2 headers (##)
2. Under each head…[truncated]", promptType: "define"
66. **Edit Fields** `set` — options: "[object Object]", assignments: "[object Object]"
67. **Delete Collection** `httpRequest` — method: **POST**, url: `=https://3114dbb7-bd13-4807-8815-c3c8784f66d6.eu-west-1-0.aws.cloud.qdrant.io/collections/{{ $('Update Context Intent').first().json.playlistID }}/points/delete`
68. **Get Videos** `code` — jsCode: "return $('Edit Fields').all();"
69. **Qdrant Vector Store** `vectorStoreQdrant` — mode: "insert", options: "[object Object]", qdrantCollection: "[object Object]"
70. **Update Context Process Done1** `redis` — operation: **set**
71. **Get Fields for Summary** `code` — jsCode: "return $('Edit Fields').all();"
72. **Full Summary** `summarize` — options: "[object Object]", fieldsToSummarize: "[object Object]"
73. **AI Agent** `agent` — text: "=Please analyze the given "Transcript summary" and create a full summary overview, following the below guidelines.

1. Provide a full descriptive break down of the content of each …[truncated]", agent: "conversationalAgent", options: "[object Object]"
  
  ## 💡 AI-Powered Ideas for Improvement
  ### Explain
This n8n workflow is designed to transform YouTube playlists or individual videos into interactive knowledge bases. It begins with a chat interface where users can provide a YouTube playlist or video URL. The workflow then processes the content by fetching video details, transcribing the audio, and summarizing the content using AI models. The summaries and embeddings are stored in a vector database for efficient retrieval. Users can interact with the workflow to get answers and insights based on the video transcripts, making it a powerful tool for video analysis and summarization.

### Demonstrate
A consultant could use this workflow to offer a service that quickly summarizes educational video content for busy professionals. This service would allow clients to gain key insights without watching lengthy videos, saving time and providing value in decision-making processes.

### Imitate
1. Import the workflow into n8n.
2. Connect your Google API for the Gemini Chat Model and Qdrant for vector storage.
3. Set up a chat trigger for users to input YouTube URLs.
4. Customize the summarization and storage parameters as needed.
5. Test the workflow by inputting a YouTube playlist URL and reviewing the generated summaries.

### Practice
Create a test YouTube playlist with 2-3 educational videos. Run the workflow and observe how it processes and summarizes each video. Experiment with different playlist sizes and video types to see how the workflow handles various content.

### WIIFM
Mastering this workflow allows you to provide a unique service that leverages AI for content summarization and analysis. This can attract clients in education, corporate training, or any field where video content is prevalent, potentially increasing your business's offerings and revenue.
  
  ## 🔧 Setup Instructions
  1. **Connect Credentials:** googlePalmApi, qdrantApi, redis.
2. **API Contracts:** Validate required headers and 2xx/4xx handling; add retries for 429/5xx.
  
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
  