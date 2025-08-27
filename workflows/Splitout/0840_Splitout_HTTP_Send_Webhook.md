# Splitout HTTP Send Webhook
## 🚀 What It Does
Calls external APIs and uses **AI** to transform or decide, then routes the result downstream.

## 💼 Business Use Case
Use as a **glue/API broker**: receive data, enrich/validate via APIs, and pass to downstream systems.

## ⚙️ How It Works
1. **Trigger:** This workflow starts with **When chat message received**.
2. **When chat message received** `chatTrigger` — options: "[object Object]"
3. **OpenAI Chat Model** `lmChatOpenAi` — model: `[object Object]`
4. **Simple Memory** `memoryBufferWindow` — configured for its default action.
5. **Knowledgebase Tool** `toolWorkflow` — name: "acuity_support_search", workflowId: "[object Object]", description: "Call this tool to query AcuityScheduling's Support Center Search API."
6. **Sticky Note** `stickyNote` — color: "7", width: "780", height: "580"
7. **Sticky Note1** `stickyNote` — color: "7", width: "700", height: "440"
8. **Sticky Note2** `stickyNote` — color: "7", width: "720", height: "600"
9. **Sticky Note3** `stickyNote` — width: "440", height: "1120", content: "## Try it Out!
### This n8n template demonstrates how you can leverage existing support site search to power your Support Chatbots and agents.

Building a support chatbot need not …[truncated]"
10. **KnowledgeBase Tool Subworkflow** `executeWorkflowTrigger` — workflowInputs: "[object Object]"
11. **AcuityScheduling Support Chatbot** `agent` — options: "[object Object]"
12. **Acuity Support Search API** `httpRequest` — method: **POST**, url: `[redacted]`
13. **Has Results?** `if` — options: "[object Object]", conditions: "[object Object]"
14. **Results to Items** `splitOut` — options: "[object Object]", fieldToSplitOut: "results[0].hits"
15. **Empty Response** `set` — options: "[object Object]", assignments: "[object Object]"
16. **Extract Relevant Fields** `set` — options: "[object Object]", assignments: "[object Object]"
17. **Aggregate Response** `aggregate` — options: "[object Object]", aggregate: "aggregateAllItemData", destinationFieldName: "response"

## 💡 AI-Powered Ideas for Improvement
### Explain
This n8n workflow creates a support chatbot for AcuityScheduling by connecting a chat interface with an AI model and a support knowledgebase. When a user sends a message, the chatbot uses AI to understand the query and fetches relevant support articles from the AcuityScheduling Support Center Search API to provide accurate answers. If relevant results are found, they are extracted and formatted before being sent back to the user.

### Demonstrate
A business owner might use this workflow to reduce the burden on customer support teams by automating responses to common queries, ensuring users get immediate and accurate help from a chatbot.

### Imitate
1. Import the workflow into n8n.
2. Connect your OpenAI and AcuityScheduling API credentials.
3. Customize the chat trigger and AI model settings.
4. Adjust the knowledgebase tool to fit your support portal.
5. Test the workflow by sending a query to see how it responds.

### Practice
Create a test environment with a few sample queries related to AcuityScheduling. Run the workflow and observe how it fetches and formats results from the support center. Adjust the workflow to improve response accuracy and relevance.

### WIIFM
Mastering this workflow can significantly enhance customer support efficiency, reduce response times, and improve user satisfaction. Offering automated support solutions can attract new clients and provide a competitive edge in the AI automation business.

## 🔧 Setup Instructions
1. **Connect Credentials:** openAiApi.
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
