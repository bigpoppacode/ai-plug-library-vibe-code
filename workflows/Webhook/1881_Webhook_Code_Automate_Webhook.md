# Webhook Code Automate Webhook
## 🚀 What It Does
Monitors events, processes them, and **notifies** people/apps (Slack/Email) with structured updates.

## 💼 Business Use Case
Great for **content, summarization, triage, or decisioning** where AI adds speed and consistency.

## ⚙️ How It Works
1. **Trigger:** Runs on a **schedule** (e.g., `[object Object]`).
2. **Embeddings Google Gemini** `embeddingsGoogleGemini` — modelName: "models/text-embedding-004"
3. **Sticky Note1** `stickyNote` — color: "3", width: "660", height: "960"
4. **Sticky Note3** `stickyNote` — color: "4", width: "840", height: "540"
5. **Schedule Trigger** `scheduleTrigger` — rule: "[object Object]"
6. **Sticky Note4** `stickyNote` — color: "4", width: "620", height: "360"
7. **Sticky Note5** `stickyNote` — color: "4", width: "840", height: "580"
8. **Sticky Note** `stickyNote` — color: "4", width: "640", height: "400"
9. **Sticky Note6** `stickyNote` — color: "6", width: "2380", height: "400"
10. **Sticky Note7** `stickyNote` — color: "6", width: "2400", height: "1220"
11. **Sticky Note8** `stickyNote` — color: "6", width: "2280", height: "560"
12. **Sticky Note9** `stickyNote` — color: "2", width: "260", height: "80"
13. **Google Gemini Chat Model** `lmChatGoogleGemini` — options: "[object Object]", modelName: "models/gemini-2.0-flash"
14. **Google Drive - Resume CV File Created** `googleDriveTrigger` — event: "fileCreated", options: "[object Object]", pollTimes: "[object Object]"
15. **Google Drive - Resume CV File Updated** `googleDriveTrigger` — event: "fileUpdated", options: "[object Object]", pollTimes: "[object Object]"
16. **CV File Data Loader** `documentDefaultDataLoader` — options: "[object Object]", dataType: "binary"
17. **CV content - Recursive Character Text Splitter** `textSplitterRecursiveCharacterTextSplitter` — options: "[object Object]", chunkOverlap: "100"
18. **Chat API - webhook** `webhook` — method: **POST**, path: `/chat`
19. **Chat Memory -  Window Buffer** `memoryBufferWindow` — sessionKey: "={{ $json.body.chatInput }}", sessionIdType: "customKey"
20. **Resume lookup : Vector Store Tool** `toolVectorStore` — name: "seanrag", topK: "5", description: "Retrieve information about seanrag"
21. **Resume Vector Store (Retrieval)** `vectorStorePinecone` — options: "[object Object]", pineconeIndex: "[object Object]"
22. **Resume Embeddings Google Gemini (retrieval)** `embeddingsGoogleGemini` — modelName: "models/text-embedding-004"
23. **Resume Google Gemini Chat Model (retrieval)** `lmChatGoogleGemini` — options: "[object Object]", modelName: "models/gemini-2.0-flash-exp"
24. **Save Conversation API - Webhook** `webhook` — method: **POST**, path: `/update-conversation`
25. **Sticky Note10** `stickyNote` — color: "2", width: "260", height: "80"
26. **Sticky Note11** `stickyNote` — color: "2", width: "260", height: "80"
27. **NocoDB - get all todays conversation** `nocoDb` — operation: **getAll**, table: `mk9sfu217ou392s`
28. **Download CV File From Google Drive** `googleDrive` — operation: **download**
29. **Personal CV AI Agent Assistant** `agent` — text: "={{ $json.body.chatInput }}", options: "[object Object]", promptType: "define"
30. **Save Conversation - NocoDB** `nocoDb` — operation: **create**, table: `mk9sfu217ou392s`
31. **Group Conversation By Unique Session + Email - Code** `code` — jsCode: " 
const list = $input.all();
const groupedData = {};

list.forEach(item => {
  const key = `${item.json.sessionid}_${item.json.email}`;
  if (!groupedData[key]) {
    groupedData[k…[truncated]"
32. **Pinecone - Vector Store forr CV Content** `vectorStorePinecone` — mode: "insert", options: "[object Object]", pineconeIndex: "[object Object]"
33. **Chat API Response - Webhook** `respondToWebhook` — options: "[object Object]", respondWith: "allIncomingItems"
34. **Save Conversation API Webhook - Response** `respondToWebhook` — options: "[object Object]", respondWith: "allIncomingItems"
35. **Format HTML Display  For email** `html` — html: "<!DOCTYPE html>

<html>
<head>
  <meta charset="UTF-8" />
</head> 
<body>
  <div class="container">
    <h1>Conversation with AI `seanlon.site`: </h1>
    <p class="conversation">
…[truncated]"
36. **Send Report To Gmail** `gmail` — sendTo: "lseanlon@gmail.com", message: "={{$json.html}}", options: "[object Object]"

## 💡 AI-Powered Ideas for Improvement
**Explain:** This workflow creates a personal CV chatbot using n8n. It tracks changes in a Google Drive folder for CVs, processes them into a vector database (Pinecone), and uses Google Gemini AI to interact with users asking about the CV. It logs conversations in a database (NocoDB) and sends daily summaries via email.

**Demonstrate:** A consultant could use this workflow to automate the process of handling CV inquiries, ensuring quick and accurate responses based on the most updated data, thus enhancing client interactions.

**Imitate:** 1. Set up Google Drive and Pinecone accounts. 2. Customize the workflow to monitor your Google Drive folder. 3. Configure n8n with your Google and Pinecone credentials. 4. Test the workflow with a sample CV to ensure it updates and responds correctly.

**Practice:** Create a test CV in your Google Drive folder and run the workflow. Engage with the chatbot and check if the conversation is logged in NocoDB and if you receive the email summary.

**WIIFM:** Mastering this workflow enables you to offer AI-driven CV chatbots to clients, enhancing their recruitment processes. This can attract new customers and increase your revenue by providing innovative automation solutions.

## 🔧 Setup Instructions
1. **Connect Credentials:** googlePalmApi, googleDriveOAuth2Api, pineconeApi, nocoDbApiToken, gmailOAuth2.
2. **Cron/Schedule:** Confirm timezone and cadence; start with a test window (e.g., every 5 minutes) then scale.
3. **Notification Targets:** Confirm channel/email IDs and that the bot/app is authorized to post.

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
