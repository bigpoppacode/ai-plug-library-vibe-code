# Chat With Github API Documentation  RAG Powered Chatbot With Pinecone & Openai

## 🚀 What It Does
This workflow automates a process involving manualTrigger, httpRequest, vectorStorePinecone.

## 💼 Business Use Case
Use it to automate research, content creation, or data analysis. It saves hours of manual work.

## ⚙️ How It Works
1.  **Trigger:** This workflow starts with a **When clicking ‘Test workflow’** node.
2. **Step 1: When clicking ‘Test workflow’ (manualTrigger)** - This step performs a key action in the workflow.
3. **Step 2: HTTP Request (httpRequest)** - This step performs a key action in the workflow.
4. **Step 3: Pinecone Vector Store (vectorStorePinecone)** - This step performs a key action in the workflow.
5. **Step 4: Default Data Loader (documentDefaultDataLoader)** - This step performs a key action in the workflow.
6. **Step 5: Recursive Character Text Splitter (textSplitterRecursiveCharacterTextSplitter)** - This step performs a key action in the workflow.
7. **Step 6: When chat message received (chatTrigger)** - This step performs a key action in the workflow.
8. **Step 7: AI Agent (agent)** - This step performs a key action in the workflow.
9. **Step 8: OpenAI Chat Model (lmChatOpenAi)** - This step performs a key action in the workflow.
10. **Step 9: Window Buffer Memory (memoryBufferWindow)** - This step performs a key action in the workflow.
11. **Step 10: Vector Store Tool (toolVectorStore)** - This step performs a key action in the workflow.
12. **Step 11: OpenAI Chat Model1 (lmChatOpenAi)** - This step performs a key action in the workflow.
13. **Step 12: Sticky Note (stickyNote)** - This step performs a key action in the workflow.
14. **Step 13: Sticky Note1 (stickyNote)** - This step performs a key action in the workflow.
15. **Step 14: Generate User Query Embedding (embeddingsOpenAi)** - This step performs a key action in the workflow.
16. **Step 15: Pinecone Vector Store (Querying) (vectorStorePinecone)** - This step performs a key action in the workflow.
17. **Step 16: Generate Embeddings (embeddingsOpenAi)** - This step performs a key action in the workflow.
18. **Step 17: Sticky Note2 (stickyNote)** - This step performs a key action in the workflow.

## 💡 AI-Powered Ideas for Improvement
### Explain
This n8n workflow automates interactions with the GitHub OpenAPI specification, allowing users to query the API documentation through a chat interface. It retrieves data, processes it, and generates responses based on user queries using AI, specifically OpenAI.

### Demonstrate
A developer might use this workflow to create a chatbot that helps users understand GitHub's API. Instead of manually searching through documentation, users can ask questions and receive instant, relevant answers, improving efficiency and user experience.

### Imitate
1. **Set up n8n**: Install or access your n8n instance.
2. **Create a new workflow**: Start a new workflow with a Manual Trigger.
3. **Add an HTTP Request node**: Configure it to fetch the GitHub OpenAPI JSON.
4. **Insert a Pinecone node**: Set it to store the fetched data.
5. **Set up a chat trigger**: Enable user queries.
6. **Add AI and response nodes**: Integrate OpenAI to generate responses based on user queries.
7. **Test the workflow**: Execute and refine based on results.

### Practice
Try modifying the workflow to answer questions about a different API, such as Twitter's API. Adjust the HTTP Request node to fetch the new API documentation and test the chat interface with relevant queries.

### WIIFM
Mastering this workflow allows you to provide valuable automation solutions to clients, enhancing their user experience with instant documentation access. This skill can lead to consulting opportunities, increased income, and a competitive edge in the automation market.

## 🔧 Setup Instructions
1. **Connect Credentials:** OpenAI, Google Sheets, Slack, and other nodes must be authenticated.
2. **Customize Core Logic:** Review "When clicking ‘Test workflow’" and "Sticky Note2" for IDs, table names, and URLs.
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
